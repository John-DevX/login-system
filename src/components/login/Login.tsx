import React, { useState, useContext, useEffect } from "react";
import Input from "../Input";
import Button from "../Button";
import { ThemeContext } from "../../contexts/themeContext";
const Login = () => {
  const {theme, setTheme} :any  = useContext(ThemeContext);
  const [ballAnim, setBallAnim] = useState <Boolean>(false);
  const anim = () => {
    setBallAnim(!ballAnim);
    themeFunc();
  }

  const body = document.body;
  useEffect(() => {
    const sendStorage = localStorage.setItem('theme', JSON.stringify(theme));
    body.classList.toggle('theme');
  }, [theme]);
  const getStorage = localStorage.getItem('theme');
  const sendStorage = localStorage.setItem('ball', JSON.stringify(ballAnim));
  const getStorageBall = localStorage.getItem('ball');
  
  useEffect(()=>{
    switch(getStorage){
      case 'true':
        setBallAnim(true);
      break;
      case 'false':
        setBallAnim(false);
  };[window.onload]});

  useEffect(() => {
    switch(getStorage){
      case 'true':
        setTheme(true);
      break;
      case 'false':
        setTheme(false);
    }
  },[window.onload])

  const themeFunc = () => {
    setTheme(!theme); 
  }
  
  const handleForm = (e: any) => e.preventDefault();
  return (
    <div>

      <button onClick={anim} className="rounded-3xl bg-violet-900 absolute w-16 right-2 top-2">
         <div className={!ballAnim ? "bg-white duration-500 rounded-full w-5 h-5 relative left-0" : "duration-500 rounded-full w-5 h-5 relative left-13 bg-black"}></div>
      </button>

      <div className={!theme ? "bg-white shadow-xl md:w-80 mx-auto mt-10 p-2 h-72 rounded-xl" : "shadow-xl md:w-80 mx-auto mt-10 p-2 h-72 rounded-xl bg-slate-900"}>
          <form
          onSubmit={handleForm}
          className="text-center">
              <header>
                  <h1 className="font-bold text-2xl mb-10">Login</h1>
              </header>
              <main>
                  <Input
                  placeholder="Email"
                  type="email"
                  />
                  <Input
                  placeholder="Password"
                  type="password"
                  />
                  <div><Button text="Sign in"/></div>
              </main>
          </form>
      </div>
    </div>
  )
}

export default Login;


