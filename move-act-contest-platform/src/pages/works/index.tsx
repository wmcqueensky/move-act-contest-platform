import { Container, Col } from "react-bootstrap";
import { useState } from "react";
import "./styles.css";

type FlagType = "pl" | "gr" | "it" | "es" | "lt";

const Works = () => {
	const [activeFlag, setActiveFlag] = useState<FlagType | null>(null);

	const handleFlagClick = (flag: FlagType) => {
		setActiveFlag(flag);
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

			<Container>
				<h1>Karta</h1>
				<h1>Karta</h1>
				<h1>Karta</h1>
				<h1>Karta</h1>
				<h1>Karta</h1>
				<h1>Karta</h1>
				<h1>Karta</h1>
				<h1>Karta</h1>
			</Container>
		</>
	);
};

export default Works;
