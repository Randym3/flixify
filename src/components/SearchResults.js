import React, { Component } from "react";

import queryString from "query-string";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import noImage from "../noImage.png";
import Loading from "./pages/Loading";
import { connect } from "react-redux";
import { getSearchResults, getDetails } from "../actions/searchActions";

export class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
  }

  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    this.props.getSearchResults(query);
  }

  render() {
    const { query } = queryString.parse(this.props.location.search);
    const { searchResults } = this.props;

    return (
      <div className="container text-white text-center ">
        <h2 className="py-5">Search Results for: " {query.toUpperCase()} "</h2>
        <Row
          className="text-center align-items-end wow fadeIn"
          data-wow-delay=".7s"
        >
          {searchResults.map((cur, i) => {
            return (
              <Col
                className="text-white wow fadeIn"
                data-wow-delay={`${0.2 * i.toString()}s`}
                key={i}
              >
                <img
                  alt={cur.name}
                  style={{
                    maxWidth: "200px",
                    maxHeight: "300px",
                    borderRadius: "10px"
                  }}
                  src={
                    cur.poster_path
                      ? `https://image.tmdb.org/t/p/original/${cur.poster_path}`
                      : noImage
                  }
                />
                <h4 className="my-3">{cur.title ? cur.title : cur.name}</h4>
                {cur.vote_average > 0 ? (
                  <p className="my-3">
                    TMDB Rating <br />
                    <i className="fas fa-star" /> {` `}
                    {cur.vote_average} / 10
                  </p>
                ) : (
                  <p>
                    No ratings <i className="fas fa-frown" />
                  </p>
                )}

                <Col>
                  <Link
                    style={{ position: "relative", bottom: "300px" }}
                    className="btn btn-success"
                    to={`/${
                      cur.media_type === "tv" ? "tvdetails" : "details"
                    }/${cur.media_type}/${cur.id}/`}
                  >
                    Get Details
                  </Link>
                </Col>
              </Col>
            );
          })}
        </Row>
        <Loading />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.search.results
});

export default connect(
  mapStateToProps,
  {
    getSearchResults,
    getDetails
  }
)(SearchResults);
