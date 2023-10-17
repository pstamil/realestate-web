import { Grid } from "@mui/material";
import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          sx={{
            display: "flex",
            gap: "20px",
            textAlign: "left",
          }}
        >
          <Grid item sm={12} md={12} lg={12} xs={12}>
            <label
              htmlFor="name"
              style={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Name
              <input
                style={{
                  backgroundColor: "#eee",
                  border: "none",
                  padding: "12px 15px",
                  margin: "8px 0",
                  width: "100%",
                }}
                type="text"
                placeholder="Enter your name"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </Grid>
          <Grid item sm={12} md={12} lg={12} xs={12}>
            <label
              htmlFor="email"
              style={{
                fontSize: "16px",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Email
              <input
                style={{
                  backgroundColor: "#eee",
                  border: "none",
                  padding: "12px 15px",
                  margin: "8px 0",
                  width: "100%",
                }}
                type="email"
                placeholder="Enter your email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </Grid>
          <Grid item sm={12} md={12} lg={12} xs={12}>
            <label
              htmlFor="message"
              style={{
                fontSize: "16px",
                textAlign: "left",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Message
              <textarea
                type="text"
                placeholder="Enter your message here !!"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                cols="50"
                style={{
                  padding: "10px 0 0 10px",
                  width: "100%",
                  marginTop: "10px",
                }}
              />
            </label>
          </Grid>

          <button type="submit" style={{ maxWidth: "150px" }}>
            Send
          </button>
        </Grid>
      </form>
    </>
  );
}
