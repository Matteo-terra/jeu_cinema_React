import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import '../styles/Home.css'



function Home() {
    return (
        <div className="homepage">
        <header>
            <h1>Le Quizz pas fou</h1>
        </header>
        <nav>
          <Link to="/inscription">Je m'inscris</Link>
        </nav>
        </div>
  
    );
  }

  export default Home;