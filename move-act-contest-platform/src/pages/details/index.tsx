import Details from "../../components/details";
import imageSrc from "./images/card-image-1.png";
import stlFileSrc from "./stl/card-image-2.png";

const DetailsPage = () => {
	return (
		<Details
			image={imageSrc}
			title="Sample Title"
			participantName="John Doe"
			category="Sample Category"
			description="This is a sample description of the work. It includes details about the project and other relevant information."
			stlFile={stlFileSrc}
		/>
	);
};

export default DetailsPage;
