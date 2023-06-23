import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import useCategory from "../Hooks/useCategory";
import { Link } from "react-router-dom";
import '../styles/categories.css'

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="title">
        <h1>All Categories</h1>
      </div>
      <div className="container">
        <div className="row catdes">
          {categories.map((c) => (
            <div className="col-md-6 link">
              <Link
                className="card carding card-header "
                to={`/category/${c.slug}`}
                key={c._id}
              >
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
