import React from "react";
import { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { ApiKey } from "../../common/apis/MovieApiKey";

const Home = () => {
  const movieText = "harry";
  useEffect(() => {
    const fatchMovies = async () => {
      const res = await movieApi
        .get(`&apikey=${ApiKey}&s=${movieText}&type=movie`)
        .catch((err) => console.log("err: ", err));
      console.log("res: ", res);
    };
    fatchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
