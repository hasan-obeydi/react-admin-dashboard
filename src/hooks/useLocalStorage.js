import { useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const value = localStorage.getItem(key);
    return value ? value : defaultValue;
  });
  const setLocalStorage = (value) => {
    localStorage.setItem(key, value);
    setState(value);
  };
  return [state, setLocalStorage];
};

export default useLocalStorage;
