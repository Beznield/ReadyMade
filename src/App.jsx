import React from 'react';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

import Tweet from './Images/Instagram.svg';
import Face from './Images/Facebook.svg';
import Insta from './Images/Instagram.svg';

const App = () => (
    <div className='container'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog/:id' element={<Blog />} />
      </Routes>
      <article>
        &copy;ReadyMade Fashion 2022
        <blockquote>made with love by kolawole omobolaji</blockquote>
      </article>
      <div className="images-container">
      <a href="#"><img src={Tweet} alt="" className='tweet'/></a>
      <a href="#"><img src={Face} alt="" className='face' /></a>
      <a href="#"><img src={Insta} alt="" className='insta'/></a>
      </div>
    </div>
);

export default App;        