import { Container, Col, Image, Button } from "react-bootstrap";

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
		<Container className="details-container">
			<Col className="text-center details-sheet">
				<Image src={image} className="details-image" fluid />
				<h1 className="details-title">{title}</h1>
				<h3 className="details-participant">{participantName}</h3>
				<h4 className="details-category">{category}</h4>
				<p className="details-description">{description}</p>
				<a href={stlFile} download>
					<Button className="details-download-button">Download STL File</Button>
				</a>
			</Col>
		</Container>
	);
};

export default Details;
