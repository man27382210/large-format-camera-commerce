'use client';

import { useCart } from '@/components/cart/CartContext';
import { Course, CourseVideo } from '@prisma/client';
import { toast } from 'sonner';

interface CourseWithVideos extends Course {
  videos: CourseVideo[];
}

interface AddCourseToCartButtonProps {
  course: CourseWithVideos;
}

export default function AddCourseToCartButton({ course }: AddCourseToCartButtonProps) {
  const { addToCart } = useCart();

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
  );
}