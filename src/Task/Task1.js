import React, { useState } from "react";
import {
  SelectForm,
  AlbaButton,
  TextField,
} from "@platform/service-ui-libraries";
import "../Task/task1.css";

const Task1 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Extract form data
    const formData = {
      firstName,
      lastName,
      mobileNumber,
      email,
      password,
      city,
    };
    console.log(formData);
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            className="input"
            label="Enter First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div>
          <TextField
            className="input"
            label="Enter Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div>
          <TextField
            className="input"
            label="Enter Mobile Number"
            value={mobileNumber}
            onChange={(event) => setMobileNumber(event.target.value)}
          />
        </div>
        <div>
          <TextField
            className="input"
            label="Enter Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <TextField
            className="input"
            label="Enter Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          
        </div>
        <AlbaButton title="submit" type="submit" variant="primary">
          Submit
        </AlbaButton>
      </form>
    </div>
  );
};

export default Task1;
