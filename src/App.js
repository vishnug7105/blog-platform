import React from "react";
import './App.css';
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Create from "./NewBlog";
import Footer from "./Footer";
import { Routes, Route, } from "react-router-dom";


const App = () => (

    <div className="container">

    <Routes>
    <Route path="/"   exact Component={Home} />
    <Route path='/blog/:id' Component={Blog} />
    <Route path='/newblog' Component={Create} />
    </Routes>
    <Footer />
    </div>

  );


export default App;
