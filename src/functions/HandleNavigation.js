import { useNavigate, useLocation } from 'react-router-dom';

export const useHandleNavClick = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (id) => {
    if (id === 'home') {
      // Navigate to the home page and scroll to the top
      navigate('/portfolio', { replace: true });
      window.scrollTo(0, 0); // Scroll to top directly without delay
    } else if (id === 'contact') {
      // Scroll to the bottom of the page for the contact section
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    } else if (location.pathname === '/portfolio') {
      // If already on the /portfolio page, scroll to the section
      scrollToSection(id);
    } else {
      // Otherwise, navigate to /portfolio and then scroll to the section
      navigate('/portfolio');
      setTimeout(() => {
        scrollToSection(id);
      }, 100); // Add a small delay to allow page rendering
    }
  };

  return handleNavClick;
};