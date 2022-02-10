import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils.js';

export default function AuthPage({ setCurrentUser }) {
  // you'll need to track the form state of the email and password  
  const [emailForm, setEmailForm] = useState('');
  const [passwordForm, setPasswordForm] = useState('');


  async function handleSignIn(e) {
    e.preventDefault();
      
    // sign the user in using the form state

    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
  }
    
  async function handleSignUp(e) {
    // sign the user up using the form state
    e.preventDefault();
    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
    const user = await signUp(emailForm, passwordForm);
    setCurrentUser(user);
    setEmailForm('');
    setPasswordForm('');
  }


  // console.log('||', 'Email', emailForm, 'Password', passwordForm);

  return (
    <div className='auth'>
      <h1><em>Boardzo</em></h1>
      {/* on submit, sign the user in using the function defined above */}
      <form>
        <label>
            Email
          {/* on change, update the form state for email */}
          <input required type="email" name="email" onChange={(e) => setEmailForm(e.target.value)}/>
        </label>
        <label>
            Password
          {/* on change, update the form state for password */}
          <input required type="password" name="password" onChange={(e) => setPasswordForm(e.target.value)}/>
        </label>
        <button>Sign In</button>
        {/* on clicking sign up, sign the user up using the function defined above */}
        <button type="button" onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}
