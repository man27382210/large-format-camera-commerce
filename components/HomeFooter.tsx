import Link from 'next/link'

export default function HomeFooter() {
  return (
    <footer>
      <div className="font-sans text-base leading-[18px] px-2.5 md:px-10 pt-4 pb-4 relative" id="target_footer">
        <div className="md:flex float-left">
          <div className="flex flex-col justify-between">
            <div className="">
大片幅攝影教學與銷售平台
              <br />
              台灣台北市
              <br />
              攝影大道123號
            </div>
            <div className="md:hidden mt-5">
電話 +886-2-1234-5678
              <br />
              傳真 +886-2-1234-5679
            </div>
            <div className="hidden md:block">© 2025 大片幅攝影教學與銷售平台</div>
          </div>
          <div className="flex flex-col justify-between md:ml-[70px]">
            <div className="space-y-1">
              <Link href="/contact">聯絡我們</Link>
              <br />
              <Link href="/about">關於我們</Link>
              <br />
              <Link href="/privacy">隱私政策</Link>
              <br />
              <Link href="/accessibility">無障礙服務</Link>
              <br />
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              <Link href="/partners">合作夥伴</Link>
              <br />
              <Link href="/careers">加入我們</Link>
              <br />
              <Link href="/news">最新消息</Link>
              <br />
              <Link href="/announcements">公告事項</Link>
              <br />
            </div>
          </div>
        </div>
        <div className="md:hidden mt-9">© 2025 大片幅攝影教學與銷售平台</div>
        <div className="absolute right-[30px] bottom-5 w-[144px] h-[144px]"></div>
      </div>
    </footer>
  )
}


