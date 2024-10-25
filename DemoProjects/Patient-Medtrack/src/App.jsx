import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar/Navbar";
import Appointment from "./Pages/Appointment";
import Overview from "./Pages/Overview";
import HospitalClinic from "./Pages/HospitalClinic";
import ProfileForm from "./Pages/ProfileForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/Hospital" element={<HospitalClinic />} />
          <Route path="/Profile" element={<ProfileForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
