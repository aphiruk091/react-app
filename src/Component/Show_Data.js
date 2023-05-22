import React from "react";
import { Link } from "react-router-dom";


const Show_Data = () => {

  return (
    <div className="container py-3">
      <div className="card text-center bg-info">
        <h4 className="mt-1">Preview Data</h4>
      </div>
      <div className="row  mt-3">
      <div className="col-md-2">
        <Link to="/create_data" className="btn btn-sm btn-primary" relative="path">
      Create Data
        </Link>
        </div>
        <div className="card bg-light mt-3">
      <div className="col-md-12 py-3">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Show_Data;
