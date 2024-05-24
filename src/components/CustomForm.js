import React, { useState, useEffect } from "react";

const CustomForm = ({
  labels,
  handleChange,
  options,
  label
}) => {
  const [formSubmissions, setFormSubmissions] = useState([]);

  useEffect(() => {
    const storedSubmissions = localStorage.getItem("formSubmissions");
    if (storedSubmissions) {
      setFormSubmissions(JSON.parse(storedSubmissions));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());

    // Delete selectedOption if it exists and matches the label
    if (options.length > 0) {
      const selectedValue = event.target.elements?.["selectedOption"]?.value;
      if (selectedValue === label) {
        delete data.selectedOption;
      }
    }

    const newSubmissions = [...formSubmissions];
    newSubmissions.push(data);
    setFormSubmissions(newSubmissions);
    localStorage.setItem("formSubmissions", JSON.stringify(newSubmissions));

    // Reset form fields
    event.target.reset();

    // Reset label values in state
    const emptyLabels = {};
    console.log("labels==>", typeof labels, labels);
    console.log("label==>", typeof label);
    let x = Object.keys(labels);
    console.log(x);
    Object.keys(labels).forEach((label) => {
      emptyLabels[label] = "";
    });
  };

  return (
    <div className="formCon">
      {labels.length > 0 ? <h1>Custom Form</h1> : ""}
      <form className="cForm" onSubmit={handleSubmit}>
        {labels.length > 0 &&
          labels.map((label, index) => (
            <div key={index}>
              <div className="label">{label}</div>
              <input className="input" name={label} onChange={handleChange} />
            </div>
          ))}
        {options.length > 0 && (
          <>
            <div className="label">{label}</div>
            <select name={label} className="options">
              {options
                .toString()
                .split(",")
                .map((value, index) => (
                  <option value={value} key={index}>
                    {value}
                  </option>
                ))}
            </select>
          </>
        )}
        {options.length > 0 || labels.length > 0 ? (
          <button className="btn save" type="submit">
            Save
          </button>
        ) : null}
      </form>
      {formSubmissions.length > 0 && (
        <div className="formData">
          <h2>Form Data:</h2>
          <div className="flex">
            {formSubmissions.map((formData, index) => (
              <pre className="data" key={index}>
                {JSON.stringify(formData, null, 2)}
              </pre>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomForm;
