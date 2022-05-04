import { Separator } from '@radix-ui/react-separator';
import { BiLinkExternal } from 'react-icons/bi';

const SectionTechnology = () => (
  <div>
    <div>
      <div>
        <span>Technology</span>
        <span>Technology</span>
      </div>
      <Separator className="w-[3px] bg-main-green mr-[30px]" />
    </div>
    <span>
      StackOS is a blockchain protocol, a platform connecting developers with a decentralized
      network of compute power.Use the simplicity of a no-code, UI-based deployment engine or the
      power of shell access to the underling Kubernetes clusters.
    </span>
    <div>
      <BiLinkExternal color="#AAFF00" size="14px" />
      <span>Learn more</span>
      <Separator className="w-[3px] bg-main-green mr-[30px]" />
    </div>
  </div>
);

export default SectionTechnology;
