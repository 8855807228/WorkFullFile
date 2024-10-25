import React from "react";
import "./CSS/ProfileForm.css";

const ProfileForm = () => {
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <form className="profile-form">
        <div className="section">
          <h3>Personal Information</h3>
          <div className="row">
            <div className="input-group">
              <label>Patient Id</label>
              <input type="text" defaultValue="PAT235-5693" />
            </div>
            <div className="input-group">
              <label>Patient Name</label>
              <input type="text" defaultValue="Mr. Patient" />
            </div>
            <div className="input-group">
              <label>Gender</label>
              <select>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="input-group">
              <label>Date of Birth</label>
              <input type="date" />
            </div>
          </div>
          <div className="row">
            <div className="input-group">
              <label>Blood Group</label>
              <input type="text" defaultValue="AB+" />
            </div>
            <div className="input-group">
              <label>Height (cm)</label>
              <input type="number" defaultValue="170" />
            </div>
            <div className="input-group">
              <label>Weight (kg)</label>
              <input type="number" defaultValue="72" />
            </div>
            <div className="input-group">
              <label>Aadhaar Number</label>
              <input type="text" defaultValue="2356 2325 2541" />
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Communication Details</h3>
          <div className="row">
            <div className="input-group">
              <label>Address</label>
              <input type="text" defaultValue="123, Sector 45" />
            </div>
            <div className="input-group">
              <label>Landmark</label>
              <input type="text" defaultValue="Near ABC School" />
            </div>
            <div className="input-group">
              <label>City</label>
              <input type="text" defaultValue="Noida" />
            </div>
            <div className="input-group">
              <label>Country</label>
              <select>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-group">
              <label>Email</label>
              <input type="email" defaultValue="patient@abc.com" />
            </div>
            <div className="input-group">
              <label>Self Contact No.</label>
              <input type="text" defaultValue="+91-9856235236" />
            </div>
            <div className="input-group">
              <label>Emergency Contact Person</label>
              <input type="text" defaultValue="Mrs. Patient Wife" />
            </div>
            <div className="input-group">
              <label>Emergency Contact No.</label>
              <input type="text" defaultValue="+91-985523695" />
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Insurance Information</h3>
          <div className="row">
            <div className="input-group">
              <label>Type of Insurance</label>
              <select>
                <option value="PPO">PPO</option>
                <option value="HMO">HMO</option>
              </select>
            </div>
            <div className="input-group">
              <label>Policy Company Name</label>
              <input type="text" defaultValue="ICICI Health Insurance" />
            </div>
            <div className="input-group">
              <label>Policy ID</label>
              <input type="text" defaultValue="POB-213456897" />
            </div>
            <div className="input-group">
              <label>Policy Status</label>
              <select>
                <option value="Activated">Activated</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-group">
              <label>Policy Holder Relationship with Patient</label>
              <select>
                <option value="self">Self</option>
                <option value="spouse">Spouse</option>
              </select>
            </div>
            <div className="input-group">
              <label>Policy Holder Name</label>
              <input type="text" defaultValue="Mr. Patient" />
            </div>
            <div className="input-group">
              <label>Policy Holder D.O.B</label>
              <input type="date" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
