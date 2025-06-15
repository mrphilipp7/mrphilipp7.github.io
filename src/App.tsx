import HomeSection from './components/home-section';
import AboutSection from './components/about-section';
import SkillsSection from './components/skills-section';
import Footer from './components/footer';
import Container from './components/container';

function App() {
  return (
    <>
      <Container>
        {/* fade in intro on page render with header, profile photo, and description */}
        <HomeSection />
        {/* details more about me and what I can do  */}
        <AboutSection />
        {/* post about what I'm working on and what I work with */}
        <SkillsSection />
      </Container>
      <Footer />
    </>
  );
}

export default App;
