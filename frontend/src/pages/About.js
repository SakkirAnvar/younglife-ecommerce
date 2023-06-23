import React from "react";
import Layout from "../components/Layout/Layout";
import '../styles/about.css'

const About = () => {
  return (
    <Layout title={"About us - Younglife"}>
      <div className="about">
        <div className="abouttitle">
          <h1 className="text-center">About us</h1>
        </div>
        <div className="content">
          <p className="text-center">
            We believe the best way deliver a great user experience is by deeply
            understanding what people want and loveThen deliver the features,
            messages, and content that are most helpful relevant and timely.That's
            what makes users happy and loyal Younglife strives to deliver the
            tools and support that helps companies deliver that great
            experience. We want our customers to be happy, so then our
            customers are happy and that makes us happy.
          </p>
        </div>
        <div className="image text-center">
            <img src="images/logo.png" alt="logo" />
        </div>
      </div>
    </Layout>
  );
};

export default About;
