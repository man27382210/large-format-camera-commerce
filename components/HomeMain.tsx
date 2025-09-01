import Link from 'next/link'

export default function HomeMain() {
  return (
    <main id="target_content">
      <div className="px-2.5 md:px-10">
        <div className="h-[calc(100vh-130px*2)] mb-[130px] md:mb-[130px]">
          <div className="h-full">
            <div className="h-full">
              <figure className="relative h-full">
                <img className="absolute inset-0 w-full h-full object-contain" data-src="/images/487476572_1127594749411972_514785972217122877_n.jpg?w=1600" data-srcset="/images/487476572_1127594749411972_514785972217122877_n.jpg?w=100 100w,/images/487476572_1127594749411972_514785972217122877_n.jpg?w=200 200w,/images/487476572_1127594749411972_514785972217122877_n.jpg?w=300 300w,/images/487476572_1127594749411972_514785972217122877_n.jpg?w=400 400w,/images/487476572_1127594749411972_514785972217122877_n.jpg?w=500 500w,/images/487476572_1127594749411972_514785972217122877_n.jpg?w=640 640w,/images/487476572_1127594749411972_514785972217122877_n.jpg?w=750 750w,/images/487476572_1127594749411972_514785972217122877_n.jpg?w=828 828w,/images/487476572_1127594749411972_514785972217122877_n.jpg?w=1024 1024w,/images/487476572_1127594749411972_514785972217122877_n.jpg?w=1125 1125w,/images/487476572_1127594749411972_514785972217122877_n.jpg?w=1242 1242w,/images/487476572_1127594749411972_514785972217122877_n.jpg?w=1280 1280w,/images/487476572_1127594749411972_514785972217122877_n.jpg?w=1400 1400w,/images/487476572_1127594749411972_514785972217122877_n.jpg?w=1500 1500w,/images/487476572_1127594749411972_514785972217122877_n.jpg?w=1600 1600w,/images/487476572_1127594749411972_514785972217122877_n.jpg?w=1700 1700w,/images/487476572_1127594749411972_514785972217122877_n.jpg?w=1800 1800w,/images/487476572_1127594749411972_514785972217122877_n.jpg?w=1920 1920w" data-sizes="auto" alt="//Hallway on Ground floor of the Kunstakademie Düsseldorf" src="/images/487476572_1127594749411972_514785972217122877_n.jpg" width="1648" height="698" />
              </figure>
            </div>
          </div>
        </div>

        <div className="mt-16 px-2.5 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div>
              <div className="relative border-b border-black pb-2">
                <div className="w-2/3" aria-hidden="true">
                  <p>
                    <strong>Aktuelle Informationen</strong>
                  </p>
                </div>
              </div>
              <div className="block" style={{ display: 'block' }}>
                {[
                  {
                    href: '/en/veranstaltungen/4959-hochschulnachrichten',
                    aHref: 'https://www.kunstakademie-duesseldorf.de/en/veranstaltungen/4959-hochschulnachrichten',
                    title: 'Hochschulnachrichten ',
                  },
                  {
                    href: '/en/veranstaltungen/4957-nachruf-die-kunstakademie-dsseldorf-trauert-um-professor-herbert-brandl',
                    aHref: 'https://www.kunstakademie-duesseldorf.de/en/veranstaltungen/4957-nachruf-die-kunstakademie-dsseldorf-trauert-um-professor-herbert-brandl',
                    title: 'Nachruf: Die Kunstakademie Düsseldorf trauert um Professor Herbert Brandl',
                  },
                  {
                    href: '/en/veranstaltungen/4815-fotos-des-sommerrundgangs-2025',
                    aHref: 'https://www.kunstakademie-duesseldorf.de/en/veranstaltungen/4815-fotos-des-sommerrundgangs-2025',
                    title: 'Fotos des Sommerrundgangs 2025 ',
                  },
                  {
                    href: '/en/veranstaltungen/5004-nachruf-die-kunstakademie-dsseldorf-trauert-um-professor-gnther-uecker',
                    aHref: 'https://www.kunstakademie-duesseldorf.de/en/veranstaltungen/5004-nachruf-die-kunstakademie-dsseldorf-trauert-um-professor-gnther-uecker',
                    title: 'Nachruf: Die Kunstakademie Düsseldorf trauert um Professor Günther Uecker',
                  },
                  {
                    href: '/en/veranstaltungen/5552-declaration-against-right-wing-extremism',
                    aHref: 'https://www.kunstakademie-duesseldorf.de/en/veranstaltungen/5552-declaration-against-right-wing-extremism',
                    title: 'Declaration against right-wing extremism',
                  },
                  {
                    href: '/en/veranstaltungen/602-aktuelle-ffnungszeiten',
                    aHref: 'https://www.kunstakademie-duesseldorf.de/en/veranstaltungen/602-aktuelle-ffnungszeiten',
                    title: 'Aktuelle Öffnungszeiten',
                  },
                  {
                    href: '/en/veranstaltungen/614-erklrung-des-rektorats-zur-vermeidung-von-diskriminierung',
                    aHref: 'https://www.kunstakademie-duesseldorf.de/en/veranstaltungen/614-erklrung-des-rektorats-zur-vermeidung-von-diskriminierung',
                    title: 'Erklärung des Rektorats zur Vermeidung von Diskriminierung',
                  },
                ].map((item) => (
                  <div key={item.href} className="border-t border-black">
                    <div className="py-2 cursor-pointer select-none js-open-as-overlay" data-href={item.href}>
                      <div className="relative pr-16">
                        <strong>{item.title}</strong>
                        <Link href={item.href} className="absolute right-0 top-2 text-brand-accent js-open-as-overlay">Details</Link>
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
              <div className="relative border-b border-black pb-2 js-accordion-toggle" role="button" tabIndex={0} aria-expanded="true" aria-label="Vorlesungsverzeichnis ">
                <div className="w-2/3" aria-hidden="true">
                  <p>
                    <strong>Vorlesungsverzeichnis </strong>
                  </p>
                </div>
                <div className="absolute right-0 bottom-1 w-6 h-6 rounded bg-brand-paper" aria-hidden="true"></div>
              </div>
              <div className="block" style={{ display: 'block' }}>
                {[
                  {
                    href: 'https://www.kunstakademie-duesseldorf.de/files/SoSe_2025_Kommentiertes_Vorlesungsverzeichnis_fur_FB_II.pdf',
                    text: 'Kommentiertes Vorlesungsverzeichnis des Fachbereichs II für das Sommersemester 2025',
                  },
                  {
                    href: 'https://www.kunstakademie-duesseldorf.de/files/Vorlesungsverzeichnis_SoSe2025.pdf',
                    text: 'Vorlesungsverzeichnis für das Sommersemester 2025',
                  },
                ].map((d) => (
                  <div key={d.href} className="border-t border-black">
                    <div className="py-2">
                      <a href={d.href} className="relative block text-black">
                        <span className="font-bold inline-block max-w-[calc(100%-85px)]">{d.text}</span>
                        <span className="absolute right-0 top-0 text-brand-accent">Download</span>
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
              <div className="relative overflow-hidden" style={{ paddingBottom: '68.020304568528%' }}>
                <img className="absolute top-0 left-0 w-full h-full object-cover" data-src="/images/291023508_5483712861681141_8282438247927504025_n.png?w=1600" data-srcset="/images/291023508_5483712861681141_8282438247927504025_n.png?w=100 100w,/images/291023508_5483712861681141_8282438247927504025_n.png?w=200 200w,/images/291023508_5483712861681141_8282438247927504025_n.png?w=300 300w,/images/291023508_5483712861681141_8282438247927504025_n.png?w=400 400w,/images/291023508_5483712861681141_8282438247927504025_n.png?w=500 500w,/images/291023508_5483712861681141_8282438247927504025_n.png?w=640 640w,/images/291023508_5483712861681141_8282438247927504025_n.png?w=750 750w,/images/291023508_5483712861681141_8282438247927504025_n.png?w=828 828w,/images/291023508_5483712861681141_8282438247927504025_n.png?w=1024 1024w,/images/291023508_5483712861681141_8282438247927504025_n.png?w=1125 1125w,/images/291023508_5483712861681141_8282438247927504025_n.png?w=1242 1242w,/images/291023508_5483712861681141_8282438247927504025_n.png?w=1280 1280w,/images/291023508_5483712861681141_8282438247927504025_n.png?w=1400 1400w,/images/291023508_5483712861681141_8282438247927504025_n.png?w=1500 1500w,/images/291023508_5483712861681141_8282438247927504025_n.png?w=1600 1600w,/images/291023508_5483712861681141_8282438247927504025_n.png?w=1700 1700w,/images/291023508_5483712861681141_8282438247927504025_n.png?w=1800 1800w,/images/291023508_5483712861681141_8282438247927504025_n.png?w=1920 1920w" data-sizes="auto" alt="" src="/images/291023508_5483712861681141_8282438247927504025_n.png" width="1091" height="742" />
              </div>
            </figure>
          </div>
        </div>

        <div className="mt-16 px-2.5 md:px-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold">Studying at the Kunstakademie Düsseldorf</h2>
            <p className="[text-indent:23px]">
              "Art cannot be taught. There are no rules for art; it emerges from the human being, from their experience of self and world, which they express using artistic means." – Norbert Kricke (1973)
              <br />
              <br />
              <br />
              The core of all degree programs at the Kunstakademie Düsseldorf is the students' independent artistic activity, guided within classes led by professors. This central orientation on the working process of all members characterizes the unique study situation at the academy and fundamentally shapes the working atmosphere. The goal of artistic study is to cultivate one's own artistic position, personality, and attitude.
            </p>
            <p className="[text-indent:23px]">
              The Kunstakademie Düsseldorf offers three degree programs: Fine Arts, Art Education (for secondary and comprehensive schools), and a postgraduate Architecture program. Within these programs, students can choose to specialize in a variety of areas within the broader field of Fine Arts, such as painting, sculpture, photography, new media, stage design, etc., based on the profile of their respective class. All artistic degree programs incorporate courses in art-related sciences including art history, philosophy, sociology, pedagogy, and didactics.
            </p>
            <p className="[text-indent:23px]">In the artistic programs – apart from the advanced Architecture program – there are no postgraduate programs. However, in the art-related sciences, it is possible to pursue a PhD.</p>
            <p className="[text-indent:23px]">
              The Kunstakademie Düsseldorf provides its students with excellent working conditions in 23 classes led by internationally renowned artists, as well as in the Architecture class (supervised by four professors). As part of their studies, students have access to well-equipped, artistic-technical facilities (workshops) under the guidance of experienced teachers. The study is accompanied by a broad range of teaching offerings in the art-related sciences.
            </p>
          </div>
        </div>

        <div className="mt-16 -mx-2.5 md:-mx-10">
          <figure>
            <div className="h-screen relative z-[201]">
              <div className="h-full w-full">
                <img className="w-full h-full object-cover" data-src="/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=1600" data-srcset="/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=100 100w,/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=200 200w,/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=300 300w,/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=400 400w,/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=500 500w,/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=640 640w,/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=750 750w,/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=828 828w,/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=1024 1024w,/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=1125 1125w,/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=1242 1242w,/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=1280 1280w,/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=1400 1400w,/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=1500 1500w,/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=1600 1600w,/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=1700 1700w,/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=1800 1800w,/images/488799332_9800174270034957_1351242552884761268_n.jpg?w=1920 1920w" data-sizes="auto" alt="" src="/images/488799332_9800174270034957_1351242552884761268_n.jpg" width="1728" height="958" />
              </div>
            </div>
            <figcaption className="mt-1 ml-2.5 md:ml-10 w-1/2 text-xs leading-[13px]">
              <p>Graduation, class of Prof. Rita McBride, photo: Florian Bittner</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </main>
  )
}


