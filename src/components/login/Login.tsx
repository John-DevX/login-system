import React, { useState, useContext } from "react";
import Input from "../Input";
import Button from "../Button";
import { AuthContext } from "../../contexts/authContext";
const Login = () => {
  const [ballAnim, setBallAnim] = useState<Boolean>(false);
  const anim = () => {
    setBallAnim(!ballAnim);
    themeFunc();
    
  }
  const {theme, setTheme} :any  = useContext(AuthContext);

  const themeFunc = () => {
    setTheme(!theme)
    const body = document.body;
    body.classList.toggle('theme');
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


