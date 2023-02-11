import {useContext} from 'react';
import { ThemeContext } from '../contexts/themeContext';

const Input = ({placeholder, type, onChange} : {placeholder: string, type: string, onChange: any}) :JSX.Element => {
  const {theme} :any = useContext(ThemeContext);
return (
    <>
     <input 
     className={theme ? "bg-black border-2 border-indigo-900 outline-none focus:border-indigo-600 mb-2 rounded focus:bg-slate-900 p-1" : "border-2 border-slate-300 outline-none focus:border-indigo-600 mb-2 rounded focus:bg-slate-100 p-1"}
     type={type}
     placeholder={placeholder}
     onChange={onChange}
     />
    </>
  )
}

export default Input;
