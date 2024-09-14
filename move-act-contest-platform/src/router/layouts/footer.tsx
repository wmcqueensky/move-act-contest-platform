import { Container, Image } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import EUImage from "./images/eu-image.png";
import CCImage from "./images/Cc-by-nc-sa-image.png";
import FAQImage from "./images/faq-image.png";

import "./styles.css";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const [t] = useTranslation("global");

	return (
		<>
			<Container fluid className="eu-container text-center">
				<Image src={EUImage} className="eu-image" />
				<p className="eu-info">
					{t("footer.first-text")}
					<br />
					{t("footer.second-text")}
				</p>
			</Container>

			<Container fluid className="faq-container text-center">
				<div className="icon-container">
					<p className="copyright-text">© {currentYear} Move & Act</p>
					<a
						href="https://www.facebook.com/MoveAndActProject/"
						target="_blank"
						rel="noopener noreferrer"
						className="social-icon"
					>
						<FaFacebook />
					</a>
					<a
						href="https://www.instagram.com/moveandact_project/"
						target="_blank"
						rel="noopener noreferrer"
						className="social-icon"
					>
						<FaInstagram />
					</a>
					<a
						href="https://www.youtube.com/@moveactproject"
						target="_blank"
						rel="noopener noreferrer"
						className="social-icon"
					>
						<FaYoutube />
					</a>
				</div>

				<Image src={FAQImage} className="faq-image" />
				<Image src={CCImage} className="cc-image" />
			</Container>
		</>
	);
};

export default Footer;
