'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  type: 'product' | 'course';
}

export async function createOrder(userId: string, cartItems: CartItem[]) {
  try {
    const totalAmount = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Use a transaction to ensure all database operations succeed or fail together
    const newOrder = await prisma.$transaction(async (tx) => {
      const order = await tx.order.create({
        data: {
          userId,
          totalAmount,
          orderItems: {
            create: cartItems.map((item) => ({
              quantity: item.quantity,
              price: item.price,
              productId: item.type === 'product' ? item.id : undefined,
              courseId: item.type === 'course' ? item.id : undefined
            }))
          }
        },
        include: {
          orderItems: true
        }
      });

      // Create enrollments for any courses purchased
      const courseItems = cartItems.filter((item) => item.type === 'course');
      for (const courseItem of courseItems) {
        await tx.enrollment.create({
          data: {
            userId,
            courseId: courseItem.id
          }
        });
      }

      return order;
    });

    return { success: true, order: newOrder };
  } catch (error) {
    console.error('Failed to create order:', error);
    return { success: false, error: 'Failed to create order.' };
  }
}
