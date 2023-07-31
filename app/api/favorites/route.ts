import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";
import { NextResponse } from "next/server";

export async function GET(res: Response) {
  try {
    const { currentUser } = await serverAuth();

    const favoriteMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        },
      },
    });
    return NextResponse.json(favoriteMovies);
  } catch (error) {
    console.log(error);
    return new NextResponse("MOVIES_ERROR", { status: 400 });
  }
}
