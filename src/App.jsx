import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import GetStarted from "./Pages/GetStarted.jsx";
import Register from "./Pages/Register.jsx";
import "./index.css";

const Layout = ({ children }) => {
  const location = useLocation();

  const hideFooter =
    location.pathname === "/get-started" ||
    location.pathname === "/register";

  return (
    <>
      {/* <Navbar /> */}

      <div className="mt-6">{children}</div>

      {!hideFooter && <Footer />}
    </>
  );
};


const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
