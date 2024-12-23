import { Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

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
	const [t] = useTranslation("global");

	return (
		<Card className="card">
			<Card.Img variant="top" src={image} className="card-img-top" />
			<Card.Body className="card-body">
				<Card.Title className="card-title">{title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					{participantName} - {category}
				</Card.Subtitle>
				<Card.Subtitle className="votes">
					{t("work-card.first-text")} {voteCount}
				</Card.Subtitle>
				<div className="card-content">
					<Card.Text className="card-description">{description}</Card.Text>
					<div className="card-buttons-container">
						<Button
							className={`vote-button ${isVoted ? "voted" : ""}`}
							onClick={onVote}
							disabled={isVoted}
						>
							{isVoted ? t("work-card.first-button-text") : voteButtonText}
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
