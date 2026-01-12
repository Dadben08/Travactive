import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Footer from "./Components/Footer.jsx";
import DashboardLayout from "./Components/DashboardLayout.jsx";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import GetStarted from "./Pages/GetStarted.jsx";
import Register from "./Pages/StudentDashboard/Register.jsx";
import Login from "./Pages/StudentDashboard/Login.jsx";
import TravLogin from "../src/Pages/TravlerDashboard/LoginPage.jsx";
import TravSignUp from "../src/Pages/TravlerDashboard/SignUpPage.jsx";

// Dashboard pages
import Overview from "./Pages/StudentDashboard/Overview.jsx";
import Explore from "./Pages/StudentDashboard/Explore.jsx";
import Saved from "./Pages/StudentDashboard/Saved.jsx";
import AskTravact from "./Pages/StudentDashboard/AskTravact.jsx";
import Settings from "./Pages/StudentDashboard/Settings.jsx";


import "./index.css";

const Layout = ({ children }) => {
  const location = useLocation();

  const hideFooter =
    location.pathname.startsWith("/dashboard") ||
    location.pathname === "/get-started" ||
    location.pathname === "/register" ||
    location.pathname === "/signup" ||
    location.pathname === "/TravLogin" ||
    location.pathname === "/login";

  return (
    <>
      <div className="mt-6">{children}</div>
      {!hideFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public pages */}
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
         <Route path="/signup" element={<TravSignUp />} />
        <Route path="/TravLogin" element={<TravLogin />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard (nested routes) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview  />} /> {/* 👈 DEFAULT */}
          <Route path="overview" element={<Overview />} />
          <Route path="explore" element={<Explore />} />
          <Route path="saved" element={<Saved />} />
          <Route path="ask" element={<AskTravact />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
