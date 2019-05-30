import React, { Component } from "react";
import MovieCarousel from "../MovieCarousel";

const type = "tv";
export class PopularTV extends Component {
  render() {
    const api_key = "170638d59cd41f58852a2f12564d2503";
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&first_air_date.gte=2010-01-01&page=1&without_genres=16&include_null_first_air_dates=false&with_original_language=en`;
    return <MovieCarousel apiUrl={url} title="Popular TV Series" type={type} />;
  }
}

export default PopularTV;
