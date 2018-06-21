import React, { Component, Children } from 'react'
import styles from './index.less'
import Dots from './dots'
import Arrows from './arrows'

export default class Slider extends Component {
    static defaultProps = {
        defaultSliderIndex: 0,
        sliderIndex: 0,
        delay: 1800, //ms
        speed: 500,//ms
        sliderToShow: 1,//每次展示的页面
        sliderToScroll: 1,//每次滚动的页面
        autoPlay: true,
        easing: 'ease',
        isDots: false,
        dots: 'circle',//gallery diamond square num()=>
        dotStyle: {
            listStyle: 'none',
            display: 'inline-block',
            margin: '8px',
            cursor: 'pointer',
            overflow: 'hidden'
        },
        curDotStyle: {

        },
        dotX: 'center',//'right' 'left' 'center' 20 30 -20 30
        dotY: -25,//top center

        isArrows: false,
        arrowRender: undefined,//()=>
        arrowsY: 'middle',
        vertical: false,
    }
    constructor(props) {
        super(props)
        this.state = {
            autoPlay: this.props.autoPlay,
            dotStyle: {
                ...props.dotStyle,
                display: !!props.vertical ? 'block' : 'inline-block',
            },
            isTransitionProperty: true,
            sliderIndex: this.props.sliderIndex
        };
        this.timer = null; //定时器
    }
    componentWillMount() {
    }
    componentDidMount = () => {
        this.beginSlider()
    }
    componentWillUnmount = () => {
        this.endSlider()
    }

    componentWillReceiveProps(nextProps) {
        /* 是否自动播放 */
        if (nextProps.autoPlay !== undefined && nextProps.autoPlay !== this.state.autoPlay) {
            this.setState({
                autoPlay
            }, this.beginSlider())
        }
        console.log('nextProps.sliderIndex', nextProps.sliderIndex);
        if (nextProps.sliderIndex && nextProps.sliderIndex !== this.state.sliderIndex) {
            this.setState({
                sliderIndex: nextProps.sliderIndex
            }, )
        }

    }

    /* 结束slider */
    endSlider = () => {
        this.timer && clearInterval(this.timer)
    }
    /* 开始slider */
    beginSlider = (autoPlay = this.state.autoPlay) => {
        if (!autoPlay) {
            return false;
        }
        this.endSlider()
        this.timer = setInterval(() => {
            this.trun(this.props.sliderToScroll)
        }, this.props.delay)
    }

    trun = (num) => {
        let total = Children.count(this.props.children) || 1
        const { sliderIndex } = this.state;

        let new_sliderIndex = ((sliderIndex + num + (Math.ceil(Math.abs(sliderIndex + num) / total) * total)) % total) % total;

        /* 如果需要有 滑动之前的回调  */
        console.log('a', this.props.beforeSliderCallback === 'function');
        if (typeof(this.props.beforeSliderCallback) === 'function') {
            this.props.beforeSliderCallback(sliderIndex)
        }

        this.setState({
            sliderIndex: new_sliderIndex,
        }, () => {
            /* 滑动之后的回调  */
            if (typeof(this.props.afterSliderCallback) === 'function') {
                this.props.afterSliderCallback(new_sliderIndex)
            }
        })

    }

    dotsOnClick = (index) => {
        this.setState({
            sliderIndex: index
        })
    }

    onMouseOver = () => {
        this.endSlider();
    }
    onMouseOut = () => {
        this.beginSlider();
    }
    arrowsOnClick = (type) => {
        let num = type === 'backward' ? -1 : 1;
        this.trun(num);
    }
    render() {
        let {
            vertical,
            dots,
            dotX,
            dotY,
            dotStyle,
            curDotStyle,
            arrowsY,
            arrowRender,
            sliderToShow,
            speed,
            easing,
            isDots,
            isArrows,
            sliderToScroll,
            children
        } = this.props;

        let { sliderIndex } = this.state;
        let _children = Children.toArray(children);
        let DotsProp = {
            vertical,
            dots,
            dotX,
            dotY,
            children: _children,
            sliderIndex,
            dotStyle,
            curDotStyle,
            dotsOnClick: this.dotsOnClick,
            sliderToShow,
        };
        let ArrowsProp = {
            arrowsOnClick: this.arrowsOnClick,
            arrowsY,
            arrowRender,
        };
        /* 如果不是一页一页滚动的  每页展示几个，就多赋值几个数组*/
        if (sliderToShow !== 1 || sliderToScroll !== 1) {
            _children = _children.concat(_children.slice(0, sliderToShow - 1))
        }
        // let total = Children.count(children) || 1;
        let total = _children.length;
        /* 是不是最后一个 */
        let _isTransitionProperty = !(sliderIndex % total === 0);
        let slidersStyle = {
            width: vertical ? '100%' : `${total / sliderToShow * 100}%`,
            height: !vertical ? '100%' : `${total / sliderToShow * 100}%`,
            left: vertical ? '0px' : `-${sliderIndex * 100 / sliderToShow}%`,
            top: !vertical ? '0px' : `-${sliderIndex * 100 / sliderToShow}%`,
            transitionProperty: _isTransitionProperty ? (vertical ? 'top' : 'left') : 'none',
            transitionDuration: `${speed || 0}ms`,
            transitionTimingFunction: easing
        };

        return (
            <div className={styles.sliderBox} style={{}} onMouseOut={this.onMouseOut} onMouseOver={this.onMouseOver}>
                <ul className={styles.sliders} style={slidersStyle}>
                    {
                        _children.map((child, key) => <li style={{
                            width: vertical ? '100%' : `${100 / (total)}%`,
                            height: !vertical ? '100%' : `${100 / (total)}%`,
                        }} key={key}>{child}</li>)
                    }
                </ul>
                {
                    isDots && <Dots {...DotsProp} />
                }
                {
                    isArrows && <Arrows {...ArrowsProp} />
                }
            </div>
        )
    }
}