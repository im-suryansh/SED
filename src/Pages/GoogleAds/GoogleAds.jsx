import React from "react";
import bg from "../../Assets/bg.svg";
import poster from "../../Assets/GoogleAds.png";
const GoogleAds = () => {
	return (
		<div className="Designer-page">
			<div className="home-heading">Google Ads</div>
			<div className="design-box-content">
				Increase your online visibility with Google My Business! We'll
				set up your listing so customers can easily find and contact
				you. Let's get started!
			</div>

			<div className="designer-container">
				<div className="designerbox">
					1. Keyword Research: Identifying effective keywords.<br />
2. Ad Campaign Setup: Tailored campaigns for business goals.<br />
3. Ad Copywriting: Compelling ad content creation.<br />
4. Budget Management: Control and monitor ad spending.<br />
5. Campaign Optimization: Continuous improvement of ad performance.

 <br />
				</div>
				<div className="designerbox">
				6. Targeting Optimization <br />
7. Ad Extensions<br />
8. Bid Management<br />
9. Performance Analysis<br />
10. Conversion Tracking<br />
					<br />
				</div>
			</div>
			<h1 style={{ width: "80%", marginTop: "5rem" }}>
				Ready to grow your business? Contact us today to start boosting
				your online presence with Google Ads!
			</h1>
			{/* <div className="desigenrbox">
				- Insights and Analytics: <br /> 9. Access data on how customers
				find and interact with your listing.
				<br /> 10. Track metrics like views, clicks, calls, and
				directions requests for performance measurement.
			</div> */}
			{/* <h1>
				Boost your business visibility on Google with our GMB services!
				Don't miss out on potential customers – contact us today to get
				started and ensure your business shines online!
			</h1> */}
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

export default GoogleAds;
