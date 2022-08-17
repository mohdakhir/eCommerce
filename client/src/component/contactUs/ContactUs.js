import React from "react";
import { useState } from "react";
import "./contactUs.css";
const ContactUs = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    description: "",
  });
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, description } = data;

    const res = await fetch("/contact/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        description,
      }),
    });

    const result = await res.json();
    if (result.status === "success") {
      window.alert("Thankyou for contacting us !!!");
      return;
    } else {
        window.alert("Thankyou for contacting us !!!");
    }
  };
  return (
    <div className="contact">
      <div className="content">
        <h2 className="h2">Contact Us</h2>
        <p>
          my name is Md owais I am gradutaed from aligarh muslim university my
          name is Md owais I am gradutaed from aligarh muslim universitymy name
          is Md owais I am gradutaed from aligarh muslim universitymy name is Md
          owais I am gradutaed from aligarh muslim university
        </p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon"></div>
            <div className="text">
              <h3>Address</h3>
              <p>New Ahok nagar Delhi,fdg sdi sd, 110689</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"></div>
            <div className="text">
              <h3>Phone</h3>
              <p>123-456-7890</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"></div>
            <div className="text">
              <h3>Email</h3>
              <p>akhir@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input
                type="text"
                name=""
                required="required"
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input
                type="text"
                name=""
                required="required"
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea
                required="required"
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              ></textarea>
              <span>Type your Message...</span>
            </div>
            <div className="inputBox" onClick={(e) => handleSubmit(e)}>
              <input type="submit" name="" value="send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
