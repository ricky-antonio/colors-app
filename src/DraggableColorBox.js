import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/DraggableColorBoxStyles';

function DraggableColorBox(props) {
    return (
        <div 
        className={props.classes.root}
        style={{backgroundColor: props.color}}
        >
            {props.name}
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox);