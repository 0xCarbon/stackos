import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Carousel } from 'react-responsive-carousel';
import partners from '@/components/home/helpers';

const StackOSCarousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(1);

  const [isMobileScreen, setIsMobileScreen] = useState<boolean>();

  const updateMedia = () => {
    setIsMobileScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener('resize', updateMedia, { passive: true });
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  function handleNextItem() {
    if (carouselIndex > 3) {
      setCarouselIndex(1);
    } else {
      setCarouselIndex(carouselIndex + 1);
    }
  }

  function handlePrevItem() {
    if (carouselIndex < 2) {
      setCarouselIndex(3);
    } else {
      setCarouselIndex(carouselIndex - 1);
    }
  }

  return (
    <div className="flex items-center">
      <IoIosArrowBack
        onClick={() => handlePrevItem()}
        className="m-2 2xl:m-10 cursor-pointer hidden"
        color="#FFF"
        size={isMobileScreen ? 45 : 60}
      />

      <Carousel
        showThumbs={false}
        selectedItem={carouselIndex}
        centerMode
        showArrows={false}
        centerSlidePercentage={isMobileScreen ? 33.3 : 20}
        infiniteLoop
        swipeScrollTolerance={500}
        showStatus={false}
        showIndicators={false}
        className="h-20 md:h-[6.5rem] lg:h-[8.5rem] 2xl:h-36 w-[15rem] md:w-[34rem] lg:w-[46rem] 2xl:w-[58rem]"
      >
        {partners.map((partner) => (
          <div key={partner.id}>
            <div className="flex w-[4.5rem] h-[4.5rem] md:w-[6.2rem] md:h-[6.2rem] lg:w-[8.5rem] lg:h-[8.5rem] 2xl:w-[9rem] 2xl:h-[9rem]">
              <a
                href={partner.link}
                target="_blank"
                rel="noreferrer"
                className="flex h-full w-full items-center justify-center bg-cover bg-carousel-circle"
              >
                <div className="p-3 md:p-4 lg:p-5 h-full w-full">
                  <Image height={60} width={60} src={partner.image} layout="responsive" />
                </div>
              </a>
            </div>
          </div>
        ))}
      </Carousel>
      <IoIosArrowForward
        onClick={() => handleNextItem()}
        className="cursor-pointer"
        color="#FFF"
        size={isMobileScreen ? 45 : 60}
      />
    </div>
  );
};

export default StackOSCarousel;
