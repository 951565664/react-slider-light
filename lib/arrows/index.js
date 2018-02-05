import React, { Component } from 'react'
import styles from './index.less'

export default class Arrows extends Component {
    getArrowStyle = () => {
        let style = {};
        if (typeof (this.props.arrowsY) === 'string') {
            switch (this.props.arrowsY) {
                case 'middle':
                    style = {
                        top: '50%'
                    }
                    break;
                case 'top':
                    style = {
                        top: '5%',
                    }
                    break;
                case 'bottom':
                    style = {
                        bottom: '5%',
                    }
                    break;
                default:
                    break;
            }
        }
        if (typeof (this.props.arrowsY) === 'number') {
            if (this.props.arrowsY < 0) {
                style = {
                    top: `${this.props.arrowsY}px`,
                }
            } else {
                style = {
                    bottom: `${this.props.arrowsY}px`,
                }
            }

        }
        return style;
    }

    arrowsOnClick = (type) => {
        if (typeof (this.props.arrowsOnClick) === 'function') {
            this.props.arrowsOnClick(type)
        }
    }
    componentDidMount = () => {

    }

    render() {
        let arrowStyle = this.getArrowStyle();

        return (
            <div className={styles.arrows}>
                <div style={arrowStyle} className={styles.arrow + ' ' + styles.left} onClick={() => this.arrowsOnClick('left')}> &lt; </div>
                <div style={arrowStyle} className={styles.arrow + ' ' + styles.right} onClick={() => this.arrowsOnClick('right')}> &gt; </div>
            </div>
        )
    }
}

