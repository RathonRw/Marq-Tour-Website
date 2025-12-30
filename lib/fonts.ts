import {
  Geist,
  Geist_Mono,
  Inter,
  Roboto,
  Space_Grotesk,
  Syne,
} from "next/font/google";
import { cn } from "@/lib/utils";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const fontRoboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const fontVariables = cn(
  fontInter.variable,
  fontRoboto.variable,
  geistSans.variable,
  geistMono.variable,
  spaceGrotesk.variable,
  syne.variable
);
