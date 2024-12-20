import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import Details from "./details";

type DetailsModalProps = {
	show: boolean;
	onHide: () => void;
	work: {
		image: string;
		title: string;
		titleTranslation: string;
		participantName: string;
		category: string;
		voteCount: number;
		authorBio: string;
		authorBioTranslation: string;
		description: string;
		descriptionTranslation: string;
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
	const [t] = useTranslation("global");

	return (
		<Modal show={show} onHide={onHide} size="xl" centered>
			<Modal.Body>
				<Details
					image={work.image}
					title={work.title}
					participantName={work.participantName}
					category={work.category}
					authorBio={work.authorBio}
					description={work.description}
					stlFile={work.stlFile}
					titleTranslation={work.titleTranslation}
					authorBioTranslation={work.authorBioTranslation}
					descriptionTranslation={work.descriptionTranslation}
				/>
			</Modal.Body>
			<Modal.Footer className="d-flex justify-content-between">
				<p className="votes">
					{t("details.first-text")} {work.voteCount}
				</p>
				<div className="details-buttons">
					<Button
						className={`vote-button ${isVoted ? "voted" : ""}`}
						onClick={onVote}
						disabled={isVoted}
					>
						{isVoted
							? t("details.first-button-text")
							: t("details.second-button-text")}
					</Button>
					<Button className="details-button" onClick={onHide}>
						{t("details.third-button-text")}
					</Button>
				</div>
			</Modal.Footer>
		</Modal>
	);
};

export default DetailsModal;
