import React from "react";

import "./BookPage.css";
const BookPage = () => {
	const whatsappNumber = "9920573929";
	return (
		<div className="BookPage">
			<h1
				className="home-heading"
				style={{ color: "linear(0deg, #2954a3, #61dea2)" }}
			>
				Book A Free Consultation Call Today
			</h1>
			<div className="BookPage-text">
				<h2>
					Schedule a complimentary consultation to discuss the
					tailored services your brand and business need for optimal
					growth and success. Unlock the following benefits by booking
					your free call:
				</h2>
				<p>
					1. Strategic Insights: Gain valuable insights into
					customized solutions that align with your brand objectives
					and business goals. <br /> 2. Personalized Solutions:
					Explore tailored services designed to address the specific
					needs and challenges of your brand, ensuring a unique and
					effective approach. <br /> 3. Efficient Resource Allocation:
					Maximize your resources by leveraging our expertise to
					streamline processes and enhance overall efficiency in your
					business operations. Book your free consultation now and
					take the first step towards elevating your brand to new
					heights.
				</p>
			</div>
			<div className="home-buttons">
				<button className="home-button">
					<a
						href={`https://wa.me/${whatsappNumber}`}
						className="support-button"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							// border: "2px solid red",
							width: "1002px",
							textDecoration: "none",
							color: "white",
							height: "50px",
							padding: "10px 34px",
						}}
					>
						Chat with us
						{/* <FaWhatsapp /> */}
					</a>
				</button>
				<button className="home-button">
					<a
						href="https://forms.gle/4cPprvcCHXZJJaUZ9"
						target="_blank"
						style={{
							// border: "2px solid red",
							width: "1002px",
							textDecoration: "none",
							color: "white",
							height: "50px",
							padding: "10px 34px",
						}}
					>
						Book call
					</a>
				</button>
			</div>
		</div>
	);
};

export default BookPage;
