import { Cloud, Terminal, Database, Code, Cpu, type LucideIcon } from 'lucide-react';
import type { Skill } from '../data/portfolio';

const FALLBACK: Record<Skill['category'], LucideIcon> = {
  cloud: Cloud,
  devops: Terminal,
  os: Cpu,
  programming: Code,
  database: Database,
};

export const SkillIcon = ({ skill, className = 'w-8 h-8' }: { skill: Skill; className?: string }) => {
  if (skill.icon) {
    return (
      <img
        src={skill.icon}
        alt=""
        aria-hidden="true"
        className={`${className} filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity`}
      />
    );
  }
  const Fallback = FALLBACK[skill.category];
  return <Fallback className={`${className} text-neutral-300 opacity-70 group-hover:opacity-100 transition-opacity`} />;
};
