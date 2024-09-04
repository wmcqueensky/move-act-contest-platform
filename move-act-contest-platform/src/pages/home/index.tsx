import { useState, useEffect } from "react";
import { Container, Button, Col, Spinner } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { WORKS_PATH, ABOUT_PATH } from "../../router/paths.ts";
import "./styles.css";

const HomePage = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
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
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</div>
		);
	}

	return (
		<>
			<Container fluid className="home-image text-center mb-5">
				<Col className="text-center">
					<h1 className="welcome-header display-1">
						PHOTOVOICE CONTEST <br /> AND EXHIBITION PLATFORM
					</h1>

					<h6 className="project-number">
						Project number:&nbsp;
						<span style={{ fontWeight: "bold" }}>
							2022-1-PL01-KA220-YOU-000086569
						</span>
					</h6>
				</Col>
			</Container>

			<Container className="contest-duration text-center mb-5">
				<h5>Contest duration</h5>
				<p>01.09.2024 – 31.12.2024</p>
			</Container>

			<Container className="text-center mb-5">
				<h3 className="platform-info-header">About The Platform</h3>

				<p className="platform-info-text">
					For three months, the MOVE & ACT consortium will be conducting the
					Photovoice Contest Platform. This innovative project encourages young
					people to express their creativity and voice through digital
					photography. The main purpose of this platform is to empower youth,
					increase their employability, help them form a European identity, and
					engage with local, national, and European communities.
				</p>
			</Container>

			<Container className="button-group mb-5 d-flex flex-column flex-md-row">
				<Button
					className="custom-button mx-3 my-2 my-md-0"
					onClick={goToProjectWebsite}
				>
					Go to project website
					<IoIosArrowForward />
				</Button>

				<Button
					className="custom-button mx-3 my-2 my-md-0"
					onClick={() => navigate(WORKS_PATH)}
				>
					Go to voting page
					<IoIosArrowForward />
				</Button>

				<Button
					className="custom-button mx-3 my-2 my-md-0"
					onClick={() => navigate(ABOUT_PATH)}
				>
					Get more info
					<IoIosArrowForward />
				</Button>
			</Container>
		</>
	);
};

export default HomePage;
