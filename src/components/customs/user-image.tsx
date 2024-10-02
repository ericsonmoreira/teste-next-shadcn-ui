import { getServerSession } from "next-auth";
import Image from "next/image";

export async function UserImage() {
  const session = await getServerSession();

  return (
    <Image
      src={session?.user?.image as string}
      width={36}
      height={36}
      alt="Avatar"
      className="overflow-hidden rounded-full"
    />
  );
}
