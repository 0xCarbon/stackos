interface Props {
  tile: string;
  title: string;
  description: string;
}

const BenefitsCard = ({ tile, title, description }: Props) => (
  <div className="mb-16 mx-auto  max-w-[17rem] w-full justify-center flex flex-col text-[#E5E7EB]">
    <div className="flex mb-7">
      <div className="w-16 h-16 bg-main-green rounded-full p-6 justify-center items-center flex">
        <span className="text-4xl text-main-blue font-semibold">{tile}</span>
      </div>
      <h2 className="text-xl lg:text-2xl font-bold ml-4">{title}</h2>
    </div>
    <span className="text-xl font-normal">{description}</span>
  </div>
);

export default BenefitsCard;
