"use client";

import { signOut } from "next-auth/react";
import { DropdownMenuItem } from "../ui/dropdown-menu";

export function DropdownMenuItemSignOut() {
  return (
    <DropdownMenuItem
      onClick={() =>
        signOut({
          callbackUrl: "/login",
        })
      }
    >
      Logout
    </DropdownMenuItem>
  );
}
