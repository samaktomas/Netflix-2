import prismadb from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);

    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    if (!randomMovies[0]) {
      return new NextResponse("No movies found", { status: 401 });
    }

    return NextResponse.json(randomMovies[0]);
  } catch (error) {
    console.log(error);
    return new NextResponse("ERROR_RANDOM_ROUTE", { status: 400 });
  }
}
