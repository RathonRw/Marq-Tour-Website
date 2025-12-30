import Cta from "@/features/layout/cta";
import SiteFooter from "@/features/layout/site-footer";
import SiteHeader from "@/features/layout/site-header";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col bg-background font-syne dark:bg-black">
      <SiteHeader />
      <main className="relative flex flex-1 flex-col overflow-hidden bg-muted/50 dark:bg-muted/40">
        {children}
      </main>
      <div className="relative w-full border-b" />
      <Cta />
      <SiteFooter />
    </div>
  );
}
