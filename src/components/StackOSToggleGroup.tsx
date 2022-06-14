/* eslint-disable react-hooks/exhaustive-deps */
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import React, { useEffect, useState } from 'react';

interface Item {
  id: number;
  title: string;
  value: number | null;
}

interface Props {
  defaultValue?: number;
  data: Item[];
  // eslint-disable-next-line no-unused-vars
  onChange?: (item: Item) => void;
}

const StackOSToggleGroup: React.FC<Props> = ({ data, onChange, defaultValue }) => {
  const [selected, setSelected] = useState(data[0]);
  const [customValue, setCustomValue] = useState<number | null>(null);

  useEffect(() => {
    if (defaultValue) {
      const itemInData = data.find((item) => item.value === defaultValue);
      if (itemInData) {
        setSelected(itemInData);
      } else {
        setSelected({ id: 5, title: 'custom', value: defaultValue });
        setCustomValue(defaultValue);
      }
    }
  }, []);

  useEffect(() => {
    if (selected.title === 'custom') {
      if (onChange) onChange({ ...selected, value: customValue });
    }
  }, [selected, customValue]);

  function handleOnChange(item: Item) {
    setSelected(item);
    if (onChange) {
      if (item.title !== 'custom') onChange(item);
    }
  }

  return (
    <ToggleGroup.Root
      className="flex w-full bg-[#2D3948] h-[2.938rem] rounded-md overflow-hidden"
      type="single"
    >
      {data.map((item) => (
        <ToggleGroup.Item
          className={`${
            selected.title === item.title ? '' : 'hover:bg-[#354252]'
          }  m-[0.19rem] flex flex-1 justify-center items-center rounded-md text-[#CFCFCF] focus:bg-main-green focus:text-main-blue focus:font-semibold duration-300`}
          title={item.title}
          value={String(item.value)}
          onClick={() => handleOnChange(item)}
          key={item.id}
        >
          {item.title === 'custom' ? (
            <input
              value={customValue || undefined}
              type="number"
              className={`${
                selected.title === item.title && 'border-[0.05rem] border-main-green'
              } ${
                selected.title && customValue
                  ? 'font-semibold'
                  : 'border-[#d94141] focus:border-main-green'
              } flex h-full px-2 rounded-md text-center w-[4.81rem] bg-inherit placeholder-[#CFCFCF] focus:border-[0.05rem] outline-none overflow-hidden text-ellipsis`}
              placeholder="Custom"
              onChange={(event) =>
                setCustomValue(event.target.value ? Number(event.target.value) : null)
              }
            />
          ) : (
            <span
              className={`${
                selected.title === item.title
                  ? 'bg-main-green font-semibold text-main-blue'
                  : 'hover:bg-[#354252] bg-[#2D3948] '
              } flex justify-center items-center w-full h-full rounded-md duration-300`}
            >
              {item.title}
            </span>
          )}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
};

export default StackOSToggleGroup;
