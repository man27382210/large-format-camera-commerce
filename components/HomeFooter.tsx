import Link from 'next/link'

export default function HomeFooter() {
  return (
    <footer>
      <div className="font-sans text-base leading-[18px] px-2.5 md:px-10 pt-4 pb-4 relative" id="target_footer">
        <div className="md:flex float-left">
          <div className="flex flex-col justify-between">
            <div className="">
              Kunstakademie Düsseldorf
              <br />
              Eiskellerstraße 1
              <br />
              40213 Düsseldorf
            </div>
            <div className="md:hidden mt-5">
              Tel +49 (0)211 1396-0
              <br />
              Fax +49 (0)211 1396-255
            </div>
            <div className="hidden md:block">© 2025 Kunstakademie Düsseldorf</div>
          </div>
          <div className="flex flex-col justify-between md:ml-[70px]">
            <div className="space-y-1">
              <Link href="/contact">Contact</Link>
              <br />
              <Link href="/impressum">Impressum</Link>
              <br />
              <Link href="/datenschutz">Datenschutzinformation</Link>
              <br />
              <Link href="/barrierefreiheit">Barrierefreiheit</Link>
              <br />
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              <Link href="/freunde-foerderer">Freunde & Förderer</Link>
              <br />
              <Link href="/stellenanzeigen">Stellenanzeigen</Link>
              <br />
              <Link href="/presse">Presse</Link>
              <br />
              <Link href="/amtliche-mitteilungen">Amtliche Mitteilungen</Link>
              <br />
            </div>
          </div>
        </div>
        <div className="md:hidden mt-9">© 2025 Kunstakademie Düsseldorf</div>
        <div className="absolute right-[30px] bottom-5 w-[144px] h-[144px]"></div>
      </div>
    </footer>
  )
}


