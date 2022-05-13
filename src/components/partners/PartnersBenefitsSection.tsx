import Image from 'next/image';
import BenefitsCard from './BenefitsCard';

const PartnersBenefitsSection = () => (
  <div className="relative flex flex-col mt-36 mb-[30rem] lg:mb-[7rem] text-center lg:text-left">
    <h1 className="text-main-green text-4xl lg:text-6xl font-extrabold">Benefits</h1>
    <span className="text-[#F9FAFB] text-xl lg:text-4xl font-normal lg:font-light mt-5 mb-16 lg:mb-14">
      StackOS can bring you all this
    </span>
    <div className="w-full flex justify-center items-center">
      <div className="text-[#E5E7EB] w-full text-left grid grid-cols-2 lg:grid-cols-3">
        <BenefitsCard
          tile="1"
          title="Anonymous Deployment"
          description="Deploy your applications anonymously. No sign-ups, no hassle."
        />
        <BenefitsCard
          tile="2"
          title="True Decentralization"
          description="Make your apps truly decentralized by deploying on StackOS."
        />
        <BenefitsCard
          tile="3"
          title="Super-fast Deployment"
          description="Deploy your applications within a few minutes with no-code UI."
        />
        <div className="col-start-2">
          <BenefitsCard
            tile="4"
            title="Make your apps Unstoppable"
            description="Once deployed on StackOS, your apps can never go down. Ever."
          />
        </div>
        <div className="col-span-2 lg:col-auto">
          <BenefitsCard
            tile="5"
            title="Marketing Benefits"
            description="As a partner, you can leverage StackOS' large community to display your incredible app."
          />
        </div>
      </div>
    </div>
    <div className="lg:hidden absolute w-[150rem] md:w-[150rem] h-[80rem] top-[27rem] -left-[60rem]  duration-500">
      <Image
        src="/assets/partners/benefits-bg-partners-sm.svg"
        alt="background image"
        layout="fill"
        priority
      />
    </div>
    <div className="hidden lg:inline absolute w-[60rem] xl:w-[65rem] 2xl:w-[80rem] h-[58rem] -left-[14rem] xl:-left-[10rem] 2xl:-left-[13rem] top-[5rem] xl:top-[4rem] duration-500">
      <Image
        src="/assets/partners/benefits-bg-partners-lg.svg"
        alt="background image"
        layout="fill"
        priority
      />
    </div>
  </div>
);

export default PartnersBenefitsSection;
