import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawer from '../SideDrawer/SideDrawer';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <SideDrawer />
            <div>MENU</div>
            <Logo height="80%"></Logo>
            <NavigationItems />
        </header>
    )
}

export default toolbar;