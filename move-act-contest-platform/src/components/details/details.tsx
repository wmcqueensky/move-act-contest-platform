import { useEffect, useRef, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { StlViewer } from "react-stl-viewer";

type DetailsProps = {
	image: string;
	title: string;
	participantName: string;
	category: string;
	description: string;
	stlFile: string;
};

const Details = ({
	image,
	title,
	participantName,
	category,
	description,
	stlFile,
}: DetailsProps) => {
	return (
		<Container className="details-container text-center">
			<Image src={image} fluid />
			<h1 className="details-title">{title}</h1>
			<h3 className="details-participant text-muted">
				{participantName} - {category}
			</h3>
			<p className="details-description">{description}</p>

			<StlViewer className="stl-viewer" orbitControls shadows url={stlFile} />
		</Container>
	);
};

export default Details;
