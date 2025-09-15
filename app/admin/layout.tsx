import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // Redirect if user is not logged in or is not an admin
  if (!session || session.user?.role !== 'ADMIN') {
    redirect('/');
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <nav>
          <ul>
            <li>
              <Link href="/admin/dashboard">
                <div className="block py-2 px-4 rounded hover:bg-gray-700">
                  Dashboard
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admin/products">
                <div className="block py-2 px-4 rounded hover:bg-gray-700">
                  Manage Products
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admin/courses">
                <div className="block py-2 px-4 rounded hover:bg-gray-700">
                  Manage Courses
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admin/orders">
                <div className="block py-2 px-4 rounded hover:bg-gray-700">
                  Manage Orders
                </div>
              </Link>
            </li>
            {/* Add links to manage orders, etc. here */}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-100">{children}</main>
    </div>
  );
}
