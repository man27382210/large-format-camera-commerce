'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

export async function createProduct(formData: FormData) {
  try {
    const newProduct = await prisma.product.create({
      data: {
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        price: parseFloat(formData.get('price') as string),
        stock: parseInt(formData.get('stock') as string),
        // For now, we'll use a placeholder for images
        images: ['/images/placeholder-camera.jpg']
      }
    });
  } catch (error) {
    console.error('Failed to create product:', error);
    // You might want to return an error message here
  }

  // Revalidate the products page to show the new product
  revalidatePath('/admin/products');
  revalidatePath('/products');
  // Redirect back to the main products list
  redirect('/admin/products');
}

export async function updateProduct(formData: FormData) {
  const id = formData.get('id') as string;

  try {
    await prisma.product.update({
      where: { id },
      data: {
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        price: parseFloat(formData.get('price') as string),
        stock: parseInt(formData.get('stock') as string)
      }
    });
  } catch (error) {
    console.error('Failed to update product:', error);
    // You might want to return an error message here
  }

  revalidatePath(`/admin/products`);
  revalidatePath(`/products/${id}`);
  redirect('/admin/products');
}

export async function deleteProduct(formData: FormData) {
  const id = formData.get('id') as string;

  try {
    await prisma.product.delete({
      where: { id }
    });
  } catch (error) {
    console.error('Failed to delete product:', error);
    // You might want to return an error message here
  }

  revalidatePath('/admin/products');
  revalidatePath('/products');
  redirect('/admin/products');
}

export async function createCourse(formData: FormData) {
  try {
    await prisma.course.create({
      data: {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        price: parseFloat(formData.get('price') as string)
      }
    });
  } catch (error) {
    console.error('Failed to create course:', error);
  }

  revalidatePath('/admin/courses');
  revalidatePath('/courses');
  redirect('/admin/courses');
}

export async function updateCourse(formData: FormData) {
  const id = formData.get('id') as string;

  try {
    await prisma.course.update({
      where: { id },
      data: {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        price: parseFloat(formData.get('price') as string)
      }
    });
  } catch (error) {
    console.error('Failed to update course:', error);
  }

  revalidatePath('/admin/courses');
  revalidatePath(`/courses/${id}`);
  redirect('/admin/courses');
}

export async function deleteCourse(formData: FormData) {
  const id = formData.get('id') as string;

  try {
    await prisma.course.delete({
      where: { id }
    });
  } catch (error) {
    console.error('Failed to delete course:', error);
  }

  revalidatePath('/admin/courses');
  revalidatePath('/courses');
  redirect('/admin/courses');
}

export async function getAllOrders() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: true // Include user details
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    return orders;
  } catch (error) {
    console.error('Failed to fetch all orders:', error);
    return [];
  }
}
