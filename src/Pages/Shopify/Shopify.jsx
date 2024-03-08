import React from "react";
import w1 from "../../assets/sp1.png";
import bg from "../../Assets/bg.svg";
import w2 from "../../assets/sp2.png";
import w3 from "../../assets/sp3.png";

const Shopify = () => {
	return (
		<div className="Designer-page">
			<div className="home-heading">Shopify Services</div>
			<div className="design-box-content">
				Elevate your online store with our Shopify services! From setup
				to customization, we'll create a seamless shopping experience
				for your customers. Let's make selling online easy and enjoyable
			</div>

			<div className="designer-container">
				<div className="designerbox">
					1. Start or enhance your online store with our Shopify
					services. <br />
					2. Create a beautiful and user-friendly online store design.{" "}
					<br />
					3. Showcase your products effectively to attract customers.{" "}
					<br />
					4. Set up your store, customize the design, and add
					products. <br />
				</div>
				<div className="designerbox">
					5. Ensure secure payment options for hassle-free
					transactions. <br />
					6. Our goal is to make selling online easy and enjoyable for
					you. <br />
					7. Focus on growing your business while we handle the
					technical aspects. <br />
					<br />
				</div>
			</div>
			{/* <h1 style={{ width: "80%", marginTop: "5rem" }}>
        Ready to grow your business? Contact us today to start boosting
        your online presence with Google Ads!
    </h1> */}

			<h1 style={{ width: "80%", marginTop: "5rem" }}>
				Launch your online store now with our Shopify services! Contact
				us to get started and make selling online a breeze!
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
				{/* <img src={poster} style={{ width: "70vw" }} /> */}
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

export default Shopify;
