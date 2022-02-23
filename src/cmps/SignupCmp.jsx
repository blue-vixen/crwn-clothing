import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormInput } from './FormInput';
import { CustomButton } from './CustomButton';
import { signUpStart } from '../store/actions/user-actions';

class _SignupCmp extends Component {

    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state
        const { signUpStart } = this.props
        if (password !== confirmPassword) {
            alert('Password don\'t match');
            return
        }
        signUpStart({ email, password, displayName })
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return <div className='signup'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='signup-form' onSubmit={this.handleSubmit}>
                <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' required />
                <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required />
                <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required />
                <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div >;
    }
}


const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export const SignupCmp = connect(null, mapDispatchToProps)(_SignupCmp)