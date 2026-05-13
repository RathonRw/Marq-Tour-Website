import SiteFooter from "@/features/_layout/site-footer";
import SiteHeader from "@/features/_layout/site-header";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col">
      <SiteHeader />
      <main className="@container relative flex flex-1 flex-col overflow-hidden">
        {children}
      </main>

      <SiteFooter />
    </div>
  );
}
