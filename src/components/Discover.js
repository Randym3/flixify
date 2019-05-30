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
      configuration: {}
    };
  }

  getMovies = async api => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
    const data = res.data.results;
    this.setState({ movies: data });
  };
  getConfig = api => {
    axios
      .get(`https://api.themoviedb.org/3/configuration?api_key=${api}`)
      .then(data => this.setState({ configuration: data }));
  };

  componentDidMount() {
    this.getMovies(apiKey);
    this.getConfig(apiKey);
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
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

export default Discover;
