import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/style.css";

const Record = (props) => (
  <tr>
    <td>{props.record.task}</td>
    <td>{props.record.description}</td>
    <td>{props.record.category}</td>
    <td>{props.record.date}</td>
    <td>
      <Link className="btn btn-link" to={`/detail`}>
        details
      </Link>{" "}
      |{" "}
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function List() {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3000/record`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();

      setRecords(records);
    }

    getRecords();
  }, []);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:3000/record/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    const filteredRecords = records.filter((record) => {
      return (
        record.task.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    return filteredRecords.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  return (
    <div className="tasklist-container">
      <h3 className="tasklist-heading">Tasks</h3>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
  <input
    type="text"
    placeholder="Search by task, description, or category"
    style={{ width: "50%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginRight: "10px" }}
    onChange={(event) => setSearchTerm(event.target.value)}
  />
</div>

      <table className="tasklist">
        <thead>
          <tr>
            <th>task</th>
            <th>description</th>
            <th>category</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}
