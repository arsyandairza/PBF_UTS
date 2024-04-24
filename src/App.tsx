import {
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ManageUser from "./pages/ManageUser";
import ManageDoor from "./pages/ManageDoor";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/manage-user" element={<ManageUser />} />
      <Route path="/manage-door" element={<ManageDoor />} />
    </Routes>
  );
}
export default App;