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
            className={`${theme ? 'bg-gradient-to-r from-indigo-300' : 'bg-indigo-500'} rounded text-white p-2 w-40 mt-8`}>{text}</button>
          {!theme 
             ? <AiOutlineDoubleRight className={!hovePosition 
             ?
               'inline-block relative -bottom-0 duration-500 text-white md:right-40 left-0 text-xs' 
             : 'inline-block relative -bottom-0 duration-500 text-white md:right-48 -left-7 text-xs'}/>
             : <AiOutlineDoubleRight className={!hovePosition 
              ?
                'inline-block relative -bottom-0 duration-500 text-transparent md:right-40 left-0 text-xs' 
              : 'inline-block relative -bottom-0 duration-500 text-white md:right-48 -left-7 text-xs'}/>} 
        </div>
      )
    }
    
    export default Button;
    

