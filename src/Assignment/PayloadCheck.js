import React, { useState } from "react";
import Data from "./Data";
import "../styles/main.scss";

const PayloadCheck = ({ id, serialNumber, updateFormData, handleSubmit }) => {
  const [selectedCheck, setSelectedCheck] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("");
  const [selectedOperator, setSelectedOperator] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCheck(selectedValue);
    updateFormData(id, {
      selectedCheck: selectedValue,
      selectedColumn,
      selectedOperator,
      selectedValue,
    });
  };

  const handleColumnChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedColumn(selectedValue);
    updateFormData(id, {
      selectedCheck,
      selectedColumn: selectedValue,
      selectedOperator,
      selectedValue,
    });
  };

  const handleOperatorChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOperator(selectedValue);
    updateFormData(id, {
      selectedCheck,
      selectedColumn,
      selectedOperator: selectedValue,
      selectedValue,
    });
  };
  const handleValueChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedValue(selectedValue);
    if (selectedValue.trim() !== "") {
      updateFormData(id, {
        selectedCheck,
        selectedColumn,
        selectedOperator,
        selectedValue,
      });
    }
  };

  const selectedData = Data.find(
    (item) => item.checkDescription === selectedCheck
  );

  return (
    <div className="ipCon">
      <h3>{serialNumber}</h3>
      <div>
        <label>
          Select Checks <span>*</span>
        </label>
        <select
          className="select"
          onChange={handleChange}
          value={selectedCheck}
          name={`selectedCheck-${id}`}
        >
          <option value="">Select Checks</option>
          {Data.map((item, index) => (
            <option key={index} value={item.checkDescription}>
              {item.checkDescription}
            </option>
          ))}
        </select>
      </div>

      {selectedCheck && (
        <div>
          <label htmlFor={`selectColumn-${id}`}>
            Select Column <span>*</span>
          </label>
          <select
            className="select"
            id={`selectColumn-${id}`}
            name={`selectColumn-${id}`}
            onChange={handleColumnChange}
            value={selectedColumn}
          >
            <option value="">Select Column</option>
            {Data.map((item, index) => (
              <option key={index} value={item.checkName}>
                {item.checkName}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedColumn && selectedData && selectedData.operators && (
        <div>
          <label>
            Operator <span>*</span>
          </label>
          <select
            className="select"
            onChange={handleOperatorChange}
            value={selectedOperator}
          >
            <option value="">Select Operator</option>
            {selectedData.operators.map((operator, index) => (
              <option key={index} value={operator}>
                {operator}
              </option>
            ))}
          </select>
        </div>
      )}
      {selectedOperator && (
        <div>
          <label>
            Value <span>*</span>
          </label>
          <input
            className="input1"
            type="text"
            value={selectedValue}
            onChange={handleValueChange}
            placeholder="0.0-1.0"
          />
        </div>
      )}
    </div>
  );
};

export default PayloadCheck;
