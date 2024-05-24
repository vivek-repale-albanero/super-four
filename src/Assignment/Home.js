import React from "react";
import img1 from "../assets/round.png";
import img2 from "../assets/round2.png";
import img3 from "../assets/round3.png";

const Home = () => {
  return (
    <>
      <div className="banner">
        <div>
          <h1>
            Reimagine <br />
            Your Approach
            <br /> to Data Management
          </h1>
          <h4>
            Embrace the power of data mesh
          </h4>
        </div>
        <div className="flex image">
          <img src={img3} />
          <img src={img2} />
          <img src={img1} />
        </div>
      </div>
    </>
  );
};

export default Home;
