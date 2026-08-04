import { ArrowDownRight, Mail } from 'lucide-react'

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative z-10">
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-[8%] w-24 h-24 bg-blue-200/30 rounded-full blur-2xl hidden lg:block"></div>
      <div className="absolute bottom-1/3 right-[10%] w-32 h-32 bg-indigo-200/30 rounded-full blur-2xl hidden lg:block"></div>
      <div className="absolute top-1/2 left-[45%] w-16 h-16 bg-sky-100/40 rounded-full blur-xl hidden lg:block"></div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="reveal">
              <p className="section-label">Front End Engineer</p>
              <h1 className="hero-name text-5xl sm:text-6xl lg:text-7xl mt-4">
                Md Afjal Hossain <br />
                <span className="accent">Dali</span>
              </h1>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <p className="hero-subtitle text-xl sm:text-2xl font-medium">
                Front End Engineer
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <p className="hero-description text-base sm:text-lg text-slate-600 leading-relaxed">
                Creating beautiful, responsive user interfaces with modern frontend technologies. Specialized in <span className="font-semibold text-slate-700">React</span>, <span className="font-semibold text-slate-700">Flutter</span>, <span className="font-semibold text-slate-700">Dart</span>, HTML, CSS, JavaScript, and modern frameworks like Bootstrap and Tailwind CSS.
              </p>
            </div>

            <div
              className="reveal flex flex-wrap gap-4 pt-4"
              style={{ transitionDelay: '0.3s' }}
            >
              <button onClick={() => scrollTo('projects')} className="btn-primary">
                <span>View Projects</span>
                <ArrowDownRight className="w-4 h-4" />
              </button>
              <button onClick={() => scrollTo('contact')} className="btn-outline">
                <span>Get in Touch</span>
                <Mail className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Stats */}
            <div
              className="reveal grid grid-cols-3 gap-6 pt-8 border-t border-slate-200"
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="group">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">1+</p>
                <p className="text-sm text-slate-600 mt-1">Years Experience</p>
              </div>
              <div className="group">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">5+</p>
                <p className="text-sm text-slate-600 mt-1">Projects Completed</p>
              </div>
              <div className="group">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">5+</p>
                <p className="text-sm text-slate-600 mt-1">Technologies</p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center order-1 md:order-2 reveal-scale">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-60 blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-tr from-indigo-100 to-sky-100 rounded-full opacity-60 blur-sm"></div>

              {/* Decorative ring */}
              <div className="absolute -inset-3 border-2 border-dashed border-blue-200 rounded-[2rem] animate-[spin_30s_linear_infinite]"></div>

              {/* Profile image with professional frame */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl transform rotate-3 shadow-2xl shadow-blue-500/20"></div>
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl shadow-indigo-500/10">
                  <div className="relative rounded-2xl overflow-hidden bg-white">
                    <img
                      src="/profile.jpeg"
                      alt="MD Afjal Hossain Dali (Saikat)"
                      className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero