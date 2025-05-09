import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Container, Row, Col, Button, Form, Spinner } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import AuthModal, {
	RESET_PASSWORD_TAB,
} from "../../components/auth/auth-modal.tsx";
import { useTranslation } from "react-i18next";

import noVotesImage from "./images/no-votes-image.png";
import DetailsModal from "../../components/details/details-modal.tsx";
import supabase from "../../config/supabase-client";
import WorkCard from "../../components/work-card";
import "./styles.css";

const AccountDetailsPage = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [user, setUser] = useState<any | null>(null);
	const [votedWorks, setVotedWorks] = useState<any[]>([]);
	const [currentWork, setCurrentWork] = useState({
		workId: 0,
		image: "",
		title: "",
		titleTranslation: "",
		participantName: "",
		category: "",
		categoryTranslation: "",
		voteCount: 0,
		authorBio: "",
		authorBioTranslation: "",
		description: "",
		descriptionTranslation: "",
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
	const [t] = useTranslation("global");

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
			setLoading(false);
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

	const handleVote = async (newWorkId: number) => {
		if (0 !== newWorkId) {
		}
	};

	const handleDetails = (work: any) => {
		setCurrentWork(work);
		setDetailsModal(true);
	};

	if (loading) {
		return (
			<div className="d-flex justify-content-center align-items-center vh-100">
				<Spinner
					style={{ color: "var(--bordo-color)" }}
					animation="border"
					role="status"
				>
					<span className="visually-hidden">{t("misc.loading-text")}</span>
				</Spinner>
			</div>
		);
	}

	return (
		<div className="works-background">
			<h1 className="account-details-header text-center">
				{t("account-details.first-header")}
			</h1>

			<Container
				style={{ backgroundColor: "var(--white-color)", padding: "50px" }}
			>
				<h4 className="account-details-section-header mb-4">
					{t("account-details.second-header")}
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
								<h6 className="account-data-header">
									{t("account-details.first-subheader")}
								</h6>{" "}
								{formData.name}
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
								<h6 className="account-data-header">
									{" "}
									{t("account-details.second-subheader")}
								</h6>{" "}
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
							{editMode.name ? t("account-details.first-text") : <FaUserEdit />}
						</Button>
					</Col>
				</Row>

				<Row className="align-items-center mb-3">
					<Col md={8}>
						<span>
							<h6 className="account-data-header">
								{t("account-details.third-subheader")}
							</h6>{" "}
							{formData.email}
						</span>
					</Col>
					<Col md={4} className="text-md-right">
						<Button className="edit-button" onClick={openForgotPasswordModal}>
							{t("account-details.first-button-text")}
						</Button>
					</Col>
				</Row>
			</Container>

			<Container className="mt-5 mb-4">
				<h4 className="account-details-section-header">
					{t("account-details.third-header")}
				</h4>
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
							voteButtonText={t("account-details.second-button-text")}
							detailsButtonText={t("account-details.third-button-text")}
							voteCount={work.vote_count}
							isVoted={true}
							onVote={() => handleVote(work.work_id)}
							onDetails={() =>
								handleDetails({
									workId: work.work_id,
									image: work.image_url,
									title: work.title,
									titleTranslation: work.title_translation,
									participantName: work.participant_name,
									voteCount: work.vote_count,
									category: work.category,
									categoryTranslation: work.category_translation,
									authorBio: work.author_bio,
									authorBioTranslation: work.author_bio_translation,
									description: work.description,
									descriptionTranslation: work.description_translation,
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
						{t("account-details.fourth-header")}
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
