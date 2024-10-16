import { Toast, ToastContainer } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import React from "react";

interface AuthToastProps {
	show: boolean;
	message: string;
	type: "success" | "error";
	onClose: () => void;
}

const AuthToast: React.FC<AuthToastProps> = ({
	show,
	message,
	type,
	onClose,
}) => {
	return (
		<ToastContainer position="middle-center">
			<Toast
				onClose={onClose}
				show={show}
				bg={type === "success" ? "success" : "danger"}
				delay={3000}
				autohide
				className="custom-toast"
			>
				<Toast.Body className="d-flex align-items-center">
					{type === "success" ? (
						<FaCheckCircle className="me-2" />
					) : (
						<FaTimesCircle className="me-2" />
					)}
					<strong>{message}</strong>
				</Toast.Body>
			</Toast>
		</ToastContainer>
	);
};

export default AuthToast;
