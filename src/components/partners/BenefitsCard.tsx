interface Props {
  tile: string;
  title: string;
  description: string;
  colStart?: string;
}

const BenefitsCard = ({ tile, title, description, colStart }: Props) => (
  <div
    className={`mb-16 mx-12 xl:mx-24 2xl:mx-40 max-w-[17rem] flex flex-col text-[#E5E7EB] col-start-${
      colStart ? String(colStart) : 'auto'
    }`}
  >
    <div className="flex mb-7">
      <div className="w-16 h-16 bg-main-green rounded-full p-6 justify-center items-center flex">
        <span className="text-4xl text-main-blue font-semibold">{tile}</span>
      </div>
      <h2 className="text-xl lg:text-2xl font-bold ml-4">{title}</h2>
    </div>
    <span className="text-xl font-normal">{description}</span>
  </div>
);

BenefitsCard.defaultProps = {
  colStart: 'auto',
};

export default BenefitsCard;
