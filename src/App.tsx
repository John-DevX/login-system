import {useEffect, useContext} from 'react'
import { ThemeContext } from './contexts/themeContext';
import Routing from "./routers/router";
const App = () => {
  const body = document.body;
  const {theme,setTheme}:any = useContext(ThemeContext);
  const getTheme = localStorage.getItem('theme');
  useEffect(() => {
    const sendStorage = localStorage.setItem('theme', JSON.stringify(theme));
    body.classList.toggle('theme');
  }, [theme]);
  useEffect(() => {
    switch(getTheme){
      case 'true':
        setTheme(true);
      break;
      case 'false':
        setTheme(false);
    }
  },[window.onload])
  return (
    <>
     <Routing/>
    </>
  )
}

export default App;
