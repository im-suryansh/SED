import React from "react";
import bluebg from "../../assets/bluebg.png";
import Founderimg from "../../assets/Founder.png";

import "./Founder.css";

const Founder = () => {
	return (
		<div
			className="Founder-page "
			style={{
				display: "flex",
				justifyContent: "center",
				width: "100vw",
			}}
		>
			<div style={{ marginTop: "5rem" }}>
				<img src={Founderimg} alt="" />
				<div className="bluebg">
					<img src={bluebg} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Founder;
