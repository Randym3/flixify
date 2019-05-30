import React, { Component } from "react";
import MovieCarousel from "../MovieCarousel";

const type = "movie";
export class StudioGhibli extends Component {
  render() {
    const api_key = "170638d59cd41f58852a2f12564d2503";
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=10342`;
    return (
      <MovieCarousel
        apiUrl={url}
        title="Studio Ghibli Collection"
        type={type}
      />
    );
  }
}

export default StudioGhibli;
