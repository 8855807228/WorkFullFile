import React from "react";
import "./CSS/HospitalClinic.css";
const HospitalClinic = () => {
  const hospitals = [
    {
      id: 1,
      name: "Max Super Speciality Hospital",
      category: "Hospital",
      specialist: "Multispeciality",
      rating: 4,
      location: "Golf Marg",
      distance: "500 m",
    },
    {
      id: 2,
      name: "Max Super Speciality Hospital",
      category: "Hospital",
      specialist: "Multispeciality",
      rating: 3.5,
      location: "Golf Marg",
      distance: "500 m",
    },
    {
      id: 3,
      name: "Max Super Speciality Hospital",
      category: "Hospital",
      specialist: "Multispeciality",
      rating: 4,
      location: "Golf Marg",
      distance: "500 m",
    },
    {
      id: 4,
      name: "Max Super Speciality Hospital",
      category: "Hospital",
      specialist: "Multispeciality",
      rating: 4.5,
      location: "Golf Marg",
      distance: "500 m",
    },
    {
      id: 5,
      name: "Max Super Speciality Hospital",
      category: "Hospital",
      specialist: "Multispeciality",
      rating: 4,
      location: "Golf Marg",
      distance: "500 m",
    },
    {
      id: 6,
      name: "Max Super Speciality Hospital",
      category: "Hospital",
      specialist: "Multispeciality",
      rating: 4,
      location: "Golf Marg",
      distance: "500 m",
    },
    {
      id: 7,
      name: "Max Super Speciality Hospital",
      category: "Hospital",
      specialist: "Multispeciality",
      rating: 3.5,
      location: "Golf Marg",
      distance: "500 m",
    },
    {
      id: 8,
      name: "Max Super Speciality Hospital",
      category: "Hospital",
      specialist: "Multispeciality",
      rating: 4,
      location: "Golf Marg",
      distance: "500 m",
    },
    {
      id: 9,
      name: "Max Super Speciality Hospital",
      category: "Hospital",
      specialist: "Multispeciality",
      rating: 4,
      location: "Golf Marg",
      distance: "500 m",
    },
    {
      id: 10,
      name: "Max Super Speciality Hospital",
      category: "Hospital",
      specialist: "Multispeciality",
      rating: 4,
      location: "Golf Marg",
      distance: "500 m",
    },
  ];
  return (
    <div className="hospital-container">
      <h2>Hospitals & Clinics</h2>
      <div className="hospital-list">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Hospital / Clinic Name</th>
              <th>Category</th>
              <th>Specialist</th>
              <th>Rating</th>
              <th>Location</th>
              <th>Distance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((hospital, index) => (
              <tr key={hospital.id}>
                <td>{index + 1}</td>
                <td>{hospital.name}</td>
                <td>{hospital.category}</td>
                <td>{hospital.specialist}</td>
                <td>{renderRating(hospital.rating)}</td>
                <td>{hospital.location}</td>
                <td>{hospital.distance}</td>
                <td>
                  <button className="view-btn">👁️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const renderRating = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="stars">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i}>★</span>
      ))}
      {halfStar && <span>★</span>}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <span key={i} style={{ color: "#ccc" }}>
          ★
        </span>
      ))}
    </div>
  );
};

export default HospitalClinic;
