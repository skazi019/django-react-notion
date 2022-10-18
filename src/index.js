import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPost from './Components/blogpost';
import ReactGA from "react-ga4";


const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = 'Kaushal Sharma\'s Blog'
try {
  setTimeout(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
    console.log('Analytics started successfully');
  }, 3000);
} catch (error) {
  console.log('Error in analytics: ', error);

}

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/:slug' element={<BlogPost />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
