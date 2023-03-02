import {useContext} from 'react';
import { ThemeContext } from '../contexts/themeContext';

interface typeProp {
  placeholder: string;
  type: string;
  register: any;
  name:string;
}

const Input = ({placeholder, type, register, name} : typeProp)  :JSX.Element => {
  const {theme} :any = useContext(ThemeContext);
return (
    <div>
     <input 
     className={theme ? "bg-black border-2 border-purple-200 outline-none focus:border-purple-100 mb-2 rounded focus:bg-slate-900 w-52 relative p-2.5" : "border-2 border-zinc-300 outline-none focus:border-purple-100 mb-2 rounded focus:bg-slate-100  relative w-52 p-2.5"}
     type={type}
     name={name}
     placeholder={placeholder}
     {...register(name, {required:true})}
     />
    </div>
  )
}

export default Input;
