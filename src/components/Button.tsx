import { AiOutlineDoubleRight } from 'react-icons/ai';
import { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';
const Button = ({text, clickEvent} : {text: string, clickEvent:any}) => {
  const [hovePosition, setHovePosition] = useState<boolean>(false);
  const {theme}:any = useContext(ThemeContext);
      return (
        <div className='relative'>
            <button
            onMouseEnter={() => setHovePosition(true)}
            onMouseLeave={() => setHovePosition(false)}
            onClick={clickEvent}
            className="text-white bg-indigo-500 rounded p-1 w-28 mt-10">{text}</button>
          {!theme 
             ? <AiOutlineDoubleRight className={!hovePosition 
             ?
               'inline-block absolute bottom-2 duration-500 text-white right-20' 
             : 'inline-block absolute bottom-2 duration-500 text-white right-24'}/>
             : <AiOutlineDoubleRight className={!hovePosition 
              ?
                'inline-block absolute bottom-2 duration-500 text-slate-900 right-20' 
              : 'inline-block absolute bottom-2 duration-500 text-white right-24'}/>} 
        </div>
      )
    }
    
    export default Button;
    

