import React, { useState } from "react";
import "../Assignment/App";

const CsvToJson = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [jsonResult, setJsonResult] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setCsvFile(file);
  };

  const convertToJSON = () => {
    if (!csvFile) {
      alert("Please upload a CSV file first.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const csvString = event.target.result;

      const lines = csvString.split(/\r?\n/);

      const headers = lines[0].split(",").map((header) => header.trim());

      const jsonData = [];

      for (let i = 1; i < lines.length; i++) {
        const data = lines[i].split(",").map((value) => value.trim());
        const entry = {};
        for (let j = 0; j < headers.length; j++) {
          entry[headers[j]] = data[j];
        }
        jsonData.push(entry);
      }

      setJsonResult(jsonData);
    };

    reader.readAsText(csvFile);
  };

  return (
    <div>
      <h2 className="title">CSV to JSON Converter</h2>
      <label className="label">Choose A File</label>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button className="btn convertBtn" onClick={convertToJSON}>
        Convert
      </button>
      {jsonResult && (
  <div>
    <h3>Converted JSON:</h3>
    <pre>
    {jsonResult && (
  <div>
   
    {jsonResult.map((obj, index) => (
      <div key={index}>
        <pre>{JSON.stringify(obj, null, 2)}</pre>
      </div>
    ))}
  </div>
)}

    </pre>
  </div>
)}

    </div>
  );
};

export default CsvToJson;
