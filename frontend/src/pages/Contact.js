import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/contact.css";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="contact d-flex">
        <div className="contactcont">
        <h3>Contact</h3>
        <h1>We're here to help you.</h1>
        <p>
          We're just one click away to help you take your brand or product from
          great to incredible.Fill in the form to share more details.Either
          way,we'd love to talk.
        </p>
        </div>
        <div className="formContact ">
          <form action="">
            <div className="name d-grid">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="What's your name?" />
            </div>
            <div className="email d-grid mt-2">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="you@example.com"/>
            </div>
            <div className="message d-grid mt-2">
              <label htmlFor="">What can we help you with?</label>
              <textarea name="" id="message" cols="30" rows="5" placeholder="Drop us a line"></textarea>
            </div>
            <button className="btn contactbtn btn-dark mt-3">Send</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
