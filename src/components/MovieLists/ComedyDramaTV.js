import React, { Component } from "react";
import MovieCarousel from "../MovieCarousel";

const type = "tv";
export class ComedyDramaTV extends Component {
  render() {
    const api_key = "170638d59cd41f58852a2f12564d2503";
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&sort_by=popularity.desc&page=1&with_genres=35%2C18&include_null_first_air_dates=false&with_original_language=zh%7Cko`;
    return (
      <MovieCarousel apiUrl={url} title="Chinese / Korean Dramas" type={type} />
    );
  }
}

export default ComedyDramaTV;
