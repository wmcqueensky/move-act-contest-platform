import { Container, Col, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import WorkCard from "../../components/work-card";
import DetailsModal from "../../components/details/details-modal";
import supabase from "../../config/supabase-client";
import AuthModal, { LOGIN_TAB } from "../../components/auth/auth-modal.tsx";
import "./styles.css";

type FlagType = "Poland" | "Greece" | "Italy" | "Spain" | "Lithuania";

const WorksPage = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [activeFlag, setActiveFlag] = useState<FlagType | null>("Poland");
	const [works, setWorks] = useState<any[]>([]);
	const [votedWorkId, setVotedWorkId] = useState<number | null>(null);
	const [showModal, setShowModal] = useState(false);
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
	const [showAuthModal, setShowAuthModal] = useState(false);
	const [user, setUser] = useState<any>(null);

	useEffect(() => {
		const fetchWorksAndVotes = async () => {
			if (activeFlag) {
				const { data: worksData, error: worksError } = await supabase
					.from("works")
					.select("*")
					.eq("country", activeFlag);

				if (worksError) {
					console.error("Error fetching works:", worksError);
					return;
				}

				const workIds = worksData.map((work) => work.work_id);
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

				const worksWithVotes = worksData.map((work) => ({
					...work,
					vote_count: voteCounts[work.work_id] || 0,
				}));

				setWorks(worksWithVotes);
				setLoading(false);
			}
		};

		fetchWorksAndVotes();
	}, [activeFlag]);

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
			if (!user || !activeFlag) return;

			const { data: existingVotes, error: votesError } = await supabase
				.from("votes")
				.select("*")
				.eq("user_id", user.id)
				.eq("country", activeFlag);

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
	}, [user, activeFlag]);

	const handleFlagClick = (flag: FlagType) => {
		setActiveFlag(flag);
		setLoading(true);
	};

	const handleVote = async (newWorkId: number) => {
		if (!user) {
			setShowAuthModal(true);
			return;
		}

		const { data: existingVotes, error: votesError } = await supabase
			.from("votes")
			.select("*")
			.eq("user_id", user.id)
			.eq("country", activeFlag);

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
			country: activeFlag,
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
		<div className="works-background">
			<Container fluid className="projects-image mb-5">
				<Col className="text-center">
					<h1 className="welcome-header display-1">
						THE 25 NOMINATED PROJECTS <br /> FOR WHICH YOU CAN VOTE
					</h1>
				</Col>
			</Container>

			<Container className="voting-info-container">
				<h1 className="voting-info-header text-center mb-5">How to vote?</h1>

				<ul>
					<li>
						<h3>
							There are 25 works from 5 countries: Poland, Greece, Italy, Spain,
							Lithuania.
						</h3>
					</li>

					<li>
						<h3>You can vote for 5 works, each from a different country.</h3>
					</li>

					<li>
						<h3>
							To choose works from specific select one of the 5 flags. The
							highlighted flag will indicate the origin of the displayed works.
						</h3>
					</li>

					<li>
						<h3>
							After selecting the flag you will see 5 works from the selected
							country.
						</h3>
					</li>

					<li>
						<h3>To vote for a specific work click Vote button.</h3>
					</li>

					<li>
						<h3>
							To see more details about the work click the Details button.
						</h3>
					</li>
				</ul>
			</Container>

			<Container className="flag-container text-center">
				<button
					className={`flag-button ${activeFlag === "Poland" ? "active" : ""}`}
					onClick={() => handleFlagClick("Poland")}
				>
					<span className="fi fi-pl flag"></span>
				</button>

				<button
					className={`flag-button ${activeFlag === "Greece" ? "active" : ""}`}
					onClick={() => handleFlagClick("Greece")}
				>
					<span className="fi fi-gr flag"></span>
				</button>

				<button
					className={`flag-button ${activeFlag === "Italy" ? "active" : ""}`}
					onClick={() => handleFlagClick("Italy")}
				>
					<span className="fi fi-it flag"></span>
				</button>

				<button
					className={`flag-button ${activeFlag === "Spain" ? "active" : ""}`}
					onClick={() => handleFlagClick("Spain")}
				>
					<span className="fi fi-es flag"></span>
				</button>

				<button
					className={`flag-button ${
						activeFlag === "Lithuania" ? "active" : ""
					}`}
					onClick={() => handleFlagClick("Lithuania")}
				>
					<span className="fi fi-lt flag"></span>
				</button>
			</Container>

			<Container className="card-container">
				{loading ? (
					<div className="d-flex justify-content-center">
						<Spinner
							style={{ color: "var(--bordo-color)" }}
							animation="border"
							role="status"
						>
							<span className="visually-hidden">Loading...</span>
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
					))
				)}
			</Container>

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

export default WorksPage;
