import React from "react";
import "./VideoAnalysis.css";

// Import images
import VideoDemoImage from "../Images/2.jpg";
import AnalysisResultImage from "../Images/3.jpg";

const VideoAnalysis = () => {
  return (
    <section className="video-analysis">
      {/* Video Demo Section */}
      <div className="video-demo">
        <img
          src={VideoDemoImage}
          alt="Video analysis demo"
          className="video-image"
        />
      </div>

      {/* Analysis Result Section */}
      <div className="analysis-result">
        <img
          src={AnalysisResultImage}
          alt="Analysis results"
          className="analysis-image"
        />
      </div>
    </section>
  );
};

export default VideoAnalysis;
