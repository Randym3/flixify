import React, { Component } from "react";
import MovieCarousel from "../MovieCarousel";

const type = "movie";
export class TopRated extends Component {
  render() {
    const api_key = "170638d59cd41f58852a2f12564d2503";
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`;
    return <MovieCarousel apiUrl={url} title="Top Rated" type={type} />;
  }
}

export default TopRated;
