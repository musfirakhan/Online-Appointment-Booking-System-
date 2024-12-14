import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { Treatments } from './pages/Treatments';
import { BookAppointment } from './pages/BookAppointment';
import { Admin } from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pink-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;