import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Show_Data() {
  const [show, setShow] = useState([]);
  async function Show_detail() {
    try {
      const result = await axios.get(
        "https://localhost:7207/Employee/GetEmployee"
      );
      setShow(result.data);
      console.log(result.data);
    } catch (err) {
      alert(err);
    }
  }
  useEffect(() => {
    (async () => await Show_detail())();
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete?');
      if (confirmDelete) {
      await axios.delete(`https://localhost:7207/Employee/${id}`);
      alert("Delete data successfully");
      Show_detail(); 
      }
    } 
    catch (err) {
      alert(err);
    }
  };
 
  const handleEdit = async(id)=>{
    window.location = '/update_data/'+id;
  }
  return (
    <div className="container py-3">
      <div className="card text-center bg-info">
        <h4 className="mt-1">Preview Data</h4>
      </div>
      <div className="row  mt-3">
        <div className="col-md-2">
          <Link
            to="/create_data"
            className="btn btn-sm btn-primary"
            relative="path"
          >
            Create Data
          </Link>
        </div>
        <div className="card bg-light mt-3">
          <div className="col-md-12 py-3">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Empno</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              {show.map(function fn(emp) {
                return (
                  <tbody>
                    <tr key={emp.id}>
                      <td>{emp.empno}</td>
                      <td>{emp.name}</td>
                      <td>{emp.email}</td>
                      <td>
                        <Link onClick={() => handleEdit(emp.id)} relative="path">
                          Edit
                        </Link>
                      </td>
                      <td>
                        <Link onClick={() => handleDelete(emp.id)} relative="path">
                          Delete
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Show_Data;
