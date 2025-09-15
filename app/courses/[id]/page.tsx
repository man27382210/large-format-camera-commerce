'use client';

import Link from 'next/link';
import { useCart } from '@/components/cart/CartContext';
import { Toaster, toast } from 'sonner';
import { PrismaClient, Course, CourseVideo } from '@prisma/client';
import { useEffect, useState } from 'react';

const prisma = new PrismaClient();

interface CourseWithVideos extends Course {
  videos: CourseVideo[];
}

async function getCourse(id: string) {
  const course = await prisma.course.findUnique({
    where: { id },
    include: { videos: { orderBy: { order: 'asc' } } }
  });
  return course;
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  const [course, setCourse] = useState<CourseWithVideos | null>(null);

  useEffect(() => {
    getCourse(params.id).then(setCourse);
  }, [params.id]);

  if (!course) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        Loading...
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: course.id,
      name: course.title,
      price: course.price,
      image: '/images/placeholder-camera.jpg', // Placeholder
      type: 'course'
    });
    toast.success(`${course.title} has been added to your cart.`);
  };

  return (
    <>
      <Toaster />
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Course Info & Curriculum */}
          <div className="md:col-span-2">
            <div className="aspect-h-9 aspect-w-16 w-full overflow-hidden rounded-lg bg-gray-200 mb-8">
              <img
                src={'/images/placeholder-camera.jpg'} // Placeholder
                alt={course.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {course.title}
            </h1>
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">{course.description}</p>
            </div>
          </div>

          {/* Purchase Card & Curriculum */}
          <div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-3xl text-gray-900">
                ${course.price.toFixed(2)}
              </p>
              <button
                onClick={handleAddToCart}
                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">
                  Course Curriculum
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {course.videos.map((video) => (
                    <li key={video.id} className="flex items-start">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>{video.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <Link href="/courses">
            <div className="text-indigo-600 hover:text-indigo-500">
              &larr; Back to all courses
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
