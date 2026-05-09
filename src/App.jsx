import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Students from './pages/Students';
import StudentProfile from './pages/StudentProfile';
import Alumni from './pages/Alumni';
import AlumniProfile from './pages/AlumniProfile';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

const Layout = ({ children, hideFooter }) => (
  <>
    <Navbar />
    {children}
    {!hideFooter && <Footer />}
  </>
);

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/students" element={<Layout><Students /></Layout>} />
          <Route path="/students/:id" element={<Layout><StudentProfile /></Layout>} />
          <Route path="/alumni" element={<Layout><Alumni /></Layout>} />
          <Route path="/alumni/:id" element={<Layout><AlumniProfile /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/admin" element={<Layout hideFooter><Admin /></Layout>} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
