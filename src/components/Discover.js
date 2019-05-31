import React, { Component } from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ReadMoreAndLess from "react-read-more-less";

const apiKey = "170638d59cd41f58852a2f12564d2503";
export class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoaded: null
    };
  }

  getMovies = async api => {
    this.setState({ isLoaded: false });
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
    const data = res.data.results;
    this.setState({ movies: data });
    this.setState({ isLoaded: true });
  };

  componentDidMount() {
    this.getMovies(apiKey);
  }

  render() {
    const { movies, isLoaded } = this.state;

    return (
      <div>
        {isLoaded === false ? (
          <h1 className="display-2 text-center text-white">Loading</h1>
        ) : (
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
        )}
      </div>
    );
  }
}

export default Discover;
