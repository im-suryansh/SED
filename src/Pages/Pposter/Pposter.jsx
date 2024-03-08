import React from "react";
// import "./Plinkedin.css";
import bg from "../../Assets/bg.svg";
import poster from "../../Assets/poster.png";
const Pposter = () => {
	return (
		<div style={{ width: "100vw", marginTop: "5rem" }}>
			<div className="packages-heading2" style={{ marginBottom: "3rem" }}>
				Success leaves clues:
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
			<img src={poster} style={{ width: "70vw" }} />
		</div>
	);
};

export default Pposter;
