import React from "react";
import Headline from "../../Components/Headline/Headline";
import "./ServiceList.css";

const ServiceList = () => {
	return (
		<div className="ServiceList-page">
			<h1 className="home-heading">
				Here's a concise list of services we offer:
			</h1>
			<div className="row1">
				<button
					className="home-button"
					style={{
						width: "max-content",
					}}
				>
					<span
						style={{
							padding: "2rem",
							fontSize: "28px",
							font: "montserrat",
							fontWeight: "700",
						}}
					>
						1. Thumbnails
					</span>
				</button>
				<button
					className="home-button"
					style={{
						width: "max-content",
					}}
				>
					<span
						style={{
							padding: "2rem",
							fontSize: "28px",
							font: "montserrat",
							fontWeight: "700",
						}}
					>
						2. Reel/Short Covers
					</span>
				</button>
			</div>
			<div className="row1">
				<button
					className="home-button"
					style={{
						width: "max-content",
					}}
				>
					<span
						style={{
							padding: "2rem",
							fontSize: "28px",
							font: "montserrat",
							fontWeight: "700",
						}}
					>
						3. Ads Creative
					</span>
				</button>
				<button
					className="home-button"
					style={{
						width: "max-content",
					}}
				>
					<span
						style={{
							padding: "2rem",
							fontSize: "28px",
							font: "montserrat",
							fontWeight: "700",
						}}
					>
						4. Logo Design
					</span>
				</button>
				<button
					className="home-button"
					style={{
						width: "max-content",
					}}
				>
					<span
						style={{
							padding: "2rem",
							fontSize: "28px",
							font: "montserrat",
							fontWeight: "700",
						}}
					>
						5. Brochure Design
					</span>
				</button>
			</div>
			<div className="row1">
				<button
					className="home-button"
					style={{
						width: "max-content",
					}}
				>
					<span
						style={{
							padding: "2rem",
							fontSize: "28px",
							font: "montserrat",
							fontWeight: "700",
						}}
					>
						6. Flyer Design
					</span>
				</button>
				<button
					className="home-button"
					style={{
						width: "max-content",
					}}
				>
					<span
						style={{
							padding: "2rem",
							fontSize: "28px",
							font: "montserrat",
							fontWeight: "700",
						}}
					>
						7. Poster Design
					</span>
				</button>
			</div>
			<div className="row1">
				<button
					className="home-button"
					style={{
						width: "max-content",
					}}
				>
					<span
						style={{
							padding: "2rem",
							fontSize: "28px",
							font: "montserrat",
							fontWeight: "700",
						}}
					>
						8. Business Card Design
					</span>
				</button>
				<button
					className="home-button"
					style={{
						width: "max-content",
					}}
				>
					<span
						style={{
							padding: "2rem",
							fontSize: "28px",
							font: "montserrat",
							fontWeight: "700",
						}}
					>
						9. Banners
					</span>
				</button>
				<button
					className="home-button"
					style={{
						width: "max-content",
					}}
				>
					<span
						style={{
							padding: "2rem",
							fontSize: "28px",
							font: "montserrat",
							fontWeight: "700",
						}}
					>
						10. Mockups
					</span>
				</button>
			</div>
			<Headline />
		</div>
	);
};

export default ServiceList;
