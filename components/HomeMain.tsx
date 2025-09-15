import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getFeaturedData() {
  const featuredProducts = await prisma.product.findMany({
    take: 4
  });
  const featuredCourses = await prisma.course.findMany({
    take: 3
  });
  return { featuredProducts, featuredCourses };
}

export default async function HomeMain() {
  const { featuredProducts, featuredCourses } = await getFeaturedData();

  return (
    <main id="target_content">
      <div className="px-2.5 md:px-10">
        <div className="h-[calc(100vh-130px*2)] mb-[130px] md:mb-[130px]">
          <div className="h-full">
            <div className="h-full">
              <figure className="relative h-full">
                <img
                  className="absolute inset-0 w-full h-full object-contain"
                  src="/images/487476572_1127594749411972_514785972217122877_n.jpg"
                  alt="大片幅攝影教學工作室"
                />
              </figure>
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="mt-16 px-2.5 md:px-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Featured Cameras
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {featuredProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={
                          Array.isArray(product.images)
                            ? product.images[0]
                            : '/images/placeholder-camera.jpg'
                        }
                        alt={product.name}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Courses Section */}
        <div className="mt-16 px-2.5 md:px-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Popular Courses
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {featuredCourses.map((course) => (
                <Link key={course.id} href={`/courses/${course.id}`}>
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={'/images/placeholder-camera.jpg'} // Placeholder
                        alt={course.title}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {course.title}
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        ${course.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 px-2.5 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div>
              <div className="relative border-b border-black pb-2">
                <div className="w-2/3" aria-hidden="true">
                  <p>
                    <strong>最新資訊</strong>
                  </p>
                </div>
              </div>
              <div className="block" style={{ display: 'block' }}>
                {[
                  {
                    href: '/news/new-large-format-cameras',
                    aHref: '/news/new-large-format-cameras',
                    title: '全新大片幅相機系列上市'
                  },
                  {
                    href: '/news/darkroom-workshop',
                    aHref: '/news/darkroom-workshop',
                    title: '暗房技術進階工作坊開始報名'
                  },
                  {
                    href: '/news/exhibition-2025',
                    aHref: '/news/exhibition-2025',
                    title: '2025年度學員作品展覽'
                  },
                  {
                    href: '/news/master-photographer-visit',
                    aHref: '/news/master-photographer-visit',
                    title: '知名攝影大師客座講學'
                  },
                  {
                    href: '/news/new-equipment',
                    aHref: '/news/new-equipment',
                    title: '最新攝影器材介紹'
                  },
                  {
                    href: '/news/schedule-2025',
                    aHref: '/news/schedule-2025',
                    title: '2025年課程時間表'
                  },
                  {
                    href: '/news/beginner-course',
                    aHref: '/news/beginner-course',
                    title: '初學者入門課程招生'
                  }
                ].map((item) => (
                  <div key={item.href} className="border-t border-black">
                    <div
                      className="py-2 cursor-pointer select-none js-open-as-overlay"
                      data-href={item.href}
                    >
                      <div className="relative pr-16">
                        <strong>{item.title}</strong>
                        <Link
                          href={item.href}
                          className="absolute right-0 top-2 text-brand-accent js-open-as-overlay"
                        >
                          詳情
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 px-2.5 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div>
              <div
                className="relative border-b border-black pb-2 js-accordion-toggle"
                role="button"
                tabIndex={0}
                aria-expanded="true"
                aria-label="課程資料"
              >
                <div className="w-2/3" aria-hidden="true">
                  <p>
                    <strong>課程資料</strong>
                  </p>
                </div>
                <div
                  className="absolute right-0 bottom-1 w-6 h-6 rounded bg-brand-paper"
                  aria-hidden="true"
                ></div>
              </div>
              <div className="block" style={{ display: 'block' }}>
                {[
                  {
                    href: '/files/2025-photography-course-guide.pdf',
                    text: '2025年大片幅攝影課程指南'
                  },
                  {
                    href: '/files/2025-equipment-manual.pdf',
                    text: '2025年攝影器材使用手冊'
                  },
                  {
                    href: '/files/2025-darkroom-techniques.pdf',
                    text: '暗房技術操作指南'
                  }
                ].map((d) => (
                  <div key={d.href} className="border-t border-black">
                    <div className="py-2">
                      <a href={d.href} className="relative block text-black">
                        <span className="font-bold inline-block max-w-[calc(100%-85px)]">
                          {d.text}
                        </span>
                        <span className="absolute right-0 top-0 text-brand-accent">
                          下載
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 px-2.5 md:px-10">
          <div className="max-w-6xl mx-auto flex justify-center">
            <figure className="w-2/3 md:w-2/3">
              <div
                className="relative overflow-hidden"
                style={{ paddingBottom: '68.020304568528%' }}
              >
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/images/291023508_5483712861681141_8282438247927504025_n.png"
                  alt=""
                />
              </div>
            </figure>
          </div>
        </div>

        <div className="mt-16 px-2.5 md:px-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold">大片幅攝影教學與銷售平台</h2>
            <p className="[text-indent:23px]">
              「攝影不僅是技術，更是一門藝術。透過光影的捕捉與底片的化學反應，我們記錄並創造出永恆的瞬間。」
              – 大片幅攝影大師 (2025)
              <br />
              <br />
              <br />
              我們的大片幅攝影教學平台致力於傳承經典攝影技藝，從基礎理論到實務操作，每一個環節都由資深攝影師親自指導。這種深度的個人化教學方式，確保每位學員都能掌握大片幅攝影的精髓，培養出獨特的攝影視角與美學品味。我們的目標是讓每位學員都能發展出屬於自己的攝影風格與藝術表達。
            </p>
            <p className="[text-indent:23px]">
              本平台提供三大主要服務：大片幅攝影教學課程、專業攝影器材銷售、以及個人化攝影諮詢服務。在教學課程中，學員可以根據個人興趣與程度選擇不同專業領域的深入學習，包括風景攝影、人像攝影、建築攝影、靜物攝影等多元化課程。所有課程都結合理論與實務，涵蓋攝影史、美學理論、器材知識、暗房技術等完整的攝影教育內容。
            </p>
            <p className="[text-indent:23px]">
              除了基礎與進階攝影課程外，我們還提供專業攝影師認證計劃。完成所有課程並通過實務考核的學員，將獲得本平台頒發的專業攝影師認證資格。
            </p>
            <p className="[text-indent:23px]">
              本平台為學員提供頂級的學習環境，擁有由國際知名攝影大師領導的多個專業教學工作室，以及配備最新大片幅攝影器材的實習場所。學員在學習過程中可以使用各種專業級大片幅相機、鏡頭系統、暗房設備等，並在經驗豐富的專業講師指導下進行實務操作。此外，我們還提供豐富的攝影理論課程，包括攝影史、美學原理、色彩理論等相關學科。
            </p>
          </div>
        </div>

        <div className="mt-16 -mx-2.5 md:-mx-10">
          <figure>
            <div className="h-screen relative z-[201]">
              <div className="h-full w-full">
                <img
                  className="w-full h-full object-cover"
                  src="/images/488799332_9800174270034957_1351242552884761268_n.jpg"
                  alt=""
                />
              </div>
            </div>
            <figcaption className="mt-1 ml-2.5 md:ml-10 w-1/2 text-xs leading-[13px]">
              <p>大片幅攝影作品展示，攝影師：學員作品</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </main>
  );
}


