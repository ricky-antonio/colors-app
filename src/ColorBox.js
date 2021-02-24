import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import './ColorBox.css';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        }

        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => {
                this.setState({ copied: false })
            }, 1500);
        })
    }

    render() {
        const { name, background, moreUrl } = this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className="ColorBox" style={{ background }}>
                    <div style={{ background }} className={`ColorBox-copy-overlay ${copied && "show"}`} />
                    <div className={`ColorBox-copy-msg ${copied && "show"}`}>
                        <h1 >Copied!</h1>
                        <p >{this.props.background}</p>
                    </div>
                    <div className="ColorBox-copy-container">
                        <div className="ColorBox-box-content">
                            <span >{name}</span>
                        </div>
                        <button className="ColorBox-copy-button">Copy</button>
                    </div>
                    <Link 
                        to={moreUrl} 
                        onClick={e => e.stopPropagation()}
                    >
                        <span className="ColorBox-see-more">More</span>
                    </Link>
                </div>
            </CopyToClipboard>
        );
    };
}

export default ColorBox;