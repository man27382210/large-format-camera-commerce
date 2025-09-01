import Link from 'next/link'

export default function HomeHeader() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full flex justify-center z-[9999]">
        <Link href="#target_content" className="sr-only focus:not-sr-only absolute top-0 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-2" title="skip links">
          jump to page content
        </Link>
        <Link href="#target_footer" className="sr-only focus:not-sr-only absolute top-0 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-2" title="skip links">
          jump to footer
        </Link>
      </div>
      <header className="relative">
        <div className="fixed top-0 left-0 w-full h-[60px] md:h-[72px] z-50 bg-white/50 backdrop-blur">
          <div className="px-2.5 md:px-10 relative">
            <Link href="/" className="inline-block h-10 w-48 absolute right-10 top-5" aria-label="Homepage"></Link>
            {/* <ul className="hidden md:flex text-brand-muted mt-[90px] gap-2">
              <li>
                <Link href="/de">De</Link>
              </li>
              <li>
                <Link href="/search">Search</Link>
              </li>
            </ul> */}
            <span className="md:hidden absolute right-2.5 top-2.5 w-6 h-6 rounded bg-brand-paper js-toggle-mobile-menu" role="button" aria-expanded="false" tabIndex={0} aria-label="button mobile menu"></span>
          </div>
        </div>
        <div className="px-2.5 md:px-10 pt-8 relative">
          <ul role="menubar" className="pb-5 w-full" aria-label="Menü">
            <li className="">
              <span className="cursor-pointer hover:text-brand-accent js-open-submenu" tabIndex={0} role="button" aria-expanded="false">
                Academy
              </span>
              <ul className="inline-block ml-2 align-middle" role="list">
                <li className="inline-block mr-2">
                  <Link href="/academy/history" role="listitem">History</Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/academy/organization" role="listitem">Organization</Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/academy/rundgang" role="listitem">Rundgang</Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/academy/250-jahre-kunstakademie" role="listitem">250 Jahre Kunstakademie</Link>
                </li>
              </ul>
            </li>
            <li className="">
              <span className="cursor-pointer hover:text-brand-accent js-open-submenu" tabIndex={0} role="button" aria-expanded="false">
                Study
              </span>
              <ul className="inline-block ml-2 align-middle" role="list">
                <li className="inline-block mr-2">
                  <Link href="/study/fine-arts" role="listitem">Fine Arts</Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/study/art-education" role="listitem">Art Education</Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/study/architecture" role="listitem">Architecture</Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/study/orientierungsbereich" role="listitem">Orientierungsbereich</Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/study/application" role="listitem">study application</Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/study/weitere-informationen" role="listitem">Weitere Informationen</Link>
                </li>
              </ul>
            </li>
            <li className="">
              <span className="cursor-pointer hover:text-brand-accent js-open-submenu" tabIndex={0} role="button" aria-expanded="false">
                Faculty
              </span>
              <ul className="inline-block ml-2 align-middle" role="list">
                <li className="inline-block mr-2">
                  <Link href="/faculty/dp1-art" role="listitem">DP1 Art</Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/faculty/dp1-architecture" role="listitem">DP1 Architecture</Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/faculty/dp2-art-related-sciences" role="listitem">DP2 Art-related Sciences</Link>
                </li>
              </ul>
            </li>
            <li className="">
              <span className="cursor-pointer hover:text-brand-accent js-open-submenu" tabIndex={0} role="button" aria-expanded="false">
                Facilities
              </span>
              <ul className="inline-block ml-2 align-middle" role="list">
                <li className="inline-block mr-2">
                  <Link href="/facilities/workshops" role="listitem">Workshops</Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/facilities/library" role="listitem">Library</Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/facilities/archive" role="listitem">Archive</Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/facilities/media-library" role="listitem">Media Library</Link>
                </li>
                <li className="inline-block mr-2">
                  <Link href="/facilities/akademie-galerie" role="listitem">Akademie-Galerie</Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="md:hidden fixed right-2.5 bottom-4 text-right text-base">
            <li className="">
              <Link href="/search">Search</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}


