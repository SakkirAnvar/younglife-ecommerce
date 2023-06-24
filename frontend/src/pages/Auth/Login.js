import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/auth";
import "../../styles/login.css";
import { Link } from "react-router-dom";
import { API_URL } from "../../components/helper/apiUrl";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/api/v1/auth/login`, { email, password });
      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
   
      <Layout title={"Login - Younglife"}>
        <div className="py-5 px-5 bg">
          <div className=" justify-content-between  ">
            <div className=" d-flex justify-content-center align-items-center">
              <div className="login-card py-lg-0 py-5">
                <h2 className="fw-semibold text-center">Welcome back</h2>
                <p className="fw-light text-center">
                  Welcome back ! Please login your Account
                </p>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="">
                    <div className="mb-3 ">
                      <label htmlFor className="mb-1 fw-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="">
                      <label htmlFor className="mb-1 fw-medium">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className=" d-flex justify-content-between mt-3 checkbox">
                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" />
                        <label htmlFor className="fw-medium ms-2">
                          Remember password
                        </label>
                      </div>
                      <a
                        onClick={() => {
                          navigate("/forgot-password");
                        }}
                        className="fw-semibold text-decoration-none"
                      >
                        Forgot password
                      </a>
                    </div>
                  </div>
                  <button type="submit" className="btn mt-4 w-100">
                    Sign in
                  </button>
                </form>
                <p className="text-center signup mt-4">
                  Don't have account?{" "}
                  <Link
                    to="/signup"
                    className="text-decoration-none fw-semibold"
                  >
                    Sign up now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default Login;
