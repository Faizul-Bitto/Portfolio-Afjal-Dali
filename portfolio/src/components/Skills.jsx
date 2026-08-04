import { CodeXml, PanelsTopLeft, Database, Wrench } from 'lucide-react'

function Skills() {
  const languages = [
    { name: 'JavaScript', bold: true },
    { name: 'Dart', bold: true },
    { name: 'Python', bold: false },
    { name: 'Java', bold: false },
    { name: 'PHP', bold: false },
    { name: 'C++', bold: false },
  ]

  const frameworks = [
    { name: 'React', bold: true },
    { name: 'Flutter', bold: true },
    { name: 'Bootstrap', bold: false },
    { name: 'Tailwind CSS', bold: false },
    { name: 'jQuery', bold: false },
  ]

  const databases = ['MySQL', 'PostgreSQL', 'MongoDB']

  const tools = [
    'Tailwind CSS',
    'Bootstrap',
    'Git',
    'GitHub',
    'Postman',
    'VS Code',
    'Figma',
    'Chrome DevTools',
  ]

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-left">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Languages */}
          <div className="card p-6 reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="project-icon">
                <CodeXml className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Programming Languages</h3>
            </div>
            <ul className="space-y-3">
              {languages.map((lang) => (
                <li key={lang.name} className="flex items-center gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span className={lang.bold ? 'font-semibold' : ''}>{lang.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Frameworks & Backend */}
          <div className="card p-6 reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="project-icon">
                <PanelsTopLeft className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Frameworks & Libraries</h3>
            </div>
            <ul className="space-y-3">
              {frameworks.map((fw) => (
                <li key={fw.name} className="flex items-center gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span className={fw.bold ? 'font-semibold' : ''}>{fw.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Databases */}
          <div className="card p-6 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="project-icon">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Databases</h3>
            </div>
            <ul className="space-y-3">
              {databases.map((db) => (
                <li key={db} className="flex items-center gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>{db}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card p-8 mt-8 reveal">
          <div className="flex items-center gap-3 mb-6">
            <div className="project-icon">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Frontend Tools & Technologies</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span key={tool} className="skill-tag">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills