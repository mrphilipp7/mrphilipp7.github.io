import { PictureCollection } from './ui/picture-collections';
import craterLake from '../assets/craterLake.webp';
import cruise from '../assets/cruise.webp';
import denver from '../assets/denver.webp';
import denverGroup from '../assets/denverGroup.webp';

const TravelCarousel = () => {
  const testimonials = [
    {
      name: 'craterLake',
      src: craterLake,
    },
    {
      name: 'cruise',
      src: cruise,
    },
    {
      name: 'denver',
      src: denver,
    },
    {
      name: 'denver group',
      src: denverGroup,
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="px-2 max-w-96">
        <p className="text-xl md:text-3xl font-semibold text-left text-primary">
          My travels
        </p>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          If I’m not snuggling with my cats, I’m probably off on a new
          adventure—passport in one hand, snacks in the other. Traveling is my
          favorite side quest!
        </p>
      </div>
      <div className=" w-full max-w-96">
        <PictureCollection testimonials={testimonials} />
      </div>
    </div>
  );
};

export default TravelCarousel;
