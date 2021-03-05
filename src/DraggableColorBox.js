import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/DraggableColorBoxStyles';
import DeleteIcon from '@material-ui/icons/Delete';


function DraggableColorBox(props) {
    return (
        <div 
        className={props.classes.root}
        style={{backgroundColor: props.color}}
        >
            <div className={props.classes.boxContent}>
                <span>{props.name}</span>
                <DeleteIcon className={props.classes.DeleteIcon}/>
            </div>
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox);