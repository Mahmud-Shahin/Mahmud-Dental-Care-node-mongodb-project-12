import React from 'react';
import img from './google.png'
import img1 from './facebook.png'
import img2 from './github.png'
import auth from './../../../firebase.init';
import {useSignInWithGithub, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import {   useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const Navigate = useNavigate();
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";
    let errorElement ;

    if (error || error1) {
        errorElement =
          <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
          </div>
       
      }

      if (user || user1){
        Navigate(from, { replace: true });
      }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}

            <div>

                <button  
                onClick={()=> signInWithGoogle()}
                className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img style={{ width: '30px' }} src={img} alt="" />
                    <span className='px-2'>Google sign in</span> </button>

                <button className='btn btn-primary w-50 d-block mx-auto my-3'>
                    <img style={{ width: '40px' }} src={img1} alt="" />
                    <span className='px-2'>Facebook sign in</span> </button>

                <button 
                onClick={()=> signInWithGithub() }
                
                className='btn btn-light w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={img2} alt="" />
                    <span className='px-2'>Github sign in</span> </button>

            </div>

        </div>
    );
};

export default SocialLogin;