# react-slider-light

a lightweight Slider component built with [react](https://github.com/facebook/react). 
一个轻量级的 [react](https://github.com/facebook/react) 轮播组件
---

## Table of Contents

* [Features特性](#features)
* [Demos演示](#demos)
* [Getting Started快速开始](#getting-started)
  *  [Install](#install)
  *  [Use](#use)
  *  [Development](#development)
  *  [Props](#props)

## Features

* **Easy to use 使用简单**: detailed documents and examples 详细的文档和例子
* **Support custom 支持自定义**: Can change style,such as dots and arrows 能够改变样式位置，例如 分页符和箭头


## Demos

[Demos and codes 演示和代码](https://stackblitz.com/edit/dva-example-count)

## Getting Started

#### Install
Important: be sure that you have installed [react](https://github.com/facebook/react). 

重要提醒：请确保先安装了 [react](https://github.com/facebook/react). 

```bash
# Install
$ npm install react-slider-light
```

#### Use
```js
import React, { Component } from 'react';
import Slider from 'react-slider-light';

export default class Wrapper extends Component {
    render(){
        return <Slider>
            <div>page1</div>
            <div>page2</div>
        </Slider >
    }
}
```

#### Development

Want to run demos locally 本地启动演示
```bash
git clone https://github.com/951565664/react-slider-light.git
cd react-slick
npm install
npm start
open http://localhost:8080
```
[more example 更多例子](https://stackblitz.com/edit/dva-example-count)

#### Props

            easing: 'ease',
            isDots: false,
            dots: 'circle',//gallery diamond square num()=>
            dotStyle: {
                listStyle: 'none',
                display: 'inline-block',
                margin: '0px 8px',
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
Props | Type | Default Value | Description | Required
---------------- | --------------- | ------------------------------- | ----------- | -------
`defaultSliderIndex`  | `number` | `0` | 默认初始滑动开始位置 | No
`sliderIndex`         | `number` | `0` | 控制滑动的页面 | No
`delay`      | `number`          | `1800` | 延迟的时间 (ms) | No
`speed`      | `number`          | `500` | 延迟的时间 (ms)| No
`sliderToShow`      | `number`          | `1` | 每次展示页面 | No
`sliderToScroll`      | `number`          | `1` | 每次滚动的页面数量 | No
`autoPaly`      | `bool`          | `true` | 是否自动开始轮播 | No
`isDots`      | `bool`          | `false` | 是否需要dots | No
`dots`      | `enum|func`          | `circle` | dots 的种类，值为circle,gallery,diamond,square,({index,item})=>{ return ReactDom} | No
`dotStyle`      | `object`          | ```{listStyle: 'none',display: 'inline-block',margin: '0px 8px',cursor: 'pointer',overflow:'hidden'}``` | dots 的样式
`dotX`      | `string|number`          | `center` |dot的水平位置 ，可以是```right``` ```left``` ```center```这样的字符串 ,也可以是 30 -20, 表示距离左边的像素，负数表示距右边的像素| No
`dotY`      | `string|number`          | `middle` |dot的垂直位置 ，可以是```top``` ```bottom``` ```middle```这样的字符串 ,也可以是 30 -20, 表示距离底部的像素，负数表示距顶部的像素| No
`isArrows`      | `bool`          | `false` | 是否需要箭头 | No
`arrowRender`      | `func`          | `null` | 箭头的渲染函数  (type='backward | forward')=>{} | No 
`arrowsY`      | `string|number`          | `middle` |arrows的垂直位置 ，可以是```top``` ```bottom``` ```middle```这样的字符串 ,也可以是 30 -20, 表示距离底部的像素，负数表示距顶部的像素| No
### Filing issues
Please replicate your issue with [CodeSandbox template](https://codesandbox.io/s/zzloxr09mp) and post it along with issue to make it easy for me to debug.

## FAQ

#### Will be updated regularly? 是否会经常更新

> Of course, at least 4 hours a week will be taken out for maintenance and development
> 当然会，至少每周会抽出4个小时来维护和开发

#### Does it support IE8?是否支持 IE 8

No. 想多了老铁

## Next

Add some basic function.增加一些基本功能

* Scroll vertically 垂直滚动
* gallery 缩略图


Want more?

* [The author's other projects 作者的其他项目](https://github.com/951565664)

## License

[MIT](https://tldrlegal.com/license/mit-license)