import StackOSDropdown from './StackOSDropdown';

type Props = {
  dropdownOptions?: Array<any>;
};

const StackOSInput = ({ dropdownOptions }: Props) => (
  <div className="relative h-10 shadow-sm child:bg-[#374151] child:rounded-md">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <span className="text-[#6B7280] text-base">$</span>
    </div>
    <input
      type="text"
      name="price"
      id="price"
      className="block w-full h-full pl-7 pr-12 text-white text-base outline-0"
      placeholder="0.00"
      aria-describedby="price-currency"
    />
    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
      <span className="text-[#6B7280] text-base" id="price-currency">
        {dropdownOptions?.length ? (
          <StackOSDropdown
            className="text-[#D1D5DB]"
            dropdownOptions={dropdownOptions}
            header="Select a network"
          >
            <span className="pr-2 text-[#6B7280]">ETH</span>
          </StackOSDropdown>
        ) : (
          'STA'
        )}
      </span>
    </div>
  </div>
);

StackOSInput.defaultProps = {
  dropdownOptions: [],
};

export default StackOSInput;
