import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Dropdown, Image } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { HOME_PATH, WORKS_PATH, GUIDELINES_PATH, CONTACT_PATH } from "../paths";
import { useState, useEffect } from "react";
import logo from "../../../public/logo.svg";
import "flag-icons/css/flag-icons.min.css";
import "./styles.css";
import { ACCOUNT_DETAILS_PATH } from "../../router/paths.ts";
import AuthModal, {
	LOGIN_TAB,
	REGISTER_TAB,
} from "../../components/auth/auth-modal.tsx";
import supabase from "../../config/supabase-client.ts";
import { useTranslation } from "react-i18next";

type LanguageCode = "en" | "pl" | "gr" | "it" | "es" | "lt";

const languageOptions: Record<LanguageCode, { flag: string; name: string }> = {
	en: { flag: "gb", name: "English" },
	pl: { flag: "pl", name: "Polski" },
	gr: { flag: "gr", name: "Ελληνικά" },
	it: { flag: "it", name: "Italiano" },
	es: { flag: "es", name: "Español" },
	lt: { flag: "lt", name: "Lietuvių" },
};

const MainNavbar = () => {
	const [t, i18n] = useTranslation("global");
	const [expanded, setExpanded] = useState(false);
	const [showAuthModal, setShowAuthModal] = useState(false);
	const [activeTab, setActiveTab] = useState<
		typeof LOGIN_TAB | typeof REGISTER_TAB
	>(LOGIN_TAB);

	const changeLanguage = (lang: LanguageCode) => {
		i18n.changeLanguage(lang);
	};

	const [user, setUser] = useState<{ email: string | undefined | null } | null>(
		null
	);

	const handleSelect = () => setExpanded(false);

	const handleAuthShow = (tab: typeof LOGIN_TAB | typeof REGISTER_TAB) => {
		setActiveTab(tab);
		setShowAuthModal(true);
	};

	const handleAuthClose = () => setShowAuthModal(false);

	const handleLogout = async () => {
		await supabase.auth.signOut();
		setUser(null);
		window.location.reload();
	};

	useEffect(() => {
		const checkUser = async () => {
			const { data, error } = await supabase.auth.getUser();

			if (error || !data.user) {
				setUser(null);
			} else {
				setUser({ email: data.user.email });
			}
		};

		checkUser();

		const { data: authListener } = supabase.auth.onAuthStateChange(
			(_event, session) => {
				if (session) {
					setUser({ email: session.user?.email });
				} else {
					setUser(null);
				}
			}
		);

		return () => {
			authListener?.subscription.unsubscribe();
		};
	}, []);

	const currentLanguage = i18n.language as LanguageCode;
	const { flag, name } =
		languageOptions[currentLanguage] || languageOptions["en"];

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
							to={GUIDELINES_PATH}
							className="nav-link mx-2"
							onClick={handleSelect}
						>
							Guidelines
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
								<span className={`fi fi-${flag}`}></span> {name}
							</Dropdown.Toggle>

							<Dropdown.Menu className="dropdown-menu">
								{Object.keys(languageOptions).map((lang) => (
									<Dropdown.Item
										key={lang}
										onClick={() => changeLanguage(lang as LanguageCode)}
										className="dropdown-item"
									>
										<span
											className={`fi fi-${
												languageOptions[lang as LanguageCode].flag
											}`}
										></span>{" "}
										{languageOptions[lang as LanguageCode].name}
									</Dropdown.Item>
								))}
							</Dropdown.Menu>
						</Dropdown>
					</Nav>

					<Dropdown onSelect={handleSelect}>
						<Dropdown.Toggle
							variant="none"
							className="dropdown-toggle-second d-flex align-items-center mx-3"
						>
							{user?.email ? user.email : <FaUser size={32} />}
						</Dropdown.Toggle>

						<Dropdown.Menu>
							{user ? (
								<>
									<Dropdown.Item
										as={Link}
										to={ACCOUNT_DETAILS_PATH}
										className="dropdown-item"
										onClick={handleSelect}
									>
										Account details
									</Dropdown.Item>
									<Dropdown.Item
										onClick={handleLogout}
										className="dropdown-item"
									>
										Log out
									</Dropdown.Item>
								</>
							) : (
								<>
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
								</>
							)}
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
