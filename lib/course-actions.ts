'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getCourse(id: string) {
  const course = await prisma.course.findUnique({
    where: { id },
    include: { videos: { orderBy: { order: 'asc' } } }
  });
  return course;
}

export async function getCourses() {
  const courses = await prisma.course.findMany();
  return courses;
}