import React from "react";
// import "./Plinkedin.css";
import bg from "../../Assets/bg.svg";
import instagram from "../../Assets/instagram.png";
const Pinstagram = () => {
	return (
		<div style={{ width: "100vw", marginTop: "5rem" }}>
			<div className="packages-heading2" style={{ marginBottom: "3rem" }}>
				Results are the fruits of labor: Instagram
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
			<img src={instagram} style={{ width: "70vw" }} />
		</div>
	);
};

export default Pinstagram;
