
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  Github,
  Code2,
  Linkedin,
  BriefcaseBusiness,
  GraduationCap,
  ArrowRight,
  Cloud,
  Terminal,
} from 'lucide-react';

import { Grid3DBackground } from '../components/Grid3D';
import { Typewriter } from '../components/Typewriter';
import { SkillIcon } from '../components/SkillIcon';
import { ResumeButton } from '../components/ResumeButton';

import {
  PROFILE,
  HERO_CONTENT,
  SKILLS,
  FEATURED_SKILL_NAMES,
  CERTIFICATIONS,
  CONTACT,
  EXPERIENCE,
  PROJECTS,
} from '../data/portfolio';

export const Home = () => {
  const stats = [
    { label: 'Cloud Internship', value: '3 mo' },
    { label: 'Featured Project', value: String(PROJECTS.length) },
    { label: 'Credentials', value: String(CERTIFICATIONS.length) },
    { label: 'Cloud Platforms', value: 'Azure · AWS · GCP' },
  ];

  const featuredSkills = FEATURED_SKILL_NAMES
    .map((name) => SKILLS.find((skill) => skill.name === name))
    .filter((skill) => skill !== undefined);

  const featuredProject = PROJECTS[0];

  return (
    <div className="min-h-screen bg-bg-page relative overflow-hidden">
      <Grid3DBackground />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Terminal identity */}
            <div className="font-mono text-xl md:text-3xl font-bold tracking-wide">
              <span className="text-accent-500 mr-3">$</span>
              <span className="text-primary-500">whoami</span>
            </div>

            {/* Main heading */}
            <h1 className="font-mono font-bold tracking-tight">
              <span className="block text-4xl md:text-6xl lg:text-8xl text-primary-500">
                <Typewriter text={PROFILE.name} delay={80} />
                <span className="terminal-cursor ml-2" />
              </span>

              <span className="block mt-5 text-2xl md:text-4xl lg:text-5xl text-neutral-200">
                 {PROFILE.title}
              </span>
            </h1>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-lg md:text-2xl text-neutral-200 max-w-4xl mx-auto leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Location and availability */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap justify-center items-center gap-3 font-mono text-sm text-accent-500"
            >
              <span>📍 {PROFILE.location}</span>
              <span className="text-neutral-600">|</span>
              <span>{PROFILE.level}</span>
              <span className="text-neutral-600">|</span>
              <span className="text-green-400">
                Open to Opportunities
              </span>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center pt-4"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-bg-surface transition-all duration-200 font-semibold tracking-wide rounded-lg shadow-glow hover:shadow-card-hover"
              >
                <Code2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 border-2 border-neutral-600 bg-neutral-800 text-neutral-200 hover:border-primary-500 hover:text-primary-500 transition-all duration-200 font-semibold tracking-wide rounded-lg"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Contact Me
              </Link>

              <ResumeButton variant="outline" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 relative z-10 bg-bg-surface/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-bg-elevated border border-neutral-1000 p-5 md:p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:border-primary-500/50">
                  <div className="font-mono text-2xl md:text-3xl font-bold text-primary-500 mb-2">
                    {stat.value}
                  </div>

                  <div className="text-sm text-neutral-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE & TRAINING ================= */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Experience & Learning
            </h2>

            <p className="text-neutral-400 max-w-2xl mx-auto">
              Building practical knowledge through internship experience,
              technical training, and hands-on engineering projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Internship card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-bg-elevated border border-neutral-700 p-8 rounded-xl hover:border-primary-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-500/10 rounded-lg">
                  <BriefcaseBusiness className="h-6 w-6 text-primary-500" />
                </div>

                <div>
                  <h3 className="font-mono text-xl font-bold text-neutral-100">
                    Internship Experience
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Cloud & DevOps
                  </p>
                </div>
              </div>

              {EXPERIENCE.map((experience, index) => (
                <div
                  key={`${experience.company}-${index}`}
                  className="mb-6 last:mb-0 border-l-2 border-primary-500/30 pl-4"
                >
                  <h4 className="text-neutral-100 font-semibold">
                    {experience.role}
                  </h4>

                  <p className="text-primary-500 text-sm mt-1">
                    {experience.company}
                  </p>

                  <p className="text-neutral-500 text-xs mt-1">
                    {experience.period}
                  </p>

                  <p className="text-neutral-400 text-sm mt-2">
                    {experience.type}
                  </p>
                </div>
              ))}

              <Link
                to="/experience"
                className="inline-flex items-center text-primary-500 hover:text-primary-400 font-mono text-sm mt-6 group"
              >
                View Experience
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Training card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-bg-elevated border border-neutral-700 p-8 rounded-xl hover:border-primary-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-500/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary-500" />
                </div>

                <div>
                  <h3 className="font-mono text-xl font-bold text-neutral-100">
                    Technical Training
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Cloud & Infrastructure
                  </p>
                </div>
              </div>

              <div className="border-l-2 border-primary-500/30 pl-4 mb-6">
                <h4 className="text-neutral-100 font-semibold">
                  Cloud Technology Training
                </h4>

                <p className="text-primary-500 text-sm mt-1">
                  Elevance Skills Technology
                </p>

                <p className="text-neutral-500 text-xs mt-1">
                  November 2026
                </p>

                <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
                  AWS-focused project training involving real-time
                  website deployment and practical cloud concepts.
                </p>
              </div>


              <Link
                to="/experience"
                className="inline-flex items-center text-primary-500 hover:text-primary-400 font-mono text-sm mt-6 group"
              >
                View Learning Journey
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECT ================= */}
      {featuredProject && (
        <section className="py-24 relative z-10 bg-bg-surface/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-bg-elevated border border-neutral-700 rounded-2xl p-8 md:p-12 shadow-card hover:border-primary-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-accent-500 font-mono text-sm mb-5">
                <Terminal className="h-4 w-4" />
                FEATURED ENGINEERING PROJECT
              </div>

              <h2 className="font-mono text-3xl md:text-5xl font-bold text-primary-500 mb-6">
                {featuredProject.title}
              </h2>

              <p className="text-neutral-200 text-lg leading-relaxed max-w-4xl mb-8">
                {featuredProject.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-2 text-sm font-mono bg-bg-surface border border-neutral-700 rounded-md text-neutral-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project features */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {featuredProject.features.slice(0, 6).map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2 text-neutral-400 text-sm"
                  >
                    <span className="text-primary-500 mt-1">▹</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={featuredProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-bg-surface font-semibold rounded-lg transition-all duration-200"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View Project on GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>

                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-6 py-4 border-2 border-neutral-600 text-neutral-200 hover:border-primary-500 hover:text-primary-500 font-semibold rounded-lg transition-all duration-200"
                >
                  All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ================= CORE TECHNOLOGIES ================= */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-4">
              <Cloud className="h-8 w-8 text-primary-500" />
            </div>

            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Core Technologies
            </h2>

            <p className="text-neutral-400 max-w-2xl mx-auto">
              Technologies used in my internship, hands-on labs,
              and engineering projects — with honest proficiency
              levels on the Skills page.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-bg-elevated border border-neutral-700 p-4 rounded-lg text-center hover:border-primary-500/50 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-3">
                  <SkillIcon skill={skill} />
                </div>

                <div className="font-mono text-sm text-neutral-200 font-medium">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/skills"
              className="inline-flex items-center text-primary-500 hover:text-primary-400 font-mono font-semibold group"
            >
              <span className="mr-2">Explore Technical Skills</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= HIRING CTA ================= */}
      <section className="py-24 relative z-10 bg-gradient-to-b from-transparent to-bg-elevated/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-elevated border border-primary-500/20 p-8 md:p-12 rounded-2xl shadow-glow"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-6">
              Open to Cloud & DevOps Opportunities
            </h2>

            <p className="text-lg md:text-xl text-neutral-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Seeking entry-level opportunities in Cloud Engineering,
              DevOps, SRE, Cloud Operations, or Infrastructure Engineering.
              Ready to learn, troubleshoot, and contribute to engineering teams.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-bg-surface font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-glow hover:shadow-card-hover"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <a
                href={CONTACT.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-600 text-neutral-200 hover:border-primary-500 hover:text-primary-500 font-semibold rounded-lg transition-all duration-200"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>

              <a
                href={CONTACT.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-600 text-neutral-200 hover:border-primary-500 hover:text-primary-500 font-semibold rounded-lg transition-all duration-200"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
