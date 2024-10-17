import "./App.css";
import FrontPage from "./Views/FrontPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Views/LoginPage";
import SignupPage from "./Views/SignupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
