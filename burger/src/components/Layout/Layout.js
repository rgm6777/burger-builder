import React from 'react';
import Auxillary from '../../HOC/Auxillary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) => (
    <Auxillary>
        <Toolbar></Toolbar>
        <div>Toolbar, SideDrawer, Backdrop</div>  
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxillary>
);

export default layout;