/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = react;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _dots = __webpack_require__(3);

var _dots2 = _interopRequireDefault(_dots);

var _arrows = __webpack_require__(5);

var _arrows2 = _interopRequireDefault(_arrows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_Component) {
    _inherits(Slider, _Component);

    function Slider(props) {
        _classCallCheck(this, Slider);

        var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

        _this.componentDidMount = function () {
            _this.beginSlider();
        };

        _this.componentWillUnmount = function () {
            _this.endSlider();
        };

        _this.endSlider = function () {
            clearInterval(_this.timer);
        };

        _this.beginSlider = function () {
            if (!_this.state.autoPaly) {
                return false;
            }
            _this.endSlider();
            _this.timer = setInterval(function () {
                _this.trun(_this.state.sliderToScroll);
            }, _this.state.delay);
        };

        _this.trun = function (num) {
            var total = _react.Children.count(_this.props.children) || 1;

            var sliderIndex = (_this.state.sliderIndex + num + Math.ceil(Math.abs(_this.state.sliderIndex + num) / total) * total) % total % total;

            _this.setState({
                sliderIndex: sliderIndex
            });
        };

        _this.dotsOnClick = function (index) {
            _this.setState({
                sliderIndex: index
            });
        };

        _this.onMouseOver = function () {
            _this.endSlider();
        };

        _this.onMouseOut = function () {
            _this.beginSlider();
        };

        _this.arrowsOnClick = function (type) {
            var num = type === 'left' ? -1 : 1;
            _this.trun(num);
        };

        var defaultSettings = {
            defaultSliderIndex: 0,
            sliderIndex: 0,
            sliderToShow: 1, //每次展示的页面
            sliderToScroll: 1, //每次滚动的页面
            delay: 1800, //ms
            speed: 500, //ms
            autoPaly: true,
            easing: 'ease',
            isDots: false,
            dots: 'circle', //gallery square num()=>
            dotStyle: {},
            dotX: 'center', //'right' 'left' 'center' 20 30 -20 30
            dotY: -25, //top center

            isArrows: false,
            arrowsY: 'middle'
        };

        _this.state = _extends({}, defaultSettings, props);
        _this.timer = null; //定时器
        return _this;
    }

    _createClass(Slider, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.autoPaly !== undefined && this.props.autoPaly === false) {
                this.endSlider();
            }
        }

        /* 结束slider */

        /* 开始slider */

    }, {
        key: 'render',
        value: function render() {
            var children = this.props.children;

            var _children = _react.Children.toArray(children);
            var total = _react.Children.count(this.props.children) || 1;
            var slidersStyle = {
                width: total * 100 + '%',
                height: '100%',
                left: '-' + this.state.sliderIndex * 100 + '%',
                top: '0px',
                transitionProperty: 'left',
                transitionDuration: (this.state.speed || 0) + 'ms',
                transitionTimingFunction: this.state.easing
            };
            var DotsProp = {
                dots: this.state.dots,
                dotX: this.state.dotX,
                dotY: this.state.dotY,
                children: _children,
                sliderIndex: this.state.sliderIndex,
                dotStyle: this.state.dotStyle,
                dotsOnClick: this.dotsOnClick
            };
            var ArrowsProp = {
                arrowsOnClick: this.arrowsOnClick,
                arrowsY: this.state.arrowsY,
                arrowsX: this.state.arrowsX
            };

            return _react2.default.createElement(
                'div',
                { className: _index2.default.sliderBox, style: {}, onMouseOut: this.onMouseOut, onMouseOver: this.onMouseOver },
                _react2.default.createElement(
                    'ul',
                    { className: _index2.default.sliders, style: slidersStyle },
                    _children.map(function (child, key) {
                        return _react2.default.createElement(
                            'li',
                            { style: { width: 100 / total + '%', height: '100%' }, key: key },
                            child
                        );
                    })
                ),
                this.state.isDots && _react2.default.createElement(_dots2.default, DotsProp),
                this.state.isArrows && _react2.default.createElement(_arrows2.default, ArrowsProp)
            );
        }
    }]);

    return Slider;
}(_react.Component);

exports.default = Slider;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| .sliderBox{\r\n|     position: relative;\r\n|     width: 100%;\r");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dots = function (_Component) {
    _inherits(Dots, _Component);

    function Dots() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Dots);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dots.__proto__ || Object.getPrototypeOf(Dots)).call.apply(_ref, [this].concat(args))), _this), _this.getDotsStyle = function () {
            var style = {};
            if (typeof _this.props.dotX === 'string') {
                switch (_this.props.dotX) {
                    case 'center':
                        style = {
                            textAlign: 'center'
                        };
                        break;
                    case 'left':
                        style = {
                            textAlign: 'left',
                            marginLeft: '20px'
                        };
                        break;
                    case 'right':
                        style = {
                            textAlign: 'right',
                            marginRight: '20px'
                        };
                        break;
                    default:
                        break;
                }
            }
            if (typeof _this.props.dotX === 'number') {
                if (_this.props.dotX < 0) {
                    style = {
                        textAlign: 'right',
                        marginRight: _this.props.dotX * -1 + 'px'
                    };
                } else {
                    style = {
                        textAlign: 'left',
                        marginLeft: _this.props.dotX + 'px'
                    };
                }
            }
            return style;
        }, _this.getDotBoxStyle = function () {
            var style = {};
            if (typeof _this.props.dotY === 'string') {
                switch (_this.props.dotY) {
                    case 'top':
                        style = {
                            top: '20px'
                        };
                        break;
                    case 'middle':
                        style = {
                            top: '50%',
                            marginTop: '-20px'
                        };
                        break;
                    case 'bottom':
                        style = {
                            bottom: '20px'
                        };
                        break;
                    default:
                        break;
                }
            }
            if (typeof _this.props.dotY === 'number') {
                if (_this.props.dotY < 0) {
                    style = {
                        bottom: _this.props.dotY * -1 + 'px'
                    };
                } else {
                    style = {
                        top: _this.props.dotY + 'px'
                    };
                }
            }
            return style;
        }, _this.dotsOnClick = function (index) {
            if (typeof _this.props.dotsOnClick === 'function') {
                _this.props.dotsOnClick(index);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Dots, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var dotBoxStyle = this.getDotBoxStyle();
            var dotsStyle = this.getDotsStyle();
            var dotStyle = _extends({}, this.props.dotStyle);
            return _react2.default.createElement(
                'div',
                { className: _index2.default.dotBox, style: dotBoxStyle },
                _react2.default.createElement(
                    'ul',
                    { className: _index2.default.dots, style: dotsStyle },
                    this.props.children.map(function (child, key) {
                        if (typeof _this2.props.dots === 'function') {
                            return _this2.props.dots({ item: child, index: key });
                        }
                        if (typeof _this2.props.dots === 'string') {

                            switch (_this2.props.dots) {
                                case 'circle':
                                    dotStyle = {
                                        borderRadius: '50%',
                                        width: '8px',
                                        height: '8px'
                                    };
                                    return _react2.default.createElement('li', { style: dotStyle, className: _this2.props.sliderIndex == key ? _index2.default.curDot : _index2.default.dot, key: key, onClick: function onClick() {
                                            return _this2.dotsOnClick(key);
                                        } });

                                default:
                                    break;
                            }
                        }
                    })
                )
            );
        }
    }]);

    return Dots;
}(_react.Component);

exports.default = Dots;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| .dotBox {\r\n|     position: absolute;\r\n|     width: 100%;\r");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Arrows = function (_Component) {
    _inherits(Arrows, _Component);

    function Arrows() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Arrows);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Arrows.__proto__ || Object.getPrototypeOf(Arrows)).call.apply(_ref, [this].concat(args))), _this), _this.getArrowStyle = function () {
            var style = {};
            if (typeof _this.props.arrowsY === 'string') {
                switch (_this.props.arrowsY) {
                    case 'middle':
                        style = {
                            top: '50%'
                        };
                        break;
                    case 'top':
                        style = {
                            top: '5%'
                        };
                        break;
                    case 'bottom':
                        style = {
                            bottom: '5%'
                        };
                        break;
                    default:
                        break;
                }
            }
            if (typeof _this.props.arrowsY === 'number') {
                if (_this.props.arrowsY < 0) {
                    style = {
                        top: _this.props.arrowsY + 'px'
                    };
                } else {
                    style = {
                        bottom: _this.props.arrowsY + 'px'
                    };
                }
            }
            return style;
        }, _this.arrowsOnClick = function (type) {
            if (typeof _this.props.arrowsOnClick === 'function') {
                _this.props.arrowsOnClick(type);
            }
        }, _this.componentDidMount = function () {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Arrows, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var arrowStyle = this.getArrowStyle();

            return _react2.default.createElement(
                'div',
                { className: _index2.default.arrows },
                _react2.default.createElement(
                    'div',
                    { style: arrowStyle, className: _index2.default.arrow + ' ' + _index2.default.left, onClick: function onClick() {
                            return _this2.arrowsOnClick('left');
                        } },
                    ' < '
                ),
                _react2.default.createElement(
                    'div',
                    { style: arrowStyle, className: _index2.default.arrow + ' ' + _index2.default.right, onClick: function onClick() {
                            return _this2.arrowsOnClick('right');
                        } },
                    ' > '
                )
            );
        }
    }]);

    return Arrows;
}(_react.Component);

exports.default = Arrows;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| .arrows{\r\n|     .arrow{\r\n|         position: absolute;\r");

/***/ })
/******/ ]);