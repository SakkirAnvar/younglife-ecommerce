import axios from "axios";
import Layout from "../components/Layout/Layout";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts,setRealtedProducts]= useState([])

  //initial details
  useEffect(() => {
    if (params.slug) getProduct();
  }, [params.slug]);
  //get products
  const getProduct = async() => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data.product);
      getSimilarProducts(data.product._id,data.product.category._id)
    } catch (error) {
      console.log(error);
    }
  };

  //get similar products
  const getSimilarProducts =async(pid,cid) => {
    try {
      const {data} = await axios.get(`/api/v1/product/related-product/${pid}/${cid}`)
      setRealtedProducts(data.products)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Layout>
      <div className="row container mt-4">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top w-50"
            alt={product.name}
            height="300"
            width="350"
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-center">Product Deatils</h1>
          <h4>Name : {product.name}</h4>
          <h4>Description : {product.description}</h4>
          <h4>Price : {product.price}</h4>
          <h4>Category : {product?.category?.name}</h4>
          <button className="btn btn-secondary ms-1">Add to Cart</button>
        </div>
        <hr />
      </div>
      <div className="row container ">
        <h6>Similar Products</h6>
        {relatedProducts.length < 1 && <p className="text-center">No Similar Products Found</p>}
        <div className="d-flex flex-wrap">
            {relatedProducts?.map((p) => (
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description.substring(0,30)}</p>
                    <p className="card-text">₹{p.price}</p>
                    <button className="btn btn-secondary ms-1">Add to Cart</button>
                  </div>
                </div>
            ))}
          </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
