import React, { useState } from "react";
import axios from "axios";
const Create_Data = () => {
  const [empno, setEmpno] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function Insert(evant) {
    try {
      await axios.post("https://localhost:7207/Employee/AddEmp", {
        empno: empno,
        name: name,
        email: email,
      });
      alert("Insert data Successfully");
      Clear();
    } catch (err) {
      alert(err);
    }
  }
  function Clear(evant) {
    setEmpno("");
    setName("");
    setEmail("");
  }

  return (
    <div className="container py-3">
      <div className="card text-center bg-info">
        <h4 className="mt-1">Create Data</h4>
      </div>
      <div className="row  py-3">
        <div className="bg-light">
          <div class="col-md-3">
            <label for="exampleFormControlInput1" class="form-label">
              Employee No
            </label>
            <input
              type="email"
              value={empno}
              onChange={(e) => {
                setEmpno(e.target.value);
              }}
              class="form-control"
              id="Employee"
              placeholder="Employee"
            ></input>
          </div>
          <div class="col-md-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
            ></input>
          </div>
          <div class="col-md-4">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            ></input>
          </div>
          <div className="col-md-3 py-3">
            <button type="button" onClick={Insert} class="btn btn-success">
              Insert
            </button>
            &nbsp;
            <button type="button" onClick={Clear} class="btn btn-danger">
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Create_Data;
