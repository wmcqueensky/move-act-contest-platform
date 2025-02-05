import AuthModal, { LOGIN_TAB } from "../../components/auth/auth-modal.tsx";
import { Container, Col, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import WorkCard from "../../components/work-card";
import DetailsModal from "../../components/details/details-modal";
import supabase from "../../config/supabase-client";

import "./styles.css";

const WinnersPage = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [works, setWorks] = useState<any[]>([]);
	const [votedWorkId, setVotedWorkId] = useState<number | null>(null);
	const [showModal, setShowModal] = useState(false);
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
	const [showAuthModal, setShowAuthModal] = useState(false);
	const [user, setUser] = useState<any>(null);
	const [t] = useTranslation("global");

	useEffect(() => {
		const fetchWorksAndVotes = async () => {
			if (loading) {
				setLoading(true);
				const { data: worksData, error: worksError } = await supabase
					.from("works")
					.select("*");

				if (worksError) {
					console.error("Error fetching works:", worksError);
					setLoading(false);
					return;
				}

				const workIds = worksData.map((work) => work.work_id);
				const { data: votesData, error: votesError } = await supabase
					.from("votes")
					.select("work_id")
					.in("work_id", workIds);

				if (votesError) {
					console.error("Error fetching votes:", votesError);
					setLoading(false);
					return;
				}

				const voteCounts = workIds.reduce((acc, workId) => {
					acc[workId] = votesData.filter(
						(vote) => vote.work_id === workId
					).length;
					return acc;
				}, {});

				// Group works by country
				const worksByCountry = worksData.reduce((acc, work) => {
					if (!acc[work.country]) {
						acc[work.country] = [];
					}
					acc[work.country].push({
						...work,
						vote_count: voteCounts[work.work_id] || 0,
					});
					return acc;
				}, {});

				const topWorks = Object.values(worksByCountry).map((works: any) =>
					works.reduce(
						(max: any, work: any) =>
							work.vote_count > max.vote_count ? work : max,
						works[0]
					)
				);

				setWorks(topWorks);
			}
			setLoading(false);
		};
		fetchWorksAndVotes();
	});
	// }, [activeFlag]);

	useEffect(() => {
		const checkUser = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			setUser(user);
		};

		checkUser();
	}, []);

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

			if (existingVotes.length > 0) {
				setVotedWorkId(existingVotes[0].work_id);
			} else {
				setVotedWorkId(null);
			}
		};

		checkUserVotes();
	}, [user]);

	const handleVote = async (newWorkId: number) => {
		if (!user) {
			setShowAuthModal(true);
			return;
		}

		const { data: existingVotes, error: votesError } = await supabase
			.from("votes")
			.select("*")
			.eq("user_id", user.id);

		if (votesError) {
			console.error("Error fetching votes:", votesError);
			return;
		}

		let previousWorkId: any = null;

		if (existingVotes.length > 0) {
			previousWorkId = existingVotes[0].work_id;

			if (previousWorkId !== newWorkId) {
				setWorks((prevWorks) => {
					return prevWorks.map((work) => {
						if (work.work_id === previousWorkId) {
							return { ...work, vote_count: work.vote_count - 1 };
						}
						return work;
					});
				});

				const { error: deleteError } = await supabase
					.from("votes")
					.delete()
					.eq("vote_id", existingVotes[0].vote_id);

				if (deleteError) {
					console.error("Error deleting previous vote:", deleteError);
					return;
				}
			}
		}

		setWorks((prevWorks) => {
			return prevWorks.map((work) => {
				if (work.work_id === newWorkId) {
					return { ...work, vote_count: work.vote_count + 1 };
				}
				return work;
			});
		});

		const { error: voteError } = await supabase.from("votes").insert({
			work_id: newWorkId,
			user_id: user.id,
		});

		if (voteError) {
			console.error("Error voting:", voteError);
			setWorks((prevWorks) => {
				return prevWorks.map((work) => {
					if (work.work_id === newWorkId) {
						return { ...work, vote_count: work.vote_count - 1 };
					}
					if (work.work_id === previousWorkId) {
						return { ...work, vote_count: work.vote_count + 1 };
					}
					return work;
				});
			});
		} else {
			setCurrentWork((prevWork) => {
				if (prevWork.workId === newWorkId) {
					return { ...prevWork, voteCount: prevWork.voteCount + 1 };
				}
				if (prevWork.workId === previousWorkId) {
					return { ...prevWork, voteCount: prevWork.voteCount - 1 };
				}
				return prevWork;
			});
			setVotedWorkId(newWorkId);
		}
	};

	const handleDetails = (work: any) => {
		setCurrentWork(work);
		setShowModal(true);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	return (
		<div className="winners-background">
			<Container fluid className="winners-image mb-5">
				<Col className="text-center">
					<h1 className="welcome-header display-1">
						{t("winners.first-header")}
					</h1>
				</Col>
			</Container>

			<div>
				<Container className="card-container">
					{loading ? (
						<div className="d-flex justify-content-center">
							<Spinner
								style={{ color: "var(--bordo-color)" }}
								animation="border"
								role="status"
							>
								<span className="visually-hidden">
									{t("misc.loading-text")}
								</span>
							</Spinner>
						</div>
					) : (
						works.map((work) => (
							<WorkCard
								key={work.work_id}
								image={work.image_url}
								title={work.title}
								participantName={work.participant_name}
								category={work.category}
								description={work.description}
								voteButtonText={t("works.first-button-text")}
								detailsButtonText={t("works.second-button-text")}
								voteCount={work.vote_count}
								isVoted={votedWorkId === work.work_id}
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
						))
					)}
				</Container>
			</div>

			<DetailsModal
				show={showModal}
				onHide={handleClose}
				work={currentWork}
				isVoted={votedWorkId === currentWork.workId}
				onVote={() => handleVote(currentWork.workId)}
			/>

			<AuthModal
				show={showAuthModal}
				handleClose={() => setShowAuthModal(false)}
				activeTab={LOGIN_TAB}
			/>
		</div>
	);
};

export default WinnersPage;
