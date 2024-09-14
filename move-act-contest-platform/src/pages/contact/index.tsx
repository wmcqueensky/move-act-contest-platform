import { Container, Button, Image, Spinner } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import rulesPdf from "../about/docs/rules.pdf";
import guidelinesPdf from "../about/docs/guidelines.pdf";
import platformLogo from "./images/e-platform-logo.png";
import projectLogo from "./images/project-logo.png";

import "./styles.css";

const ContactPage = () => {
	const [loading, setLoading] = useState(true);
	const [t] = useTranslation("global");

	useEffect(() => {
		const images = document.querySelectorAll("img");
		let loadedCount = 0;

		const onLoad = () => {
			loadedCount += 1;
			if (loadedCount === images.length) {
				setLoading(false);
			}
		};

		images.forEach((image) => {
			if (image.complete) {
				onLoad();
			} else {
				image.addEventListener("load", onLoad);
			}
		});

		return () => {
			images.forEach((image) => {
				image.removeEventListener("load", onLoad);
			});
		};
	}, []);

	if (loading) {
		return (
			<div className="d-flex justify-content-center align-items-center vh-100">
				<Spinner
					style={{ color: "var(--bordo-color)" }}
					animation="border"
					role="status"
				>
					<span className="visually-hidden">{t("misc.loading-text")}</span>
				</Spinner>
			</div>
		);
	}

	return (
		<div className="works-background text-center">
			<Container fluid className="contact-image text-center mb-7">
				<h1 className="welcome-header display-1">
					{t("contact.first-header")}
				</h1>
			</Container>

			<h2 className="mb-3" style={{ color: "var(--bordo-color)" }}>
				{t("contact.first-text")}
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
				{t("contact.second-text")}
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
				{t("contact.third-text")}
			</h4>

			<h3 className="mb-3" style={{ color: "var(--bordo-color)" }}>
				{t("contact.fourth-text")}
			</h3>
			<h3 className="mb-7" style={{ color: "var(--orange-color)" }}>
				GR_Query_Georgios Papadopoulos (Greece)
			</h3>

			<h3 className="mb-3" style={{ color: "var(--bordo-color)" }}>
				{t("contact.fifth-text")}
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
				{t("contact.sixth-text")}{" "}
				<span style={{ color: "var(--orange-color)" }}>
					{" "}
					{t("contact.seventh-text")}{" "}
				</span>
				{t("contact.eighth-text")}
			</h3>

			<Container className="rules-and-guidelines-buttons">
				<Button
					className="rules-button"
					onClick={() => window.open(rulesPdf, "_blank")}
				>
					{t("contact.first-button-text")}
				</Button>
				<Button
					className="guidelines-button"
					onClick={() => window.open(guidelinesPdf, "_blank")}
				>
					{t("contact.second-button-text")}
				</Button>
			</Container>
		</div>
	);
};

export default ContactPage;
