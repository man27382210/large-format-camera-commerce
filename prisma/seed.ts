const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding ...');

  // Create a test admin user
  const hashedPassword = await bcrypt.hash('testaccount', 10);
  await prisma.user.upsert({
    where: { email: 'testaccount@example.com' },
    update: {},
    create: {
      email: 'testaccount@example.com',
      name: 'Test Admin',
      password: hashedPassword,
      role: 'ADMIN'
    }
  });

  // Seed Products (Cameras)
  const products = [
    {
      name: 'Chamonix 45F-2',
      description: 'A beautiful, lightweight 4x5 field camera.',
      price: 1250.0,
      images: ['/images/placeholder-camera.jpg'],
      stock: 10
    },
    {
      name: 'Intrepid 4x5 MK5',
      description: 'The most affordable and lightest 4x5 camera available.',
      price: 380.0,
      images: ['/images/placeholder-camera.jpg'],
      stock: 15
    },
    {
      name: 'Linhof Master Technika 4x5',
      description: 'A classic, precision-engineered all-metal field camera.',
      price: 4500.0,
      images: ['/images/placeholder-camera.jpg'],
      stock: 5
    },
    {
      name: 'Shen Hao HZX45-IIA',
      description: 'A versatile and reliable wooden field camera.',
      price: 850.0,
      images: ['/images/placeholder-camera.jpg'],
      stock: 8
    }
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product
    });
  }

  // Seed Courses
  const courses = [
    {
      title: 'Introduction to Large Format Photography',
      description:
        'Learn the fundamentals of using a 4x5 camera, from setup to your first shot.',
      price: 199.0
    },
    {
      title: 'Advanced Zone System Metering',
      description:
        'Master the art of light metering for perfect black and white negatives.',
      price: 249.0
    },
    {
      title: 'Large Format Film Developing',
      description: 'A complete guide to developing your own sheet film at home.',
      price: 149.0
    }
  ];

  for (const course of courses) {
    const newCourse = await prisma.course.create({
      data: course
    });

    // Seed videos for each course
    await prisma.courseVideo.createMany({
      data: [
        {
          title: '1. Welcome to the Course',
          videoUrl: 'https://vimeo.com/placeholder',
          order: 1,
          courseId: newCourse.id
        },
        {
          title: '2. Core Concepts',
          videoUrl: 'https://vimeo.com/placeholder',
          order: 2,
          courseId: newCourse.id
        },
        {
          title: '3. Practical Examples',
          videoUrl: 'https://vimeo.com/placeholder',
          order: 3,
          courseId: newCourse.id
        }
      ]
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
