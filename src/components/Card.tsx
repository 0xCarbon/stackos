import Image from 'next/image';

type Props = {
  src: string;
  title: string;
  subtitle: string;
};

const Card = ({ src, title, subtitle }: Props) => (
  <div className="shadow-[0_0_47px_rgba(255,255,255,0.12)] rounded bg-main-blue w-[289px] h-[429px] md:mx-4 lg:mx-28 xl:mx-28 2xl:mx-28">
    <Image src={src} width={289} height={187} />
    <div className="flex flex-col justify-center items-center">
      <span className="text-[#F9FAFB] font-bold text-2xl mt-6 mb-4">{title}</span>
      <span className="text-[#F3F4F6] font-normal text-base max-w-[240px]">{subtitle}</span>
    </div>
  </div>
);

export default Card;
