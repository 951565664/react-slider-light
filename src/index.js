import React, { Component, Children } from 'react'
import styles from './index.less'
import Dots from './dots'
import Arrows from './arrows'


export default class Slider extends Component {
    constructor(props) {
        super(props)
        const defaultSettings = {
            defaultSliderIndex: 0,
            sliderIndex: 0,
            delay: 1800, //ms
            speed: 500,//ms
            sliderToShow: 1,//每次展示的页面
            sliderToScroll: 1,//每次滚动的页面
            autoPaly: true,
            easing: 'ease',
            isDots: false,
            dots: 'circle',//gallery diamond square num()=>
            dotStyle: {
                listStyle: 'none',
                display: 'inline-block',
                margin: '8px',
                cursor: 'pointer',
                overflow:'hidden'
            },
            curDotStyle: {
                
            },
            dotX: 'center',//'right' 'left' 'center' 20 30 -20 30
            dotY: -25,//top center

            isArrows: false,
            arrowRender: undefined,//()=>
            arrowsY: 'middle',
            vertical:false,
        };

        this.state = {
            ...defaultSettings,
            ...props,
            dotStyle:{
                ...defaultSettings.dotStyle,
                ...props.dotStyle,
                display: !!props.vertical?'block':'inline-block',                
            },
            curDotStyle:{
                ...defaultSettings.curDotStyle,
                ...props.curDotStyle,
            }
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
        if (this.props.autoPaly !== undefined && this.props.autoPaly === false) {
            this.endSlider()
        }
    }

    /* 结束slider */
    endSlider = () => {
        clearInterval(this.timer)
    }
    /* 开始slider */
    beginSlider = () => {
        if (!this.state.autoPaly) {
            return false;
        }
        this.endSlider()
        this.timer = setInterval(() => {
            this.trun(this.state.sliderToScroll)
        }, this.state.delay)
    }

    trun = (num) => {
        let total = Children.count(this.props.children) || 1

        let sliderIndex = ((this.state.sliderIndex + num + (Math.ceil(Math.abs(this.state.sliderIndex + num) / total) * total)) % total) % total;

        this.setState({
            sliderIndex,
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
        let { children } = this.props;
        let _children = Children.toArray(children);
        let total = Children.count(this.props.children) || 1;
        let slidersStyle = {
            width: this.state.vertical?'100%':`${total/this.state.sliderToShow * 100}%`,
            height: !this.state.vertical?'100%':`${total/this.state.sliderToShow * 100}%`,
            left: this.state.vertical?'0px':`-${this.state.sliderIndex * 100 /this.state.sliderToShow}%`,
            top: !this.state.vertical?'0px':`-${this.state.sliderIndex * 100 /this.state.sliderToShow}%`,
            transitionProperty: this.state.vertical?'top':'left',
            transitionDuration: `${this.state.speed || 0}ms`,
            transitionTimingFunction: this.state.easing
        };
        let DotsProp = {
            vertical: this.state.vertical,
            dots: this.state.dots,
            dotX: this.state.dotX,
            dotY: this.state.dotY,
            children: _children,
            sliderIndex: this.state.sliderIndex,
            dotStyle: this.state.dotStyle,
            curDotStyle: this.state.curDotStyle,
            dotsOnClick: this.dotsOnClick,
            sliderToShow:this.props.sliderToShow,
        };
        let ArrowsProp = {
            arrowsOnClick: this.arrowsOnClick,
            arrowsY: this.state.arrowsY,
            arrowRender: this.state.arrowRender,
        };

        return (
            <div className={styles.sliderBox} style={{}} onMouseOut={this.onMouseOut} onMouseOver={this.onMouseOver}>
                <ul className={styles.sliders} style={slidersStyle}>
                    {
                        _children.map((child, key) => <li style={{ 
                            width: this.state.vertical?'100%':`${100 / (total)}%`, 
                            height: !this.state.vertical?'100%':`${100 / (total)}%`,
                        }} key={key}>{child}</li>)
                    }
                </ul>
                {
                    this.state.isDots && <Dots {...DotsProp} />
                }
                {
                    this.state.isArrows && <Arrows {...ArrowsProp} />
                }
            </div>
        )
    }
}