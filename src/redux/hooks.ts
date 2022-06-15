/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import type { ChangeEvent } from 'react';
import { useEffect, useRef } from 'react';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import { ApplicationState } from './store';

export const useForm =
  <TContent>(defaultValues: TContent) =>
  (handler: (content: TContent) => void) =>
  async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.persist();

    const form = event.target as HTMLFormElement;
    const elements = Array.from(form.elements) as HTMLInputElement[];
    const data = elements
      .filter((element) => element.hasAttribute('name'))
      .reduce(
        (object, element) => ({
          ...object,
          [`${element.getAttribute('name')}`]: element.value,
        }),
        defaultValues
      );
    await handler(data);
    form.reset();
  };

export const useInterval = (callback: Function, delay: number) => {
  const savedCallback = useRef<Function>();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const handler = (...args: any) => savedCallback.current?.(...args);

    if (delay !== null) {
      const id = setInterval(handler, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const useSelector: TypedUseSelectorHook<ApplicationState> = useReduxSelector;
