import React from 'react';

export function FormInput({ handleChange, label, ...otherProps }) {
    return <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {label ?
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>) : null}
    </div>;
}
