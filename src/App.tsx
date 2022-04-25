import React from "react";
import "./App.css";
import myResume from "./resources/Resume.pdf";

import ParticleBg from "./components/ParticleBg";
import Name from "./components/Name";
import MyPhoto from "./components/MyPhoto";
import Summary from "./components/Summary";

import Button from "@mui/material/Button";
import FileDownloadSharpIcon from "@mui/icons-material/FileDownloadRounded";

function App() {
  const downloadResume = () => {
    const resumeFile = document.createElement("a");
    resumeFile.download = "Shoeb.pdf";
    resumeFile.href = myResume;

    document.body.appendChild(resumeFile);
    resumeFile.click();
    document.body.removeChild(resumeFile);
  };

  return (
    <div className="App">
      <ParticleBg></ParticleBg>
      <div className="front-container">
        <div>
          <Name></Name>
          <Summary></Summary>
        </div>
        <MyPhoto></MyPhoto>
      </div>

      <div className="btn-download">
        <Button
          className="btn-inner"
          onClick={downloadResume}
          color="info"
          variant="contained"
          startIcon={<FileDownloadSharpIcon />}
          style={{
            fontWeight: "bolder",
            marginTop: "2.5rem",
            marginBottom: "2rem",
            width: "25%",
          }}
        >
          Download Resume
        </Button>
      </div>
    </div>
  );
}

export default App;
