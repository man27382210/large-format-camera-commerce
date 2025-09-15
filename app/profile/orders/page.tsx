import { auth } from '@/auth';
import { getUserOrders } from '@/lib/user-actions';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function OrderHistoryPage() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect('/login');
  }

  const orders = await getUserOrders(session.user.id);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
        Order History
      </h1>
      <div className="space-y-8">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order.id}
              className="rounded-lg border bg-white p-6 shadow-sm"
            >
              <div className="flex justify-between border-b pb-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Order Placed</p>
                  <p className="font-medium text-gray-900">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total</p>
                  <p className="font-medium text-gray-900">
                    ${order.totalAmount.toFixed(2)}
                  </p>
                </div>
              </div>
              <ul role="list" className="divide-y divide-gray-200">
                {order.orderItems.map((item) => (
                  <li key={item.id} className="flex py-4">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={
                          item.product?.images?.toString() ||
                          '/images/placeholder-camera.jpg'
                        }
                        alt={item.product?.name || item.course?.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          {item.product?.name || item.course?.title || 'Item'}
                        </h3>
                        <p className="ml-4">${item.price.toFixed(2)}</p>
                      </div>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">
            <p>You haven't placed any orders yet.</p>
            <Link href="/">
              <div className="mt-4 text-indigo-600 hover:text-indigo-500">
                Start Shopping &rarr;
              </div>
            </Link>
          </div>
        )}
      </div>
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
