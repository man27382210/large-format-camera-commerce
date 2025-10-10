import AddToCartButton from '@/components/AddToCartButton';
import { getProduct } from '@/lib/product-actions';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Toaster } from 'sonner';

export default async function ProductDetailPage({
  params
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

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
                    ? (product.images[0] as string)
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
            <AddToCartButton product={product} />
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
