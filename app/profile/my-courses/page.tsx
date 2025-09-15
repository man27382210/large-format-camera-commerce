import { auth } from '@/auth';
import { getUserCourses } from '@/lib/user-actions';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function MyCoursesPage() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect('/login');
  }

  const courses = await getUserCourses(session.user.id);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
        My Courses
      </h1>
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {courses.map((course) => (
            <Link key={course.id} href={`/courses/watch/${course.id}`}>
              <div className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={'/images/placeholder-camera.jpg'} // Placeholder
                    alt={course.title}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{course.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  Start Watching
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p>You have not purchased any courses yet.</p>
          <Link href="/courses">
            <div className="mt-4 text-indigo-600 hover:text-indigo-500">
              Browse Courses &rarr;
            </div>
          </Link>
        </div>
      )}
      <div className="mt-16">
        <Link href="/profile">
          <div className="text-indigo-600 hover:text-indigo-500">
            &larr; Back to Profile
          </div>
        </Link>
      </div>
    </div>
  );
}
