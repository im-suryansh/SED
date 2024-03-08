import React from "react";
import bg from "../../Assets/bg.svg";
import poster from "../../Assets/Facebook.png";
const FacebookAds = () => {
	return (
		<div className="Designer-page">
			<div className="home-heading">Facebook Ads</div>
			<div className="design-box-content">
				Spread the word about your business with Facebook Ads! Let's
				increase brand awareness and drive sales together. Contact us
				today!
			</div>

			<div className="designer-container">
				<div className="designerbox">
					1. Precise audience targeting for specific demographics and
					interests. <br />
					2. Setup diverse campaign types tailored to goals. <br />
					3. Design visually appealing ad creatives. <br />
					4. Optimize budgets and bids for maximum ROI. <br />
					5. Retarget users based on past interactions for increased
					engagement. <br />
				</div>
				<div className="designerbox">
					6. Utilize custom audiences based on website visitors and
					engagement. <br />
					7. Choose ad formats like image, video, carousel, or
					slideshow. <br />
					8. Set budgets and bids for efficient spending. <br />
					9. Utilize automated bidding options for cost-effective
					results. <br />
					10. Remind users of products or services they've shown
					interest in through targeted ads. <br />
				</div>
			</div>
			<h1>
				Boost your business with Facebook Ads! Get more customers and
				website visits. Contact us today to get started!
			</h1>
			<div style={{ width: "100vw", marginTop: "5rem" }}>
				<div
					className="packages-heading2"
					style={{ marginBottom: "3rem" }}
				>
					Achievements tell the story:
				</div>
				<img
					src={bg}
					alt=""
					style={{
						zIndex: "-1",
						position: "absolute",
						left: "25%",
						width: "50%",
					}}
				/>
				<img src={poster} style={{ width: "70vw" }} />
			</div>
		</div>
	);
};

export default FacebookAds;
