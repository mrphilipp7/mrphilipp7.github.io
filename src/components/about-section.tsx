import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import PetsCarousel from './pets-carousel';
import TravelCarousel from './travel-carousel';

const AboutSection = () => {
  return (
    <section className="h-screen w-full mx-auto container " id="about">
      <header className="text-center pb-12 pt-4">
        <h2 className="text-3xl md:text-7xl font-bold text-foreground text-center">
          A little about{' '}
          <span className="text-primary whitespace-nowrap">me</span>
        </h2>
      </header>
      <div className="flex justify-center items-center flex-wrap gap-8">
        <motion.div
          initial={{ opacity: 0.0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          className="space-y-12"
        >
          {/* getting started in programming */}
          <Card className="z-10 max-w-96">
            <CardHeader>
              <CardTitle className="text-xl md:text-3xl font-semibold text-left text-primary">
                How it started
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                I stumbled into coding in high school by accident — I took an
                intro to C++ just to fill my schedule. But something clicked. I
                liked it, and I wasn’t half bad at it either. That one class
                turned into a passion, and eventually into a computer science
                major at Southeast Missouri State.
              </p>
            </CardContent>
          </Card>
          {/* travel collection */}
          <TravelCarousel />
        </motion.div>
        {/* animation or photo */}
        <motion.div
          initial={{ opacity: 0.0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          className="space-y-12"
        >
          {/* collection stack of the cats/dogs */}
          <PetsCarousel />
          {/* experience */}
          <Card className="z-10 max-w-96">
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
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
