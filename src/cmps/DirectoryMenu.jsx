import React, { Component } from 'react';
import { MenuItem } from '../cmps/MenuItem';

export class DirectoryMenu extends Component {
    state = {
        sections: [
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
            },
            {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
            },
            {
                title: 'women',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/women'
            },
            {
                title: 'men',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/men'
            }
        ]
    }

    render() {
        const { sections } = this.state
        return <section className='directory-menu'>
            {sections.map(({ id, ...otherSectionProps }) =>
                <MenuItem key={id} {...otherSectionProps} />
            )}
        </section>;
    }
}
