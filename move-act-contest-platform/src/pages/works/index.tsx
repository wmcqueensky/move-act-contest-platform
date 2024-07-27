import { Container, Col } from "react-bootstrap";
import { useState } from "react";
import WorkCard from "../../components/work-card";
import DetailsModal from "../../components/details/details-modal";
import cardImage1 from "./images/card-image-1.png";
import cardImage2 from "./images/card-image-2.png";
import cardImage3 from "./images/card-image-3.png";
import cardImage4 from "./images/card-image-4.png";
import cardImage5 from "./images/card-image-5.png";
import "./styles.css";

type FlagType = "pl" | "gr" | "it" | "es" | "lt";

const WorksPage = () => {
	const [activeFlag, setActiveFlag] = useState<FlagType | null>(null);
	const [votedWork, setVotedWork] = useState<number | null>(null);
	const [showModal, setShowModal] = useState(false);
	const [currentWork, setCurrentWork] = useState({
		image: "",
		title: "",
		participantName: "",
		category: "",
		description: "",
		stlFile: "",
	});

	const handleFlagClick = (flag: FlagType) => {
		setActiveFlag(flag);
	};

	const handleVote = (workIndex: number) => {
		setVotedWork(workIndex);
	};

	const handleDetails = (work: any) => {
		setCurrentWork(work);
		setShowModal(true);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	return (
		<>
			<Container fluid className="projects-image mb-5">
				<Col className="text-center">
					<h1 className="welcome-header display-1">
						THE 25 NOMINATED PROJECTS <br /> FOR WHICH YOU CAN VOTE
					</h1>
				</Col>
			</Container>

			<Container className="voting-info-container">
				<h1 className="voting-info-header text-center mb-5">How to vote?</h1>
				<ul>
					<li>
						<h3>
							There are 25 works from 5 countries: Poland, Greece, Italy, Spain,
							Lithuania.
						</h3>
					</li>

					<li>
						<h3>You can vote for 5 works, each from different country.</h3>
					</li>

					<li>
						<h3>
							To choose works from specific select one of the 5 flags. The
							highlighted flag will indicate the origin of the displayed works.
						</h3>
					</li>

					<li>
						<h3>
							After selecting the flag you will see 5 works from the selected
							country.
						</h3>
					</li>

					<li>
						<h3>To vote for a specific work click Vote button.</h3>
					</li>

					<li>
						<h3>To see more details about work click Details button.</h3>
					</li>
				</ul>
			</Container>

			<Container className="flag-container text-center">
				<button
					className={`flag-button ${activeFlag === "pl" ? "active" : ""}`}
					onClick={() => handleFlagClick("pl")}
				>
					<span className="fi fi-pl flag"></span>
				</button>

				<button
					className={`flag-button ${activeFlag === "gr" ? "active" : ""}`}
					onClick={() => handleFlagClick("gr")}
				>
					<span className="fi fi-gr flag"></span>
				</button>

				<button
					className={`flag-button ${activeFlag === "it" ? "active" : ""}`}
					onClick={() => handleFlagClick("it")}
				>
					<span className="fi fi-it flag"></span>
				</button>

				<button
					className={`flag-button ${activeFlag === "es" ? "active" : ""}`}
					onClick={() => handleFlagClick("es")}
				>
					<span className="fi fi-es flag"></span>
				</button>

				<button
					className={`flag-button ${activeFlag === "lt" ? "active" : ""}`}
					onClick={() => handleFlagClick("lt")}
				>
					<span className="fi fi-lt flag"></span>
				</button>
			</Container>

			<Container className="card-container">
				<WorkCard
					image={cardImage1}
					title="Card Title 1"
					participantName="Participant 1"
					category="Category 1"
					description="Some quick example text to build on the card title and make up the bulk of the card's content. "
					voteButtonText="Vote"
					detailsButtonText="Details"
					isVoted={votedWork === 1}
					onVote={() => handleVote(1)}
					onDetails={() =>
						handleDetails({
							image: cardImage1,
							title: "Card Title 1",
							participantName: "Participant 1",
							category: "Category 1",
							description:
								"Some quick example text to build on the card title and make up the bulk of the card's content.",
							stlFile: "path/to/stlFile1.stl",
						})
					}
				/>
				<WorkCard
					image={cardImage2}
					title="Card Title 2"
					participantName="Participant 2"
					category="Category 2"
					description="Some quick example text to build on the card title and make up the bulk of the card's content."
					voteButtonText="Vote"
					detailsButtonText="Details"
					isVoted={votedWork === 2}
					onVote={() => handleVote(2)}
					onDetails={() =>
						handleDetails({
							image: cardImage2,
							title: "Card Title 2",
							participantName: "Participant 2",
							category: "Category 2",
							description:
								"Some quick example text to build on the card title and make up the bulk of the card's content.",
							stlFile: "path/to/stlFile2.stl",
						})
					}
				/>
				<WorkCard
					image={cardImage3}
					title="Card Title 3"
					participantName="Participant 3"
					category="Category 3"
					description="Some quick example text to build on the card title and make up the bulk of the card's content.
					Some quick example text to build on the card title and make up the bulk of the card's content.
					Some quick example text to build on the card title and make up the bulk of the card's content."
					voteButtonText="Vote"
					detailsButtonText="Details"
					isVoted={votedWork === 3}
					onVote={() => handleVote(3)}
					onDetails={() =>
						handleDetails({
							image: cardImage3,
							title: "Card Title 3",
							participantName: "Participant 3",
							category: "Category 3",
							description:
								"Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.",
							stlFile: "path/to/stlFile3.stl",
						})
					}
				/>
				<WorkCard
					image={cardImage4}
					title="Card Title 4"
					participantName="Participant 4"
					category="Category 4"
					description="Some quick example text to build on the card title and make up the bulk of the card's content."
					voteButtonText="Vote"
					detailsButtonText="Details"
					isVoted={votedWork === 4}
					onVote={() => handleVote(4)}
					onDetails={() =>
						handleDetails({
							image: cardImage4,
							title: "Card Title 4",
							participantName: "Participant 4",
							category: "Category 4",
							description:
								"Some quick example text to build on the card title and make up the bulk of the card's content.",
							stlFile: "path/to/stlFile4.stl",
						})
					}
				/>
				<WorkCard
					image={cardImage5}
					title="Card Title 5"
					participantName="Participant 5"
					category="Category 5"
					description="Some quick example text to build on the card title and make up the bulk of the card's content."
					voteButtonText="Vote"
					detailsButtonText="Details"
					isVoted={votedWork === 5}
					onVote={() => handleVote(5)}
					onDetails={() =>
						handleDetails({
							image: cardImage5,
							title: "Card Title 5",
							participantName: "Participant 5",
							category: "Category 5",
							description:
								"Some quick example text to build on the card title and make up the bulk of the card's content.",
							stlFile: "path/to/stlFile5.stl",
						})
					}
				/>
			</Container>

			<DetailsModal show={showModal} onHide={handleClose} work={currentWork} />
		</>
	);
};

export default WorksPage;
