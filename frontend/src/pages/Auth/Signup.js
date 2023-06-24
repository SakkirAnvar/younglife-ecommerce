import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "../../styles/signup.css";
import { Link } from "react-router-dom";
import { API_URL } from "../../components/helper/apiUrl";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/api/v1/auth/register`, {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Sign up - Younglife"}>
      <div className="py-5 px-5 bgr">
        <div className=" justify-content-between  ">
          <div className=" d-flex justify-content-center align-items-center">
            <div className="register">
              <h2 className="fw-semibold text-center">Create An Account</h2>
              <p className="fw-light text-center">
                  It's quick and easy.
                </p>
              <form className="signup-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="First and Last name"
                    className="form-control"
                    id="exampleInputName"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="form-control"
                    id="exampleInputEmail1"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="form-control"
                    id="exampleInputPassword1"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="form-control"
                    id="exampleInputphone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    placeholder="Communication Address"
                    className="form-control"
                    id="exampleInputAddress"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">What is your Favourite Sport?</label>
                  <input
                    type="text"
                    placeholder="Eg. Hockey"
                    className="form-control"
                    id="exampleInputAddress"
                    required
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn mt-4 w-100">
                  Sign up
                </button>
              </form>
              <p className="text-center signup mt-4">
                  Already have an account?{" "}
                  <Link to="/login" className="text-decoration-none fw-semibold">
                    Sign in now
                  </Link>
                </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
