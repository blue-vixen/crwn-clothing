import React from 'react';
import { SigninCmp } from '../cmps/SigninCmp';
import { SignupCmp } from '../cmps/SignupCmp';

export function SigninPage() {
    return <div className='signin-signup-page'>
        <SigninCmp />
        <SignupCmp />
    </div>;
}
