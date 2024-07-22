import { Container, Image } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./styles.css";
import EUImage from "./images/eu-image.png";
import CCImage from "./images/Cc-by-nc-sa-image.png";
import FAQImage from "./images/faq-image.png";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<Container fluid className="eu-container text-center">
				<Image src={EUImage} className="eu-image" />
				<p className="eu-info">
					Funded by the European Union. Views and opinions expressed are however
					those of the author(s) only and do not necessarily reflect those of
					the European Union or the European Education and Culture Executive
					Agency <br />
					(EACEA). Neither the European Union nor EACEA can be held responsible
					for them.
				</p>
			</Container>

			<Container fluid className="faq-container text-center">
				<div className="icon-container">
					<p className="copyright-text">© {currentYear} Move & Act</p>
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social-icon"
					>
						<FaFacebook />
					</a>
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social-icon"
					>
						<FaInstagram />
					</a>
					<a
						href="https://youtube.com"
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
