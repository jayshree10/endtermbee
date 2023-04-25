import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = ({user}) => {
  const navigate = useNavigate()


  useEffect(() => {
    const userValueFromLocal = JSON.parse(localStorage.getItem('user'))
    if (userValueFromLocal?.email === "email@gmail.com" && userValueFromLocal?.password === "123456") {
      navigate("/")
    }
    else {
      navigate("./login")
    }
  }, [user])

  return (
    <header>
    
    <div className='wrapper'>
      {/* <div className='img'>
      <img src="./Images/bg.jpg"></img>

      </div> */}

      
      
    <ul className='Nav'>
      <li>
          <Link to='/'><button className='button'>Home</button></Link>
      </li>
      <li>
          <Link to='/about'><button className='button'>About</button></Link>
      </li>
      <li>
          <Link to='/profile'><button className='button'>Contact Us</button></Link>
      </li>
    </ul>
    </div>
    <div className='welcometext'>
          <h1 className='title'>Findtutor.com</h1>
          {/* <Link to='/'>Home</Link> */}
    </div>
    <div className='logo'>
      <img src="./Images/flogo.jpg"></img>

      </div>

    </header>
    
  );
}

export default Header