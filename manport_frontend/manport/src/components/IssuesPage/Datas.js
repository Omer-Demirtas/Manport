import React from "react";
import Switch from '@material-ui/core/Switch';

export default function Datas() {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr class="something">
          <td class="col bg-info">A</td>
          <td class="col bg-success">B</td>
          <td class="col bg-info">C</td>
          <td class="col-md-3 bg-success justify-content.a align-items-center">
            <div className="row">
              <div className="col">
                <button type="button" class="btn btn-danger btn-sm">
                  Del
                </button>
              </div>
              <div className="col">
                <button type="button" class="btn btn-danger btn-sm">
                  Del
                </button>
              </div>
              <div class="col">
              <Switch 
                checked={true}
                onChange={() => console.log(`change`)} 
                name="checkedA" /> 
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
