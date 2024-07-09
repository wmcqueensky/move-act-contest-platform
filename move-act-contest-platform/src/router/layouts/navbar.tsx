import { Link, NavLink } from "react-router-dom";
import { HOME_PATH, PROJECTS_PATH, INFO_PATH, CONTACT_PATH } from "../paths";
import logo from "../images/logo.svg";
import "./styles.css";

// const Drawer = ({ isOpen, onClose }) => (
// 	<div className={`drawer ${isOpen ? "open" : ""}`}>
// 		<div className="d-flex flex-column p-3">
// 			<NavLink to={HOME_PATH} className="nav-link" onClick={onClose}>
// 				Strona Główna
// 			</NavLink>
// 			<NavLink to={PROJECTS_PATH} className="nav-link" onClick={onClose}>
// 				Statystyki
// 			</NavLink>
// 			<NavLink to={INFO_PATH} className="nav-link" onClick={onClose}>
// 				Zapisy
// 			</NavLink>
// 			<NavLink to={CONTACT_PATH} className="nav-link" onClick={onClose}>
// 				Kontakt
// 			</NavLink>
// 		</div>
// 	</div>
// );

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="container-fluid d-flex justify-content-between align-items-center">
				<Link to={HOME_PATH}>
					<img
						src={logo}
						alt="Logo"
						style={{ maxWidth: "120px", maxHeight: "88px", marginLeft: "12px" }}
					/>
				</Link>
				<div className="d-none d-md-flex align-items-center">
					<NavLink to={HOME_PATH}>Home</NavLink>
					<NavLink to={PROJECTS_PATH}>Projects</NavLink>
					<NavLink to={INFO_PATH}>Info</NavLink>
					<NavLink to={CONTACT_PATH}>Contact</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
