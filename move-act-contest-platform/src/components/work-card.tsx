import { Card, Button } from "react-bootstrap";

type WorkCardProps = {
	image: string;
	title: string;
	participantName: string;
	category: string;
	description: string;
	voteButtonText: string;
	detailsButtonText: string;
	isVoted: boolean;
	onVote: () => void;
	onDetails: () => void;
};

const WorkCard = ({
	image,
	title,
	participantName,
	category,
	description,
	voteButtonText,
	detailsButtonText,
	isVoted,
	onVote,
	onDetails,
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
					<Button className="vote-button" onClick={onVote}>
						{isVoted ? "Voted" : voteButtonText}
					</Button>
					<Button className="details-button" onClick={onDetails}>
						{detailsButtonText}
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default WorkCard;
