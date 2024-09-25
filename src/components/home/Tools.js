import React from "react";
import "./Tools.css";

const tools = [
  {
    name: "Zoom",
    description:
      "Enhance remote collaboration with Zoom instant meetings and video recordings.",
    imgSrc: "assets/images/zoom.png",
  },
  {
    name: "Google Workspace",
    description:
      "Create, edit, and share Google Docs, Sheets, and Slides in FileSafe.",
    imgSrc: "assets/images/g-drive.png",
  },
  {
    name: "Microsoft Office",
    description:
      "Easily access, edit, and share Office docs online in FileSafe anytime.",
    imgSrc: "assets/images/ms-office.png",
  },
  {
    name: "Canvas",
    description:
      "Upload course files or assignments straight from FileSafe to Canvas.",
    imgSrc: "assets/images/canvas.png",
  },
  {
    name: "Slack",
    description:
      "Bring Slack conversations and FileSafe content together to keep teams in sync.",
    imgSrc: "assets/images/slack.png",
  },
  {
    name: "Adobe Creative Cloud",
    description:
      "Easily and securely send files to clients and vendors from within Adobe Photoshop.",
    imgSrc: "assets/images/xd-cloud.png",
  },
];

const Tools = () => {
  return (
    <div className="tools container">
      <div className="heading mb-5 d-flex flex-wrap justify-content-between align-items-center">
        <h1 className="col-lg-6 col-12">
          Get more by connecting with the tools you love
        </h1>
        <p className="col-lg-5 col-12">
          Keep everything that’s important to you shareable and safe in one
          place. Back up files in the cloud, share photos and videos, and more.
        </p>
      </div>

      <div className="row">
        {tools.map((tool, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card tool-card border-0 h-100 py-2 px-4">
              <img
                src={tool.imgSrc}
                className="card-img-top mt-4"
                alt={tool.name}
                style={{ width: "50px", height: "50px" }}
              />
              <div className="card-body px-0">
                <h5 className="card-title">{tool.name}</h5>
                <p className="card-text">{tool.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
