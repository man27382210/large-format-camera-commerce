import AddCourseToCartButton from '@/components/AddCourseToCartButton';
import { getCourse } from '@/lib/course-actions';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Toaster } from 'sonner';

export default async function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = await getCourse(params.id);

  if (!course) {
    notFound();
  }

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
            <AddCourseToCartButton course={course} />
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
