import React, { useState } from "react";
import axios from "axios";
import "./Detection.css";

function Detection() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(response.data.results);
    } catch (error) {
      console.error("Error analyzing file:", error);
      alert("Failed to analyze the file.");
    }
  };

  return (
    <div className="detection">
      <h2>Upload Media for Detection</h2>
      <input type="file" className="file-input" onChange={handleFileChange} />
      <button className="analyze-btn" onClick={handleAnalyze}>Analyze</button>
      {result && <div className="result">{JSON.stringify(result)}</div>}
    </div>
  );
}

export default Detection;
