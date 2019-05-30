import React, { Component } from "react";
import Slider from "react-slick";
import noImage from "../noImage.png";
import {
  Col,
  Row,
  ListGroup,
  ButtonToolbar,
  Button,
  Container,
  Card
} from "react-bootstrap";

import axios from "axios";
import YoutubeModal from "./pages/YoutubeModal";
import CastList from "./CastList";
import { SliderSettings } from "./pages/SliderSettings";

const apiKey = "170638d59cd41f58852a2f12564d2503";
export class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      similar: [],
      genres: [],
      trailer: "",
      cast: [],
      modalShow: false
    };
  }

  getTvDetails = async api => {
    const { id, type } = this.props.match.params;
    const res = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${api}`
    );

    this.setState({
      details: res.data,
      genres: res.data.genres.map(cur => cur.name)
    });
  };
  getMovieCast = async api => {
    const { id, type } = this.props.match.params;
    const res = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${api}`
    );
    this.setState({ cast: res.data.cast.slice(0, 5) });
  };
  getTvTrailer = async api => {
    try {
      const { id, type } = this.props.match.params;
      const res = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${apiKey}&language=en-US`
      );

      res.data.results.length >= 1
        ? this.setState({ trailer: res.data.results[0].key })
        : this.setState({ trailer: "noid" });
    } catch (error) {
      console.log(error);
    }
  };

  getSimilar = async api => {
    const { id, type } = this.props.match.params;
    const res = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${api}&language=en-US&page=1`
    );

    this.setState({
      similar: res.data.results
    });
  };

  modalClose = () => {
    this.setState({ modalShow: false });
  };

  componentDidMount() {
    this.getTvDetails(apiKey);
    this.getTvTrailer(apiKey);
    this.getMovieCast(apiKey);
    this.getSimilar(apiKey);
  }
  render() {
    const { details, trailer, genres, modalShow, cast, similar } = this.state;
    const fullYear = String(details.first_air_date).slice(0, 4);

    return (
      <div
        className="banner-gradient-details  text-light "
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,53,0.7),rgba(0,0,53,0.7)),url(http://image.tmdb.org/t/p/original/${
            details.backdrop_path
          })`
        }}
      >
        <Container>
          <Row className="  align-items-center justify-content-center">
            <Col className="text-center py-4" md={3}>
              {" "}
              <img
                className="rounded"
                alt=""
                width="225"
                src={
                  details.poster_path
                    ? `http://image.tmdb.org/t/p/original/${
                        details.poster_path
                      }`
                    : noImage
                }
              />
            </Col>
            <Col className="py-4" lg={8} xs={11}>
              <h1>
                {details.name}{" "}
                <span className="text-warning">({fullYear})</span>
              </h1>

              {genres.map((cur, i) => (
                <ListGroup.Item
                  key={i}
                  className="d-inline-block  p-2 m-2 rounded"
                  variant="warning"
                >
                  {cur}
                </ListGroup.Item>
              ))}

              {trailer === "noid" ? null : (
                <ButtonToolbar className="d-inline-block m-1">
                  <Button
                    variant="warning"
                    onClick={() => this.setState({ modalShow: true })}
                  >
                    <i className="fas fa-play-circle" /> Trailer
                  </Button>

                  <YoutubeModal
                    show={modalShow}
                    onHide={this.modalClose}
                    trailer={trailer}
                  />
                </ButtonToolbar>
              )}

              <hr
                className="mx-0"
                style={{
                  border: "1px white solid",
                  width: "250px"
                }}
              />
              <p className="p-2 bg-light text-dark rounded">
                {details.overview ? (
                  details.overview
                ) : (
                  <span>
                    Sorry, no details can be found for " {details.name} "
                  </span>
                )}
              </p>
            </Col>
          </Row>

          <h1 className=" py-3 text-white text-center">Top Cast Members</h1>

          <CastList cast={cast} />

          <h1 className=" py-3 text-white text-center">Recommendations</h1>
          {similar.length > 0 ? (
            <Slider {...SliderSettings}>
              {similar.map(cur => {
                return cur.backdrop_path ? (
                  <Card key={cur.id} className="text-white">
                    <Card.Img
                      variant="top"
                      src={
                        cur.poster_path
                          ? `http://image.tmdb.org/t/p/original/${
                              cur.poster_path
                            }`
                          : noImage
                      }
                    />
                    <a href={`/tvdetails/tv/${cur.id}/`}>
                      <Button
                        style={{
                          position: "absolute",
                          top: "30%",
                          left: "35%",
                          right: "35%"
                        }}
                        variant="warning"
                      >
                        <i className="fas fa-info-circle" />
                      </Button>
                    </a>

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
                      <Card.Text>
                        No ratings <i className="fas fa-frown" />
                      </Card.Text>
                    )}
                  </Card>
                ) : null;
              })}
            </Slider>
          ) : (
            <p className="text-center pb-3">
              Sorry, no recommendations for " {details.name} "
            </p>
          )}
        </Container>
      </div>
    );
  }
}

export default Details;
