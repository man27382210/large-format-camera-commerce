'use client';

import { useCart } from '@/components/cart/CartContext';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import { createOrder } from '@/lib/order-actions';

export default function CheckoutPage() {
  const { data: session, status } = useSession();
  const { cartItems, cartCount, clearCart } = useCart();
  const router = useRouter();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Redirect if user is not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  const handlePlaceOrder = async () => {
    if (session?.user?.id) {
      const result = await createOrder(session.user.id, cartItems);
      if (result.success) {
        toast.success('Order placed successfully!');
        clearCart();
        // Redirect after a short delay to allow toast to be seen
        setTimeout(() => {
          router.push('/profile/orders');
        }, 1000);
      } else {
        toast.error('There was an issue placing your order.');
      }
    }
  };

  if (status === 'loading' || !session) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Toaster />
      <div className="container mx-auto py-12 px-4">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
          Checkout
        </h1>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Order Summary</h2>
              <ul role="list" className="mt-6 divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex py-4">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Total</h2>
              <div className="mt-6 flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Shipping and taxes will be calculated at the next step.
              </p>
              <button
                onClick={handlePlaceOrder}
                disabled={cartCount === 0}
                className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white shadow-sm hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
