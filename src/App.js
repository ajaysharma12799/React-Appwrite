import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import Navbar from "./components/Navbar";
import { account } from "./appwrite/appwrite";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const getSession = () => {
    const session = account.get();
    session
      .then((resp) => {
        setCurrentUser(resp);
      })
      .catch((error) => {
        console.log(error);
        setCurrentUser(null);
      });
  };

  useEffect(() => {
    getSession();
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={<Profile currentUser={currentUser} />}
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
