import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
   return (
      <div className="static-top head-border heading">
         <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
               <h1 className="navbar-brand"><NavLink className="text-light text-decoration-none" to="/home">Ligend Coaching Center</NavLink></h1>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                     <p className="nav-link"><NavLink style={{ color: 'white' }} activeStyle={{
                        fontWeight: "bold",
                        color: "goldenRod"
                     }} className="text-decoration-none" to="/home">Home</NavLink></p>
                     <p className="nav-link"><NavLink style={{ color: 'white' }} activeStyle={{
                        fontWeight: "bold",
                        color: "goldenRod"
                     }} className="text-decoration-none" to="/courses">Courses</NavLink></p>
                     <p className="nav-link"><NavLink style={{ color: 'white' }} activeStyle={{
                        fontWeight: "bold",
                        color: "goldenRod"
                     }} className="text-decoration-none" to="/teachers">Teachers</NavLink></p>
                     <p className="nav-link"><NavLink style={{ color: 'white' }} activeStyle={{
                        fontWeight: "bold",
                        color: "goldenRod"
                     }} className="text-decoration-none" to="/about">About Us</NavLink></p>
                  </div>
               </div>
            </div>
         </nav>
      </div>
   );
};

export default Header;