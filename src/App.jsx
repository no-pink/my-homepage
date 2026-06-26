import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import LoginModal from '@/components/LoginModal/LoginModal';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import Skills from '@/pages/Skills/Skills';
import Projects from '@/pages/Projects/Projects';
import PlanPage from '@/pages/Plan/Plan';
import TimelinePage from '@/pages/Timeline/Timeline';
import Blog from '@/pages/Blog/Blog';
import Contact from '@/pages/Contact/Contact';

// When deployed to GitHub Pages under /my-homepage subdirectory
const basename = import.meta.env.PROD ? '/my-homepage' : '/';

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <AuthProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/plan" element={<PlanPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <LoginModal />
      </AuthProvider>
    </BrowserRouter>
  );
}
