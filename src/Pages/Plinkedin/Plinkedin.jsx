import React from "react";
import "./Plinkedin.css";
import bg from "../../Assets/bg.svg";
import linkedin from "../../Assets/linkedin.png";
const Plinkedin = () => {
	return (
		<div style={{ width: "100vw", marginTop: "5rem" }}>
			<div className="packages-heading2" style={{ marginBottom: "3rem" }}>
				Performance speaks volumes: LinkedIn
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
			<img src={linkedin} style={{ width: "70vw" }} />
		</div>
	);
};

export default Plinkedin;
