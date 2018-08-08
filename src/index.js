import React, { Component, Children } from 'react'
import styles from './index.less'
import Dots from './dots'
import Arrows from './arrows'
import InnerSlider from './innerSlider'

export default class Slider extends Component {
    static defaultProps = {
        defaultSliderIndex: 0,
        sliderIndex: 0,
        delay: 2800, //ms
        speed: 500,//ms
        sliderToShow: 1,//每次展示的页面
        sliderToScroll: 1,//每次滚动的页面
        autoPlay: true,
        easing: 'ease',
        isDots: false,
        dots: 'circle',//gallery diamond square num()=>
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
                listStyle: 'none',
                display: 'inline-block',
                margin: '8px',
                cursor: 'pointer',
                overflow: 'hidden',
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
        /* 受控 */
        if (typeof nextProps.sliderIndex === 'number' && nextProps.sliderIndex !== this.state.sliderIndex) {
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
    /* 滑动几页 */
    trun = (num) => {
        let total = Children.count(this.props.children) || 1
        const { sliderIndex } = this.state;

        let new_sliderIndex = ((sliderIndex + num + (Math.ceil(Math.abs(sliderIndex + num) / total) * total)) % total) % total;

        this.changeSliderIndex(new_sliderIndex)

    }
    /**
     * 改变 SliderIndex
     * @prop {number} new_sliderIndex 新的sliderIndex
     * @prop {number} sliderIndex 旧的sliderIndex 默认是state中的
     * @memberof Slider
     */
    changeSliderIndex = (new_sliderIndex, sliderIndex = this.state.sliderIndex) => {
        const { beforeSliderCallback, afterSliderCallback } = this.props;
        /* 滑动之前回调  */
        if (typeof (beforeSliderCallback) === 'function') {
            let rtn_sliderIndex = beforeSliderCallback(sliderIndex, new_sliderIndex);
            new_sliderIndex = typeof (rtn_sliderIndex) === 'number' ? rtn_sliderIndex : new_sliderIndex
        }
        this.setState({
            sliderIndex: new_sliderIndex,
        }, () => {
            /* 滑动之后回调 */
            if (typeof (afterSliderCallback) === 'function') {
                afterSliderCallback(new_sliderIndex)
            }
        })
    }
    /* 分页符点击事件 */
    dotsOnClick = (index) => {
        this.changeSliderIndex(index)
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
        const {
            vertical,
            dots,
            dotX,
            dotY,
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

        const { sliderIndex, dotStyle } = this.state;
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

        /* 是不是最后一个 */
        const InnerSliderProps = {
            children: _children,
            sliderIndex, sliderToShow,
            speed,
            easing,
            vertical
        }
        return (
            <div className={styles.sliderBox} style={{}} onMouseOut={this.onMouseOut} onMouseOver={this.onMouseOver}>
                {
                    _children.length > 0 && <InnerSlider {...InnerSliderProps} />
                }
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