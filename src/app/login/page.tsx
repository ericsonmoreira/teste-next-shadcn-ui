import PageWraper from "@/components/customs/page-wraper";
import { SignInButton } from "@/components/customs/signin-button";

export default async function LoginPage() {
  return (
    <PageWraper className=" flex flex-1 min-h-screen w-full flex-col justify-center">
      <h1>Login</h1>
      <div>
        <SignInButton />
      </div>
    </PageWraper>
  );
}
