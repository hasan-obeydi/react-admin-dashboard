import { useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const value = JSON.parse(localStorage.getItem(key));
    return value ? value : defaultValue;
  });
  const setLocalStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };
  return [state, setLocalStorage];
};

export default useLocalStorage;
