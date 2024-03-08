import React from 'react'
import './Headline.css'

const Headline = () => {
  return (
    <section className="arya stark">
    <div
        className="sheet center middle"
        style={{ padding: "55px 0px 0px" }}
    >
        <div className="tile" style={{ transform: "none" }}>
            <div
                className="copy center black"
                style={{ width: "1366px !important" }}
            >
                {/* <marquee behavior="scroll" direction="left">
<h1 style={{ fontSize: "100px" }}>STRONG. DURABLE. BUILT TO LAST.</h1>
</marquee> */}
                <div className="marquee">
                    <div>
                        <span>
                            SKYROCKET INFLUENCE VISION TO VIRALITY.
                        </span>
                        <span>
                            SKYROCKET INFLUENCE VISION TO VIRALITY.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Headline