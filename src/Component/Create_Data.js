import React from "react";

const Create_Data = () => {
  return (
    <div className="container py-2">
      <div>
        <h4>Crate Data</h4>
      </div>
      <div className="row">
        <div className="col-md-6">
         
        </div>
        <div className="col-md-6"></div>
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
  );
};
export default Create_Data;
