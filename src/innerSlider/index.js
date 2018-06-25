import React, { Component } from 'react'
import styles from './index.less'

export default class InnerSlider extends Component {
    render() {
        const { children, vertical, sliderIndex, sliderToShow, speed, easing } = this.props;
        const total = children.length;
        const slidersStyle = {
            width: vertical ? '100%' : `${total / sliderToShow * 100}%`,
            height: !vertical ? '100%' : `${total / sliderToShow * 100}%`,
            left: vertical ? '0px' : `-${sliderIndex * 100 / sliderToShow}%`,
            top: !vertical ? '0px' : `-${sliderIndex * 100 / sliderToShow}%`,
            transitionProperty: !(sliderIndex % total === 0) ? (vertical ? 'top' : 'left') : 'none',
            transitionDuration: `${speed || 0}ms`,
            transitionTimingFunction: easing
        };

        return (
            <ul className={styles.sliders} style={slidersStyle}>
                {
                    children.map((child, key) => <li style={{
                        width: vertical ? '100%' : `${100 / (total)}%`,
                        height: !vertical ? '100%' : `${100 / (total)}%`,
                    }} key={key}>{child}</li>)
                }
            </ul>
        )
    }
}
