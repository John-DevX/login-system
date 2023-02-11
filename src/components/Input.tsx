const Input = ({placeholder, type, onChange} : {placeholder: string, type: string, onChange: any}) :JSX.Element => {
return (
    <>
     <input 
     className="border-2 border-slate-300 outline-none focus:border-indigo-600 mb-2 rounded focus:bg-slate-100 p-1"
     type={type}
     placeholder={placeholder}
     onChange={onChange}
     />
    </>
  )
}

export default Input;
