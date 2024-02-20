import React from 'react'
import Header from "./Header"

 const Login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" />
    </div>  
     <form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0  text-white rounded-lg bg-opacity-70'>
       <h1 className='font-bold text-3xl py-4'>Sign In </h1>
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
        <input type="text" placeholder="Password" className ="p-4 my-4 w-full bg-gray-700"/>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">Sign In</button>
        <p className='py-4'> New to netflix ? Sign up</p>
     </form>
    
    </div>
  );
};
export default Login
/*import React from 'react';
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="logo" style={{ width: '100%', height: 'auto' }} />
      </div>  
      <form className='w-3/12 relative p-12 bg-black my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold text-3xl py-4'>Sign In</h1>
        <input type="text" placeholder="Email Address" className="p-2 m-2"/>
        <input type="text" placeholder="Password" className ="p-2 m-2"/>
        <button className="p-4 m-4 bg-red-700"></button>
      </form>
    </div>
  );
}

export default Login; */
