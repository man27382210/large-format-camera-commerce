'use client';

import { useCart } from '@/components/cart/CartContext';
import { Product } from '@prisma/client';
import { toast } from 'sonner';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: Array.isArray(product.images) ? (product.images[0] as string) : undefined,
      type: 'product'
    });
    toast.success(`${product.name} has been added to your cart.`);
  };

  return (
    <div className="mt-10">
      {product.stock > 0 ? (
        <button
          onClick={handleAddToCart}
          className="flex w-full max-w-xs items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add to cart
        </button>
      ) : (
        <button
          disabled
          className="flex w-full max-w-xs items-center justify-center rounded-md border border-transparent bg-gray-400 py-3 px-8 text-base font-medium text-white cursor-not-allowed"
        >
          Out of stock
        </button>
      )}
    </div>
  );
}