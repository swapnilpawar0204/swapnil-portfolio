
import { motion } from 'framer-motion';
import { Github, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { TerminalHeader } from '../components/TerminalHeader';
import { PROJECTS, CONTACT } from '../data/portfolio';

export const Projects = () => {
  return (
    <div className="min-h-screen bg-bg-page">
      <TerminalHeader
        command="docker compose ps"
        description="Featured projects — containerized, tested and built with CI"
      />

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {PROJECTS.map((project) => {
            // Safe defaults prevent undefined.map() errors
            const technologies = Array.isArray(project.technologies)
              ? project.technologies
              : [];

            const flow = Array.isArray(project.flow)
              ? project.flow
              : [];

            const features = Array.isArray(project.features)
              ? project.features
              : [];

            const githubLink = project.githubLink || '';
            const websiteLink = project.websiteLink || '';
            const referenceRepository =
              project.referenceRepository || '';

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-bg-surface border border-neutral-700 rounded-xl overflow-hidden shadow-card hover:border-primary-500/50 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="p-6 md:p-8 space-y-8">

                  {/* Project heading */}
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-primary-500/10 text-primary-500 border border-primary-500/30">
                      Featured Project
                    </span>

                    <h2 className="font-mono text-2xl md:text-3xl font-bold text-primary-500">
                      {project.title}
                    </h2>

                    <p className="text-neutral-200 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  {technologies.length > 0 && (
                    <div>
                      <h3 className="font-mono text-sm text-accent-500 mb-4">
                        $ cat tech_stack.txt
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-neutral-800 text-neutral-200 text-sm rounded border border-neutral-700 hover:border-primary-500/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pipeline flow */}
                  {flow.length > 0 && (
                    <div>
                      <h3 className="font-mono text-sm text-accent-500 mb-4">
                        $ cat pipeline_flow.txt
                      </h3>

                      <ol className="flex flex-col lg:flex-row lg:items-stretch gap-3">
                        {flow.map((step, i) => (
                          <li
                            key={`${step}-${i}`}
                            className="flex flex-col lg:flex-row lg:items-center gap-3 lg:flex-1"
                          >
                            <div className="flex-1 bg-bg-elevated border border-neutral-700 rounded-lg p-4 font-mono text-sm text-neutral-200">
                              <span className="text-primary-500 mr-2">
                                {i + 1}.
                              </span>
                              {step}
                            </div>

                            {i < flow.length - 1 && (
                              <ArrowRight
                                className="text-primary-500 shrink-0 rotate-90 lg:rotate-0 self-center"
                                size={18}
                              />
                            )}
                          </li>
                        ))}
                      </ol>

                      <p className="mt-3 text-xs text-neutral-500">
                        Conceptual flow summarising the project.
                      </p>
                    </div>
                  )}

                  {/* Features */}
                  {features.length > 0 && (
                    <div>
                      <h3 className="font-mono text-sm text-accent-500 mb-4">
                        $ ls features/
                      </h3>

                      <ul className="grid sm:grid-cols-2 gap-3">
                        {features.map((feature, i) => (
                          <li
                            key={`${feature}-${i}`}
                            className="flex items-start gap-3 text-neutral-200"
                          >
                            <CheckCircle2
                              size={18}
                              className="text-primary-500 mt-0.5 shrink-0"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Project links */}
                  <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-neutral-700">

                    {/* GitHub link only when available */}
                    {githubLink && (
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-primary-500 text-bg-surface font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-glow"
                      >
                        <Github className="mr-2 h-5 w-5" />
                        View on GitHub
                      </a>
                    )}

                    {/* Live website only when available */}
                    {websiteLink && (
                      <a
                        href={websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-primary-500 text-primary-500 font-semibold rounded-lg hover:bg-primary-500/10 transition-all duration-200"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Live Project
                      </a>
                    )}

                    {/* Reference repository, if applicable */}
                    {referenceRepository && (
                      <a
                        href={referenceRepository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-neutral-400 hover:text-primary-500 transition-colors"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Reference Repository
                      </a>
                    )}

                    {!githubLink && !websiteLink && (
                      <span className="text-xs font-mono text-neutral-500">
                        Project details available above.
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}

          {/* GitHub profile */}
          <div className="text-center">
            <a
              href={CONTACT.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-500 hover:text-primary-400 font-mono font-semibold"
            >
              <Github className="mr-2 h-4 w-4" />
              More on my GitHub profile
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};
