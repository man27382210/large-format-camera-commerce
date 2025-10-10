
# GEMINI.md

This file provides an overview of the Large-Format Camera E-commerce & Learning Platform project for the Gemini AI assistant.

## Project Overview

This project is a full-stack e-commerce and learning platform built with Next.js, Prisma, and NextAuth.js. It allows users to browse and purchase large-format cameras and online photography courses. Authenticated users can access their purchased courses and view their order history. The project also includes an admin panel for managing products, courses, and orders.

## Tech Stack

-   **Framework**: Next.js (App Router)
-   **Language**: TypeScript
-   **Authentication**: NextAuth.js (Google Provider and Credentials Provider)
-   **ORM**: Prisma
-   **Database**: PostgreSQL
-   **Styling**: Tailwind CSS
-   **UI Components**: Headless UI
-   **Linting/Formatting**: Prettier

## Project Structure

```
/
├── app/                  # Next.js App Router directory
│   ├── admin/            # Admin panel pages
│   ├── api/              # API routes (auth, revalidate)
│   ├── (main)/           # Main application pages (products, courses, etc.)
│   └── ...
├── components/           # React components used throughout the application
│   ├── cart/             # Cart components (modal, buttons, context)
│   ├── layout/           # Layout components (navbar, footer)
│   └── ...
├── lib/                  # Core application logic
│   ├── auth-action.ts    # Authentication actions (e.g., createUser)
│   ├── admin-actions.ts  # Actions for the admin panel
│   ├── shopify/          # Shopify integration logic (can be ignored for this project)
│   └── ...
├── prisma/               # Prisma schema, migrations, and seed script
├── public/               # Static assets (images, fonts)
├── scripts/              # Standalone scripts (e.g., set-admin.ts)
├── .env.example          # Example environment variables
├── auth.ts               # NextAuth.js configuration
├── middleware.ts         # Next.js middleware for route protection
├── package.json          # Project dependencies and scripts
└── ...
```

## Key Files

-   `prisma/schema.prisma`: Defines the database schema for users, products, courses, orders, etc.
-   `auth.ts`: Configures NextAuth.js with the Prisma adapter and authentication providers.
-   `middleware.ts`: Protects the `/admin` and `/profile` routes, ensuring only authorized users can access them.
-   `lib/admin-actions.ts`: Contains Server Actions for creating, updating, and deleting products and courses.
-   `lib/user-actions.ts`: Contains functions for fetching user-specific data like orders and enrolled courses.
-   `components/cart/CartContext.tsx`: Manages the shopping cart state using React Context and `localStorage`.
-   `app/admin/`: Directory containing all pages for the admin dashboard.
-   `app/(main)/`: Directory containing the main user-facing pages like product listings, course details, and user profiles.

## Getting Started

1.  **Install dependencies**:
    ```bash
    pnpm install
    ```
2.  **Set up the database**:
    -   Make sure you have PostgreSQL running.
    -   Create a database named `large-format-camera`.
    -   Copy `.env.example` to `.env` and update the `DATABASE_URL` if necessary.
3.  **Run database migrations**:
    ```bash
    pnpm prisma migrate deploy
    ```
4.  **Seed the database**:
    ```bash
    pnpm prisma:seed
    ```
5.  **Run the development server**:
    ```bash
    pnpm dev
    ```
    The application will be available at `http://localhost:3000`.

## Available Scripts

-   `pnpm dev`: Starts the development server.
-   `pnpm build`: Builds the application for production.
-   `pnpm start`: Starts the production server.
-   `pnpm prisma:seed`: Seeds the database with initial data (products, courses, and an admin user).
-   `pnpm set-admin`: A script to grant admin privileges to a user by email.

## Deployment

The project is set up for deployment on Vercel. The `vercel.json` file configures the build and deployment settings. The `build` script in `package.json` ensures that `prisma generate` and `prisma migrate deploy` are run before the Next.js build.

## Database

The database schema is defined in `prisma/schema.prisma`. It includes models for:

-   `User`: Stores user information, including roles (`USER` or `ADMIN`).
-   `Product`: Represents physical products (cameras).
-   `Course`: Represents online courses.
-   `Order`: Stores order information for both products and courses.
-   `Enrollment`: A join table linking users to their purchased courses.

The database can be seeded with initial data by running `pnpm prisma:seed`. This will create a few sample products, courses, and a default admin user with the email `testaccount@example.com` and password `testaccount`.

## Authentication

Authentication is handled by NextAuth.js. The configuration in `auth.ts` sets up:

-   **Prisma Adapter**: To store user and session data in the PostgreSQL database.
-   **Google Provider**: For OAuth login with Google.
-   **Credentials Provider**: For traditional email and password login.

The `middleware.ts` file protects routes based on user authentication and role.

## Admin Panel

The admin panel is located at `/admin`. It is only accessible to users with the `ADMIN` role. The admin panel allows for:

-   **Managing Products**: Create, edit, and delete camera products.
-   **Managing Courses**: Create, edit, and delete online courses.
-   **Managing Orders**: View all orders placed on the platform.

To make a user an admin, you can use the `pnpm set-admin` script.
