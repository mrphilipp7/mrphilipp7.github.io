import HomeSection from './components/home-section';
import AboutSection from './components/about-section';

function App() {
  return (
    <>
      <main className="relative bg-background h-auto w-full">
        {/* fade in intro on page render with header, profile photo, and description */}
        <HomeSection />
        {/* details more about me and what I can do  */}
        <AboutSection />
      </main>
    </>
  );
}

export default App;
