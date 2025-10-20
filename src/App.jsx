import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Homepage from './pages/Homepage';
import Info from './pages/Info';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Forum from './pages/Forum';
import Affiliates from './pages/Affiliates';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/info" element={<Info />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/affiliates" element={<Affiliates />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
