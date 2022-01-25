import React from 'react';
import { withRouter } from 'react-router-dom';

function _MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
    console.log(match)
    return <article className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}></div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <p className='subtitle'>SHOP NOW</p>
        </div>
    </article >;
}

export const MenuItem = withRouter(_MenuItem)