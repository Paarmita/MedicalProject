import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="started--container">
    <div className="started">
      Get started for free - join thousands of students and researchers already
      using Ignitus to share their knowledge, work together, and get amazing
      opportunites.
    </div>
    <Link to="/signup">
      <button className="btn btn-secondary button-get-started" type="button">
        Sign-Up
      </button>
    </Link>
  </div>
);

export default Home;
