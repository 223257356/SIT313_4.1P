import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ImageHeader from './components/ImageHeader';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Subscription from './components/Subscription';
import Footer from './components/Footer';
import Login from './components/Login';   // Login component from login folder
import Signup from './components/Signup'; // Signup component from login folder


const App = () => {
    return (
      <Router>
        <Navbar /> {/* Your Navbar */}
        <ImageHeader /> {/* Image header for your app */}
        <Routes>
          <Route path="/" element={
            <div className="content">
              <FeaturedArticles />
              <FeaturedTutorials />
              <Subscription />
            </div>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    );
  };

export default App;
