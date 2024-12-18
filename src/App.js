import React from "react";
import Navbar from "./components/Navbar/Navbar";
import DetectAISection from "./components/DetectAISection/DetectAISection";
import DetectionGrid from "./components/DetectionGrid/DetectionGrid";
import Detection from "./components/Detection/Detection";
import VideoAnalysis from "./components/VideoAnalysis/VideoAnalysis";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <DetectAISection/>
      <VideoAnalysis />
      <Detection />
      <DetectionGrid/>
    </div>
  );
}

export default App;
