import React from "react";
import "./CSS/Appointment..css";

const appointments = [
  {
    id: 1,
    appointmentId: "APP-98547",
    doctor: "Dr. Naveen Jindal",
    department: "Endocrinology",
    date: "July 05, 2023",
    time: "10:00 am",
    status: "Progress",
  },
  {
    id: 2,
    appointmentId: "APP-98547",
    doctor: "Dr. Naveen Jindal",
    department: "Urology",
    date: "July 05, 2023",
    time: "10:00 am",
    status: "Progress",
  },
  {
    id: 3,
    appointmentId: "APP-98547",
    doctor: "Dr. Naveen Jindal",
    department: "Neurology",
    date: "July 05, 2023",
    time: "10:00 am",
    status: "Completed",
  },
  // Add more appointment objects here
];

const Appointment = () => {
  return (
    <div className="appointment-container">
      <h2>Appointments</h2>
      <div className="appointments-list">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Appointment ID</th>
              <th>Doctor</th>
              <th>Department</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={appointment.id}>
                <td>{index + 1}</td>
                <td>{appointment.appointmentId}</td>
                <td>
                  <img
                    src="https://via.placeholder.com/40"
                    alt="doctor"
                    className="doctor-image"
                  />{" "}
                  {appointment.doctor}
                </td>
                <td>{appointment.department}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>
                  <span
                    className={`status ${
                      appointment.status === "Completed"
                        ? "completed"
                        : "in-progress"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </td>
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

export default Appointment;
