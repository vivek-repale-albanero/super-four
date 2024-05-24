import React, { useState, useEffect } from "react";
import axios from "axios";
import PayloadCheck from "./PayloadCheck";
import { FaPlus } from "react-icons/fa6";
import { IoPlaySharp } from "react-icons/io5";
import "../styles/main.scss"

const App = () => {
  const [payloadChecks, setPayloadChecks] = useState([{ id: 0, data: {} }]);
  const [submittedData, setSubmittedData] = useState([]);

  const handleAdd = () => {
    setPayloadChecks((prevPayloadChecks) => {
      const newPayloadCheck = { id: prevPayloadChecks.length, data: {} };
      return [
        ...prevPayloadChecks.filter(
          (item) => item.id !== prevPayloadChecks.length
        ),
        newPayloadCheck,
      ];
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    console.log("payloadChecks", payloadChecks);
  
    const isFormValid = payloadChecks.every((check) => {
      console.log("check", check);
      const requiredFields = ["selectedCheck", "selectedColumn"];
      return requiredFields.every((field) => check.data[field] !== "");
    });
  
    if (!isFormValid) {
      alert("Please fill out all required fields.");
      return;
    }
  
    const newPayloadData = payloadChecks
      .map((check) => check.data)
      .filter(
        (data) =>
          data.selectedCheck &&
          data.selectedColumn
      );
  
    const formattedData = newPayloadData.map((data) => {
      const formattedEntry = {
        checkDescription: data.selectedCheck,
        columns: data.selectedColumn,
        checkName: "",
        tooltip: "",
        operator: data.selectedOperator || "",
        value: data.selectedValue || "",
      };
    
      if (data.selectedOperator && data.selectedValue) {
        formattedEntry.operator = data.selectedOperator;
        formattedEntry.value = data.selectedValue;
      }
  
      return formattedEntry;
    });
  
    console.log("formattedData", formattedData);
  
    const newDataToSubmit = formattedData.filter((data) => {
      return !submittedData.some(
        (submitted) =>
          submitted.checkDescription === data.checkDescription &&
          submitted.columns === data.columns &&
          (!submitted.operator || !submitted.value ||
            (submitted.operator === data.operator && submitted.value === data.value))
      );
    });
  
    console.log("newDataToSubmit", newDataToSubmit);
  
    if (newDataToSubmit.length === 0) {
      alert("No new data to submit.");
      return;
    }
  
    try {
      const response = await axios.post(
        "http://localhost:3000/user",
        newDataToSubmit[0]
      );
      alert("Data submitted successfully");
      setSubmittedData([...submittedData, newDataToSubmit[0]]);
    } catch (error) {
      console.error("There was an error submitting the data!", error);
      alert("Failed to submit data");
    }
  };
  

  const updateFormData = (id, newData) => {
    setPayloadChecks((prevPayloadChecks) =>
      prevPayloadChecks.map((check) =>
        check.id === id
          ? { ...check, data: { ...check.data, ...newData } }
          : check
      )
    );
  };

  return (
    <div className="con1">
      {payloadChecks.map(({ id }, index) => (
        <PayloadCheck
          key={id}
          id={id}
          serialNumber={index + 1}
          updateFormData={updateFormData}
          handleSubmit={handleSubmit}
        />
      ))}
      <div className="flex1 btn1">
        <FaPlus />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>
      <div className="run btn1 flex1">
        <IoPlaySharp />
        <button type="button" onClick={handleSubmit}>
          Run
        </button>
      </div>
    </div>
  );
};

export default App;
