import prismadb from "@/libs/prismadb";
import { NextResponse } from "next/server";

type IParams = {
  movieId?: string;
};

export async function GET(req: Request, { params }: { params: IParams }) {
  try {
    const { movieId } = params;

    if (!movieId || typeof movieId !== "string") {
      return new NextResponse("Invalid ID", { status: 400 });
    }

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movie) {
      return new NextResponse("Invalid ID", { status: 400 });
    }

    return NextResponse.json(movie);
  } catch (error) {
    console.log(error);
    return new NextResponse("MOVIE_ID_ERROR", { status: 400 });
  }
}
