import PageWraper from "@/components/customs/page-wraper";
import { getServerSession } from "next-auth";

export default async function PlayersPage() {
  const session = await getServerSession();

  return (
    <PageWraper>
      <h1>Players</h1>
      <pre>{JSON.stringify(session, undefined, 2)}</pre>
    </PageWraper>
  );
}
