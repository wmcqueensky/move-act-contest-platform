import { Container, Accordion, Table } from "react-bootstrap";
import rulesPdf from "./docs/rules.pdf";
import "./styles.css";

const AboutPage = () => {
	return (
		<div className="works-background text-center ">
			<Container fluid className="about-image text-center mb-5">
				<h1 className="welcome-header display-1">
					EVERYTHING YOU NEED TO <br />
					KNOW ABOUT THE CONTEST
				</h1>
			</Container>

			<h2 className="about-introduction mb-5">
				Welcome to the Move&Act&nbsp;
				<span style={{ color: "var(--yellow-color)" }}>
					Photo-Voice Contest
				</span>
				! Part of the Erasmus+ project <br />
				<span style={{ color: "var(--orange-color)" }}>
					"Move & Act - Empower Youth through Entrepreneurial and Digital
					Skills."
				</span>
			</h2>

			<h6 className="accordion-main-header">General Information</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
				flush
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						What is the The Move&Act Photo-Voice Contest?
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						The Move&Act
						<span style={{ fontWeight: "bold" }}> Photo-Voice Contest</span> is
						part of the Erasmus+ project{" "}
						<span style={{ fontWeight: "bold" }}>
							"Move & Act- Empower Youth through Entrepreneurial and Digital
							Skills"
						</span>{" "}
						This initiative aims to develop digital, creative and
						entrepreneurial skills among young people, especially those who are
						at risk due to disabilities, migration status or as NEETs (Not in
						Education, Employment, or Training). The contest provides a{" "}
						<span style={{ fontWeight: "bold" }}>
							platform for participants to express their challenges and
							experiences through photography
						</span>
						, thereby improving their employability, fostering a European
						identity and{" "}
						<span style={{ fontWeight: "bold" }}>encouraging interaction</span>{" "}
						with the local, national and European community.
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						Purpose of the Contest
					</Accordion.Header>
					<Accordion.Body>
						<p>
							Photo-Voice is a qualitative research method that combines
							<span style={{ fontWeight: "bold" }}> photography</span> and{" "}
							<span style={{ fontWeight: "bold" }}>storytelling</span> to
							document and address social issues. This method was developed in
							the 1990s by Caroline Wang and Mary Ann Burris and enables
							communities to{" "}
							<span style={{ fontWeight: "bold" }}>
								share their experiences
							</span>{" "}
							and{" "}
							<span style={{ fontWeight: "bold" }}>
								make their voices heard
							</span>
							.{" "}
						</p>

						<p>
							Participants are{" "}
							<span style={{ fontWeight: "bold" }}>invited to take photos</span>{" "}
							that reflect their experiences, challenges or perspectives on
							specific topics such as poverty, unemployment, education,
							environmental issues and more. These photos will be accompanied by
							narratives that{" "}
							<span style={{ fontWeight: "bold" }}>
								contextualise the images and provide deeper insight
							</span>{" "}
							into community issues.
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header className="accordion-header">
						Themes of the Contest
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						Participants must submit photos that fit one of the following
						themes:
						<ul>
							<li style={{ fontWeight: "bold" }}>Poverty</li>
							<li style={{ fontWeight: "bold" }}>Unemployment</li>
							<li style={{ fontWeight: "bold" }}>Education</li>
							<li style={{ fontWeight: "bold" }}>
								Environment (protection and/or degradation of biodiversity)
							</li>
							<li style={{ fontWeight: "bold" }}>Problems in Europe</li>
							<li style={{ fontWeight: "bold" }}>Accessibility</li>
							<li style={{ fontWeight: "bold" }}>
								Realities of the different generations
							</li>
							<li style={{ fontWeight: "bold" }}>
								Introspective images (e.g. self-portraits, LGBTQ+, mental
								health)
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">Admission Criteria</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">Age</Accordion.Header>
					<Accordion.Body className="accordion-body">
						Eligible participants must be between{" "}
						<span style={{ fontWeight: "bold" }}>18 and 30 years old</span> at
						the start of the contest.
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						Nationality
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						Eligible participants must{" "}
						<span style={{ fontWeight: "bold" }}>reside</span> in one of the
						participating European countries:{" "}
						<span style={{ fontWeight: "bold" }}>
							Poland, Italy, Spain, Greece
						</span>{" "}
						and <span style={{ fontWeight: "bold" }}>Lithuania</span>.
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header className="accordion-header">
						Traits
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						Eligible participants must be interested in raising public awareness
						of local community challenges.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">Criteria for Submission</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						Technical Requirements
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<ul>
							<li>
								<span style={{ fontWeight: "bold" }}>
									Only 1 photo must be submitted
								</span>{" "}
								in <span style={{ fontWeight: "bold" }}>.jpg</span> or{" "}
								<span style={{ fontWeight: "bold" }}>.png</span> format with a
								resolution of{" "}
								<span style={{ fontWeight: "bold" }}>1920x1080 pixels</span>.
							</li>
							<li>
								A (1){" "}
								<span style={{ fontWeight: "bold" }}>
									{" "}
									3D file (.stl) of the photo
								</span>{" "}
								should also be submitted{" "}
								<span style={{ fontWeight: "bold" }}>
									(no larger than 10 MB)
								</span>
								.
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						Submission Method
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						Entries should be submitted{" "}
						<span style={{ fontWeight: "bold" }}>via email</span> and{" "}
						<span style={{ fontWeight: "bold" }}>photos</span> should{" "}
						<span style={{ fontWeight: "bold" }}>be sent via a link</span> to a
						shared drive folder.
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header className="accordion-header">
						Accompanying Information
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						Include a <span style={{ fontWeight: "bold" }}>title</span> (up to{" "}
						<span style={{ fontWeight: "bold" }}>5 words</span>), a{" "}
						<span style={{ fontWeight: "bold" }}>short bio</span> of the author
						(250-350 words) and{" "}
						<span style={{ fontWeight: "bold" }}>
							a brief description of the photo
						</span>{" "}
						(250-500 words). The message must also explicitly state which of the
						competition <span style={{ fontWeight: "bold" }}>themes</span> the
						photo belongs to.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">Course of Contest</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						Submission Phase
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							Participants must submit their{" "}
							<span style={{ fontWeight: "bold" }}>photo</span> (.jpg or .png)
							and their{" "}
							<span style={{ fontWeight: "bold" }}>.stl file by email</span>{" "}
							<span style={{ fontWeight: "bold", color: "var(--bordo-color)" }}>
								[WHEN]
							</span>
							.
						</p>

						<p
							style={{
								backgroundColor: "var(--bordo-color)",
								color: "var(--yellow-color)",
								padding: "10px",
								paddingLeft: "4px",
								borderRadius: "10px",
							}}
						>
							In this phase, participants prepare their entries, access the
							contest <span style={{ fontWeight: "bold" }}>guidelines</span> and
							resources, and receive personalised support{" "}
							<span style={{ fontWeight: "bold" }}>if needed</span>.
						</p>

						<p>
							The key dates for judging and award announcements will be
							communicated to participants via the project's official channels:{" "}
							<span style={{ fontWeight: "bold", color: "var(--bordo-color)" }}>
								[Facebook , Instagram and WEBSITE]
							</span>
							.
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						Judging Phase
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							The <span style={{ fontWeight: "bold" }}>jury</span> will select{" "}
							<span style={{ fontWeight: "bold" }}>5 finalists from each</span>{" "}
							participating country, resulting in a{" "}
							<span style={{ fontWeight: "bold" }}>
								total of 25 finalist photos
							</span>
							. The finalists will be announced via the official channels of the
							project:{" "}
							<span style={{ fontWeight: "bold", color: "var(--bordo-color)" }}>
								[Facebook, Instagram and WEBSITE/platform]
							</span>
							.
						</p>

						<p>
							These <span style={{ fontWeight: "bold" }}>25 photos</span> will
							be uploaded to{" "}
							<span style={{ fontWeight: "bold", color: "var(--bordo-color)" }}>
								"Works" section at this platform
							</span>{" "}
							and showcased as part of the contest's{" "}
							<span style={{ fontWeight: "bold" }}>online exhibition</span>.
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header className="accordion-header">
						Photo-Voice Exhibition
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						The (25) <span style={{ fontWeight: "bold" }}>finalists'</span>{" "}
						works will be presented in the{" "}
						<span style={{ fontWeight: "bold" }}>
							online exhibition on this
						</span>{" "}
						website{" "}
						<span style={{ fontWeight: "bold", color: "var(--bordo-color)" }}>
							in the "Works" section
						</span>
						.
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="3">
					<Accordion.Header className="accordion-header">
						Voting Phase
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							Anyone with access to the contest platform can{" "}
							<span style={{ fontWeight: "bold" }}>participate in voting</span>.
							Each voter can cast{" "}
							<span style={{ fontWeight: "bold" }}>one vote</span> for their
							favorite work from{" "}
							<span style={{ fontWeight: "bold" }}>each</span> participating{" "}
							<span style={{ fontWeight: "bold" }}>country</span>. The public
							voting period will take place during{" "}
							<span style={{ fontWeight: "bold", color: "var(--bordo-color)" }}>
								[specified voting period]
							</span>
							.
						</p>

						<p>
							The <span style={{ fontWeight: "bold" }}>5 winners</span> will be
							determined based on the highest number of votes received.
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="4">
					<Accordion.Header className="accordion-header">
						Prizes and Awards
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							<span style={{ fontWeight: "bold" }}>5 winners</span> will receive
							recognition for their entries.
						</p>

						<p>
							The{" "}
							<span style={{ fontWeight: "bold" }}>
								winning photo from each country
							</span>{" "}
							<span style={{ textDecoration: "underline" }}>
								(Poland, Italy, Spain, Greece, and Lithuania){" "}
							</span>
							will be specially recognised by being{" "}
							<span style={{ fontWeight: "bold" }}>
								3D printed as a lithophane{" "}
							</span>
							and exhibited during national events. These events will celebrate
							the culmination of the project and the contest.
						</p>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">
				Instructions for Submitting Entries
			</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						Email Contact
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							In order to be eligible to participate and avoid disqualification,
							participants{" "}
							<span style={{ fontWeight: "bold" }}>must adhere</span> to the
							following guidelines when{" "}
							<span style={{ fontWeight: "bold" }}>
								submitting their entries
							</span>{" "}
							by email:
						</p>

						<p
							style={{
								backgroundColor: "var(--bordo-color)",
								color: "var(--yellow-color)",
								padding: "10px",
								borderRadius: "10px",
								fontWeight: "bold",
							}}
							className="text-center"
						>
							moveandact2022@gmail.com
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						Email Subject
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							Participants must use the following format for the subject of
							their email:
						</p>

						<p
							style={{
								backgroundColor: "var(--yellow-color)",
								padding: "10px",
								borderRadius: "10px",
								fontWeight: "bold",
							}}
							className="text-center"
						>
							[country code]_[contest entry]_[participant's name and surname]
						</p>

						<div>
							<h6 style={{ fontWeight: "bold" }}>Country codes:</h6>
							<ul>
								<li>Spain: ES</li>
								<li>Greece: GR</li>
								<li>Lithuania: LT</li>
								<li>Poland: PL</li>
								<li>Italy: IT</li>
							</ul>
						</div>

						<div>
							<h6 style={{ fontWeight: "bold" }}>Example:</h6>
							ES_Contest Entry_Manuel García (for participants from Spain){" "}
							<br />
							IT_Contest Entry_Giovanna Russo (for participants from Italy)
						</div>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header className="accordion-header">
						File Submission
					</Accordion.Header>
					<Accordion.Body>
						<p>
							The files, i.e.{" "}
							<span style={{ fontWeight: "bold" }}>
								the photo and .stl file
							</span>
							, should be uploaded to a Google Drive folder. The{" "}
							<span style={{ fontWeight: "bold" }}>link to this folder</span>{" "}
							should be included in the email and{" "}
							<span style={{ fontWeight: "bold" }}>shared with the email</span>:
						</p>

						<p
							style={{
								backgroundColor: "var(--bordo-color)",
								color: "var(--yellow-color)",
								padding: "10px",
								borderRadius: "10px",
								fontWeight: "bold",
							}}
							className="text-center"
						>
							moveandact2022@gmail.com
						</p>

						<p>The files must be named in the following format:</p>
						<p
							style={{
								backgroundColor: "var(--yellow-color)",
								padding: "10px",
								borderRadius: "10px",
								fontWeight: "bold",
							}}
							className="text-center"
						>
							[country code]_[file format]_[participant's name and surname]
						</p>

						<div className="mb-3">
							<h6 style={{ fontWeight: "bold" }}>File codes:</h6>
							For photos: use "<span style={{ fontWeight: "bold" }}>jpg</span>"
							or "<span style={{ fontWeight: "bold" }}>png</span>" <br />
							For .stl files (3D models): "
							<span style={{ fontWeight: "bold" }}>stl</span>"
						</div>

						<div>
							<h6 style={{ fontWeight: "bold" }}>Example:</h6>
							IT_jpg_Giovanna Russo (for a photo submission from Italy) <br />
							LT_stl_Emiljia Kazlauskaite (for the submission of an .stl file
							from Lithuania)
						</div>

						<p>
							These naming conventions help to ensure that submissions are
							correctly identified and evaluated.
						</p>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">Judging Procedure</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						Step 1: Initial Screening
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p
							style={{
								backgroundColor: "var(--bordo-color)",
								color: "var(--yellow-color)",
								padding: "10px",
								borderRadius: "10px",
								fontWeight: "bold",
							}}
						>
							All entries will undergo an initial screening to ensure tht they
							fulfill the basic entry and submission criteria.
						</p>

						<div>
							<h6 style={{ fontWeight: "bold" }}>
								Eligibility to participate:
							</h6>
							<div>
								<ul>
									<li>
										It will be checked whether the participant is between 18 and
										30 years old and is a national/resident in one of the
										participating countries (Poland, Italy, Spain, Greece,
										Lithuania).
									</li>
								</ul>
							</div>
						</div>

						<div>
							<h6 style={{ fontWeight: "bold" }}>Completeness of the entry:</h6>
							<div>
								<ul>
									<li>
										The image has a{" "}
										<span style={{ fontWeight: "bold" }}>title</span> and
										includes an{" "}
										<span style={{ fontWeight: "bold" }}>author bio</span> with
										a{" "}
										<span style={{ fontWeight: "bold" }}>
											description or story
										</span>
										of the image.
									</li>
									<li>
										The uploaded files are in the{" "}
										<span style={{ fontWeight: "bold" }}>
											required formats{" "}
										</span>
										(photo: <span style={{ fontWeight: "bold" }}>.jpg </span>
										or <span style={{ fontWeight: "bold" }}>.png </span>; 3D
										file: <span style={{ fontWeight: "bold" }}>.stl </span>
										).
									</li>
									<li>
										The image matches the selected{" "}
										<span style={{ textDecoration: "underline" }}>theme</span>.
									</li>
								</ul>
							</div>
						</div>

						<p>
							Only entries that pass this first check will make it to the next
							round.
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						Step 2: Selection of Finalists
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p
							style={{
								backgroundColor: "var(--bordo-color)",
								color: "var(--yellow-color)",
								padding: "10px",
								borderRadius: "10px",
								fontWeight: "bold",
							}}
						>
							Entries will be evaluated by a jury of seven professionals based
							on the following criteria:
						</p>

						<ul>
							<li>
								<span style={{ fontWeight: "bold" }}>Visual Impact</span> (30
								points): The striking and memorable overall effect of the image.
							</li>
							<li>
								<span style={{ fontWeight: "bold" }}>Creativity</span> (30
								points): Originality of composition, lighting and subject
								matter.
							</li>
							<li>
								<span style={{ fontWeight: "bold" }}>Storytelling Ability</span>{" "}
								(30 points): The ability of the photograph and written
								description to convey a story or message.
							</li>
							<li>
								<span style={{ fontWeight: "bold" }}>Technical Skills</span> (10
								points): Evaluation of technical aspects such as image
								composition, focus and use of light or editing.
							</li>
						</ul>

						<p>
							Each criterion is scored from{" "}
							<span style={{ fontWeight: "bold" }}>6 (Fair)</span> to{" "}
							<span style={{ fontWeight: "bold" }}>30 (Excellent)</span> or{" "}
							<span style={{ fontWeight: "bold" }}>2 (Fair)</span> to{" "}
							<span style={{ fontWeight: "bold" }}>10 (Excellent)</span>, with a
							maximum of{" "}
							<span style={{ fontWeight: "bold" }}>100 points possible</span>.
						</p>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">Key Dates and Phases</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						Contest Overview
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							To ensure a smooth participation process, it's important to know
							the important dates and phases of the Move&Act Photo-Voice
							Contest. Below are the most important dates that participants need
							to be aware of.
						</p>

						<Table bordered hover responsive="md" style={{ border: "none" }}>
							<thead>
								<tr>
									<th
										style={{
											backgroundColor: "black",
											color: "#fff",
											border: "none",
										}}
									>
										Phase
									</th>
									<th
										style={{
											backgroundColor: "black",
											color: "#fff",
											border: "none",
										}}
									>
										Action
									</th>
									<th
										style={{
											backgroundColor: "black",
											color: "#fff",
											border: "none",
										}}
									>
										Date
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Submission/ Orientation Phase</td>
									<td>
										Participants prepare their entries, access the contest
										guidelines and resources, and receive personalised support
										if needed.
									</td>
									<td></td>
								</tr>
								<tr>
									<td>Judging Period</td>
									<td>
										The jury reviews all entries and selects the finalists.
									</td>
									<td></td>
								</tr>
								<tr>
									<td>Announcement of the Finalists</td>
									<td>
										The 25 finalists are announced on the project's Social Media
										channels.
									</td>
									<td></td>
								</tr>
								<tr>
									<td>Online Exhibition</td>
									<td>
										The works of the selected finalists are presented on the
										contest platform so that the public can view and vote for
										their favourite works.
									</td>
									<td></td>
								</tr>
								<tr>
									<td>Voting Period</td>
									<td>
										Participants are encouraged to engage, share the news and
										motivate people to vote.
									</td>
									<td></td>
								</tr>
								<tr>
									<td>National Winners: Announcement</td>
									<td>
										The 5 national winners are announced on the contest platform
										and Social Media channels. Each winner is also notified by
										email.
									</td>
									<td></td>
								</tr>
								<tr>
									<td>Award Ceremony</td>
									<td>
										The project partners organise an event in each country and
										present the winners' printed works (lithophane format). The
										winners (are welcome to) attend the event(s) and share their
										experiences.
									</td>
									<td></td>
								</tr>
							</tbody>
						</Table>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">Support</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						Guidelines
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							Step-by-step instructions to help them with technical aspects,
							along with storytelling techniques and other useful information.
						</p>

						<p style={{ fontWeight: "bold", color: "var(--bordo-color)" }}>
							Website: (URL)
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						Email Support
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<p>
							For{" "}
							<span style={{ fontWeight: "bold" }}>personalised guidance</span>,
							participants can contact the official project support team by
							email using the following format for the subject line:
						</p>

						<p
							style={{
								backgroundColor: "var(--yellow-color)",
								padding: "10px",
								borderRadius: "10px",
								fontWeight: "bold",
							}}
							className="text-center"
						>
							[country code]_[enquiry]_[Participant's Name and surname]
						</p>

						<div className="mb-3">
							<h6 style={{ fontWeight: "bold" }}>Example:</h6>
							GR_Query_Georgios Papadopoulos (Greece)
						</div>

						<h6 style={{ fontWeight: "bold" }}>Email: </h6>
						<p
							style={{
								backgroundColor: "var(--bordo-color)",
								color: "var(--yellow-color)",
								padding: "10px",
								borderRadius: "10px",
								fontWeight: "bold",
							}}
							className="text-center"
						>
							moveandact2022@gmail.com
						</p>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">Regulations & Ethics</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						Ethical Considerations
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						Participants must:
						<ul>
							<li>
								<span style={{ fontWeight: "bold" }}>
									respect intellectual property rights
								</span>
								,
							</li>
							<li>
								ensure that{" "}
								<span style={{ fontWeight: "bold" }}>
									consent has been obtained{" "}
								</span>
								from those depicted in the photos, and
							</li>
							<li>
								<span style={{ fontWeight: "bold" }}>follow guidelines</span> on{" "}
								<span style={{ fontWeight: "bold" }}>data protection</span> and
								sensitive issues (click here for detailed information).
							</li>
						</ul>
						<p
							style={{
								backgroundColor: "var(--yellow-color)",
								padding: "10px",
								borderRadius: "10px",
							}}
						>
							<span style={{ fontWeight: "bold" }}>Photo editing</span> and{" "}
							<span style={{ fontWeight: "bold" }}>AI-generated content</span>{" "}
							is <span style={{ fontWeight: "bold" }}>allowed up to 20%</span>{" "}
							and <span style={{ fontWeight: "bold" }}>must be disclosed</span>{" "}
							(e.g. "...this is an AI-generated image").
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						Acceptance of Terms and Conditions
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						By entering, participants{" "}
						<span style={{ fontWeight: "bold", textDecoration: "underline" }}>
							agree to the Contest Rules
						</span>
						, including the <span style={{ fontWeight: "bold" }}>privacy </span>
						and copyright policies, and{" "}
						<span style={{ fontWeight: "bold" }}>
							grant Move&Act the right to use the submitted images{" "}
						</span>{" "}
						for educational and promotional purposes.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6 className="accordion-main-header">Contest Rules</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "900px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header className="accordion-header">
						Submission channel
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<ul>
							<li>
								Entries must be submitted via the official contest channel.
							</li>

							<li>
								Entries submitted via other channels will be disqualified.
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header className="accordion-header">
						Original Work
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<ul>
							<li>The photos must be original and taken by the participant.</li>
							<li>Third party material is not permitted.</li>
							<li>
								The photos must not infringe any intellectual property rights or
								data protection rights.
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header className="accordion-header">
						Photo Alterations
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<ul>
							<li>
								Photos may be altered by{" "}
								<span style={{ fontWeight: "bold" }}>up to 20%</span> (e.g. by
								adding or removing elements).
							</li>
							<li>
								Excessive alterations will result in disqualification and
								exclusion from future contests.
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="3">
					<Accordion.Header className="accordion-header">
						AI-generated Content
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						AI-generated content is{" "}
						<span style={{ fontWeight: "bold" }}>allowed up to 20%</span> of the
						total image. In order to maintain transparency, it must be clearly
						disclosed (e.g. “This is an AI-generated image”).
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="4">
					<Accordion.Header className="accordion-header">
						Judging
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<ul>
							<li>A jury of seven professionals will judge the entries.</li>
							<li>Their decisions are final.</li>
							<li>
								Move&Act reserves the right to disqualify entries that are
								inappropriate or violate the rules.
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="5">
					<Accordion.Header className="accordion-header">
						Data Protection and Consent
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<ul>
							<li>
								All content deemed{" "}
								<span style={{ fontWeight: "bold" }}>inappropriate</span> or
								invasive of privacy will be removed and not considered for the
								contest.
							</li>
							<li>
								For photos featuring{" "}
								<span style={{ fontWeight: "bold" }}>
									young people or minors
								</span>
								, age verification and{" "}
								<span style={{ fontWeight: "bold" }}>explicit consent</span> is
								required. If a submitted photo shows a recognisable minor, a
								declaration of consent{" "}
								<span style={{ fontWeight: "bold" }}>must be provided</span> to
								ensure that the rights of the minor(s)/young person(s) are
								protected.
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="6">
					<Accordion.Header className="accordion-header">
						Use of Photos
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<ul>
							<li>
								The submitted works remain the property of the Move&Act project.
							</li>
							<li>
								By entering, participants agree that their photos/files can be
								used by Move&Act for educational and promotional purposes.
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="7">
					<Accordion.Header className="accordion-header">
						Submission Deadline
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<ul>
							<li>No entries will be accepted after the closing date.</li>
							<li>
								The winners will be notified via the email address provided.
							</li>
							<li>
								If there is no response within three working days, a new winner
								will be selected and the previous winner will forfeit their
								prize.
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="8">
					<Accordion.Header className="accordion-header">
						Legal Restrictions
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						<ul>
							<li>The contest is void where prohibited by law.</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="9">
					<Accordion.Header className="accordion-header">
						Intellectual Property Rights
					</Accordion.Header>
					<Accordion.Body className="accordion-body">
						The participants retain the copyright to their contributions.
						Move&Act reserves the right to use, reproduce and exhibit these
						works in future project outputs and reports, with appropriate
						attribution to the author. This use is in line with the Erasmus+
						objectives of sharing educational content and promoting cultural
						understanding.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h2
				style={{
					fontWeight: "bold",
					cursor: "pointer",
				}}
				className="mt-5 rules-button"
				onClick={() => window.open(rulesPdf, "_blank")}
			>
				Click here to see all rules and regulations
			</h2>
		</div>
	);
};

export default AboutPage;
