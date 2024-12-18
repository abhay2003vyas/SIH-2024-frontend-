import React from "react";
import "./DetectionGrid.css";

import ManipulationImage from "../Images/10.jpg";
import DeepfakeImage from "../Images/8.png";
import FaceSwapsImage from "../Images/7.png";
import SyntheticMediaImage from "../Images/6.jpg";
import GeneratedFacesImage from "../Images/9.jpg";
import FakeProfilesImage from "../Images/4..jpg";

const DetectionGrid = () => {
  return (
    <section className="detection-grid reveal">
      <div className="detection-card">
        <img src={ManipulationImage} alt="Manipulation detection" />
        <h3>Manipulation Detection</h3>
      </div>
      <div className="detection-card">
        <img src={DeepfakeImage} alt="Deepfake detection" />
        <h3>Deepfake Detection</h3>
      </div>
      <div className="detection-card">
        <img src={FaceSwapsImage} alt="Face swaps" />
        <h3>Face Swaps</h3>
      </div>
      <div className="detection-card">
        <img src={SyntheticMediaImage} alt="Synthetic media" />
        <h3>Synthetic Media</h3>
      </div>
      <div className="detection-card">
        <img src={GeneratedFacesImage} alt="Generated faces" />
        <h3>Generated Faces</h3>
      </div>
      <div className="detection-card">
        <img src={FakeProfilesImage} alt="Fake profiles" />
        <h3>Fake Profiles</h3>
      </div>
    </section>
  );
};

export default DetectionGrid;
