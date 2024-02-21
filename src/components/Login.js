import React from 'react'
import Header from "./Header"
import { useState ,useRef } from 'react';
import { checkValidData } from '../utils/validate';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom"
 const Login = () => {
   const [isSignInForm, setisSignInForm] = useState(true);
   const [errorMessage,seterrorMessage] = useState(null);
   const email =useRef(null);
   const navigate = useNavigate();
   const password =useRef(null);

      const handleButtonClick =()=> {
           const message = checkValidData(email.current.value, password.current.value);
            seterrorMessage(message);
              if(message) {
                return;
                 }
           if(!isSignInForm)
           {
              createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
             .then((userCredential) => {
              const user = userCredential.user;
              console.log(user);
              navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     seterrorMessage(errorCode, errorMessage)
  });


           }
           else{
             signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
     navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode +"-"+ errorMessage)
  });



           }

          }
      
     const toggleSignInForm =()=>{
      setisSignInForm(!isSignInForm);
     }
     
  return (
    <div>
      <Header/>
      <div className='absolute '>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" />
    </div>  
     <form onSubmit ={(e)=> e.preventDefault()}className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0  text-white rounded-lg bg-opacity-70'>
       <h1 className='font-bold text-3xl py-4'>{isSignInForm? " Sign In":"Sign Up"} </h1>
       { !isSignInForm && (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>)}
        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
        <input ref ={password} type="text" placeholder="Password" className ="p-4 my-4 w-full bg-gray-700"/>
       <p className="text-red-500 font-bold text-lg py-2  ">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm? " Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?" New to netflix ? Sign up":"Aready registered? Sign Up Now"}</p>
     </form>

    </div>
  );
};
export default Login
