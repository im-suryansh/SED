import React from "react";
import "./Process.css";
import ProcessCard from "../../Components/AnimatedCounter/ProcessCard/ProcessCard";
import Headline from "../../Components/Headline/Headline";

const Process = () => {
	return (
		<div className="process-page">
			<h1 className="UsVsOthers-heading">Process We Follow</h1>
			<ProcessCard />
      <Headline />
		</div>
	);
};

export default Process;
