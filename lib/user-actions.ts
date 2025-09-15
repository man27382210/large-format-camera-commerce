'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUserOrders(userId: string) {
  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: userId
      },
      include: {
        orderItems: {
          include: {
            product: true, // Include product details
            course: true // Include course details
          }
        }
      },
      orderBy: {
        createdAt: 'desc' // Show the most recent orders first
      }
    });
    return orders;
  } catch (error) {
    console.error('Failed to fetch user orders:', error);
    return []; // Return an empty array on error
  }
}

export async function getUserCourses(userId: string) {
  try {
    const enrollments = await prisma.enrollment.findMany({
      where: {
        userId: userId
      },
      include: {
        course: true // Include the full course details
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    // Return just the course objects
    return enrollments.map((enrollment) => enrollment.course);
  } catch (error) {
    console.error('Failed to fetch user courses:', error);
    return [];
  }
}
