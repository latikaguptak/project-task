import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const CsvReader = () => {
  const [data, setData] =  useState(() => {
    const savedData = localStorage.getItem("data");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0]

    if (file) {
      Papa.parse(file, {
        header: true, // Treat the first row as headers
        skipEmptyLines: true,
        complete: (results) => {
          setData(results.data); // Parsed CSV data
        },
        error: (error) => {
          console.error("Error reading CSV file:", error);
        },
      });
    }
  };

  return (
    <div>
      <h1>CSV File Reader</h1>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
      />
      <table border="1" cellPadding="5 " className="overflow-scroll">
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CsvReader;
