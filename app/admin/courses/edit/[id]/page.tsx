import { updateCourse } from '@/lib/admin-actions';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

async function getCourse(id: string) {
  const course = await prisma.course.findUnique({ where: { id } });
  return course;
}

export default async function EditCoursePage({
  params
}: {
  params: { id: string };
}) {
  const course = await getCourse(params.id);

  if (!course) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Course not found</h1>
        <Link href="/admin/courses">Return to Courses</Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Course</h1>
      <form
        action={updateCourse}
        className="bg-white p-8 rounded-lg shadow space-y-6"
      >
        <input type="hidden" name="id" value={course.id} />
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Course Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            defaultValue={course.title}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows={4}
            required
            defaultValue={course.description}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            required
            step="0.01"
            defaultValue={course.price}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <Link
            href="/admin/courses"
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Update Course
          </button>
        </div>
      </form>
    </div>
  );
}
