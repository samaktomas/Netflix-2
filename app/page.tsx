import Billboard from "@/components/billboard";
import Navbar from "@/components/navbar";
import Modal from "@/components/modal";
import Movies from "@/components/movies";
import { getAuthSession } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();

  if (!session) {
    redirect("/auth");
  }

  return (
    <main>
      <Modal />
      <Navbar />
      <Billboard />
      <Movies />
    </main>
  );
}
