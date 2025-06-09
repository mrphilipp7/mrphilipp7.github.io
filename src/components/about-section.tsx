import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import PetsCarousel from './pets-carousel';

const AboutSection = () => {
  return (
    <section className="h-screen w-full mx-auto container flex flex-wrap justify-center items-center">
      <motion.div
        id="about"
        className=" flex  flex-wrap py-4 px-4"
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
      >
        {/* tell my story */}
        <div className="flex-1 flex flex-col justify-center items-start relative gap-4">
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
        </div>
      </motion.div>
      {/* animation or photo */}
      <div>
        <PetsCarousel />
      </div>
    </section>
  );
};

export default AboutSection;
