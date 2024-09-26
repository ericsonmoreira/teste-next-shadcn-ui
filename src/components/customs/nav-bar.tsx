"use client";

import { cn } from "@/lib/utils";
import {
  Gauge,
  LucideIcon,
  Package2,
  Settings,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export type NavBarItensData = {
  href: string;
  tooltipLabel: string;
  icon: LucideIcon;
};

const navBarItems: NavBarItensData[] = [
  { href: "/dashboard", tooltipLabel: "Dashboard", icon: Gauge },
  { href: "/players", tooltipLabel: "Players", icon: UsersRound },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        <Link
          href="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        {navBarItems.map(({ href, tooltipLabel, icon: Icon }) => (
          <Tooltip key={tooltipLabel}>
            <TooltipTrigger asChild>
              <Link
                href={href}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === href.toString()
                    ? "bg-accent text-accent-foreground"
                    : null
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{tooltipLabel}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}
