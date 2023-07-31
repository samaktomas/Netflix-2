"use client";
import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface WatchPageProps {
  params: { movieId?: string };
}

const WatchPage: FC<WatchPageProps> = ({ params }) => {
  const { movieId } = params;
  const { data } = useMovie(movieId);
  const router = useRouter();

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft
          size={25}
          onClick={() => router.push("/")}
          className="text-white cursor-pointer hover:opacity-80 transition"
        />
        <p className="text-white text-md md:text-xl font-bold">
          <span className="font-light">Watching:</span> {data?.title}
        </p>
      </nav>
      <video
        className="h-full w-full"
        autoPlay
        controls
        src={data?.videoUrl}
      ></video>
    </div>
  );
};

export default WatchPage;
