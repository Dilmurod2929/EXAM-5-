import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Home = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    let token = localStorage.getItem("token")
    if(token) navigate('/dashboard')
  },[])
  
  return (
    <div className="landingPage min-h-screen">
      <div className="blackCover">
        <Navbar />
        <div className="absolute inset-0 grid place-items-center">
            <Box className="text-white flex flex-col items-center justify-between">
              <h1 className="text-7xl font-bold">Developer Connector</h1>
              <p className="text-2xl py-10"> Create a developer profile/portfolio, share posts and get help from other developers</p>
              <div className="flex gap-3">
                <Link className="button rounded opacity-90 py-1 text-white bg-cyan-600" to="register">
                  Sign Up
                </Link>
                <Link className="button rounded bg-gray-200 text-black py-1" to="login">
                  Log In
                </Link>
              </div>
            </Box>
        </div>
      </div>
    </div>
  );
};

export default Home;