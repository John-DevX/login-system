import { AiOutlineDoubleRight } from 'react-icons/ai';
import { useState } from 'react';
const Input = ({text} : {text: string}) => {
  const [hovePosition, setHovePosition] = useState<boolean>(false);
    return (
        <div className='relative'>
            <button
            onMouseEnter={() => setHovePosition(true)}
            onMouseLeave={() => setHovePosition(false)} 
            className="text-white bg-indigo-500 rounded p-1 w-28 mt-10">{text}</button>
            <AiOutlineDoubleRight
            className={hovePosition ? 'absolute md:right-25 right-34 top-18 duration-500 text-white' : 'absolute md:right-20 right-28 top-18 duration-500 text-white'}
            />
        </div>
      )
    }
    
    export default Input;
    