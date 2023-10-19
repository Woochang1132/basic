import { createContext, useState } from 'react';

// data를 context에 담고 있다?
export const DarkModeContext = createContext();

// data를 잘 가지고, 보여주는 우산을 생각
export function DarkModeProvider({children}){
    //부모 우산 역할을 하는 component
   const [darkMode, setDarkMode] = useState(false);
   const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
        {children}
    </DarkModeContext.Provider>
}