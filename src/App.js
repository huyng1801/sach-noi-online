import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/admin/DashboardPage';
import HomePage from './pages/user/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/dashboard" element={<DashboardPage />} />
        {/* Add other routes like '/users', '/logout', etc. */}
      </Routes>
    </Router>
  );
};

export default App;
