import { createContext, useContext, useState } from 'react';

const HeaderTitleContext = createContext({
  title: '홈',
  setTitle: (title: string) => {},
});

export function useHeaderTitle() {
  return useContext(HeaderTitleContext);
}

export function HeaderTitleProvider({ children }) {
  const [title, setTitle] = useState('홈');
  return (
    <HeaderTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </HeaderTitleContext.Provider>
  );
}
