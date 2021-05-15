import { ChangeEvent, useState } from 'react';

export const useForm = <T extends Object>(initState: T) => {
  const [state, setstate] = useState(initState);

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setstate({ ...state, [name]: value });
  };

  return { state, handleChange };
};
