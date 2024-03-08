import React from "react";
import "./Why.css";
import Whybigcircle from "../../assets/Whybigcircle.svg";
import Whysmallcircle from "../../assets/Whysmallcircle.svg";
import Headline from "../../Components/Headline/Headline";

const Why = () => {
	return (
		<div className="why">
			<img src={Whybigcircle} alt="" className="circle1" />
			<img src={Whysmallcircle} alt="" className="circle2" />
			<div className="why-heading home-heading">
				WHY CHOOSE <span className="stroke">US ?</span>
			</div>
			<div className="text-container">
				<div className="text-box">
					<div className="text-box-heading">Personal Connection</div>
					<div className="text-box-content">
						We cultivate meaningful relationships with agency owners
						and personal brands, fostering a genuine connection that
						goes beyond business.
					</div>
				</div>

				<div className="text-box">
					<div className="text-box-heading">Affordable Price</div>
					<div className="text-box-content">
						Unlock the potential of your business with our
						budget-friendly Marketing & Branding solutions. Elevate
						your brand without breaking the bank!
					</div>
				</div>
				<div className="text-box">
					<div className="text-box-heading">Industry Standard</div>
					<div className="text-box-content">
						We guarantee that our work adheres to industry standards
						and helps elevate your standing within your field.
					</div>
				</div>
				<div className="text-box">
					<div className="text-box-heading">Completely Reliable</div>
					<div className="text-box-content">
						We place full confidence in our clients and their
						businesses, ensuring that our work is executed with
						absolute dedication and commitment.
					</div>
				</div>
			</div>
			<Headline />
		</div>
	);
};

export default Why;
