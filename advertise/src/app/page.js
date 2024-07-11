import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <span className="text-2xl text-slate-950 font-bold">See All Advertises</span>
      <Link className="bg-violet-700 text-white p-3 px-7 rounded-xl" href={'/advertises'}> Click </Link>
    </div>
  )
}
