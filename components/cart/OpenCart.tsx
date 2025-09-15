'use client';

import { useState } from 'react';
import { useCart } from './CartContext';
import CartModal from './CartModal';

export default function OpenCart() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.823-6.823a.75.75 0 00-.25-.834l-2.44-1.823a.75.75 0 00-.834.25l-2.44 1.823a.75.75 0 00.25.834l1.823 6.823H7.5z"
          />
        </svg>

        {cartCount > 0 && (
          <div className="absolute right-0 top-0 -mr-2 -mt-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white">
            {cartCount}
          </div>
        )}
      </button>
      <CartModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
