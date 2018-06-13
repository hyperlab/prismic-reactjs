(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prismic-richtext"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define("PrismicReactjs", ["prismic-richtext", "react"], factory);
	else if(typeof exports === 'object')
		exports["PrismicReactjs"] = factory(require("prismic-richtext"), require("react"));
	else
		root["PrismicReactjs"] = factory(root["prismic-richtext"], root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("PrismicHelpers",[],t):"object"==typeof exports?exports.PrismicHelpers=t():e.PrismicHelpers=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var u=n(2),o=r(u),i=n(1),f=r(i);e.exports={Link:o.default,Date:f.default}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return null;var t=24==e.length?e.substring(0,22)+":"+e.substring(22,24):e;return new Date(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={url:function(e,t){return"Document"===e.link_type?t?t(e,e.isBroken):"":e.url}}},function(e,t,n){e.exports=n(0)}])});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _prismicHelpers = __webpack_require__(0);

var _prismicHelpers2 = _interopRequireDefault(_prismicHelpers);

var _richtext = __webpack_require__(3);

var _richtext2 = _interopRequireDefault(_richtext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { Date: _prismicHelpers2.default.Date, RichText: _richtext2.default, Link: _prismicHelpers2.default.Link };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prismicRichtext = __webpack_require__(4);

var _prismicRichtext2 = _interopRequireDefault(_prismicRichtext);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _prismicHelpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function serialize(linkResolver, type, element, content, children, index) {
  switch (type) {
    case _prismicRichtext.Elements.heading1:
      return serializeStandardTag('h1', element, children, index);
    case _prismicRichtext.Elements.heading2:
      return serializeStandardTag('h2', element, children, index);
    case _prismicRichtext.Elements.heading3:
      return serializeStandardTag('h3', element, children, index);
    case _prismicRichtext.Elements.heading4:
      return serializeStandardTag('h4', element, children, index);
    case _prismicRichtext.Elements.heading5:
      return serializeStandardTag('h5', element, children, index);
    case _prismicRichtext.Elements.heading6:
      return serializeStandardTag('h6', element, children, index);
    case _prismicRichtext.Elements.paragraph:
      return serializeStandardTag('p', element, children, index);
    case _prismicRichtext.Elements.preformatted:
      return serializeStandardTag('pre', element, children, index);
    case _prismicRichtext.Elements.strong:
      return serializeStandardTag('strong', element, children, index);
    case _prismicRichtext.Elements.em:
      return serializeStandardTag('em', element, children, index);
    case _prismicRichtext.Elements.listItem:
      return serializeStandardTag('li', element, children, index);
    case _prismicRichtext.Elements.oListItem:
      return serializeStandardTag('li', element, children, index);
    case _prismicRichtext.Elements.list:
      return serializeStandardTag('ul', element, children, index);
    case _prismicRichtext.Elements.oList:
      return serializeStandardTag('ol', element, children, index);
    case _prismicRichtext.Elements.image:
      return serializeImage(linkResolver, element, index);
    case _prismicRichtext.Elements.embed:
      return serializeEmbed(element, index);
    case _prismicRichtext.Elements.hyperlink:
      return serializeHyperlink(linkResolver, element, children, index);
    case _prismicRichtext.Elements.label:
      return serializeLabel(element, children, index);
    case _prismicRichtext.Elements.span:
      return serializeSpan(content);
    default:
      return null;
  }
}

function propsWithUniqueKey(props, key) {
  return Object.assign(props || {}, { key: key });
}

function serializeStandardTag(tag, element, children, key) {
  var props = element.label ? Object.assign({}, { className: element.label }) : {};
  return _react2.default.createElement(tag, propsWithUniqueKey(props, key), children);
}

function serializeHyperlink(linkResolver, element, children, key) {
  var targetAttr = element.data.target ? { target: element.data.target } : {};
  var relAttr = element.data.target ? { rel: 'noopener' } : {};
  var props = Object.assign({ href: _prismicHelpers.Link.url(element.data, linkResolver) }, targetAttr, relAttr);
  return _react2.default.createElement('a', propsWithUniqueKey(props, key), children);
}

function serializeLabel(element, children, key) {
  var props = element.data ? Object.assign({}, { className: element.data.label }) : {};
  return _react2.default.createElement('span', propsWithUniqueKey(props, key), children);
}

function serializeSpan(content) {
  if (content) {
    return content.split("\n").reduce(function (acc, p) {
      if (acc.length === 0) {
        return [p];
      } else {
        var brIndex = (acc.length + 1) / 2 - 1;
        var br = _react2.default.createElement('br', propsWithUniqueKey({}, brIndex));
        return acc.concat([br, p]);
      }
    }, []);
  } else {
    return null;
  }
}

function serializeImage(linkResolver, element, key) {
  var linkUrl = element.linkTo ? _prismicHelpers.Link.url(element.linkTo, linkResolver) : null;
  var linkTarget = element.linkTo && element.linkTo.target ? { target: element.linkTo.target } : {};
  var relAttr = linkTarget.target ? { rel: 'noopener' } : {};
  var img = _react2.default.createElement('img', { src: element.url, alt: element.alt || '' });

  return _react2.default.createElement('p', propsWithUniqueKey({ className: [element.label || '', 'block-img'].join(' ') }, key), linkUrl ? _react2.default.createElement('a', Object.assign({ href: linkUrl }, linkTarget, relAttr), img) : img);
}

function serializeEmbed(element, key) {
  var props = Object.assign({
    "data-oembed": element.oembed.embed_url,
    "data-oembed-type": element.oembed.type,
    "data-oembed-provider": element.oembed.provider_name
  }, element.label ? { className: element.label } : {});

  var embedHtml = _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: element.oembed.html } });

  return _react2.default.createElement('div', propsWithUniqueKey(props, key), embedHtml);
}

exports.default = {
  asText: function asText(structuredText) {
    return _prismicRichtext2.default.asText(structuredText);
  },
  render: function render(richText, linkResolver, htmlSerializer) {
    var serializedChildren = _prismicRichtext2.default.serialize(richText, serialize.bind(null, linkResolver), htmlSerializer);
    return _react2.default.createElement('div', propsWithUniqueKey(), serializedChildren);
  },


  Elements: _prismicRichtext.Elements
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ })
/******/ ]);
});