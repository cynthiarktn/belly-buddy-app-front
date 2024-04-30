import React, {useContext} from 'react';
import {AuthContext} from "./context/AuthContext";
import {Route, Routes, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import FindRecipe from "./pages/FindRecipe";
import UserHeader from "./components/layout/UserHeader";
import GuestHeader from "./components/layout/GuestHeader";
import Inventory from "./pages/Inventory";
import Favorites from "./pages/Favorites";
import UserProfile from "./pages/UserProfile";

export default function App() {
  const {isLoggedIn, logout} = useContext(AuthContext);

  const handleLogout = () => {
    const {logout} = useContext(AuthContext);
    logout();
  };

  return (
    <>
      {isLoggedIn ? <UserHeader /> : <GuestHeader />}

      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/findRecipe" element={<FindRecipe />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/favoriteRecipes" element={<Favorites />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/login" element={<FindRecipe />} />
            <Route path="/" onNavigate={handleLogout} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
}
