import { cn } from "@/lib/utils";
import React from "react";

export default function PageWraper({
  children,
  className,
  ...rest
}: React.HtmlHTMLAttributes<HTMLElement>) {
  return (
    <main className={cn("p-4 sm:px-6 sm:py-0", className)} {...rest}>
      {children}
    </main>
  );
}
