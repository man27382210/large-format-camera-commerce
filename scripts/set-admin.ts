// scripts/set-admin.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // !!! IMPORTANT !!!
  // Add the email addresses of the users you want to make admins to this array
  // const adminEmails = ['man27382210@gmail.com', 'user2@example.com'];
  const adminEmails = ['user2@example.com']

  for (const email of adminEmails) {
    try {
      const user = await prisma.user.update({
        where: {
          email: email
        },
        data: {
          role: 'ADMIN'
        }
      });
      console.log(`Successfully set user ${user.email} as an ADMIN.`);
    } catch (error) {
      console.warn(`Could not find user with email: ${email}. Skipping.`);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
