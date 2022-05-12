import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import menus from './helpers';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-[#1F2937] lg:bg-transparent overflow-hidden">
      <Popover>
        <div className="px-5 md:px-7 py-4 lg:px-10 2xl:px-20 lg:py-16 duration-500">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-center"
            aria-label="Global"
          >
            <div className="flex items-center flex-1 lg:absolute lg:inset-y-0 lg:left-0">
              <div className="flex items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <a className="w-36 h-8 lg:w-36 lg:h-8 xl:w-40 xl:h-10 2xl:w-48 2xl:h-12 xl:mr-2 2xl:mr-16 duration-500">
                    <span className="sr-only">Workflow</span>
                    <Image
                      width={152}
                      height={32}
                      layout="responsive"
                      src="/stackos-logo.svg"
                      alt="stackos logo"
                    />
                  </a>
                </Link>
                <div className="-mr-2 flex items-center lg:hidden">
                  <Popover.Button className="bg-[#1F2937] rounded-md p-2 inline-flex items-center justify-center text-[#D1D5DB] hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:justify-between lg:space-x-8 2xl:space-x-14 lg:text-white lg:font-medium lg:text-xl lg:items-center">
              {menus.map((item) => (
                <Link key={item.id} href={item.href}>
                  <a>{t(item.name)}</a>
                </Link>
              ))}
            </div>
            <div className="hidden lg:absolute lg:flex lg:items-center lg:justify-end lg:inset-y-0 lg:right-0">
              <a
                target="_blank"
                href="https://app.stackos.io/"
                rel="noreferrer"
                className="flex items-center xl:ml-56 2xl:ml-auto justify-center px-4 2xl:px-6 py-2 border border-main-green rounded-md text-main-green text-sm"
              >
                {t('HEADER_DEPLOY_BUTTON')}
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
          >
            <div className="rounded-lg shadow-md bg-[#1F2937] ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <Link href="/">
                  <a className="w-36 h-8 lg:w-36 lg:h-8 xl:w-40 xl:h-10 2xl:w-48 2xl:h-12 xl:mr-2 2xl:mr-16 duration-500">
                    <Image
                      width={152}
                      height={32}
                      layout="responsive"
                      src="/stackos-logo.svg"
                      alt="stackos logo"
                    />
                  </a>
                </Link>
                <div className="-mr-2">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                <div className="text-white font-medium text-xl flex flex-col">
                  {menus.map((item) => (
                    <Link key={item.id} href={item.href}>
                      <a className="rounded-md px-3 py-2 hover:text-gray-900 hover:bg-gray-500">
                        {t(item.name)}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <a
                target="_blank"
                href="https://app.stackos.io/"
                rel="noreferrer"
                className="flex items-center justify-center my-4 px-4 py-2 border border-main-green rounded-md text-main-green text-sm"
              >
                {t('HEADER_DEPLOY_BUTTON')}
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};

export default Header;
