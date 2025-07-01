import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import VirtualConsultation from './Components/Services/VirtualConsultation';
import EmergencyCare from './Components/Services/EmergencyCare';
import DigitalPrescriptions from './Components/Services/DigitalPrescriptions';
import HealthMonitoring from './Components/Services/HealthMonitoring';
import LabTests from './Components/Services/LabTests';
import MedicalRecords from './Components/Services/MedicalRecords';
import FindDoctors from './Components/Patient/FindDoctors';
import Appointments from './Components/Patient/Appointments';
import PatientHealthRecords from './Components/Patient/HealthRecords';
import PatientPrescriptions from './Components/Patient/Prescriptions';
import PatientManagement from './Components/Doctor/PatientManagement';
import ScheduleManagement from './Components/Doctor/ScheduleManagement';
import VideoConsultation from './Components/Doctor/VideoConsultation';
import Billing from './Components/Doctor/Billing';
import Personalised from './Components/Personalised';
import FreeDemo from './Components/FreeDemo';
import RequestaDemo from './Components/RequestaDemo';
import About from './Components/About';
import Contact from './Components/Contact';
import WheelchairControl from './Components/WheelchairControl/WheelchairControl';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Service Routes */}
        <Route path="/virtual-consultations" element={<VirtualConsultation />} />
        <Route path="/emergency-care" element={<EmergencyCare />} />
        <Route path="/digital-prescriptions" element={<DigitalPrescriptions />} />
        <Route path="/health-monitoring" element={<HealthMonitoring />} />
        <Route path="/lab-tests" element={<LabTests />} />
        <Route path="/medical-records" element={<MedicalRecords />} />
        <Route path="/wheelchair-control" element={<WheelchairControl />} />

        {/* Patient Routes */}
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/find-doctors" element={<FindDoctors />} />
        <Route path="/patient/medical-records" element={<PatientHealthRecords />} />
        <Route path="/prescriptions" element={<PatientPrescriptions />} />

        {/* Doctor Routes */}
        <Route path="/doctor/patient-management" element={<PatientManagement />} />
        <Route path="/doctor/schedule-management" element={<ScheduleManagement />} />
        <Route path="/doctor/video-consultation" element={<VideoConsultation />} />
        <Route path="/doctor/billing" element={<Billing />} />

        {/* Other Routes */}
        <Route path="/personalised" element={<Personalised />} />
        <Route path="/" element={<Navigate to="/personalised" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/abdm" element={<Personalised />} />
        <Route path="/forbussiness" element={<Personalised />} />
        <Route path="/carrier" element={<Personalised />} />
        <Route path="/reqdemo" element={<RequestaDemo />} />

        {/* Catch all route - Don't redirect to login by default */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
