import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/admin/DashboardPage';
import HomePage from './pages/user/HomePage';
import StoryPage from './pages/admin/StoryPage';
import AuthorPage from './pages/admin/AuthorPage';
import NarratorPage from './pages/admin/NarratorPage';
import AudioPage from './pages/admin/AudioPage';
import CategoryPage from './pages/admin/CategoryPage';
import RatingPage from './pages/admin/RatingPage';
import UserPage from './pages/admin/UserPage';
import LoginPage from './pages/admin/LoginPage';
import StoryDetailPage from './pages/user/StoryPageDetailPage';
import StoryByCategoryPage from './pages/user/StoryByCategoryPage';
import StoryByNarratorPage from './pages/user/StoryByNarratorPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story/:storyId" element={<StoryDetailPage />} />
        <Route path="/category/:categoryId" element={<StoryByCategoryPage />} />
        <Route path="/narrator/:narratorId" element={<StoryByNarratorPage />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<DashboardPage />} />
        <Route path="/admin/stories"  element={<StoryPage />} />
        <Route path="/admin/authors"  element={<AuthorPage />} />
        <Route path="/admin/categories"  element={<CategoryPage />} />
        <Route path="/admin/narrators"  element={<NarratorPage />} />
        <Route path="/admin/audios"  element={<AudioPage />} />
        <Route path="/admin/ratings"  element={<RatingPage />} />
        <Route path="/admin/users"  element={<UserPage />} />
        {/* Add other routes like '/users', '/logout', etc. */}
      </Routes>
    </Router>
  );
};

export default App;
