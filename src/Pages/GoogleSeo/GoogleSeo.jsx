import React from "react";
import bg from "../../Assets/bg.svg";
import poster from "../../Assets/GoogleSeo.png";
import w1 from "../../assets/gmb1.png";
import w2 from "../../assets/gmb2.png";
import w3 from "../../assets/gmb3.png";
const GoogleSeo = () => {
	return (
		<div className="Designer-page">
			<div className="home-heading">
				Google Seo and Google My Business
			</div>
			<div className="design-box-content">
				Increase your online visibility with Google My Business! We'll
				set up your listing so customers can easily find and contact
				you. Let's get started!
			</div>

			<div className="designer-container">
				<div className="designerbox">
					<h2>Business Listing Management:</h2>
					1. Create and manage your business listing with accurate
					information. <br />
					2. Update details like business hours, contact info, and
					address. <br />
					- Local SEO Optimization: <br />
					3. Optimize GMB listing with relevant keywords and
					categories. <br />
					4. Improve visibility in local search results and Google
					Maps. <br />
				</div>
				<div className="designerbox">
					<h2>Customer Reviews Management:</h2>
					5. Monitor and respond to customer reviews promptly. <br />
					6. Engage with customers to address concerns and thank
					positive reviews. <br />
					- Google Maps Integration: <br />
					7. Ensure accurate business location on Google Maps. <br />
					8. Provide directions and map view for easy navigation.{" "}
					<br />
				</div>
			</div>
			{/* <h1 style={{ width: "80%", marginTop: "5rem" }}>
				Ready to grow your business? Contact us today to start boosting
				your online presence with Google Ads!
			</h1> */}
			<div
				className="designerbox"
				style={{
					width: "40%",
					fontSize: "18px",
					textAlign: "left",
					marginTop: "5rem",
				}}
			>
				<h2>Insights and Analytics: </h2>
				9. Access data on how customers find and interact with your
				listing.
				<br /> 10. Track metrics like views, clicks, calls, and
				directions requests for performance measurement.
			</div>
			<h1 style={{ width: "80%", marginTop: "5rem" }}>
				Boost your business visibility on Google with our GMB services!
				Don't miss out on potential customers – contact us today to get
				started and ensure your business shines online!
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
			<div className="ScrollHover-page">
				<div className="ScrollHover">
					<div className="screen">
						<div
							className="viewport"
							style={{
								backgroundImage: `url(${w1})`,
							}}
						></div>
					</div>
				</div>
				<div className="ScrollHover">
					<div className="screen">
						<div
							className="viewport"
							style={{
								backgroundImage: `url(${w2})`,
							}}
						></div>
					</div>
				</div>
				<div className="ScrollHover">
					<div className="screen">
						<div
							className="viewport"
							style={{
								backgroundImage: `url(${w3})`,
							}}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GoogleSeo;
