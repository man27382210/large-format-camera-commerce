import { auth } from '@/auth';
import { getUserCourses } from '@/lib/user-actions';
import Link from 'next/link';
import { redirect } from 'next/navigation';

// We'll need a function to get a single course's details
async function getCourseDetails(courseId: string) {
  // In a real app, you'd fetch this from the DB
  return {
    id: courseId,
    title: 'Introduction to Large Format Photography',
    videos: [
      { id: '1', title: '1. Introduction', videoUrl: 'https://vimeo.com/...' },
      { id: '2', title: '2. Camera Types', videoUrl: 'https://vimeo.com/...' },
      { id: '3', title: '3. Lenses and Shutters', videoUrl: 'https://vimeo.com/...' }
    ]
  };
}

export default async function CourseWatchPage({
  params
}: {
  params: { id: string };
}) {
  const session = await auth();
  if (!session?.user?.id) {
    redirect('/login');
  }

  const userCourses = await getUserCourses(session.user.id);
  const isEnrolled = userCourses.some((course) => course.id === params.id);

  if (!isEnrolled) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p className="mt-4 text-gray-600">
          You are not enrolled in this course.
        </p>
        <Link href="/courses">
          <div className="mt-6 text-indigo-600 hover:text-indigo-500">
            Browse Courses
          </div>
        </Link>
      </div>
    );
  }

  const course = await getCourseDetails(params.id);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
        {course.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="aspect-video w-full rounded-lg bg-black flex items-center justify-center">
            <p className="text-white">Video Player Placeholder</p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">
              {course.videos[0]?.title || 'No video available'}
            </h2>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">
            Course Content
          </h3>
          <ul className="mt-4 space-y-2">
            {course.videos.length > 0 ? (
              course.videos.map((video) => (
                <li key={video.id}>
                  <Link href="#">
                    <div className="block rounded-md border border-gray-200 p-4 hover:bg-gray-50">
                      {video.title}
                    </div>
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-gray-500">No videos available</li>
            )}
          </ul>
        </div>
      </div>
      <div className="mt-16">
        <Link href="/profile/my-courses">
          <div className="text-indigo-600 hover:text-indigo-500">
            &larr; Back to My Courses
          </div>
        </Link>
      </div>
    </div>
  );
}
