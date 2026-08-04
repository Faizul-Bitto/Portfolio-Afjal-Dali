import { GraduationCap, BookOpen, School } from 'lucide-react'

function Education() {
  const education = [
    {
      icon: GraduationCap,
      school: 'North South University',
      degree: 'Bachelor of Science in Computer Science and Engineering (CSE)',
      description: 'Focused on software engineering, web technologies, and frontend development',
      period: 'Jan 2020 – Jun 2024',
    },
    {
      icon: BookOpen,
      school: 'Vashantek Govt. College',
      degree: 'Higher Secondary Certificate (HSC), Science',
      description: 'Science background with focus on Mathematics, Physics, and Chemistry',
      period: 'Sep 2017 – Apr 2019',
    },
    {
      icon: School,
      school: 'Mirpur Bangla School & College',
      degree: 'Secondary School Certificate (SSC), Science',
      description: 'Strong foundation in science and analytical thinking',
      period: 'Jan 2007 – Feb 2017',
    },
  ]

  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-left">
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic Qualifications</h2>
        </div>

        <div className="mt-12 space-y-6">
          {education.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.school}
                className="card p-8 reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="project-icon flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {item.school}
                      </h3>
                      <p className="text-blue-600 font-semibold">
                        {item.degree}
                      </p>
                      <p className="text-slate-600 text-sm mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-slate-600 bg-slate-100 px-4 py-2 rounded-full w-fit flex-shrink-0">
                    {item.period}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education