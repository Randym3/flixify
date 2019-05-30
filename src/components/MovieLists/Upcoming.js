import React, { Component } from "react";
import MovieCarousel from "../MovieCarousel";

const type = "movie";
export class NowPlaying extends Component {
  render() {
    const api_key = "170638d59cd41f58852a2f12564d2503";
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&page=1&region=US
    `;
    return <MovieCarousel apiUrl={url} title="Upcoming Movies" type={type} />;
  }
}

export default NowPlaying;
