import { useState, useEffect } from "react";
import { Modal, Button, Form, ButtonGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import supabase from "../../config/supabase-client.ts";
import AuthToast from "./auth-toast.tsx";

import englishFrameworkPdf from "../../docs/en-docs/en-framework.pdf";
import spanishFrameworkPdf from "../../docs/es-docs/es-framework.pdf";
import italianFrameworkPdf from "../../docs/it-docs/it-framework.pdf";
import lithuanianFrameworkPdf from "../../docs/lt-docs/lt-framework.pdf";
import polishFrameworkPdf from "../../docs/pl-docs/pl-framework.pdf";

import "./styles.css";

export const LOGIN_TAB = "login";
export const REGISTER_TAB = "register";
export const RESET_PASSWORD_TAB = "reset-password";

interface AuthModalProps {
	show: boolean;
	handleClose: () => void;
	activeTab: typeof LOGIN_TAB | typeof REGISTER_TAB | typeof RESET_PASSWORD_TAB;
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
	const [t, i18n] = useTranslation("global");
	const [forgotPasswordToast, setForgotPasswordToast] = useState<{
		show: boolean;
		message: string;
		type: "success" | "error";
	}>({ show: false, message: "", type: "success" });

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

	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	const getDocuments = () => {
		const language = i18n.language;

		switch (language) {
			case "es":
				return {
					frameworkPdf: spanishFrameworkPdf,
				};
			case "it":
				return {
					frameworkPdf: italianFrameworkPdf,
				};
			case "lt":
				return {
					frameworkPdf: lithuanianFrameworkPdf,
				};
			case "pl":
				return {
					frameworkPdf: polishFrameworkPdf,
				};
			default:
				return {
					frameworkPdf: englishFrameworkPdf,
				};
		}
	};

	const { frameworkPdf } = getDocuments();

	useEffect(() => {
		const checkUser = async () => {
			const { data, error } = await supabase.auth.getUser();
			if (error || !data.user) {
				setIsLoggedIn(false);
			} else {
				setIsLoggedIn(true);
			}
		};

		checkUser();

		const { data: authListener } = supabase.auth.onAuthStateChange(
			(_event, session) => {
				setIsLoggedIn(!!session?.user);
			}
		);

		return () => {
			authListener?.subscription.unsubscribe();
		};
	}, []);

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
				setToast({ show: true, message: t("auth.first-error"), type: "error" });
				return;
			}

			if (formData.password !== formData.confirmPassword) {
				setToast({
					show: true,
					message: t("auth.second-error"),
					type: "error",
				});
				return;
			}
		}

		try {
			const { error } = await supabase.auth.signInWithPassword({
				email: formData.email,
				password: formData.password,
			});

			if (error) {
				setToast({ show: true, message: error.message, type: "error" });
			} else {
				setToast({
					show: true,
					message: t("auth.first-success"),
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
			setToast({ show: true, message: t("auth.first-error"), type: "error" });
			return;
		}

		if (formData.password !== formData.confirmPassword) {
			setToast({
				show: true,
				message: t("auth.second-error"),
				type: "error",
			});
			return;
		}

		try {
			const { error } = await supabase.auth.signUp({
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
					message: t("auth.second-success"),
					type: "success",
				});
				handleClose();
			}
		} catch (error) {
			const errorMessage = (error as Error).message;
			setToast({ show: true, message: errorMessage, type: "error" });
		}
	}

	async function handleForgotPassword(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		try {
			const { error } = await supabase.auth.resetPasswordForEmail(
				forgotPasswordEmail,
				{
					redirectTo: window.location.origin + "/reset-password", //to popraw
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
					message: t("auth.third-success"),
					type: "success",
				});
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
								{t("auth.first-header")}
							</Button>
							<Button
								className={`w-50 ${
									activeTab === REGISTER_TAB ? "auth-button" : "details-button"
								}`}
								onClick={() => handleTabSwitch(REGISTER_TAB)}
							>
								{t("auth.second-header")}
							</Button>
						</ButtonGroup>
					)}
					{error && <div className="alert alert-danger">{error}</div>}
					{activeTab === LOGIN_TAB && (
						<Form onSubmit={handleSignIn}>
							<Form.Control
								type="email"
								placeholder={t("auth.first-placeholder")}
								className="mb-4 form-control"
								name="email"
								onChange={handleChange}
								required
							/>
							<Form.Control
								type="password"
								placeholder={t("auth.second-placeholder")}
								className="mb-4 form-control"
								name="password"
								onChange={handleChange}
								required
							/>
							<div className="text-center mb-4">
								<a
									href="#"
									className="forgot-password-link text-center"
									onClick={() => handleTabSwitch(RESET_PASSWORD_TAB)}
								>
									{t("auth.fourth-button-text")}
								</a>
							</div>
							<Button className="vote-button w-100" type="submit">
								{t("auth.first-button-text")}
							</Button>
						</Form>
					)}
					{activeTab === REGISTER_TAB && (
						<Form onSubmit={handleSignUp}>
							<Form.Group className="d-flex mb-4">
								<Form.Control
									type="text"
									placeholder={t("auth.third-placeholder")}
									className="me-2 form-control"
									name="name"
									onChange={handleChange}
									required
								/>
								<Form.Control
									type="text"
									placeholder={t("auth.fourth-placeholder")}
									className="form-control"
									name="surname"
									onChange={handleChange}
									required
								/>
							</Form.Group>
							<Form.Control
								type="email"
								placeholder={t("auth.first-placeholder")}
								className="mb-4 form-control"
								name="email"
								onChange={handleChange}
								required
							/>
							<Form.Control
								type="email"
								placeholder={t("auth.fifth-placeholder")}
								className="mb-4 form-control"
								name="confirmEmail"
								onChange={handleChange}
								required
							/>
							<Form.Control
								type="password"
								placeholder={t("auth.second-placeholder")}
								className="mb-4 form-control"
								name="password"
								onChange={handleChange}
								required
							/>
							<Form.Control
								type="password"
								placeholder={t("auth.sixth-placeholder")}
								className="mb-4 form-control"
								name="confirmPassword"
								onChange={handleChange}
								required
							/>
							<Form.Group className="mb-4">
								<Form.Check
									type="checkbox"
									className="terms-checkbox"
									name="terms"
									required
									label={
										<>
											{t("auth.first-text")}{" "}
											<a
												href={frameworkPdf}
												target="_blank"
												rel="noopener noreferrer"
											>
												{t("auth.second-text")}
											</a>
										</>
									}
									onChange={handleChange}
								/>
							</Form.Group>

							<Button className="vote-button w-100" type="submit">
								{t("auth.second-button-text")}
							</Button>
						</Form>
					)}
					{activeTab === RESET_PASSWORD_TAB && (
						<Form onSubmit={handleForgotPassword}>
							<h3 className="reset-password-modal-header text-center">
								{t("auth.third-header")}
							</h3>

							<Form.Control
								type="email"
								placeholder={t("auth.first-placeholder")}
								className="mb-4 form-control"
								value={forgotPasswordEmail}
								onChange={(e) => setForgotPasswordEmail(e.target.value)}
								required
							/>

							<Button className="vote-button w-100" type="submit">
								{t("auth.fifth-button-text")}
							</Button>

							{!isLoggedIn && (
								<div className="text-center mt-4">
									<a
										href="#"
										className="forgot-password-link"
										onClick={() => handleTabSwitch(LOGIN_TAB)}
									>
										{t("auth.sixth-button-text")}
									</a>
								</div>
							)}
						</Form>
					)}
				</Modal.Body>
			</Modal>
		</>
	);
};

export default AuthModal;
