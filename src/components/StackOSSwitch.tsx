/* eslint-disable no-unused-vars */
import { Switch } from '@headlessui/react';

type Props = {
  value: boolean;
  onChange?: (value: any) => void;
};

const StackOSSwitch = ({ value, onChange = () => null }: Props) => (
  <Switch
    checked={value}
    onChange={(e: any) => onChange(e)}
    className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    <span className="sr-only">Use setting</span>
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bg-white w-full h-full rounded-md"
    />
    <span
      aria-hidden="true"
      className={`
          ${
            value ? 'bg-indigo-600' : 'bg-gray-200'
          } pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200
        `}
    />
    <span
      aria-hidden="true"
      className={`
          ${
            value ? 'translate-x-5' : 'translate-x-0'
          } pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200
        `}
    />
  </Switch>
);
export default StackOSSwitch;
