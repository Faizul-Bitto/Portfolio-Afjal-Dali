import { Mail } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-left">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's Connect</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="card p-8 reveal">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Get In Touch</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              I'm always open to discussing new opportunities, innovative projects, or potential collaborations. Feel free to reach out.
            </p>
            <div className="space-y-4">
              <a href="mailto:afjal.dali23@gmail.com" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition">
                <div className="project-icon">
                  <Mail className="w-5 h-5" />
                </div>
                <span>afjal.dali23@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/afjal-dali" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition">
                <div className="project-icon">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                    />
                  </svg>
                </div>
                <span>linkedin.com/in/afjal-dali</span>
              </a>
            </div>
          </div>

          <div className="card p-8 reveal" style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Availability</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Currently open to freelance projects and full-time opportunities in frontend development and UI/UX design.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-slate-700">Open to opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-slate-700">Remote work preferred</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-slate-700">Flexible schedule</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact