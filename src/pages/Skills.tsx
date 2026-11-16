
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Code,
  Database,
  Terminal as TerminalIcon,
  Cpu,
  ChevronRight,
} from 'lucide-react';

import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import { SKILLS, SKILLS_BY_CATEGORY, LEVELS } from '../data/portfolio';
import { SkillIcon } from '../components/SkillIcon';

type SkillLevel = keyof typeof LEVELS;

type Skill = (typeof SKILLS)[number];

export const Skills = () => {
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const categories = [
    {
      id: 'cloud',
      title: 'Cloud',
      icon: Cloud,
      skills: SKILLS_BY_CATEGORY?.cloud ?? [],
      color: 'text-blue-500',
    },
    {
      id: 'devops',
      title: 'DevOps',
      icon: TerminalIcon,
      skills: SKILLS_BY_CATEGORY?.devops ?? [],
      color: 'text-green-500',
    },
    {
      id: 'os',
      title: 'Operating Systems',
      icon: Cpu,
      skills: SKILLS_BY_CATEGORY?.os ?? [],
      color: 'text-purple-500',
    },
    {
      id: 'programming',
      title: 'Programming',
      icon: Code,
      skills: SKILLS_BY_CATEGORY?.programming ?? [],
      color: 'text-orange-500',
    },
    {
      id: 'database',
      title: 'Databases',
      icon: Database,
      skills: SKILLS_BY_CATEGORY?.database ?? [],
      color: 'text-red-500',
    },
  ];

  const getSkillLevel = (level: string) => {
    return LEVELS[level as SkillLevel] ?? {
      label: 'Foundational',
      value: 25,
    };
  };

  const helpOutput = [
    'Available commands:',
    '  ls                  - List all categories',
    '  ls <category>       - List skills in a category',
    '  cat <skill>         - Show skill details',
    '  levels              - Show proficiency scale',
    '  clear               - Clear terminal',
    '  help                - Show this help',
    '',
    'Examples:',
    '  ls cloud',
    '  ls devops',
    '  cat docker',
    '  cat github actions',
    '  levels',
  ];

  const levelsOutput = [
    'Proficiency scale (deliberately conservative):',
    `  ${LEVELS.foundational.label.padEnd(24)} - studied the fundamentals`,
    `  ${LEVELS.working.label.padEnd(24)} - used in internship tasks / coursework / project`,
    `  ${LEVELS.handson.label.padEnd(24)} - used repeatedly in my own project`,
    '',
    'No skill is rated expert or production-grade.',
  ];

  const executeCommand = (input: string) => {
    if (!input.trim() || isProcessing) return;

    setIsProcessing(true);

    const command = input.trim();
    const lowerCommand = command.toLowerCase();
    const [mainCmd, ...args] = lowerCommand.split(/\s+/);
    const argument = args.join(' ');

    // Clear immediately
    if (mainCmd === 'clear') {
      setTerminalOutput([]);
      setCurrentInput('');
      setIsProcessing(false);
      return;
    }

    let output: string[] = [];

    switch (mainCmd) {
      case 'help':
        output = helpOutput;
        break;

      case 'levels':
        output = levelsOutput;
        break;

      case 'ls': {
        if (!argument) {
          output = [
            'Available categories:',
            ...categories.map(
              (category) => `  ${category.id} - ${category.title}`
            ),
          ];
          break;
        }

        const category = categories.find(
          (item) => item.id.toLowerCase() === argument
        );

        if (category) {
          output = [
            `${category.title}:`,
            ...(category.skills ?? []).map(
              (skill) =>
                `  ${skill.name} — ${getSkillLevel(skill.level).label}`
            ),
          ];
        } else {
          output = [
            `Category "${argument}" not found.`,
            'Use "ls" to see available categories.',
          ];
        }

        break;
      }

      case 'cat': {
        if (!argument) {
          output = [
            'Please provide a skill name.',
            'Example: cat docker',
          ];
          break;
        }

        const skill = SKILLS.find(
          (item) => item.name.toLowerCase() === argument
        );

        if (skill) {
          output = [
            `Skill: ${skill.name}`,
            `Category: ${skill.category}`,
            `Proficiency: ${getSkillLevel(skill.level).label}`,
          ];
        } else {
          output = [
            `Skill "${argument}" not found.`,
            'Use "ls cloud" or "ls devops" to explore skills.',
          ];
        }

        break;
      }

      default:
        output = [
          `Command not found: ${command}`,
          'Type "help" for available commands.',
        ];
    }

    // Small terminal animation delay
    window.setTimeout(() => {
      setTerminalOutput((previous) => [
        ...previous,
        `$ ${command}`,
        ...output,
        '',
      ]);

      setCurrentInput('');
      setIsProcessing(false);
    }, 250);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentInput.trim() && !isProcessing) {
      executeCommand(currentInput);
    }
  };

  const quickCommands = [
    { cmd: 'help', desc: 'Show commands' },
    { cmd: 'ls cloud', desc: 'Cloud skills' },
    { cmd: 'levels', desc: 'Proficiency guide' },
    { cmd: 'cat docker', desc: 'Docker details' },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      <TerminalHeader
        command="ls -la skills/"
        description="Cloud, DevOps, operating systems, programming and database skills"
      />

      {/* Skills Categories */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Technical Skills
            </h2>

            <p className="text-neutral-400 max-w-2xl mx-auto">
              Honest proficiency levels — I&apos;m an early-career engineer,
              and nothing here is rated expert.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((category, categoryIndex) => {
              const IconComponent = category.icon;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: categoryIndex * 0.1,
                    duration: 0.6,
                  }}
                  viewport={{ once: true }}
                  className="bg-bg-surface border border-neutral-700 rounded-xl overflow-hidden"
                >
                  {/* Category Header */}
                  <div className="bg-bg-elevated border-b border-neutral-700 p-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-neutral-800 ${category.color}`}>
                        <IconComponent size={24} />
                      </div>

                      <h3 className="font-mono text-xl font-semibold text-primary-500">
                        {category.title}
                      </h3>

                      <span className="ml-auto text-xs font-mono text-neutral-500">
                        {(category.skills ?? []).length} skills
                      </span>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="p-6">
                    {category.skills.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {category.skills.map((skill, skillIndex) => {
                          const level = getSkillLevel(skill.level);

                          return (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                delay:
                                  categoryIndex * 0.1 +
                                  skillIndex * 0.05,
                                duration: 0.4,
                              }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.02 }}
                              className="bg-bg-elevated border border-neutral-700 p-4 rounded-lg hover:border-primary-500/50 transition-all duration-300 group"
                            >
                              <div className="flex items-center gap-3 mb-3">
                                <SkillIcon skill={skill} />

                                <span className="font-mono font-medium text-neutral-200">
                                  {skill.name}
                                </span>
                              </div>

                              {/* Proficiency */}
                              <div className="space-y-2">
                                <div className="flex justify-between text-xs gap-2">
                                  <span className="text-neutral-400">
                                    Level
                                  </span>

                                  <span className="text-primary-500 font-mono text-right">
                                    {level.label}
                                  </span>
                                </div>

                                <div
                                  className="w-full bg-neutral-700 rounded-full h-2"
                                  role="presentation"
                                >
                                  <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{
                                      width: `${level.value}%`,
                                    }}
                                    transition={{
                                      delay:
                                        categoryIndex * 0.1 +
                                        skillIndex * 0.05 +
                                        0.3,
                                      duration: 0.8,
                                    }}
                                    viewport={{ once: true }}
                                    className="h-2 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"
                                  />
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-sm text-neutral-500 font-mono">
                        No skills added to this category yet.
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Terminal */}
      <section className="py-20 md:py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Interactive Skill Explorer
            </h2>

            <p className="text-neutral-400 max-w-2xl mx-auto">
              Use terminal commands to explore my skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-bg-elevated border border-neutral-700 rounded-xl overflow-hidden shadow-card">

              {/* Terminal Header */}
              <div className="bg-bg-surface border-b border-neutral-700 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-primary-500" />
                </div>

                <span className="font-mono text-sm text-neutral-400">
                  skills-terminal
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm bg-bg-page h-96 overflow-y-auto">

                {terminalOutput.length === 0 && (
                  <div className="text-neutral-400">
                    <Typewriter
                      text="Welcome to Skills Explorer. Type 'help' to see available commands."
                      delay={30}
                      className="block"
                    />

                    <div className="mt-4">
                      <span className="text-accent-500">$</span>
                      <span className="text-neutral-400 ml-2">
                        ready for input...
                      </span>
                    </div>
                  </div>
                )}

                {terminalOutput.map((line, index) => (
                  <div
                    key={index}
                    className={
                      line.startsWith('$')
                        ? 'text-accent-500'
                        : line.includes('Command not found')
                        ? 'text-red-500'
                        : 'text-neutral-200'
                    }
                  >
                    {line}
                  </div>
                ))}

                {isProcessing && (
                  <div className="flex items-center gap-2">
                    <span className="text-accent-500">$</span>

                    <div className="flex gap-1">
                      {[0, 1, 2].map((dot) => (
                        <div
                          key={dot}
                          className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"
                          style={{
                            animationDelay: `${dot * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="flex items-center">
                  <span className="text-accent-500 mr-2">$</span>

                  <input
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="flex-1 bg-transparent text-primary-500 outline-none placeholder-neutral-600 font-mono"
                    placeholder={
                      isProcessing
                        ? 'processing...'
                        : 'enter command...'
                    }
                    disabled={isProcessing}
                  />

                  {!isProcessing && (
                    <div className="w-2 h-5 bg-primary-500 animate-pulse ml-1" />
                  )}
                </div>
              </div>
            </div>

            {/* Quick Commands */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickCommands.map((item) => (
                <button
                  key={item.cmd}
                  type="button"
                  onClick={() => {
                    setCurrentInput(item.cmd);
                  }}
                  className="p-3 bg-bg-elevated border border-neutral-700 rounded-lg text-left hover:border-primary-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-1 font-mono text-sm text-primary-500 group-hover:text-primary-400">
                    <ChevronRight size={14} />
                    {item.cmd}
                  </div>

                  <div className="text-xs text-neutral-400 mt-1">
                    {item.desc}
                  </div>
                </button>
              ))}
            </div>

            <p className="mt-4 text-xs text-neutral-500 text-center font-mono">
              Tip: Click a command, then press Enter to execute it.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
