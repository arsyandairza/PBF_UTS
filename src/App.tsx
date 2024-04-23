import {
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ManageUser from "./pages/ManageUser";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/manage-user" element={<ManageUser />} />
    </Routes>
  );
}
export default App;