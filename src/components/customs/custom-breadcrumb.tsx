"use client";

import { ComponentProps } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

function parseRoute(route: string) {
  const cleanRoute = route.split("?")[0];

  const segments = cleanRoute.split("/").filter(Boolean);

  return segments;
}

const segmentsMap: Record<string, { label: string; href?: string }> = {
  players: {
    label: "Jogadores",
    href: "/players",
  },
  dashboard: {
    label: "Dashboard",
    href: "/dashboard",
  },
};

export function CustomBreadcrumb(props: ComponentProps<typeof Breadcrumb>) {
  const pathname = usePathname();

  const segments = parseRoute(pathname);

  return (
    <Breadcrumb {...props}>
      <BreadcrumbList>
        {segments.length > 0 ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home size={16} />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : (
          <BreadcrumbItem>
            <BreadcrumbPage>
              <Home size={16} />
            </BreadcrumbPage>
          </BreadcrumbItem>
        )}
        {segments.map((segment, index) => (
          <BreadcrumbItem key={`segment-${segment}`}>
            {index === segments.length - 1 ? (
              <BreadcrumbPage>{segmentsMap[segment].label}</BreadcrumbPage>
            ) : (
              <>
                <BreadcrumbLink asChild>
                  <Link href={segmentsMap[segment].href as string}>
                    {segmentsMap[segment].label}
                  </Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
