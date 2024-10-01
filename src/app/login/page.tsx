import PageWraper from "@/components/customs/page-wraper";
import { SignInButton } from "@/components/customs/signin-button";

export default async function LoginPage() {
  return (
    <PageWraper>
      <h1>Login</h1>
      <SignInButton />
    </PageWraper>
  );
}
