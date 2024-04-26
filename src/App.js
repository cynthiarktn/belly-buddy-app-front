import React, { useContext } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import RegisterView from './pages/authentication/RegisterView';
import LoginView from "./pages/authentication/LoginView"
import GuestHeader from "./components/layout/GuestHeader";
import UserHeader from "./components/layout/UserHeader";
import DashboardView from "./pages/DashboardView";
import Home from "./pages/home/Home";


export default function App() {
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <>
      {isLoggedIn ? <UserHeader /> : <GuestHeader />}

      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/login" element={<DashboardView />} />
            <Route path="/logout" element={<Home />} />

          </>
        ) : (
          <>
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
            <Route path="/welcome" element={<Home />} />
            <Route path="/" element={<Home />} />
          </>
        )}
      </Routes>
    </>
  );
}
