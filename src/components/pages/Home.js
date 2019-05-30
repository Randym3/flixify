import React, { Component } from "react";
import NowPlaying from "../MovieLists/NowPlaying";
import TopRated from "../MovieLists/TopRated";
import Upcoming from "../MovieLists/Upcoming";
import StudioGhibli from "../MovieLists/StudioGhibli";
import ComedyDramaTV from "../MovieLists/ComedyDramaTV";
import PopularTV from "../MovieLists/PopularTV";
import Discover from "../Discover";
export class Home extends Component {
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
      </div>
    );
  }
}

export default Home;
