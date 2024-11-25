import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/admin/DashboardPage';
import HomePage from './pages/user/HomePage';
// import AddBook from '../src/components/admin/book/AddBook';
import AddBook from './components/admin/book/AddBook'; 
import EditBook from './components/admin/book/EditBook';
import Login from './components/admin/login/Login';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/dashboard" element={<DashboardPage />} />
        <Route path="/admin/newbook"  element={<AddBook />} />
        <Route path="/admin/editbook/:id" element={<EditBook />} />
        <Route path="/login" element={<Login />} />
        {/* Add other routes like '/users', '/logout', etc. */}
      </Routes>
    </Router>
  );
};

export default App;
