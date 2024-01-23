import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import DoctorSelection from "./Filtered_doctor";
import "./index.css";

const Index = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    age: "",
    city: "",
    company: "",
  });

  return (
    <div class="container">
      <form>
        <h1>
          <strong>Booking Form</strong>
        </h1>
        <TextField
          id="name"
          label="Name"
          variant="standard"
          style={{ background: "white" }}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          name="name"
        ></TextField>
        <br />
        <TextField
          id="standard-basic"
          label="Phone number"
          variant="standard"
          style={{ background: "white" }}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          name="phone"
        ></TextField>
        <TextField
          id="standard-basic"
          label="Age"
          variant="standard"
          style={{ background: "white" }}
          onChange={(e) => setData({ ...data, age: e.target.value })}
          name="age"
        ></TextField>
        <br />

        <TextField
          id="standard-basic"
          label="City"
          variant="standard"
          style={{ background: "white" }}
          onChange={(e) => setData({ ...data, city: e.target.value })}
        ></TextField>
        <br />
        <TextField
          id="standard-basic"
          label="Company"
          variant="standard"
          style={{ background: "white" }}
          onChange={(e) => setData({ ...data, company: e.target.value })}
          name="company"
        ></TextField>
        <br />
        <lable for="complaint">Complaints</lable>
        <br></br>
        <textarea
          id="complaint"
          rows="5"
          cols="25"
          style={{ color: "black" }}
        ></textarea>
        <br />
        <br />
        <lable for="experience">Experience</lable>
        <br></br>
        <textarea
          id="experience"
          rows="5"
          cols="25"
          style={{ color: "black" }}
        ></textarea>
        <br />
        <DoctorSelection city={data.city} />
      </form>
    </div>
  );
};

export default Index;
