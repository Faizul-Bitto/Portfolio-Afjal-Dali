function Experience() {
  const responsibilities = [
    <>
      Developing responsive web applications using <span className="font-semibold">React</span>, HTML, CSS, and JavaScript
    </>,
    <>
      Building cross-platform mobile applications using <span className="font-semibold">Flutter</span> and <span className="font-semibold">Dart</span>
    </>,
    'Collaborating with design and backend teams to deliver high-quality user interfaces',
  ]

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-left">
          <p className="section-label">Career</p>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="mt-12">
          {/* Experience Item */}
          <div className="card p-8 reveal">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Front End Engineer</h3>
                <p className="text-blue-600 font-semibold mt-1">
                  Zenith Tech Innovation Ltd.
                </p>
              </div>
              <span className="text-sm text-slate-600 bg-slate-100 px-4 py-2 rounded-full w-fit">
                2025 - Present
              </span>
            </div>
            <ul className="space-y-2 text-slate-700">
              {responsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience