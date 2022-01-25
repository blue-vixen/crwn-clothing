import React, { Component } from 'react';
import { FormInput } from './FormInput';
import { CustomButton } from './CustomButton';
import { auth, signInWithGoogle } from '../firebase/firebase.utils'

export class SigninCmp extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (err) {
            console.error(err)
        }
    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='Email' />
                <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='Password' />
                <div className='buttons'>
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} type="button" isGoogleSignIn>Sign in with google</CustomButton>
                </div>
            </form>
        </div>;
    }
}
