import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "../../styles/forgotpswd.css";
import { API_URL } from "../../components/helper/apiUrl";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/api/v1/auth/forget-password`, {
        email,
        newPassword,
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
    <Layout title={"Forgot Password - Younglife"}>
      <div className="py-5 px-5 bgr">
        <div className=" justify-content-between  ">
          <div className=" d-flex justify-content-center align-items-center">
            <div className="reset-card py-lg-0 py-5">
              <h2 className="text-center">Reset Password</h2>
              <form className="form" onSubmit={handleSubmit}>
                <div className="mb-3">
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
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="form-control"
                    id="exampleInputPassword1"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Enter your favorite sports"
                    className="form-control"
                    id="exampleInputEmail1"
                    required
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn w-100">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
