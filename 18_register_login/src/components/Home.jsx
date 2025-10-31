import React, { useEffect } from "react";
import { useAuth } from "../context/UserContextProvider";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, []);

  const username = user?.email

  console.log(username?.split("@"))

  return (
    <>
  <h1>Welcome, {user?.email.split("@")[0]}</h1>
  <button className="btn btn-primary" onClick={() => {logout();  navigate("/login")}}>Logout</button>
  </>
);
}

export default Home;
