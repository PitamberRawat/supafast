import React from "react";
import "./HowItWorks.css";
import ProblemTitle from "./ProblemTitle";
import Problem from "./Problem";

const HowItWorks = () => {
  return (
    <div className="hiw">
      <div className="hiw-container">
        <div className="tools" style={{ marginBottom: "-30px" }}>
          <div className="tools-container">
            <p className="tool-text" style={{ whiteSpace: "pre" }}>
              How it works
            </p>
          </div>
        </div>
        <ProblemTitle heading="Supafast, Supaeasy." />
        <div className="problem-ques" style={{ marginTop: "-30px" }}>
          <Problem
            svg="#svg10492782262"
            heading="Subscribe"
            flag={true}
            para="Pick a subscription and you’ll recieve an invite to your own private Slack channel."
          />
          <Problem
            svg="#svg12690713410"
            heading="Request"
            flag={true}
            para="Submit as many design requests as you want. We’ll focus on one request at a time."
          />
          <Problem
            svg="#svg10645988170"
            heading="Recieve"
            flag={true}
            para="Expect your designs in 2-3 business days. We’ll also make as many revisions as you need."
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
