import React from "react";
import "./Team.css";
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";
import t4 from "../../assets/t4.png";
import t5 from "../../assets/t5.png";
import t6 from "../../assets/t6.png";
import t7 from "../../assets/t7.png";
import t8 from "../../assets/t8.png";
import t9 from "../../assets/t9.png";
import t10 from "../../assets/t10.png";
import t11 from "../../assets/t11.png";
import t12 from "../../assets/t12.png";

const Team = () => {
	return (
		<div className="team-page">
			<div className="packages-heading"> Meet Our Team</div>
			<div className="team-grid">
				<div className="tcard">
					<div className="tcard-info">
						<div className="tcard-avatar">
							<img src={t1} alt="" srcset="" />
						</div>
						<div className="tcard-title">Jignesh Patel</div>
						<div className="tcard-subtitle">
							Ad Specialist &amp; 12 Years of Experience
						</div>
					</div>
				</div>
				<div className="tcard">
					<div className="tcard-info">
						<div className="tcard-avatar">
							<img src={t2} alt="" srcset="" />
						</div>
						<div className="tcard-title">
							Uzma <br /> <br />
						</div>
						<div className="tcard-subtitle">
							Instagram and LinkedIn marketing &amp; 8 years
							experience
						</div>
					</div>
				</div>
				<div className="tcard">
					<div className="tcard-info">
						<div className="tcard-avatar">
							<img src={t3} alt="" srcset="" />
						</div>
						<div className="tcard-title">
							Nida Bano <br /> <br />
						</div>
						<div className="tcard-subtitle">
							Designer &amp; 5 years of experience
						</div>
					</div>
				</div>
				<div className="tcard">
					<div className="tcard-info">
						<div className="tcard-avatar">
							<img src={t4} alt="" srcset="" />
						</div>
						<div className="tcard-title">
							Saqib <br /> <br />
						</div>
						<div className="tcard-subtitle">
							Video Editor &amp; 4 years of experience
						</div>
					</div>
				</div>
				<div className="tcard">
					<div className="tcard-info">
						<div className="tcard-avatar">
							<img src={t5} alt="" srcset="" />
						</div>
						<div className="tcard-title">
							Saifullah <br /> <br />
						</div>
						<div className="tcard-subtitle">
							Website Designer &amp; 4 years of experience
						</div>
					</div>
				</div>
				<div className="tcard">
					<div className="tcard-info">
						<div className="tcard-avatar">
							<img src={t9} alt="" srcset="" />
						</div>
						<div className="tcard-title">Shreya Sharma</div>
						<div className="tcard-subtitle">
							Designer &amp; 4 years of experience
						</div>
					</div>
				</div>
				<div className="tcard">
					<div className="tcard-info">
						<div className="tcard-avatar">
							<img src={t8} alt="" srcset="" />
						</div>
						<div className="tcard-title">Suryansh Raj Tripathi</div>
						<div className="tcard-subtitle">
							Web Developer &amp; 4 years of experience
						</div>
					</div>
				</div>
				<div className="tcard">
					<div className="tcard-info">
						<div className="tcard-avatar">
							<img src={t6} alt="" srcset="" />
						</div>
						<div className="tcard-title">Harsh Madan</div>
						<div className="tcard-subtitle">
							Video Editor &amp; 4 years of experience
						</div>
					</div>
				</div>
				<div className="tcard">
					<div className="tcard-info">
						<div className="tcard-avatar">
							<img src={t7} alt="" srcset="" />
						</div>
						<div className="tcard-title">
							Aashif Ali
							<br /> <br />
						</div>
						<div className="tcard-subtitle">
							Funnel Builder &amp; 3 years of experience
						</div>
					</div>
				</div>
				<div className="tcard">
					<div className="tcard-info">
						<div className="tcard-avatar">
							<img src={t12} alt="" srcset="" />
						</div>
						<div className="tcard-title">Tanvi Bhutani</div>
						<div className="tcard-subtitle">
							Content Writer &amp; 3 years of experience
						</div>
					</div>
				</div>
				<div className="tcard">
					<div className="tcard-info">
						<div className="tcard-avatar">
							<img src={t10} alt="" srcset="" />
						</div>
						<div className="tcard-title">Akshata Kelkeri</div>
						<div className="tcard-subtitle">
							Virtual assistance &amp; 2 years of experience
						</div>
					</div>
				</div>
				<div className="tcard">
					<div className="tcard-info">
						<div className="tcard-avatar">
							<img src={t11} alt="" srcset="" />
						</div>
						<div className="tcard-title">Aryan Wadekar</div>
						<div className="tcard-subtitle">
							Virtual assistance &amp; 2 years of experience
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
