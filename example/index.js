import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import * as Example from './routers'
import styles from './index.less'

import Slider from '../src'
// import Slider from 'react-slider-light'
import ExampleCode from './components/exampleCode'
import Info from './components/info'

const propToStringForCode = (obj) => {
    let rtnStr = '<Slider';
    for (let [key, value] of Object.entries(obj)) {
        rtnStr += ` ${key}={${value}}`
    }
    rtnStr += '>'
    return <div>{rtnStr}<br/>{'<div>1</div>'}<br/>{'<div>2</div>'}<br/>{'<div>3</div>'}<br/>{'</Slider>'}</div>
}
const sliderList = [
    {
        title: "基本",
        info: '基本用法',
        prop: {}
    }, {
        title: "设置间隔和动画时长",
        info: '可以通过delay和speed设置间隔和动画时长',
        prop: {
            delay: 3000,
            speed: 3000,//ms
        }
    }, {
        title: "分页符位置样式",
        info: '自定义分页符，可利用dots 和 dotStyle 定义样式',
        prop: {
            isDots: true,
            dots: 'square',
            dotStyle: {
                border: '1px solid #C40000'
            },
            curDotStyle: {
                border: '1px solid #00C400'
            }
        }
    }, {
        title: "分页符位置",
        info: '自定义分页符，可利用 dotX,dotY 定义位置',
        prop: {
            isDots: true,
            dotX: -40,
            dotY: 'middle'
        }
    }, {
        title: "函数自定义分页符",
        info: 'dots 利用函数自定义dots',
        prop: {
            isDots: true,
            dots: ({ item, index }) => { return <div style={{ color: '#fff', padding: '5px' }}>{index}</div> },
            dotStyle: {
                borderRadius: '50%',
                border: '1px solid #c40000'
            },
            curDotStyle: {
                border: '1px solid #ccc'
            }
        }
    }, {
        title: "展示不同的个数",
        info: '利用 sliderToShow 设置每次展示的页面，利用 sliderToScroll 设置每次滚动的页面数',
        prop: {
            sliderToShow: 2,
            sliderToScroll: 1,
            isDots: true,
        }
    }, {
        title: "箭头",
        info: '利用 isArrows ,arrowsY 等属性设置箭头',
        prop: {
            isArrows: true,
            arrowsY: -40
        }
    }, {
        title: "自定义箭头",
        info: '利用 arrowRender  自定义箭头',
        prop: {
            isArrows: true,
            arrowRender: (type) => {
                console.log('自定义箭头 type= ', type);
                return <span style={{ fontSize: '14px' }}>{type}</span>
            }
        }
    },
].map((item) => ({
    ...item,
    code:propToStringForCode(item.prop),
}))
const contentList = [
    { name: 'content1' },
    { name: 'content2' },
    { name: 'content3' },
    { name: 'content4' },
]

export default class Wrapper extends Component {

    render() {
        return (
            <div className={styles.wrapper}>
                
                <div className={styles.exampleBox} >
                <p>代码排版和样式暂时比较乱，现成的浏览器代码排版组件还真没找到，作者打算自己写个框架，来支持浏览器高亮代码</p>
                <p>如果大家有好的浏览器代码排版组件，请推荐给我，请多多支持，多多star</p>
                </div>
                {
                    sliderList.map(({ title, info, code, prop }, key) => (
                        <div className={styles.exampleBox} key={key}>
                            <div className={styles.area}>
                                <div className={styles.sliderBox}>
                                    <Slider {...prop}>
                                        {
                                            contentList.map((item, key) => {
                                                let style = {
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    backgroundColor: '#c4c515',
                                                    backgroundColor: `#${Math.floor(Math.random() * 16177215).toString(16)}`,
                                                    color: '#fff'
                                                }
                                                return (<div key={key} style={style}>{item.name}</div>)
                                            })
                                        }
                                    </Slider >
                                </div>
                            </div>
                            <div className={styles.area} >
                                <Info title={title} info={info} code={code} />
                            </div>
                        </div>
                    ))
                }

            </div>
        )
    }
}

ReactDOM.render(
    <Wrapper />,
    document.getElementById('root')
);
