import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SliderSettings } from "./pages/SliderSettings";

import noImage from "../noImage.png";

export default class MovieCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playingMovies: []
    };
  }

  getMovies = async () => {
    try {
      const res = await axios.get(this.props.apiUrl);
      const data = res.data.results;
      this.setState({ playingMovies: data });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { playingMovies } = this.state;
    console.log(playingMovies);
    return (
      <div className="p-2 ">
        <h1
          className=" pt-1 text-white text-center wow fadeIn"
          data-wow-delay=".2s"
        >
          {this.props.title}
        </h1>
        <Slider {...SliderSettings}>
          {playingMovies.map((cur, i) => {
            return cur.backdrop_path ? (
              <Card
                key={cur.id}
                className="text-white wow fadeIn"
                data-wow-delay={`${0.1 * i.toString()}s`}
              >
                <Card.Img
                  variant="top"
                  src={
                    cur.poster_path
                      ? `http://image.tmdb.org/t/p/original/${cur.poster_path}`
                      : noImage
                  }
                />

                <Card.Title className="pt-3">
                  {cur.title ? cur.title : cur.name}
                </Card.Title>
                <hr
                  className="mx-0"
                  style={{
                    border: "1px white solid",
                    width: "50px"
                  }}
                />

                {cur.vote_average > 0 ? (
                  <Card.Text className="my-3">
                    TMDB Rating <br />
                    <i className="fas fa-star" /> {` `}
                    {cur.vote_average} / 10
                  </Card.Text>
                ) : (
                  <Card.Text className="my-3">
                    No ratings <i className="fas fa-frown" />
                  </Card.Text>
                )}

                {this.props.type === "movie" ? (
                  <Link
                    style={{
                      position: "absolute",
                      top: "30%",
                      left: "25%",
                      right: "25%"
                    }}
                    className="btn btn-success"
                    to={`/details/${this.props.type}/${cur.id}/`}
                  >
                    Get Details
                  </Link>
                ) : (
                  <Link
                    style={{
                      position: "absolute",
                      top: "30%",
                      left: "25%",
                      right: "25%"
                    }}
                    className="btn btn-success"
                    to={`/tvdetails/${this.props.type}/${cur.id}/`}
                  >
                    Get Details
                  </Link>
                )}
              </Card>
            ) : null;
          })}
        </Slider>
      </div>
    );
  }
}
