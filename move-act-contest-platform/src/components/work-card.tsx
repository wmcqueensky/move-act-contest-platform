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
	voteCount: number;
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
	voteCount,
	onVote,
	onDetails,
}: WorkCardProps) => {
	return (
		<Card className="card">
			<Card.Img variant="top" src={image} />
			<Card.Body className="card-body">
				<Card.Title className="card-title">{title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					{participantName} - {category}
				</Card.Subtitle>
				<Card.Subtitle className="votes">Votes: {voteCount}</Card.Subtitle>
				<div className="card-content">
					<Card.Text className="card-description">{description}</Card.Text>
					<div className="card-buttons-container">
						<Button
							className={`vote-button ${isVoted ? "voted" : ""}`}
							onClick={onVote}
							disabled={isVoted}
						>
							{isVoted ? "Voted" : voteButtonText}
						</Button>
						<Button className="details-button" onClick={onDetails}>
							{detailsButtonText}
						</Button>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

export default WorkCard;
