import "./App.css";
import Login from "./pages/login/Login";
import ChangePassword from "./pages/login/ChangePassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clients from "./pages/clients/Clients";
import SideBar from "components/sideBar/SideBar";
function App() {
  const loggedIn = true;
  return (
    <div className="App">
      <Router>
        {loggedIn ? <SideBar /> : null}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
