import { ImFacebook2 } from 'react-icons/im';
import { BsGithub, BsTwitter, BsDribbble } from 'react-icons/bs';

const Footer = () => (
  <div className="mt-auto">
    {/* top div */}
    <div className="flex px-4 lg:px-9 justify-between">
      {/* left side */}
      <div className="flex flex-col text-white">
        <span className="text-[30px]">Let&apos;s keep in touch!</span>
        <span className="text-[16px] md:text-[18px] max-w-[300px] md:max-w-[450px] lg:max-w-[592px] py-2 md:py-4 lg:pt-0">
          Learn more, stay up to date and be a part of our active community:
        </span>
        <div className="flex space-x-2 2xl:mt-5">
          <div className="bg-white rounded-full p-3">
            <BsTwitter color="#3182CE" />
          </div>
          <div className="bg-white rounded-full p-3">
            <ImFacebook2 color="#63B3ED" />
          </div>
          <div className="bg-white rounded-full p-3">
            <BsDribbble color="#F687B3" />
          </div>
          <div className="bg-white rounded-full p-3">
            <BsGithub color="#3A71DF" />
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex text-white text-[12px] md:text-[14px] space-x-10 lg:space-x-12 xl:space-x-32 2xl:space-x-56">
        <div className="flex flex-col space-y-1 md:space-y-3 lg:space-y-2 2xl:space-y-4">
          <span>USEFUL LINKS</span>
          <span>About Us</span>
          <span>Blog</span>
          <span>Github</span>
          <span>FAQ</span>
        </div>
        <div className="flex flex-col space-y-1 md:space-y-3 lg:space-y-2 2xl:space-y-4">
          <span>OTHER RESOURCES</span>
          <span>License</span>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>
    {/* bottom div */}
    <div className="border-t-[1px] text-white text-[12px] md:text-[14px] pb-20 md:pb-1 lg:pb-24 md:pt-5 lg:pt-8 md:mt-8 lg:mt-14 2xl:mt-24 pt-3 text-center">
      <span>© 2021 by StackOS.io. Protocol runs on the Decentralized Cloud.</span>
    </div>
  </div>
);

export default Footer;
