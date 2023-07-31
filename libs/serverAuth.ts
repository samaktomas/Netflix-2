import { getServerSession } from "next-auth";

import prismadb from "@/libs/prismadb";
import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";

const serverAuth = async () => {
  const session = await getAuthSession();

  if (!session?.user?.email) {
    throw new Error("Not signed in");
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    throw new Error("Not signed in");
  }

  return { currentUser };
};

export default serverAuth;
