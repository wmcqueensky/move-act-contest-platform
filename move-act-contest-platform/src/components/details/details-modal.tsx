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
		description: string;
		stlFile: string;
	};
};

const DetailsModal = ({ show, onHide, work }: DetailsModalProps) => {
	return (
		<Modal show={show} onHide={onHide} size="lg" centered>
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
			<Modal.Footer>
				<Button variant="secondary" onClick={onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default DetailsModal;
