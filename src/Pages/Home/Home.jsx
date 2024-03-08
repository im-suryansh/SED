import React from "react";
import "./Home.css";
import ellipse from "../../assets/ellipse.svg";
import ellipse2 from "../../assets/ellipse.svg";
import ellipse1 from "../../assets/ellipse.svg";

const Home = () => {
	const whatsappNumber = "9920573929";
	return (
		<div className="home">
			<div className="home-heading">
				{" "}
				BUILD DIGITAL <span className="stroke">SERVICE</span>
				<br />
				AND PERSONAL BRAND
			</div>
			<img className="ellipse" src={ellipse} alt="" />
			<img className="ellipse1" src={ellipse1} alt="" />
			<img className="ellipse2" src={ellipse2} alt="" />

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

export default Home;
