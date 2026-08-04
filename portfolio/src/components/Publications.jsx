import { FileText, ExternalLink } from 'lucide-react'

function Publications() {
  const publicationUrl = 'https://ieeexplore.ieee.org/document/11004737'

  return (
    <section id="publications" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-left">
          <p className="section-label">Research</p>
          <h2 className="section-title">Publications</h2>
        </div>

        <div className="card p-8 border-l-4 border-l-blue-500 reveal">
          <div className="flex items-start gap-4 mb-4">
            <div className="project-icon">
              <FileText className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <a
                href={publicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors inline-block"
              >
                Improving ODI Cricket Predictions: A Novel Approach Using Key Features and Advanced Regression Models
              </a>
              <p className="text-blue-600 text-sm font-semibold mb-3">IEEE Xplore • 2024</p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Developed a machine learning pipeline integrating XGBoost, CatBoost, Gradient Boosting, and LGBM for score and win probability prediction. Integrated the final model into a mobile app using Flask backend and Flutter frontend.
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs text-slate-600 bg-slate-100 px-3 py-1 rounded-full">Python</span>
                <a
                  href={publicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link text-sm"
                >
                  <span>View Publication</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Publications