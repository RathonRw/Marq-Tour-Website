import { AtSignIcon, ClapperboardIcon, SearchCheckIcon } from "lucide-react";

export const navLinks = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "About",
    href: "/about",
  },

  {
    label: "Destinations",
    href: "/destinations",
  },
  {
    label: "Packages",
    href: "/packages",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];
export const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Content Creation", href: "/#services", external: false },
      { name: "Social Media Management", href: "/#services", external: false },
      { name: "SEO Expert", href: "/#services", external: false },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about", external: false },
      { name: "Work", href: "/work", external: false },
      { name: "Insights", href: "/insights", external: false },
      { name: "Contact Us", href: "/contact", external: false },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms", href: "/", external: false },
      { name: "Privacy", href: "/", external: false },
      { name: "Cookie Policy", href: "/", external: false },
    ],
  },
];

export const services = [
  {
    title: "Content Creation",
    slug: "content-creation",
    description:
      "We craft compelling, high-quality content that tells your story, builds trust, and drives action. From blogs and articles to website copy designed to engage and convert your audience.",
    icon: ClapperboardIcon,
  },
  {
    title: "Social Media Management",
    slug: "social-media-management",
    description:
      "We manage, grow, and optimize your social presence with strategic content, consistent posting, and audience engagement that turns followers into loyal customers.",
    icon: AtSignIcon,
  },
  {
    title: "SEO Expert",
    slug: "seo-expert",
    description:
      "We help your business rank higher on search engines through data-driven SEO strategies that increase visibility, attract the right traffic, and deliver measurable results.",
    icon: SearchCheckIcon,
  },
];

export const slides = [
  {
    title: "Teachers Day",
    video: "/vid.webm",
    href: "/tourism",
    description:
      "Celebrating educators and their impact through inspiring stories, events, and moments that honor teachers and their dedication.",
  },
  {
    title: "Fatherhood Tech - Summer Camp",
    video: "/vid.webm",
    href: "/restaurants",
    description:
      "An engaging summer camp experience blending technology, creativity, and mentorship to empower fathers and young innovators.",
  },
  {
    title: "Worldwide Construction",
    video: "/vid.webm",
    href: "/housing",
    description:
      "Showcasing modern construction projects and innovative building solutions shaping communities across the world.",
  },
  {
    title: "Patriot BBC - Social Media Rebrand",
    video: "/vid.webm",
    href: "/shopping",
    description:
      "A bold social media transformation focused on storytelling, visual identity, and digital presence for stronger audience engagement.",
  },
];
