import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import backgroundImage from "../images/Shrish.jpg";

const imageAltText = "Me";

const Home = () => {
  return (
    <section
      id="home"
      className="min-height"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center top", // Adjust this as needed
        position: "relative",
        height: "100vh",
        width: "100%",
        paddingTop: "50px", // Adjust this value to move the image down
      }}
    >
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>Shrish Dhakal</h1>
        <h2>Web Designer and Developer</h2>
      </div>
      <div
        style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)" }}
      >
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};


export default Home;
