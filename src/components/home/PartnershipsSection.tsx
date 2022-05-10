import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Separator } from '@radix-ui/react-separator';
import { useTranslation } from 'react-i18next';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Carousel } from 'react-responsive-carousel';
import LearnMore from './LearnMore';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const partners = [
  { id: 1, image: '/assets/home/partner-saito.svg', link: 'https://saito.io/' },
  { id: 2, image: '/assets/home/partner-saito.svg', link: 'https://www.escrowprotocol.app/' },
  { id: 3, image: '/assets/home/partner-pinknode.svg', link: 'https://pinknode.io/' },
  { id: 4, image: '/assets/home/partner-identomat.svg', link: 'https://identomat.com/' },
  { id: 5, image: '/assets/home/partner-wsninja.svg', link: 'https://www.ws.ninja/' },
  { id: 6, image: '/assets/home/partner-murall.svg', link: 'https://murall.art/home' },
  { id: 7, image: '/assets/home/partner-saito.svg', link: 'https://www.tapit.kr/' },
  { id: 8, image: '/assets/home/partner-saito.svg', link: 'https://followtheseed.vc/' },
];

const PartnershipsSection = () => {
  const { t } = useTranslation();
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
    if (carouselIndex > 5) {
      setCarouselIndex(1);
    } else {
      setCarouselIndex(carouselIndex + 1);
    }
  }

  return (
    <div className="flex flex-col justify-end items-end py-20">
      <div className="flex flex-row justify-end items-center mb-9 child:duration-500">
        <h2 className="text-[#D9D9D9] font-extrabold text-4xl lg:text-6xl mx-5">
          {t('HOME_PARTNERSHIPS_TITLE')}
        </h2>
        <Separator className="h-10 lg:h-14 w-[0.4rem] lg:w-2 xl:w-2 2xl:w-[0.45rem] bg-main-green" />
      </div>
      <p className="text-white font-normal text-base text-right mb-3 lg:mb-6 2xl:mb-10 lg:text-xl max-w-xl lg:max-w-2xl 2xl:max-w-3xl duration-500 ">
        {t('HOME_PARTNERSHIPS_DESCRIPTION')}
      </p>
      <LearnMore />

      <div className="flex flex-row w-full items-center justify-end child:duration-500">
        <Carousel
          selectedItem={carouselIndex}
          centerMode
          showArrows={false}
          centerSlidePercentage={isMobileScreen ? 33.3 : 20}
          infiniteLoop
          swipeScrollTolerance={500}
          showStatus={false}
          showIndicators={false}
          className="h-20 md:h-24 lg:h-36 w-[17rem] md:w-[35rem] lg:w-[50rem] 2xl:w-[58rem]"
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <IoIosArrowBack
                title={label}
                onClick={onClickHandler}
                className="absolute cursor-pointer"
                color="#FFF"
                size={20}
              />
            )
          }
        >
          {partners.map((partner) => (
            <div key={partner.id}>
              <div className="flex w-[5rem] h-[5rem] md:w-[6.5rem] md:h-[6.5rem] lg:w-[9rem] lg:h-[9rem]">
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-full w-full items-center justify-center bg-cover bg-carousel-circle"
                >
                  <div className="p-2 md:p-4 lg:p-5 h-full w-full">
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
        <div className="flex flex-col text-white">
          <p className="whitespace-nowrap font-semibold text-3xl line leading-7 select-none">
            30 +
          </p>
          <p className="font-light select-none">partners</p>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsSection;
