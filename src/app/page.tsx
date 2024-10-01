import PageWraper from "@/components/customs/page-wraper";
import { Button } from "@/components/ui/button";
import { createSubscriptionSession } from "./actions";

export default function HomePage() {
  return (
    <PageWraper>
      <h1>Home</h1>
      <form action={createSubscriptionSession}>
        <Button variant="outline" type="submit">
          Assine aqui
        </Button>
      </form>
    </PageWraper>
  );
}
