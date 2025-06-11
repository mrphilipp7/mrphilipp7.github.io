import { motion } from 'motion/react';

const SkillsSection = () => {
  return (
    <section className="w-full mx-auto container pt-4" id="skills">
      <header className="text-center pb-12 pt-4">
        <h2 className="text-3xl md:text-7xl font-bold text-foreground text-center">
          What do I <span className="text-primary whitespace-nowrap">do?</span>
        </h2>
      </header>
      <div className="flex justify-center items-center flex-wrap gap-8">
        <motion.div
          initial={{ opacity: 0.0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          className="space-y-12 mx-auto container px-4 max-w-[800px]"
        >
          {/* List of programming languages that I've worked with */}
          <div className="text-center">
            <p className="text-muted-foreground">
              I’ve spent time with a bunch of languages...
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="bg-muted px-3 py-1 rounded text-sm font-medium text-foreground">
                Html & css
              </span>
              <span className="bg-muted px-3 py-1 rounded text-sm font-medium text-foreground">
                JavaScript
              </span>
              <span className="bg-muted px-3 py-1 rounded text-sm font-medium text-foreground">
                TypeScript
              </span>
              <span className="bg-muted px-3 py-1 rounded text-sm font-medium text-foreground">
                Node.js
              </span>
              <span className="bg-muted px-3 py-1 rounded text-sm font-medium text-foreground">
                Python
              </span>
              <span className="bg-muted px-3 py-1 rounded text-sm font-medium text-foreground">
                SQL
              </span>
            </div>
          </div>
          {/* explain what skills and things I have worked with */}
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            These days, I spend most of my time in Node.js — it’s where I feel
            the most at home. I love the speed of building something useful from
            scratch.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Most of my personal projects are still in-progress (read: messy but
            fun), but they're where I explore ideas, test new tech, and try
            things that might break.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-center">
            Some of my experiments live on
            <a
              href="https://github.com/mrphilipp7"
              className="text-primary hover:underline mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            and
            <a
              href="https://www.npmjs.com/~mrphilipp7"
              className="text-primary hover:underline mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              npm
            </a>
            — feel free to explore!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
