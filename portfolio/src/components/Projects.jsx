import { Cpu, Recycle } from 'lucide-react'

function Projects() {
  const projects = [
    {
      icon: Cpu,
      title: 'CrickPred: Cricket Predictions',
      tech: 'Machine Learning',
      description:
        'Machine learning system for ODI cricket score and win probability prediction using Python. Developed predictive models using XGBoost, CatBoost, and LGBM algorithms.',
      tags: ['Python'],
    },
    {
      icon: Recycle,
      title: 'GreenCycle: Waste Management',
      tech: 'UI/UX Design',
      description:
        'Professional UI/UX design for waste management and recycling platform. Created intuitive interfaces for efficient waste tracking and management systems.',
      tags: ['UI/UX Design', 'Figma', 'Prototyping'],
    },
  ]

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-left">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={project.title}
                className="project-card reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="project-icon">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {project.title}
                    </h3>
                    <span className="project-tech">{project.tech}</span>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-slate-600 bg-slate-100 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects