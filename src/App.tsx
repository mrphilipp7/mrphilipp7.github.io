import { motion } from 'motion/react';
import { AuroraBackground } from './components/ui/aurora-background';
import ProfilePhoto from './components/profile-photo';

function App() {
  return (
    <>
      <AuroraBackground>
        {/* fade in intro on page render with header, profile photo, and description */}
        <motion.section
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <h1 className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Hello my name is <span className="text-primary">Zach</span>
          </h1>
          <ProfilePhoto />
          <p className="text-lg text-muted-foreground text-center">
            Building cool things, one semicolon at a time.
          </p>
        </motion.section>
      </AuroraBackground>
    </>
  );
}

export default App;
