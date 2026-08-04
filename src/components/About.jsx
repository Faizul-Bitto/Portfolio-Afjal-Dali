import { User, Target } from 'lucide-react'

function About() {
  const skillTags = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Bootstrap',
    'Tailwind CSS',
    'React',
    'Flutter',
    'Git',
    'Responsive Design',
  ]

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-left">
          <p className="section-label">About Me</p>
          <h2 className="section-title">Professional Summary</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="card p-8 reveal">
            <div className="flex items-start gap-4">
              <div className="project-icon">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Profile</h3>
                <p className="text-slate-600 leading-relaxed">
                  Frontend-focused developer with hands-on experience building real-world web applications. Specialized in creating clean, maintainable user interfaces with modern frameworks and responsive design.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8 reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-start gap-4">
              <div className="project-icon">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Expertise</h3>
                <p className="text-slate-600 leading-relaxed">
                  Focus on creating responsive user interfaces, modern design systems, component architecture, and performance optimization. Specialized in React, Flutter, and modern CSS frameworks to deliver production-ready frontend solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-8 sm:p-10 mt-8 reveal" style={{ transitionDelay: '0.2s' }}>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Technical Proficiency</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            My tech stack includes <span className="text-blue-600 font-semibold">React, Flutter, JavaScript, Dart, HTML, CSS, Bootstrap, and Tailwind CSS</span>. I build responsive, modern user interfaces with clean code and best practices.
          </p>
          <div className="flex flex-wrap gap-3">
            {skillTags.map((tag) => (
              <span key={tag} className="skill-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About