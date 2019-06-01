import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import noImage from "../noImage.png";

export class CastList extends Component {
  render() {
    const { cast } = this.props;
    return (
      <Row className="text-center align-items-end">
        {cast.map((cur, i) => {
          return (
            <Col
              className="text-white wow fadeIn"
              data-wow-delay={`${0.2 * i.toString()}s`}
              key={i}
            >
              <img
                alt={cur.name}
                style={{
                  maxWidth: "140px",
                  maxHeight: "300px",
                  borderRadius: "10px"
                }}
                src={
                  cur.profile_path
                    ? `http://image.tmdb.org/t/p/original/${cur.profile_path}`
                    : noImage
                }
              />

              <h4 className="p-2 mt-2">{cur.name}</h4>
              <p>{cur.character}</p>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default CastList;
