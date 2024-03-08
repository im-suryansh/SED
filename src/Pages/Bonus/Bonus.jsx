import React from "react";
import "./Bonus.css";
import bonus1 from "../../Assets/bonus1.png";
import bonus2 from "../../Assets/bonus2.png";
import bonus3 from "../../Assets/bonus3.png";
import bonus4 from "../../Assets/bonus4.png";
import bonus5 from "../../Assets/bonus5.png";
import bonus6 from "../../Assets/bonus6.png";
import bonus7 from "../../Assets/bonus7.png";
import bonus8 from "../../Assets/bonus8.png";
import bonus9 from "../../Assets/bonus9.png";
import company1 from "../../Assets/company1.png";
import company2 from "../../Assets/company2.png";
import company3 from "../../Assets/company3.png";
import company4 from "../../Assets/company4.png";
import company5 from "../../Assets/company5.png";

const Bonus = () => {
	return (
		<div className="bonus-page">
			<div className="packages-heading">Bonuses We Provide</div>
			<div className="bonus-grid">
				<div className="bonus-card">
					<img src={bonus1} alt="bonus1" />
				</div>
				<div className="bonus-card">
					<img src={bonus2} alt="bonus2" />
				</div>
				<div className="bonus-card">
					<img src={bonus3} alt="bonus3" />
				</div>
				<div className="bonus-card">
					<img src={bonus4} alt="bonus4" />
				</div>
				<div className="bonus-card">
					<img src={bonus5} alt="bonus5" />
				</div>
				<div className="bonus-card">
					<img src={bonus6} alt="bonus6" />
				</div>
				<div className="bonus-card">
					<img src={bonus7} alt="bonus7" />
				</div>
				<div className="bonus-card">
					<img src={bonus8} alt="bonus8" />
				</div>
				<div className="bonus-card">
					<img src={bonus9} alt="bonus9" />
				</div>
			</div>
			<div className="packages-heading2">Companies We Worked With...</div>
      <div className="company-row">
        <img src={company1} alt="company1" />
        <img src={company2} alt="company2" />
        <img src={company3} alt="company3" />
        <img src={company4} alt="company4" />
        <img src={company5} alt="company5" />

      </div>
		</div>
	);
};

export default Bonus;
