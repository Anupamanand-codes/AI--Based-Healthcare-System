import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";

function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className='fixed z-[999] w-full px-20 py-8 font-["DM Sans"] flex justify-around bg-slate-50'>
      <div className="Logo px-10">
        <Link 
          to="/personalised" 
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          <span className="text-4xl font-bold">
            <span className="text-blue-600">Cure</span>
            <span className="text-orange-500">India</span>
          </span>
        </Link>
      </div>

      <div className="Links flex gap-10 p-2">
        <Dropdown
          dropContents={<span>Services</span>}
          items={[
            "Virtual Consultation",
            "Emergency Care",
            "Digital Prescriptions",
            "Health Monitoring",
            "Lab Tests",
            "Medical Records",
            "Wheelchair Control"
          ]}
        />
        
        <Dropdown
          dropContents={<span className="text-lg font-normal">For Patients</span>}
          items={[
            "Book Appointment",
            "Find Doctors",
            "Medical Records",
            "Prescriptions"
          ]}
        />

        <Dropdown
          dropContents={<span className="text-lg font-normal">For Doctors</span>}
          items={[
            "Patient Management",
            "Schedule Management",
            "Video Consultation",
            "Billing System"
          ]}
        />

        <Link
          to="/about"
          className="text-lg font-normal"
        >
          About Us
        </Link>

        <Link
          to="/contact"
          className="text-lg font-normal"
        >
          Contact
        </Link>

        <button
          onClick={handleLoginClick}
          className="text-gray-700 hover:text-blue-600 px-3 py-2"
        >
          Login
        </button>

        <Link 
          to="/register" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
