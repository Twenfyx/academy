// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/About';
import Cennik from './pages/Cennik';
import Kontakt from './pages/Kontakt';
import Polityka from './pages/Polityka';

const App: React.FC = () => {
  return (
    <Routes>
      <Route>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cennik" element={<Cennik />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/polityka-prywatnosci" element={<Polityka />} />
        {/* Add more routes as needed */}
      </Route>
    </Routes>
  );
};

export default App;
