import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import { withStyles } from '@material-ui/styles';
import 'rc-slider/assets/index.css';
import styles from './styles/NavbarStyles';
import { Icon } from '@material-ui/core';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex",
            open: false
        }
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleFormatChange(e) {
        this.setState({format: e.target.value, open: true});
        this.props.handleChange(e.target.value);
    }

    closeSnackbar() {
        this.setState({open: false});
    }

    render() {
        const { level, changeLevel, showSlider, classes } = this.props;
        const {format} = this.state;
        return (
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link exact to="/">Color Palette Generator</Link>
                </div>
                {showSlider && (
                    <div >
                    <span>Level: {level}</span>
                    <div className={classes.slider}>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                )}
                

                <div className={classes.selectContainer}>
                    <Select onChange={this.handleFormatChange} value={format}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                    anchorOrigin={{vertical: "bottom", horizontal: "left"}} 
                    open={this.state.open}
                    autoHideDuration={2500}
                    message={<span id="message-id">Format Changed To {format.toLocaleUpperCase()}!</span>}
                    ContentProps={{"aria-describedby": "message-id"}}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton 
                            onClick={this.closeSnackbar} 
                            color="inherit"
                            key="close"
                            areia-label="close"
                        >
                            <CloseIcon/>
                        </IconButton>
                    ]}
                    />
            </header>
        )
    }
}

export default withStyles(styles)(Navbar);