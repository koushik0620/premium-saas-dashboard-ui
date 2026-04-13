"use client";

import Link from "next/link";
import { ChevronLeft, Sparkles, X, Zap } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigationItems } from "../../lib/constants";
import { cn } from "../../lib/utils";

type SidebarProps = {
  isCompact: boolean;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
  onToggleCompact: () => void;
};

export function Sidebar({
  isCompact,
  isMobileOpen,
  onCloseMobile,
  onToggleCompact,
}: SidebarProps) {
  const pathname = usePathname();

  // ✅ FIXED: compact should NOT depend on mobile
  const showCompactDesktop = isCompact;

  return (
    <aside
      className={cn(
        "sidebar-sheen fixed inset-y-0 left-0 z-50 flex h-screen shrink-0 flex-col overflow-hidden border-r border-sidebar-border/70 bg-sidebar/92 text-sidebar-foreground backdrop-blur-xl transition-[width,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] xl:sticky xl:top-0 xl:z-20",

        // mobile open/close
        isMobileOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0",

        // ✅ FIXED WIDTH LOGIC
        "w-[280px] xl:w-[280px]",
        isCompact && "xl:w-[88px]",
      )}
    >
      <div className="dashboard-grid absolute inset-0 opacity-30" />

      <div
        className={cn(
          "relative flex h-full flex-col px-4 py-5 xl:px-5 xl:py-6",
          showCompactDesktop && "sidebar-dock xl:px-3",
        )}
      >
        {/* HEADER */}
        <div
          className={cn(
            "mb-8 flex items-start justify-between gap-3",
            showCompactDesktop &&
              "xl:mb-10 xl:flex-col xl:items-center xl:gap-4",
          )}
        >
          <div
            className={cn(
              "flex min-w-0 items-center gap-3",
              showCompactDesktop && "xl:flex-col xl:gap-4",
            )}
          >
            <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/14 text-primary shadow-inner shadow-primary/10 transition-all duration-300 xl:hover:scale-105 xl:hover:shadow-[0_16px_34px_-20px_rgba(34,211,238,0.65)]">
              <Sparkles className="size-5" />
            </div>

            <div
              className={cn(
                "min-w-0 transition-all duration-300",
                isCompact
                  ? "xl:h-0 xl:w-0 xl:scale-95 xl:overflow-hidden xl:opacity-0"
                  : "opacity-100",
              )}
            >
              <p className="section-label">Workspace</p>
              <h2 className="mt-2 truncate text-2xl font-semibold tracking-tight">
                Aurelius OS
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* DESKTOP TOGGLE */}
            <button
              type="button"
              onClick={onToggleCompact}
              className="hidden size-9 items-center justify-center rounded-2xl border border-sidebar-border/80 bg-background/45 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:text-foreground xl:inline-flex"
              aria-label={isCompact ? "Expand sidebar" : "Collapse sidebar"}
            >
              <ChevronLeft
                className={cn(
                  "size-4 transition-transform duration-300",
                  isCompact && "rotate-180",
                )}
              />
            </button>

            {/* MOBILE CLOSE */}
            <button
              type="button"
              onClick={onCloseMobile}
              className="inline-flex size-9 items-center justify-center rounded-2xl border border-sidebar-border/80 bg-background/45 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:text-foreground xl:hidden"
              aria-label="Close sidebar"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div
          className={cn(
            "mb-8 max-w-xs text-sm leading-6 text-muted-foreground transition-all duration-300",
            isCompact
              ? "xl:max-h-0 xl:translate-y-2 xl:overflow-hidden xl:opacity-0"
              : "opacity-100",
          )}
        >
          A polished command center for finance, growth, and customer expansion.
        </div>

        {/* NAV */}
        <nav
          className={cn(
            "relative flex-1 space-y-2",
            showCompactDesktop &&
              "xl:flex xl:flex-col xl:items-center xl:space-y-3",
          )}
        >
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.href} href={item.href} onClick={onCloseMobile}>
                <div
                  className={cn(
                    "group relative flex items-start gap-3 rounded-2xl px-4 py-3 transition-all duration-300",

                    isActive
                      ? ""
                      : "border-transparent hover:border-sidebar-border hover:bg-sidebar-accent/70 hover:translate-x-1",

                    showCompactDesktop &&
                      (isActive
                        ? "xl:size-14 xl:justify-center xl:px-0 xl:py-0"
                        : "xl:size-14 xl:justify-center xl:rounded-[24px] xl:border-transparent xl:bg-transparent xl:px-0 xl:py-0 xl:hover:translate-x-0 xl:hover:-translate-y-1 xl:hover:border-primary/18 xl:hover:bg-background/55"),
                  )}
                >
                  {showCompactDesktop && (
                    <span className="sidebar-tooltip group-hover:translate-x-1 group-hover:opacity-100">
                      {item.label}
                    </span>
                  )}

                  <div
                    className={cn(
                      "mt-0.5 rounded-xl p-2 transition-all duration-300",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-background/60 text-muted-foreground group-hover:scale-105 group-hover:text-foreground",
                      showCompactDesktop &&
                        (isActive
                          ? "xl:mt-0 xl:rounded-[18px] xl:bg-primary/95"
                          : "xl:mt-0 xl:bg-transparent"),
                    )}
                  >
                    <item.icon className="size-4" />
                  </div>

                  <div
                    className={cn(
                      "min-w-0 transition-all duration-300 group-hover:translate-x-0.5",
                      isCompact
                        ? "xl:w-0 xl:overflow-hidden xl:opacity-0"
                        : "opacity-100",
                    )}
                  >
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* FOOTER */}
        <div
          className={cn(
            "relative mt-8 rounded-[26px] border border-sidebar-border/80 bg-background/55 p-5 transition-all duration-300",
            isCompact ? "xl:p-3" : "xl:p-5",
          )}
        >
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/14 text-primary">
              <Zap className="size-4" />
            </div>

            <div
              className={cn(
                isCompact
                  ? "xl:w-0 xl:overflow-hidden xl:opacity-0"
                  : "opacity-100",
              )}
            >
              <p className="text-sm font-semibold">Growth score</p>
              <p className="text-xs text-muted-foreground">
                89 / 100 this month
              </p>
            </div>
          </div>

          <div className="mt-4 h-2 rounded-full bg-muted">
            <div className="h-full w-[89%] rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
          </div>
        </div>
      </div>
    </aside>
  );
}
