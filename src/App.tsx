import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HowTo from "./pages/EpicDocs/HowTo";
import Code from "./pages/EpicDocs/Code";
import Docs from "./pages/Docs";
import Login from "./pages/Login";
import "@picocss/pico/css/pico.orange.min.css";

import Hardware from "./pages/EpicDocs/hardware";
import Innovation from "./pages/EpicDocs/Innovation";
import Signup from "./pages/Signup";
import GUI from "./pages/EpicDocs/Gui";
import BeyondCode from "./pages/EpicDocs/BeyondCode";
import AWS from "./pages/EpicDocs/aws";
import Footer from "./components/footer";
import FAQ from "./pages/FAQ";
import User from "./pages/LoggedIn/user";
import Admin from "./pages/LoggedIn/admin";
import Control from "./pages/LoggedIn/control";

function App() {
  return (
    <>
      <main className="container-fluid">
        <Navbar />
      </main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HowTo" element={<HowTo />} />
        <Route path="/HowTo/Code" element={<Code />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Docs" element={<Docs />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Docs/Hardware/Code" element={<Code />} />
        <Route path="/Docs/BeyondCode" element={<BeyondCode />} />
        <Route path="/Docs/Innovation" element={<Innovation />} />
        <Route path="/Docs/GUI" element={<GUI />} />
        <Route path="/Docs/AWS" element={<AWS />} />
        <Route path="/Docs/Hardware" element={<Hardware />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/control" element={<Control />} />
      </Routes>
      <main className="container-fluid">
        <Footer />
      </main>
    </>
  );
}

export default App;
