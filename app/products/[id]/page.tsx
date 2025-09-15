'use client';

import Link from 'next/link';
import { useCart } from '@/components/cart/CartContext';
import { Toaster, toast } from 'sonner';
import { PrismaClient, Product } from '@prisma/client';
import { useEffect, useState } from 'react';

const prisma = new PrismaClient();

async function getProduct(id: string) {
  const product = await prisma.product.findUnique({ where: { id } });
  return product;
}

export default function ProductDetailPage({
  params
}: {
  params: { id: string };
}) {
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProduct(params.id).then(setProduct);
  }, [params.id]);

  if (!product) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        Loading...
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: Array.isArray(product.images) ? product.images[0] : undefined,
      type: 'product'
    });
    toast.success(`${product.name} has been added to your cart.`);
  };

  return (
    <>
      <Toaster />
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src={
                  Array.isArray(product.images)
                    ? product.images[0]
                    : '/images/placeholder-camera.jpg'
                }
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* Thumbnails could go here */}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>
            <p className="mt-4 text-3xl text-gray-900">
              ${product.price.toFixed(2)}
            </p>
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
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
          </div>
        </div>
        <div className="mt-16">
          <Link href="/products">
            <div className="text-indigo-600 hover:text-indigo-500">
              &larr; Back to all cameras
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
