import React from "react";

const integrations = [
  {
    name: "Zoom",
    icon: "zoom-icon.png",
    description: "Seamlessly connect your Zoom meetings.",
  },
  {
    name: "Google Workspace",
    icon: "google-workspace-icon.png",
    description: "Collaborate with Google Docs and more.",
  },
  {
    name: "Microsoft Office",
    icon: "office-icon.png",
    description: "Work with all your Office tools.",
  },
  // Add more integrations as needed
];

const Integration = () => {
  return (
    <section id="integration" className="integration-section">
      <h2>Get more by connecting with the tools you love</h2>
      <div className="integration-grid">
        {integrations.map((integration, index) => (
          <div key={index} className="integration-item">
            <img
              src={`/assets/images/${integration.icon}`}
              alt={integration.name}
            />
            <h3>{integration.name}</h3>
            <p>{integration.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Integration;
