import React, { useState, useEffect } from "react";
import "./form.css";

export default function Form({
  popup,
  settingData,
  companyData,
  details,
  indexValue,
  popValue,
  addCompany,
  editable,
}) {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    contactDetails: "",
    domain: "",
    headCount: 0,
    managers: [],
  });

  const [company, setCompany] = useState(true);
  const [email, setEmail] = useState(true);
  const [contact, setContact] = useState(true);
  const [domainValue, setDomainValue] = useState(true);

  useEffect(() => {
    if (details) {
      console.log(companyData);
      console.log(details);
      setFormData({
        companyName: details.companyName,
        email: details.email,
        contactDetails: details.contactDetails,
        domain: details.domain,
        headCount: details.headCount,
        managers: details.managers,
      });
      console.log("details manager", details.managers);
      setInputBox(
        details.managers.map((manager) => ({
          managerName: manager.managerName,
          employees: manager.employees.slice(),
        }))
      );
    } else if (addCompany) {
      setFormData({
        companyName: "",
        email: "",
        contactDetails: "",
        domain: "",
        headCount: 0,
        managers: [],
      });
      setInputBox([]);
    }
  }, [details, addCompany]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log(formData.headCount);
  }, [formData]);

  useEffect(() => {
    console.log(companyData);
  }, [companyData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const checkCmpyName = /^[A-Z0-9][a-zA-Z0-9]*$/;

    if (formData) {
      if (formData.companyName && checkCmpyName.test(formData.companyName)) {
        console.log("true it is");
        setCompany(true);
        console.log(company);
        if (checkEmail.test(formData.email)) {
          setEmail(true);
          if (formData.contactDetails.length === 10) {
            setContact(true);
            if (formData.domain) {
              setDomainValue(true);

              settingData([...companyData, formData]);

              setFormData({
                companyName: "",
                email: "",
                contactDetails: "",
                domain: "",
                headCount: 0,
                managers: [],
              });

              setInputBox([]);
              console.log(companyData);
              popValue(false);
            } else {
              setDomainValue(false);
            }
          } else {
            setContact(false);
          }
        } else {
          setEmail(false);
        }
      } else {
        setCompany(false);
      }
    }

    useEffect(() => {
      console.log("inputBOx", inputBox);
    }, [inputBox]);
  };

  const handleSave = (event) => {
    event.preventDefault();
    setFormData((prevFormData) => ({
      ...prevFormData,
      managers: inputBox,
    }));
    setInputBox(inputBox);
    const updatedData = [...companyData];
    updatedData[indexValue] = formData;
    settingData(updatedData);

    setFormData({
      companyName: "",
      email: "",
      contactDetails: "",
      domain: "",
      headCount: 0,
      managers: [],
    });

    setInputBox([]);

    popValue(false);
  };

  const [inputBox, setInputBox] = useState([]);
  const [add, setAdd] = useState(false);

  const handleAddManager = () => {
    event.preventDefault();
    const newManager = { managerName: "", employees: [] };
    setInputBox([...inputBox, newManager]);
    setAdd(true);
  };

  const handleManagerNameChange = (index, value) => {
    const newInputBox = [...inputBox];
    newInputBox[index].managerName = value;
    setInputBox(newInputBox);
    updateFormData(newInputBox);
  };

  const handleAddEmployee = (managerIndex) => {
    event.preventDefault();
    const newInputBox = [...inputBox];
    newInputBox[managerIndex].employees.push("");
    setInputBox(newInputBox);
  };

  const updateFormData = (inputBoxData) => {
    let totalHeadCount = 0;

    inputBoxData.forEach((manager) => {
      totalHeadCount++;
      totalHeadCount += manager.employees.length;
    });

    setFormData((prevFormData) => ({
      ...prevFormData,
      managers: inputBoxData,
      headCount: totalHeadCount,
    }));
  };

  const handleEmployeeNameChange = (managerIndex, employeeIndex, value) => {
    const newInputBox = [...inputBox];
    newInputBox[managerIndex].employees[employeeIndex] = value;
    setInputBox(newInputBox);
    updateFormData(newInputBox);
  };

  const handleEmpDelete = (managerIndex, employeeIndex) => {
    event.preventDefault();
    const newInputBox = [...inputBox];
    newInputBox[managerIndex].employees.splice(employeeIndex, 1);
    setInputBox(newInputBox);
    updateFormData(newInputBox);
  };

  const handleMnrDelete = (managerIndex) => {
    event.preventDefault();
    const newInputBox = inputBox.filter((_, index) => index !== managerIndex);
    setInputBox(newInputBox);
    updateFormData(newInputBox);
  };

  const handleBack = () => {
    event.preventDefault();
    if (editable) {
      alert("Save the Changes");
      popValue(true);
    } else {
      popValue(false);
    }
  };

  return (
    <div className="formCont">
      {popup && (
        <form class="formData1" style={{ display: popup ? "flex" : "none" }}>
          {editable ? (
            <h3 className="addformhead">Edit Company</h3>
          ) : (
            <h3 className="addformhead">Add Company</h3>
          )}
          <button className="times times1" onClick={handleBack}>
            &times;
          </button>
          <section>
            {" "}
            <input
              type="text"
              placeholder="enter company"
              name="companyName"
              className="normal"
              value={formData.companyName}
              onChange={handleChange}
            ></input>
            <span>
              {!company ? (
                <label>
                  Company name Should start with capital and do not contain
                  special characters
                </label>
              ) : (
                ""
              )}
            </span>
          </section>

          <section>
            <input
              type="email"
              placeholder="enter email"
              name="email"
              className="normal"
              value={formData.email}
              onChange={handleChange}
            ></input>
            <span>
              {!email ? <label>email format is incorrect</label> : ""}
            </span>
          </section>

          <section>
            {" "}
            <input
              type="tel"
              placeholder="enter contact number"
              name="contactDetails"
              className="normal"
              value={formData.contactDetails}
              onChange={handleChange}
            ></input>
            <span>
              {!contact ? <label>Enter correct contactDetails</label> : ""}
            </span>
          </section>

          <section className="inSec">
            <select
              name="domain"
              value={formData.domain}
              id="domain"
              onChange={handleChange}
            >
              <option value="">choose any</option>
              <option value="Gaming">Gaming</option>
              <option value="Automobile">Automobile</option>
              <option value="Photography">Photography</option>
            </select>
            <span>{!domainValue ? <label>Choose any one</label> : ""}</span>
          </section>

          <button className="emp-btn" id="admnrbtn" onClick={handleAddManager}>
            Add Manager
          </button>
          <ul>
            {add &&
              inputBox.map((manager, managerIndex) => (
                <li key={managerIndex}>
                  <span>
                    {" "}
                    <label>Manager{managerIndex + 1}</label>
                    <input
                      type="text"
                      id="admnrbtn"
                      className="mnr-emp"
                      value={manager.managerName}
                      onChange={(e) =>
                        handleManagerNameChange(managerIndex, e.target.value)
                      }
                      placeholder="Enter Manager name"
                    />
                    {managerIndex > 0 ? (
                      <span>
                        <button
                          className="times"
                          onClick={() => {
                            handleMnrDelete(managerIndex);
                          }}
                        >
                          {" "}
                          &times;
                        </button>
                      </span>
                    ) : (
                      ""
                    )}
                  </span>

                  <ul>
                    {manager.employees.map((employee, employeeIndex) => (
                      <li className="subempli" key={employeeIndex}>
                        <label htmlFor="emp">
                          Employee{employeeIndex + 1}{" "}
                        </label>
                        <span>
                          {" "}
                          <input
                            type="text"
                            id="admnrbtn"
                            className="mnr-emp"
                            value={employee}
                            onChange={(e) =>
                              handleEmployeeNameChange(
                                managerIndex,
                                employeeIndex,
                                e.target.value
                              )
                            }
                            placeholder="Enter Employee"
                          />
                          <span>
                            <button
                              className="times"
                              onClick={() => {
                                handleEmpDelete(managerIndex, employeeIndex);
                              }}
                            >
                              &times;
                            </button>
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    id="addempbtn"
                    className="emp-btn"
                    onClick={() => handleAddEmployee(managerIndex)}
                  >
                    Add Employee
                  </button>
                </li>
              ))}
          </ul>

          {!details && (
            <button className="emp-btn" id="admnrbtn" onClick={handleSubmit}>
              Submit
            </button>
          )}
          {details && (
            <button className="emp-btn" id="admnrbtn" onClick={handleSave}>
              Save Changes
            </button>
          )}
        </form>
      )}
    </div>
  );
}
