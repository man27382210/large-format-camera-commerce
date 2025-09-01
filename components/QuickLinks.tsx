import Link from 'next/link'

const items = [
  { title: 'Study Fine Arts', href: '/en/studium/179-fine-arts', desc: 'Foundational & advanced artistic studies.' },
  { title: 'Study Art Education', href: '/en/studium/182-art-education', desc: 'Teacher training with artistic practice.' },
  { title: 'Study Architecture', href: '/en/studium/183-architecture', desc: 'Architectural studies, including M.A. track.' },
  { title: 'Study Application', href: '/en/studium/5762-study-application', desc: 'Requirements, portfolio, deadlines.' },
  { title: 'Workshops', href: '/en/einrichtungen/191-workshops', desc: 'Excellent technical facilities, studios & labs.' },
  { title: 'Library', href: '/en/einrichtungen/205-library', desc: 'Extensive resources for theory & practice.' },
]

export default function QuickLinks() {
  return (
    <section className="section">
      <div className="container-wide">
        <h2 className="h2 mb-6">Quicklinks</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="card p-5">
              <div className="font-medium">{it.title}</div>
              <div className="text-sm text-neutral-600 mt-2">{it.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
