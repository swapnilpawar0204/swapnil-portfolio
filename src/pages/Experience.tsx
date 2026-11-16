
import { motion } from 'framer-motion';
import {
  Briefcase,
  CheckCircle2,
  Calendar,
  MapPin,
  Cloud,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

import { TerminalHeader } from '../components/TerminalHeader';
import { EXPERIENCE } from '../data/portfolio';

export const Experience = () => {
  const totalExperiences = EXPERIENCE.length;

  return (
    <div className="min-h-screen bg-bg-page">
      <TerminalHeader
        command="cat experience.log"
        description="Professional experience — Cloud, Azure, AWS & infrastructure"
      />

      {/* Experience Overview */}
      <section className="pt-12 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <div className="bg-bg-surface border border-neutral-700 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="text-primary-500" size={22} />
                <span className="text-neutral-400 text-sm font-mono">
                  Experience
                </span>
              </div>
              <p className="text-3xl font-bold text-neutral-100">
                {totalExperiences}
              </p>
              <p className="text-sm text-neutral-500 mt-1">
                Internship / Experience entries
              </p>
            </div>

            <div className="bg-bg-surface border border-neutral-700 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <Cloud className="text-primary-500" size={22} />
                <span className="text-neutral-400 text-sm font-mono">
                  Focus Area
                </span>
              </div>
              <p className="text-xl font-bold text-neutral-100">
                Cloud Computing
              </p>
              <p className="text-sm text-neutral-500 mt-1">
                Azure · AWS · Infrastructure
              </p>
            </div>

            <div className="bg-bg-surface border border-neutral-700 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-primary-500" size={22} />
                <span className="text-neutral-400 text-sm font-mono">
                  Location
                </span>
              </div>
              <p className="text-xl font-bold text-neutral-100">India</p>
              <p className="text-sm text-neutral-500 mt-1">
                Open to relocation
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-mono text-primary-500 text-sm mb-3">
              {'// professional journey'}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-100">
              Experience & Internships
            </h1>
            <p className="text-neutral-400 mt-3 max-w-2xl">
              My practical learning journey in cloud computing, infrastructure,
              troubleshooting, and technology operations.
            </p>
          </div>

          {EXPERIENCE.length === 0 ? (
            <div className="rounded-xl border border-neutral-700 bg-bg-surface p-8 text-center">
              <Briefcase
                size={40}
                className="mx-auto text-neutral-500 mb-4"
              />
              <h2 className="text-xl font-semibold text-neutral-200">
                Experience coming soon
              </h2>
              <p className="text-neutral-400 mt-2">
                My internship and professional experience will be displayed here.
              </p>
            </div>
          ) : (
            <div className="relative space-y-8">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-neutral-700 hidden sm:block" />

              {EXPERIENCE.map((job, index) => (
                <motion.article
                  key={`${job.role}-${job.company}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.15 }}
                  className="relative sm:pl-14"
                >
                  <div className="absolute left-3 top-8 hidden sm:flex h-5 w-5 items-center justify-center rounded-full bg-bg-page border-2 border-primary-500">
                    <div className="h-2 w-2 rounded-full bg-primary-500" />
                  </div>

                  <div className="bg-bg-surface border border-neutral-700 rounded-xl overflow-hidden shadow-card hover:border-primary-500/50 transition-all duration-300">
                    {/* Header */}
                    <header className="bg-bg-elevated border-b border-neutral-700 p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-neutral-800 text-primary-500 shrink-0">
                            <Briefcase size={26} />
                          </div>

                          <div>
                            <h2 className="font-mono text-xl md:text-2xl font-bold text-primary-500">
                              {job.role}
                            </h2>

                            <p className="text-neutral-200 text-lg font-medium mt-1">
                              {job.company}
                            </p>

                            <p className="text-neutral-500 text-sm mt-2">
                              Cloud Computing · Infrastructure · Operations
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-3">
                          <span className="inline-flex items-center gap-2 font-mono text-sm text-accent-500">
                            <Calendar size={16} />
                            {job.period}
                          </span>

                          <span className="px-3 py-1 rounded-full text-xs font-mono bg-primary-500/10 text-primary-500 border border-primary-500/30">
                            {job.type}
                          </span>
                        </div>
                      </div>
                    </header>

                    {/* Responsibilities */}
                    <div className="p-6 md:p-8 space-y-8">
                      <div>
                        <h3 className="font-mono text-sm text-accent-500 mb-4">
                          $ ls responsibilities/
                        </h3>

                        <ul className="space-y-3">
                          {job.responsibilities.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-neutral-300 leading-relaxed"
                            >
                              <CheckCircle2
                                size={18}
                                className="text-primary-500 mt-1 shrink-0"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="font-mono text-sm text-accent-500 mb-4">
                          $ cat technologies.txt
                        </h3>

                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1.5 bg-neutral-800 text-neutral-200 text-sm rounded-md border border-neutral-700 hover:border-primary-500/40 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="pt-5 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500">
                          <Clock size={14} />
                          {job.period}
                        </span>

                        <span className="inline-flex items-center gap-2 text-xs font-mono text-primary-500">
                          Cloud & Infrastructure
                          <ArrowUpRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Career Direction */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Cloud className="text-primary-500 shrink-0 mt-1" size={28} />

              <div>
                <h2 className="text-xl font-bold text-neutral-100">
                  Career Focus
                </h2>

                <p className="text-neutral-400 mt-2 leading-relaxed">
                  Building practical skills in cloud infrastructure, Linux,
                  automation, monitoring, troubleshooting, and DevOps practices
                  to grow into Cloud Engineer, DevOps Engineer, and Site
                  Reliability Engineer roles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
