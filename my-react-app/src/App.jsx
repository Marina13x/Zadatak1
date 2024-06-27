
import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Users from "./Users";
import Todos from './Todos';
import Calculator from "./Calculator/Calculator";
import Spinner from './Spinner';


function App ()  {
  const [loading, setLoading] = useState(false);

  const handleNavigation = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500); 
  };

  return (
    <Router>
      <div>
        <nav className='navigation'>
          <ul className='nav-links'>
            <li>
              <Link to="/" onClick={handleNavigation} className='nav-link'>Users</Link>
            </li>
            <li>
              <Link to="/todo" onClick={handleNavigation} className='nav-link'>Todos</Link>
            </li>
            <li>
              <Link to="/calculator" onClick={handleNavigation} className='nav-link'>Calculator</Link>
            </li>
          </ul>
        </nav>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route exact path="/" element={<Users />} />
            <Route path="/todo" element={<Todos />} />
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
