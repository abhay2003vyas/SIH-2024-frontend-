const axios = require("axios");

async function callPythonService(filePath) {
  try {
    const response = await axios.post("http://localhost:8000/process", { filePath });
    return response.data;
  } catch (error) {
    console.error("Error calling Python service:", error.message);
    throw error;
  }
}

module.exports = callPythonService;
