import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import supabase from "../../config/supabase-client";
import { Container, Row, Col, ListGroup, Button, Form } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import "./styles.css";
import AuthModal, {
	RESET_PASSWORD_TAB,
} from "../../components/auth/auth-modal.tsx";

const AccountDetailsPage = () => {
	const [user, setUser] = useState<any | null>(null);
	const [votedWorks, setVotedWorks] = useState<any[]>([]);
	const [editMode, setEditMode] = useState({ name: false, email: false });
	const [formData, setFormData] = useState({
		name: "",
		surname: "",
		email: "",
	});
	const [showModal, setShowModal] = useState(false);
	const [activeTab, setActiveTab] =
		useState<typeof RESET_PASSWORD_TAB>(RESET_PASSWORD_TAB);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUserData = async () => {
			const {
				data: { user },
				error: userError,
			} = await supabase.auth.getUser();
			if (userError || !user) {
				console.error("Error fetching user data:", userError);
				navigate("/");
				return;
			}

			setUser(user);
			setFormData({
				name: user.user_metadata?.name || "",
				surname: user.user_metadata?.surname || "",
				email: user.email || "",
			});

			const { data: works, error: worksError } = await supabase
				.from("votes")
				.select("work_id, works(title)")
				.eq("user_id", user.id);

			if (worksError) {
				console.error("Error fetching voted works:", worksError);
				return;
			}

			setVotedWorks(works.map((vote) => vote.works));
		};

		fetchUserData();
	}, []);

	type Field = "name" | "email";

	const handleEditToggle = (field: Field) => {
		setEditMode({ ...editMode, [field]: !editMode[field] });
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSave = async (field: Field) => {
		try {
			if (field === "email") {
				// Sign out the user to allow email update
				const { error: signOutError } = await supabase.auth.signOut();
				if (signOutError) {
					console.error("Error signing out:", signOutError);
					return;
				}

				// Update the email address
				const { error: updateEmailError } = await supabase.auth.updateUser({
					email: formData.email,
				});
				if (updateEmailError) {
					console.error("Error updating email:", updateEmailError);
					return;
				}

				// Notify user that they need to confirm the new email
				alert("Please check your new email address for a confirmation link.");

				// You might want to redirect the user or handle it as needed
				navigate("/");
			} else if (field === "name") {
				const updatedData = { name: formData.name, surname: formData.surname };

				// Update user metadata
				const { error } = await supabase.auth.updateUser({
					data: updatedData,
				});

				if (error) {
					console.error("Error updating user data:", error);
				} else {
					setUser({
						...user,
						user_metadata: { ...user.user_metadata, ...updatedData },
						...updatedData,
					});
					setEditMode({ ...editMode, [field]: false });
				}
			}
		} catch (error) {
			console.error("Unexpected error:", error);
		}
	};

	const openForgotPasswordModal = () => {
		setActiveTab(RESET_PASSWORD_TAB);
		setShowModal(true);
	};

	if (!user) {
		return <div>Loading...</div>;
	}

	return (
		<div className="works-background">
			<h1 className="account-details-header text-center">Account Details</h1>

			<Container
				style={{ backgroundColor: "var(--white-color)", padding: "50px" }}
			>
				<h4 className="account-details-section-header mb-4">
					Personal Information
				</h4>

				{/* Name and Surname Row */}
				<Row className="align-items-center mb-3">
					<Col md={4}>
						{editMode.name ? (
							<Form.Control
								type="text"
								name="name"
								value={formData.name}
								onChange={handleInputChange}
								className="mb-2"
							/>
						) : (
							<span>
								<h6 className="account-data-header">Name:</h6> {formData.name}
							</span>
						)}
					</Col>
					<Col md={4}>
						{editMode.name ? (
							<Form.Control
								type="text"
								name="surname"
								value={formData.surname}
								onChange={handleInputChange}
							/>
						) : (
							<span>
								<h6 className="account-data-header">Surname:</h6>{" "}
								{formData.surname}
							</span>
						)}
					</Col>
					<Col md={4} className="text-md-right">
						<Button
							className="edit-button"
							onClick={() =>
								editMode.name ? handleSave("name") : handleEditToggle("name")
							}
						>
							{editMode.name ? "Save" : <FaUserEdit />}
						</Button>
					</Col>
				</Row>

				<Row className="align-items-center mb-3">
					<Col md={8}>
						{editMode.email ? (
							<Form.Control
								type="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
							/>
						) : (
							<span>
								<h6 className="account-data-header">Email:</h6> {formData.email}
							</span>
						)}
					</Col>
					<Col md={4} className="text-md-right">
						<Button
							className="edit-button"
							onClick={() =>
								editMode.email ? handleSave("email") : handleEditToggle("email")
							}
						>
							{editMode.email ? "Save" : "Change Email"}
						</Button>
					</Col>
				</Row>

				<Row className="align-items-center mb-3">
					<Col md={8}>
						<span>
							<h6 className="account-data-header">Password:</h6> **********
						</span>
					</Col>
					<Col md={4} className="text-md-right">
						<Button className="edit-button" onClick={openForgotPasswordModal}>
							Change Password
						</Button>
					</Col>
				</Row>
			</Container>

			<Container>
				<h4 className="account-details-section-header">Voted Works</h4>
				<ListGroup variant="flush">
					{votedWorks.length > 0 ? (
						votedWorks.map((work, index) => (
							<ListGroup.Item key={index}>{work.title}</ListGroup.Item>
						))
					) : (
						<ListGroup.Item>No works voted for yet.</ListGroup.Item>
					)}
				</ListGroup>
			</Container>

			<AuthModal
				show={showModal}
				handleClose={() => setShowModal(false)}
				activeTab={activeTab}
			/>
		</div>
	);
};

export default AccountDetailsPage;
