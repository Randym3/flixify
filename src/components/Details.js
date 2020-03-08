import React, { Component } from "react";
import Slider from "react-slick";
import noImage from "../noImage.png";
import Loading from "./pages/Loading";

import {
	Col,
	Row,
	ListGroup,
	ButtonToolbar,
	Button,
	Container,
	Card
} from "react-bootstrap";

import YoutubeModal from "./pages/YoutubeModal";
import CastList from "./CastList";
import { SliderSettings } from "./pages/SliderSettings";
import { connect } from "react-redux";

import {
	getMovie,
	getCast,
	getTrailer,
	getSimilar
} from "../actions/movieActions";

export class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalShow: false
		};
	}

	modalClose = () => {
		this.setState({ modalShow: false });
	};

	componentDidMount() {
		const { type, id } = this.props.match.params;
		const { getMovie, getCast, getTrailer, getSimilar } = this.props;
		getMovie(type, id);
		getCast(type, id);
		getTrailer(type, id);
		getSimilar(type, id);
		window.scrollTo(0, 0);
	}
	render() {
		const { modalShow } = this.state;
		const { details, trailer, genres, cast, similar } = this.props.details;
		const fullYear = String(details.release_date).slice(0, 4);

		return (
			<div
				className="banner-gradient-details  text-light "
				style={{
					backgroundImage: `linear-gradient(rgba(0,0,53,0.7),rgba(0,0,53,0.7)),url(https://image.tmdb.org/t/p/original/${details.backdrop_path})`
				}}
			>
				<Container>
					<Row className="   align-items-center justify-content-center">
						<Col className="text-center py-4" md={3}>
							{" "}
							<img
								className="rounded"
								alt=""
								width="225"
								src={
									details.poster_path
										? `https://image.tmdb.org/t/p/original/${details.poster_path}`
										: noImage
								}
							/>
						</Col>
						<Col className="py-4" lg={8} xs={11}>
							<h1>
								{details.title}{" "}
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
										Sorry, no details can be found for " {details.title} "
									</span>
								)}
							</p>
						</Col>
					</Row>
					<section>
						<h1 className=" pt-5 text-white text-center">Top Cast Members</h1>

						<CastList cast={cast} />
					</section>

					<h1 className=" pt-5 text-white text-center ">Recommendations</h1>

					{similar.length > 0 ? (
						<Slider {...SliderSettings}>
							{similar.map((cur, i) => {
								return cur.backdrop_path ? (
									<Card className="text-white  " key={cur.id}>
										<a href={`/details/movie/${cur.id}/`}>
											<Card.Img
												variant="top"
												src={
													cur.poster_path
														? `https://image.tmdb.org/t/p/original/${cur.poster_path}`
														: noImage
												}
											/>
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
							Sorry, no recommendations for " {details.title} "
						</p>
					)}
				</Container>
				<Loading />
			</div>
		);
	}
}
const mapStateToProps = state => ({
	details: state.details
});

export default connect(mapStateToProps, {
	getMovie,
	getCast,
	getTrailer,
	getSimilar
})(Details);
