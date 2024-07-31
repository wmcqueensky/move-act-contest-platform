import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Dropdown, Image } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { HOME_PATH, WORKS_PATH, ABOUT_PATH, CONTACT_PATH } from "../paths";
import { useState } from "react";
import logo from "../images/logo.svg";
import "flag-icons/css/flag-icons.min.css";
import "./styles.css";
import AuthModal, {
	LOGIN_TAB,
	REGISTER_TAB,
} from "../../components/auth/auth-modal.tsx";

const MainNavbar: React.FC = () => {
	const [expanded, setExpanded] = useState(false);
	const [showAuthModal, setShowAuthModal] = useState(false);
	const [activeTab, setActiveTab] = useState<
		typeof LOGIN_TAB | typeof REGISTER_TAB
	>(LOGIN_TAB);

	const handleSelect = () => setExpanded(false);

	const handleAuthShow = (tab: typeof LOGIN_TAB | typeof REGISTER_TAB) => {
		setActiveTab(tab);
		setShowAuthModal(true);
	};

	const handleAuthClose = () => setShowAuthModal(false);

	return (
		<>
			<Navbar fixed="top" expand="md" className="navbar" expanded={expanded}>
				<Link to={HOME_PATH} onClick={handleSelect}>
					<Image src={logo} alt="Logo" fluid className="logo" />
				</Link>

				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					className="menu-icon"
					onClick={() => setExpanded(!expanded)}
				>
					<FiMenu color="#840000" />
				</Navbar.Toggle>

				<Navbar.Collapse id="responsive-navbar-nav" className="custom-collapse">
					<Nav className="mx-auto">
						<Nav.Link
							as={NavLink}
							to={HOME_PATH}
							className="nav-link mx-2"
							onClick={handleSelect}
						>
							Home
						</Nav.Link>

						<Nav.Link
							as={NavLink}
							to={WORKS_PATH}
							className="nav-link mx-2"
							onClick={handleSelect}
						>
							Works
						</Nav.Link>

						<Nav.Link
							as={NavLink}
							to={ABOUT_PATH}
							className="nav-link mx-2"
							onClick={handleSelect}
						>
							About
						</Nav.Link>

						<Nav.Link
							as={NavLink}
							to={CONTACT_PATH}
							className="nav-link mx-2"
							onClick={handleSelect}
						>
							Contact
						</Nav.Link>

						<Dropdown onSelect={handleSelect}>
							<Dropdown.Toggle
								variant="none"
								className="nav-link mx-2 dropdown-toggle"
							>
								<span className="fi fi-gb"></span> English
							</Dropdown.Toggle>

							<Dropdown.Menu className="dropdown-menu">
								<Dropdown.Item href="#/action-1" className="dropdown-item">
									<span className="fi fi-gb"></span> English
								</Dropdown.Item>

								<Dropdown.Item href="#/action-2" className="dropdown-item">
									<span className="fi fi-pl"></span> Polski
								</Dropdown.Item>

								<Dropdown.Item href="#/action-3" className="dropdown-item">
									<span className="fi fi-gr"></span> Ελληνικά
								</Dropdown.Item>

								<Dropdown.Item href="#/action-4" className="dropdown-item">
									<span className="fi fi-it"></span> Italiano
								</Dropdown.Item>

								<Dropdown.Item href="#/action-5" className="dropdown-item">
									<span className="fi fi-es"></span> Español
								</Dropdown.Item>

								<Dropdown.Item href="#/action-6" className="dropdown-item">
									<span className="fi fi-lt"></span> Lietuvių
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Nav>

					<Dropdown onSelect={handleSelect}>
						<Dropdown.Toggle
							variant="none"
							className="dropdown-toggle-second d-flex align-items-center mx-3"
						>
							<FaUser size={32} />
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item
								onClick={() => handleAuthShow(LOGIN_TAB)}
								className="dropdown-item"
							>
								Login
							</Dropdown.Item>

							<Dropdown.Item
								onClick={() => handleAuthShow(REGISTER_TAB)}
								className="dropdown-item"
							>
								Register
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Navbar.Collapse>
			</Navbar>

			<AuthModal
				show={showAuthModal}
				handleClose={handleAuthClose}
				activeTab={activeTab}
			/>
		</>
	);
};

export default MainNavbar;
