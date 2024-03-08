import React from "react";
import test1 from "../../assets/test1.mp4";
import test2 from "../../assets/test2.mp4";
import test3 from "../../assets/test3.mp4";
import test4 from "../../assets/test4.mp4";
// import test5 from "../../assets/test5.mov";
import test6 from "../../assets/test6.mp4";
import test7 from "../../assets/test7.mp4";
import "./Test.css";

const Test = () => {
	return (
		<div className="test-page">
			<div className="home-heading" style={{ margin: "20px" }}>
				What Our Clients Says About Us?
			</div>
			<div className="samples">
				<video src={test1} autoPlay muted loop controls></video>
				<video src={test2} autoPlay muted loop controls></video>
				<video src={test3} autoPlay muted loop controls></video>
				<video src={test4} autoPlay muted loop controls></video>
				{/* <video src={test5} autoPlay muted loop></video> */}
				<video src={test6} autoPlay muted loop controls></video>
				<video src={test7} autoPlay muted loop controls></video>
			</div>
		</div>
	);
};

export default Test;
