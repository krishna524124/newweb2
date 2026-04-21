// ─────────────────────────────────────────────
//  Site Data — Krishna Yadav Portfolio
// ─────────────────────────────────────────────

export const siteConfig = {
  name: 'Krishna Yadav',
  tagline: 'Physics Graduate · Data Science Builder · AI Innovator · Future Founder',
  shortBio:
    'I build intelligent systems at the intersection of physics, mathematics, and machine learning. From quant models to embedded hardware — I treat every problem as a system to be understood and transcended.',
  email: 'krishna@example.com',
  github: 'https://github.com/krishnayadav',
  linkedin: 'https://linkedin.com/in/krishnayadav',
  twitter: 'https://twitter.com/krishnayadav',
  location: 'India · Remote Worldwide',
}

export const stats = [
  { label: 'Projects Built',    value: 15, suffix: '+' },
  { label: 'Research Papers',   value: 5,  suffix: '+' },
  { label: 'Years Experience',  value: 3,  suffix: '+' },
  { label: 'Technologies',      value: 20, suffix: '+' },
]

export const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills',   href: '/skills' },
  { label: 'Resume',   href: '/resume' },
  { label: 'Contact',  href: '/contact' },
]

// ─── PROJECTS ────────────────────────────────
export type ProjectCategory = 'AI / ML' | 'Quant Finance' | 'Hardware' | 'Research' | 'Web Dev'

export interface Project {
  id:          string
  title:       string
  description: string
  category:    ProjectCategory
  stack:       string[]
  icon:        string
  metrics:     { label: string; value: string }[]
  demo?:       string
  github?:     string
  featured:    boolean
}

export const projects: Project[] = [
  {
    id: 'nas-engine',
    title: 'Neural Architecture Search Engine',
    description:
      'Automated NAS framework that evolves optimal neural network architectures using reinforcement learning, reducing design time by 80% while improving accuracy benchmarks.',
    category: 'AI / ML',
    stack: ['Python', 'PyTorch', 'Ray Tune', 'CUDA'],
    icon: '🧬',
    metrics: [{ label: 'Faster Design', value: '↑80%' }, { label: 'Accuracy Gain', value: '↑12%' }],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 'quant-trading',
    title: 'Algorithmic Trading System v2',
    description:
      'Multi-strategy quant engine combining momentum, mean-reversion, and ML-based signal generation. Backtested across 10 years of market data with live paper-trading integration.',
    category: 'Quant Finance',
    stack: ['Python', 'Pandas', 'QuantLib', 'PostgreSQL'],
    icon: '📈',
    metrics: [{ label: 'Annual Return', value: '↑34%' }, { label: 'Sharpe Ratio', value: '1.8' }],
    github: '#',
    featured: true,
  },
  {
    id: 'pinn-research',
    title: 'Physics-Informed Neural Networks',
    description:
      'Research paper and implementation of PINNs for solving PDEs in fluid dynamics, validated against analytical solutions with 99.1% accuracy.',
    category: 'Research',
    stack: ['Python', 'TensorFlow', 'LaTeX', 'NumPy'],
    icon: '🔬',
    metrics: [{ label: 'Accuracy', value: '99.1%' }, { label: 'Speed vs FEM', value: '5×' }],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 'rover-esp32',
    title: 'Autonomous Navigation Rover',
    description:
      'ESP32-powered rover with real-time obstacle avoidance, Wi-Fi telemetry dashboard, and remote control via custom Android app.',
    category: 'Hardware',
    stack: ['ESP32', 'C++', 'FreeRTOS', 'MQTT'],
    icon: '🤖',
    metrics: [{ label: 'Telemetry', value: '30fps' }, { label: 'Uptime', value: '99.2%' }],
    github: '#',
    featured: false,
  },
  {
    id: 'rpi-surveillance',
    title: 'Smart Surveillance Hub',
    description:
      'Raspberry Pi 4-based security system with YOLOv8 real-time object detection, face recognition, and automated Telegram alerts.',
    category: 'Hardware',
    stack: ['Raspberry Pi', 'Python', 'YOLOv8', 'OpenCV'],
    icon: '🍓',
    metrics: [{ label: 'Detection', value: 'Real-time' }, { label: 'Alert Latency', value: '<0.3s' }],
    github: '#',
    featured: false,
  },
  {
    id: 'ai-research-platform',
    title: 'AI Research Assistant Platform',
    description:
      'Full-stack web app leveraging LLMs to synthesize academic papers, generate summaries, and build knowledge graphs for researchers.',
    category: 'Web Dev',
    stack: ['React', 'FastAPI', 'LangChain', 'PostgreSQL'],
    icon: '💡',
    metrics: [{ label: 'Faster Research', value: '10×' }, { label: 'Papers Indexed', value: '500+' }],
    github: '#',
    demo: '#',
    featured: true,
  },
]

// ─── SKILLS ──────────────────────────────────
export interface Skill {
  name:  string
  level: number   // 0-100
  icon:  string
}

export interface SkillGroup {
  category: string
  icon:     string
  skills:   Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming',
    icon: '💻',
    skills: [
      { name: 'Python',     level: 95, icon: '🐍' },
      { name: 'JavaScript', level: 82, icon: '🌐' },
      { name: 'TypeScript', level: 78, icon: '🔷' },
      { name: 'C / C++',    level: 80, icon: '⚙️' },
      { name: 'SQL',        level: 85, icon: '🗄️' },
    ],
  },
  {
    category: 'AI & Data Science',
    icon: '🧠',
    skills: [
      { name: 'Machine Learning', level: 92, icon: '🤖' },
      { name: 'Deep Learning',    level: 88, icon: '🧬' },
      { name: 'NLP / LLMs',      level: 85, icon: '💬' },
      { name: 'Computer Vision',  level: 83, icon: '👁️' },
      { name: 'Data Viz',         level: 90, icon: '📊' },
    ],
  },
  {
    category: 'Hardware & Embedded',
    icon: '⚡',
    skills: [
      { name: 'Arduino',       level: 90, icon: '🔌' },
      { name: 'ESP32',         level: 88, icon: '📡' },
      { name: 'Raspberry Pi',  level: 85, icon: '🍓' },
      { name: 'IoT Systems',   level: 82, icon: '🌐' },
      { name: 'PCB Design',    level: 70, icon: '🔧' },
    ],
  },
  {
    category: 'Research & Tools',
    icon: '🔬',
    skills: [
      { name: 'LaTeX',           level: 88, icon: '📄' },
      { name: 'Research Writing', level: 85, icon: '✍️' },
      { name: 'Git / GitHub',    level: 90, icon: '🐙' },
      { name: 'Docker',          level: 75, icon: '🐳' },
      { name: 'Linux',           level: 87, icon: '🐧' },
    ],
  },
]

// ─── TIMELINE ────────────────────────────────
export interface TimelineItem {
  year:        string
  title:       string
  org:         string
  description: string
  type:        'education' | 'work' | 'milestone'
}

export const timeline: TimelineItem[] = [
  {
    year: '2020',
    title: 'Started Physics Degree',
    org: 'University',
    description: 'Began BSc Physics — fell in love with mathematics, quantum mechanics, and the beauty of systems thinking.',
    type: 'education',
  },
  {
    year: '2021',
    title: 'First Machine Learning Project',
    org: 'Self-Directed',
    description: 'Discovered the deep connection between physics simulations and neural networks. Built first ML model from scratch.',
    type: 'milestone',
  },
  {
    year: '2022',
    title: 'Hardware & Embedded Systems',
    org: 'Self-Directed',
    description: 'Dove deep into Arduino, ESP32, and Raspberry Pi — building autonomous systems and IoT devices.',
    type: 'milestone',
  },
  {
    year: '2023',
    title: 'Quantitative Finance Research',
    org: 'Research Project',
    description: 'Applied statistical physics to financial markets. Built algorithmic trading backtesting framework.',
    type: 'work',
  },
  {
    year: '2024',
    title: 'Physics Degree — Graduated',
    org: 'University',
    description: 'Completed degree with strong focus on computational physics, statistical mechanics, and mathematical modeling.',
    type: 'education',
  },
  {
    year: '2025',
    title: 'AI / Deep Tech Builder',
    org: 'Independent',
    description: 'Building at the frontier: PINNs research, NAS frameworks, multi-agent AI systems, and laying groundwork for a deep-tech startup.',
    type: 'milestone',
  },
]
