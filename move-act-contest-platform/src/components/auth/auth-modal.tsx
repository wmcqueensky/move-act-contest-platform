import { useState, useEffect } from "react";
import supabase from "../../config/supabase-client.ts";
import AuthToast from "./auth-toast.tsx";
import "./styles.css";
import { Modal, Button, Form, ButtonGroup } from "react-bootstrap";

export const LOGIN_TAB = "login";
export const REGISTER_TAB = "register";
export const RESET_PASSWORD_TAB = "reset-password";

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
		typeof LOGIN_TAB | typeof REGISTER_TAB | typeof RESET_PASSWORD_TAB
	>(parentActiveTab);

	const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
	const [forgotPasswordToast, setForgotPasswordToast] = useState<{
		show: boolean;
		message: string;
		type: "success" | "error";
	}>({ show: false, message: "", type: "success" });

	useEffect(() => {
		if (show) {
			setActiveTab(parentActiveTab);
		}
	}, [show, parentActiveTab]);

	const handleTabSwitch = (
		tab: typeof LOGIN_TAB | typeof REGISTER_TAB | typeof RESET_PASSWORD_TAB
	) => {
		setActiveTab(tab);
	};

	const [formData, setFormData] = useState({
		name: "",
		surname: "",
		email: "",
		confirmEmail: "",
		password: "",
		confirmPassword: "",
	});

	const [error, setError] = useState<string | null>(null);
	const [toast, setToast] = useState<{
		show: boolean;
		message: string;
		type: "success" | "error";
	}>({ show: false, message: "", type: "success" });

	function handleChange(
		event: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) {
		const value = event.target.value;
		setFormData({ ...formData, [event.target.name]: value });
	}

	async function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError(null);

		if (activeTab === REGISTER_TAB) {
			if (formData.email !== formData.confirmEmail) {
				setToast({ show: true, message: "Emails do not match", type: "error" });
				return;
			}

			if (formData.password !== formData.confirmPassword) {
				setToast({
					show: true,
					message: "Passwords do not match",
					type: "error",
				});
				return;
			}
		}

		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: formData.email,
				password: formData.password,
			});
			if (error) {
				setToast({ show: true, message: error.message, type: "error" });
			} else {
				console.log("Login successful, data:", data);
				setToast({
					show: true,
					message: "Login successful!",
					type: "success",
				});
				handleClose();
				window.location.reload();
			}
		} catch (error) {
			const errorMessage = (error as Error).message;
			setToast({ show: true, message: errorMessage, type: "error" });
		}
	}

	async function handleSignUp(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError(null);

		if (formData.email !== formData.confirmEmail) {
			setToast({ show: true, message: "Emails do not match", type: "error" });
			return;
		}

		if (formData.password !== formData.confirmPassword) {
			setToast({
				show: true,
				message: "Passwords do not match",
				type: "error",
			});
			return;
		}

		try {
			const { data, error } = await supabase.auth.signUp({
				email: formData.email,
				password: formData.password,
				options: {
					data: {
						name: formData.name,
						surname: formData.surname,
					},
				},
			});
			if (error) {
				setToast({ show: true, message: error.message, type: "error" });
			} else {
				setToast({
					show: true,
					message: "Sign up successful!",
					type: "success",
				});
				handleClose();
			}
		} catch (error) {
			const errorMessage = (error as Error).message;
			setToast({ show: true, message: errorMessage, type: "error" });
		}
	}

	// Forgot Password
	async function handleForgotPassword(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		try {
			const { error } = await supabase.auth.resetPasswordForEmail(
				forgotPasswordEmail,
				{
					redirectTo: window.location.origin + "/reset-password", // Replace with your redirect URL
				}
			);

			if (error) {
				setForgotPasswordToast({
					show: true,
					message: error.message,
					type: "error",
				});
			} else {
				setForgotPasswordToast({
					show: true,
					message: "Password reset link sent!",
					type: "success",
				});
				handleTabSwitch(LOGIN_TAB);
			}
		} catch (error) {
			const errorMessage = (error as Error).message;
			setForgotPasswordToast({
				show: true,
				message: errorMessage,
				type: "error",
			});
		}
	}

	return (
		<>
			<AuthToast
				show={toast.show}
				message={toast.message}
				type={toast.type}
				onClose={() => setToast({ ...toast, show: false })}
			/>

			<AuthToast
				show={forgotPasswordToast.show}
				message={forgotPasswordToast.message}
				type={forgotPasswordToast.type}
				onClose={() =>
					setForgotPasswordToast({ ...forgotPasswordToast, show: false })
				}
			/>

			<Modal
				show={show}
				onHide={handleClose}
				dialogClassName="auth-modal-dialog"
				centered
			>
				<Modal.Body className="auth-modal-content">
					{activeTab !== RESET_PASSWORD_TAB && (
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
					)}
					{error && <div className="alert alert-danger">{error}</div>}
					{activeTab === LOGIN_TAB && (
						<Form onSubmit={handleSignIn}>
							<Form.Control
								type="email"
								placeholder="Email"
								className="mb-4 form-control"
								name="email"
								onChange={handleChange}
								required
							/>
							<Form.Control
								type="password"
								placeholder="Password"
								className="mb-4 form-control"
								name="password"
								onChange={handleChange}
								required
							/>
							<div className="text-center mb-4">
								<a
									className="forgot-password-link text-center"
									onClick={() => handleTabSwitch(RESET_PASSWORD_TAB)}
								>
									Forgot Password?
								</a>
							</div>
							<Button className="vote-button w-100" type="submit">
								Login
							</Button>
						</Form>
					)}
					{activeTab === REGISTER_TAB && (
						<Form onSubmit={handleSignUp}>
							<Form.Group className="d-flex mb-4">
								<Form.Control
									type="text"
									placeholder="Name"
									className="me-2 form-control"
									name="name"
									onChange={handleChange}
									required
								/>
								<Form.Control
									type="text"
									placeholder="Surname"
									className="form-control"
									name="surname"
									onChange={handleChange}
									required
								/>
							</Form.Group>
							<Form.Control
								type="email"
								placeholder="Email"
								className="mb-4 form-control"
								name="email"
								onChange={handleChange}
								required
							/>
							<Form.Control
								type="email"
								placeholder="Confirm Email"
								className="mb-4 form-control"
								name="confirmEmail"
								onChange={handleChange}
								required
							/>
							<Form.Control
								type="password"
								placeholder="Password"
								className="mb-4 form-control"
								name="password"
								onChange={handleChange}
								required
							/>
							<Form.Control
								type="password"
								placeholder="Confirm Password"
								className="mb-4 form-control"
								name="confirmPassword"
								onChange={handleChange}
								required
							/>
							<Form.Group className="mb-4">
								<Form.Check
									type="checkbox"
									label="I accept the Terms of Service and Privacy Policy"
									className="terms-checkbox"
									name="terms"
									onChange={handleChange}
									required
								/>
							</Form.Group>
							<Button className="vote-button w-100" type="submit">
								Register
							</Button>
						</Form>
					)}
					{activeTab === RESET_PASSWORD_TAB && (
						<Form onSubmit={handleForgotPassword}>
							<h3 className="">Reset Password</h3>

							<Form.Control
								type="email"
								placeholder="Email"
								className="mb-4 form-control"
								value={forgotPasswordEmail}
								onChange={(e) => setForgotPasswordEmail(e.target.value)}
								required
							/>

							<Button className="vote-button w-100" type="submit">
								Send Reset Link
							</Button>

							<div className="text-center mt-4">
								<a
									className="forgot-password-link"
									onClick={() => handleTabSwitch(LOGIN_TAB)}
								>
									Back to Login
								</a>
							</div>
						</Form>
					)}
				</Modal.Body>
			</Modal>
		</>
	);
};

export default AuthModal;
