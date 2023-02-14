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
            className="text-white bg-indigo-500 rounded p-2 w-40 mt-10">{text}</button>
          {!theme 
             ? <AiOutlineDoubleRight className={!hovePosition 
             ?
               'inline-block absolute bottom-3 duration-500 text-white md:right-14 right-24 text-xs' 
             : 'inline-block absolute bottom-3 duration-500 text-white md:right-24 right-32 text-xs'}/>
             : <AiOutlineDoubleRight className={!hovePosition 
              ?
                'inline-block absolute bottom-3 duration-500 text-slate-900 md:right-14 right-24 text-xs' 
              : 'inline-block absolute bottom-3 duration-500 text-white md:right-24 right-32 text-xs'}/>} 
        </div>
      )
    }
    
    export default Button;
    

