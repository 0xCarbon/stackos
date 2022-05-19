import { Fragment, ReactNode } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BiCheck, BiChevronDown } from 'react-icons/bi';
import StackOSIcon from './StackOSIcon';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

let selected = 56;

type Props = {
  dropdownOptions?: Array<any>;
  className?: string;
  children?: ReactNode;
  header?: string;
};

const StackOSDropdown = ({ children, dropdownOptions, className, header }: Props) => (
  <Menu as="div" className="relative inline-block text-left">
    <div className={className}>
      <Menu.Button className="flex items-center">
        {children}
        <BiChevronDown className="h-5 w-5" aria-hidden="true" />
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#1F2937] ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
        {header && (
          <div className="px-4 py-3">
            <p className="text-[#F9FAFB] font-extralight text-base">{header}</p>
          </div>
        )}
        <div>
          {dropdownOptions?.map((item) => (
            <Menu.Item key={item.id}>
              {({ active }) => (
                <div
                  className={classNames(
                    active || selected === item.id ? 'bg-[#374151]' : '',
                    'relative rounded-md text-white group flex items-start px-4 py-2 text-sm cursor-pointer'
                  )}
                  onClick={() => {
                    selected = item.id;
                  }}
                >
                  <p className="text-main-green">{active}</p>
                  <StackOSIcon className="mr-3" iconName={item.icon} />
                  <div className="flex flex-col justify-start">
                    <span className="font-semibold">{item.title}</span>
                    <span className="text-[#F9FAFB] font-extralight">{item.subtitle}</span>
                  </div>
                  {selected === item.id && (
                    <BiCheck
                      className="mr-3 h-5 w-5 absolute inset-y-4 right-0 items-center"
                      aria-hidden="true"
                      color="#AAFF00"
                    />
                  )}
                </div>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
);

StackOSDropdown.defaultProps = {
  dropdownOptions: [],
  className: '',
  children: null,
  header: undefined,
};

export default StackOSDropdown;