import React, { useState, useEffect } from "react";
import { Button } from "@platform/service-ui-libraries";
import "./DataBase.scss";
import Pagination from "./Pagination"; // Import the Pagination component
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Icon,
} from "@platform/service-ui-libraries";
// import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import DbButtons from "./DbButtons";

const DataBase = () => {
  const [openModal, setOpenModal] = useState(false);
  const [tablePopUp, setTablePopUp] = useState(false);
  const [originalDataBase, setOriginalDataBase] = useState([
    {
      id: 1,
      name: "Data Base1",
      des: "first data base",
    },
    {
      id: 2,
      name: "Data Base2",
      des: "second data base",
    },
    {
      id: 3,
      name: "Data Base3",
      des: "third data base",
    },
  ]);
  const [dataBase, setDataBase] = useState([...originalDataBase]);
  const [table, setTable] = useState(1);
  const [checked, setChecked] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [data, setData] = useState({
    id: null,
    name: "",
    des: "",
  });

  // Pagination states
  const [paginationData, setPaginationData] = useState([]); // Holds paginated data
  const [serialNo, setSerialNo] = useState(0); // Holds the start number for pagination

  useEffect(() => {
    axios
      .get(`http://localhost:3000/databases`)
      .then((res) => {
        // console.log(res);
        // console.log(res.data)
        console.log(dataBase);
        setDataBase(res.data);
        // setTableData(res.data.map((ele)=>(ele.tables)))
      })
      .catch((e) => console.log(e));
    // setTableData([dataBase[0]?.tables])
  }, []);

  useEffect(() => {
    const arr = dataBase[0]?.tables;
    setTableData(dataBase[0]?.tables);
  }, [dataBase]);

  const handelChange = (e) => {
    let { name, value } = e.target;
    let num = originalDataBase.length;
    setData({ ...data, [name]: value, id: num++ });
  };

  const handelClickOpen = () => {
    setOpenModal(true);
  };

  const deleteDataBase = (i) => {
    if (window.confirm("do you want to delete the database")) {
      setDataBase(dataBase.filter((ele, index) => index !== i));
    }
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleClose1 = () => {
    if (!data.name) alert("Please fill the name filed");
    handleClose();
    setDataBase((prevDataBase) => [...prevDataBase, data]); // Push data into dataBase array
    setData({
      id: null,
      name: "",
      des: "",
    });
  };

  console.log(originalDataBase);

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      setDataBase([...originalDataBase]);
    } else {
      const filteredData = originalDataBase.filter((ele) =>
        ele.name.toLowerCase().includes(value)
      );
      setDataBase(filteredData);
    }
  };

  const deleteTableRow = (i) => {
    setTableData(tableData.filter((ele, index) => index !== i));
  };

  const handleGetSplicedData = (revivedList, startNo) => {
    setPaginationData(revivedList);
    setSerialNo(startNo);
  };

  const handleTable = (ele, i) => {
    console.log("ele", ele);
    console.log("index", i);
    setTableData(ele.tables);
  };

  return (
    <div className="box">
      <div className="left">
        <div className="left-main">
          <div className="hover">Database</div>
          <Button
            sx={{ borderRadius: "5px" }}
            onClick={handelClickOpen}
            variant="contained"
          >
            Create Database
          </Button>

          <Dialog open={openModal} onClose={handleClose}>
            <DialogTitle>Create Database</DialogTitle>
            <DialogContent>
              <form className="db">
                <label htmlFor="name">Data Base Name</label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={data.name}
                  onChange={handelChange}
                />
                <br />
                <br />
                <label htmlFor="des">Description</label>
                <br />
                <input
                  type="text"
                  name="des"
                  id="des"
                  value={data.des}
                  onChange={handelChange}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="error" variant="outlined">
                Cancel
              </Button>
              <Button
                onClick={handleClose1}
                color="success"
                variant="contained"
              >
                Proceed
              </Button>
            </DialogActions>
          </Dialog>
          <div className="search">
            <Icon id="seBr">search</Icon>
            <TextField
              type="search"
              name="search"
              id="standard-bare"
              placeholder="Search Data Base"
              margin="normal"
              style={{ padding: "8px 10px", margin: "5px 10px" }}
              onChange={handleSearchChange}
            />
          </div>
          <div className="btn-db">
            <DbButtons
              dataBase={dataBase}
              handleTable={handleTable}
              deleteDataBase={deleteDataBase}
            />
          </div>
        </div>
        <div className="line"></div>
      </div>
      <div className="right">
        <div className="right-hover">Table</div>
        <Button
          sx={{ borderRadius: "5px" }}
          color="primary"
          variant="contained"
          onClick={() => setTablePopUp(true)}
        >
          Create Table
        </Button>
        <Dialog open={tablePopUp} onClose={() => setTablePopUp(!tablePopUp)}>
          <DialogTitle>Create Table</DialogTitle>
          <DialogContent>
            <form className="db">
              <label htmlFor="">Table Name</label>
              <br />
              <input
                type="text"
                name="tableName"
                id="tableName"
                value={data.name}
                onChange={handelChange}
              />
              <br />
              <br />
              <label htmlFor="des">Table Description</label>
              <br />
              <input
                type="text"
                name="tableDes"
                id="tableDes"
                value={data.des}
                onChange={handelChange}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setTablePopUp(!tablePopUp)}
              color="error"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setTablePopUp(!tablePopUp)}
              color="success"
              variant="contained"
            >
              Proceed
            </Button>
          </DialogActions>
        </Dialog>
        <div>search</div>
        <div>
          {tableData && tableData?.length && (
            <div style={{width: "100%" }}>
              <table className="table" style={{ border: "1px solid" }}>
                <thead>
                  <tr style={{ backgroundColor: "lightblue" }}>
                    <th>
                      <input
                        type="checkbox"
                        name="iy"
                        id="iy"
                        onClick={() => setChecked(!checked)}
                      />
                    </th>
                    <th>TableName</th>
                    <th>Description</th>
                    <th>RowCount</th>
                    <th>CountCount</th>
                    <th>Partition Columns</th>
                    <th>CreatedBy</th>
                    <th>LastModified</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginationData.map((ele, i) => (
                    <tr key={i}>
                      <td>
                        <input
                          type="checkbox"
                          name={ele.name}
                          id={ele.name}
                          checked={checked}
                        />
                      </td>
                      <td>{ele.name}</td>
                      <td>{ele.des}</td>
                      <td>{ele.rowCount}</td>
                      <td>{ele.columnCount}</td>
                      <td>{ele.partitionColumns}</td>
                      <td>{ele.createdBy}</td>
                      <td>{ele.lastModified}</td>
                      <td>
                        <button onClick={() => deleteTableRow(i)}>
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <br />
        <br />
        {tableData && (
          <Pagination
            paginationData={tableData}
            handleGetSplicedData={handleGetSplicedData}
          />
        )}
      </div>
    </div>
  );
};

export default DataBase;
