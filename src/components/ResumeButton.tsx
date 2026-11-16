import { Download, FileText } from 'lucide-react';
import { RESUME_URL } from '../data/portfolio';

interface Props {
  variant?: 'primary' | 'outline' | 'compact';
  className?: string;
}

const styles = {
  primary:
    'inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-bg-surface font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-glow',
  outline:
    'inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-600 bg-neutral-800 text-neutral-200 hover:border-primary-500 hover:text-primary-500 font-semibold rounded-lg transition-all duration-200',
  compact:
    'inline-flex items-center justify-center px-3 py-1.5 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-bg-surface text-sm font-mono rounded-md transition-all duration-200',
};

export const ResumeButton = ({ variant = 'primary', className = '' }: Props) => {
  if (!RESUME_URL) {
    return (
      <span
        aria-disabled="true"
        title="Resume PDF not added yet"
        className={`${styles[variant]} !shadow-none !bg-neutral-800 !border !border-neutral-700 !text-neutral-500 cursor-not-allowed ${className}`}
      >
        <FileText className="mr-2 h-4 w-4" />
        Resume (coming soon)
      </span>
    );
  }
  return (
    <a
      href={RESUME_URL}
      download="Swapnil_Pawar_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles[variant]} ${className}`}
    >
      <Download className="mr-2 h-4 w-4" />
      Download Resume
    </a>
  );
};
