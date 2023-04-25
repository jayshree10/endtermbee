import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function LoginForm({ error, user, setUser }) {

  const navigate = useNavigate()

  const [details, setDetails] = useState({ name: "", password: "" });
  const submitHandler = e => {
    e.preventDefault();
    if (details.email === "email@gmail.com" && details.password === "123456") {
      setUser({
        password: details.password,
        email: details.email
      });
      localStorage.setItem('user',JSON.stringify({ //JSON.stringify() makes it easier to store but when you need to get. you need to use JSON.parse()
        password: details.password,
        email: details.email
      }))
      console.log("hi")
    } else {
      console.log("Details dont match");
    }
  }


  // useEffect(() => {
  //   if (user.email === "email@gmail.com" && user.password === "123456") {
  //     navigate("./home")
  //   }
  //   else {
  //     navigate("/")
  //   }
  // }, [user])

  
  return (
    <form onSubmit={submitHandler}>

      <div className="form-inner">
        <h2>Login</h2>
        {(error != "") ? (<div className="error">{error}</div>) : ""}
        <div className="form-group">
          <form name="form1">
            <label htmlFor="name">Name:    </label>
            {/* <select id="name">
              <option value="select"></option>
              <option value="admin">Admin</option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select> */}
            <input type="text" name="name" id="name" placeholder="name"></input>
          </form>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:    </label>
          <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} placeholder="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:    </label>
          <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} placeholder="password" />
        </div>
        <div className='login'>
        <input type="submit" value="  LOGIN  " />
        </div>
      </div>
      <div className='images'>
        <h1>Welcome to Findtutor.com</h1>
        <p>Explore your interest and get started!</p>
        <p>Connect to your perfect Teacher, by your criteria.</p>
        
      </div>

      <div className='grid'>
          <div className='griditem'>
          <div className='card'>
              <img className='cardimg' src="./Images/c1.jpg"></img>
              <div className='cardcontent'>
                <h1 className='cardhead'>Get started!</h1>
                <p className='cardtext'>Login by Entering your Name, Email and Password<p>Dont have an account? sign up</p></p>
                <button className='login' >
                  Sign Up
                </button>
              </div>
          </div>
        </div> 
        <div className='griditem'>
          <div className='card'>
              <img className='cardimg' src="./Images/c2.jpg"></img>
              <div className='cardcontent'>
                <h1 className='cardhead'>Three simple steps</h1>
                <p className='cardtext'>
                  <p>1. Search</p>
                  <p>2. Contact</p>
                  <p>3. Organize</p>
                </p>
                {/* <button className='cardbtn'>
                  visit
                </button> */}
          <Link to='/'><button  className='login'> Home </button></Link>
          </div>
          </div>
        </div>
                    
        <div className='griditem'>
          <div className='card'>
              <img className='cardimg' src="./Images/c3.jpg"></img>
              <div className='cardcontent'>
                <h1 className='cardhead'>Get to know us more!</h1>
                <p className='cardtext'>Our website serves an opportunity to learn at your Home and comfort</p>
                <Link to='/about'><button className='login'> About us </button></Link>

              </div>
          </div>
        </div>          
        <div className='griditem'>
          <div className='card'>
              <img className='cardimg' src="./Images/c4.jpg"></img>
              <div className='cardcontent'>
                <h1 className='cardhead'>Convey your message to us.</h1>
                <p className='cardtext'>Wanna write a review or feedback?</p>
                <Link to='/profile'><button  className='login'>Contact Us</button></Link>
              </div>
          </div>
        </div>          
             
      </div>

    </form>
    

  )
}

export default LoginForm;