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

#### Install.
Important: be sure that you have installed [react](https://github.com/facebook/react). 

重要提醒：请确保先安装了 [react](https://github.com/facebook/react). 

```bash
# Install
$ npm install react-slider-light
```

#### Use.
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

#### Development.

Want to run demos locally
```bash
git clone https://github.com/951565664/react-slider-light.git
cd react-slick
npm install
npm start
open http://localhost:8080
```
[more example](https://stackblitz.com/edit/dva-example-count)

#### Props

Props            | Type            | Default Value                   | Description                                                 | Working
---------------- | --------------- | ------------------------------- | -----------                                                 | -------
`accessibility`  | `bool`          | `true`                          | Enable tabbing and arrow key navigation                     | Yes
`className`      | `string`        | `''`                            | CSS class for inner slider div                              | Yes
`adaptiveHeight` | `bool`          | `false`                         | Adjust the slide's height automatically                     | Yes
`arrows`         | `bool`          | `true`                          |                                                             | Yes
`nextArrow`      | React Element   | `null`                          | React element for next arrow. [Example](examples/CustomArrows.js)       | Yes
`prevArrow`      | React Element   | `null`                          | React element for prev arrow. [Example](examples/CustomArrows.js)       | Yes
`autoplay`       | `bool`          | `false`                         |                                                             | Yes
`autoplaySpeed`  | `int`           | `3000`                          | Delay between each auto scroll (in milliseconds)            | Yes
`centerMode`     | `bool`          | `false`                         | Center current slide                                        | Yes
`centerPadding`  |                 | `'50px'`                        |                                                             |
`cssEase`        |                 | `'ease'`                        |                                                             |
`customPaging`   | `func`          | `i => <button>{i + 1}</button>` | Custom paging templates. [Example](examples/CustomPaging.js)            | Yes
`dots`           | `bool`          | `Default`                       |                                                             | Yes
`dotsClass`      | `string`        | `'slick-dots'`                  | CSS class for dots                                          | Yes
`draggable`      | `bool`          | `true`                          | Enable scrollable via dragging on desktop                   | Yes
`easing`         | `string`        | `'linear'`                      |                                                             |
`fade`           | `bool`          | `Default`                       |                                                             | Yes
`focusOnSelect`  | `bool`          | `false`                         | Go to slide on click                                        | Yes
`infinite`       | `bool`          | `true`                          | Infinitely wrap around contents                             | Yes
`initialSlide`   | `int`           | `0`                             | Index of first slide                                        | Yes
`lazyLoad`       | `bool`          | `false`                         | Load images or render components on demand                  | Yes
`pauseOnHover`   | `bool`          | `true`                          | Prevents autoplay while hovering                            | Yes
`responsive`     | `array`         | `null`                          | Customize based on breakpoints (detailed explanation below) | Yes
`rtl`            | `bool`          | `false`                         | Reverses the slide order                                    | Yes
`slide`          | `string`        | `'div'`                         |                                                             |
`slidesToShow`   | `int`           | `1`                             | Yes                                                         | Yes
`slidesToScroll` | `int`           | `1`                             |                                                             |
`speed`          | `int`           | `500`                           |                                                             |
`swipe`          | `bool`          | `true`                          |                                                             |
`swipeToSlide`   | `bool`          | `false`                         | Enable drag/swpie irrespective of `slidesToScroll`          | Yes
`touchMove`      | `bool`          | `true`                          |                                                             |
`touchThreshold` | `int`           | `5`                             |                                                             |
`variableWidth`  | `bool`          | `false`                         |                                                             |
`useCSS`         | `bool`          | `true`                          | Enable/Disable CSS Transitions                              | Yes
`vertical`       | `bool`          | `false`                         |                                                             | Yes
`init`           | `func`          | `null`                          | componentWillMount callback. `() => void`                       | Yes
`afterChange`    | `func`          | `Default`                       | Index change callback. `index => ...`                       | Yes
`beforeChange`   | `func`          | `null`                          | Index change callback. `(oldIndex, newIndex) => ...`        | Yes
`slickGoTo`      | `int`           | `Default`                       | Go to the specified slide number                            |

### Filing issues
Please replicate your issue with [CodeSandbox template](https://codesandbox.io/s/zzloxr09mp) and post it along with issue to make it easy for me to debug.

## FAQ

#### Will be updated regularly??

> 当然会，至少每周会抽出4个小时来维护和开发

> Of course, at least 4 hours a week will be taken out for maintenance and development


#### Does it support IE8?

No.

## Next

Some basic function.

* Scroll vertically
* gallery 缩略图


Want more?

* [作者的其他项目](https://github.com/951565664)
* [The author's other projects](https://github.com/951565664)


## License

[MIT](https://tldrlegal.com/license/mit-license)