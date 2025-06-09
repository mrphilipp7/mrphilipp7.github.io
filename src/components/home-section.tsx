import ProfilePhoto from './profile-photo';
import { motion } from 'motion/react';

const HomeSection = () => {
  return (
    <section
      id="home"
      className="h-screen w-full flex flex-col items-center justify-center"
    >
      <motion.div
        id="home"
        className="px-4 text-center flex flex-col justify-center items-center"
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
      >
        <h1 className="text-3xl md:text-7xl font-bold text-foreground text-center">
          Hello my name is{' '}
          <span className="text-primary whitespace-nowrap">Zach Philipp</span>
        </h1>
        <ProfilePhoto />
        <p className="text-lg text-muted-foreground text-center mt-4">
          Building cool things, one semicolon at a time.
        </p>
        <a
          href="#about"
          className="mt-6 text-primary hover:underline text-sm font-medium transition-colors cursor-pointer z-10 relative"
        >
          Learn more ↓
        </a>
      </motion.div>
    </section>
  );
};

export default HomeSection;
