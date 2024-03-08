import React from "react";
import "./SocialMedia.css";

const SocialMedia = () => {
	return (
		<div className="Designer-page">
			<div className="home-heading">
				Social Media Management: <br /> Instagram and LinkedIn
			</div>
			<div className="design-box-content">
				Outsource your social media management to our expert team for
				effective audience engagement and growth. We craft tailored
				strategies and engaging content to boost your presence on
				platforms like Instagram and LinkedIn.
			</div>

			<div className="designer-container">
				<div className="designerbox">
					1. Instagram Post Creation & Caption Writing <br />
					2. Post Scheduling for Optimal Engagement <br />
					3. Proactive Engagement with Followers <br />
					4. Strategic Hashtag Utilization <br />
					5. Performance Analysis & Reporting
				</div>
				<div className="designerbox">
					6. Compelling Instagram Stories <br />
					7. Effective Reels Management along with eye catching Cover{" "}
					<br />
					8. Collaboration with Influencers <br />
					9. Profile Optimization on LinkedIn <br />
					10. Targeted Lead Generation Strategies
				</div>
			</div>
			<h1 style={{ width: "60vw", marginTop: "3rem" }}>
				Ready to supercharge your social media presence? Let's boost
				your posts or create eye-catching ads together!
			</h1>
		</div>
	);
};

export default SocialMedia;
