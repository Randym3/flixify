import React, { Component } from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReadMoreAndLess from "react-read-more-less";
import { connect } from "react-redux";
import { getDiscover } from "../actions/movieActions";

export class Discover extends Component {
  componentDidMount() {
    this.props.getDiscover();
  }

  render() {
    const { movies } = this.props;

    return (
      <div className="wow fadeIn" data-wow-delay=".7s">
        <Carousel indicators={false}>
          {movies.map(cur => (
            <Carousel.Item
              key={cur.id}
              className="banner-gradient text-left   text-light"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(http://image.tmdb.org/t/p/original/${
                  cur.backdrop_path
                })`
              }}
            >
              <Carousel.Caption className="text-left mb-5 pb-5">
                <h3>TMBD Rating: {cur.vote_average} / 10</h3>
                <h1>{cur.title}</h1>{" "}
                <hr
                  className="mx-0"
                  style={{
                    border: "1px white solid",
                    width: "350px"
                  }}
                />
                <ReadMoreAndLess
                  ref={this.ReadMore}
                  className="read-more-content "
                  charLimit={200}
                  readMoreText=" Read more"
                  readLessText=" Read less"
                >
                  {cur.overview}
                </ReadMoreAndLess>
                <Link to={`/details/movie/${cur.id}/`}>
                  <Button className="m-2" variant="success">
                    Get Details
                  </Button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.home.discover
});

export default connect(
  mapStateToProps,
  { getDiscover }
)(Discover);
