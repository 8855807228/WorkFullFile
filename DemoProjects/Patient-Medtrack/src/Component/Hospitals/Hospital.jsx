import React from "react";
import logo from "../Assets/images/logo-badge.svg";
import "./Hospital.css";
const Hospital = () => {
  return (
    <div class="table-container">
      <table class="table caption-top">
        <caption>
          <h3>List of nearby hospitals</h3>
        </caption>
        <thead>
          <tr>
            <th scope="col">H</th>
            <th scope="col">Name</th>
            <th scope="col">Distance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <img src={logo} alt="" />
            </th>
            <td>Mark</td>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">
              <img src={logo} alt="" />
            </th>
            <td>Jacob</td>
            <td>11</td>
          </tr>
          <tr>
            <th scope="row">
              <img src={logo} alt="" />
            </th>
            <td>Jacob</td>
            <td>11</td>
          </tr>
          <tr>
            <th scope="row">
              <img src={logo} alt="" />
            </th>
            <td>Jacob</td>
            <td>11</td>
          </tr>
          <tr>
            <th scope="row">
              <img src={logo} alt="" />
            </th>
            <td>Jacob</td>
            <td>11</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Hospital;
