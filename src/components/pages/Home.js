import React, { Component } from "react";
import NowPlaying from "../MovieLists/NowPlaying";
import TopRated from "../MovieLists/TopRated";
import Upcoming from "../MovieLists/Upcoming";
import StudioGhibli from "../MovieLists/StudioGhibli";
import ComedyDramaTV from "../MovieLists/ComedyDramaTV";
import PopularTV from "../MovieLists/PopularTV";
import Discover from "../Discover";
import Loading from "./Loading";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }
  render() {
    return (
      <div>
        <Discover />
        <NowPlaying />
        <TopRated />
        <Upcoming />
        <StudioGhibli />
        <PopularTV />
        <ComedyDramaTV />
        <Loading />
      </div>
    );
  }
}

export default Home;
