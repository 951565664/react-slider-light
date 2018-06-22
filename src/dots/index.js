import React, { Component } from 'react'
import styles from './index.less'

export default class Dots extends Component {
    getDotsStyle = () => {
        let style = {};
        if (this.props.vertical) {
            style = {
                // height: '100%',
                position: 'absolute'
            }
            if (typeof (this.props.dotY) === 'string') {
                switch (this.props.dotY) {
                    case 'top':
                        style = {
                            ...style,
                            top: '20px'
                        }
                        break;
                    case 'middle':
                        style = {
                            ...style,
                            top: '50%',
                            transform: 'translate(-50%,-50%)',
                            msTransform: 'translate(-50%,-50%)',
                        }
                        break;
                    case 'bottom':
                        style = {
                            ...style,
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
                        ...style,
                        bottom: `${this.props.dotY * -1}px`
                    }
                } else {
                    style = {
                        ...style,
                        top: `${this.props.dotY}px`
                    }
                }

            }
        } else {
            if (typeof (this.props.dotX) === 'string') {
                switch (this.props.dotX) {
                    case 'center':
                        style = {
                            ...style,
                            textAlign: 'center'
                        }
                        break;
                    case 'left':
                        style = {
                            ...style,
                            textAlign: 'left',
                            marginLeft: '20px'
                        }
                        break;
                    case 'right':
                        style = {
                            ...style,
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
                        ...style,
                        textAlign: 'right',
                        marginRight: `${this.props.dotX * -1}px`
                    }
                } else {
                    style = {
                        ...style,
                        textAlign: 'left',
                        marginLeft: `${this.props.dotX}px`
                    }
                }

            }
        }
        return style;
    }

    getDotBoxStyle = () => {
        let style = {};
        if (this.props.vertical) {
            style = {
                ...style,
                height: '100%',
                dispaly: 'inline-block',
                width: 'auto'
            }
            if (typeof (this.props.dotX) === 'string') {
                switch (this.props.dotX) {
                    case 'center':
                        style = {
                            ...style,
                            left: '50%',
                            marginLeft: '-20px',
                        }
                        break;
                    case 'left':
                        style = {
                            ...style,
                            left: '20px',
                        }
                        break;
                    case 'right':
                        style = {
                            ...style,
                            right: '20px',
                        }
                        break;
                    default:
                        break;
                }
            }
            if (typeof (this.props.dotX) === 'number') {
                if (this.props.dotX < 0) {
                    style = {
                        ...style,
                        right: `${this.props.dotX * -1}px`,
                    }
                } else {
                    style = {
                        ...style,
                        left: `${this.props.dotX}px`
                    }
                }

            }


        } else {
            if (typeof (this.props.dotY) === 'string') {
                switch (this.props.dotY) {
                    case 'top':
                        style = {
                            ...style,
                            top: '20px'
                        }
                        break;
                    case 'middle':
                        style = {
                            ...style,
                            top: '50%',
                            marginTop: '-20px'
                        }
                        break;
                    case 'bottom':
                        style = {
                            ...style,
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
                        ...style,
                        bottom: `${this.props.dotY * -1}px`
                    }
                } else {
                    style = {
                        ...style,
                        top: `${this.props.dotY}px`
                    }
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
                                    curDotStyle = {
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