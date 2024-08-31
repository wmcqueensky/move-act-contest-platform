import { Container, Button, Image } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import rulesPdf from "../about/docs/rules.pdf";
import guidelinesPdf from "../about/docs/guidelines.pdf";
import platformLogo from "./images/e-platform-logo.png";
import projectLogo from "./images/project-logo.png";
import "./styles.css";

const ContactPage = () => {
	return (
		<div className="works-background text-center">
			<Container fluid className="contact-image text-center mb-7">
				<h1 className="welcome-header display-1">FEEL FREE TO CONTACT US</h1>
			</Container>

			<h2 className="mb-3" style={{ color: "var(--bordo-color)" }}>
				If you have any questions contact us at this email address:
			</h2>

			<h1
				style={{
					backgroundColor: "var(--bordo-color)",
					color: "var(--yellow-color)",
					padding: "10px",
					borderRadius: "10px",
					fontWeight: "bold",
					maxWidth: "1000px",
					margin: "0 auto 7rem",
					overflowWrap: "break-word",
					wordWrap: "break-word",
				}}
			>
				moveandact2022@gmail.com
			</h1>

			<h3 className="mb-3" style={{ color: "var(--bordo-color)" }}>
				Please place the titles of the queries in the following format:
			</h3>

			<h4
				style={{
					backgroundColor: "var(--yellow-color)",
					padding: "10px",
					borderRadius: "10px",
					fontWeight: "bold",
					maxWidth: "1000px",
					margin: "0 auto 1.5rem",
				}}
			>
				[country code]_[enquiry]_[Participant's Name and surname]
			</h4>

			<h3 className="mb-3" style={{ color: "var(--bordo-color)" }}>
				Example:
			</h3>
			<h3 className="mb-7" style={{ color: "var(--orange-color)" }}>
				GR_Query_Georgios Papadopoulos (Greece)
			</h3>

			<h3 className="mb-3" style={{ color: "var(--bordo-color)" }}>
				Check also our social media and other information channels!
			</h3>
			<div className="social-media-container mb-7">
				<a
					href="https://www.facebook.com/MoveAndActProject/"
					target="_blank"
					rel="noopener noreferrer"
					className="facebook-icon"
				>
					<FaFacebook />
				</a>
				<a
					href="https://www.instagram.com/moveandact_project/"
					target="_blank"
					rel="noopener noreferrer"
					className="instagram-icon"
				>
					<FaInstagram />
				</a>
				<a
					href="https://www.youtube.com/@moveactproject"
					target="_blank"
					rel="noopener noreferrer"
					className="youtube-icon"
				>
					<FaYoutube />
				</a>
				<a
					href="https://moveandacteplatform.eu/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image src={platformLogo} />
				</a>
				<a
					href="http://moveandact-project.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image src={projectLogo} />
				</a>
			</div>

			<h3 className="mb-3" style={{ color: "var(--bordo-color)" }}>
				For more information about contest visit{" "}
				<span style={{ color: "var(--orange-color)" }}>About </span>section on
				the present platform.
			</h3>

			<Container className="rules-and-guidelines-buttons">
				<Button
					className="rules-button"
					onClick={() => window.open(rulesPdf, "_blank")}
				>
					See all rules and regulations
				</Button>
				<Button
					className="guidelines-button"
					onClick={() => window.open(guidelinesPdf, "_blank")}
				>
					See guidelines for participating
				</Button>
			</Container>
		</div>
	);
};

export default ContactPage;
