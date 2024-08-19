import { Container, Button } from "react-bootstrap";
import rulesPdf from "/Users/goodylabs/Desktop/move-act-contest-platform/move-act-contest-platform/src/pages/about/docs/rules.pdf";
import "./styles.css";

const Contact = () => {
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
					margin: "0 auto 7rem",
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
				For more information about contest visit{" "}
				<span style={{ color: "var(--orange-color)" }}>About </span>section on
				the present platform.
			</h3>
			<Button
				className="rules-contact-button"
				style={{ margin: "0 auto" }}
				onClick={() => window.open(rulesPdf, "_blank")}
			>
				See all rules and regulations
			</Button>
		</div>
	);
};

export default Contact;
