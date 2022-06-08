import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import FlyoutItem, { Icons } from './FlyoutItem';

interface Resources {
  iconName: keyof Icons;
  name: string;
  description: string;
  href: string;
}

const resources: Resources[] = [
  {
    iconName: 'discord',
    name: 'Discord',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    href: 'https://discord.com/invite/W3phTcR8sS',
  },
  {
    iconName: 'communities',
    name: 'Communities',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    href: '#',
  },
  {
    iconName: 'whitepaper',
    name: 'Whitepaper',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    href: 'https://docsend.com/view/wq7qxzjk7zsd3wph',
  },
  {
    iconName: 'ambassador',
    name: 'Ambassador Program',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    href: '#',
  },
];

const FlyoutNav = () => (
  <Popover className="relative z-50">
    {() => (
      <>
        <Popover.Button className="rounded-md inline-flex items-center focus:outline-none hover:text-main-green duration-500">
          <span>Resources</span>
          <ChevronDownIcon className="ml-2 h-5 w-5 group-hover:text-gray-500" aria-hidden="true" />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
            {({ close }) => (
              <div
                onMouseLeave={() => close()}
                className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
              >
                <div className="relative grid gap-6 p-5 bg-dark-grey sm:gap-8 sm:p-8">
                  {resources.map((item) => (
                    <FlyoutItem
                      iconName={item.iconName}
                      name={item.name}
                      description={item.description}
                      href={item.href}
                    />
                  ))}
                </div>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
);

export default FlyoutNav;
