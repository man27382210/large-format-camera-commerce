import { NextResponse } from 'next/server';
import {
    Cart,
    CartItem,
    Collection,
    Image,
    Menu,
    Money,
    Page,
    Product,
    ProductVariant
} from './types';

// In-memory mock database. This avoids any external ecommerce provider.
// Note: This persists for the life of the dev process; it is fine for local usage.

type MockVariant = ProductVariant & { productId: string };

type MockProduct = Product & {
  variants: MockVariant[];
};

const usd = (amount: string): Money => ({ amount, currencyCode: 'USD' });

const makeImage = (seed: string): Image => ({
  url: `https://picsum.photos/seed/${encodeURIComponent(seed)}/800/800`,
  altText: seed,
  width: 800,
  height: 800
});

const nowIso = () => new Date().toISOString();

// Sample products
const mockProducts: MockProduct[] = [
  {
    id: 'prod-large-format-1',
    handle: 'large-format-classic',
    availableForSale: true,
    title: 'Large Format Classic',
    description: 'A classic large format camera for studio perfection.',
    descriptionHtml: '<p>A classic large format camera for studio perfection.</p>',
    options: [
      { id: 'opt-1', name: 'Lens', values: ['90mm', '150mm'] }
    ],
    priceRange: {
      minVariantPrice: usd('1299.00'),
      maxVariantPrice: usd('1699.00')
    },
    variants: [
      {
        id: 'variant-prod-large-format-1-90',
        title: '90mm',
        availableForSale: true,
        selectedOptions: [{ name: 'Lens', value: '90mm' }],
        price: usd('1299.00'),
        productId: 'prod-large-format-1'
      },
      {
        id: 'variant-prod-large-format-1-150',
        title: '150mm',
        availableForSale: true,
        selectedOptions: [{ name: 'Lens', value: '150mm' }],
        price: usd('1699.00'),
        productId: 'prod-large-format-1'
      }
    ],
    featuredImage: makeImage('large-format-classic'),
    images: [makeImage('large-format-classic-1'), makeImage('large-format-classic-2')],
    seo: { title: 'Large Format Classic', description: 'Studio classic.' },
    tags: [],
    updatedAt: nowIso()
  },
  {
    id: 'prod-field-2',
    handle: 'field-compact',
    availableForSale: true,
    title: 'Field Compact',
    description: 'A lightweight field camera built for travel.',
    descriptionHtml: '<p>A lightweight field camera built for travel.</p>',
    options: [{ id: 'opt-2', name: 'Finish', values: ['Walnut', 'Cherry'] }],
    priceRange: {
      minVariantPrice: usd('999.00'),
      maxVariantPrice: usd('1099.00')
    },
    variants: [
      {
        id: 'variant-prod-field-2-walnut',
        title: 'Walnut',
        availableForSale: true,
        selectedOptions: [{ name: 'Finish', value: 'Walnut' }],
        price: usd('999.00'),
        productId: 'prod-field-2'
      },
      {
        id: 'variant-prod-field-2-cherry',
        title: 'Cherry',
        availableForSale: true,
        selectedOptions: [{ name: 'Finish', value: 'Cherry' }],
        price: usd('1099.00'),
        productId: 'prod-field-2'
      }
    ],
    featuredImage: makeImage('field-compact'),
    images: [makeImage('field-compact-1')],
    seo: { title: 'Field Compact', description: 'Travel light.' },
    tags: [],
    updatedAt: nowIso()
  },
  {
    id: 'prod-monorail-3',
    handle: 'monorail-pro',
    availableForSale: true,
    title: 'Monorail Pro',
    description: 'Ultimate precision for large format pros.',
    descriptionHtml: '<p>Ultimate precision for large format pros.</p>',
    options: [],
    priceRange: {
      minVariantPrice: usd('2199.00'),
      maxVariantPrice: usd('2199.00')
    },
    variants: [
      {
        id: 'variant-prod-monorail-3-base',
        title: 'Base',
        availableForSale: true,
        selectedOptions: [],
        price: usd('2199.00'),
        productId: 'prod-monorail-3'
      }
    ],
    featuredImage: makeImage('monorail-pro'),
    images: [makeImage('monorail-pro-1')],
    seo: { title: 'Monorail Pro', description: 'Ultimate precision.' },
    tags: [],
    updatedAt: nowIso()
  }
];

const productByHandle = new Map<string, MockProduct>(
  mockProducts.map((p) => [p.handle, p])
);
const productByVariantId = new Map<string, MockProduct>();
mockProducts.forEach((p) => p.variants.forEach((v) => productByVariantId.set(v.id, p)));

const mockCollections: Collection[] = [
  {
    handle: '',
    title: 'All',
    description: 'All products',
    seo: { title: 'All', description: 'All products' },
    path: '/search',
    updatedAt: nowIso()
  },
  {
    handle: 'hidden-homepage-featured-items',
    title: 'Featured',
    description: 'Homepage featured items',
    seo: { title: 'Featured', description: 'Homepage featured items' },
    path: '/search/hidden-homepage-featured-items',
    updatedAt: nowIso()
  },
  {
    handle: 'hidden-homepage-carousel',
    title: 'Carousel',
    description: 'Homepage carousel items',
    seo: { title: 'Carousel', description: 'Homepage carousel items' },
    path: '/search/hidden-homepage-carousel',
    updatedAt: nowIso()
  }
];

const collectionItems: Record<string, Product[]> = {
  'hidden-homepage-featured-items': [
    mockProducts[0],
    mockProducts[1],
    mockProducts[2]
  ],
  'hidden-homepage-carousel': [
    mockProducts[1],
    mockProducts[2]
  ]
};

const mockPages: Page[] = [
  {
    id: 'page-about',
    title: 'About',
    handle: 'about',
    body: '<p>About our large-format camera store.</p>',
    bodySummary: 'About our store.',
    seo: { title: 'About', description: 'About our store' },
    createdAt: nowIso(),
    updatedAt: nowIso()
  }
];

const mockMenu: Menu[] = [
  { title: 'Home', path: '/' },
  { title: 'All', path: '/search' },
  { title: 'About', path: '/about' }
];

const carts = new Map<string, Cart>();

const computeCartTotals = (cart: Cart) => {
  const subtotal = cart.lines.reduce((sum, line) => {
    const price = parseFloat(line.cost.totalAmount.amount);
    return sum + price;
  }, 0);

  cart.cost.subtotalAmount = usd(subtotal.toFixed(2));
  cart.cost.totalAmount = usd(subtotal.toFixed(2));
  cart.cost.totalTaxAmount = usd('0.00');
  cart.totalQuantity = cart.lines.reduce((n, l) => n + l.quantity, 0);
};

const createEmptyCart = (id: string): Cart => ({
  id,
  checkoutUrl: '/checkout',
  cost: {
    subtotalAmount: usd('0.00'),
    totalAmount: usd('0.00'),
    totalTaxAmount: usd('0.00')
  },
  lines: [],
  totalQuantity: 0
});

export async function createCart(): Promise<Cart> {
  const id = `mock-cart-${Math.random().toString(36).slice(2)}`;
  const cart = createEmptyCart(id);
  carts.set(id, cart);
  return cart;
}

export async function getCart(cartId: string): Promise<Cart | undefined> {
  return carts.get(cartId);
}

const findVariant = (merchandiseId: string): { product: MockProduct; variant: MockVariant } | undefined => {
  const product = productByVariantId.get(merchandiseId);
  if (!product) return undefined;
  const variant = product.variants.find((v) => v.id === merchandiseId)!;
  return { product, variant };
};

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const cart = carts.get(cartId) ?? createEmptyCart(cartId);
  for (const line of lines) {
    const match = findVariant(line.merchandiseId);
    if (!match) continue;
    const { product, variant } = match;
    const existing = cart.lines.find((l) => l.merchandise.id === variant.id);
    if (existing) {
      existing.quantity += line.quantity;
      existing.cost.totalAmount = usd(
        (parseFloat(variant.price.amount) * existing.quantity).toFixed(2)
      );
    } else {
      const newItem: CartItem = {
        id: `line-${Math.random().toString(36).slice(2)}`,
        quantity: line.quantity,
        cost: { totalAmount: usd((parseFloat(variant.price.amount) * line.quantity).toFixed(2)) },
        merchandise: {
          id: variant.id,
          title: variant.title,
          selectedOptions: variant.selectedOptions,
          product: {
            id: product.id,
            handle: product.handle,
            title: product.title,
            featuredImage: product.featuredImage
          }
        }
      };
      cart.lines.push(newItem);
    }
  }
  computeCartTotals(cart);
  carts.set(cartId, cart);
  return cart;
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<Cart> {
  const cart = carts.get(cartId) ?? createEmptyCart(cartId);
  cart.lines = cart.lines.filter((l) => !lineIds.includes(l.id || ''));
  computeCartTotals(cart);
  carts.set(cartId, cart);
  return cart;
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const cart = carts.get(cartId) ?? createEmptyCart(cartId);
  for (const patch of lines) {
    const line = cart.lines.find((l) => l.id === patch.id);
    if (!line) continue;
    if (patch.quantity <= 0) {
      cart.lines = cart.lines.filter((l) => l.id !== patch.id);
      continue;
    }
    line.quantity = patch.quantity;
    const match = findVariant(patch.merchandiseId);
    const unit = match?.variant.price.amount || '0.00';
    line.cost.totalAmount = usd((parseFloat(unit) * line.quantity).toFixed(2));
  }
  computeCartTotals(cart);
  carts.set(cartId, cart);
  return cart;
}

export async function getCollection(handle: string): Promise<Collection | undefined> {
  return mockCollections.find((c) => c.handle === handle);
}

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  let items = collectionItems[collection] ?? mockProducts;
  // Simple sort mock
  if (sortKey === 'PRICE') {
    items = [...items].sort((a, b) => {
      const pa = parseFloat(a.priceRange.minVariantPrice.amount);
      const pb = parseFloat(b.priceRange.minVariantPrice.amount);
      return reverse ? pb - pa : pa - pb;
    });
  }
  return items;
}

export async function getCollections(): Promise<Collection[]> {
  return mockCollections;
}

export async function getMenu(_handle: string): Promise<Menu[]> {
  return mockMenu;
}

export async function getPage(handle: string): Promise<Page> {
  const page = mockPages.find((p) => p.handle === handle) || mockPages[0];
  return page;
}

export async function getPages(): Promise<Page[]> {
  return mockPages;
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  return productByHandle.get(handle);
}

export async function getProductRecommendations(_productId: string): Promise<Product[]> {
  // Return a couple of other products as recommendations
  return mockProducts.slice(0, 2);
}

export async function getProducts({
  query,
  reverse,
  sortKey
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  let items = mockProducts;
  if (query) {
    const q = query.toLowerCase();
    items = items.filter((p) => p.title.toLowerCase().includes(q) || p.handle.includes(q));
  }
  if (sortKey === 'CREATED_AT') {
    items = [...items].sort((a, b) => (reverse ? 1 : -1));
  } else if (sortKey === 'PRICE') {
    items = [...items].sort((a, b) => {
      const pa = parseFloat(a.priceRange.minVariantPrice.amount);
      const pb = parseFloat(b.priceRange.minVariantPrice.amount);
      return reverse ? pb - pa : pa - pb;
    });
  }
  return items;
}

export async function revalidate(): Promise<NextResponse> {
  return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}


