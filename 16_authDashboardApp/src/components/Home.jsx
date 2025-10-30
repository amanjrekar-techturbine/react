import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return <div>This is Home Page</div>;
}

export default Home;
