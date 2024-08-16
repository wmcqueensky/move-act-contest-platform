import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import AuthToast from "../../components/auth/auth-toast.tsx";
import supabase from "../../config/supabase-client.ts";

const ResetPasswordPage = () => {
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const navigate = useNavigate();

	const [toast, setToast] = useState<{
		show: boolean;
		message: string;
		type: "success" | "error";
	}>({ show: false, message: "", type: "success" });

	const handleResetPassword = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		setToast({ show: false, message: "", type: "success" });

		if (newPassword !== confirmNewPassword) {
			setToast({
				show: true,
				message: "Passwords do not match",
				type: "error",
			});
			return;
		}

		try {
			const { error } = await supabase.auth.updateUser({
				password: newPassword,
			});

			if (error) {
				setToast({ show: true, message: error.message, type: "error" });
			} else {
				setToast({
					show: true,
					message: "Password has been reset successfully!",
					type: "success",
				});
				setTimeout(() => navigate("/"), 2500);
			}
		} catch (error) {
			const errorMessage = (error as Error).message;
			setToast({ show: true, message: errorMessage, type: "error" });
		}
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<div
				style={{
					width: "100%",
					maxWidth: "400px",
					padding: "20px",
					boxShadow: "0 0 10px rgba(0,0,0,0.1)",
					backgroundColor: "var(--white-color)",
				}}
			>
				<h3 className="reset-password-modal-header text-center">
					Enter new password
				</h3>
				<AuthToast
					show={toast.show}
					message={toast.message}
					type={toast.type}
					onClose={() => setToast({ ...toast, show: false })}
				/>
				<Form onSubmit={handleResetPassword}>
					<Form.Control
						type="password"
						placeholder="New Password"
						className="form-control mb-3"
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
						required
					/>
					<Form.Control
						type="password"
						placeholder="Confirm New Password"
						className="form-control mb-3"
						value={confirmNewPassword}
						onChange={(e) => setConfirmNewPassword(e.target.value)}
						required
					/>
					<Button className="auth-button w-100" type="submit">
						Reset Password
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default ResetPasswordPage;
