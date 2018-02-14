import React, { Component } from 'react'
import styles from './index.less'

export default class Dots extends Component {
    getDotsStyle = () => {
        let style = {};
        if (typeof (this.props.dotX) === 'string') {
            switch (this.props.dotX) {
                case 'center':
                    style = {
                        textAlign: 'center'
                    }
                    break;
                case 'left':
                    style = {
                        textAlign: 'left',
                        marginLeft: '20px'
                    }
                    break;
                case 'right':
                    style = {
                        textAlign: 'right',
                        marginRight: '20px'
                    }
                    break;
                default:
                    break;
            }
        }
        if (typeof (this.props.dotX) === 'number') {
            if (this.props.dotX < 0) {
                style = {
                    textAlign: 'right',
                    marginRight: `${this.props.dotX * -1}px`
                }
            } else {
                style = {
                    textAlign: 'left',
                    marginLeft: `${this.props.dotX}px`
                }
            }

        }
        return style;
    }

    getDotBoxStyle = () => {
        let style = {};
        if (typeof (this.props.dotY) === 'string') {
            switch (this.props.dotY) {
                case 'top':
                    style = {
                        top: '20px'
                    }
                    break;
                case 'middle':
                    style = {
                        top: '50%',
                        marginTop: '-20px'
                    }
                    break;
                case 'bottom':
                    style = {
                        bottom: '20px'
                    }
                    break;
                default:
                    break;
            }
        }
        if (typeof (this.props.dotY) === 'number') {
            if (this.props.dotY < 0) {
                style = {
                    bottom: `${this.props.dotY * -1}px`
                }
            } else {
                style = {
                    top: `${this.props.dotY}px`
                }
            }

        }
        return style;
    }
    dotsOnClick = (index) => {
        if (typeof (this.props.dotsOnClick) === 'function') {
            this.props.dotsOnClick(index)
        }
    }

    render() {
        let dotBoxStyle = this.getDotBoxStyle();
        let dotsStyle = this.getDotsStyle();
        let { dotStyle, curDotStyle } = this.props;
        return (
            <div className={styles.dotBox} style={dotBoxStyle}>
                <ul className={styles.dots} style={dotsStyle}>
                    {
                        this.props.children.map(
                            (child, key) => {
                                //gallery diamond square num()=>
                                if (typeof (this.props.dots) === 'function') {
                                    return (
                                        <li style={this.props.sliderIndex == key ? { ...dotStyle, ...curDotStyle } : dotStyle}
                                            key={key} onClick={() => this.dotsOnClick(key)}>
                                            {
                                                this.props.dots({ item: child, index: key })
                                            }
                                        </li>
                                    )

                                }
                                if (typeof (this.props.dots) === 'string') {
                                    dotStyle = {
                                        ...dotStyle,
                                        width: '8px',
                                        height: '8px',
                                        border: '1px solid #ccc',
                                        backgroundColor: '#fff',
                                    };
                                    curDotStyle= {
                                        ...curDotStyle,
                                        backgroundColor: '#000',
                                    };
                                    switch (this.props.dots) {
                                        case 'circle': {
                                            dotStyle = {
                                                ...dotStyle,
                                                borderRadius: '50%',
                                            }
                                        }
                                        case 'square': {

                                        }
                                        default:
                                            break;
                                    }
                                    return (
                                        <li style={this.props.sliderIndex == key ? { ...dotStyle, ...curDotStyle } : dotStyle}
                                            key={key} onClick={() => this.dotsOnClick(key)}>
                                        </li>
                                    )

                                }

                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}