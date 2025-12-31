import { AtSignIcon, ClapperboardIcon, SearchCheckIcon } from "lucide-react";
import img1 from "@/public/img1.png";
import img2 from "@/public/img2.png";
import img5 from "@/public/img5.jpg";
import img6 from "@/public/img6.jpg";
import img7 from "@/public/img7.jpg";
import img11 from "@/public/img11.jpg";
import img12 from "@/public/img12.jpg";
import img13 from "@/public/img13.jpg";
import img16 from "@/public/img16.jpg";

import type { TPackage } from "@/types";

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
    href: "/about#packages",
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

export const packagesList: TPackage[] = [
  {
    title: "Private Tours",
    media: "/img1.png",
    mediaType: "image",
  },
  {
    title: "City Tours",
    media: "/img17.jpg",
    mediaType: "image",
  },
  {
    title: "National Parks",
    media: "/img9.jpg",
    mediaType: "image",
  },
  {
    title: "Culture",
    media: "/img12.jpg",
    mediaType: "image",
  },
];

export const homeplacesList: TPackage[] = [
  {
    title: "Mountains and volcanoes",
    media: "/img8.jpg",
    mediaType: "image",
  },
  {
    title: "Nyungwe natonal park",
    media: "/img10.jpg",
    mediaType: "image",
  },
  {
    title: "kigali tour",
    media: "/img4.jpg",
    mediaType: "image",
  },
];
export const destinationsList: TPackage[] = [
  {
    title: "AKAGERA NATIONAL PARK",
    media: "/img3.jpg",
    mediaType: "image",
  },
  {
    title: "NYUNGWE NATIONAL PARK",
    media: "/img7.jpg",
    mediaType: "image",
  },
  {
    title: "KINGS PALACE MUSEUM",
    media: "/img14.jpg",
    mediaType: "image",
  },
  {
    title: "VOLCANOES NATIONAL PARK",
    media: "/img16.jpg",
    mediaType: "image",
  },
  {
    title: "KIGALI CITY ",
    media: "/img15.jpg",
    mediaType: "image",
  },
];

export const gallery = [
  {
    url: img6,
    alt: "the best",
  },
  {
    url: img5,
    alt: "the best",
  },
  {
    url: img11,
    alt: "the best",
  },
  {
    url: img12,
    alt: "the best",
  },
  {
    url: img13,
    alt: "the best",
  },
  {
    url: img1,
    alt: "the best",
  },
  {
    url: img2,
    alt: "the best",
  },
  {
    url: img7,
    alt: "the best",
  },
  {
    url: img16,
    alt: "the best",
  },
];

export const departments = [
  {
    title: "Tour Packages Department",
    subtitle: "Your Journey, Your Story.",
    list: [
      "Curated leisure tours across Rwanda and Africa",
      "Adventure tours including hiking, safaris, and eco-tourism",
      "Cultural and heritage travel experiences",
      "Personalized itineraries beyond sightseeing",
    ],
  },
  {
    title: "Internship Tour Department",
    subtitle: "Travel to Learn, Work, and Grow.",
    list: [
      "Educational travel programs for youth and students",
      "Professional exposure and mentorship opportunities",
      "Study-abroad and exchange programs",
      "Hands-on industry experience through internships",
    ],
  },
  {
    title: "Advisory Circle Tour Department",
    subtitle: "Guiding Visionaries in Tourism and Development.",
    list: [
      "Strategic tourism consultancy for businesses and startups",
      "Mentorship and professional networking for tourism professionals",
      "Advisory services on tourism operations, sustainability, and growth",
    ],
  },
];
