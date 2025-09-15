# Project Specification: Large-Format Camera E-commerce & Learning Platform

## 1. High-Level Overview

*   **Project Goal:** To create a comprehensive online platform that sells large-format cameras and related physical products, as well as online photography courses.
*   **Target Audience:** Amateur and professional photographers with an interest in learning and practicing large-format photography.
*   **Core Monetization:** Sales of physical goods and digital courses.
*   **Key Functions:**
    *   E-commerce functionality for physical products (cameras, lenses, etc.).
    *   E-commerce functionality for digital products (video courses).
    *   Secure user authentication system with email/password and Google OAuth.
    *   A dedicated portal for authenticated users to access and watch their purchased courses.
    *   User profile management.

## 2. Core Features (User Stories)

### Public User (Visitor)

*   **As a visitor,** I want to browse a grid of all available cameras to see what's for sale.
*   **As a visitor,** I want to click on a camera to view its detailed product page with a description, price, and image gallery.
*   **As a visitor,** I want to browse a list of all available online courses.
*   **As a visitor,** I want to view a course's landing page with its curriculum, description, and price.
*   **As a visitor,** I want to be able to add any item (camera or course) to a shopping cart without needing an account.
*   **As a visitor,** I want to be prompted to log in or register when I'm ready to check out.

### Authenticated User (Customer/Student)

*   **As a user,** I want to register for a new account using my email and a secure password.
*   **As a user,** I want to log in and out of the platform.
*   **As a user,** I want to use my Google account to sign up or log in for convenience.
*   **As a user,** I want to have a personal profile page where I can view my basic information.
*   **As a user,** I want to view a history of my past orders (both cameras and courses).
    *   **As a user,** I want to complete the checkout process using a secure payment method (ECPay - to be implemented) to purchase the items in my cart.
*   **As a user,** I want to see a dedicated "My Courses" page that lists all the courses I have purchased.
*   **As a user,** I want to be able to click on a purchased course and be taken to a secure page to watch the video content.

## 3. Data Models

*(This outlines the required database schema. We will use the existing Prisma schema as a base and extend it.)*

*   **User:**
    *   `id`, `name`, `email`, `password`, `image` (Already exists)
    *   `accounts`, `sessions` (Already exists for NextAuth)
    *   `enrollments` (Relation to courses, already exists)
    *   `orders` (Relation to orders, **to be added**)

*   **Product (Camera):** (**To be added**)
    *   `id` (string, CUID)
    *   `name` (string)
    *   `description` (text)
    *   `price` (decimal)
    *   `images` (JSON or relation to an Image model)
    *   `stock` (integer)

*   **Course:** (Already exists)
    *   `id`, `title`, `description`, `price`
    *   `enrollments` (Relation to users)
    *   `videos` (Relation to course videos, **to be added**)

*   **CourseVideo:** (**To be added**)
    *   `id` (string, CUID)
    *   `title` (string)
    *   `videoUrl` (string, protected)
    *   `order` (integer, for sequence)
    *   `courseId` (foreign key to Course)

*   **Enrollment:** (Already exists)
    *   Links `User` and `Course` models.

*   **Order:** (**To be added**)
    *   `id` (string, CUID)
    *   `userId` (foreign key to User)
    *   `totalAmount` (decimal)
    *   `createdAt` (datetime)
    *   `orderItems` (Relation to what was purchased)

*   **OrderItem:** (**To be added**)
    *   `id` (string, CUID)
    *   `orderId` (foreign key to Order)
    *   `productId` (optional foreign key to Product)
    *   `courseId` (optional foreign key to Course)
    *   `quantity` (integer)
    *   `price` (decimal)

## 4. Pages & UI Layout

*(This defines the site structure and the components on each page.)*

*   **/ (Homepage):**
    *   **Header:** Logo, Nav Links (Cameras, Courses), Cart Icon, Login/Profile Button.
    *   **Hero Section:** Large welcoming image and a call-to-action.
    *   **Featured Products:** A grid showcasing 3-4 popular cameras.
    *   **Featured Courses:** A grid showcasing 2-3 popular courses.
    *   **Footer:** Links to about, contact, etc.

*   **/login (Login/Register Page):**
    *   A single form that can be toggled between "Login" and "Register" states.
    *   Fields: Name (register only), Email, Password.
    *   A prominent "Sign in with Google" button.

*   **/products (Cameras Page):**
    *   A full grid of all available camera products.
    *   Each product card shows image, name, price, and a "View Details" button.

*   **/products/[id] (Camera Detail Page):**
    *   Product image gallery.
    *   Detailed product description, specifications, and price.
    *   "Add to Cart" button.

*   **/courses (Courses Page):**
    *   A list or grid of all available courses.
    *   Each course card shows a thumbnail, title, and price.

*   **/profile (User Profile Page):**
    *   Displays the user's name and email.
    *   Navigation to "My Courses" and "Order History".

*   **/profile/my-courses (My Courses Page):**
    *   A grid of all courses the logged-in user has purchased.
    *   Clicking a course navigates to the watch page.

*   **/courses/watch/[id] (Course Watching Page):**
    *   **Requires login.** Redirects if the user has not purchased the course.
    *   Main video player component.
    *   A sidebar listing all videos in the course curriculum.
    *   The currently playing video is highlighted.
