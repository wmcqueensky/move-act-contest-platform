import { Modal, Button } from "react-bootstrap";
import Details from "./details";

type DetailsModalProps = {
	show: boolean;
	onHide: () => void;
	work: {
		image: string;
		title: string;
		participantName: string;
		category: string;
		voteCount: number;
		description: string;
		stlFile: string;
	};
	isVoted: boolean;
	onVote: () => void;
};

const DetailsModal = ({
	show,
	onHide,
	work,
	isVoted,
	onVote,
}: DetailsModalProps) => {
	return (
		<Modal show={show} onHide={onHide} size="xl" centered>
			<Modal.Body>
				<Details
					image={work.image}
					title={work.title}
					participantName={work.participantName}
					category={work.category}
					description={work.description}
					stlFile={work.stlFile}
				/>
			</Modal.Body>
			<Modal.Footer className="d-flex justify-content-between">
				<p className="votes">Votes: {work.voteCount}</p>
				<div className="details-buttons">
					<Button
						className={`vote-button ${isVoted ? "voted" : ""}`}
						onClick={onVote}
						disabled={isVoted}
					>
						{isVoted ? "Voted" : "Vote"}
					</Button>
					<Button className="details-button" onClick={onHide}>
						Close
					</Button>
				</div>
			</Modal.Footer>
		</Modal>
	);
};

export default DetailsModal;
