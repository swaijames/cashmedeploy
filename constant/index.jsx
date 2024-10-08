import { CurrencyDollarIcon, ChartBarIcon, ExclamationCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import {
  PaperAirplaneIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  KeyIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/about', key: 'about', label: 'About' },
  { href: '/services', key: 'services', label: 'Services' },
  { href: '/team', key: 'team', label: 'Team' },
  { href: '/faq', key: 'faq', label: 'FAQ' },
  { href: '/report', key: 'report', label: 'Report' },
  { href: '/contact', key: 'contact_us', label: 'Contact Us' },
];

export const Features2 = [
  {
    name: 'FAST',
    description: 'Get cash against your invoice within 48 hours.',
    icon: PaperAirplaneIcon,
  },
  {
    name: 'BEST RETURN ON INVESTMENT',
    description: 'You get attractive returns starting from 4% on your investment.',
    icon: ChartBarIcon,
  },
  {
    name: 'CONVENIENCE',
    description: 'You can invest and borrow regardless of your location.',
    icon: CheckCircleIcon,
  },
  {
    name: 'SECURE',
    description: 'Security of your investment is our priority.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'TRANSPARENCY',
    description: 'You are in control of your investment with all available information.',
    icon: KeyIcon,
  },
  {
    name: 'SYNDICATED FINANCING',
    description: 'Multiple investors can invest in a single invoice.',
    icon: UsersIcon,
  },
];

const Features1 = [
  {
    name: 'Cover your overheads & payroll',
    description: 'Manage overhead costs and payroll efficiently with immediate access to funds through invoice discounting.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Invest in business growth and hiring',
    description: 'Use available funds to invest in growth opportunities and expand your workforce.',
    icon: ChartBarIcon,
  },
  {
    name: 'Pay off those unexpected expenses',
    description: 'Handle unforeseen costs with ease by advancing funds from outstanding invoices.',
    icon: ExclamationCircleIcon,
  },
  {
    name: 'Avoid waiting 30, 60 or 90 days to get paid',
    description: 'Get paid faster by advancing payments for your invoices.',
    icon: ClockIcon,
  },

];

export { Features1 };

export const Values = [
  { title: "Customer is the Boss", description: "We take pleasure in attending our customer needs." },
  { title: "Innovation", description: "Creative minds are our core competence." },
  { title: "Transparency", description: "We are honest and open with our stakeholders." },
  { title: "Dare", description: "We embrace initiative by our employees to strive for excellence." },
  { title: "Kaizen", description: "We believe in Japanese principle of continuous improvement in the delivery of excellent services to our customers." },
];

export const stats = [
  { icon: '/path/to/icon1.png', value: '250+', description: 'Invoices' },
  { icon: '/path/to/icon2.png', value: '128+', description: 'Active Borrowers' },
  { icon: '/path/to/icon3.png', value: '264+', description: 'Investors' },
];


// content/index.tsx

export const testimonials = [
  {
      name: "John Doe",
      role: "Financial Analyst",
      text: "CashMe Tanzania's platform offers a comprehensive solution for accessing quick funds.",
      image: "/assets/user.png",
      rating: 5,
  },
  {
      name: "Jane Smith",
      role: "Economist",
      text: "The efficiency of CashMe Tanzania in handling financial transactions is impressive. ",
      image: "/assets/user.png",
      rating: 4,
  },
  {
      name: "Mark Johnson",
      role: "Investment Manager",
      text: "As an investment manager, I appreciate how CashMe Tanzania streamlines the funding process.",
      image: "/assets/user.png",
      rating: 5,
  },
  {
      name: "Emily Davis",
      role: "Banking Executive",
      text: "CashMe Tanzania’s innovative greatly improved our ability to manage financial transactions efficiently.",
      image: "/assets/user.png",
      rating: 5,
  },
  {
      name: "Chris Brown",
      role: "Financial Consultant",
      text: "The speed and reliability of CashMe Tanzania’s platform have significantly enhanced our consulting services.",
      image: "/assets/user.png",
      rating: 4,
  },
  {
      name: "Anna Wilson",
      role: "Economic Advisor",
      text: "CashMe Tanzania provides a robust solution for businesses looking for quick financial solutions.",
      image: "/assets/user.png",
      rating: 5,
  },
];

export const teamMembers = [
  {
    name: 'Gumodoka Mehuna',
    role: 'Co-founder, Cheaf Executive Officer',
    image: '/assets/team/boss-gumo.jpg',
    social: {

      linkedin: 'https://linkedin.com/in/martasmith',

    },
  },
  {
    name: 'Ishmael Oneya',
    role: 'Co-founder, Head of Credit Risk & Compliance',
    image: '/assets/team/boss-oneya.jpg',
    social: {

      linkedin: 'https://linkedin.com/in/darrenrandolph',

    },
  },
  {
    name: 'Ombeni Uhuru ',
    role: 'Co-founder, Head of Trading & Investment',
    image: '/assets/team/ombenii.jpg',
    social: {

      linkedin: 'https://linkedin.com/in/darrenrandolph',

    },
  },
  {
    name: 'Phoibe Mkumbwa',
    role: 'Co-founder, Head of Finance & Administration',
    image: '/assets/team/madam3.jpg',
    social: {

      linkedin: 'https://linkedin.com/in/ayatblack',

    },
  },
];