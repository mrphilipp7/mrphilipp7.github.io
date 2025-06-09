import { motion } from 'motion/react';
import ProfilePhoto from './components/profile-photo';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';

function App() {
  return (
    <>
      <main className="relative bg-background h-auto w-full">
        {/* fade in intro on page render with header, profile photo, and description */}
        <motion.section
          id="home"
          className="h-screen w-full flex flex-col items-center justify-center px-4"
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
        >
          <h1 className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Hello my name is <span className="text-primary">Zach</span>
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
        </motion.section>
        <motion.section
          id="about"
          className="h-screen w-full flex  flex-wrap py-4 px-4"
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
        >
          {/* tell my story */}
          <div className="flex-1 flex flex-col justify-center items-start ">
            {/* getting started in programming */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl md:text-3xl font-semibold text-left text-primary">
                  How it started
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  I stumbled into coding in high school by accident — I took an
                  intro to C++ just to fill my schedule. But something clicked.
                  I liked it, and I wasn’t half bad at it either. That one class
                  turned into a passion, and eventually into a computer science
                  major at Southeast Missouri State.
                </p>
              </CardContent>
            </Card>
            {/* experience */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl md:text-3xl font-semibold text-left text-primary">
                  Since then
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Since graduating, I’ve had the chance to work across a variety
                  of tech domains — from systems development and mobile apps to
                  full-stack web applications. Every project has sharpened my
                  skills, stretched my thinking, and reinforced why I love
                  building things with code.
                </p>
              </CardContent>
            </Card>
          </div>
          {/* animation or photo */}
          <div className=" flex-2"></div>
        </motion.section>
      </main>
    </>
  );
}

export default App;
