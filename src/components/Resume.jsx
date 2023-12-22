import React from "react";
import resume from "../assets/resume.pdf";

function Resume() {
  return (
    <div className="w-full h-full">
      <iframe
        title="Resume"
        src={resume}
        className="min-h-screen w-full"
      ></iframe>
    </div>
  );
}

export default Resume;
