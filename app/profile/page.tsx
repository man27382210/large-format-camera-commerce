import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function ProfilePage() {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">User Profile</h1>
        <div className="space-y-4 border-b pb-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <p className="mt-1 text-lg text-gray-900">{session.user?.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <p className="mt-1 text-lg text-gray-900">{session.user?.email}</p>
          </div>
        </div>
        <div className="space-y-4">
          <Link href="/profile/orders">
            <div className="block w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-center text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              View Order History
            </div>
          </Link>
          <Link href="/profile/my-courses">
            <div className="block w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-center text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              View My Courses
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
