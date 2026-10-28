export const profile = {
  name: 'Kristiyan Kamboshev',
  role: 'Junior C# / .NET Developer',
  headline: 'I build backend-focused web applications with .NET.',
  intro:
    'I work with C#, ASP.NET Core MVC, Entity Framework Core and SQL Server. I care about clear business logic, secure authorization, reliable data access and tests that protect important behaviour.',
  location: 'Bulgaria',
  links: {
    github: 'https://github.com/Kristiyan9359',
    linkedin: 'https://www.linkedin.com/in/kamboshev/',
  },
}

export type Preview = { type: 'image'; src: string; alt: string; fit?: 'cover' | 'contain' }

export type Project = {
  name: string
  tagline: string
  description: string
  highlights?: string[]
  tags: string[]
  repo: string
  demo?: string
  featured?: boolean
  preview: Preview
}

export const projects: Project[] = [
  {
    name: 'KiddoCare',
    tagline: 'Kindergarten management platform',
    description:
      'A role-based kindergarten management web application built with ASP.NET Core MVC and .NET 10. It models real workflows for administrators, teachers and parents instead of stopping at basic CRUD.',
    highlights: [
      'ASP.NET Core Identity with role-based access and business-level authorization',
      'Child profiles, attendance, daily care reports and protected document handling',
      'Real-time messaging with SignalR, events, announcements and consent workflows',
      'Layered service architecture, search, filtering, pagination and unit/integration tests',
    ],
    tags: ['C#', '.NET 10', 'ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Identity', 'SignalR', 'Testing'],
    repo: 'https://github.com/Kristiyan9359/KiddoCare',
    featured: true,
    preview: { type: 'image', src: '/projects/kiddocare.jpg', alt: 'Screenshot of KiddoCare privacy and data protection page' },
  },
  {
    name: 'BookLibrary',
    tagline: '.NET learning project',
    description:
      'A personal project from my C#/.NET practice. The repository showcases another step in my development journey alongside my larger ASP.NET Core application.',
    tags: ['C#', '.NET', 'Git', 'GitHub'],
    repo: 'https://github.com/Kristiyan9359/BookLibrary',
    preview: { type: 'image', src: '/projects/booklibrary.jpg', alt: 'Screenshot of the BookLibrary books catalogue with search and filters' },
  },
  {
    name: 'SoftUni Learning Journey',
    tagline: 'Exercises and course projects',
    description:
      'A collection of programming exercises and practical work from my SoftUni training, covering C#, object-oriented programming, databases, Entity Framework Core and web development.',
    tags: ['C#', 'OOP', 'SQL', 'EF Core', 'ASP.NET Core'],
    repo: 'https://github.com/Kristiyan9359/SoftUni',
    preview: { type: 'image', src: '/projects/softuni.svg', alt: 'SoftUni learning repository preview illustration' },
  },
]

export const coreStack = [
  { name: 'C#', icon: 'csharp' },
  { name: '.NET', icon: 'dotnetcore' },
  { name: 'SQL Server', icon: 'microsoftsqlserver' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub Actions', icon: 'githubactions' },
  { name: 'Docker', icon: 'docker' },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Backend', items: ['C#', 'ASP.NET Core MVC', 'Entity Framework Core', 'REST APIs', 'Business logic'] },
  { group: 'Data & quality', items: ['SQL Server', 'Data modelling', 'Authentication', 'Authorization', 'Unit testing', 'Integration testing'] },
  { group: 'Tools & delivery', items: ['Git', 'GitHub', 'GitHub Actions', 'Visual Studio', 'Docker — learning', 'Jenkins — learning', 'Ubuntu / Linux — learning', 'Cloud fundamentals — learning'] },
]

export const focusAreas = [
  {
    title: 'Backend development',
    description: 'Building ASP.NET Core applications with clear responsibilities, service layers and maintainable business rules.',
    tags: ['C#', 'ASP.NET Core', 'MVC'],
  },
  {
    title: 'Data access',
    description: 'Working with relational data, Entity Framework Core, SQL Server, queries and data relationships.',
    tags: ['EF Core', 'SQL Server'],
  },
  {
    title: 'Security & testing',
    description: 'Learning to enforce authorization at the business level and protect important behaviour with automated tests.',
    tags: ['Identity', 'Authorization', 'xUnit'],
  },
  {
    title: 'DevOps',
    description: 'Currently learning the DevOps workflow: working in Ubuntu/Linux, building container images with Docker, automating pipelines with Jenkins and GitHub Actions, and exploring cloud fundamentals.',
    tags: ['Ubuntu / Linux', 'Docker', 'Jenkins', 'GitHub Actions', 'CI/CD', 'Cloud fundamentals'],
  },
]

export const education = [
  {
    school: 'Software University (SoftUni)',
    degree: 'C# and .NET development training',
    period: '2024 – present',
  },
  {
    school: 'DevOps training',
    degree: 'Currently learning automation, Linux, Docker and cloud fundamentals',
    period: '2026 – present',
  },
]

export const certificates = [
  { title: 'Programming Basics with C#', issued: 'Sep 2024' },
  { title: 'Programming Fundamentals with C#', issued: 'Jan 2025' },
  { title: 'C# Advanced', issued: 'May 2025' },
  { title: 'C# OOP', issued: 'Jun 2025' },
  { title: 'MS SQL', issued: 'Sep 2025' },
  { title: 'Entity Framework Core', issued: 'Oct 2025' },
  { title: 'ASP.NET Fundamentals', issued: 'Jan 2026' },
  { title: 'ASP.NET Advanced', issued: 'Feb 2026' },
  { title: 'IT Career Booster', issued: 'Feb 2026' },
  { title: 'HTML & CSS', issued: 'May 2026' },
]
