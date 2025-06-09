import { PictureCollection } from './ui/picture-collections';
import sammy from '../assets/sammy.webp';
import clue from '../assets/clue.webp';
import noah from '../assets/noah.webp';
import lady from '../assets/lady.webp';

const PetsCarousel = () => {
  const testimonials = [
    {
      name: 'sammy cat',
      src: sammy,
    },
    {
      name: 'noah cat',
      src: noah,
    },
    {
      name: 'clue cat',
      src: clue,
    },
    {
      name: 'lady dog',
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
