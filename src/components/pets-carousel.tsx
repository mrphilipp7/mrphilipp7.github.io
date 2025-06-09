import { PictureCollection } from './ui/picture-collections';
import sammy from '../assets/sammy.webp';
import clue from '../assets/clue.webp';
import noah from '../assets/noah.webp';
import lady from '../assets/lady.webp';

const PetsCarousel = () => {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: 'Sarah Chen',
      designation: 'Product Manager at TechFlow',
      src: sammy,
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: 'Michael Rodriguez',
      designation: 'CTO at InnovateSphere',
      src: noah,
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: 'Emily Watson',
      designation: 'Operations Director at CloudScale',
      src: clue,
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: 'James Kim',
      designation: 'Engineering Lead at DataPro',
      src: lady,
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="px-2 max-w-96">
        <p className="text-xl md:text-3xl font-semibold text-left text-primary">
          My pets
        </p>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          When I’m not coding, you’ll probably find me hanging out with my dog
          and three cats — they run the house, I just pay the rent.
        </p>
      </div>
      <div className=" w-full max-w-96">
        <PictureCollection testimonials={testimonials} />
      </div>
    </div>
  );
};

export default PetsCarousel;
