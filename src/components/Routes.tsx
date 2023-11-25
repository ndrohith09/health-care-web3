import { Route , Routes } from "react-router-dom"; 
import Symptoms from "./Symptoms";
import TokenForm from "./TokenForm";
import DoctorList from "./Doctors";
import DoctorPredict from "./DoctorPredict"; 
import Appointments from "./Appointments";
const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<Symptoms />} />
            <Route path="/form" element={<TokenForm />} /> 
            <Route path="/list" element={<DoctorList />} />
            <Route path="/predict" element={<DoctorPredict />} />
            <Route path="/appointments" element={<Appointments />} />
        </Routes >
    );
}
export default routes;