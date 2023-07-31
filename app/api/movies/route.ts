import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await serverAuth();

    const movies = await prismadb.movie.findMany();

    return NextResponse.json(movies);
  } catch (error) {
    console.log(error);
    return new NextResponse("MOVIES_ERROR", { status: 400 });
  }
}
