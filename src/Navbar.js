import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({format: e.target.value});
        this.props.handleChange(e.target.value);
    }

    render() {
        const { level, changeLevel, handleChange } = this.props;
        const {format} = this.state;
        return (
            <header className="Navbar">
                <div className="Navbar-logo">
                    <a href="#">Color Palette Generator</a>
                </div>
                <div className="Navbar-slider-container">
                    <span>Level: {level}</span>
                    <div className="Navbar-slider">
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                <div className="Navbar-select-container">
                    <Select onChange={this.handleChange} value={format}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}

export default Navbar;