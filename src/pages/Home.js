import React from 'react';
import Welcome from '../components/Home/Welcome';
import Paragraph from '../components/Home/Paragraph';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <Welcome />
    <Paragraph />
  </div>
);

export default Home;
