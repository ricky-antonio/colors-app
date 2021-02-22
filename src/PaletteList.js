import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MiniPalette from './MiniPalette';
import './PaletteList.css';

class PaletteList extends Component {

    render() {
        const {palettes} = this.props;
        return (
            <div className="PaletteList">
                <h1>React color list</h1>
                {
                    palettes.map(palette => (
                        <MiniPalette {...palette} />
                    ))
                }
            </div>
        )
    }
}

export default PaletteList;