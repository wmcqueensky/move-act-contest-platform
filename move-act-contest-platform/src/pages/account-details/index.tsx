import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import AuthModal, {
	RESET_PASSWORD_TAB,
} from "../../components/auth/auth-modal.tsx";

import noVotesImage from "./images/no-votes-image.png";
import DetailsModal from "../../components/details/details-modal.tsx";
import supabase from "../../config/supabase-client";
import WorkCard from "../../components/work-card";
import "./styles.css";

const AccountDetailsPage = () => {
	const [user, setUser] = useState<any | null>(null);
	const [votedWorks, setVotedWorks] = useState<any[]>([]);
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
	const [showEditPasswordModal, setEditPasswordModal] = useState(false);
	const [showDetailsModal, setDetailsModal] = useState(false);
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

			const { data: worksData, error: worksError } = await supabase
				.from("votes")
				.select("work_id, works(*)")
				.eq("user_id", user.id);

			if (worksError) {
				console.error("Error fetching voted works:", worksError);
				return;
			}

			const workIds = worksData.map((vote) => vote.work_id);
			const { data: votesData, error: votesError } = await supabase
				.from("votes")
				.select("work_id")
				.in("work_id", workIds);

			if (votesError) {
				console.error("Error fetching votes:", votesError);
				return;
			}

			const voteCounts = workIds.reduce((acc, workId) => {
				acc[workId] = votesData.filter(
					(vote) => vote.work_id === workId
				).length;
				return acc;
			}, {});

			const worksWithVotes = worksData.map((vote) => ({
				...vote.works,
				vote_count: voteCounts[vote.work_id] || 0,
			}));

			setVotedWorks(worksWithVotes);
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
		setEditPasswordModal(true);
	};

	const handleVote = async (newWorkId: number) => {};

	const handleDetails = (work: any) => {
		setCurrentWork(work);
		setDetailsModal(true);
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

			<Container className="mt-5 mb-4">
				<h4 className="account-details-section-header">Voted Works</h4>
			</Container>

			{votedWorks.length > 0 ? (
				<Container className="card-container">
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
							isVoted={true}
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
			) : (
				<Container className="text-center">
					<img src={noVotesImage} alt="No votes" className="no-votes-image" />
					<h2 className="no-votes-header mt-3">
						You haven't voted for any works yet
					</h2>
				</Container>
			)}

			<DetailsModal
				show={showDetailsModal}
				onHide={() => setDetailsModal(false)}
				work={currentWork}
				isVoted={true}
				onVote={() => handleVote(currentWork.workId)}
			/>

			<AuthModal
				show={showEditPasswordModal}
				handleClose={() => setEditPasswordModal(false)}
				activeTab={activeTab}
			/>
		</div>
	);
};

export default AccountDetailsPage;
