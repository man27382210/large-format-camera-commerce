'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function HomeHeader() {
  const [isListOpen, setIsListOpen] = useState({
    academy: false,
    study: false,
    faculty: false,
    facilities: false
  });
  return (
    <>
      <div className="absolute top-0 left-0 w-full flex justify-center z-[9999]">
        <Link
          href="#target_content"
          className="sr-only focus:not-sr-only absolute top-0 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-2"
          title="skip links"
        >
          跳至頁面內容
        </Link>
        <Link
          href="#target_footer"
          className="sr-only focus:not-sr-only absolute top-0 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-2"
          title="skip links"
        >
          跳至頁尾
        </Link>
      </div>
      <header className="relative">
        {/* <div className="fixed top-0 left-0 w-full h-[60px] md:h-[72px] z-50 bg-white/50 backdrop-blur">
          <div className="px-2.5 md:px-10 relative">
            <Link href="/" className="inline-block h-10 w-48 absolute right-10 top-5" aria-label="Homepage"></Link>
            <ul className="hidden md:flex text-brand-muted mt-[90px] gap-2">
              <li>
                <Link href="/de">De</Link>
              </li>
              <li>
                <Link href="/search">Search</Link>
              </li>
            </ul>
            <span className="md:hidden absolute right-2.5 top-2.5 w-6 h-6 rounded bg-brand-paper js-toggle-mobile-menu" role="button" aria-expanded="false" tabIndex={0} aria-label="行動選單按鈕"></span>
          </div>
        </div> */}
        <div className="px-2.5 md:px-10 pt-8">
          <ul role="menubar" className="pb-5 w-full list-none" aria-label="主選單">
            <li className="">
              <span
                className="cursor-pointer hover:text-brand-accent js-open-submenu"
                tabIndex={0}
                role="button"
                aria-expanded="false"
                onClick={() => setIsListOpen({ ...isListOpen, academy: !isListOpen.academy })}
              >
                攝影學院
              </span>
              <ul
                className={`inline-block ml-2 align-middle ${isListOpen.academy ? 'visible' : 'invisible'}`}
                role="list"
              >
                <li className="inline-block mr-2">
                  <Link href="/academy/history" role="listitem">
                    歷史沿革
                  </Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/academy/organization" role="listitem">
                    組織架構
                  </Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/academy/gallery" role="listitem">
                    作品展覽
                  </Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/academy/about" role="listitem">
                    關於學院
                  </Link>
                </li>
              </ul>
            </li>
            <li className="">
              <span
                className="cursor-pointer hover:text-brand-accent js-open-submenu"
                tabIndex={0}
                role="button"
                aria-expanded="false"
                onClick={() => setIsListOpen({ ...isListOpen, study: !isListOpen.study })}
              >
                攝影教學
              </span>
              <ul
                className={`inline-block ml-2 align-middle ${isListOpen.study ? 'visible' : 'invisible'}`}
                role="list"
              >
                <li className="inline-block mr-2">
                  <Link href="/study/fundamentals" role="listitem">
                    基礎課程
                  </Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/study/advanced" role="listitem">
                    進階課程
                  </Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/study/techniques" role="listitem">
                    技法教學
                  </Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/study/darkroom" role="listitem">
                    暗房技術
                  </Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/study/enrollment" role="listitem">
                    報名申請
                  </Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/study/info" role="listitem">
                    更多資訊
                  </Link>
                </li>
              </ul>
            </li>
            <li className="">
              <span
                className="cursor-pointer hover:text-brand-accent js-open-submenu"
                tabIndex={0}
                role="button"
                aria-expanded="false"
                onClick={() => setIsListOpen({ ...isListOpen, faculty: !isListOpen.faculty })}
              >
                師資團隊
              </span>
              <ul
                className={`inline-block ml-2 align-middle ${isListOpen.faculty ? 'visible' : 'invisible'}`}
                role="list"
              >
                <li className="inline-block mr-2">
                  <Link href="/faculty/masters" role="listitem">
                    資深攝影師
                  </Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/faculty/instructors" role="listitem">
                    專業講師
                  </Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/faculty/guest-artists" role="listitem">
                    客座藝術家
                  </Link>
                </li>
              </ul>
            </li>
            <li className="">
              <span
                className="cursor-pointer hover:text-brand-accent js-open-submenu"
                tabIndex={0}
                role="button"
                aria-expanded="false"
                onClick={() => setIsListOpen({ ...isListOpen, facilities: !isListOpen.facilities })}
              >
                設備器材
              </span>
              <ul
                className={`inline-block ml-2 align-middle ${isListOpen.facilities ? 'visible' : 'invisible'}`}
                role="list"
              >
                <li className="inline-block mr-2">
                  <Link href="/facilities/cameras" role="listitem">
                    大片幅相機
                  </Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/facilities/lenses" role="listitem">
                    鏡頭系統
                  </Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/facilities/accessories" role="listitem">
                    配件用品
                  </Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/facilities/darkroom" role="listitem">
                    暗房設備
                  </Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/facilities/studio" role="listitem">
                    攝影棚
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="md:hidden fixed right-2.5 bottom-4 text-right text-base">
            <li className="">
              <Link href="/search">搜尋</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}



