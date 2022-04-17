import React from "react";
import "./App.css";
import myResume from "./resources/Resume.pdf";

import ParticleBg from "./components/ParticleBg";
import Name from "./components/Name";
import MyPhoto from "./components/MyPhoto";

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
      <Name></Name>
      <MyPhoto></MyPhoto>
      <div className="btn-download">
        <Button
          onClick={downloadResume}
          color="info"
          variant="contained"
          startIcon={<FileDownloadSharpIcon />}
          style={{
            fontWeight: "bolder",
            marginTop: "2.5rem",
            marginBottom: "2rem",
          }}
        >
          Download Resume
        </Button>
      </div>
      <div className="notice">This site is currently under development</div>
    </div>
  );
}

export default App;
