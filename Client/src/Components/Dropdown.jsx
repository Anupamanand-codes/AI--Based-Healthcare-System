import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dropdown = ({ dropContents, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleItemClick = (item) => {
    setIsOpen(false);
    
    // Handle Services dropdown items
    if (dropContents.props.children === 'Services') {
      switch(item) {
        case 'Virtual Consultation':
          navigate('/virtual-consultations');
          break;
        case 'Emergency Care':
          navigate('/emergency-care');
          break;
        case 'Digital Prescriptions':
          navigate('/digital-prescriptions');
          break;
        case 'Health Monitoring':
          navigate('/health-monitoring');
          break;
        case 'Lab Tests':
          navigate('/lab-tests');
          break;
        case 'Medical Records':
          navigate('/medical-records');
          break;
        case 'Wheelchair Control':
          navigate('/wheelchair-control');
          break;
        default:
          navigate('/');
      }
      return;
    }

    // Handle For Doctors dropdown
    if (dropContents.props.children === 'For Doctors') {
      switch(item) {
        case 'Patient Management':
          navigate('/doctor/patient-management');
          break;
        case 'Schedule Management':
          navigate('/doctor/schedule-management');
          break;
        case 'Video Consultation':
          navigate('/doctor/video-consultation');
          break;
        case 'Billing System':
          navigate('/doctor/billing');
          break;
        default:
          navigate('/');
      }
      return;
    }

    // Handle For Patients dropdown
    if (dropContents.props.children === 'For Patients') {
      switch(item) {
        case 'Book Appointment':
          navigate('/appointments');
          break;
        case 'Find Doctors':
          navigate('/find-doctors');
          break;
        case 'Medical Records':
          navigate('/patient/medical-records');
          break;
        default:
          navigate('/');
      }
      return;
    }

    // Default navigation for other items
    const path = item.toLowerCase().replace(/\s+/g, '-');
    navigate(`/${path}`);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2"
      >
        {dropContents}
      </button>
      
      {isOpen && (
        <div className="absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {items.map((item, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;