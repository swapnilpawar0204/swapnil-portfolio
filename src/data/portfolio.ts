
/**
 * Portfolio content
 * Keep all information accurate and based on actual education,
 * internship experience, training, projects and achievements.
 */

const icon = (name: string) =>
  `${import.meta.env.BASE_URL}icons/${name}.svg`;

/* =========================
   PROFILE
========================= */

export const PROFILE = {
  name: 'Swapnil Pawar',
  title: 'Cloud & DevOps Engineer',
  level: '2026 BCA Graduate · Entry-Level',
  location: 'Pune, Maharashtra, India',
  education: 'Bachelor of Computer Applications (BCA) — Graduated May 2026',
  objective: 'Entry-level Cloud Engineer / DevOps Engineer / SRE',
  subtitle:
    '2026 BCA Graduate | Cloud Computing Intern | Building practical cloud and automation projects.',
};

export const HERO_CONTENT = PROFILE.subtitle;

/* =========================
   ABOUT
========================= */

export const ABOUT_PARAGRAPHS = [
  "I'm Swapnil Pawar, a BCA graduate who completed my degree in May 2026. I'm pursuing entry-level opportunities in Cloud Engineering, DevOps, SRE and Cloud Operations.",

  'During my Cloud Computing internship at Codec Technologies Pvt. Ltd. (January–April 2026), I worked with Microsoft Azure Virtual Machines and Storage Accounts, monitoring, log analysis, connectivity troubleshooting and incident-resolution documentation.',

  'I am developing AWS cloud skills through project-based learning and a Cloud Technology internship at Elevance Skills Technology. My learning focuses on containerization, cloud infrastructure, application deployment, CI/CD, networking and secure cloud storage.',

  'As part of my DevOps internship program at Glynac, I completed onboarding and orientation activities. I am continuing to build my practical understanding of DevOps tools and workflows.',

  'My featured project is a Billing Data Migration Pipeline built with Python, FastAPI, MySQL, SQLAlchemy, Docker and GitHub Actions. It includes data validation, migration, reconciliation, automated testing and CI.',

  "I'm at the beginning of my professional career and eager to learn from experienced engineers, contribute to real systems, improve my troubleshooting skills and grow into a reliable Cloud and DevOps engineer.",
];

export const ABOUT_FACTS = [
  { label: 'Location', value: 'Pune, India' },
  { label: 'Education', value: 'BCA · May 2026' },
  { label: 'Experience', value: 'Internships & Projects' },
  { label: 'Target Roles', value: 'Cloud / DevOps / SRE' },
];

export const SPECIALIZATIONS = [
  'Cloud Infrastructure Basics',
  'Azure VMs & Storage',
  'AWS Cloud Fundamentals',
  'Docker & Compose',
  'CI/CD with GitHub Actions',
  'REST APIs with FastAPI',
  'Monitoring & Troubleshooting',
];

/* =========================
   PHILOSOPHY
========================= */

export const PHILOSOPHY = [
  {
    title: 'Automate Repeatable Work',
    description:
      'I look for ways to automate repetitive tasks using scripts, tools and reliable workflows.',
  },
  {
    title: 'Document the Fix',
    description:
      'I believe troubleshooting documentation helps teams understand issues and resolve them more efficiently.',
  },
  {
    title: 'Learn by Building',
    description:
      'I turn concepts into practical projects, test my work and improve through hands-on learning.',
  },
];

/* =========================
   SKILLS
========================= */

export const LEVELS = {
  foundational: { label: 'Foundational', value: 35 },
  working: { label: 'Working Knowledge', value: 55 },
  handson: { label: 'Hands-on (Project Use)', value: 70 },
} as const;

export type LevelKey = keyof typeof LEVELS;

export interface Skill {
  name: string;
  icon?: string;
  category:
    | 'cloud'
    | 'devops'
    | 'os'
    | 'programming'
    | 'database';
  level: LevelKey;
}

export const SKILLS: Skill[] = [
  // Cloud
  {
    name: 'AWS Fundamentals',
    icon: icon('aws'),
    category: 'cloud',
    level: 'foundational',
  },
  {
    name: 'Microsoft Azure Fundamentals',
    icon: icon('azure'),
    category: 'cloud',
    level: 'working',
  },
  {
    name: 'Azure Virtual Machines',
    icon: icon('azure'),
    category: 'cloud',
    level: 'working',
  },
  {
    name: 'Azure Storage Accounts',
    icon: icon('azure'),
    category: 'cloud',
    level: 'working',
  },
  {
    name: 'Cloud Infrastructure Basics',
    category: 'cloud',
    level: 'working',
  },

  // DevOps
  {
    name: 'Docker',
    icon: icon('docker'),
    category: 'devops',
    level: 'handson',
  },
  {
    name: 'Docker Compose',
    icon: icon('docker'),
    category: 'devops',
    level: 'handson',
  },
  {
    name: 'Git',
    icon: icon('git'),
    category: 'devops',
    level: 'working',
  },
  {
    name: 'GitHub',
    icon: icon('github'),
    category: 'devops',
    level: 'working',
  },
  {
    name: 'GitHub Actions',
    icon: icon('githubactions'),
    category: 'devops',
    level: 'working',
  },
  {
    name: 'CI/CD Fundamentals',
    category: 'devops',
    level: 'working',
  },

  // Operating Systems
  {
    name: 'Linux Fundamentals',
    icon: icon('linux'),
    category: 'os',
    level: 'foundational',
  },
  {
    name: 'Windows',
    icon: icon('windows'),
    category: 'os',
    level: 'working',
  },

  // Programming
  {
    name: 'Python Basics',
    icon: icon('python'),
    category: 'programming',
    level: 'working',
  },
  {
    name: 'SQL',
    category: 'programming',
    level: 'working',
  },
  {
    name: 'REST APIs',
    category: 'programming',
    level: 'working',
  },
  {
    name: 'FastAPI',
    icon: icon('fastapi'),
    category: 'programming',
    level: 'working',
  },

  // Database
  {
    name: 'MySQL',
    icon: icon('mysql'),
    category: 'database',
    level: 'working',
  },
  {
    name: 'SQLAlchemy',
    icon: icon('sqlalchemy'),
    category: 'database',
    level: 'working',
  },
];

export const SKILL_CATEGORIES = [
  { id: 'cloud', title: 'Cloud' },
  { id: 'devops', title: 'DevOps' },
  { id: 'os', title: 'Operating Systems' },
  { id: 'programming', title: 'Programming' },
  { id: 'database', title: 'Databases' },
] as const;

export const FEATURED_SKILL_NAMES = [
  'Microsoft Azure Fundamentals',
  'AWS Fundamentals',
  'Docker',
  'GitHub Actions',
  'Python Basics',
  'FastAPI',
  'MySQL',
];

/* =========================
   EXPERIENCE
========================= */

export const EXPERIENCE = [
  {
    role: 'Cloud Computing Intern',
    company: 'Codec Technologies Pvt. Ltd.',
    period: 'January 2026 – April 2026',
    type: 'Internship · Completed',
    responsibilities: [
      'Provisioned, configured, and administered Microsoft Azure Virtual Machines and Storage Accounts.',
      'Performed cloud monitoring and log analysis to understand infrastructure behavior.',
      'Troubleshot connectivity and deployment-related issues.',
      'Prepared incident-resolution workflow documentation.',
      'Developed foundational knowledge of cloud infrastructure and operations.',
    ],
    skills: [
      'Microsoft Azure',
      'Azure Virtual Machines',
      'Azure Storage',
      'Cloud Monitoring',
      'Log Analysis',
      'Troubleshooting',
    ],
  },

  {
    role: 'Cloud Technology Intern',
    company: 'Elevance Skills Technology',
    period: 'November 11, 2026 – May 11, 2027',
    type: 'Cloud & DevOps Internship · In Progress',
    responsibilities: [
      'Participating in an AWS Cloud & DevOps internship focused on the EverShop e-commerce cloud deployment project.',
      'Learning Docker containerization and application deployment using Amazon ECS and Amazon ECR.',
      'Working with Amazon EC2, Application Load Balancer, and Auto Scaling concepts.',
      'Learning AWS CodePipeline and CodeBuild CI/CD workflows for automated application deployment.',
      'Exploring Amazon RDS PostgreSQL for managed database deployment.',
      'Learning secure cloud networking, Route 53 DNS configuration, and HTTPS using AWS Certificate Manager.',
      'Exploring Amazon CloudFront and private Amazon S3 storage for secure content delivery.',
      'Studying cloud monitoring, infrastructure security, and cost optimization practices.',
    ],
    skills: [
      'AWS',
      'Docker',
      'Amazon ECS',
      'Amazon ECR',
      'Amazon EC2',
      'Amazon RDS',
      'AWS CodePipeline',
      'AWS CodeBuild',
      'Amazon S3',
      'CloudFront',
      'Route 53',
      'IAM',
      'Cloud DevOps',
    ],
  },
];

/* =========================
   TRAINING & PROGRAMS
========================= */

export const TRAINING = [
  {
    title: 'AWS Cloud & DevOps Project Training',
    organization: 'Elevance Skills Technology',
    period: 'November 2026 – May 2027',
    type: 'Cloud Technology Internship / Project Training',
    status: 'In Progress',
    description:
      'Practical learning focused on AWS cloud infrastructure, Docker containerization, e-commerce application deployment, CI/CD workflows, networking, security and cloud storage.',
    project: 'AWS EverShop Cloud Deployment Platform',
    activities: [
      'Learning AWS compute, containerization and application deployment concepts.',
      'Practicing Docker, Amazon ECS and Amazon ECR deployment workflows.',
      'Exploring AWS CodePipeline and CodeBuild for CI/CD automation.',
      'Learning Amazon RDS PostgreSQL, Route 53, CloudFront and S3 integration.',
      'Studying cloud infrastructure security, monitoring and cost optimization.',
    ],
  },

];

/* =========================
   PROJECTS
========================= */

export const PROJECTS = [
  {
    title: 'Billing Data Migration Pipeline',
    description:
      'A containerized billing data migration application providing REST APIs for ingestion, validation, transformation, migration and reconciliation of billing transactions.',
    technologies: [
      'Python',
      'FastAPI',
      'MySQL',
      'SQLAlchemy',
      'Docker',
      'Docker Compose',
      'GitHub Actions',
    ],
    features: [
      'REST API integration',
      'Data validation and transformation',
      'Duplicate detection',
      'Idempotency using external transaction IDs',
      'Database transaction handling and rollback',
      'Reconciliation',
      'Health endpoints',
      'Dockerized development environment',
      'Automated testing and GitHub Actions CI',
    ],
    flow: [
      'REST API ingestion',
      'Validate & transform',
      'Duplicate / idempotency check',
      'Transactional write (commit / rollback)',
      'Reconciliation',
    ],
    githubLink:
      'https://github.com/swapnilpawar0204/billing-data-migration-pipeline',
    websiteLink: '',
  },

  {
    title: 'AWS EverShop Cloud Deployment Platform',
    description:
      'An AWS Cloud & DevOps internship project focused on deploying the EverShop e-commerce application using Docker, AWS compute, container services, CI/CD, managed databases, secure object storage and content delivery.',
    technologies: [
      'AWS',
      'Docker',
      'Amazon ECS',
      'Amazon ECR',
      'Amazon EC2',
      'Amazon RDS PostgreSQL',
      'AWS CodePipeline',
      'AWS CodeBuild',
      'Amazon S3',
      'CloudFront',
      'Route 53',
      'IAM',
      'Application Load Balancer',
      'AWS Certificate Manager',
    ],
    features: [
      'Docker containerization and deployment learning',
      'Amazon ECS and Amazon ECR workflows',
      'AWS CI/CD pipeline concepts',
      'Managed PostgreSQL database deployment',
      'Custom domain and HTTPS configuration concepts',
      'CloudFront content delivery',
      'Secure Amazon S3 storage concepts',
      'Auto Scaling and high availability concepts',
      'Cloud monitoring and cost optimization',
    ],
    githubLink: '',
    websiteLink: 'https://evershop.riyaa.xyz/',
    referenceRepository:
      'https://github.com/Riya-te/aws-evershop-cloud-deployment-intership-project',
  },
];

/* =========================
   CERTIFICATIONS & BADGES
========================= */

export interface Certification {
  title: string;
  issuer: string;
  kind: string;
  credentialUrl: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Arcade Simulator: Site Reliability Engineer',
    issuer: 'Google Skills Arcade',
    kind: 'Learning Achievement',
    credentialUrl:
      'https://www.skills.google/public_profiles/3a64a574-1b38-4418-a0e7-f8fddfd33f11/badges/29025747',
  },
  {
    title: 'Cloud Computing Fundamentals',
    issuer: 'IBM SkillsBuild',
    kind: 'Training Certificate',
    credentialUrl: 'https://www.credly.com/badges/b5773af6-455d-4603-81bf-ff228adf39ed/public_url',
  },

{
  title: 'Cloud Computing Internship',
  issuer: 'Codec Technologies Pvt. Ltd.',
  kind: 'Internship Certificate',
  credentialUrl: '/certificates/codec-cloud-internship.pdf',
},
{
  title: 'Implement DevOps Workflows in Google Cloud',
  issuer: 'Google Cloud Skills Boost',
  kind: 'Google Cloud Skill Badge',
  credentialUrl: '/certificates/google-devops-badge.png',
},
{
  title: 'Set Up a Google Cloud Network',
  issuer: 'Google Cloud Skills Boost',
  kind: 'Google Cloud Skill Badge',
  credentialUrl: '/certificates/google-network-badge.png',
},
{
  title: 'Deploy Kubernetes Applications on Google Cloud',
  issuer: 'Google Cloud Skills Boost',
  kind: 'Google Cloud Skill Badge',
  credentialUrl: '/certificates/google-kubernetes-badge.png',
},
{
  title: 'Build Global and Regional Load Balancing Solutions',
  issuer: 'Google Cloud Skills Boost',
  kind: 'Google Cloud Skill Badge',
  credentialUrl: '/certificates/google-load-balancing-badge.png',
},

];

/* =========================
   LEARNING JOURNEY
========================= */

export const LEARNING_JOURNEY = [
  {
    period: '2023 – May 2026',
    title: 'Bachelor of Computer Applications (BCA)',
    description:
      'Graduated in May 2026 with a Bachelor of Computer Applications (BCA), building a foundation in programming, databases, software development and computer applications.',
  },

  {
    period: 'January – April 2026',
    title: 'Cloud Computing Internship — Codec Technologies',
    description:
      'Worked with Microsoft Azure Virtual Machines and Storage Accounts, cloud monitoring, log analysis, connectivity troubleshooting and incident-resolution documentation.',
  },

  {
    period: 'July 2026 – May 2028 (Expected)',
    title: 'Master of Computer Applications (MCA)',
    description:
      'Pursuing my Master of Computer Applications (MCA), building on my BCA foundation while strengthening my knowledge of programming, software development, databases and advanced computer applications.',
  },

  {
    period: 'Hands-on Project',
    title: 'Billing Data Migration Pipeline',
    description:
      'Built a containerized FastAPI and MySQL application with data validation, migration, reconciliation, automated testing and GitHub Actions CI.',
  },

  {
    period: 'November 2026 – May 2027',
    title: 'AWS Cloud & DevOps Project Training',
    description:
      'Learning AWS cloud infrastructure, Docker containerization, application deployment, CI/CD workflows, networking and secure storage through the EverShop cloud deployment project.',
  },

  {
    period: 'November 2026 – May 2027',
    title: 'Cloud Technology Intern — Elevance Skills Technology',
    description:
      'Undertaking a Cloud Technology internship focused on AWS cloud deployment, infrastructure, containerization, application hosting and DevOps workflows through practical project-based learning.',
  },
];

/* =========================
   CONTACT
========================= */

export const CONTACT = {
  address: 'Pune, Maharashtra, India',
  email: 'swapnilpawar0204@gmail.com',
  social: {
    github: 'https://github.com/swapnilpawar0204',
    linkedin: 'https://linkedin.com/in/swapnil-pawar-a2907a326/',
  },
};

/* =========================
   TEMPLATE CREDIT
========================= */

export const TEMPLATE_CREDIT = {
  name: 'Neeraj Chandra Nakka',
  url: 'https://github.com/neerajnakka/devops-portfolio',
};

/* =========================
   RESUME
========================= */

const resumeFiles = import.meta.glob(
  '../assets/resume/*.pdf',
  {
    query: '?url',
    import: 'default',
    eager: true,
  },
) as Record<string, string>;

export const RESUME_URL: string | null =
  Object.values(resumeFiles)[0] ?? null;

/* =========================
   SKILLS BY CATEGORY
========================= */

export const SKILLS_BY_CATEGORY = Object.fromEntries(
  SKILL_CATEGORIES.map((category) => [
    category.id,
    SKILLS.filter((skill) => skill.category === category.id),
  ]),
) as Record<
  (typeof SKILL_CATEGORIES)[number]['id'],
  Skill[]
>;
