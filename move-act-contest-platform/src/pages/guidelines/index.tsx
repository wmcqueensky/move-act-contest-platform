import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
	Container,
	Accordion,
	Button,
	Spinner,
	Table,
	Image,
} from "react-bootstrap";

import firstShareFolderImage from "./images/share-folder-image-1.png";
import secondShareFolderImage from "./images/share-folder-image-2.png";
import thirdShareFolderImage from "./images/share-folder-image-3.png";
import firstStlImage from "./images/how-to-stl-image-1.png";
import secondStlImage from "./images/how-to-stl-image-2.png";
import guidelinesPdf from "./docs/guidelines.pdf";
import rulesPdf from "./docs/rules.pdf";

import "./styles.css";

const AboutPage = () => {
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
		<div className="works-background text-center ">
			<Container fluid className="about-image text-center mb-5">
				<h1 className="welcome-header display-1">
					{t("guidelines.first-header")}
					<br />
					{t("guidelines.second-header")}
				</h1>
			</Container>

			<h2 className="about-introduction mb-5">
				{t("guidelines.first-subheader")}{" "}
				<span style={{ color: "var(--yellow-color)" }}>
					{t("guidelines.second-subheader")}
				</span>
				{t("guidelines.third-subheader")}
				<br />
				<span style={{ color: "var(--orange-color)" }}>
					{t("guidelines.fourth-subheader")}
				</span>
			</h2>

			<h6 className="accordion-main-header">{t("guidelines.third-header")}</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
				flush
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						{t("guidelines.first-accordion-header")}
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						{t("guidelines.first-accordion-first-text")}
						<span style={{ fontWeight: "bold" }}>
							{" "}
							{t("guidelines.first-accordion-second-text")}
						</span>{" "}
						{t("guidelines.first-accordion-third-text")}{" "}
						<span style={{ fontWeight: "bold" }}>
							{t("guidelines.first-accordion-fourth-text")}
						</span>{" "}
						{t("guidelines.first-accordion-fifth-text")}{" "}
						<span style={{ fontWeight: "bold" }}>
							{t("guidelines.first-accordion-sixth-text")}
						</span>
						{t("guidelines.first-accordion-seventh-text")}{" "}
						<span style={{ fontWeight: "bold" }}>
							{t("guidelines.first-accordion-eighth-text")}
						</span>{" "}
						{t("guidelines.first-accordion-nineth-text")}
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						{t("guidelines.second-accordion-header")}
					</Accordion.Header>
					<Accordion.Body>
						<p>
							{t("guidelines.second-accordion-first-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.second-accordion-second-text")}
							</span>{" "}
							{t("guidelines.second-accordion-third-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.second-accordion-fourth-text")}
							</span>{" "}
							{t("guidelines.second-accordion-fifth-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.second-accordion-sixth-text")}
							</span>{" "}
							{t("guidelines.second-accordion-third-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.second-accordion-seventh-text")}
							</span>
							.{" "}
						</p>

						<p>
							{t("guidelines.second-accordion-eighth-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.second-accordion-nineth-text")}
							</span>{" "}
							{t("guidelines.second-accordion-tenth-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.second-accordion-eleventh-text")}
							</span>{" "}
							{t("guidelines.second-accordion-twelveth-text")}
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header className="accordion-header">
						{t("guidelines.third-accordion-header")}
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						{t("guidelines.third-accordion-first-text")}
						<ul>
							<li style={{ fontWeight: "bold" }}>
								{t("guidelines.third-accordion-second-text")}
							</li>
							<li style={{ fontWeight: "bold" }}>
								{t("guidelines.third-accordion-third-text")}
							</li>
							<li style={{ fontWeight: "bold" }}>
								{t("guidelines.third-accordion-fourth-text")}
							</li>
							<li style={{ fontWeight: "bold" }}>
								{t("guidelines.third-accordion-fifth-text")}
							</li>
							<li style={{ fontWeight: "bold" }}>
								{t("guidelines.third-accordion-sixth-text")}
							</li>
							<li style={{ fontWeight: "bold" }}>
								{t("guidelines.third-accordion-seventh-text")}
							</li>
							<li style={{ fontWeight: "bold" }}>
								{t("guidelines.third-accordion-eighth-text")}
							</li>
							<li style={{ fontWeight: "bold" }}>
								{t("guidelines.third-accordion-nineth-text")}
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">{t("guidelines.fourth-header")}</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						{t("guidelines.fourth-accordion-header")}
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						{t("guidelines.fourth-accordion-first-text")}{" "}
						<span style={{ fontWeight: "bold" }}>
							{t("guidelines.fourth-accordion-second-text")}
						</span>{" "}
						{t("guidelines.fourth-accordion-third-text")}
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						{t("guidelines.fifth-accordion-header")}
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						{t("guidelines.fifth-accordion-first-text")}{" "}
						<span style={{ fontWeight: "bold" }}>
							{t("guidelines.fifth-accordion-second-text")}
						</span>{" "}
						{t("guidelines.fifth-accordion-third-text")}{" "}
						<span style={{ fontWeight: "bold" }}>
							{t("guidelines.fifth-accordion-fourth-text")}
						</span>{" "}
						{t("guidelines.fifth-accordion-fifth-text")}{" "}
						<span style={{ fontWeight: "bold" }}>
							{t("guidelines.fifth-accordion-sixth-text")}
						</span>
						.
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header className="accordion-header">
						{t("guidelines.sixth-accordion-header")}
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						{t("guidelines.sixth-accordion-first-text")}
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">{t("guidelines.fifth-header")}</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						{t("guidelines.seventh-accordion-header")}
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<ul>
							<li>
								<span style={{ fontWeight: "bold" }}>
									{t("guidelines.seventh-accordion-first-text")}
								</span>{" "}
								{t("guidelines.seventh-accordion-second-text")}{" "}
								<span style={{ fontWeight: "bold" }}>.jpg</span>{" "}
								{t("guidelines.seventh-accordion-third-text")}{" "}
								<span style={{ fontWeight: "bold" }}>.png</span>{" "}
								{t("guidelines.seventh-accordion-fourth-text")}{" "}
								<span style={{ fontWeight: "bold" }}>
									{t("guidelines.seventh-accordion-fifth-text")}
								</span>
								.
							</li>
							<li>
								{t("guidelines.seventh-accordion-sixth-text")}{" "}
								<span style={{ fontWeight: "bold" }}>
									{" "}
									{t("guidelines.seventh-accordion-seventh-text")}
								</span>{" "}
								{t("guidelines.seventh-accordion-eighth-text")}{" "}
								<span style={{ fontWeight: "bold" }}>
									{t("guidelines.seventh-accordion-nineth-text")}
								</span>
								.
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						{t("guidelines.eighth-accordion-header")}
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						{t("guidelines.eighth-accordion-first-text")}{" "}
						<span style={{ fontWeight: "bold" }}>
							{t("guidelines.eighth-accordion-second-text")}
						</span>{" "}
						{t("guidelines.eighth-accordion-third-text")}{" "}
						<span style={{ fontWeight: "bold" }}>
							{t("guidelines.eighth-accordion-fourth-text")}
						</span>{" "}
						{t("guidelines.eighth-accordion-fifth-text")}{" "}
						<span style={{ fontWeight: "bold" }}>
							{t("guidelines.eighth-accordion-sixth-text")}
						</span>{" "}
						{t("guidelines.eighth-accordion-seventh-text")}
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header className="accordion-header">
						{t("guidelines.nineth-accordion-header")}
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						{t("guidelines.nineth-accordion-first-text")}{" "}
						<span style={{ fontWeight: "bold" }}>
							{t("guidelines.nineth-accordion-second-text")}
						</span>{" "}
						{t("guidelines.nineth-accordion-third-text")}{" "}
						<span style={{ fontWeight: "bold" }}>
							{t("guidelines.nineth-accordion-fourth-text")}
						</span>
						,{" "}
						<span style={{ fontWeight: "bold" }}>
							{t("guidelines.nineth-accordion-fifth-text")}
						</span>{" "}
						{t("guidelines.nineth-accordion-sixth-text")}{" "}
						<span style={{ fontWeight: "bold" }}>
							{t("guidelines.nineth-accordion-seventh-text")}
						</span>{" "}
						{t("guidelines.nineth-accordion-eighth-text")}{" "}
						<span style={{ fontWeight: "bold" }}>
							{t("guidelines.nineth-accordion-nineth-text")}
						</span>{" "}
						{t("guidelines.nineth-accordion-tenth-text")}
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">{t("guidelines.sixth-header")}</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						{t("guidelines.tenth-accordion-header")}
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							{t("guidelines.tenth-accordion-first-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.tenth-accordion-second-text")}
							</span>{" "}
							{t("guidelines.tenth-accordion-third-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.tenth-accordion-fourth-text")}
							</span>{" "}
							<span style={{ fontWeight: "bold", color: "var(--bordo-color)" }}>
								[WHEN]?
							</span>
							.
						</p>

						<p
							style={{
								backgroundColor: "var(--bordo-color)",
								color: "var(--yellow-color)",
								padding: "10px",
								paddingLeft: "4px",
								borderRadius: "10px",
							}}
						>
							{t("guidelines.tenth-accordion-fifth-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.tenth-accordion-sixth-text")}
							</span>{" "}
							{t("guidelines.tenth-accordion-seventh-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.tenth-accordion-eighth-text")}
							</span>
							.
						</p>

						<p>
							{t("guidelines.tenth-accordion-nineth-text")}{" "}
							<span style={{ fontWeight: "bold", color: "var(--bordo-color)" }}>
								{t("guidelines.tenth-accordion-tenth-text")}
							</span>
							.
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						{t("guidelines.eleventh-accordion-header")}
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.eleventh-accordion-first-text")}
							</span>{" "}
							{t("guidelines.eleventh-accordion-second-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.eleventh-accordion-third-text")}
							</span>{" "}
							{t("guidelines.eleventh-accordion-fourth-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.eleventh-accordion-fifth-text")}
							</span>
							{t("guidelines.eleventh-accordion-sixth-text")}{" "}
							<span style={{ fontWeight: "bold", color: "var(--bordo-color)" }}>
								{t("guidelines.eleventh-accordion-seventh-text")}
							</span>
							.
						</p>

						<p>
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.eleventh-accordion-eighth-text")}
							</span>{" "}
							{t("guidelines.eleventh-accordion-nineth-text")}{" "}
							<span style={{ fontWeight: "bold", color: "var(--bordo-color)" }}>
								{t("guidelines.eleventh-accordion-tenth-text")}
							</span>{" "}
							{t("guidelines.eleventh-accordion-eleventh-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.eleventh-accordion-twelveth-text")}
							</span>
							.
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header className="accordion-header">
						{t("guidelines.twelveth-accordion-header")}
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<span style={{ fontWeight: "bold" }}>
							{t("guidelines.twelveth-accordion-first-text")}
						</span>{" "}
						{t("guidelines.twelveth-accordion-second-text")}{" "}
						<span style={{ fontWeight: "bold" }}>
							{t("guidelines.twelveth-accordion-third-text")}
						</span>{" "}
						{t("guidelines.twelveth-accordion-fourth-text")}{" "}
						<span style={{ fontWeight: "bold", color: "var(--bordo-color)" }}>
							{t("guidelines.twelveth-accordion-fifth-text")}
						</span>
						.
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="3">
					<Accordion.Header className="accordion-header">
						{t("guidelines.thirteenth-accordion-header")}
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							{t("guidelines.thirteenth-accordion-first-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.thirteenth-accordion-second-text")}{" "}
							</span>
							{t("guidelines.thirteenth-accordion-third-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.thirteenth-accordion-fourth-text")}
							</span>{" "}
							{t("guidelines.thirteenth-accordion-fifth-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.thirteenth-accordion-sixth-text")}
							</span>{" "}
							{t("guidelines.thirteenth-accordion-seventh-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.thirteenth-accordion-eighth-text")}{" "}
							</span>
							{t("guidelines.thirteenth-accordion-nineth-text")}{" "}
							<span style={{ fontWeight: "bold", color: "var(--bordo-color)" }}>
								[specified voting period]
							</span>
							.
						</p>

						<p>
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.thirteenth-accordion-tenth-text")}
							</span>{" "}
							{t("guidelines.thirteenth-accordion-eleventh-text")}
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="4">
					<Accordion.Header className="accordion-header">
						{t("guidelines.fourteenth-accordion-header")}
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.fourteenth-accordion-first-text")}
							</span>{" "}
							{t("guidelines.fourteenth-accordion-second-text")}
						</p>

						<p>
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.fourteenth-accordion-third-text")}
							</span>{" "}
							<span style={{ textDecoration: "underline" }}>
								{t("guidelines.fourteenth-accordion-fourth-text")}{" "}
							</span>{" "}
							{t("guidelines.fourteenth-accordion-fifth-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.fourteenth-accordion-sixth-text")}{" "}
							</span>
							{t("guidelines.fourteenth-accordion-seventh-text")}
						</p>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">
				{t("guidelines.seventh-header")}
			</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						{t("guidelines.fifteenth-accordion-header")}
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							{t("guidelines.fifteenth-accordion-first-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.fifteenth-accordion-second-text")}
							</span>{" "}
							{t("guidelines.fifteenth-accordion-third-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.fifteenth-accordion-fourth-text")}
							</span>{" "}
							{t("guidelines.fifteenth-accordion-fifth-text")}
						</p>

						<p
							style={{
								backgroundColor: "var(--bordo-color)",
								color: "var(--yellow-color)",
								padding: "10px",
								borderRadius: "10px",
								fontWeight: "bold",
							}}
							className="text-center"
						>
							moveandact2022@gmail.com
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						{t("guidelines.sixteenth-accordion-header")}
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>{t("guidelines.sixteenth-accordion-first-text")}</p>

						<p
							style={{
								backgroundColor: "var(--yellow-color)",
								padding: "10px",
								borderRadius: "10px",
								fontWeight: "bold",
							}}
							className="text-center"
						>
							{t("guidelines.sixteenth-accordion-second-text")}
						</p>

						<div>
							<h6 style={{ fontWeight: "bold" }}>
								{t("guidelines.sixteenth-accordion-third-text")}
							</h6>
							<ul>
								<li>{t("guidelines.sixteenth-accordion-fourth-text")}</li>
								<li>{t("guidelines.sixteenth-accordion-fifth-text")}</li>
								<li>{t("guidelines.sixteenth-accordion-sixth-text")}</li>
								<li>{t("guidelines.sixteenth-accordion-seventh-text")}</li>
								<li>{t("guidelines.sixteenth-accordion-eighth-text")}</li>
							</ul>
						</div>

						<div>
							<h6 style={{ fontWeight: "bold" }}>
								{t("guidelines.sixteenth-accordion-nineth-text")}
							</h6>
							{t("guidelines.sixteenth-accordion-tenth-text")} <br />
							{t("guidelines.sixteenth-accordion-eleventh-text")}
						</div>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header className="accordion-header">
						{t("guidelines.seventeenth-accordion-header")}
					</Accordion.Header>
					<Accordion.Body>
						<p>
							{t("guidelines.seventeenth-accordion-first-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.seventeenth-accordion-second-text")}{" "}
							</span>
							{t("guidelines.seventeenth-accordion-third-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.seventeenth-accordion-fourth-text")}
							</span>{" "}
							{t("guidelines.seventeenth-accordion-fifth-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.seventeenth-accordion-sixth-text")}
							</span>
							:
						</p>

						<p
							style={{
								backgroundColor: "var(--bordo-color)",
								color: "var(--yellow-color)",
								padding: "10px",
								borderRadius: "10px",
								fontWeight: "bold",
							}}
							className="text-center"
						>
							moveandact2022@gmail.com
						</p>

						<p>{t("guidelines.seventeenth-accordion-seventh-text")}</p>
						<p
							style={{
								backgroundColor: "var(--yellow-color)",
								padding: "10px",
								borderRadius: "10px",
								fontWeight: "bold",
							}}
							className="text-center"
						>
							{t("guidelines.seventeenth-accordion-eighth-text")}
						</p>

						<div className="mb-3">
							<h6 style={{ fontWeight: "bold" }}>
								{t("guidelines.seventeenth-accordion-nineth-text")}
							</h6>
							{t("guidelines.seventeenth-accordion-tenth-text")}
							<span style={{ fontWeight: "bold" }}>jpg</span>
							{t("guidelines.seventeenth-accordion-eleventh-text")}
							<span style={{ fontWeight: "bold" }}>png</span>" <br />
							{t("guidelines.seventeenth-accordion-twelveth-text")}
							<span style={{ fontWeight: "bold" }}>stl</span>"
						</div>

						<div>
							<h6 style={{ fontWeight: "bold" }}>
								{t("guidelines.seventeenth-accordion-thirteenth-text")}
							</h6>
							{t("guidelines.seventeenth-accordion-fourteenth-text")} <br />
							{t("guidelines.seventeenth-accordion-fifteenth-text")}
						</div>

						<p>{t("guidelines.seventeenth-accordion-sixteenth-text")}</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="3">
					<Accordion.Header className="accordion-header">
						{t("guidelines.eighteenth-accordion-header")}
					</Accordion.Header>
					<Accordion.Body>
						<p
							style={{
								backgroundColor: "var(--light-yellow-color)",
								padding: "10px",
							}}
						>
							{t("guidelines.eighteenth-accordion-first-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.eighteenth-accordion-second-text")}{" "}
							</span>
							{t("guidelines.eighteenth-accordion-third-text")}{" "}
							<span style={{ fontWeight: "bold" }}>
								{t("guidelines.eighteenth-accordion-fourth-text")}
							</span>{" "}
						</p>

						<ul>
							<li>
								{t("guidelines.eighteenth-accordion-fifth-text")}{" "}
								<span style={{ fontWeight: "bold" }}>.jpg/.png </span>
								{t("guidelines.eighteenth-accordion-sixth-text")}{" "}
								<span style={{ fontWeight: "bold" }}>.stl </span>
								{t("guidelines.eighteenth-accordion-seventh-text")}{" "}
								<span style={{ fontWeight: "bold" }}>
									{t("guidelines.eighteenth-accordion-eighth-text")}
								</span>
								.
							</li>
						</ul>

						<Image src={firstShareFolderImage} alt="Share Folder Image" />

						<ul>
							<li>
								{t("guidelines.eighteenth-accordion-nineth-text")}{" "}
								<span style={{ fontWeight: "bold" }}>
									{t("guidelines.eighteenth-accordion-tenth-text")}
								</span>{" "}
								{t("guidelines.eighteenth-accordion-eleventh-text")}
							</li>
						</ul>

						<ul>
							<li>
								{t("guidelines.eighteenth-accordion-twelveth-text")}{" "}
								<span style={{ fontWeight: "bold" }}>
									{t("guidelines.eighteenth-accordion-thirteenth-text")}
								</span>{" "}
								{t("guidelines.eighteenth-accordion-fourteenth-text")}{" "}
								<span style={{ color: "var(--bordo-color)" }}>
									moveandact2022@gmail.com
								</span>
							</li>
						</ul>

						<Image src={thirdShareFolderImage} alt="Share Folder Image" />
						<Image src={secondShareFolderImage} alt="Share Folder Image" />
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">Judging Procedure</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						Step 1: Initial Screening
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p
							style={{
								backgroundColor: "var(--bordo-color)",
								color: "var(--yellow-color)",
								padding: "10px",
								borderRadius: "10px",
								fontWeight: "bold",
							}}
						>
							All entries will undergo an initial screening to ensure tht they
							fulfill the basic entry and submission criteria.
						</p>

						<div>
							<h6 style={{ fontWeight: "bold" }}>
								Eligibility to participate:
							</h6>
							<div>
								<ul>
									<li>
										It will be checked whether the participant is between 18 and
										30 years old and is a national/resident in one of the
										participating countries (Poland, Italy, Spain, Greece,
										Lithuania).
									</li>
								</ul>
							</div>
						</div>

						<div>
							<h6 style={{ fontWeight: "bold" }}>Completeness of the entry:</h6>
							<div>
								<ul>
									<li>
										The image has a{" "}
										<span style={{ fontWeight: "bold" }}>title</span> and
										includes an{" "}
										<span style={{ fontWeight: "bold" }}>author bio</span> with
										a{" "}
										<span style={{ fontWeight: "bold" }}>
											description or story
										</span>
										of the image.
									</li>
									<li>
										The uploaded files are in the{" "}
										<span style={{ fontWeight: "bold" }}>
											required formats{" "}
										</span>
										(photo: <span style={{ fontWeight: "bold" }}>.jpg </span>
										or <span style={{ fontWeight: "bold" }}>.png </span>; 3D
										file: <span style={{ fontWeight: "bold" }}>.stl </span>
										).
									</li>
									<li>
										The image matches the selected{" "}
										<span style={{ textDecoration: "underline" }}>theme</span>.
									</li>
								</ul>
							</div>
						</div>

						<p>
							Only entries that pass this first check will make it to the next
							round.
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						Step 2: Selection of Finalists
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p
							style={{
								backgroundColor: "var(--bordo-color)",
								color: "var(--yellow-color)",
								padding: "10px",
								borderRadius: "10px",
								fontWeight: "bold",
							}}
						>
							Entries will be evaluated by a jury of seven professionals based
							on the following criteria:
						</p>

						<ul>
							<li>
								<span style={{ fontWeight: "bold" }}>Visual Impact</span> (30
								points): The striking and memorable overall effect of the image.
							</li>
							<li>
								<span style={{ fontWeight: "bold" }}>Creativity</span> (30
								points): Originality of composition, lighting and subject
								matter.
							</li>
							<li>
								<span style={{ fontWeight: "bold" }}>Storytelling Ability</span>{" "}
								(30 points): The ability of the photograph and written
								description to convey a story or message.
							</li>
							<li>
								<span style={{ fontWeight: "bold" }}>Technical Skills</span> (10
								points): Evaluation of technical aspects such as image
								composition, focus and use of light or editing.
							</li>
						</ul>

						<p>
							Each criterion is scored from{" "}
							<span style={{ fontWeight: "bold" }}>6 (Fair)</span> to{" "}
							<span style={{ fontWeight: "bold" }}>30 (Excellent)</span> or{" "}
							<span style={{ fontWeight: "bold" }}>2 (Fair)</span> to{" "}
							<span style={{ fontWeight: "bold" }}>10 (Excellent)</span>, with a
							maximum of{" "}
							<span style={{ fontWeight: "bold" }}>100 points possible</span>.
						</p>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">Key Dates and Phases</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						Contest Overview
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							To ensure a smooth participation process, it's important to know
							the important dates and phases of the Move&Act Photo-Voice
							Contest. Below are the most important dates that participants need
							to be aware of.
						</p>

						<Table bordered hover responsive="md" style={{ border: "none" }}>
							<thead>
								<tr>
									<th
										style={{
											backgroundColor: "black",
											color: "#fff",
											border: "none",
										}}
									>
										Phase
									</th>
									<th
										style={{
											backgroundColor: "black",
											color: "#fff",
											border: "none",
										}}
									>
										Action
									</th>
									<th
										style={{
											backgroundColor: "black",
											color: "#fff",
											border: "none",
										}}
									>
										Date
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Submission/ Orientation Phase</td>
									<td>
										Participants prepare their entries, access the contest
										guidelines and resources, and receive personalised support
										if needed.
									</td>
									<td style={{ fontWeight: "bold" }} className="text-center">
										4 October - 14 November{" "}
									</td>
								</tr>
								<tr>
									<td>Judging Period</td>
									<td>
										The jury reviews all entries and selects the finalists.
									</td>
									<td style={{ fontWeight: "bold" }} className="text-center">
										Until 20 November
									</td>
								</tr>
								<tr>
									<td>Announcement of the Finalists</td>
									<td>
										The 25 finalists are announced on the project's Social Media
										channels.
									</td>
									<td style={{ fontWeight: "bold" }} className="text-center">
										22 November
									</td>
								</tr>
								<tr>
									<td>Online Exhibition</td>
									<td>
										The works of the selected finalists are presented on the
										contest platform so that the public can view and vote for
										their favourite works.
									</td>
									<td style={{ fontWeight: "bold" }} className="text-center">
										Starting 22 November
									</td>
								</tr>
								<tr>
									<td>Voting Period</td>
									<td>
										Participants are encouraged to engage, share the news and
										motivate people to vote.
									</td>
									<td style={{ fontWeight: "bold" }} className="text-center">
										22 November 2024 - 3 January 2025
									</td>
								</tr>
								<tr>
									<td>National Winners: Announcement</td>
									<td>
										The 5 national winners are announced on the contest platform
										and Social Media channels. Each winner is also notified by
										email.
									</td>
									<td style={{ fontWeight: "bold" }} className="text-center">
										13 January
									</td>
								</tr>
								<tr>
									<td>Award Ceremony</td>
									<td>
										The project partners organise an event in each country and
										present the winners' printed works (lithophane format). The
										winners (are welcome to) attend the event(s) and share their
										experiences.
									</td>
									<td style={{ fontWeight: "bold" }} className="text-center">
										January - February
									</td>
								</tr>
							</tbody>
						</Table>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">STL File and Lithophane</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						Creating an .STL File
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							Go to{" "}
							<a
								href="https://3dp.rocks/lithophane/"
								target="_blank"
								rel="noopener noreferrer"
								className="forgot-password-link"
							>
								https://3dp.rocks/lithophane/
							</a>
						</p>
						<p>
							Once there, click on “
							<span style={{ fontWeight: "bold" }}>Images</span>” on the top
							centre of the page. A menu will appear giving you the opportunity
							to select a file.
						</p>
						<Image src={firstStlImage} alt="firstStlImage.png" />
						<p>
							Once you have chosen and uploaded your file, select the "
							<span style={{ fontWeight: "bold" }}>Flat</span>" option from the
							menu at the bottom.
						</p>

						<p>
							Click on “<span style={{ fontWeight: "bold" }}>Download</span>”
							and save the file in your computer. Once you have successfully
							saved the file, upload the file to a Google Drive folder.
						</p>

						<Image src={secondStlImage} alt="secondStlImage.png" />

						<p style={{ fontWeight: "bold" }}>
							Once the .stl file is uploading to Google Drive, do not forget to
							share the link with the Move&Act project team.{" "}
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						What is a Lithophane?
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							A lithophane is a unique work of art that transforms a flat,
							twodimensional image into a{" "}
							<span style={{ fontWeight: "bold" }}>
								three-dimensional image
							</span>
							. By changing the thickness of a translucent material, lithophanes
							really come into their own when backlit, revealing a detailed and
							impressive image when light falls on them. This art form, which{" "}
							<span style={{ fontWeight: "bold" }}>
								originated in the 19th century
							</span>
							, combines intricate craftsmanship with the science of light and
							shadow, turning each piece into a captivating visual story.
						</p>

						<p>
							As part of the{" "}
							<span style={{ fontWeight: "bold" }}>
								MOVE & ACT Photo-Voice Contest
							</span>
							, lithophanes are a powerful medium for young participants to
							express their creativity. This contest offers young people the
							opportunity to practice and improve their digital skills while
							developing artistic abilities.
						</p>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">Support</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						Guidelines
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							Step-by-step instructions to help them with technical aspects,
							along with storytelling techniques and other useful information.
						</p>

						<div>
							<a
								href={guidelinesPdf}
								target="_blank"
								rel="noopener noreferrer"
								style={{
									fontWeight: "bold",
									color: "var(--bordo-color)",
									textDecoration: "none",
								}}
							>
								Click to see guidelines
							</a>
						</div>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						Email Support
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							For{" "}
							<span style={{ fontWeight: "bold" }}>personalised guidance</span>,
							participants can contact the official project support team by
							email using the following format for the subject line:
						</p>

						<p
							style={{
								backgroundColor: "var(--yellow-color)",
								padding: "10px",
								borderRadius: "10px",
								fontWeight: "bold",
							}}
							className="text-center"
						>
							[country code]_[enquiry]_[Participant's Name and surname]
						</p>

						<div className="mb-3">
							<h6 style={{ fontWeight: "bold" }}>Example:</h6>
							GR_Query_Georgios Papadopoulos (Greece)
						</div>

						<h6 style={{ fontWeight: "bold" }}>Email: </h6>
						<p
							style={{
								backgroundColor: "var(--bordo-color)",
								color: "var(--yellow-color)",
								padding: "10px",
								borderRadius: "10px",
								fontWeight: "bold",
							}}
							className="text-center"
						>
							moveandact2022@gmail.com
						</p>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">Regulations & Ethics</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						Ethical Considerations
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						Participants must:
						<ul>
							<li>
								<span style={{ fontWeight: "bold" }}>
									respect intellectual property rights
								</span>
								,
							</li>
							<li>
								ensure that{" "}
								<span style={{ fontWeight: "bold" }}>
									consent has been obtained{" "}
								</span>
								from those depicted in the photos, and
							</li>
							<li>
								<span style={{ fontWeight: "bold" }}>follow guidelines</span> on{" "}
								<span style={{ fontWeight: "bold" }}>data protection</span> and
								sensitive issues (click here for detailed information).
							</li>
						</ul>
						<p
							style={{
								backgroundColor: "var(--yellow-color)",
								padding: "10px",
								borderRadius: "10px",
							}}
						>
							<span style={{ fontWeight: "bold" }}>Photo editing</span> and{" "}
							<span style={{ fontWeight: "bold" }}>AI-generated content</span>{" "}
							is <span style={{ fontWeight: "bold" }}>allowed up to 20%</span>{" "}
							and <span style={{ fontWeight: "bold" }}>must be disclosed</span>{" "}
							(e.g. "...this is an AI-generated image").
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						Acceptance of Terms and Conditions
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						By entering, participants{" "}
						<span style={{ fontWeight: "bold", textDecoration: "underline" }}>
							agree to the Contest Rules
						</span>
						, including the <span style={{ fontWeight: "bold" }}>privacy </span>
						and copyright policies, and{" "}
						<span style={{ fontWeight: "bold" }}>
							grant Move&Act the right to use the submitted images{" "}
						</span>{" "}
						for educational and promotional purposes.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">Contest Rules</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						Submission channel
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<ul>
							<li>
								Entries must be submitted via the official contest channel.
							</li>

							<li>
								Entries submitted via other channels will be disqualified.
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						Original Work
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<ul>
							<li>The photos must be original and taken by the participant.</li>
							<li>Third party material is not permitted.</li>
							<li>
								The photos must not infringe any intellectual property rights or
								data protection rights.
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header className="accordion-header">
						Photo Alterations
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<ul>
							<li>
								Photos may be altered by{" "}
								<span style={{ fontWeight: "bold" }}>up to 20%</span> (e.g. by
								adding or removing elements).
							</li>
							<li>
								Excessive alterations will result in disqualification and
								exclusion from future contests.
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="3">
					<Accordion.Header className="accordion-header">
						AI-generated Content
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						AI-generated content is{" "}
						<span style={{ fontWeight: "bold" }}>allowed up to 20%</span> of the
						total image. In order to maintain transparency, it must be clearly
						disclosed (e.g. “This is an AI-generated image”).
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="4">
					<Accordion.Header className="accordion-header">
						Judging
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<ul>
							<li>A jury of seven professionals will judge the entries.</li>
							<li>Their decisions are final.</li>
							<li>
								Move&Act reserves the right to disqualify entries that are
								inappropriate or violate the rules.
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="5">
					<Accordion.Header className="accordion-header">
						Data Protection and Consent
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<ul>
							<li>
								All content deemed{" "}
								<span style={{ fontWeight: "bold" }}>inappropriate</span> or
								invasive of privacy will be removed and not considered for the
								contest.
							</li>
							<li>
								For photos featuring{" "}
								<span style={{ fontWeight: "bold" }}>
									young people or minors
								</span>
								, age verification and{" "}
								<span style={{ fontWeight: "bold" }}>explicit consent</span> is
								required. If a submitted photo shows a recognisable minor, a
								declaration of consent{" "}
								<span style={{ fontWeight: "bold" }}>must be provided</span> to
								ensure that the rights of the minor(s)/young person(s) are
								protected.
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="6">
					<Accordion.Header className="accordion-header">
						Use of Photos
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<ul>
							<li>
								The submitted works remain the property of the Move&Act project.
							</li>
							<li>
								By entering, participants agree that their photos/files can be
								used by Move&Act for educational and promotional purposes.
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="7">
					<Accordion.Header className="accordion-header">
						Submission Deadline
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<ul>
							<li>No entries will be accepted after the closing date.</li>
							<li>
								The winners will be notified via the email address provided.
							</li>
							<li>
								If there is no response within three working days, a new winner
								will be selected and the previous winner will forfeit their
								prize.
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="8">
					<Accordion.Header className="accordion-header">
						Legal Restrictions
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<ul>
							<li>The contest is void where prohibited by law.</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="9">
					<Accordion.Header className="accordion-header">
						Intellectual Property Rights
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						The participants retain the copyright to their contributions.
						Move&Act reserves the right to use, reproduce and exhibit these
						works in future project outputs and reports, with appropriate
						attribution to the author. This use is in line with the Erasmus+
						objectives of sharing educational content and promoting cultural
						understanding.
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="10">
					<Accordion.Header className="accordion-header">
						Account Deletion
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						To delete your account on the platform, contact us at our email.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<Container className="rules-and-guidelines-buttons">
				<Button
					className="rules-button"
					onClick={() => window.open(rulesPdf, "_blank")}
				>
					Rules
				</Button>
				<Button
					className="guidelines-button"
					onClick={() => window.open(guidelinesPdf, "_blank")}
				>
					Guidelines
				</Button>
			</Container>
		</div>
	);
};

export default AboutPage;