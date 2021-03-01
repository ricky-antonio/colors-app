import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/NewPaletteFormStyles';


class NewPaletteForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>palette form!</h1>
        )
    }
}

export default withStyles(styles)(NewPaletteForm);