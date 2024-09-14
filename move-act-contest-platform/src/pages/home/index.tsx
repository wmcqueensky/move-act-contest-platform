import { useState, useEffect } from "react";
import { Container, Button, Col, Spinner } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { WORKS_PATH, GUIDELINES_PATH } from "../../router/paths.ts";
import { useTranslation } from "react-i18next";

import "./styles.css";

const HomePage = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [t] = useTranslation("global");
	const goToProjectWebsite = () => {
		window.open(
			"http://moveandact-project.com/",
			"_blank",
			"noopener noreferrer"
		);
	};

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
		<>
			<Container fluid className="home-image text-center mb-5">
				<Col className="text-center">
					<h1 className="welcome-header display-1">
						{t("home.first-header")}
						<br />
						{t("home.second-header")}
					</h1>

					<h6 className="project-number">
						{t("home.first-subheader")}&nbsp;
						<span style={{ fontWeight: "bold" }}>
							{t("home.second-subheader")}
						</span>
					</h6>
				</Col>
			</Container>

			<Container className="contest-duration text-center mb-5">
				<h5>{t("home.third-header")}</h5>
				<p>{t("home.third-subheader")}</p>
			</Container>

			<Container className="text-center mb-5">
				<h3 className="platform-info-header">{t("home.fourth-header")}</h3>

				<p className="platform-info-text">{t("home.first-text")}</p>
			</Container>

			<Container className="button-group mb-5 d-flex flex-column flex-md-row">
				<Button
					className="custom-button mx-3 my-2 my-md-0"
					onClick={goToProjectWebsite}
				>
					{t("home.first-button-text")}
					<IoIosArrowForward />
				</Button>

				<Button
					className="custom-button mx-3 my-2 my-md-0"
					onClick={() => navigate(WORKS_PATH)}
				>
					{t("home.second-button-text")}
					<IoIosArrowForward />
				</Button>

				<Button
					className="custom-button mx-3 my-2 my-md-0"
					onClick={() => navigate(GUIDELINES_PATH)}
				>
					{t("home.third-button-text")}
					<IoIosArrowForward />
				</Button>
			</Container>
		</>
	);
};

export default HomePage;
