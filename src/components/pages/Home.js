import React, { Component } from "react";

import Discover from "../Discover";
import Loading from "./Loading";
import MovieCarousel from "../MovieCarousel";
import { connect } from "react-redux";

import {
  getNowPlaying,
  getUpcoming,
  getStudioGhibli,
  getTopRated
} from "../../actions/movieActions";

import { getAsianDramas, getPopularTV } from "../../actions/tvActions";

export class Home extends Component {
  componentDidMount() {
    this.props.getAsianDramas();
    this.props.getPopularTV();
    this.props.getNowPlaying();
    this.props.getUpcoming();
    this.props.getStudioGhibli();
    this.props.getTopRated();
  }
  render() {
    const {
      nowPlaying,
      topRated,
      studioGhibli,
      upcoming,
      asianDramas,
      popularTV
    } = this.props;

    return (
      <div>
        <Discover />

        <MovieCarousel
          movies={nowPlaying}
          type="movie"
          title="Now In Theatres"
        />
        <MovieCarousel
          movies={topRated}
          type="movie"
          title="Top Rated Movies"
        />
        <MovieCarousel
          movies={studioGhibli}
          type="movie"
          title="Studio Ghibli Collection"
        />
        <MovieCarousel movies={upcoming} type="movie" title="Upcoming Movies" />
        <MovieCarousel movies={asianDramas} type="tv" title="Asian Dramas" />
        <MovieCarousel movies={popularTV} type="tv" title="Popular TV Series" />

        <Loading />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nowPlaying: state.home.nowPlaying,
  topRated: state.home.topRated,
  studioGhibli: state.home.studioGhibli,
  upcoming: state.home.upcoming,
  asianDramas: state.home.asianDramas,
  popularTV: state.home.popularTV
});

export default connect(
  mapStateToProps,
  {
    getAsianDramas,
    getPopularTV,
    getNowPlaying,
    getUpcoming,
    getStudioGhibli,
    getTopRated
  }
)(Home);
