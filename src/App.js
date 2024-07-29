import React from 'react';
import Navbar from './components/Navbar';
import ImageHeader from './components/ImageHeader';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Subscription from './components/Subscription';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Navbar />
    <ImageHeader />
    <div className="content">
      <FeaturedArticles />
      <FeaturedTutorials />
      <Subscription />
    </div>
    <Footer />
  </div>
);

export default App;
