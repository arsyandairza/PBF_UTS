import {
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ManageUser from "./pages/ManageUser";
import LogActivity from "./pages/LogActivity";
import LandingPage from "./pages/LandingPage";
import EditData from "./pages/EditData";
import Monitoring from "./pages/Monitoring";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/manage-user" element={<ManageUser />} />
      <Route path="/log-activity" element={<LogActivity />} />
      <Route path="/edit-data" element={<EditData />} />
      <Route path="/monitoring" element={<Monitoring />} />
    </Routes>
  );
}
export default App;