
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { TerminalHeader } from '../components/TerminalHeader';
import { CERTIFICATIONS } from '../data/portfolio';

export const Certifications = () => {
  return (
    <div className="min-h-screen bg-bg-page">
      <TerminalHeader
        command="ls certifications/"
        description="Cloud and reliability learning credentials"
      />

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {Array.isArray(CERTIFICATIONS) && CERTIFICATIONS.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {CERTIFICATIONS.map((cert, index) => {
                const credentialUrl = cert.credentialUrl?.trim() || '';

                return (
                  <motion.div
                    key={`${cert.title}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.6,
                    }}
                    viewport={{ once: true }}
                    className="bg-bg-surface border border-neutral-700 rounded-xl p-8 shadow-card hover:border-primary-500/50 hover:shadow-card-hover transition-all duration-300 flex flex-col"
                  >
                    {/* Certificate icon */}
                    <div className="w-14 h-14 rounded-full bg-primary-500/10 flex items-center justify-center mb-6">
                      <Award size={28} className="text-primary-500" />
                    </div>

                    {/* Certificate type */}
                    <span className="self-start px-3 py-1 mb-4 rounded-full text-xs font-mono bg-accent-500/10 text-accent-500 border border-accent-500/30">
                      {cert.kind || 'Learning Credential'}
                    </span>

                    {/* Certificate title */}
                    <h2 className="font-mono text-xl font-bold text-primary-500 mb-2">
                      {cert.title}
                    </h2>

                    {/* Issuer */}
                    <p className="text-neutral-200 mb-6">
                      {cert.issuer}
                    </p>

                    {/* Credential link */}
                    <div className="mt-auto pt-4 border-t border-neutral-700">
                      {credentialUrl ? (
                        <a
                          href={credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-sm text-primary-500 hover:text-primary-400 transition-colors"
                        >
                          <ExternalLink size={16} />
                          View credential
                        </a>
                      ) : (
                        <span className="font-mono text-sm text-neutral-500">
                          Completed — {cert.issuer}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-neutral-400">
              Certifications will be displayed here.
            </p>
          )}

          {/* Certification disclaimer */}
          <p className="mt-10 text-sm text-neutral-400 text-center max-w-2xl mx-auto">
            These represent training, learning achievements, and credentials.
            They are not equivalent to professional certification exams such
            as AWS Certified or Microsoft Azure certification exams.
          </p>

        </div>
      </section>
    </div>
  );
};
