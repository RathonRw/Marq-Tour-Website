import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Inter, Roboto } from "next/font/google";
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

export const fontVariables = cn(
  fontInter.variable,
  fontRoboto.variable,
  GeistSans.variable,
  GeistMono.variable,
);
