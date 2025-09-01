export default function Footer() {
  return (
    <footer id="target_footer" className="section border-t mt-24">
      <div className="container-wide grid md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <h3 className="font-semibold">Kunstakademie Düsseldorf</h3>
          <p className="p">© {new Date().getFullYear()} — This is a demo Next.js/Tailwind build based on a captured page.</p>
        </div>
        <div className="text-sm text-neutral-600">
          <p>
            This page restructures publicly visible content into a modern, accessible layout.
            Replace links and copy with official sources before production use.
          </p>
        </div>
      </div>
    </footer>
  )
}
