import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import "../styles/pagenotfound.css";
import ghost from '../ghost-img.png'

const Pagenotfound = () => {
  return (
    <Layout title={"404 - Page not found"}>
      <section className="home">
        <div className="home__container container">
          <div className="home__data">
            <span className="home__subtitle">Error 404</span>
            <h1 className="home__title">Hey Buddy</h1>
            <p className="home__description">
              We can't seem to find the page <br /> you are looking for.
            </p>
            <Link to="/" className="home__button">
              Go Home
            </Link>
          </div>
          <div className="home__img">
            <img src={ghost}alt />
            <div className="home__shadow" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pagenotfound;
