import React from "react";
import "./VideoEditor.css";
import v1 from "../../Assets/v1.mp4";
import v2 from "../../Assets/v2.mp4";
import v3 from "../../Assets/v3.mp4";
import v4 from "../../Assets/v4.mp4";
import v5 from "../../Assets/v5.mp4";
import v6 from "../../Assets/v6.mp4";
import v7 from "../../Assets/v7.mp4";
import v8 from "../../Assets/v8.mp4";
import v9 from "../../Assets/v9.mp4";
import v10 from "../../Assets/v10.mp4";

const VideoEditor = () => {
	return (
		<div className="Designer-page">
			<div className="home-heading">Long- Short Video Editing</div>
			<div className="design-box-content">
				Allow us to transform your concepts into captivating video
				content. Our team of creatives is dedicated to bringing your
				narrative to vivid life on screen, all while accommodating your
				budget and specific requirements.
			</div>
			<div className="designer-container">
				<div className="designerbox">
					1. Footage organization: Sorting through raw footage for
					usable clips. <br />
					2. Arranging clips logically to convey a cohesive message.{" "}
					<br />
					3. Trimming and cutting to remove unwanted sections and
					maintain flow. <br />
					4. Adding transitions for smooth scene changes. <br />
					5. Inserting text overlays and designing animated titles.
				</div>
				<div className="designerbox">
					6. Color correction and grading for visual enhancement.{" "}
					<br />
					7. Audio editing: Mixing, balancing, and adding background
					sound. <br />
					8. Incorporating special effects and visual enhancements.{" "}
					<br />
					9. Stabilizing shaky footage and correcting distortions.{" "}
					<br />
					10. Editing voice recordings for clarity and volume
					adjustment.
				</div>
			</div>
			<h1>Transforming footage into magic. Let's create together!</h1>
			<div className="samples">
				<video src={v1} autoPlay muted loop controls></video>
				<video src={v2} autoPlay muted loop controls></video>
				<video src={v3} autoPlay muted loop controls></video>
				<video src={v4} autoPlay muted loop controls></video>
				<video src={v5} autoPlay muted loop controls></video>
				{/* <video src={v6} autoPlay muted loop controls></video> */}
				<video src={v7} autoPlay muted loop controls></video>
				<video src={v8} autoPlay muted loop controls></video>
				<video src={v9} autoPlay muted loop controls></video>
				<video src={v10} autoPlay muted loop controls></video>
			</div>
		</div>
	);
};

export default VideoEditor;
