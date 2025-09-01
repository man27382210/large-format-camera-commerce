export default function Degrees() {
  return (
    <section className="section bg-neutral-50">
      <div className="container-wide grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="h2">Degree programs</h2>
          <p className="p">
            The Kunstakademie Düsseldorf offers three degree programs: Fine Arts, Art Education, and Architecture.
            In Fine Arts and Art Education, students work primarily in classes under the guidance of professors and artistic staff
            and can attend a broad range of courses in art-related sciences (art history, philosophy, sociology, pedagogy, didactics).
          </p>
          <p className="p">
            Beyond the advanced <em>Architecture</em> program, the academy awards the Diploma (equivalent to a Master of Fine Arts)
            in the artistic programs. In art-related sciences, a PhD is possible.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          <li className="card p-5">
            <div className="font-medium">Fine Arts (Diploma)</div>
            <div className="text-sm text-neutral-600">Class-based study with interdisciplinary theory.</div>
          </li>
          <li className="card p-5">
            <div className="font-medium">Art Education (1st State Exam)</div>
            <div className="text-sm text-neutral-600">Teacher training with strong studio practice.</div>
          </li>
          <li className="card p-5">
            <div className="font-medium">Architecture (B.A./M.A.)</div>
            <div className="text-sm text-neutral-600">Architecture studies with advanced research options.</div>
          </li>
          <li className="card p-5">
            <div className="font-medium">PhD (Art-related Sciences)</div>
            <div className="text-sm text-neutral-600">Doctoral research with expert supervision.</div>
          </li>
        </ul>
      </div>
    </section>
  )
}
