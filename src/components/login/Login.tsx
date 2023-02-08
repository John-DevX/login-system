import React from "react";
import Input from "../Input";
import Button from "../Button";
const Login = () => {
  const handleForm = (e: any) => e.preventDefault();
  return (
    <div className="shadow-xl md:w-80 mx-auto mt-10 p-2 h-72 rounded-xl">
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
  )
}

export default Login;