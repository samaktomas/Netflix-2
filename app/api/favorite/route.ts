import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";
import { without } from "lodash";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { currentUser } = await serverAuth();

    const { movieId } = await req.json();

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      return new NextResponse("Invalid ID", { status: 400 });
    }

    const updatedUser = await prismadb.user.update({
      where: {
        email: currentUser.email!,
      },
      data: {
        favoriteIds: {
          push: movieId,
        },
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return new NextResponse("MOVIES_ERROR", { status: 400 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { currentUser } = await serverAuth();

    const { movieId } = await req.json();

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      return new NextResponse("Invalid ID", { status: 400 });
    }

    const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);

    const updatedUser = await prismadb.user.update({
      where: {
        email: currentUser.email!,
      },
      data: {
        favoriteIds: updatedFavoriteIds,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return new NextResponse("MOVIES_ERROR", { status: 400 });
  }
}
