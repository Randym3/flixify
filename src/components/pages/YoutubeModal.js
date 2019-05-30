import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import YouTube from "react-youtube";

export class YoutubeModal extends Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {" "}
          <YouTube
            videoId={this.props.trailer}
            opts={opts}
            className="youtubeModal"
          />
        </Modal.Header>
      </Modal>
    );
  }
}

export default YoutubeModal;
