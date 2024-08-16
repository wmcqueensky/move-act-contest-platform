import { Container, Accordion } from "react-bootstrap";
import "./styles.css";

const AboutPage = () => {
	return (
		<div className="text-center">
			<Container fluid className="about-image text-center x">
				<h1 className="welcome-header display-1">
					EVERYTHING YOU NEED TO <br />
					KNOW ABOUT THE CONTEST
				</h1>
			</Container>

			<h4 className="about-introduction mb-5">
				Welcome to the Move&Act Photo-Voice Contest, part of the Erasmus+
				project "Move & Act - Empower Youth through Entrepreneurial and Digital
				Skills."
			</h4>

			<h6>General Information</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "800px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header>
						What is the The Move&Act Photo-Voice Contest?
					</Accordion.Header>
					<Accordion.Body>
						The Move&Act Photo-Voice Contest is part of the Erasmus+ project
						"Move & Act- Empower Youth through Entrepreneurial and Digital
						Skills" This initiative aims to develop digital, creative and
						entrepreneurial skills among young people, especially those who are
						at risk due to disabilities, migration status or as NEETs (Not in
						Education, Employment, or Training). The contest provides a platform
						for participants to express their challenges and experiences through
						photography, thereby improving their employability, fostering a
						European identity and encouraging interaction with the local,
						national and European community.
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header>Purpose of the Contest</Accordion.Header>
					<Accordion.Body>
						Photo-Voice is a qualitative research method that combines
						photography and storytelling to document and address social issues.
						This method was developed in the 1990s by Caroline Wang and Mary Ann
						Burris and enables communities to share their experiences and make
						their voices heard. Participants are invited to take photos that
						reflect their experiences, challenges or perspectives on specific
						topics such as poverty, unemployment, education, environmental
						issues and more. These photos will be accompanied by narratives that
						contextualise the images and provide deeper insight into community
						issues.
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header>Themes of the Contest</Accordion.Header>
					<Accordion.Body>
						Participants must submit photos that fit one of the following
						themes:
						<ul>
							<li>Poverty</li>

							<li>Unemployment</li>

							<li>Education</li>

							<li>
								Environment (protection and/or degradation of biodiversity)
							</li>

							<li>Problems in Europe</li>

							<li>Accessibility</li>

							<li>Realities of the different generations</li>

							<li>
								Introspective images (e.g. self-portraits, LGBTQ+, mental
								health)
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6>Admission Criteria</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "800px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Age</Accordion.Header>
					<Accordion.Body>
						Eligible participants must be between 18 and 30 years old at the
						start of the contest.
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header>Nationality</Accordion.Header>
					<Accordion.Body>
						Eligible participants must reside in one of the participating
						European countries: Poland, Italy, Spain, Greece and Lithuania.
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header>Traits</Accordion.Header>
					<Accordion.Body>
						Eligible participants must be interested in raising public awareness
						of local community challenges.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6>Criteria for Submission</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "800px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Technical Requirements</Accordion.Header>
					<Accordion.Body>
						<ul>
							<li>
								Only 1 photo must be submitted in .jpg or .png format with a
								resolution of 1920x1080 pixels.
							</li>
							<li>
								A (1) 3D file (.stl) of the photo should also be submitted (no
								larger than 10 MB).
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header>Submission Method</Accordion.Header>
					<Accordion.Body>
						Entries should be submitted via email and photos should be sent via
						a link to a shared drive folder.
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header>Accompanying Information</Accordion.Header>
					<Accordion.Body>
						Include a title (up to 5 words), a short bio of the author (250-350
						words) and a brief description of the photo (250-500 words). The
						message must also explicitly state which of the competition themes
						the photo belongs to.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6>Course of Contest</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "800px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Submission Phase</Accordion.Header>
					<Accordion.Body>
						<p>
							Participants must submit their photo (.jpg or .png) and their .stl
							file by email [WHEN].
						</p>

						<p>
							In this phase, participants prepare their entries, access the
							contest guidelines and resources, and receive personalised support
							if needed.
						</p>

						<p>
							The key dates for judging and award announcements will be
							communicated to participants via the project's official channels:
							[Facebook , Instagram and WEBSITE].
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header>Judging Phase</Accordion.Header>
					<Accordion.Body>
						<p>
							The jury will select 5 finalists from each participating country,
							resulting in a total of 25 finalist photos. The finalists will be
							announced via the official channels of the project: [Facebook ,
							Instagram and WEBSITE/platform]
						</p>

						<p>
							These 25 photos will be uploaded to [the platform] and showcased
							as part of the contest's online exhibition.
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header>Photo-Voice Exhibition</Accordion.Header>
					<Accordion.Body>
						The (25) finalists' works will be presented in the online exhibition
						on this website in the "Works" section.
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="3">
					<Accordion.Header>Voting Phase</Accordion.Header>
					<Accordion.Body>
						<p>
							Anyone with access to the contest platform can participate in
							voting. Each voter can cast one vote for their favorite work from
							each participating country. The public voting period will take
							place during [specified voting period].
						</p>

						<p>
							The 5 winners will be determined based on the highest number of
							votes received.
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="4">
					<Accordion.Header>Prizes and Awards</Accordion.Header>
					<Accordion.Body>
						<p>5 winners will receive recognition for their entries.</p>

						<p>
							The winning photo from each country (Poland, Italy, Spain, Greece,
							and Lithuania) will be specially recognised by being 3D printed as
							a lithophane and exhibited during national events. These events
							will celebrate the culmination of the project and the contest.
						</p>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6>Instructions for Submitting Entries</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "800px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Email Contact</Accordion.Header>
					<Accordion.Body>
						<p>
							In order to be eligible to participate and avoid disqualification,
							participants must adhere to the following guidelines when
							submitting their entries by email:
						</p>

						<p>moveandact2022@gmail.com</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header>Email Subject</Accordion.Header>
					<Accordion.Body>
						<p>
							Participants must use the following format for the subject of
							their email:
						</p>

						<p>
							[country code]_[contest entry]_[participant's name and surname]
						</p>

						<p>
							Country codes: Spain: ES Greece: GR Lithuania: LT Poland: PL
							Italy: IT
						</p>

						<p>
							Example: ES_Contest Entry_Manuel García (for participants from
							Spain) IT_Contest Entry_Giovanna Russo (for participants from
							Italy)
						</p>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>File Submission</Accordion.Header>
					<Accordion.Body>
						<p>
							The files, i.e. the photo and .stl file, should be uploaded to a
							Google Drive folder. The link to this folder should be included in
							the email and shared with the email:
						</p>

						<p>moveandact2022@gmail.com</p>

						<p>The files must be named in the following format:</p>
						<p>[country code]_[file format]_[participant's name and surname]</p>

						<p>
							File codes: For photos: use "jpg" or "png" For .stl files (3D
							models): "stl"
						</p>

						<p>
							Example: IT_jpg_Giovanna Russo (for a photo submission from Italy)
							LT_stl_Emiljia Kazlauskaite (for the submission of an .stl file
							from Lithuania)
						</p>

						<p>
							These naming conventions help to ensure that submissions are
							correctly identified and evaluated.
						</p>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6>Key dates and phases</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "800px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Contest Overview</Accordion.Header>
					<Accordion.Body>
						Learn about the contest, its purpose, and what you can expect by
						participating.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6>Support</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "800px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Guidelines</Accordion.Header>
					<Accordion.Body>
						<p>
							Step-by-step instructions to help them with technical aspects,
							along with storytelling techniques and other useful information.
						</p>

						<p>Website: (URL)</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header>Email Support</Accordion.Header>
					<Accordion.Body>
						<p>
							For personalised guidance, participants can contact the official
							project support team by email using the following format for the
							subject line:
						</p>

						<p>[country code]_[enquiry]_[Participant's Name and surname]</p>

						<p>Example: GR_Query_Georgios Papadopoulos (Greece)</p>

						<p>Email: moveandact2022@gmail.com</p>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6>Regulations & Ethics</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "800px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Ethical Considerations</Accordion.Header>
					<Accordion.Body>
						Participants must:
						<ul>
							<li>respect intellectual property rights,</li>
							<li>
								ensure that consent has been obtained from those depicted in the
								photos, and
							</li>
							<li>
								follow guidelines on data protection and sensitive issues (click
								here for detailed information).
							</li>
						</ul>
						<p>
							Photo editing and AI-generated content is allowed up to 25% and
							must be disclosed (e.g. "...this is an AI-generated image").
						</p>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header>
						Acceptance of Terms and Conditions
					</Accordion.Header>
					<Accordion.Body>
						By entering, participants agree to the Contest Rules, including the
						privacy and copyright policies, and grant Move&Act the right to use
						the submitted images for educational and promotional purposes.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<h6>Contest Rules</h6>
			<Accordion
				className="text-left mb-5"
				style={{ maxWidth: "800px", margin: "0 auto" }}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Submission channel</Accordion.Header>
					<Accordion.Body>
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
					<Accordion.Header>Original Work</Accordion.Header>
					<Accordion.Body>
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
					<Accordion.Header>Photo Alterations</Accordion.Header>
					<Accordion.Body>
						<ul>
							<li>
								Photos may be altered by up to 20% (e.g. by adding or removing
								elements).
							</li>
							<li>
								TExcessive alterations will result in disqualification and
								exclusion from future contests.
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="3">
					<Accordion.Header>AI-generated Content</Accordion.Header>
					<Accordion.Body>
						AI-generated content is allowed up to 20% of the total image. In
						order to maintain transparency, it must be clearly disclosed (e.g.
						“This is an AI-generated image”).
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="4">
					<Accordion.Header>Judging</Accordion.Header>
					<Accordion.Body>
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
					<Accordion.Header>Data Protection and Consent:</Accordion.Header>
					<Accordion.Body>
						<ul>
							<li>
								All content deemed inappropriate or invasive of privacy will be
								removed and not considered for the contest.
							</li>
							<li>
								For photos featuring young people or minors, age verification
								and explicit consent is required. If a submitted photo shows a
								recognisable minor, a declaration of consent must be provided to
								ensure that the rights of the minor(s)/young person(s) are
								protected.
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="6">
					<Accordion.Header>Use of Photos</Accordion.Header>
					<Accordion.Body>
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
					<Accordion.Header>Submission Deadline</Accordion.Header>
					<Accordion.Body>
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
					<Accordion.Header>Legal Restrictions</Accordion.Header>
					<Accordion.Body>
						<ul>
							<li>The contest is void where prohibited by law.</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="9">
					<Accordion.Header>Intellectual Property Rights:</Accordion.Header>
					<Accordion.Body>
						The participants retain the copyright to their contributions.
						Move&Act reserves the right to use, reproduce and exhibit these
						works in future project outputs and reports, with appropriate
						attribution to the author. This use is in line with the Erasmus+
						objectives of sharing educational content and promoting cultural
						understanding.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			{/* Final Header */}
			<h2 className="mt-5">Click here to see all rules and regulations</h2>
		</div>
	);
};

export default AboutPage;
