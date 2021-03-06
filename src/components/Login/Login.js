import React from 'react';
import useFirebase from '../../Hooks/useFirebase';


const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>Please LogIn</h3>
            <div style={{margin:'20px'}}>
                <button onClick={signInWithGoogle}>Google Sign-In</button>
            </div>
            

            <form>
                <input type="text" placeholder='Your name'/>
                <br />
                <input type="email" placeholder='Your email' />
                <br />
                <input type="password" name="" id="" placeholder='password please!'/>
                <br />
                <input type="submit" value="Register" />

            </form>
        </div>
    );
};

export default Login;