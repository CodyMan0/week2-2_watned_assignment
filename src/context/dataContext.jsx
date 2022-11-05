import {
  useCallback,
  useContext,
  useMemo,
  useState,
  createContext,
} from 'react';

export const OptionContext = createContext(null);

export const OptionContextProvider = ({ children }) => {
  const [option, setOption] = useState(1);
  // optionBox를 Id 값으로 했다. 굳
  const onOptionHandler = (id) => {
    setOption(id);
  };

  const options = useMemo(
    () => ({ option, setOption, onOptionHandler }),
    [option]
  );
  return (
    <OptionContext.Provider value={options}>{children}</OptionContext.Provider>
  );
};

export const useOption = () => useContext(OptionContext);
