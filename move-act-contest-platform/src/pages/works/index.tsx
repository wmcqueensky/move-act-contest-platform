import { Container, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import WorkCard from "../../components/work-card";
import DetailsModal from "../../components/details/details-modal";
import supabase from "../../config/supabase-client";
import AuthModal, { LOGIN_TAB } from "../../components/auth/auth-modal.tsx";
import "./styles.css";

type FlagType = "Poland" | "Greece" | "Italy" | "Spain" | "Lithuania";

const WorksPage = () => {
	const [activeFlag, setActiveFlag] = useState<FlagType | null>("Poland");
	const [works, setWorks] = useState<any[]>([]);
	const [votedWork, setVotedWork] = useState<number | null>(null);
	const [showModal, setShowModal] = useState(false);
	const [currentWork, setCurrentWork] = useState({
		image: "",
		title: "",
		participantName: "",
		category: "",
		voteCount: "",
		description: "",
		stlFile: "",
	});
	const [showAuthModal, setShowAuthModal] = useState(false);
	const [user, setUser] = useState<any>(null);

	useEffect(() => {
		const fetchWorksAndVotes = async () => {
			if (activeFlag) {
				// Fetch works for the selected country
				const { data: worksData, error: worksError } = await supabase
					.from("works")
					.select("*")
					.eq("country", activeFlag);

				if (worksError) {
					console.error("Error fetching works:", worksError);
					return;
				}

				// Fetch all votes for these works
				const workIds = worksData.map((work) => work.work_id);
				const { data: votesData, error: votesError } = await supabase
					.from("votes")
					.select("work_id")
					.in("work_id", workIds);

				if (votesError) {
					console.error("Error fetching votes:", votesError);
					return;
				}

				// Count the votes for each work
				const voteCounts = workIds.reduce((acc, workId) => {
					acc[workId] = votesData.filter(
						(vote) => vote.work_id === workId
					).length;
					return acc;
				}, {});

				// Merge vote counts into works
				const worksWithVotes = worksData.map((work) => ({
					...work,
					vote_count: voteCounts[work.work_id] || 0,
				}));

				setWorks(worksWithVotes);
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
		console.log(user);
	}, []);

	const handleFlagClick = (flag: FlagType) => {
		setActiveFlag(flag);
	};

	const handleVote = async (workIndex: number) => {
		if (!user) {
			setShowAuthModal(true);
			return;
		}

		// Proceed with voting
		const work = works[workIndex];
		const { error: voteError } = await supabase.from("votes").insert({
			work_id: work.work_id,
			user_id: user.id,
		});

		if (voteError) {
			console.error("Error voting:", voteError);
		} else {
			setVotedWork(workIndex);
			alert("Vote recorded successfully!");
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
						<h3>You can vote for 5 works, each from different country.</h3>
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
						<h3>To see more details about work click Details button.</h3>
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
				{works.map((work, index) => (
					<WorkCard
						key={work.work_id}
						image={work.image_url}
						title={work.title}
						participantName={work.participant_name}
						category={work.category}
						description={work.description}
						voteButtonText="Vote"
						detailsButtonText="Details"
						isVoted={votedWork === index}
						voteCount={work.vote_count}
						onVote={() => handleVote(index)}
						onDetails={() =>
							handleDetails({
								image: work.image_url,
								title: work.title,
								participantName: work.participant_name,
								voteCount: work.vote_count.toString(),
								category: work.category,
								description: work.description,
								stlFile: work.stl_url,
							})
						}
					/>
				))}
			</Container>

			<DetailsModal show={showModal} onHide={handleClose} work={currentWork} />
			<AuthModal
				show={showAuthModal}
				handleClose={() => setShowAuthModal(false)}
				activeTab={LOGIN_TAB}
			/>
		</div>
	);
};

export default WorksPage;
