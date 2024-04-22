import React, { useContext } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import RegisterView from './view/RegisterView';
import LoginView from "./view/LoginView"
import GuestHeader from "./components/GuestHeader";
import UserHeader from "./components/UserHeader";
import DashboardView from "./view/DashboardView";
import WelcomeView from "./view/WelcomeView";


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
            <Route path="/logout" element={<WelcomeView />} />

          </>
        ) : (
          <>
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
            <Route path="/welcome" element={<WelcomeView />} />
            <Route path="/" element={<WelcomeView />} />
          </>
        )}
      </Routes>
    </>
  );
}
