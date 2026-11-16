
import { motion } from 'framer-motion';
import {
  Terminal,
  GraduationCap,
  Cloud,
  Briefcase,
  Rocket,
  Zap,
  FileText,
  ArrowRight,
  MapPin,
  Target,
  Code2,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';

import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import { ResumeButton } from '../components/ResumeButton';

import {
  ABOUT_PARAGRAPHS,
  ABOUT_FACTS,
  SPECIALIZATIONS,
  PHILOSOPHY,
  LEARNING_JOURNEY,
  PROFILE,
  TRAINING,
} from '../data/portfolio';

const journeyIcons = [
  GraduationCap,
  Cloud,
  Briefcase,
  Rocket,
  Code2,
];

const philosophyIcons = [
  Zap,
  FileText,
  Rocket,
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const About = () => {
  const timeline = LEARNING_JOURNEY.map((item, index) => ({
    ...item,
    icon: journeyIcons[index % journeyIcons.length],
  }));

  const philosophyPoints = PHILOSOPHY.map((item, index) => ({
    ...item,
    icon: philosophyIcons[index % philosophyIcons.length],
  }));

  return (
    <div className="min-h-screen bg-bg-page">

      <TerminalHeader
        command="cat about.txt"
        description="My background, education, internships and cloud learning journey"
      />

      {/* INTRODUCTION */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
                <Terminal size={24} className="text-primary-500" />
              </div>

              <span className="font-mono text-accent-500 text-sm">
                ABOUT_ME
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-4">
              About <span className="text-primary-500">Me</span>
            </h1>

            <p className="text-neutral-400 max-w-2xl leading-relaxed">
              My journey from computer applications to cloud infrastructure,
              automation and reliable systems.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">

            {/* BIO */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="relative overflow-hidden bg-bg-surface border border-neutral-700 rounded-2xl p-6 md:p-8 shadow-card">

                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative flex items-center justify-between border-b border-neutral-700 pb-4 mb-6">
                  <div className="font-mono text-sm">
                    <span className="text-accent-500">$</span>
                    <span className="text-primary-500"> cat </span>
                    <span className="text-neutral-400">bio.txt</span>
                  </div>

                  <div className="flex gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                </div>

                <div className="relative space-y-5 text-neutral-300 leading-relaxed">

                  <Typewriter
                    text={`Hello, I'm ${PROFILE.name} — an aspiring Cloud & DevOps engineer.`}
                    delay={30}
                    className="text-primary-500 font-semibold text-lg md:text-xl block"
                  />

                  {ABOUT_PARAGRAPHS.map((paragraph, index) => (
                    <motion.p
                      key={paragraph}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        delay: 0.2 + index * 0.15,
                        duration: 0.5,
                      }}
                      viewport={{ once: true }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}

                  <div className="mt-6 p-4 rounded-xl bg-primary-500/5 border border-primary-500/20">
                    <div className="flex items-center gap-2 text-primary-500 font-mono text-sm mb-2">
                      <Target size={16} />
                      CAREER_OBJECTIVE
                    </div>

                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {PROFILE.objective}. I want to contribute to real
                      infrastructure and automation projects while continuously
                      improving my technical skills.
                    </p>
                  </div>

                  <div className="pt-4">
                    <ResumeButton variant="primary" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* QUICK FACTS */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >

              <div className="bg-bg-elevated border border-neutral-700 rounded-2xl p-6 hover:border-primary-500/30 transition-colors">

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary-500/10">
                    <Code2 size={20} className="text-primary-500" />
                  </div>

                  <h2 className="font-mono text-primary-500 font-semibold text-lg">
                    Quick Facts
                  </h2>
                </div>

                <div className="space-y-4">
                  {ABOUT_FACTS.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-start justify-between gap-4 pb-3 border-b border-neutral-800 last:border-0 last:pb-0"
                    >
                      <span className="text-neutral-400 text-sm">
                        {fact.label}
                      </span>

                      <span className="text-neutral-200 font-mono text-sm text-right">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* LOCATION */}
              <div className="bg-bg-elevated border border-neutral-700 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={20} className="text-primary-500" />

                  <h2 className="font-mono text-primary-500 font-semibold">
                    Location
                  </h2>
                </div>

                <p className="text-neutral-300">
                  {PROFILE.location}
                </p>

                <p className="text-neutral-500 text-sm mt-2">
                  Open to relocation across India.
                </p>
              </div>

              {/* FOCUS AREAS */}
              <div className="bg-bg-elevated border border-neutral-700 rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-5">
                  <Cloud size={20} className="text-primary-500" />

                  <h2 className="font-mono text-primary-500 font-semibold text-lg">
                    Focus Areas
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {SPECIALIZATIONS.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 bg-neutral-800/80 text-neutral-300 text-sm rounded-lg border border-neutral-700 hover:border-primary-500/50 hover:text-primary-500 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* TRAINING & PROGRAMS */}
      <section className="py-16 md:py-20 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-5">
              <BookOpen size={16} className="text-primary-500" />

              <span className="font-mono text-primary-500 text-sm">
                CLOUD & DEVOPS LEARNING
              </span>
            </div>

            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Training & Programs
            </h2>

            <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Additional cloud and DevOps learning programs supporting
              my practical engineering journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">

            {TRAINING.map((training, index) => (
              <motion.div
                key={training.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
                className="group bg-bg-elevated border border-neutral-700 rounded-2xl p-6 md:p-8 hover:border-primary-500/40 hover:-translate-y-1 transition-all duration-300"
              >

                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/10">
                    <Cloud size={24} className="text-primary-500" />
                  </div>

                  <span className="font-mono text-accent-500 text-sm">
                    {training.period}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-neutral-100 mb-2">
                  {training.title}
                </h3>

                <p className="text-primary-500 text-sm font-medium mb-4">
                  {training.organization}
                </p>

                <p className="text-neutral-400 text-sm leading-relaxed mb-5">
                  {training.description}
                </p>

                <div className="inline-flex items-center gap-2 text-xs text-neutral-300 bg-neutral-800 border border-neutral-700 px-3 py-2 rounded-lg mb-5">
                  <CheckCircle2 size={14} className="text-primary-500" />
                  {training.status}
                </div>

                <div className="space-y-3">
                  {training.activities.map((activity) => (
                    <div
                      key={activity}
                      className="flex items-start gap-3 text-sm text-neutral-400"
                    >
                      <ArrowRight
                        size={15}
                        className="text-primary-500 mt-0.5 shrink-0"
                      />

                      <span>{activity}</span>
                    </div>
                  ))}
                </div>

                {'project' in training && (
                  <div className="mt-6 p-4 rounded-xl bg-primary-500/5 border border-primary-500/20">
                    <p className="text-xs font-mono text-primary-500 mb-2">
                      PROJECT
                    </p>

                    <p className="text-neutral-200 text-sm">
                      {training.project}
                    </p>
                  </div>
                )}

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* LEARNING JOURNEY */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Learning Journey
            </h2>

            <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              From completing my BCA in May 2026 to cloud internships,
              training and hands-on engineering projects.
            </p>
          </motion.div>

          <div className="relative">

            {/* Timeline Line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-700 to-transparent" />

            <div className="space-y-12">

              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: isEven ? -30 : 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.6,
                    }}
                    viewport={{ once: true }}
                    className={`relative flex ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } items-start`}
                  >

                    {/* Timeline Icon */}
                    <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center border-4 border-bg-page shadow-glow z-10">
                      <IconComponent
                        size={17}
                        className="text-bg-surface"
                      />
                    </div>

                    {/* Timeline Card */}
                    <div
                      className={`ml-16 md:ml-0 md:w-1/2 ${
                        isEven ? 'md:pr-12' : 'md:pl-12'
                      }`}
                    >
                      <div className="group bg-bg-elevated border border-neutral-700 rounded-2xl p-6 md:p-7 hover:border-primary-500/40 hover:-translate-y-1 transition-all duration-300 shadow-card">

                        <div className="flex items-center justify-between gap-4 mb-3">
                          <span className="font-mono text-accent-500 text-sm">
                            {item.period}
                          </span>

                          <ArrowRight
                            size={16}
                            className="text-primary-500/60 group-hover:text-primary-500 transition-colors"
                          />
                        </div>

                        <h3 className="font-semibold text-lg md:text-xl text-neutral-100 mb-3">
                          {item.title}
                        </h3>

                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                  </motion.div>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-16 md:py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-5">
              <Zap size={16} className="text-primary-500" />

              <span className="font-mono text-primary-500 text-sm">
                ENGINEERING_MINDSET
              </span>
            </div>

            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              How I Work
            </h2>

            <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              The principles I follow while learning, building projects
              and approaching technical problems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

            {philosophyPoints.map((point, index) => {
              const IconComponent = point.icon;

              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.6,
                  }}
                  viewport={{ once: true }}
                  className="group bg-bg-elevated border border-neutral-700 rounded-2xl p-7 md:p-8 hover:border-primary-500/40 hover:-translate-y-1 transition-all duration-300"
                >

                  <div className="w-16 h-16 rounded-2xl bg-primary-500/10 border border-primary-500/10 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors duration-300">
                    <IconComponent
                      size={30}
                      className="text-primary-500"
                    />
                  </div>

                  <h3 className="font-semibold text-xl text-neutral-100 mb-4">
                    {point.title}
                  </h3>

                  <p className="text-neutral-400 leading-relaxed text-sm">
                    {point.description}
                  </p>

                  <div className="mt-7 h-1 w-10 rounded-full bg-primary-500/30 group-hover:w-20 group-hover:bg-primary-500 transition-all duration-300" />
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-primary-500/20 bg-primary-500/5 p-8 md:p-12 text-center"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-transparent pointer-events-none" />

            <div className="relative">
              <Rocket
                size={36}
                className="text-primary-500 mx-auto mb-5"
              />

              <h2 className="text-2xl md:text-3xl font-bold text-neutral-100 mb-4">
                Always Learning. Always Building.
              </h2>

              <p className="text-neutral-400 max-w-2xl mx-auto mb-7 leading-relaxed">
                I am looking forward to learning from experienced engineers,
                working on real infrastructure and contributing to meaningful
                technology projects.
              </p>

              <div className="flex justify-center">
                <ResumeButton variant="primary" />
              </div>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};
