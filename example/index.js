import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import * as Example from './routers'
import styles from './index.less'

import Slider from '../src'
import ExampleCode from './components/exampleCode'
import Info from './components/info'

const sliderList = [
    {
        title: "基本",
        info: '基本用法',
        code: <div>{"<Slider>{contentList.map((item, key) => (<div key={key}>{item.name}</div>))}</Slider >"}</div>,
        prop:{}
    },{
        title: "设置间隔和动画时长",
        info: '可以通过delay和speed设置间隔和动画时长',
        code: <div>{"<Slider>{contentList.map((item, key) => (<div key={key}>{item.name}</div>))}</Slider >"}</div>,
        prop:{
            delay:3000,
            speed: 3000,//ms
        }
    },{
        title: "分页符位置样式",
        info: '自定义分页符，可利用dots 和 dotStyle 定义样式',
        code: <div>{"<Slider>{contentList.map((item, key) => (<div key={key}>{item.name}</div>))}</Slider >"}</div>,
        prop:{
            isDots:true,
            dots:'square',
            dotStyle:{
                border:'1px solid #C40000'
            },
            curDotStyle:{
                border:'1px solid #00C400'
            }
        }
    },{
        title: "分页符位置",
        info: '自定义分页符，可利用 dotX,dotY 定义位置',
        code: <div>{"<Slider>{contentList.map((item, key) => (<div key={key}>{item.name}</div>))}</Slider >"}</div>,
        prop:{
            isDots:true,
            dotX:-40,
            dotY:'middle'
        }
    },{
        title: "函数自定义分页符",
        info: 'dots 利用函数自定义dots',
        code: <div>{"<Slider>{contentList.map((item, key) => (<div key={key}>{item.name}</div>))}</Slider >"}</div>,
        prop:{
            isDots:true,
            dots:({item,index})=>{ return <div style={{color:'#fff',padding:'5px'}}>{index}</div>},
            dotStyle:{
                borderRadius:'50%',
                border:'1px solid #c40000'
            },
            curDotStyle:{
                border:'1px solid #ccc'
            }
        }
    }, {
        title: "展示不同的个数",
        info: '利用 sliderToShow 设置每次展示的页面，利用 sliderToScroll 设置每次滚动的页面数',
        code: <div>{"<Slider>{contentList.map((item, key) => (<div key={key}>{item.name}</div>))}</Slider >"}</div>,
        prop:{
            sliderToShow:2,
            sliderToScroll:1,
            isDots:true,
        }
    }, {
        title: "箭头",
        info: '利用 isArrows ,arrowsY 等属性设置箭头',
        code: <div>{"<Slider>{contentList.map((item, key) => (<div key={key}>{item.name}</div>))}</Slider >"}</div>,
        prop:{
            isArrows:true,
        }
    },
]
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
                {
                    sliderList.map(({ title, info, code,prop }, key) => (
                        <div className={styles.exampleBox} key={key}>
                            <div className={styles.area}>
                                <div className={styles.sliderBox}>
                                    <Slider {...prop}>
                                        {
                                            contentList.map((item, key) => {
                                                let style = {
                                                    height:'100%',
                                                    textAlign:'center',
                                                    backgroundColor:'#c4c515',
                                                    backgroundColor:`#${Math.floor(Math.random()*16177215).toString(16)}`,
                                                    color:'#fff'
                                                }
                                                return (<div key={key} style={style}>{item.name}</div>)})
                                        }
                                    </Slider >
                                </div>
                            </div>
                            <div className={styles.area} >
                                <Info title={title} info={info} code={code}/>
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
