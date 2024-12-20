// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SubmitFormPage from './pages/SubmitFormPage';
import AdminDashboard from './pages/AdminDashboard';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import FileListPage from './pages/FileList';
import seoImage from './images/seo-image.jpg'; // Import the image

function NavbarWrapper() {
  const location = useLocation();
  
  // Render Navbar only on the homepage
  if (location.pathname === "/") {
    return <Navbar />;
  }
  
  return null; // Don't render Navbar for other routes
}

function App() {
  return (
    <Router>
      <NavbarWrapper /> {/* Conditionally render Navbar */}
      <Routes>
        <Route path="/" element={
          <>
            <Helmet>
              <title>Home | CampusGuide</title>
              <meta name="description" content="Welcome to the home page of My Website. Find more about us here." />
              <meta name="keywords" content="home, my website, welcome" />
              <meta property="og:image" content={seoImage} /> {/* Using the imported image for SEO */}
            </Helmet>
            <HomePage />
          </>
        } />
        <Route path="/submit" element={
          <>
            <Helmet>
              <title>Submit Form - CampusGuide</title>
              <meta name="description" content="Submit your form here for My Website." />
              <meta name="keywords" content="form submission, submit, My Website" />
              <meta property="og:image" content={seoImage} /> {/* Using the imported image for SEO */}
            </Helmet>
            <SubmitFormPage />
          </>
        } />
        <Route path="/admin" element={
          <>
            <Helmet>
              <title>Admin Dashboard - CampusGuide</title>
              <meta name="description" content="Admin dashboard for managing My Website content." />
              <meta name="keywords" content="admin, dashboard, My Website" />
              <meta property="og:image" content={seoImage} /> {/* Using the imported image for SEO */}
            </Helmet>
            <AdminDashboard />
          </>
        } />
        <Route path="*" element={
          <>
            <Helmet>
              <title>Page Not Found - CampusGuide</title>
              <meta name="description" content="Oops! The page you are looking for does not exist." />
              <meta property="og:image" content={seoImage} /> {/* Using the imported image for SEO */}
            </Helmet>
            <NotFound />
          </>
        } />
        <Route path="/controls" element={
          <>
            <Helmet>
              <title>Controls - CampusGuide</title>
              <meta name="description" content="Control panel for My Website." />
              <meta property="og:image" content={seoImage} /> {/* Using the imported image for SEO */}
            </Helmet>
            <FileListPage />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
