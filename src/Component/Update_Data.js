import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Update_Data(){
  const [id, setId] = useState("");
  const [empno, setEmpno] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {updateId} = useParams();

  useEffect(() => {
    Get_detail();
  },[]);

  async function Get_detail() {
    try {
      const result = await axios.get(`https://localhost:7207/Employee/${updateId}`
      );
      setId(result.data.id);
      setEmpno(result.data.empno);
      setName(result.data.name);
      setEmail(result.data.email);
      console.log(result.data);
    } catch (err) {
      alert(err);
    }
  }
  async function Update(event) {
    event.preventDefault();
    try {
      await axios.put(`https://localhost:7207/Employee/${id}`, {
        id: id,
        empno: empno,
        name: name,
        email: email,
      });
      alert("Update data Successfully");
    } catch (err) {
      alert(err);
    }
  }
  
  return (
    <div className="container py-3">
      <div className="card text-center bg-info">
        <h4 className="mt-1">Update Data</h4>
      </div>
      <div className="row  py-3">
        <div className="bg-light">
        <div class="col-1">
            <label for="exampleFormControlInput1" class="form-label">
            </label>
            <input
              type="text"
              readOnly 
              style={{ display: 'none' }}
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
              class="form-control"
              id="id"
              placeholder="id"
            ></input>
          </div>
          <div class="col-md-3">
            <label for="exampleFormControlInput1" class="form-label">
              Employee No
            </label>
            <input
              type="text"
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
            <button type="button" onClick={Update} class="btn btn-success">
              Update
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Update_Data;
