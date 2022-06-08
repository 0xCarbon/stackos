import { Disclosure } from '@headlessui/react';
import { Separator } from '@radix-ui/react-separator';
import { useTranslation } from 'react-i18next';
import { BiChevronDown } from 'react-icons/bi';

interface Props {
  title: string;
  content: string;
}

const FaqDisclosure = ({ title, content }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Separator className="w-full h-px bg-[#4B5563] my-8" />
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between items-center text-white duration-500">
              <p className="font-bold text-[1.375rem]">{t(title)}</p>
              <BiChevronDown
                className={`${
                  open ? 'transform rotate-180' : ''
                } text-4xl text-main-green duration-500`}
              />
            </Disclosure.Button>
            <div className="duration-500">
              <Disclosure.Panel
                style={{ transition: 'ease-in-out', transitionDuration: '500ms' }}
                className="duration-500 mt-4"
              >
                <p className="font-normal text-xl text-white">{t(content)}</p>
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default FaqDisclosure;
