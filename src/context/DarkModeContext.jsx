import { createContext, useState } from 'react';

// data를 context에 담고 있다?
export const DarkModeContext = createContext();

// data를 잘 가지고, 보여주는 우산을 생각
// childern 외부로 부터 받아 온 자식
export function DarkModeProvider({children}){
    //부모 우산 역할을 하는 component
   const [darkMode, setDarkMode] = useState(false);
   const toggleDarkMode = () => setDarkMode((mode) => !mode);
//    키와 value의 이름이 같은 경우에는 한 쪽 생략 가능, darkMode : darkMode, toggleDarkMode : toggleDarkMode
  return <DarkModeContext.Provider value={{darkMode , toggleDarkMode}}>
        {children} 
    </DarkModeContext.Provider>
}