import { AiOutlineDoubleRight } from 'react-icons/ai';
import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
const Input = ({text} : {text: string}) => {
  const [hovePosition, setHovePosition] = useState<boolean>(false);
  const {theme}:any = useContext(AuthContext);
      return (
        <div className='relative'>
            <button
            onMouseEnter={() => setHovePosition(true)}
            onMouseLeave={() => setHovePosition(false)} 
            className="text-white bg-indigo-500 rounded p-1 w-28 mt-10">{text}</button>
            { !theme ? 
             <AiOutlineDoubleRight className={hovePosition ? 'text-white absolute md:right-25 right-34 top-18 duration-500' : 'text-white absolute md:right-20 right-28 top-18 duration-50'}></AiOutlineDoubleRight> :
             <AiOutlineDoubleRight className={hovePosition ? 'absolute md:right-25 right-34 top-18 duration-500' : 'text-slate-900 absolute md:right-20 right-28 top-18 duration-50'}></AiOutlineDoubleRight>}
        </div>
      )
    }
    
    export default Input;
    

