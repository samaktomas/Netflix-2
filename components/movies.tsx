"use client";
import { FC } from "react";
import MovieList from "./moive-list";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";

interface MoviesProps {}

const Movies: FC<MoviesProps> = ({}) => {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();

  return (
    <div className="pb-40">
      <MovieList title="Trending now" data={movies} />
      <MovieList title="My List" data={favorites} />
    </div>
  );
};

export default Movies;
