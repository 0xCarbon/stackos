import { Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface Props {
  showModal: boolean;
  onCloseModal?: () => void;
  children?: ReactNode;
  title?: ReactNode;
  footer?: ReactNode;
  className?: string;
  size?: string;
}

const StackOSModal = ({
  showModal,
  onCloseModal = () => null,
  children,
  title,
  footer,
  className,
  size = 'full',
}: Props) => (
  <Transition.Root show={showModal} as={Fragment}>
    <Dialog as="div" className="relative z-50" onClose={() => onCloseModal()}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-[#000000A6] bg-opacity-75 transition-opacity" />
      </Transition.Child>

      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel
              className={`relative bg-[#1F2937] rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all max-w-xs sm:max-w-md w-full ${
                size === 'small' && 'max-w-xs sm:max-w-xs'
              }`}
            >
              <div>
                <div className={className}>
                  <Dialog.Title as="h3">{title}</Dialog.Title>
                  {children}
                </div>
              </div>
              {footer}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
);

export default StackOSModal;
