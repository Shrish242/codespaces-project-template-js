

import React from "react";

import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Discord Bot",
    description:
      "Discord Bot with the theme of the game as a pirate where it stores data and achievements and location. It uses technology of Node.js, JavaScript, Mongodb, Postman",
    url: "https://github.com/Shrish242/Billy_The_Pirate",
  },
  {
    title: "Web App",
    description:
      "It is a website created using React which includes technology of Router and tailwind. It includes data of college in Kathmandu in different fields.",
    url: "https://github.com/Shrish242/IdealCollege",
  },
  {
    title: "My Resume Site",
    description:
      "It is a blog website designed using Next.js and its component with tailwind css using root folders as routers. It is just a sample which will be used as a framework for upcoming projects",
    url: "https://github.com/Shrish242/Personal-Blog",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
