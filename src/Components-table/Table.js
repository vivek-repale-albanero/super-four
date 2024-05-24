import React, { useState, useEffect } from "react";
import "./table.css";
import Form from "./Form";

export default function Table() {
  const [data, setData] = useState([
    {
      companyName: "Company Name",
      email: "Email",
      contactDetails: "ContactDetails",
      domain: "Domain",
      headCount: "Headcount",
      managers: [],
    },
    {
      companyName: "Albanero",
      email: "albanero@gmail.com",
      contactDetails: 7702296369,
      domain: "Data-mesh",
      headCount: 100,
      managers: [],
    },
    {
      companyName: "Albanero3",
      email: "albanero@gmail.com",
      contactDetails: 7702296369,
      domain: "Data-mesh",
      headCount: 100,
      managers: [],
    },
    {
      companyName: "Albanero2",
      email: "albanero@gmail.com",
      contactDetails: 7702296369,
      domain: "Data-mesh",
      headCount: 100,
      managers: [],
    },
    {
      companyName: "Albanero1",
      email: "albanero@gmail.com",
      contactDetails: 7702296369,
      domain: "Data-mesh",
      headCount: 100,
      managers: [],
    },
  ]);
  const [popup, setPopup] = useState(false);

  const [editIndex, setEditIndex] = useState(0);
  const [inputDetails, setInputDetails] = useState();
  const [editable, setEditable] = useState(false);
  const [addCompnay, setAddCompany] = useState(false);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleEdit = (details, index) => {
    setInputDetails(details);
    setEditIndex(index);
    console.log(inputDetails);
    setPopup(true);
    setEditable(true);
  };

  const handleDelete = (details) => {
    setData(data.filter((i) => i.companyName !== details.companyName));
    console.log(data);
  };

  const handleAdd = () => {
    setPopup(true);
    setAddCompany(true);
    setEditable(false);
  };

  return (
    <div>
      <h1 className="text-center">Manual Entry App</h1>
      {!popup && (
        <div>
          {" "}
          <button id="add" onClick={handleAdd}>
            {" "}
            Add company
          </button>
          <table>
            {data &&
              data.map((details, index) => {
                let sum = 0;
                details.managers.map((ele) => {
                  // sum+=ele.employees.length
                });
                return (
                  <tr>
                    <th>{details.companyName}</th>
                    <th>{details.email}</th>
                    <th>{details.contactDetails}</th>
                    <th>{details.domain}</th>
                    {/* {index ===0  ? <th>HeadCount</th>:<th>{details.managers.length+sum}</th>} */}
                    <th>{details.headCount}</th>
                    {index === 0 ? (
                      <p>Action</p>
                    ) : (
                      <th class="action">
                        <button
                          class="actionBtn actionBtn1"
                          onClick={() => {
                            handleEdit(details, index);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          class="actionBtn"
                          onClick={() => handleDelete(details)}
                        >
                          Delete
                        </button>
                      </th>
                    )}
                  </tr>
                );
              })}
          </table>
        </div>
      )}
      <Form
        popup={popup}
        settingData={setData}
        companyData={data}
        details={inputDetails}
        indexValue={editIndex}
        popValue={setPopup}
        addCompnay={addCompnay}
        setAddCompany={setAddCompany}
        editable={editable}
      ></Form>
    </div>
  );
}
