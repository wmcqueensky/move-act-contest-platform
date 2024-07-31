import { Modal, Button, Form, ButtonGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./styles.css";

export const LOGIN_TAB = "login";
export const REGISTER_TAB = "register";

interface AuthModalProps {
	show: boolean;
	handleClose: () => void;
	activeTab: typeof LOGIN_TAB | typeof REGISTER_TAB;
}

const AuthModal: React.FC<AuthModalProps> = ({
	show,
	handleClose,
	activeTab: parentActiveTab,
}) => {
	const [activeTab, setActiveTab] = useState<
		typeof LOGIN_TAB | typeof REGISTER_TAB
	>(parentActiveTab);

	useEffect(() => {
		if (show) {
			setActiveTab(parentActiveTab);
		}
	}, [show, parentActiveTab]);

	const handleTabSwitch = (tab: typeof LOGIN_TAB | typeof REGISTER_TAB) => {
		setActiveTab(tab);
	};

	return (
		<Modal
			show={show}
			onHide={handleClose}
			dialogClassName="auth-modal-dialog"
			centered
		>
			<Modal.Body className="auth-modal-content">
				<ButtonGroup className="w-100 mb-4">
					<Button
						className={`w-50 ${
							activeTab === LOGIN_TAB ? "auth-button" : "details-button"
						}`}
						onClick={() => handleTabSwitch(LOGIN_TAB)}
					>
						Login
					</Button>
					<Button
						className={`w-50 ${
							activeTab === REGISTER_TAB ? "auth-button" : "details-button"
						}`}
						onClick={() => handleTabSwitch(REGISTER_TAB)}
					>
						Register
					</Button>
				</ButtonGroup>
				{activeTab === LOGIN_TAB ? (
					<Form className="custom-form">
						<Form.Control
							type="email"
							placeholder="Email"
							className="mb-4 form-control"
						/>
						<Form.Control
							type="password"
							placeholder="Password"
							className="mb-4 form-control"
						/>
						<div className="text-center mb-4">
							<a href="#" className="forgot-password-link text-center">
								Forgot Password?
							</a>
						</div>
						<Button className="vote-button w-100" type="submit">
							Login
						</Button>
					</Form>
				) : (
					<Form>
						<Form.Group className="d-flex mb-4">
							<Form.Control
								type="text"
								placeholder="Name"
								className="me-2 form-control"
							/>
							<Form.Control
								type="text"
								placeholder="Surname"
								className="form-control"
							/>
						</Form.Group>
						<Form.Control
							type="email"
							placeholder="Email"
							className="mb-4 form-control"
						/>
						<Form.Control
							type="password"
							placeholder="Password"
							className="mb-4 form-control"
						/>
						<Form.Control
							type="password"
							placeholder="Confirm Password"
							className="mb-4 form-control"
						/>
						<Form.Group className="mb-4">
							<Form.Check
								type="checkbox"
								label="I accept the Terms of Service and Privacy Policy"
								className="terms-checkbox"
							/>
						</Form.Group>
						<Button className="vote-button w-100" type="submit">
							Register
						</Button>
					</Form>
				)}
			</Modal.Body>
		</Modal>
	);
};

export default AuthModal;
