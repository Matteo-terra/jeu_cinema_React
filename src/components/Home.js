import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import '../styles/Home.css'



function Home() {
    return (
        <div>

          <header>
            <h1>Bienvenue sur le Quiz !</h1>
          </header>
          <div class="inscription">
            <nav>
              <Link to="/inscription">Je m'inscris</Link>
            </nav>
          </div>
        
        </div>
  
    );
  }

  export default Home;