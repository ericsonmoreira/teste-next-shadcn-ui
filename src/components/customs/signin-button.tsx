"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import googleIcon from "@/assets/g-icon.svg";

export async function SignInButton() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        signIn("google", { callbackUrl: "/" });
      }}
    >
      <Image src={googleIcon} alt="Google Icon" width={24} height={24} />
      Login com Google
    </Button>
  );
}
