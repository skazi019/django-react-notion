import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPost from './Components/blogpost';
import ReactGA from "react-ga4";
import { hydrate, render } from "react-dom";
import ErrorPage from './404';


try {
  setTimeout(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
  }, 3000);
} catch (error) {
  console.log('Error in analytics: ', error);
}

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/:slug' element={<BlogPost />} />
        </Routes>
      </Router>
    </React.StrictMode>, rootElement
  )
} else {
  render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/:slug' element={<BlogPost />} />
        </Routes>
      </Router>
    </React.StrictMode>, rootElement
  );
}

// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path='/' element={<App />} />
//         <Route path='/:slug' element={<BlogPost />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );
