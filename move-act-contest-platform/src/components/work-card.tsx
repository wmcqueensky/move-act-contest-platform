import { Card, Button } from "react-bootstrap";

type WorkCardProps = {
	image: string;
	title: string;
	participantName: string;
	category: string;
	description: string;
	voteButtonText: string;
	detailsButtonText: string;
};

const WorkCard = ({
	image,
	title,
	participantName,
	category,
	description,
	voteButtonText,
	detailsButtonText,
}: WorkCardProps) => {
	return (
		<Card className="card">
			<Card.Img variant="top" src={image} />
			<Card.Body className="cards-body">
				<Card.Title className="card-title">{title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					{participantName} - {category}
				</Card.Subtitle>
				<Card.Text className="card-description">{description}</Card.Text>
				<div className="card-buttons-container">
					<Button className="vote-button">{voteButtonText}</Button>
					<Button className="details-button">{detailsButtonText}</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default WorkCard;
