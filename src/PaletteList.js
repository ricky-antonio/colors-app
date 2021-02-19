import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './PaletteList.css';

class PaletteList extends Component {

    render() {
        const {palettes} = this.props;
        return (
            <div className="PaletteList">
                <h1>React color list</h1>
                {console.log(palettes)}
                {
                    palettes.map(palette => (
                        <div>
                        <Link exact to={`/palette/${palette.id}`} key={palette.paletteName}>{palette.paletteName}</Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default PaletteList;