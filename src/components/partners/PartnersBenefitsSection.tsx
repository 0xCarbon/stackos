import BenefitsCard from './BenefitsCard';

const PartnersBenefitsSection = () => (
  <div className="flex flex-col mt-36 text-center lg:text-left">
    <h1 className="text-main-green text-4xl lg:text-6xl font-extrabold">Benefits</h1>
    <span className="text-[#F9FAFB] text-xl lg:text-4xl font-normal lg:font-light mt-5 mb-16 lg:mb-14">
      StackOS can bring you all this
    </span>
    <div className="w-full flex justify-center">
      <div className="text-[#E5E7EB] text-left grid grid-cols-2 lg:grid-cols-3">
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
        <BenefitsCard
          tile="4"
          title="Make your apps Unstoppable"
          description="Once deployed on StackOS, your apps can never go down. Ever."
          colStart="3"
        />
        <BenefitsCard
          tile="5"
          title="Marketing Benefits"
          description="As a partner, you can leverage StackOS' large community to display your incredible app."
        />
      </div>
    </div>
  </div>
);

export default PartnersBenefitsSection;
