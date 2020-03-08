import React, { Component } from "react";
import Slider from "react-slick";

import { Card } from "react-bootstrap";

import { SliderSettings } from "./pages/SliderSettings";

import noImage from "../noImage.png";

export default class MovieCarousel extends Component {
	componentDidMount() {}

	render() {
		const { movies } = this.props;

		return (
			<div className="p-2 ">
				<h1 className=" pt-1 text-white text-center  ">{this.props.title}</h1>
				<Slider className="mx-4" {...SliderSettings}>
					{movies.map((cur, i) => {
						return cur.backdrop_path ? (
							<Card key={cur.id} className="text-white">
								<a
									href={
										this.props.type === "movie"
											? `/details/${this.props.type}/${cur.id}/`
											: `/tvdetails/${this.props.type}/${cur.id}/`
									}
								>
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
									<Card.Text className="my-3">
										No ratings <i className="fas fa-frown" />
									</Card.Text>
								)}
							</Card>
						) : null;
					})}
				</Slider>
			</div>
		);
	}
}
