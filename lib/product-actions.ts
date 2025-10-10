'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getProduct(id: string) {
  const product = await prisma.product.findUnique({ where: { id } });
  return product;
}

export async function getProducts() {
  const products = await prisma.product.findMany();
  return products;
}