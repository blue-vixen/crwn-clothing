import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormInput } from './FormInput';
import { CustomButton } from './CustomButton';
import { googleSignInStart, emailSignInStart } from '../store/actions/user-actions'

class _SigninCmp extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props
        const { email, password } = this.state
        emailSignInStart(email, password)
    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } = this.props
        return <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='Email' />
                <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='Password' />
                <div className='buttons'>
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with google</CustomButton>
                </div>
            </form>
        </div>;
    }
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export const SigninCmp = connect(null, mapDispatchToProps)(_SigninCmp)