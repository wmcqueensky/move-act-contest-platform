import { Container, Col } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkCard from "../../components/work-card";
import cardImage1 from "./images/card-image-1.png";
import cardImage2 from "./images/card-image-2.png";
import cardImage3 from "./images/card-image-3.png";
import cardImage4 from "./images/card-image-4.png";
import cardImage5 from "./images/card-image-5.png";
import { DETAILS_PATH } from "../../router/paths.ts";
import "./styles.css";

type FlagType = "pl" | "gr" | "it" | "es" | "lt";

const WorksPage = () => {
	const [activeFlag, setActiveFlag] = useState<FlagType | null>(null);
	const [votedWork, setVotedWork] = useState<number | null>(null);
	const navigate = useNavigate();

	const handleFlagClick = (flag: FlagType) => {
		setActiveFlag(flag);
	};

	const handleVote = (workIndex: number) => {
		setVotedWork(workIndex);
	};

	const handleDetails = () => {
		navigate(DETAILS_PATH);
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
					description="Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build and make up the bulk of the card's content."
					voteButtonText="Vote"
					detailsButtonText="Details"
					isVoted={votedWork === 1}
					onVote={() => handleVote(1)}
					onDetails={handleDetails}
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
					onDetails={handleDetails}
				/>
				<WorkCard
					image={cardImage3}
					title="Card Title 3"
					participantName="Participant 3"
					category="Category 3"
					description="Some quick example text to build on the card title and make up the bulk of the card's content."
					voteButtonText="Vote"
					detailsButtonText="Details"
					isVoted={votedWork === 3}
					onVote={() => handleVote(3)}
					onDetails={handleDetails}
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
					onDetails={handleDetails}
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
					onDetails={handleDetails}
				/>
			</Container>
		</>
	);
};

export default WorksPage;
