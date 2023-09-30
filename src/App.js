import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

import MainHeader from './Components/MainHeader';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import ContactUs from './Components/ContactUs';
import Error404 from './Components/Error404';

function App() {
  return (
    <div className="App">

      {/* <ul>
        <li>
          <Link to="/"> HomePage</Link>
        </li>
        <li>
          <Link to="/about"> AboutPage</Link>
        </li>
        <li>
          <Link to="/contact"> ContactUs</Link>
        </li>
      </ul> */}

      <ul>
        <li>
          <NavLink to="/"> HomePage</NavLink>
        </li>
        <li>
          <NavLink to="/about"> AboutPage</NavLink>
        </li>
        <li>
          <NavLink to="/contact"> ContactUs</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<MainHeader/>}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>      
    </div>
  );
}

export default App;
