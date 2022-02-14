import React, { useState } from 'react';
import "./SignUp.css";
import {Link,useHistory} from "react-router-dom";

{/* <HeroSection {...homeObjOne} />
<HeroSection {...homeObjThree} /> */}
function SignUp() {

  const history=useHistory();
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const login = (event) =>{
      event.preventDefault(); // this stops the refresh
      // do the login logic

   //  auth.signInWithEmailAndPassword(email,password)
     // .then((auth)=>{
         // logged in m redirect to homepage
        // history.push("/");
    // })
 //     .catch((e)=>alert(e.message));
 }

  const register = (event) =>{
      event.preventDefault(); // this stops the refresh
      // do the register logic

     // auth
    //  .createUserWithEmailAndPassword(email,password)
    //  .then((auth)=>{
          // created a user and logged in, redirect to homepage
         // history.push("/");
  //    })
    //  .catch((e)=>alert(e.message));
 }
  
  return (
    
    <>
     <div className="login">

            <div className="login__container">
                <h1>Sign In/Sign Up</h1>

                <form>
                <h5>Email</h5>
                <input value={email} onChange={event=>setEmail(event.target.value)} type="email" />
                
                <h5>Password</h5>
                 <input value={password} onChange={event=>setPassword(event.target.value)} type="password" />
                 
                 <button onClick={login} type="submit" className="login__signinButton">Sign In</button>
                 
                 <p>Yet not Registered? Just Sign Up bellow directly.</p>
                 <button onClick={register} className="login__registerButton">Create an account</button>
                </form>


            </div>
        </div>
    </>
  );
}

export default SignUp;