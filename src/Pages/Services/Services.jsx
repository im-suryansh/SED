import React from "react";
import "./Services.css";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import { Link } from "react-router-dom";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";
import img9 from "../../assets/shopifylogo.jpg";
import img10 from "../../assets/10.png";
const Services = () => {
	return (
		<div className="Service-page">
			<h1 className="UsVsOthers-heading">
				Services <span className="stroke">We</span> Provide
			</h1>
			<div className="service-card-box">
				<div className="service-card">
					<Link to="/Designer">
						<div className="service-card2">
							<img src={img3} alt="" />
							<p
								style={{
									color: "white",
									textDecorationLine: "none",
								}}
							>
								Professional <br />{" "}
								<span
									style={{
										fontWeight: "bold",
										color: "white",
										textDecorationLine: "none",
									}}
								>
									Graphic Designer
								</span>
							</p>
						</div>
					</Link>
				</div>

				<div className="service-card">
					<Link to="/SocialMedia">
						<div className="service-card2">
							<img src={img7} alt="" />
							<p
								style={{
									color: "white",
									textDecorationLine: "none",
								}}
							>
								Social Media Management
								<br />{" "}
								<span
									style={{
										fontWeight: "bold",
										color: "white",
										textDecorationLine: "none",
									}}
								>
									LinkedIN
								</span>
							</p>
						</div>
					</Link>
				</div>
				<div className="service-card">
					<Link to="/SocialMedia">
						<div className="service-card2">
							<img src={img5} alt="" />
							<p
								style={{
									color: "white",
									textDecorationLine: "none",
								}}
							>
								Social Media Management
								<br />{" "}
								<span
									style={{
										fontWeight: "bold",
										color: "white ",
										textDecorationLine: "none",
									}}
								>
									Instagram
								</span>
							</p>
						</div>
					</Link>
				</div>
				<div className="service-card">
					<Link to="/VideoEditor">
						<div className="service-card2">
							<img src={img6} alt="" />
							<p
								style={{
									color: "white",
									textDecorationLine: "none",
								}}
							>
								Long And Short
								<br />{" "}
								<span
									style={{
										fontWeight: "bold",
										color: "white ",
										textDecorationLine: "none",
									}}
								>
									Video Editing
								</span>
							</p>
						</div>
					</Link>
				</div>
				<div className="service-card">
					<Link to="/Website">
						<div className="service-card2">
							<img src={img4} alt="" />
							<p
								style={{
									color: "white",
									textDecorationLine: "none",
								}}
							>
								Website
								<br />{" "}
								<span
									style={{
										fontWeight: "bold",
										color: "white ",
										textDecorationLine: "none",
									}}
								>
									Design And Development
								</span>
							</p>
						</div>
					</Link>
				</div>
				<div className="service-card">
					<Link to="/Ui">
						<div className="service-card2">
							<img src={img10} alt="" />
							<p style={{
									color: "white",
									textDecorationLine: "none",
								}}>
								UI/UX <br />{" "}
								<span 	style={{
										fontWeight: "bold",
										color: "white ",
										textDecorationLine: "none",
									}}>
									Designs
								</span>
							</p>
						</div>
					</Link>
				</div>
				<div className="service-card">
					<Link to="/FacebookAds">
						<div className="service-card2">
							<img src={img2} alt="" />
							<p style={{
									color: "white",
									textDecorationLine: "none",
								}}>
								Facebook
								<br />{" "}
								<span 	style={{
										fontWeight: "bold",
										color: "white ",
										textDecorationLine: "none",
									}}>Ads</span>
							</p>
						</div>
					</Link>
				</div>
				<div className="service-card">
					<Link to="/GoogleAds">
						<div className="service-card2">
							<img src={img1} alt="" />
							<p style={{
									color: "white",
									textDecorationLine: "none",
								}}>
								Google <br />{" "}
								<span 	style={{
										fontWeight: "bold",
										color: "white ",
										textDecorationLine: "none",
									}}>Ads</span>
							</p>
						</div>
					</Link>
				</div>
				<div className="service-card">
					<Link to="/GoogleSeo">
						<div className="service-card2">
							<img src={img8} alt="" />
							<p style={{
									color: "white",
									textDecorationLine: "none",
								}}>
								Google Seo And
								<br />{" "}
								<span 	style={{
										fontWeight: "bold",
										color: "white ",
										textDecorationLine: "none",
									}}>
									Google My Business
								</span>
							</p>
						</div>
					</Link>
				</div>
				<div className="service-card">
					<Link to="/Shopify">
						<div className="service-card2">
							<img
								src={img9}
								alt=""
								style={{ marginTop: "5rem" }}
							/>
							<p style={{
									color: "white",
									textDecorationLine: "none",
								}}>
								Shopify <br />{" "}
								<span 	style={{
										fontWeight: "bold",
										color: "white ",
										textDecorationLine: "none",
									}}>
									Services
								</span>
							</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Services;
