import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import AuthModal, {
	RESET_PASSWORD_TAB,
} from "../../components/auth/auth-modal.tsx";

import "./styles.css";
import supabase from "../../config/supabase-client";
import WorkCard from "../../components/work-card";

const AccountDetailsPage = () => {
	const [user, setUser] = useState<any | null>(null);
	const [votedWorks, setVotedWorks] = useState<any[]>([]);
	const [votedWorkId, setVotedWorkId] = useState<number | null>(null);
	const [currentWork, setCurrentWork] = useState({
		workId: 0,
		image: "",
		title: "",
		participantName: "",
		category: "",
		voteCount: 0,
		authorBio: "",
		description: "",
		stlFile: "",
	});
	const [editMode, setEditMode] = useState({ name: false });
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
		const checkUserVotes = async () => {
			if (!user) return;

			const { data: existingVotes, error: votesError } = await supabase
				.from("votes")
				.select("*")
				.eq("user_id", user.id);

			if (votesError) {
				console.error("Error fetching votes:", votesError);
				return;
			}

			setVotedWorkId(existingVotes[0].work_id);

			existingVotes.map((index) => {
				setVotedWorkId(existingVotes[index].work_id);
			});
		};

		checkUserVotes();
	}, [user]);

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
				.select("work_id, works(*)")
				.eq("user_id", user.id);

			if (worksError) {
				console.error("Error fetching voted works:", worksError);
				return;
			}

			setVotedWorks(works.map((vote) => vote.works));
		};

		fetchUserData();
	}, []);

	type Field = "name";

	const handleEditToggle = (field: Field) => {
		setEditMode({ ...editMode, [field]: !editMode[field] });
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSave = async (field: Field) => {
		try {
			if (field === "name") {
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

	const handleVote = async (newWorkId: number) => {};

	const handleDetails = (work: any) => {
		setCurrentWork(work);
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
						<span>
							<h6 className="account-data-header">Email:</h6> {formData.email}
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
				{votedWorks.map((work) => (
					<WorkCard
						key={work.work_id}
						image={work.image_url}
						title={work.title}
						participantName={work.participant_name}
						category={work.category}
						description={work.description}
						voteButtonText="Vote"
						detailsButtonText="Details"
						voteCount={work.vote_count}
						isVoted={votedWorkId === work.work_id}
						onVote={() => handleVote(work.work_id)}
						onDetails={() =>
							handleDetails({
								workId: work.work_id,
								image: work.image_url,
								title: work.title,
								participantName: work.participant_name,
								voteCount: work.vote_count,
								category: work.category,
								authorBio: work.author_bio,
								description: work.description,
								stlFile: work.stl_url,
							})
						}
					/>
				))}
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
