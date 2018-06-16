import React from "react";
import Test from "../Test";

const About = () => (
  <div>
    <h1>About Page</h1>
    <p>
      This is a random dog friender you can choose to be friends with a dog.
    </p>
    <p>
      Thank You Dog CEO API
    </p>
    <h3>
      Test React Components:
    </h3>
    <Test name="puppo" snugfactor={6} />
    <Test name="mister pup" snugfactor={3} />
  </div>
);

export default About;
