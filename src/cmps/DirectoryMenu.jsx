import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { MenuItem } from '../cmps/MenuItem';
import { selectDirectorySections } from '../store/selectors/directory-selector';

export function _DirectoryMenu({ sections }) {
    return <section className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) =>
            <MenuItem key={id} {...otherSectionProps} />
        )}
    </section>;
}


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export const DirectoryMenu = connect(mapStateToProps)(_DirectoryMenu)