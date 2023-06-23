import React, { useState,useEffect } from "react";
import Layout from "../components/Layout/Layout";
import "../../src/styles/Homepage.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import { toast } from "react-hot-toast";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useCart();
  const navigate = useNavigate()

  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  
  useEffect(() => {
    if (!checked.length || radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  return (
    <Layout>
      <div className="carousel">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/carousel1.webp"
                className="d-block caroimg1 w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/carousel2.avif"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/carousel3.avif"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="content1">
        <div className="secondpg">
          <div className="i14pro">
            <h1>iPhone 14 Pro</h1>
            <h3>Pro.Beyond.</h3>
          </div>
          <div className="link14">
            <Link to="/all-products">Learn more</Link>
            <Link to="/all-products">Buy</Link>
          </div>
          <div className="m14pro">
            <a href="/all-products">
              <img width="950px" src="images/apple1.jpg" alt="product image" />
            </a>
          </div>
        </div>
      </div>
      <div className="content2">
        <div className="proCard">
          <div className="product">
            <a href="/all-products">
              <img src="images/pixel7.png" alt="" />
            </a>
          </div>
          <div className="proName">
            <a href="">
              <h5>Pixel 7a</h5>
            </a>
          </div>
        </div>

        <div className="proCard">
          <div className="product">
            <a href="/all-products">
              <img src="images/nestaudio.png" alt="" />
            </a>
          </div>
          <div className="proName">
            <a href="">
              <h5>Nest Audio</h5>
            </a>
          </div>
        </div>
        <div className="proCard">
          <div className="product">
            <a href="/all-products">
              <img src="images/nestcam.png" alt="" />
            </a>
          </div>
          <div className="proName">
            <a href="">
              <h5>
                Nest Cam (outdoor or indoor,
                <br /> battery)
              </h5>
            </a>
          </div>
        </div>
      </div>
      <div className="content3">
        <div className="dailydeals d-flex">
          <a href="/all-products"><h3>Daily Deals</h3></a>
        </div>
        <div className="cont3main">
        {products?.map((p,index) => 
          index < 4 && (
              <div className="card card1 m-2" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description.substring(0, 25)}</p>
                  <p className="card-text">₹{p.price}</p>
                  <button
                    className="btn btn-outline-dark ms-5 mt-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to cart");
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
