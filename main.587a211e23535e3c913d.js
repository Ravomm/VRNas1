/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/swiper/swiper-bundle.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Swiper 9.3.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 15, 2023
 */

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Swiper = factory());
})(undefined, function () {
  'use strict';

  /**
   * SSR Window 4.0.2
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2021, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: December 13, 2021
   */
  /* eslint-disable no-param-reassign */
  function isObject$1(obj) {
    return obj !== null && _typeof(obj) === 'object' && 'constructor' in obj && obj.constructor === Object;
  }
  function extend$1(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    Object.keys(src).forEach(function (key) {
      if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
        extend$1(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ''
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
    }
  };
  function getDocument() {
    var doc = typeof document !== 'undefined' ? document : {};
    extend$1(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ''
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return '';
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(callback) {
      if (typeof setTimeout === 'undefined') {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(id) {
      if (typeof setTimeout === 'undefined') {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    var win = typeof window !== 'undefined' ? window : {};
    extend$1(win, ssrWindow);
    return win;
  }
  function deleteProps(obj) {
    var object = obj;
    Object.keys(object).forEach(function (key) {
      try {
        object[key] = null;
      } catch (e) {
        // no getter for object
      }
      try {
        delete object[key];
      } catch (e) {
        // something got wrong
      }
    });
  }
  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle$1(el) {
    var window = getWindow();
    var style;
    if (window.getComputedStyle) {
      style = window.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = 'x';
    }
    var window = getWindow();
    var matrix;
    var curTransform;
    var transformMatrix;
    var curStyle = getComputedStyle$1(el);
    if (window.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map(function (a) {
          return a.replace(',', '.');
        }).join(', ');
      }
      // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case
      transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }
    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject(o) {
    return _typeof(o) === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
  }
  function isNode(node) {
    // eslint-disable-next-line
    if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend() {
    var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
    var noExtend = ['__proto__', 'constructor', 'prototype'];
    for (var i = 1; i < arguments.length; i += 1) {
      var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
      if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
        var keysArray = Object.keys(Object(nextSource)).filter(function (key) {
          return noExtend.indexOf(key) < 0;
        });
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll(_ref) {
    var swiper = _ref.swiper,
      targetPosition = _ref.targetPosition,
      side = _ref.side;
    var window = getWindow();
    var startPosition = -swiper.translate;
    var startTime = null;
    var time;
    var duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = 'none';
    window.cancelAnimationFrame(swiper.cssModeFrameID);
    var dir = targetPosition > startPosition ? 'next' : 'prev';
    var isOutOfBound = function isOutOfBound(current, target) {
      return dir === 'next' && current >= target || dir === 'prev' && current <= target;
    };
    var animate = function animate() {
      time = new Date().getTime();
      if (startTime === null) {
        startTime = time;
      }
      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      var currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper.wrapperEl.scrollTo(_defineProperty({}, side, currentPosition));
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = 'hidden';
        swiper.wrapperEl.style.scrollSnapType = '';
        setTimeout(function () {
          swiper.wrapperEl.style.overflow = '';
          swiper.wrapperEl.scrollTo(_defineProperty({}, side, currentPosition));
        });
        window.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }
      swiper.cssModeFrameID = window.requestAnimationFrame(animate);
    };
    animate();
  }
  function getSlideTransformEl(slideEl) {
    return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowEl && slideEl.shadowEl.querySelector('.swiper-slide-transform') || slideEl;
  }
  function elementChildren(element, selector) {
    if (selector === void 0) {
      selector = '';
    }
    return _toConsumableArray(element.children).filter(function (el) {
      return el.matches(selector);
    });
  }
  function createElement(tag, classes) {
    var _el$classList;
    if (classes === void 0) {
      classes = [];
    }
    var el = document.createElement(tag);
    (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(Array.isArray(classes) ? classes : [classes]));
    return el;
  }
  function elementOffset(el) {
    var window = getWindow();
    var document = getDocument();
    var box = el.getBoundingClientRect();
    var body = document.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;
    var scrollTop = el === window ? window.scrollY : el.scrollTop;
    var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }
  function elementPrevAll(el, selector) {
    var prevEls = [];
    while (el.previousElementSibling) {
      var prev = el.previousElementSibling; // eslint-disable-line
      if (selector) {
        if (prev.matches(selector)) prevEls.push(prev);
      } else prevEls.push(prev);
      el = prev;
    }
    return prevEls;
  }
  function elementNextAll(el, selector) {
    var nextEls = [];
    while (el.nextElementSibling) {
      var next = el.nextElementSibling; // eslint-disable-line
      if (selector) {
        if (next.matches(selector)) nextEls.push(next);
      } else nextEls.push(next);
      el = next;
    }
    return nextEls;
  }
  function elementStyle(el, prop) {
    var window = getWindow();
    return window.getComputedStyle(el, null).getPropertyValue(prop);
  }
  function elementIndex(el) {
    var child = el;
    var i;
    if (child) {
      i = 0;
      // eslint-disable-next-line
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i += 1;
      }
      return i;
    }
    return undefined;
  }
  function elementParents(el, selector) {
    var parents = []; // eslint-disable-line
    var parent = el.parentElement; // eslint-disable-line
    while (parent) {
      if (selector) {
        if (parent.matches(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentElement;
    }
    return parents;
  }
  function elementTransitionEnd(el, callback) {
    function fireCallBack(e) {
      if (e.target !== el) return;
      callback.call(el, e);
      el.removeEventListener('transitionend', fireCallBack);
    }
    if (callback) {
      el.addEventListener('transitionend', fireCallBack);
    }
  }
  function elementOuterSize(el, size, includeMargins) {
    var window = getWindow();
    if (includeMargins) {
      return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
    }
    return el.offsetWidth;
  }
  var support;
  function calcSupport() {
    var window = getWindow();
    var document = getDocument();
    return {
      smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
      touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }
  var deviceCached;
  function calcDevice(_temp) {
    var _ref3 = _temp === void 0 ? {} : _temp,
      userAgent = _ref3.userAgent;
    var support = getSupport();
    var window = getWindow();
    var platform = window.navigator.platform;
    var ua = userAgent || window.navigator.userAgent;
    var device = {
      ios: false,
      android: false
    };
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    var windows = platform === 'Win32';
    var macos = platform === 'MacIntel';

    // iPadOs 13 fix
    var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
    if (!ipad && macos && support.touch && iPadScreens.indexOf("".concat(screenWidth, "x").concat(screenHeight)) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad) ipad = [0, 1, '13_0_0'];
      macos = false;
    }

    // Android
    if (android && !windows) {
      device.os = 'android';
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    }

    // Export object
    return device;
  }
  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }
  var browser;
  function calcBrowser() {
    var window = getWindow();
    var needPerspectiveFix = false;
    function isSafari() {
      var ua = window.navigator.userAgent.toLowerCase();
      return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
    }
    if (isSafari()) {
      var ua = String(window.navigator.userAgent);
      if (ua.includes('Version/')) {
        var _ua$split$1$split$0$s = ua.split('Version/')[1].split(' ')[0].split('.').map(function (num) {
            return Number(num);
          }),
          _ua$split$1$split$0$s2 = _slicedToArray(_ua$split$1$split$0$s, 2),
          major = _ua$split$1$split$0$s2[0],
          minor = _ua$split$1$split$0$s2[1];
        needPerspectiveFix = major < 16 || major === 16 && minor < 2;
      }
    }
    return {
      isSafari: needPerspectiveFix || isSafari(),
      needPerspectiveFix: needPerspectiveFix,
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }
  function Resize(_ref) {
    var swiper = _ref.swiper,
      on = _ref.on,
      emit = _ref.emit;
    var window = getWindow();
    var observer = null;
    var animationFrame = null;
    var resizeHandler = function resizeHandler() {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit('beforeResize');
      emit('resize');
    };
    var createObserver = function createObserver() {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      observer = new ResizeObserver(function (entries) {
        animationFrame = window.requestAnimationFrame(function () {
          var width = swiper.width,
            height = swiper.height;
          var newWidth = width;
          var newHeight = height;
          entries.forEach(function (_ref2) {
            var contentBoxSize = _ref2.contentBoxSize,
              contentRect = _ref2.contentRect,
              target = _ref2.target;
            if (target && target !== swiper.el) return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper.el);
    };
    var removeObserver = function removeObserver() {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper.el) {
        observer.unobserve(swiper.el);
        observer = null;
      }
    };
    var orientationChangeHandler = function orientationChangeHandler() {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit('orientationchange');
    };
    on('init', function () {
      if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
        createObserver();
        return;
      }
      window.addEventListener('resize', resizeHandler);
      window.addEventListener('orientationchange', orientationChangeHandler);
    });
    on('destroy', function () {
      removeObserver();
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('orientationchange', orientationChangeHandler);
    });
  }
  function Observer(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
    var observers = [];
    var window = getWindow();
    var attach = function attach(target, options) {
      if (options === void 0) {
        options = {};
      }
      var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
      var observer = new ObserverFunc(function (mutations) {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (swiper.__preventObserver__) return;
        if (mutations.length === 1) {
          emit('observerUpdate', mutations[0]);
          return;
        }
        var observerUpdate = function observerUpdate() {
          emit('observerUpdate', mutations[0]);
        };
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(observerUpdate);
        } else {
          window.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData
      });
      observers.push(observer);
    };
    var init = function init() {
      if (!swiper.params.observer) return;
      if (swiper.params.observeParents) {
        var containerParents = elementParents(swiper.el);
        for (var i = 0; i < containerParents.length; i += 1) {
          attach(containerParents[i]);
        }
      }
      // Observe container
      attach(swiper.el, {
        childList: swiper.params.observeSlideChildren
      });

      // Observe wrapper
      attach(swiper.wrapperEl, {
        attributes: false
      });
    };
    var destroy = function destroy() {
      observers.forEach(function (observer) {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on('init', init);
    on('destroy', destroy);
  }

  /* eslint-disable no-underscore-dangle */

  var eventsEmitter = {
    on: function on(events, handler, priority) {
      var self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== 'function') return self;
      var method = priority ? 'unshift' : 'push';
      events.split(' ').forEach(function (event) {
        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
        self.eventsListeners[event][method](handler);
      });
      return self;
    },
    once: function once(events, handler, priority) {
      var self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== 'function') return self;
      function onceHandler() {
        self.off(events, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        handler.apply(self, args);
      }
      onceHandler.__emitterProxy = handler;
      return self.on(events, onceHandler, priority);
    },
    onAny: function onAny(handler, priority) {
      var self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== 'function') return self;
      var method = priority ? 'unshift' : 'push';
      if (self.eventsAnyListeners.indexOf(handler) < 0) {
        self.eventsAnyListeners[method](handler);
      }
      return self;
    },
    offAny: function offAny(handler) {
      var self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsAnyListeners) return self;
      var index = self.eventsAnyListeners.indexOf(handler);
      if (index >= 0) {
        self.eventsAnyListeners.splice(index, 1);
      }
      return self;
    },
    off: function off(events, handler) {
      var self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsListeners) return self;
      events.split(' ').forEach(function (event) {
        if (typeof handler === 'undefined') {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function (eventHandler, index) {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self.eventsListeners[event].splice(index, 1);
            }
          });
        }
      });
      return self;
    },
    emit: function emit() {
      var self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsListeners) return self;
      var events;
      var data;
      var context;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === 'string' || Array.isArray(args[0])) {
        events = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }
      data.unshift(context);
      var eventsArray = Array.isArray(events) ? events : events.split(' ');
      eventsArray.forEach(function (event) {
        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
          self.eventsAnyListeners.forEach(function (eventHandler) {
            eventHandler.apply(context, [event].concat(_toConsumableArray(data)));
          });
        }
        if (self.eventsListeners && self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function (eventHandler) {
            eventHandler.apply(context, data);
          });
        }
      });
      return self;
    }
  };
  function updateSize() {
    var swiper = this;
    var width;
    var height;
    var el = swiper.el;
    if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = el.clientWidth;
    }
    if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = el.clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    }

    // Subtract paddings
    width = width - parseInt(elementStyle(el, 'padding-left') || 0, 10) - parseInt(elementStyle(el, 'padding-right') || 0, 10);
    height = height - parseInt(elementStyle(el, 'padding-top') || 0, 10) - parseInt(elementStyle(el, 'padding-bottom') || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
      width: width,
      height: height,
      size: swiper.isHorizontal() ? width : height
    });
  }
  function updateSlides() {
    var swiper = this;
    function getDirectionLabel(property) {
      if (swiper.isHorizontal()) {
        return property;
      }
      // prettier-ignore
      return {
        'width': 'height',
        'margin-top': 'margin-left',
        'margin-bottom ': 'margin-right',
        'margin-left': 'margin-top',
        'margin-right': 'margin-bottom',
        'padding-left': 'padding-top',
        'padding-right': 'padding-bottom',
        'marginRight': 'marginBottom'
      }[property];
    }
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    }
    var params = swiper.params;
    var wrapperEl = swiper.wrapperEl,
      slidesEl = swiper.slidesEl,
      swiperSize = swiper.size,
      rtl = swiper.rtlTranslate,
      wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    var slides = elementChildren(slidesEl, ".".concat(swiper.params.slideClass, ", swiper-slide"));
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];
    var offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    var offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.slidesGrid.length;
    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;
    if (typeof swiperSize === 'undefined') {
      return;
    }
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
    } else if (typeof spaceBetween === 'string') {
      spaceBetween = parseFloat(spaceBetween);
    }
    swiper.virtualSize = -spaceBetween;

    // reset margins
    slides.forEach(function (slideEl) {
      if (rtl) {
        slideEl.style.marginLeft = '';
      } else {
        slideEl.style.marginRight = '';
      }
      slideEl.style.marginBottom = '';
      slideEl.style.marginTop = '';
    });

    // reset cssMode offsets
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(wrapperEl, '--swiper-centered-offset-before', '');
      setCSSProperty(wrapperEl, '--swiper-centered-offset-after', '');
    }
    var gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
      swiper.grid.initSlides(slidesLength);
    }

    // Calc slides
    var slideSize;
    var shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(function (key) {
      return typeof params.breakpoints[key].slidesPerView !== 'undefined';
    }).length > 0;
    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var _slide = void 0;
      if (slides[i]) _slide = slides[i];
      if (gridEnabled) {
        swiper.grid.updateSlide(i, _slide, slidesLength, getDirectionLabel);
      }
      if (slides[i] && elementStyle(_slide, 'display') === 'none') continue; // eslint-disable-line

      if (params.slidesPerView === 'auto') {
        if (shouldResetSlideSize) {
          slides[i].style[getDirectionLabel('width')] = "";
        }
        var slideStyles = getComputedStyle(_slide);
        var currentTransform = _slide.style.transform;
        var currentWebKitTransform = _slide.style.webkitTransform;
        if (currentTransform) {
          _slide.style.transform = 'none';
        }
        if (currentWebKitTransform) {
          _slide.style.webkitTransform = 'none';
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? elementOuterSize(_slide, 'width', true) : elementOuterSize(_slide, 'height', true);
        } else {
          // eslint-disable-next-line
          var width = getDirectionPropertyValue(slideStyles, 'width');
          var paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
          var paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
          var marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
          var marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
          var boxSizing = slideStyles.getPropertyValue('box-sizing');
          if (boxSizing && boxSizing === 'border-box') {
            slideSize = width + marginLeft + marginRight;
          } else {
            var _slide2 = _slide,
              clientWidth = _slide2.clientWidth,
              offsetWidth = _slide2.offsetWidth;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          _slide.style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          _slide.style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths) slideSize = Math.floor(slideSize);
        if (slides[i]) {
          slides[i].style[getDirectionLabel('width')] = "".concat(slideSize, "px");
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      wrapperEl.style.width = "".concat(swiper.virtualSize + spaceBetween, "px");
    }
    if (params.setWrapperSize) {
      wrapperEl.style[getDirectionLabel('width')] = "".concat(swiper.virtualSize + spaceBetween, "px");
    }
    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
    }

    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
      var newSlidesGrid = [];
      for (var _i = 0; _i < snapGrid.length; _i += 1) {
        var slidesGridItem = snapGrid[_i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[_i] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (isVirtual && params.loop) {
      var size = slidesSizesGrid[0] + spaceBetween;
      if (params.slidesPerGroup > 1) {
        var groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
        var groupSize = size * params.slidesPerGroup;
        for (var _i2 = 0; _i2 < groups; _i2 += 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
      }
      for (var _i3 = 0; _i3 < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; _i3 += 1) {
        if (params.slidesPerGroup === 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + size);
        }
        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
        swiper.virtualSize += size;
      }
    }
    if (snapGrid.length === 0) snapGrid = [0];
    if (spaceBetween !== 0) {
      var key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
      slides.filter(function (_, slideIndex) {
        if (!params.cssMode || params.loop) return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).forEach(function (slideEl) {
        slideEl.style[key] = "".concat(spaceBetween, "px");
      });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      var maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map(function (snap) {
        if (snap < 0) return -offsetBefore;
        if (snap > maxSnap) return maxSnap + offsetAfter;
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      var _allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        _allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      _allSlidesSize -= spaceBetween;
      if (_allSlidesSize < swiperSize) {
        var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
        snapGrid.forEach(function (snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function (snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(wrapperEl, '--swiper-centered-offset-before', "".concat(-snapGrid[0], "px"));
      setCSSProperty(wrapperEl, '--swiper-centered-offset-after', "".concat(swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2, "px"));
      var addToSnapGrid = -swiper.snapGrid[0];
      var addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map(function (v) {
        return v + addToSnapGrid;
      });
      swiper.slidesGrid = swiper.slidesGrid.map(function (v) {
        return v + addToSlidesGrid;
      });
    }
    if (slidesLength !== previousSlidesLength) {
      swiper.emit('slidesLengthChange');
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) swiper.checkOverflow();
      swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit('slidesGridLengthChange');
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
      var backFaceHiddenClass = "".concat(params.containerModifierClass, "backface-hidden");
      var hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper.el.classList.remove(backFaceHiddenClass);
      }
    }
  }
  function updateAutoHeight(speed) {
    var swiper = this;
    var activeSlides = [];
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var newHeight = 0;
    var i;
    if (typeof speed === 'number') {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    var getSlideByIndex = function getSlideByIndex(index) {
      if (isVirtual) {
        return swiper.slides[swiper.getSlideIndexByData(index)];
      }
      return swiper.slides[index];
    };
    // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        (swiper.visibleSlides || []).forEach(function (slide) {
          activeSlides.push(slide);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          var index = swiper.activeIndex + i;
          if (index > swiper.slides.length && !isVirtual) break;
          activeSlides.push(getSlideByIndex(index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }

    // Find new height from highest slide in view
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }

    // Update Height
    if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = "".concat(newHeight, "px");
  }
  function updateSlidesOffset() {
    var swiper = this;
    var slides = swiper.slides;
    // eslint-disable-next-line
    var minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
    }
  }
  function updateSlidesProgress(translate) {
    if (translate === void 0) {
      translate = this && this.translate || 0;
    }
    var swiper = this;
    var params = swiper.params;
    var slides = swiper.slides,
      rtl = swiper.rtlTranslate,
      snapGrid = swiper.snapGrid;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
    var offsetCenter = -translate;
    if (rtl) offsetCenter = translate;

    // Visible Slides
    slides.forEach(function (slideEl) {
      slideEl.classList.remove(params.slideVisibleClass);
    });
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    var spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
    } else if (typeof spaceBetween === 'string') {
      spaceBetween = parseFloat(spaceBetween);
    }
    for (var i = 0; i < slides.length; i += 1) {
      var _slide3 = slides[i];
      var slideOffset = _slide3.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (_slide3.swiperSlideSize + spaceBetween);
      var originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (_slide3.swiperSlideSize + spaceBetween);
      var slideBefore = -(offsetCenter - slideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(_slide3);
        swiper.visibleSlidesIndexes.push(i);
        slides[i].classList.add(params.slideVisibleClass);
      }
      _slide3.progress = rtl ? -slideProgress : slideProgress;
      _slide3.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
  }
  function updateProgress(translate) {
    var swiper = this;
    if (typeof translate === 'undefined') {
      var multiplier = swiper.rtlTranslate ? -1 : 1;
      // eslint-disable-next-line
      translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    var params = swiper.params;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress,
      isBeginning = swiper.isBeginning,
      isEnd = swiper.isEnd,
      progressLoop = swiper.progressLoop;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / translatesDiff;
      var isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
      var isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
      isBeginning = isBeginningRounded || progress <= 0;
      isEnd = isEndRounded || progress >= 1;
      if (isBeginningRounded) progress = 0;
      if (isEndRounded) progress = 1;
    }
    if (params.loop) {
      var firstSlideIndex = swiper.getSlideIndexByData(0);
      var lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
      var firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
      var lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
      var translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
      var translateAbs = Math.abs(translate);
      if (translateAbs >= firstSlideTranslate) {
        progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
      } else {
        progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
      }
      if (progressLoop > 1) progressLoop -= 1;
    }
    Object.assign(swiper, {
      progress: progress,
      progressLoop: progressLoop,
      isBeginning: isBeginning,
      isEnd: isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) {
      swiper.emit('reachBeginning toEdge');
    }
    if (isEnd && !wasEnd) {
      swiper.emit('reachEnd toEdge');
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit('fromEdge');
    }
    swiper.emit('progress', progress);
  }
  function updateSlidesClasses() {
    var swiper = this;
    var slides = swiper.slides,
      params = swiper.params,
      slidesEl = swiper.slidesEl,
      activeIndex = swiper.activeIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var getFilteredSlide = function getFilteredSlide(selector) {
      return elementChildren(slidesEl, ".".concat(params.slideClass).concat(selector, ", swiper-slide").concat(selector))[0];
    };
    slides.forEach(function (slideEl) {
      slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
    });
    var activeSlide;
    if (isVirtual) {
      if (params.loop) {
        var slideIndex = activeIndex - swiper.virtual.slidesBefore;
        if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
        if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
        activeSlide = getFilteredSlide("[data-swiper-slide-index=\"".concat(slideIndex, "\"]"));
      } else {
        activeSlide = getFilteredSlide("[data-swiper-slide-index=\"".concat(activeIndex, "\"]"));
      }
    } else {
      activeSlide = slides[activeIndex];
    }
    if (activeSlide) {
      // Active classes
      activeSlide.classList.add(params.slideActiveClass);

      // Next Slide
      var nextSlide = elementNextAll(activeSlide, ".".concat(params.slideClass, ", swiper-slide"))[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }
      if (nextSlide) {
        nextSlide.classList.add(params.slideNextClass);
      }
      // Prev Slide
      var prevSlide = elementPrevAll(activeSlide, ".".concat(params.slideClass, ", swiper-slide"))[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
      if (prevSlide) {
        prevSlide.classList.add(params.slidePrevClass);
      }
    }
    swiper.emitSlidesClasses();
  }
  var processLazyPreloader = function processLazyPreloader(swiper, imageEl) {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    var slideSelector = function slideSelector() {
      return swiper.isElement ? "swiper-slide" : ".".concat(swiper.params.slideClass);
    };
    var slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
      var lazyEl = slideEl.querySelector(".".concat(swiper.params.lazyPreloaderClass));
      if (lazyEl) lazyEl.remove();
    }
  };
  var unlazy = function unlazy(swiper, index) {
    if (!swiper.slides[index]) return;
    var imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl) imageEl.removeAttribute('loading');
  };
  var preload = function preload(swiper) {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    var amount = swiper.params.lazyPreloadPrevNext;
    var len = swiper.slides.length;
    if (!len || !amount || amount < 0) return;
    amount = Math.min(amount, len);
    var slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    var activeIndex = swiper.activeIndex;
    var slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind) {
      for (var i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
        var realIndex = (i % len + len) % len;
        if (realIndex !== activeIndex && realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
      }
    } else {
      for (var _i4 = Math.max(slideIndexLastInView - amount, 0); _i4 <= Math.min(slideIndexLastInView + amount, len - 1); _i4 += 1) {
        if (_i4 !== activeIndex && _i4 > slideIndexLastInView) unlazy(swiper, _i4);
      }
    }
  };
  function getActiveIndexByTranslate(swiper) {
    var slidesGrid = swiper.slidesGrid,
      params = swiper.params;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var activeIndex;
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
    return activeIndex;
  }
  function updateActiveIndex(newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var snapGrid = swiper.snapGrid,
      params = swiper.params,
      previousIndex = swiper.activeIndex,
      previousRealIndex = swiper.realIndex,
      previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;
    var getVirtualRealIndex = function getVirtualRealIndex(aIndex) {
      var realIndex = aIndex - swiper.virtual.slidesBefore;
      if (realIndex < 0) {
        realIndex = swiper.virtual.slides.length + realIndex;
      }
      if (realIndex >= swiper.virtual.slides.length) {
        realIndex -= swiper.virtual.slides.length;
      }
      return realIndex;
    };
    if (typeof activeIndex === 'undefined') {
      activeIndex = getActiveIndexByTranslate(swiper);
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit('snapIndexChange');
      }
      if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
        swiper.realIndex = getVirtualRealIndex(activeIndex);
      }
      return;
    }
    // Get real index
    var realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) {
      realIndex = getVirtualRealIndex(activeIndex);
    } else if (swiper.slides[activeIndex]) {
      realIndex = parseInt(swiper.slides[activeIndex].getAttribute('data-swiper-slide-index') || activeIndex, 10);
    } else {
      realIndex = activeIndex;
    }
    Object.assign(swiper, {
      previousSnapIndex: previousSnapIndex,
      snapIndex: snapIndex,
      previousRealIndex: previousRealIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex
    });
    if (swiper.initialized) {
      preload(swiper);
    }
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      swiper.emit('slideChange');
    }
  }
  function updateClickedSlide(e) {
    var swiper = this;
    var params = swiper.params;
    var slide = e.closest(".".concat(params.slideClass, ", swiper-slide"));
    var slideFound = false;
    var slideIndex;
    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }
    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }
  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide
  };
  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? 'x' : 'y';
    }
    var swiper = this;
    var params = swiper.params,
      rtl = swiper.rtlTranslate,
      translate = swiper.translate,
      wrapperEl = swiper.wrapperEl;
    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }
    if (params.cssMode) {
      return translate;
    }
    var currentTranslate = getTranslate(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }
  function setTranslate(translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate,
      params = swiper.params,
      wrapperEl = swiper.wrapperEl,
      progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      if (swiper.isHorizontal()) {
        x -= swiper.cssOverflowAdjustment();
      } else {
        y -= swiper.cssOverflowAdjustment();
      }
      wrapperEl.style.transform = "translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)");
    }

    // Check if we need to update progress
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }
    swiper.emit('setTranslate', swiper.translate, byController);
  }
  function minTranslate() {
    return -this.snapGrid[0];
  }
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
    if (translate === void 0) {
      translate = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    var swiper = this;
    var params = swiper.params,
      wrapperEl = swiper.wrapperEl;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    var minTranslate = swiper.minTranslate();
    var maxTranslate = swiper.maxTranslate();
    var newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

    // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      var isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper: swiper,
            targetPosition: -newTranslate,
            side: isH ? 'left' : 'top'
          });
          return true;
        }
        wrapperEl.scrollTo(_defineProperty(_defineProperty({}, isH ? 'left' : 'top', -newTranslate), "behavior", 'smooth'));
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.emit('transitionEnd');
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.emit('transitionStart');
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            if (runCallbacks) {
              swiper.emit('transitionEnd');
            }
          };
        }
        swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }
  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
    translateTo: translateTo
  };
  function setTransition(duration, byController) {
    var swiper = this;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style.transitionDuration = "".concat(duration, "ms");
    }
    swiper.emit('setTransition', duration, byController);
  }
  function transitionEmit(_ref) {
    var swiper = _ref.swiper,
      runCallbacks = _ref.runCallbacks,
      direction = _ref.direction,
      step = _ref.step;
    var activeIndex = swiper.activeIndex,
      previousIndex = swiper.previousIndex;
    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
    }
    swiper.emit("transition".concat(step));
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit("slideResetTransition".concat(step));
        return;
      }
      swiper.emit("slideChangeTransition".concat(step));
      if (dir === 'next') {
        swiper.emit("slideNextTransition".concat(step));
      } else {
        swiper.emit("slidePrevTransition".concat(step));
      }
    }
  }
  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    var params = swiper.params;
    if (params.cssMode) return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    transitionEmit({
      swiper: swiper,
      runCallbacks: runCallbacks,
      direction: direction,
      step: 'Start'
    });
  }
  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    var params = swiper.params;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    transitionEmit({
      swiper: swiper,
      runCallbacks: runCallbacks,
      direction: direction,
      step: 'End'
    });
  }
  var transition = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd
  };
  function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) {
      index = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === 'string') {
      index = parseInt(index, 10);
    }
    var swiper = this;
    var slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      previousIndex = swiper.previousIndex,
      activeIndex = swiper.activeIndex,
      rtl = swiper.rtlTranslate,
      wrapperEl = swiper.wrapperEl,
      enabled = swiper.enabled;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
      return false;
    }
    var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    var translate = -snapGrid[snapIndex];
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        var normalizedTranslate = -Math.floor(translate * 100);
        var normalizedGrid = Math.floor(slidesGrid[i] * 100);
        var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i;
        }
      }
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper.emit('beforeSlideChangeStart');
    }

    // Update progress
    swiper.updateProgress(translate);
    var direction;
    if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

    // Update Index
    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
      swiper.updateActiveIndex(slideIndex);
      // Update Height
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== 'slide') {
        swiper.setTranslate(translate);
      }
      if (direction !== 'reset') {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      var isH = swiper.isHorizontal();
      var t = rtl ? translate : -translate;
      if (speed === 0) {
        var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = 'none';
          swiper._immediateVirtual = true;
        }
        if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
          swiper._cssModeVirtualInitialSet = true;
          requestAnimationFrame(function () {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
          });
        } else {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        }
        if (isVirtual) {
          requestAnimationFrame(function () {
            swiper.wrapperEl.style.scrollSnapType = '';
            swiper._immediateVirtual = false;
          });
        }
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper: swiper,
            targetPosition: t,
            side: isH ? 'left' : 'top'
          });
          return true;
        }
        wrapperEl.scrollTo(_defineProperty(_defineProperty({}, isH ? 'left' : 'top', t), "behavior", 'smooth'));
      }
      return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
  }
  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === 'string') {
      var indexAsNumber = parseInt(index, 10);
      index = indexAsNumber;
    }
    var swiper = this;
    var newIndex = index;
    if (swiper.params.loop) {
      if (swiper.virtual && swiper.params.virtual.enabled) {
        // eslint-disable-next-line
        newIndex = newIndex + swiper.virtual.slidesBefore;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    var enabled = swiper.enabled,
      params = swiper.params,
      animating = swiper.animating;
    if (!enabled) return swiper;
    var perGroup = params.slidesPerGroup;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
    }
    var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper.loopFix({
        direction: 'next'
      });
      // eslint-disable-next-line
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    if (params.rewind && swiper.isEnd) {
      return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      rtlTranslate = swiper.rtlTranslate,
      enabled = swiper.enabled,
      animating = swiper.animating;
    if (!enabled) return swiper;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper.loopFix({
        direction: 'prev'
      });
      // eslint-disable-next-line
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) {
      return normalize(val);
    });
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === 'undefined' && params.cssMode) {
      var prevSnapIndex;
      snapGrid.forEach(function (snap, snapIndex) {
        if (normalizedTranslate >= snap) {
          // prevSnap = snap;
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== 'undefined') {
        prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    var prevIndex = 0;
    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
      if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper.isBeginning) {
      var lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    var swiper = this;
    var index = swiper.activeIndex;
    var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
      // The current translate is on or after the current snap index, so the choice
      // is between the current index and the one after it.
      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      // The current translate is before the current snap index, so the choice
      // is between the current index and the one before it.
      var prevSnap = swiper.snapGrid[snapIndex - 1];
      var _currentSnap = swiper.snapGrid[snapIndex];
      if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }
  function slideToClickedSlide() {
    var swiper = this;
    var params = swiper.params,
      slidesEl = swiper.slidesEl;
    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;
    var slideSelector = swiper.isElement ? "swiper-slide" : ".".concat(params.slideClass);
    if (params.loop) {
      if (swiper.animating) return;
      realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, "".concat(slideSelector, "[data-swiper-slide-index=\"").concat(realIndex, "\"]"))[0]);
          nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, "".concat(slideSelector, "[data-swiper-slide-index=\"").concat(realIndex, "\"]"))[0]);
        nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide
  };
  function loopCreate(slideRealIndex) {
    var swiper = this;
    var params = swiper.params,
      slidesEl = swiper.slidesEl;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    var slides = elementChildren(slidesEl, ".".concat(params.slideClass, ", swiper-slide"));
    slides.forEach(function (el, index) {
      el.setAttribute('data-swiper-slide-index', index);
    });
    swiper.loopFix({
      slideRealIndex: slideRealIndex,
      direction: params.centeredSlides ? undefined : 'next'
    });
  }
  function loopFix(_temp) {
    var _ref4 = _temp === void 0 ? {} : _temp,
      slideRealIndex = _ref4.slideRealIndex,
      _ref4$slideTo = _ref4.slideTo,
      slideTo = _ref4$slideTo === void 0 ? true : _ref4$slideTo,
      direction = _ref4.direction,
      setTranslate = _ref4.setTranslate,
      activeSlideIndex = _ref4.activeSlideIndex,
      byController = _ref4.byController,
      byMousewheel = _ref4.byMousewheel;
    var swiper = this;
    if (!swiper.params.loop) return;
    swiper.emit('beforeLoopFix');
    var slides = swiper.slides,
      allowSlidePrev = swiper.allowSlidePrev,
      allowSlideNext = swiper.allowSlideNext,
      slidesEl = swiper.slidesEl,
      params = swiper.params;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
      if (slideTo) {
        if (!params.centeredSlides && swiper.snapIndex === 0) {
          swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
        } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
          swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
        } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
          swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
      }
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit('loopFix');
      return;
    }
    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
    var loopedSlides = params.loopedSlides || slidesPerView;
    if (loopedSlides % params.slidesPerGroup !== 0) {
      loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
    }
    swiper.loopedSlides = loopedSlides;
    var prependSlidesIndexes = [];
    var appendSlidesIndexes = [];
    var activeIndex = swiper.activeIndex;
    if (typeof activeSlideIndex === 'undefined') {
      activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter(function (el) {
        return el.classList.contains(params.slideActiveClass);
      })[0]);
    } else {
      activeIndex = activeSlideIndex;
    }
    var isNext = direction === 'next' || !direction;
    var isPrev = direction === 'prev' || !direction;
    var slidesPrepended = 0;
    var slidesAppended = 0;
    // prepend last slides before start
    if (activeSlideIndex < loopedSlides) {
      slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
      for (var i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
        var index = i - Math.floor(i / slides.length) * slides.length;
        prependSlidesIndexes.push(slides.length - index - 1);
      }
    } else if (activeSlideIndex /* + slidesPerView */ > swiper.slides.length - loopedSlides * 2) {
      slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
      for (var _i5 = 0; _i5 < slidesAppended; _i5 += 1) {
        var _index = _i5 - Math.floor(_i5 / slides.length) * slides.length;
        appendSlidesIndexes.push(_index);
      }
    }
    if (isPrev) {
      prependSlidesIndexes.forEach(function (index) {
        swiper.slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(swiper.slides[index]);
        swiper.slides[index].swiperLoopMoveDOM = false;
      });
    }
    if (isNext) {
      appendSlidesIndexes.forEach(function (index) {
        swiper.slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(swiper.slides[index]);
        swiper.slides[index].swiperLoopMoveDOM = false;
      });
    }
    swiper.recalcSlides();
    if (params.slidesPerView === 'auto') {
      swiper.updateSlides();
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (slideTo) {
      if (prependSlidesIndexes.length > 0 && isPrev) {
        if (typeof slideRealIndex === 'undefined') {
          var currentSlideTranslate = swiper.slidesGrid[activeIndex];
          var newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
          var diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
            if (setTranslate) {
              swiper.touches[swiper.isHorizontal() ? 'startX' : 'startY'] += diff;
            }
          }
        } else {
          if (setTranslate) {
            swiper.slideToLoop(slideRealIndex, 0, false, true);
          }
        }
      } else if (appendSlidesIndexes.length > 0 && isNext) {
        if (typeof slideRealIndex === 'undefined') {
          var _currentSlideTranslate = swiper.slidesGrid[activeIndex];
          var _newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
          var _diff = _newSlideTranslate - _currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - _diff);
          } else {
            swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
            if (setTranslate) {
              swiper.touches[swiper.isHorizontal() ? 'startX' : 'startY'] += _diff;
            }
          }
        } else {
          swiper.slideToLoop(slideRealIndex, 0, false, true);
        }
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
      var loopParams = {
        slideRealIndex: slideRealIndex,
        slideTo: false,
        direction: direction,
        setTranslate: setTranslate,
        activeSlideIndex: activeSlideIndex,
        byController: true
      };
      if (Array.isArray(swiper.controller.control)) {
        swiper.controller.control.forEach(function (c) {
          if (!c.destroyed && c.params.loop) c.loopFix(loopParams);
        });
      } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
        swiper.controller.control.loopFix(loopParams);
      }
    }
    swiper.emit('loopFix');
  }
  function loopDestroy() {
    var swiper = this;
    var params = swiper.params,
      slidesEl = swiper.slidesEl;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    swiper.recalcSlides();
    var newSlidesOrder = [];
    swiper.slides.forEach(function (slideEl) {
      var index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
      newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach(function (slideEl) {
      slideEl.removeAttribute('data-swiper-slide-index');
    });
    newSlidesOrder.forEach(function (slideEl) {
      slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
  }
  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy
  };
  function setGrabCursor(moving) {
    var swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    var el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    el.style.cursor = 'move';
    el.style.cursor = moving ? 'grabbing' : 'grab';
    if (swiper.isElement) {
      requestAnimationFrame(function () {
        swiper.__preventObserver__ = false;
      });
    }
  }
  function unsetGrabCursor() {
    var swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
    if (swiper.isElement) {
      requestAnimationFrame(function () {
        swiper.__preventObserver__ = false;
      });
    }
  }
  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor
  };

  // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
  function closestElement(selector, base) {
    if (base === void 0) {
      base = this;
    }
    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow()) return null;
      if (el.assignedSlot) el = el.assignedSlot;
      var found = el.closest(selector);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function onTouchStart(event) {
    var swiper = this;
    var document = getDocument();
    var window = getWindow();
    var data = swiper.touchEventsData;
    data.evCache.push(event);
    var params = swiper.params,
      touches = swiper.touches,
      enabled = swiper.enabled;
    if (!enabled) return;
    if (!params.simulateTouch && event.pointerType === 'mouse') return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }
    var e = event;
    if (e.originalEvent) e = e.originalEvent;
    var targetEl = e.target;
    if (params.touchEventsTarget === 'wrapper') {
      if (!swiper.wrapperEl.contains(targetEl)) return;
    }
    if ('which' in e && e.which === 3) return;
    if ('button' in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return;

    // change target el for shadow root component
    var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
    // eslint-disable-next-line
    var eventPath = event.composedPath ? event.composedPath() : event.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
      targetEl = eventPath[0];
    }
    var noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : ".".concat(params.noSwipingClass);
    var isTargetShadow = !!(e.target && e.target.shadowRoot);

    // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!targetEl.closest(params.swipeHandler)) return;
    }
    touches.currentX = e.pageX;
    touches.currentY = e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY;

    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === 'prevent') {
        event.preventDefault();
      } else {
        return;
      }
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    var preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
      preventDefault = false;
      if (targetEl.nodeName === 'SELECT') {
        data.isTouched = false;
      }
    }
    if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) {
      document.activeElement.blur();
    }
    var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
      e.preventDefault();
    }
    if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
      swiper.freeMode.onTouchStart();
    }
    swiper.emit('touchStart', e);
  }
  function onTouchMove(event) {
    var document = getDocument();
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      enabled = swiper.enabled;
    if (!enabled) return;
    if (!params.simulateTouch && event.pointerType === 'mouse') return;
    var e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
      return;
    }
    var pointerIndex = data.evCache.findIndex(function (cachedEv) {
      return cachedEv.pointerId === e.pointerId;
    });
    if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
    var targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
    var pageX = targetTouch.pageX;
    var pageY = targetTouch.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      if (!e.target.matches(data.focusableElements)) {
        swiper.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          prevX: swiper.touches.currentX,
          prevY: swiper.touches.currentY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }
    if (document.activeElement) {
      if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchMove', e);
    }
    if (e.targetTouches && e.targetTouches.length > 1) return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;
    if (typeof data.isScrolling === 'undefined') {
      var touchAngle;
      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    if (typeof data.startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
    var diff = swiper.isHorizontal() ? diffX : diffY;
    var touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
      diff = Math.abs(diff) * (rtl ? 1 : -1);
      touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
      touchesDiff = -touchesDiff;
    }
    var prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
    var isLoop = swiper.params.loop && !params.cssMode;
    if (!data.isMoved) {
      if (isLoop) {
        swiper.loopFix({
          direction: swiper.swipeDirection
        });
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        var evt = new window.CustomEvent('transitionend', {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      }
      data.allowMomentumBounce = false;
      // Grab Cursor
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit('sliderFirstMove', e);
    }
    var loopFixed;
    if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
      // need another loop fix
      swiper.loopFix({
        direction: swiper.swipeDirection,
        setTranslate: true
      });
      loopFixed = true;
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0) {
      if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) {
        swiper.loopFix({
          direction: 'prev',
          setTranslate: true,
          activeSlideIndex: 0
        });
      }
      if (data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
        }
      }
    } else if (diff < 0) {
      if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) {
        swiper.loopFix({
          direction: 'next',
          setTranslate: true,
          activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
      }
      if (data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
        }
      }
    }
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }

    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }

    // Threshold
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode) return;

    // Update active index in free mode
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    }
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
  }
  function onTouchEnd(event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var pointerIndex = data.evCache.findIndex(function (cachedEv) {
      return cachedEv.pointerId === event.pointerId;
    });
    if (pointerIndex >= 0) {
      data.evCache.splice(pointerIndex, 1);
    }
    if (['pointercancel', 'pointerout', 'pointerleave'].includes(event.type)) {
      var proceed = event.type === 'pointercancel' && (swiper.browser.isSafari || swiper.browser.isWebView);
      if (!proceed) {
        return;
      }
    }
    var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      slidesGrid = swiper.slidesGrid,
      enabled = swiper.enabled;
    if (!enabled) return;
    if (!params.simulateTouch && event.pointerType === 'mouse') return;
    var e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (data.allowTouchCallbacks) {
      swiper.emit('touchEnd', e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }

    // Time diff
    var touchEndTime = now();
    var timeDiff = touchEndTime - data.touchStartTime;

    // Tap, doubleTap, Click
    if (swiper.allowClick) {
      var pathTree = e.path || e.composedPath && e.composedPath();
      swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
      swiper.emit('tap click', e);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit('doubleTap doubleClick', e);
      }
    }
    data.lastClickTime = now();
    nextTick(function () {
      if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    var currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (swiper.params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos: currentPos
      });
      return;
    }

    // Find current slide
    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];
    for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i + _increment] !== 'undefined') {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
          stopIndex = i;
          groupSize = slidesGrid[i + _increment] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    var rewindFirstIndex = null;
    var rewindLastIndex = null;
    if (params.rewind) {
      if (swiper.isBeginning) {
        rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      } else if (swiper.isEnd) {
        rewindFirstIndex = 0;
      }
    }
    // Find current slide size
    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === 'prev') {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
          swiper.slideTo(rewindLastIndex);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === 'next') {
          swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
        }
        if (swiper.swipeDirection === 'prev') {
          swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }
  function onResize() {
    var swiper = this;
    var params = swiper.params,
      el = swiper.el;
    if (el && el.offsetWidth === 0) return;

    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Save locks
    var allowSlideNext = swiper.allowSlideNext,
      allowSlidePrev = swiper.allowSlidePrev,
      snapGrid = swiper.snapGrid;
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    var isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      if (swiper.params.loop && !isVirtual) {
        swiper.slideToLoop(swiper.realIndex, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      clearTimeout(swiper.autoplay.resizeTimeout);
      swiper.autoplay.resizeTimeout = setTimeout(function () {
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
          swiper.autoplay.resume();
        }
      }, 500);
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }
  function onClick(e) {
    var swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) e.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }
  function onScroll() {
    var swiper = this;
    var wrapperEl = swiper.wrapperEl,
      rtlTranslate = swiper.rtlTranslate,
      enabled = swiper.enabled;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    // eslint-disable-next-line
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit('setTranslate', swiper.translate, false);
  }
  function onLoad(e) {
    var swiper = this;
    processLazyPreloader(swiper, e.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
      return;
    }
    swiper.update();
  }
  var dummyEventAttached = false;
  function dummyEventListener() {}
  var events = function events(swiper, method) {
    var document = getDocument();
    var params = swiper.params,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device;
    var capture = !!params.nested;
    var domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    var swiperMethod = method;

    // Touch Events
    el[domMethod]('pointerdown', swiper.onTouchStart, {
      passive: false
    });
    document[domMethod]('pointermove', swiper.onTouchMove, {
      passive: false,
      capture: capture
    });
    document[domMethod]('pointerup', swiper.onTouchEnd, {
      passive: true
    });
    document[domMethod]('pointercancel', swiper.onTouchEnd, {
      passive: true
    });
    document[domMethod]('pointerout', swiper.onTouchEnd, {
      passive: true
    });
    document[domMethod]('pointerleave', swiper.onTouchEnd, {
      passive: true
    });

    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]('click', swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]('scroll', swiper.onScroll);
    }

    // Resize handler
    if (params.updateOnWindowResize) {
      swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
    } else {
      swiper[swiperMethod]('observerUpdate', onResize, true);
    }

    // Images loader
    el[domMethod]('load', swiper.onLoad, {
      capture: true
    });
  };
  function attachEvents() {
    var swiper = this;
    var document = getDocument();
    var params = swiper.params;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    if (!dummyEventAttached) {
      document.addEventListener('touchstart', dummyEventListener);
      dummyEventAttached = true;
    }
    events(swiper, 'on');
  }
  function detachEvents() {
    var swiper = this;
    events(swiper, 'off');
  }
  var events$1 = {
    attachEvents: attachEvents,
    detachEvents: detachEvents
  };
  var isGridEnabled = function isGridEnabled(swiper, params) {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    var swiper = this;
    var realIndex = swiper.realIndex,
      initialized = swiper.initialized,
      params = swiper.params,
      el = swiper.el;
    var breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

    // Get breakpoint for window width and update parameters
    var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    var breakpointParams = breakpointOnlyParams || swiper.originalParams;
    var wasMultiRow = isGridEnabled(swiper, params);
    var isMultiRow = isGridEnabled(swiper, breakpointParams);
    var wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove("".concat(params.containerModifierClass, "grid"), "".concat(params.containerModifierClass, "grid-column"));
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add("".concat(params.containerModifierClass, "grid"));
      if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
        el.classList.add("".concat(params.containerModifierClass, "grid-column"));
      }
      swiper.emitContainerClasses();
    }

    // Toggle navigation, pagination, scrollbar
    ['navigation', 'pagination', 'scrollbar'].forEach(function (prop) {
      var wasModuleEnabled = params[prop] && params[prop].enabled;
      var isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper[prop].enable();
      }
    });
    var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend(swiper.params, breakpointParams);
    var isEnabled = swiper.params.enabled;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit('_beforeBreakpoint', breakpointParams);
    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    }
    swiper.emit('breakpoint', breakpointParams);
  }
  function getBreakpoint(breakpoints, base, containerEl) {
    if (base === void 0) {
      base = 'window';
    }
    if (!breakpoints || base === 'container' && !containerEl) return undefined;
    var breakpoint = false;
    var window = getWindow();
    var currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
    var points = Object.keys(breakpoints).map(function (point) {
      if (typeof point === 'string' && point.indexOf('@') === 0) {
        var minRatio = parseFloat(point.substr(1));
        var value = currentHeight * minRatio;
        return {
          value: value,
          point: point
        };
      }
      return {
        value: point,
        point: point
      };
    });
    points.sort(function (a, b) {
      return parseInt(a.value, 10) - parseInt(b.value, 10);
    });
    for (var i = 0; i < points.length; i += 1) {
      var _points$i = points[i],
        point = _points$i.point,
        value = _points$i.value;
      if (base === 'window') {
        if (window.matchMedia("(min-width: ".concat(value, "px)")).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || 'max';
  }
  var breakpoints = {
    setBreakpoint: setBreakpoint,
    getBreakpoint: getBreakpoint
  };
  function prepareClasses(entries, prefix) {
    var resultClasses = [];
    entries.forEach(function (item) {
      if (_typeof(item) === 'object') {
        Object.keys(item).forEach(function (classNames) {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === 'string') {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    var _el$classList2;
    var swiper = this;
    var classNames = swiper.classNames,
      params = swiper.params,
      rtl = swiper.rtl,
      el = swiper.el,
      device = swiper.device;
    // prettier-ignore
    var suffixes = prepareClasses(['initialized', params.direction, {
      'free-mode': swiper.params.freeMode && params.freeMode.enabled
    }, {
      'autoheight': params.autoHeight
    }, {
      'rtl': rtl
    }, {
      'grid': params.grid && params.grid.rows > 1
    }, {
      'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
    }, {
      'android': device.android
    }, {
      'ios': device.ios
    }, {
      'css-mode': params.cssMode
    }, {
      'centered': params.cssMode && params.centeredSlides
    }, {
      'watch-progress': params.watchSlidesProgress
    }], params.containerModifierClass);
    classNames.push.apply(classNames, _toConsumableArray(suffixes));
    (_el$classList2 = el.classList).add.apply(_el$classList2, _toConsumableArray(classNames));
    swiper.emitContainerClasses();
  }
  function removeClasses() {
    var _el$classList3;
    var swiper = this;
    var el = swiper.el,
      classNames = swiper.classNames;
    (_el$classList3 = el.classList).remove.apply(_el$classList3, _toConsumableArray(classNames));
    swiper.emitContainerClasses();
  }
  var classes = {
    addClasses: addClasses,
    removeClasses: removeClasses
  };
  function checkOverflow() {
    var swiper = this;
    var wasLocked = swiper.isLocked,
      params = swiper.params;
    var slidesOffsetBefore = params.slidesOffsetBefore;
    if (slidesOffsetBefore) {
      var lastSlideIndex = swiper.slides.length - 1;
      var lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
    }
  }
  var checkOverflow$1 = {
    checkOverflow: checkOverflow
  };
  var defaults = {
    init: true,
    direction: 'horizontal',
    oneWayMovement: false,
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    enabled: true,
    focusableElements: 'input, select, option, textarea, button, video, label',
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide',
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: 'window',
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopedSlides: null,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: 'swiper-',
    // NEW
    slideClass: 'swiper-slide',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
  };
  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
      if (obj === void 0) {
        obj = {};
      }
      var moduleParamName = Object.keys(obj)[0];
      var moduleParams = obj[moduleParamName];
      if (_typeof(moduleParams) !== 'object' || moduleParams === null) {
        extend(allModulesParams, obj);
        return;
      }
      if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
        params[moduleParamName] = {
          auto: true
        };
      }
      if (!(moduleParamName in params && 'enabled' in moduleParams)) {
        extend(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }
      if (_typeof(params[moduleParamName]) === 'object' && !('enabled' in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName]) params[moduleParamName] = {
        enabled: false
      };
      extend(allModulesParams, obj);
    };
  }

  /* eslint no-param-reassign: "off" */
  var prototypes = {
    eventsEmitter: eventsEmitter,
    update: update,
    translate: translate,
    transition: transition,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    events: events$1,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes
  };
  var extendedDefaults = {};
  var Swiper = /*#__PURE__*/function () {
    function Swiper() {
      _classCallCheck(this, Swiper);
      var el;
      var params;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
        params = args[0];
      } else {
        el = args[0];
        params = args[1];
      }
      if (!params) params = {};
      params = extend({}, params);
      if (el && !params.el) params.el = el;
      var document = getDocument();
      if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
        var swipers = [];
        document.querySelectorAll(params.el).forEach(function (containerEl) {
          var newParams = extend({}, params, {
            el: containerEl
          });
          swipers.push(new Swiper(newParams));
        });
        // eslint-disable-next-line no-constructor-return
        return swipers;
      }

      // Swiper Instance
      var swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = _toConsumableArray(swiper.__modules__);
      if (params.modules && Array.isArray(params.modules)) {
        var _swiper$modules;
        (_swiper$modules = swiper.modules).push.apply(_swiper$modules, _toConsumableArray(params.modules));
      }
      var allModulesParams = {};
      swiper.modules.forEach(function (mod) {
        mod({
          params: params,
          swiper: swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper)
        });
      });

      // Extend defaults with modules params
      var swiperParams = extend({}, defaults, allModulesParams);

      // Extend defaults with passed params
      swiper.params = extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend({}, swiper.params);
      swiper.passedParams = extend({}, params);

      // add event listeners
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach(function (eventName) {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }

      // Extend Swiper
      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el: el,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === 'horizontal';
        },
        isVertical: function isVertical() {
          return swiper.params.direction === 'vertical';
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        cssOverflowAdjustment: function cssOverflowAdjustment() {
          // Returns 0 unless `translate` is > 2**23
          // Should be subtracted from css values to prevent overflow
          return Math.trunc(this.translate / Math.pow(2, 23)) * Math.pow(2, 23);
        },
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          focusableElements: swiper.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          startMoving: undefined,
          evCache: []
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.emit('_swiper');

      // Init
      if (swiper.params.init) {
        swiper.init();
      }

      // Return app instance
      // eslint-disable-next-line no-constructor-return
      return swiper;
    }
    _createClass(Swiper, [{
      key: "getSlideIndex",
      value: function getSlideIndex(slideEl) {
        var slidesEl = this.slidesEl,
          params = this.params;
        var slides = elementChildren(slidesEl, ".".concat(params.slideClass, ", swiper-slide"));
        var firstSlideIndex = elementIndex(slides[0]);
        return elementIndex(slideEl) - firstSlideIndex;
      }
    }, {
      key: "getSlideIndexByData",
      value: function getSlideIndexByData(index) {
        return this.getSlideIndex(this.slides.filter(function (slideEl) {
          return slideEl.getAttribute('data-swiper-slide-index') * 1 === index;
        })[0]);
      }
    }, {
      key: "recalcSlides",
      value: function recalcSlides() {
        var swiper = this;
        var slidesEl = swiper.slidesEl,
          params = swiper.params;
        swiper.slides = elementChildren(slidesEl, ".".concat(params.slideClass, ", swiper-slide"));
      }
    }, {
      key: "enable",
      value: function enable() {
        var swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) {
          swiper.setGrabCursor();
        }
        swiper.emit('enable');
      }
    }, {
      key: "disable",
      value: function disable() {
        var swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) {
          swiper.unsetGrabCursor();
        }
        swiper.emit('disable');
      }
    }, {
      key: "setProgress",
      value: function setProgress(progress, speed) {
        var swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        var min = swiper.minTranslate();
        var max = swiper.maxTranslate();
        var current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
    }, {
      key: "emitContainerClasses",
      value: function emitContainerClasses() {
        var swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        var cls = swiper.el.className.split(' ').filter(function (className) {
          return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit('_containerClasses', cls.join(' '));
      }
    }, {
      key: "getSlideClasses",
      value: function getSlideClasses(slideEl) {
        var swiper = this;
        if (swiper.destroyed) return '';
        return slideEl.className.split(' ').filter(function (className) {
          return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(' ');
      }
    }, {
      key: "emitSlidesClasses",
      value: function emitSlidesClasses() {
        var swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        var updates = [];
        swiper.slides.forEach(function (slideEl) {
          var classNames = swiper.getSlideClasses(slideEl);
          updates.push({
            slideEl: slideEl,
            classNames: classNames
          });
          swiper.emit('_slideClass', slideEl, classNames);
        });
        swiper.emit('_slideClasses', updates);
      }
    }, {
      key: "slidesPerViewDynamic",
      value: function slidesPerViewDynamic(view, exact) {
        if (view === void 0) {
          view = 'current';
        }
        if (exact === void 0) {
          exact = false;
        }
        var swiper = this;
        var params = swiper.params,
          slides = swiper.slides,
          slidesGrid = swiper.slidesGrid,
          slidesSizesGrid = swiper.slidesSizesGrid,
          swiperSize = swiper.size,
          activeIndex = swiper.activeIndex;
        var spv = 1;
        if (params.centeredSlides) {
          var slideSize = slides[activeIndex].swiperSlideSize;
          var breakLoop;
          for (var i = activeIndex + 1; i < slides.length; i += 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }
          for (var _i6 = activeIndex - 1; _i6 >= 0; _i6 -= 1) {
            if (slides[_i6] && !breakLoop) {
              slideSize += slides[_i6].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }
        } else {
          // eslint-disable-next-line
          if (view === 'current') {
            for (var _i7 = activeIndex + 1; _i7 < slides.length; _i7 += 1) {
              var slideInView = exact ? slidesGrid[_i7] + slidesSizesGrid[_i7] - slidesGrid[activeIndex] < swiperSize : slidesGrid[_i7] - slidesGrid[activeIndex] < swiperSize;
              if (slideInView) {
                spv += 1;
              }
            }
          } else {
            // previous
            for (var _i8 = activeIndex - 1; _i8 >= 0; _i8 -= 1) {
              var _slideInView = slidesGrid[activeIndex] - slidesGrid[_i8] < swiperSize;
              if (_slideInView) {
                spv += 1;
              }
            }
          }
        }
        return spv;
      }
    }, {
      key: "update",
      value: function update() {
        var swiper = this;
        if (!swiper || swiper.destroyed) return;
        var snapGrid = swiper.snapGrid,
          params = swiper.params;
        // Breakpoints
        if (params.breakpoints) {
          swiper.setBreakpoint();
        }
        _toConsumableArray(swiper.el.querySelectorAll('[loading="lazy"]')).forEach(function (imageEl) {
          if (imageEl.complete) {
            processLazyPreloader(swiper, imageEl);
          }
        });
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate() {
          var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
          var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
          swiper.setTranslate(newTranslate);
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }
        var translated;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
          setTranslate();
          if (swiper.params.autoHeight) {
            swiper.updateAutoHeight();
          }
        } else {
          if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
            var slides = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
            translated = swiper.slideTo(slides.length - 1, 0, false, true);
          } else {
            translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
          }
          if (!translated) {
            setTranslate();
          }
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
          swiper.checkOverflow();
        }
        swiper.emit('update');
      }
    }, {
      key: "changeDirection",
      value: function changeDirection(newDirection, needUpdate) {
        if (needUpdate === void 0) {
          needUpdate = true;
        }
        var swiper = this;
        var currentDirection = swiper.params.direction;
        if (!newDirection) {
          // eslint-disable-next-line
          newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        }
        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
          return swiper;
        }
        swiper.el.classList.remove("".concat(swiper.params.containerModifierClass).concat(currentDirection));
        swiper.el.classList.add("".concat(swiper.params.containerModifierClass).concat(newDirection));
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.forEach(function (slideEl) {
          if (newDirection === 'vertical') {
            slideEl.style.width = '';
          } else {
            slideEl.style.height = '';
          }
        });
        swiper.emit('changeDirection');
        if (needUpdate) swiper.update();
        return swiper;
      }
    }, {
      key: "changeLanguageDirection",
      value: function changeLanguageDirection(direction) {
        var swiper = this;
        if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
        swiper.rtl = direction === 'rtl';
        swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
        if (swiper.rtl) {
          swiper.el.classList.add("".concat(swiper.params.containerModifierClass, "rtl"));
          swiper.el.dir = 'rtl';
        } else {
          swiper.el.classList.remove("".concat(swiper.params.containerModifierClass, "rtl"));
          swiper.el.dir = 'ltr';
        }
        swiper.update();
      }
    }, {
      key: "mount",
      value: function mount(element) {
        var swiper = this;
        if (swiper.mounted) return true;

        // Find el
        var el = element || swiper.params.el;
        if (typeof el === 'string') {
          el = document.querySelector(el);
        }
        if (!el) {
          return false;
        }
        el.swiper = swiper;
        if (el.shadowEl) {
          swiper.isElement = true;
        }
        var getWrapperSelector = function getWrapperSelector() {
          return ".".concat((swiper.params.wrapperClass || '').trim().split(' ').join('.'));
        };
        var getWrapper = function getWrapper() {
          if (el && el.shadowRoot && el.shadowRoot.querySelector) {
            var res = el.shadowRoot.querySelector(getWrapperSelector());
            // Children needs to return slot items
            return res;
          }
          return elementChildren(el, getWrapperSelector())[0];
        };
        // Find Wrapper
        var wrapperEl = getWrapper();
        if (!wrapperEl && swiper.params.createElements) {
          wrapperEl = createElement('div', swiper.params.wrapperClass);
          el.append(wrapperEl);
          elementChildren(el, ".".concat(swiper.params.slideClass)).forEach(function (slideEl) {
            wrapperEl.append(slideEl);
          });
        }
        Object.assign(swiper, {
          el: el,
          wrapperEl: wrapperEl,
          slidesEl: swiper.isElement ? el : wrapperEl,
          mounted: true,
          // RTL
          rtl: el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl',
          rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl'),
          wrongRTL: elementStyle(wrapperEl, 'display') === '-webkit-box'
        });
        return true;
      }
    }, {
      key: "init",
      value: function init(el) {
        var swiper = this;
        if (swiper.initialized) return swiper;
        var mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit('beforeInit');

        // Set breakpoint
        if (swiper.params.breakpoints) {
          swiper.setBreakpoint();
        }

        // Add Classes
        swiper.addClasses();

        // Update size
        swiper.updateSize();

        // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) {
          swiper.checkOverflow();
        }

        // Set Grab Cursor
        if (swiper.params.grabCursor && swiper.enabled) {
          swiper.setGrabCursor();
        }

        // Slide To Initial Slide
        if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
          swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
        } else {
          swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
        }

        // Create loop
        if (swiper.params.loop) {
          swiper.loopCreate();
        }

        // Attach events
        swiper.attachEvents();
        _toConsumableArray(swiper.el.querySelectorAll('[loading="lazy"]')).forEach(function (imageEl) {
          if (imageEl.complete) {
            processLazyPreloader(swiper, imageEl);
          } else {
            imageEl.addEventListener('load', function (e) {
              processLazyPreloader(swiper, e.target);
            });
          }
        });
        preload(swiper);

        // Init Flag
        swiper.initialized = true;
        preload(swiper);

        // Emit
        swiper.emit('init');
        swiper.emit('afterInit');
        return swiper;
      }
    }, {
      key: "destroy",
      value: function destroy(deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) {
          deleteInstance = true;
        }
        if (cleanStyles === void 0) {
          cleanStyles = true;
        }
        var swiper = this;
        var params = swiper.params,
          el = swiper.el,
          wrapperEl = swiper.wrapperEl,
          slides = swiper.slides;
        if (typeof swiper.params === 'undefined' || swiper.destroyed) {
          return null;
        }
        swiper.emit('beforeDestroy');

        // Init Flag
        swiper.initialized = false;

        // Detach events
        swiper.detachEvents();

        // Destroy loop
        if (params.loop) {
          swiper.loopDestroy();
        }

        // Cleanup styles
        if (cleanStyles) {
          swiper.removeClasses();
          el.removeAttribute('style');
          wrapperEl.removeAttribute('style');
          if (slides && slides.length) {
            slides.forEach(function (slideEl) {
              slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
              slideEl.removeAttribute('style');
              slideEl.removeAttribute('data-swiper-slide-index');
            });
          }
        }
        swiper.emit('destroy');

        // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach(function (eventName) {
          swiper.off(eventName);
        });
        if (deleteInstance !== false) {
          swiper.el.swiper = null;
          deleteProps(swiper);
        }
        swiper.destroyed = true;
        return null;
      }
    }], [{
      key: "extendDefaults",
      value: function extendDefaults(newDefaults) {
        extend(extendedDefaults, newDefaults);
      }
    }, {
      key: "extendedDefaults",
      get: function get() {
        return extendedDefaults;
      }
    }, {
      key: "defaults",
      get: function get() {
        return defaults;
      }
    }, {
      key: "installModule",
      value: function installModule(mod) {
        if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
        var modules = Swiper.prototype.__modules__;
        if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
          modules.push(mod);
        }
      }
    }, {
      key: "use",
      value: function use(module) {
        if (Array.isArray(module)) {
          module.forEach(function (m) {
            return Swiper.installModule(m);
          });
          return Swiper;
        }
        Swiper.installModule(module);
        return Swiper;
      }
    }]);
    return Swiper;
  }();
  Object.keys(prototypes).forEach(function (prototypeGroup) {
    Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer]);
  function Virtual(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
    extendParams({
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: true,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    });
    var cssModeTimeout;
    var document = getDocument();
    swiper.virtual = {
      cache: {},
      from: undefined,
      to: undefined,
      slides: [],
      offset: 0,
      slidesGrid: []
    };
    var tempDOM = document.createElement('div');
    function renderSlide(slide, index) {
      var params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      // eslint-disable-next-line
      var slideEl;
      if (params.renderSlide) {
        slideEl = params.renderSlide.call(swiper, slide, index);
        if (typeof slideEl === 'string') {
          tempDOM.innerHTML = slideEl;
          slideEl = tempDOM.children[0];
        }
      } else if (swiper.isElement) {
        slideEl = createElement('swiper-slide');
      } else {
        slideEl = createElement('div', swiper.params.slideClass);
      }
      slideEl.setAttribute('data-swiper-slide-index', index);
      if (!params.renderSlide) {
        slideEl.innerHTML = slide;
      }
      if (params.cache) swiper.virtual.cache[index] = slideEl;
      return slideEl;
    }
    function update(force) {
      var _swiper$params = swiper.params,
        slidesPerView = _swiper$params.slidesPerView,
        slidesPerGroup = _swiper$params.slidesPerGroup,
        centeredSlides = _swiper$params.centeredSlides,
        isLoop = _swiper$params.loop;
      var _swiper$params$virtua = swiper.params.virtual,
        addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
        addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
      var _swiper$virtual = swiper.virtual,
        previousFrom = _swiper$virtual.from,
        previousTo = _swiper$virtual.to,
        slides = _swiper$virtual.slides,
        previousSlidesGrid = _swiper$virtual.slidesGrid,
        previousOffset = _swiper$virtual.offset;
      if (!swiper.params.cssMode) {
        swiper.updateActiveIndex();
      }
      var activeIndex = swiper.activeIndex || 0;
      var offsetProp;
      if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
      var slidesAfter;
      var slidesBefore;
      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
        slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
      }
      var from = activeIndex - slidesBefore;
      var to = activeIndex + slidesAfter;
      if (!isLoop) {
        from = Math.max(from, 0);
        to = Math.min(to, slides.length - 1);
      }
      var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
      if (isLoop && activeIndex >= slidesBefore) {
        from -= slidesBefore;
        if (!centeredSlides) offset += swiper.slidesGrid[0];
      } else if (isLoop && activeIndex < slidesBefore) {
        from = -slidesBefore;
        if (centeredSlides) offset += swiper.slidesGrid[0];
      }
      Object.assign(swiper.virtual, {
        from: from,
        to: to,
        offset: offset,
        slidesGrid: swiper.slidesGrid,
        slidesBefore: slidesBefore,
        slidesAfter: slidesAfter
      });
      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        emit('virtualUpdate');
      }
      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.forEach(function (slideEl) {
            slideEl.style[offsetProp] = "".concat(offset - Math.abs(swiper.cssOverflowAdjustment()), "px");
          });
        }
        swiper.updateProgress();
        emit('virtualUpdate');
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset: offset,
          from: from,
          to: to,
          slides: function getSlides() {
            var slidesToRender = [];
            for (var i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          }()
        });
        if (swiper.params.virtual.renderExternalUpdate) {
          onRendered();
        } else {
          emit('virtualUpdate');
        }
        return;
      }
      var prependIndexes = [];
      var appendIndexes = [];
      var getSlideIndex = function getSlideIndex(index) {
        var slideIndex = index;
        if (index < 0) {
          slideIndex = slides.length + index;
        } else if (slideIndex >= slides.length) {
          // eslint-disable-next-line
          slideIndex = slideIndex - slides.length;
        }
        return slideIndex;
      };
      if (force) {
        swiper.slidesEl.querySelectorAll(".".concat(swiper.params.slideClass, ", swiper-slide")).forEach(function (slideEl) {
          slideEl.remove();
        });
      } else {
        for (var i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            var slideIndex = getSlideIndex(i);
            swiper.slidesEl.querySelectorAll(".".concat(swiper.params.slideClass, "[data-swiper-slide-index=\"").concat(slideIndex, "\"], swiper-slide[data-swiper-slide-index=\"").concat(slideIndex, "\"]")).forEach(function (slideEl) {
              slideEl.remove();
            });
          }
        }
      }
      var loopFrom = isLoop ? -slides.length : 0;
      var loopTo = isLoop ? slides.length * 2 : slides.length;
      for (var _i9 = loopFrom; _i9 < loopTo; _i9 += 1) {
        if (_i9 >= from && _i9 <= to) {
          var _slideIndex = getSlideIndex(_i9);
          if (typeof previousTo === 'undefined' || force) {
            appendIndexes.push(_slideIndex);
          } else {
            if (_i9 > previousTo) appendIndexes.push(_slideIndex);
            if (_i9 < previousFrom) prependIndexes.push(_slideIndex);
          }
        }
      }
      appendIndexes.forEach(function (index) {
        swiper.slidesEl.append(renderSlide(slides[index], index));
      });
      if (isLoop) {
        for (var _i10 = prependIndexes.length - 1; _i10 >= 0; _i10 -= 1) {
          var index = prependIndexes[_i10];
          swiper.slidesEl.prepend(renderSlide(slides[index], index));
        }
      } else {
        prependIndexes.sort(function (a, b) {
          return b - a;
        });
        prependIndexes.forEach(function (index) {
          swiper.slidesEl.prepend(renderSlide(slides[index], index));
        });
      }
      elementChildren(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(function (slideEl) {
        slideEl.style[offsetProp] = "".concat(offset - Math.abs(swiper.cssOverflowAdjustment()), "px");
      });
      onRendered();
    }
    function appendSlide(slides) {
      if (_typeof(slides) === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.push(slides[i]);
        }
      } else {
        swiper.virtual.slides.push(slides);
      }
      update(true);
    }
    function prependSlide(slides) {
      var activeIndex = swiper.activeIndex;
      var newActiveIndex = activeIndex + 1;
      var numberOfNewSlides = 1;
      if (Array.isArray(slides)) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }
      if (swiper.params.virtual.cache) {
        var cache = swiper.virtual.cache;
        var newCache = {};
        Object.keys(cache).forEach(function (cachedIndex) {
          var cachedEl = cache[cachedIndex];
          var cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
          if (cachedElIndex) {
            cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
          }
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
        });
        swiper.virtual.cache = newCache;
      }
      update(true);
      swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide(slidesIndexes) {
      if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
      var activeIndex = swiper.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          swiper.virtual.slides.splice(slidesIndexes[i], 1);
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
          }
          if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        swiper.virtual.slides.splice(slidesIndexes, 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
        }
        if (slidesIndexes < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
      update(true);
      swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides() {
      swiper.virtual.slides = [];
      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }
      update(true);
      swiper.slideTo(0, 0);
    }
    on('beforeInit', function () {
      if (!swiper.params.virtual.enabled) return;
      var domSlidesAssigned;
      if (typeof swiper.passedParams.virtual.slides === 'undefined') {
        var slides = _toConsumableArray(swiper.slidesEl.children).filter(function (el) {
          return el.matches(".".concat(swiper.params.slideClass, ", swiper-slide"));
        });
        if (slides && slides.length) {
          swiper.virtual.slides = _toConsumableArray(slides);
          domSlidesAssigned = true;
          slides.forEach(function (slideEl, slideIndex) {
            slideEl.setAttribute('data-swiper-slide-index', slideIndex);
            swiper.virtual.cache[slideIndex] = slideEl;
            slideEl.remove();
          });
        }
      }
      if (!domSlidesAssigned) {
        swiper.virtual.slides = swiper.params.virtual.slides;
      }
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "virtual"));
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
      if (!swiper.params.initialSlide) {
        update();
      }
    });
    on('setTranslate', function () {
      if (!swiper.params.virtual.enabled) return;
      if (swiper.params.cssMode && !swiper._immediateVirtual) {
        clearTimeout(cssModeTimeout);
        cssModeTimeout = setTimeout(function () {
          update();
        }, 100);
      } else {
        update();
      }
    });
    on('init update resize', function () {
      if (!swiper.params.virtual.enabled) return;
      if (swiper.params.cssMode) {
        setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', "".concat(swiper.virtualSize, "px"));
      }
    });
    Object.assign(swiper.virtual, {
      appendSlide: appendSlide,
      prependSlide: prependSlide,
      removeSlide: removeSlide,
      removeAllSlides: removeAllSlides,
      update: update
    });
  }

  /* eslint-disable consistent-return */
  function Keyboard(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
    var document = getDocument();
    var window = getWindow();
    swiper.keyboard = {
      enabled: false
    };
    extendParams({
      keyboard: {
        enabled: false,
        onlyInViewport: true,
        pageUpDown: true
      }
    });
    function handle(event) {
      if (!swiper.enabled) return;
      var rtl = swiper.rtlTranslate;
      var e = event;
      if (e.originalEvent) e = e.originalEvent; // jquery fix
      var kc = e.keyCode || e.charCode;
      var pageUpDown = swiper.params.keyboard.pageUpDown;
      var isPageUp = pageUpDown && kc === 33;
      var isPageDown = pageUpDown && kc === 34;
      var isArrowLeft = kc === 37;
      var isArrowRight = kc === 39;
      var isArrowUp = kc === 38;
      var isArrowDown = kc === 40;
      // Directions locks
      if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
        return false;
      }
      if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }
      if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
        return undefined;
      }
      if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
        var inView = false;
        // Check that swiper should be inside of visible area of window
        if (elementParents(swiper.el, ".".concat(swiper.params.slideClass, ", swiper-slide")).length > 0 && elementParents(swiper.el, ".".concat(swiper.params.slideActiveClass)).length === 0) {
          return undefined;
        }
        var el = swiper.el;
        var swiperWidth = el.clientWidth;
        var swiperHeight = el.clientHeight;
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var swiperOffset = elementOffset(el);
        if (rtl) swiperOffset.left -= el.scrollLeft;
        var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
        for (var i = 0; i < swiperCoord.length; i += 1) {
          var point = swiperCoord[i];
          if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
            if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
            inView = true;
          }
        }
        if (!inView) return undefined;
      }
      if (swiper.isHorizontal()) {
        if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
          if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        }
        if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
        if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
      } else {
        if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
          if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        }
        if (isPageDown || isArrowDown) swiper.slideNext();
        if (isPageUp || isArrowUp) swiper.slidePrev();
      }
      emit('keyPress', kc);
      return undefined;
    }
    function enable() {
      if (swiper.keyboard.enabled) return;
      document.addEventListener('keydown', handle);
      swiper.keyboard.enabled = true;
    }
    function disable() {
      if (!swiper.keyboard.enabled) return;
      document.removeEventListener('keydown', handle);
      swiper.keyboard.enabled = false;
    }
    on('init', function () {
      if (swiper.params.keyboard.enabled) {
        enable();
      }
    });
    on('destroy', function () {
      if (swiper.keyboard.enabled) {
        disable();
      }
    });
    Object.assign(swiper.keyboard, {
      enable: enable,
      disable: disable
    });
  }

  /* eslint-disable consistent-return */
  function Mousewheel(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
    var window = getWindow();
    extendParams({
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarget: 'container',
        thresholdDelta: null,
        thresholdTime: null,
        noMousewheelClass: 'swiper-no-mousewheel'
      }
    });
    swiper.mousewheel = {
      enabled: false
    };
    var timeout;
    var lastScrollTime = now();
    var lastEventBeforeSnap;
    var recentWheelEvents = [];
    function normalize(e) {
      // Reasonable defaults
      var PIXEL_STEP = 10;
      var LINE_HEIGHT = 40;
      var PAGE_HEIGHT = 800;
      var sX = 0;
      var sY = 0; // spinX, spinY
      var pX = 0;
      var pY = 0; // pixelX, pixelY

      // Legacy
      if ('detail' in e) {
        sY = e.detail;
      }
      if ('wheelDelta' in e) {
        sY = -e.wheelDelta / 120;
      }
      if ('wheelDeltaY' in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ('wheelDeltaX' in e) {
        sX = -e.wheelDeltaX / 120;
      }

      // side scrolling on FF with DOMMouseScroll
      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }
      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;
      if ('deltaY' in e) {
        pY = e.deltaY;
      }
      if ('deltaX' in e) {
        pX = e.deltaX;
      }
      if (e.shiftKey && !pX) {
        // if user scrolls with shift he wants horizontal scroll
        pX = pY;
        pY = 0;
      }
      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) {
          // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }

      // Fall-back if spin cannot be determined
      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }
      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }
      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY
      };
    }
    function handleMouseEnter() {
      if (!swiper.enabled) return;
      swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
      if (!swiper.enabled) return;
      swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
      if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
        // Prevent if delta of wheel scroll delta is below configured threshold
        return false;
      }
      if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
        // Prevent if time between scrolls is below configured threshold
        return false;
      }

      // If the movement is NOT big enough and
      // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
      //   Don't go any further (avoid insignificant scroll movement).
      if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
        // Return false as a default
        return true;
      }
      // If user is scrolling towards the end:
      //   If the slider hasn't hit the latest slide or
      //   if the slider is a loop and
      //   if the slider isn't moving right now:
      //     Go to next slide and
      //     emit a scroll event.
      // Else (the user is scrolling towards the beginning) and
      // if the slider hasn't hit the first slide or
      // if the slider is a loop and
      // if the slider isn't moving right now:
      //   Go to prev slide and
      //   emit a scroll event.
      if (newEvent.direction < 0) {
        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
          swiper.slideNext();
          emit('scroll', newEvent.raw);
        }
      } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
        swiper.slidePrev();
        emit('scroll', newEvent.raw);
      }
      // If you got here is because an animation has been triggered so store the current time
      lastScrollTime = new window.Date().getTime();
      // Return false as a default
      return false;
    }
    function releaseScroll(newEvent) {
      var params = swiper.params.mousewheel;
      if (newEvent.direction < 0) {
        if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }
      } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
      return false;
    }
    function handle(event) {
      var e = event;
      var disableParentSwiper = true;
      if (!swiper.enabled) return;

      // Ignore event if the target or its parents have the swiper-no-mousewheel class
      if (event.target.closest(".".concat(swiper.params.mousewheel.noMousewheelClass))) return;
      var params = swiper.params.mousewheel;
      if (swiper.params.cssMode) {
        e.preventDefault();
      }
      var targetEl = swiper.el;
      if (swiper.params.mousewheel.eventsTarget !== 'container') {
        targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
      }
      var targetElContainsTarget = targetEl && targetEl.contains(e.target);
      if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
      if (e.originalEvent) e = e.originalEvent; // jquery fix
      var delta = 0;
      var rtlFactor = swiper.rtlTranslate ? -1 : 1;
      var data = normalize(e);
      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }
      if (delta === 0) return true;
      if (params.invert) delta = -delta;

      // Get the scroll positions
      var positions = swiper.getTranslate() + delta * params.sensitivity;
      if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
      if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();

      // When loop is true:
      //     the disableParentSwiper will be true.
      // When loop is false:
      //     if the scroll positions is not on edge,
      //     then the disableParentSwiper will be true.
      //     if the scroll on edge positions,
      //     then the disableParentSwiper will be false.
      disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
      if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
      if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
        // Register the new event in a variable which stores the relevant data
        var newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
          raw: event
        };

        // Keep the most recent events
        if (recentWheelEvents.length >= 2) {
          recentWheelEvents.shift(); // only store the last N events
        }
        var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
        recentWheelEvents.push(newEvent);

        // If there is at least one previous recorded event:
        //   If direction has changed or
        //   if the scroll is quicker than the previous one:
        //     Animate the slider.
        // Else (this is the first time the wheel is moved):
        //     Animate the slider.
        if (prevEvent) {
          if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
            animateSlider(newEvent);
          }
        } else {
          animateSlider(newEvent);
        }

        // If it's time to release the scroll:
        //   Return now so you don't hit the preventDefault.
        if (releaseScroll(newEvent)) {
          return true;
        }
      } else {
        // Freemode or scrollContainer:

        // If we recently snapped after a momentum scroll, then ignore wheel events
        // to give time for the deceleration to finish. Stop ignoring after 500 msecs
        // or if it's a new scroll (larger delta or inverse sign as last event before
        // an end-of-momentum snap).
        var _newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta)
        };
        var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;
        if (!ignoreWheelEvents) {
          lastEventBeforeSnap = undefined;
          var position = swiper.getTranslate() + delta * params.sensitivity;
          var wasBeginning = swiper.isBeginning;
          var wasEnd = swiper.isEnd;
          if (position >= swiper.minTranslate()) position = swiper.minTranslate();
          if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
          swiper.setTransition(0);
          swiper.setTranslate(position);
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
          if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
            swiper.updateSlidesClasses();
          }
          if (swiper.params.loop) {
            swiper.loopFix({
              direction: _newEvent.direction < 0 ? 'next' : 'prev',
              byMousewheel: true
            });
          }
          if (swiper.params.freeMode.sticky) {
            // When wheel scrolling starts with sticky (aka snap) enabled, then detect
            // the end of a momentum scroll by storing recent (N=15?) wheel events.
            // 1. do all N events have decreasing or same (absolute value) delta?
            // 2. did all N events arrive in the last M (M=500?) msecs?
            // 3. does the earliest event have an (absolute value) delta that's
            //    at least P (P=1?) larger than the most recent event's delta?
            // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
            // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
            // Snap immediately and ignore remaining wheel events in this scroll.
            // See comment above for "remaining wheel events in this scroll" determination.
            // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
            clearTimeout(timeout);
            timeout = undefined;
            if (recentWheelEvents.length >= 15) {
              recentWheelEvents.shift(); // only store the last N events
            }
            var _prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
            var firstEvent = recentWheelEvents[0];
            recentWheelEvents.push(_newEvent);
            if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
              // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
              recentWheelEvents.splice(0);
            } else if (recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
              // We're at the end of the deceleration of a momentum scroll, so there's no need
              // to wait for more events. Snap ASAP on the next tick.
              // Also, because there's some remaining momentum we'll bias the snap in the
              // direction of the ongoing scroll because it's better UX for the scroll to snap
              // in the same direction as the scroll instead of reversing to snap.  Therefore,
              // if it's already scrolled more than 20% in the current direction, keep going.
              var snapToThreshold = delta > 0 ? 0.8 : 0.2;
              lastEventBeforeSnap = _newEvent;
              recentWheelEvents.splice(0);
              timeout = nextTick(function () {
                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
              }, 0); // no delay; move on next tick
            }
            if (!timeout) {
              // if we get here, then we haven't detected the end of a momentum scroll, so
              // we'll consider a scroll "complete" when there haven't been any wheel events
              // for 500ms.
              timeout = nextTick(function () {
                var snapToThreshold = 0.5;
                lastEventBeforeSnap = _newEvent;
                recentWheelEvents.splice(0);
                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
              }, 500);
            }
          }

          // Emit event
          if (!ignoreWheelEvents) emit('scroll', e);

          // Stop autoplay
          if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
          // Return page scroll on edge positions
          if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
        }
      }
      if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      return false;
    }
    function events(method) {
      var targetEl = swiper.el;
      if (swiper.params.mousewheel.eventsTarget !== 'container') {
        targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
      }
      targetEl[method]('mouseenter', handleMouseEnter);
      targetEl[method]('mouseleave', handleMouseLeave);
      targetEl[method]('wheel', handle);
    }
    function enable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.removeEventListener('wheel', handle);
        return true;
      }
      if (swiper.mousewheel.enabled) return false;
      events('addEventListener');
      swiper.mousewheel.enabled = true;
      return true;
    }
    function disable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.addEventListener(event, handle);
        return true;
      }
      if (!swiper.mousewheel.enabled) return false;
      events('removeEventListener');
      swiper.mousewheel.enabled = false;
      return true;
    }
    on('init', function () {
      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
        disable();
      }
      if (swiper.params.mousewheel.enabled) enable();
    });
    on('destroy', function () {
      if (swiper.params.cssMode) {
        enable();
      }
      if (swiper.mousewheel.enabled) disable();
    });
    Object.assign(swiper.mousewheel, {
      enable: enable,
      disable: disable
    });
  }
  function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach(function (key) {
        if (!params[key] && params.auto === true) {
          var element = elementChildren(swiper.el, ".".concat(checkProps[key]))[0];
          if (!element) {
            element = createElement('div', checkProps[key]);
            element.className = checkProps[key];
            swiper.el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }
  function Navigation(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
        navigationDisabledClass: 'swiper-navigation-disabled'
      }
    });
    swiper.navigation = {
      nextEl: null,
      prevEl: null
    };
    var makeElementsArray = function makeElementsArray(el) {
      if (!Array.isArray(el)) el = [el].filter(function (e) {
        return !!e;
      });
      return el;
    };
    function getEl(el) {
      var res;
      if (el && typeof el === 'string' && swiper.isElement) {
        res = swiper.el.shadowRoot.querySelector(el);
        if (res) return res;
      }
      if (el) {
        if (typeof el === 'string') res = _toConsumableArray(document.querySelectorAll(el));
        if (swiper.params.uniqueNavElements && typeof el === 'string' && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
          res = swiper.el.querySelector(el);
        }
      }
      if (el && !res) return el;
      // if (Array.isArray(res) && res.length === 1) res = res[0];
      return res;
    }
    function toggleEl(el, disabled) {
      var params = swiper.params.navigation;
      el = makeElementsArray(el);
      el.forEach(function (subEl) {
        if (subEl) {
          var _subEl$classList;
          (_subEl$classList = subEl.classList)[disabled ? 'add' : 'remove'].apply(_subEl$classList, _toConsumableArray(params.disabledClass.split(' ')));
          if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
          if (swiper.params.watchOverflow && swiper.enabled) {
            subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
          }
        }
      });
    }
    function update() {
      // Update Navigation Buttons
      var _swiper$navigation = swiper.navigation,
        nextEl = _swiper$navigation.nextEl,
        prevEl = _swiper$navigation.prevEl;
      if (swiper.params.loop) {
        toggleEl(prevEl, false);
        toggleEl(nextEl, false);
        return;
      }
      toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
      toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slidePrev();
      emit('navigationPrev');
    }
    function onNextClick(e) {
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slideNext();
      emit('navigationNext');
    }
    function init() {
      var params = swiper.params.navigation;
      swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev'
      });
      if (!(params.nextEl || params.prevEl)) return;
      var nextEl = getEl(params.nextEl);
      var prevEl = getEl(params.prevEl);
      Object.assign(swiper.navigation, {
        nextEl: nextEl,
        prevEl: prevEl
      });
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      var initButton = function initButton(el, dir) {
        if (el) {
          el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
        }
        if (!swiper.enabled && el) {
          var _el$classList4;
          (_el$classList4 = el.classList).add.apply(_el$classList4, _toConsumableArray(params.lockClass.split(' ')));
        }
      };
      nextEl.forEach(function (el) {
        return initButton(el, 'next');
      });
      prevEl.forEach(function (el) {
        return initButton(el, 'prev');
      });
    }
    function destroy() {
      var _swiper$navigation2 = swiper.navigation,
        nextEl = _swiper$navigation2.nextEl,
        prevEl = _swiper$navigation2.prevEl;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      var destroyButton = function destroyButton(el, dir) {
        var _el$classList5;
        el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
        (_el$classList5 = el.classList).remove.apply(_el$classList5, _toConsumableArray(swiper.params.navigation.disabledClass.split(' ')));
      };
      nextEl.forEach(function (el) {
        return destroyButton(el, 'next');
      });
      prevEl.forEach(function (el) {
        return destroyButton(el, 'prev');
      });
    }
    on('init', function () {
      if (swiper.params.navigation.enabled === false) {
        // eslint-disable-next-line
        disable();
      } else {
        init();
        update();
      }
    });
    on('toEdge fromEdge lock unlock', function () {
      update();
    });
    on('destroy', function () {
      destroy();
    });
    on('enable disable', function () {
      var _swiper$navigation3 = swiper.navigation,
        nextEl = _swiper$navigation3.nextEl,
        prevEl = _swiper$navigation3.prevEl;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      [].concat(_toConsumableArray(nextEl), _toConsumableArray(prevEl)).filter(function (el) {
        return !!el;
      }).forEach(function (el) {
        return el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.navigation.lockClass);
      });
    });
    on('click', function (_s, e) {
      var _swiper$navigation4 = swiper.navigation,
        nextEl = _swiper$navigation4.nextEl,
        prevEl = _swiper$navigation4.prevEl;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      var targetEl = e.target;
      if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
        var isHidden;
        if (nextEl.length) {
          isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        } else if (prevEl.length) {
          isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          emit('navigationShow');
        } else {
          emit('navigationHide');
        }
        [].concat(_toConsumableArray(nextEl), _toConsumableArray(prevEl)).filter(function (el) {
          return !!el;
        }).forEach(function (el) {
          return el.classList.toggle(swiper.params.navigation.hiddenClass);
        });
      }
    });
    var enable = function enable() {
      var _swiper$el$classList;
      (_swiper$el$classList = swiper.el.classList).remove.apply(_swiper$el$classList, _toConsumableArray(swiper.params.navigation.navigationDisabledClass.split(' ')));
      init();
      update();
    };
    var disable = function disable() {
      var _swiper$el$classList2;
      (_swiper$el$classList2 = swiper.el.classList).add.apply(_swiper$el$classList2, _toConsumableArray(swiper.params.navigation.navigationDisabledClass.split(' ')));
      destroy();
    };
    Object.assign(swiper.navigation, {
      enable: enable,
      disable: disable,
      update: update,
      init: init,
      destroy: destroy
    });
  }
  function classesToSelector(classes) {
    if (classes === void 0) {
      classes = '';
    }
    return ".".concat(classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
    .replace(/ /g, '.'));
  }
  function Pagination(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
    var pfx = 'swiper-pagination';
    extendParams({
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets',
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(number) {
          return number;
        },
        formatFractionTotal: function formatFractionTotal(number) {
          return number;
        },
        bulletClass: "".concat(pfx, "-bullet"),
        bulletActiveClass: "".concat(pfx, "-bullet-active"),
        modifierClass: "".concat(pfx, "-"),
        currentClass: "".concat(pfx, "-current"),
        totalClass: "".concat(pfx, "-total"),
        hiddenClass: "".concat(pfx, "-hidden"),
        progressbarFillClass: "".concat(pfx, "-progressbar-fill"),
        progressbarOppositeClass: "".concat(pfx, "-progressbar-opposite"),
        clickableClass: "".concat(pfx, "-clickable"),
        lockClass: "".concat(pfx, "-lock"),
        horizontalClass: "".concat(pfx, "-horizontal"),
        verticalClass: "".concat(pfx, "-vertical"),
        paginationDisabledClass: "".concat(pfx, "-disabled")
      }
    });
    swiper.pagination = {
      el: null,
      bullets: []
    };
    var bulletSize;
    var dynamicBulletIndex = 0;
    var makeElementsArray = function makeElementsArray(el) {
      if (!Array.isArray(el)) el = [el].filter(function (e) {
        return !!e;
      });
      return el;
    };
    function isPaginationDisabled() {
      return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
    }
    function setSideBullets(bulletEl, position) {
      var bulletActiveClass = swiper.params.pagination.bulletActiveClass;
      if (!bulletEl) return;
      bulletEl = bulletEl["".concat(position === 'prev' ? 'previous' : 'next', "ElementSibling")];
      if (bulletEl) {
        bulletEl.classList.add("".concat(bulletActiveClass, "-").concat(position));
        bulletEl = bulletEl["".concat(position === 'prev' ? 'previous' : 'next', "ElementSibling")];
        if (bulletEl) {
          bulletEl.classList.add("".concat(bulletActiveClass, "-").concat(position, "-").concat(position));
        }
      }
    }
    function onBulletClick(e) {
      var bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
      if (!bulletEl) {
        return;
      }
      e.preventDefault();
      var index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
      if (swiper.params.loop) {
        if (swiper.realIndex === index) return;
        var newSlideIndex = swiper.getSlideIndexByData(index);
        var currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex);
        if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) {
          swiper.loopFix({
            direction: newSlideIndex > currentSlideIndex ? 'next' : 'prev',
            activeSlideIndex: newSlideIndex,
            slideTo: false
          });
        }
        swiper.slideToLoop(index);
      } else {
        swiper.slideTo(index);
      }
    }
    function update() {
      // Render || Update Pagination bullets/items
      var rtl = swiper.rtl;
      var params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      var el = swiper.pagination.el;
      el = makeElementsArray(el);
      // Current/Total
      var current;
      var previousIndex;
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        previousIndex = swiper.previousRealIndex || 0;
        current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
      } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
        previousIndex = swiper.previousSnapIndex;
      } else {
        previousIndex = swiper.previousIndex || 0;
        current = swiper.activeIndex || 0;
      }
      // Types
      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        var bullets = swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;
        if (params.dynamicBullets) {
          bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
          el.forEach(function (subEl) {
            subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = "".concat(bulletSize * (params.dynamicMainBullets + 4), "px");
          });
          if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
            dynamicBulletIndex += current - (previousIndex || 0);
            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
              dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (dynamicBulletIndex < 0) {
              dynamicBulletIndex = 0;
            }
          }
          firstIndex = Math.max(current - dynamicBulletIndex, 0);
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.forEach(function (bulletEl) {
          var _bulletEl$classList;
          var classesToRemove = _toConsumableArray(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(function (suffix) {
            return "".concat(params.bulletActiveClass).concat(suffix);
          })).map(function (s) {
            return typeof s === 'string' && s.includes(' ') ? s.split(' ') : s;
          }).flat();
          (_bulletEl$classList = bulletEl.classList).remove.apply(_bulletEl$classList, _toConsumableArray(classesToRemove));
        });
        if (el.length > 1) {
          bullets.forEach(function (bullet) {
            var bulletIndex = elementIndex(bullet);
            if (bulletIndex === current) {
              var _bullet$classList;
              (_bullet$classList = bullet.classList).add.apply(_bullet$classList, _toConsumableArray(params.bulletActiveClass.split(' ')));
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                var _bullet$classList2;
                (_bullet$classList2 = bullet.classList).add.apply(_bullet$classList2, _toConsumableArray("".concat(params.bulletActiveClass, "-main").split(' ')));
              }
              if (bulletIndex === firstIndex) {
                setSideBullets(bullet, 'prev');
              }
              if (bulletIndex === lastIndex) {
                setSideBullets(bullet, 'next');
              }
            }
          });
        } else {
          var bullet = bullets[current];
          if (bullet) {
            var _bullet$classList3;
            (_bullet$classList3 = bullet.classList).add.apply(_bullet$classList3, _toConsumableArray(params.bulletActiveClass.split(' ')));
          }
          if (params.dynamicBullets) {
            var firstDisplayedBullet = bullets[firstIndex];
            var lastDisplayedBullet = bullets[lastIndex];
            for (var i = firstIndex; i <= lastIndex; i += 1) {
              if (bullets[i]) {
                var _bullets$i$classList;
                (_bullets$i$classList = bullets[i].classList).add.apply(_bullets$i$classList, _toConsumableArray("".concat(params.bulletActiveClass, "-main").split(' ')));
              }
            }
            setSideBullets(firstDisplayedBullet, 'prev');
            setSideBullets(lastDisplayedBullet, 'next');
          }
        }
        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          var bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
          var offsetProp = rtl ? 'right' : 'left';
          bullets.forEach(function (bullet) {
            bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = "".concat(bulletsOffset, "px");
          });
        }
      }
      el.forEach(function (subEl, subElIndex) {
        if (params.type === 'fraction') {
          subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach(function (fractionEl) {
            fractionEl.textContent = params.formatFractionCurrent(current + 1);
          });
          subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach(function (totalEl) {
            totalEl.textContent = params.formatFractionTotal(total);
          });
        }
        if (params.type === 'progressbar') {
          var progressbarDirection;
          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
          } else {
            progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
          }
          var scale = (current + 1) / total;
          var scaleX = 1;
          var scaleY = 1;
          if (progressbarDirection === 'horizontal') {
            scaleX = scale;
          } else {
            scaleY = scale;
          }
          subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach(function (progressEl) {
            progressEl.style.transform = "translate3d(0,0,0) scaleX(".concat(scaleX, ") scaleY(").concat(scaleY, ")");
            progressEl.style.transitionDuration = "".concat(swiper.params.speed, "ms");
          });
        }
        if (params.type === 'custom' && params.renderCustom) {
          subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
          if (subElIndex === 0) emit('paginationRender', subEl);
        } else {
          if (subElIndex === 0) emit('paginationRender', subEl);
          emit('paginationUpdate', subEl);
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
        }
      });
    }
    function render() {
      // Render Container
      var params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var el = swiper.pagination.el;
      el = makeElementsArray(el);
      var paginationHTML = '';
      if (params.type === 'bullets') {
        var numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
          numberOfBullets = slidesLength;
        }
        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += "<".concat(params.bulletElement, " class=\"").concat(params.bulletClass, "\"></").concat(params.bulletElement, ">");
          }
        }
      }
      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = "<span class=\"".concat(params.currentClass, "\"></span>") + ' / ' + "<span class=\"".concat(params.totalClass, "\"></span>");
        }
      }
      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = "<span class=\"".concat(params.progressbarFillClass, "\"></span>");
        }
      }
      swiper.pagination.bullets = [];
      el.forEach(function (subEl) {
        if (params.type !== 'custom') {
          subEl.innerHTML = paginationHTML || '';
        }
        if (params.type === 'bullets') {
          var _swiper$pagination$bu;
          (_swiper$pagination$bu = swiper.pagination.bullets).push.apply(_swiper$pagination$bu, _toConsumableArray(subEl.querySelectorAll(classesToSelector(params.bulletClass))));
        }
      });
      if (params.type !== 'custom') {
        emit('paginationRender', el[0]);
      }
    }
    function init() {
      swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
        el: 'swiper-pagination'
      });
      var params = swiper.params.pagination;
      if (!params.el) return;
      var el;
      if (typeof params.el === 'string' && swiper.isElement) {
        el = swiper.el.shadowRoot.querySelector(params.el);
      }
      if (!el && typeof params.el === 'string') {
        el = _toConsumableArray(document.querySelectorAll(params.el));
      }
      if (!el) {
        el = params.el;
      }
      if (!el || el.length === 0) return;
      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
        el = _toConsumableArray(swiper.el.querySelectorAll(params.el));
        // check if it belongs to another nested Swiper
        if (el.length > 1) {
          el = el.filter(function (subEl) {
            if (elementParents(subEl, '.swiper')[0] !== swiper.el) return false;
            return true;
          })[0];
        }
      }
      if (Array.isArray(el) && el.length === 1) el = el[0];
      Object.assign(swiper.pagination, {
        el: el
      });
      el = makeElementsArray(el);
      el.forEach(function (subEl) {
        if (params.type === 'bullets' && params.clickable) {
          subEl.classList.add(params.clickableClass);
        }
        subEl.classList.add(params.modifierClass + params.type);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.type === 'bullets' && params.dynamicBullets) {
          subEl.classList.add("".concat(params.modifierClass).concat(params.type, "-dynamic"));
          dynamicBulletIndex = 0;
          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }
        if (params.type === 'progressbar' && params.progressbarOpposite) {
          subEl.classList.add(params.progressbarOppositeClass);
        }
        if (params.clickable) {
          subEl.addEventListener('click', onBulletClick);
        }
        if (!swiper.enabled) {
          subEl.classList.add(params.lockClass);
        }
      });
    }
    function destroy() {
      var params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      var el = swiper.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach(function (subEl) {
          subEl.classList.remove(params.hiddenClass);
          subEl.classList.remove(params.modifierClass + params.type);
          subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
          if (params.clickable) {
            subEl.removeEventListener('click', onBulletClick);
          }
        });
      }
      if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(function (subEl) {
        var _subEl$classList2;
        return (_subEl$classList2 = subEl.classList).remove.apply(_subEl$classList2, _toConsumableArray(params.bulletActiveClass.split(' ')));
      });
    }
    on('changeDirection', function () {
      if (!swiper.pagination || !swiper.pagination.el) return;
      var params = swiper.params.pagination;
      var el = swiper.pagination.el;
      el = makeElementsArray(el);
      el.forEach(function (subEl) {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on('init', function () {
      if (swiper.params.pagination.enabled === false) {
        // eslint-disable-next-line
        disable();
      } else {
        init();
        render();
        update();
      }
    });
    on('activeIndexChange', function () {
      if (typeof swiper.snapIndex === 'undefined') {
        update();
      }
    });
    on('snapIndexChange', function () {
      update();
    });
    on('snapGridLengthChange', function () {
      render();
      update();
    });
    on('destroy', function () {
      destroy();
    });
    on('enable disable', function () {
      var el = swiper.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach(function (subEl) {
          return subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass);
        });
      }
    });
    on('lock unlock', function () {
      update();
    });
    on('click', function (_s, e) {
      var targetEl = e.target;
      var el = swiper.pagination.el;
      if (!Array.isArray(el)) el = [el].filter(function (element) {
        return !!element;
      });
      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
        var isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          emit('paginationShow');
        } else {
          emit('paginationHide');
        }
        el.forEach(function (subEl) {
          return subEl.classList.toggle(swiper.params.pagination.hiddenClass);
        });
      }
    });
    var enable = function enable() {
      swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
      var el = swiper.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach(function (subEl) {
          return subEl.classList.remove(swiper.params.pagination.paginationDisabledClass);
        });
      }
      init();
      render();
      update();
    };
    var disable = function disable() {
      swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
      var el = swiper.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach(function (subEl) {
          return subEl.classList.add(swiper.params.pagination.paginationDisabledClass);
        });
      }
      destroy();
    };
    Object.assign(swiper.pagination, {
      enable: enable,
      disable: disable,
      render: render,
      update: update,
      init: init,
      destroy: destroy
    });
  }
  function Scrollbar(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
    var document = getDocument();
    var isTouched = false;
    var timeout = null;
    var dragTimeout = null;
    var dragStartPos;
    var dragSize;
    var trackSize;
    var divider;
    extendParams({
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: 'swiper-scrollbar-lock',
        dragClass: 'swiper-scrollbar-drag',
        scrollbarDisabledClass: 'swiper-scrollbar-disabled',
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical"
      }
    });
    swiper.scrollbar = {
      el: null,
      dragEl: null
    };
    function setTranslate() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate;
      var dragEl = scrollbar.dragEl,
        el = scrollbar.el;
      var params = swiper.params.scrollbar;
      var progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
      var newSize = dragSize;
      var newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        dragEl.style.transform = "translate3d(".concat(newPos, "px, 0, 0)");
        dragEl.style.width = "".concat(newSize, "px");
      } else {
        dragEl.style.transform = "translate3d(0px, ".concat(newPos, "px, 0)");
        dragEl.style.height = "".concat(newSize, "px");
      }
      if (params.hide) {
        clearTimeout(timeout);
        el.style.opacity = 1;
        timeout = setTimeout(function () {
          el.style.opacity = 0;
          el.style.transitionDuration = '400ms';
        }, 1000);
      }
    }
    function setTransition(duration) {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      swiper.scrollbar.dragEl.style.transitionDuration = "".concat(duration, "ms");
    }
    function updateSize() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      var scrollbar = swiper.scrollbar;
      var dragEl = scrollbar.dragEl,
        el = scrollbar.el;
      dragEl.style.width = '';
      dragEl.style.height = '';
      trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
      divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
      if (swiper.params.scrollbar.dragSize === 'auto') {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }
      if (swiper.isHorizontal()) {
        dragEl.style.width = "".concat(dragSize, "px");
      } else {
        dragEl.style.height = "".concat(dragSize, "px");
      }
      if (divider >= 1) {
        el.style.display = 'none';
      } else {
        el.style.display = '';
      }
      if (swiper.params.scrollbar.hide) {
        el.style.opacity = 0;
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
      }
    }
    function getPointerPosition(e) {
      return swiper.isHorizontal() ? e.clientX : e.clientY;
    }
    function setDragPosition(e) {
      var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate;
      var el = scrollbar.el;
      var positionRatio;
      positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }
      var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar,
        wrapperEl = swiper.wrapperEl;
      var el = scrollbar.el,
        dragEl = scrollbar.dragEl;
      isTouched = true;
      dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
      e.preventDefault();
      e.stopPropagation();
      wrapperEl.style.transitionDuration = '100ms';
      dragEl.style.transitionDuration = '100ms';
      setDragPosition(e);
      clearTimeout(dragTimeout);
      el.style.transitionDuration = '0ms';
      if (params.hide) {
        el.style.opacity = 1;
      }
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style['scroll-snap-type'] = 'none';
      }
      emit('scrollbarDragStart', e);
    }
    function onDragMove(e) {
      var scrollbar = swiper.scrollbar,
        wrapperEl = swiper.wrapperEl;
      var el = scrollbar.el,
        dragEl = scrollbar.dragEl;
      if (!isTouched) return;
      if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      setDragPosition(e);
      wrapperEl.style.transitionDuration = '0ms';
      el.style.transitionDuration = '0ms';
      dragEl.style.transitionDuration = '0ms';
      emit('scrollbarDragMove', e);
    }
    function onDragEnd(e) {
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar,
        wrapperEl = swiper.wrapperEl;
      var el = scrollbar.el;
      if (!isTouched) return;
      isTouched = false;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style['scroll-snap-type'] = '';
        wrapperEl.style.transitionDuration = '';
      }
      if (params.hide) {
        clearTimeout(dragTimeout);
        dragTimeout = nextTick(function () {
          el.style.opacity = 0;
          el.style.transitionDuration = '400ms';
        }, 1000);
      }
      emit('scrollbarDragEnd', e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    }
    function events(method) {
      var scrollbar = swiper.scrollbar,
        params = swiper.params;
      var el = scrollbar.el;
      if (!el) return;
      var target = el;
      var activeListener = params.passiveListeners ? {
        passive: false,
        capture: false
      } : false;
      var passiveListener = params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      if (!target) return;
      var eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
      target[eventMethod]('pointerdown', onDragStart, activeListener);
      document[eventMethod]('pointermove', onDragMove, activeListener);
      document[eventMethod]('pointerup', onDragEnd, passiveListener);
    }
    function enableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      events('on');
    }
    function disableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      events('off');
    }
    function init() {
      var scrollbar = swiper.scrollbar,
        swiperEl = swiper.el;
      swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
        el: 'swiper-scrollbar'
      });
      var params = swiper.params.scrollbar;
      if (!params.el) return;
      var el;
      if (typeof params.el === 'string' && swiper.isElement) {
        el = swiper.el.shadowRoot.querySelector(params.el);
      }
      if (!el && typeof params.el === 'string') {
        el = document.querySelectorAll(params.el);
      } else if (!el) {
        el = params.el;
      }
      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
        el = swiperEl.querySelector(params.el);
      }
      if (el.length > 0) el = el[0];
      el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      var dragEl;
      if (el) {
        dragEl = el.querySelector(".".concat(swiper.params.scrollbar.dragClass));
        if (!dragEl) {
          dragEl = createElement('div', swiper.params.scrollbar.dragClass);
          el.append(dragEl);
        }
      }
      Object.assign(scrollbar, {
        el: el,
        dragEl: dragEl
      });
      if (params.draggable) {
        enableDraggable();
      }
      if (el) {
        el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.scrollbar.lockClass);
      }
    }
    function destroy() {
      var params = swiper.params.scrollbar;
      var el = swiper.scrollbar.el;
      if (el) {
        el.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      }
      disableDraggable();
    }
    on('init', function () {
      if (swiper.params.scrollbar.enabled === false) {
        // eslint-disable-next-line
        disable();
      } else {
        init();
        updateSize();
        setTranslate();
      }
    });
    on('update resize observerUpdate lock unlock', function () {
      updateSize();
    });
    on('setTranslate', function () {
      setTranslate();
    });
    on('setTransition', function (_s, duration) {
      setTransition(duration);
    });
    on('enable disable', function () {
      var el = swiper.scrollbar.el;
      if (el) {
        el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.scrollbar.lockClass);
      }
    });
    on('destroy', function () {
      destroy();
    });
    var enable = function enable() {
      swiper.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
      if (swiper.scrollbar.el) {
        swiper.scrollbar.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
      }
      init();
      updateSize();
      setTranslate();
    };
    var disable = function disable() {
      swiper.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
      if (swiper.scrollbar.el) {
        swiper.scrollbar.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
      }
      destroy();
    };
    Object.assign(swiper.scrollbar, {
      enable: enable,
      disable: disable,
      updateSize: updateSize,
      setTranslate: setTranslate,
      init: init,
      destroy: destroy
    });
  }
  function Parallax(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
    extendParams({
      parallax: {
        enabled: false
      }
    });
    var setTransform = function setTransform(el, progress) {
      var rtl = swiper.rtl;
      var rtlFactor = rtl ? -1 : 1;
      var p = el.getAttribute('data-swiper-parallax') || '0';
      var x = el.getAttribute('data-swiper-parallax-x');
      var y = el.getAttribute('data-swiper-parallax-y');
      var scale = el.getAttribute('data-swiper-parallax-scale');
      var opacity = el.getAttribute('data-swiper-parallax-opacity');
      var rotate = el.getAttribute('data-swiper-parallax-rotate');
      if (x || y) {
        x = x || '0';
        y = y || '0';
      } else if (swiper.isHorizontal()) {
        x = p;
        y = '0';
      } else {
        y = p;
        x = '0';
      }
      if (x.indexOf('%') >= 0) {
        x = "".concat(parseInt(x, 10) * progress * rtlFactor, "%");
      } else {
        x = "".concat(x * progress * rtlFactor, "px");
      }
      if (y.indexOf('%') >= 0) {
        y = "".concat(parseInt(y, 10) * progress, "%");
      } else {
        y = "".concat(y * progress, "px");
      }
      if (typeof opacity !== 'undefined' && opacity !== null) {
        var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
        el.style.opacity = currentOpacity;
      }
      var transform = "translate3d(".concat(x, ", ").concat(y, ", 0px)");
      if (typeof scale !== 'undefined' && scale !== null) {
        var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
        transform += " scale(".concat(currentScale, ")");
      }
      if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
        var currentRotate = rotate * progress * -1;
        transform += " rotate(".concat(currentRotate, "deg)");
      }
      el.style.transform = transform;
    };
    var setTranslate = function setTranslate() {
      var el = swiper.el,
        slides = swiper.slides,
        progress = swiper.progress,
        snapGrid = swiper.snapGrid;
      elementChildren(el, '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').forEach(function (subEl) {
        setTransform(subEl, progress);
      });
      slides.forEach(function (slideEl, slideIndex) {
        var slideProgress = slideEl.progress;
        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
          slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        slideEl.querySelectorAll('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]').forEach(function (subEl) {
          setTransform(subEl, slideProgress);
        });
      });
    };
    var setTransition = function setTransition(duration) {
      if (duration === void 0) {
        duration = swiper.params.speed;
      }
      var el = swiper.el;
      el.querySelectorAll('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').forEach(function (parallaxEl) {
        var parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
        if (duration === 0) parallaxDuration = 0;
        parallaxEl.style.transitionDuration = "".concat(parallaxDuration, "ms");
      });
    };
    on('beforeInit', function () {
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    });
    on('init', function () {
      if (!swiper.params.parallax.enabled) return;
      setTranslate();
    });
    on('setTranslate', function () {
      if (!swiper.params.parallax.enabled) return;
      setTranslate();
    });
    on('setTransition', function (_swiper, duration) {
      if (!swiper.params.parallax.enabled) return;
      setTransition(duration);
    });
  }
  function Zoom(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
    var window = getWindow();
    extendParams({
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: 'swiper-zoom-container',
        zoomedSlideClass: 'swiper-slide-zoomed'
      }
    });
    swiper.zoom = {
      enabled: false
    };
    var currentScale = 1;
    var isScaling = false;
    var fakeGestureTouched;
    var fakeGestureMoved;
    var evCache = [];
    var gesture = {
      originX: 0,
      originY: 0,
      slideEl: undefined,
      slideWidth: undefined,
      slideHeight: undefined,
      imageEl: undefined,
      imageWrapEl: undefined,
      maxRatio: 3
    };
    var image = {
      isTouched: undefined,
      isMoved: undefined,
      currentX: undefined,
      currentY: undefined,
      minX: undefined,
      minY: undefined,
      maxX: undefined,
      maxY: undefined,
      width: undefined,
      height: undefined,
      startX: undefined,
      startY: undefined,
      touchesStart: {},
      touchesCurrent: {}
    };
    var velocity = {
      x: undefined,
      y: undefined,
      prevPositionX: undefined,
      prevPositionY: undefined,
      prevTime: undefined
    };
    var scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
      get: function get() {
        return scale;
      },
      set: function set(value) {
        if (scale !== value) {
          var imageEl = gesture.imageEl;
          var slideEl = gesture.slideEl;
          emit('zoomChange', value, imageEl, slideEl);
        }
        scale = value;
      }
    });
    function getDistanceBetweenTouches() {
      if (evCache.length < 2) return 1;
      var x1 = evCache[0].pageX;
      var y1 = evCache[0].pageY;
      var x2 = evCache[1].pageX;
      var y2 = evCache[1].pageY;
      var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      return distance;
    }
    function getScaleOrigin() {
      if (evCache.length < 2) return {
        x: null,
        y: null
      };
      var box = gesture.imageEl.getBoundingClientRect();
      return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y) / currentScale];
    }
    function getSlideSelector() {
      return swiper.isElement ? "swiper-slide" : ".".concat(swiper.params.slideClass);
    }
    function eventWithinSlide(e) {
      var slideSelector = getSlideSelector();
      if (e.target.matches(slideSelector)) return true;
      if (swiper.slides.filter(function (slideEl) {
        return slideEl.contains(e.target);
      }).length > 0) return true;
      return false;
    }
    function eventWithinZoomContainer(e) {
      var selector = ".".concat(swiper.params.zoom.containerClass);
      if (e.target.matches(selector)) return true;
      if (_toConsumableArray(swiper.el.querySelectorAll(selector)).filter(function (containerEl) {
        return containerEl.contains(e.target);
      }).length > 0) return true;
      return false;
    }

    // Events
    function onGestureStart(e) {
      if (e.pointerType === 'mouse') {
        evCache.splice(0, evCache.length);
      }
      if (!eventWithinSlide(e)) return;
      var params = swiper.params.zoom;
      fakeGestureTouched = false;
      fakeGestureMoved = false;
      evCache.push(e);
      if (evCache.length < 2) {
        return;
      }
      fakeGestureTouched = true;
      gesture.scaleStart = getDistanceBetweenTouches();
      if (!gesture.slideEl) {
        gesture.slideEl = e.target.closest(".".concat(swiper.params.slideClass, ", swiper-slide"));
        if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
        var imageEl = gesture.slideEl.querySelector(".".concat(params.containerClass));
        if (imageEl) {
          imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(gesture.imageEl, ".".concat(params.containerClass))[0];
        } else {
          gesture.imageWrapEl = undefined;
        }
        if (!gesture.imageWrapEl) {
          gesture.imageEl = undefined;
          return;
        }
        gesture.maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
      }
      if (gesture.imageEl) {
        var _getScaleOrigin = getScaleOrigin(),
          _getScaleOrigin2 = _slicedToArray(_getScaleOrigin, 2),
          originX = _getScaleOrigin2[0],
          originY = _getScaleOrigin2[1];
        gesture.originX = originX;
        gesture.originY = originY;
        gesture.imageEl.style.transitionDuration = '0ms';
      }
      isScaling = true;
    }
    function onGestureChange(e) {
      if (!eventWithinSlide(e)) return;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var pointerIndex = evCache.findIndex(function (cachedEv) {
        return cachedEv.pointerId === e.pointerId;
      });
      if (pointerIndex >= 0) evCache[pointerIndex] = e;
      if (evCache.length < 2) {
        return;
      }
      fakeGestureMoved = true;
      gesture.scaleMove = getDistanceBetweenTouches();
      if (!gesture.imageEl) {
        return;
      }
      zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
      }
      gesture.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(zoom.scale, ")");
    }
    function onGestureEnd(e) {
      if (!eventWithinSlide(e)) return;
      if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var pointerIndex = evCache.findIndex(function (cachedEv) {
        return cachedEv.pointerId === e.pointerId;
      });
      if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
      if (!fakeGestureTouched || !fakeGestureMoved) {
        return;
      }
      fakeGestureTouched = false;
      fakeGestureMoved = false;
      if (!gesture.imageEl) return;
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.imageEl.style.transitionDuration = "".concat(swiper.params.speed, "ms");
      gesture.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(zoom.scale, ")");
      currentScale = zoom.scale;
      isScaling = false;
      if (zoom.scale > 1 && gesture.slideEl) {
        gesture.slideEl.classList.add("".concat(params.zoomedSlideClass));
      } else if (zoom.scale <= 1 && gesture.slideEl) {
        gesture.slideEl.classList.remove("".concat(params.zoomedSlideClass));
      }
      if (zoom.scale === 1) {
        gesture.originX = 0;
        gesture.originY = 0;
        gesture.slideEl = undefined;
      }
    }
    function onTouchStart(e) {
      var device = swiper.device;
      if (!gesture.imageEl) return;
      if (image.isTouched) return;
      if (device.android && e.cancelable) e.preventDefault();
      image.isTouched = true;
      var event = evCache.length > 0 ? evCache[0] : e;
      image.touchesStart.x = event.pageX;
      image.touchesStart.y = event.pageY;
    }
    function onTouchMove(e) {
      if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
      var zoom = swiper.zoom;
      if (!gesture.imageEl) return;
      if (!image.isTouched || !gesture.slideEl) return;
      if (!image.isMoved) {
        image.width = gesture.imageEl.offsetWidth;
        image.height = gesture.imageEl.offsetHeight;
        image.startX = getTranslate(gesture.imageWrapEl, 'x') || 0;
        image.startY = getTranslate(gesture.imageWrapEl, 'y') || 0;
        gesture.slideWidth = gesture.slideEl.offsetWidth;
        gesture.slideHeight = gesture.slideEl.offsetHeight;
        gesture.imageWrapEl.style.transitionDuration = '0ms';
      }
      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
      image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
      var touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
      if (touchesDiff > 5) {
        swiper.allowClick = false;
      }
      if (!image.isMoved && !isScaling) {
        if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
          image.isTouched = false;
          return;
        }
        if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
          image.isTouched = false;
          return;
        }
      }
      if (e.cancelable) {
        e.preventDefault();
      }
      e.stopPropagation();
      image.isMoved = true;
      var scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
      var originX = gesture.originX,
        originY = gesture.originY;
      image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
      image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
      if (image.currentX < image.minX) {
        image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
      }
      if (image.currentX > image.maxX) {
        image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
      }
      if (image.currentY < image.minY) {
        image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
      }
      if (image.currentY > image.maxY) {
        image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
      }

      // Velocity
      if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
      if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
      if (!velocity.prevTime) velocity.prevTime = Date.now();
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();
      gesture.imageWrapEl.style.transform = "translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)");
    }
    function onTouchEnd() {
      var zoom = swiper.zoom;
      if (!gesture.imageEl) return;
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      var momentumDurationX = 300;
      var momentumDurationY = 300;
      var momentumDistanceX = velocity.x * momentumDurationX;
      var newPositionX = image.currentX + momentumDistanceX;
      var momentumDistanceY = velocity.y * momentumDurationY;
      var newPositionY = image.currentY + momentumDistanceY;

      // Fix duration
      if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
      if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
      image.currentX = newPositionX;
      image.currentY = newPositionY;
      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
      gesture.imageWrapEl.style.transitionDuration = "".concat(momentumDuration, "ms");
      gesture.imageWrapEl.style.transform = "translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)");
    }
    function onTransitionEnd() {
      var zoom = swiper.zoom;
      if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
        if (gesture.imageEl) {
          gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
        }
        if (gesture.imageWrapEl) {
          gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
        }
        gesture.slideEl.classList.remove("".concat(swiper.params.zoom.zoomedSlideClass));
        zoom.scale = 1;
        currentScale = 1;
        gesture.slideEl = undefined;
        gesture.imageEl = undefined;
        gesture.imageWrapEl = undefined;
        gesture.originX = 0;
        gesture.originY = 0;
      }
    }
    function zoomIn(e) {
      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      if (!gesture.slideEl) {
        if (e && e.target) {
          gesture.slideEl = e.target.closest(".".concat(swiper.params.slideClass, ", swiper-slide"));
        }
        if (!gesture.slideEl) {
          if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
            gesture.slideEl = elementChildren(swiper.slidesEl, ".".concat(swiper.params.slideActiveClass))[0];
          } else {
            gesture.slideEl = swiper.slides[swiper.activeIndex];
          }
        }
        var imageEl = gesture.slideEl.querySelector(".".concat(params.containerClass));
        if (imageEl) {
          imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(gesture.imageEl, ".".concat(params.containerClass))[0];
        } else {
          gesture.imageWrapEl = undefined;
        }
      }
      if (!gesture.imageEl || !gesture.imageWrapEl) return;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style.overflow = 'hidden';
        swiper.wrapperEl.style.touchAction = 'none';
      }
      gesture.slideEl.classList.add("".concat(params.zoomedSlideClass));
      var touchX;
      var touchY;
      var offsetX;
      var offsetY;
      var diffX;
      var diffY;
      var translateX;
      var translateY;
      var imageWidth;
      var imageHeight;
      var scaledWidth;
      var scaledHeight;
      var translateMinX;
      var translateMinY;
      var translateMaxX;
      var translateMaxY;
      var slideWidth;
      var slideHeight;
      if (typeof image.touchesStart.x === 'undefined' && e) {
        touchX = e.pageX;
        touchY = e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }
      var forceZoomRatio = typeof e === 'number' ? e : null;
      if (currentScale === 1 && forceZoomRatio) {
        touchX = undefined;
        touchY = undefined;
      }
      zoom.scale = forceZoomRatio || gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
      currentScale = forceZoomRatio || gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
      if (e && !(currentScale === 1 && forceZoomRatio)) {
        slideWidth = gesture.slideEl.offsetWidth;
        slideHeight = gesture.slideEl.offsetHeight;
        offsetX = elementOffset(gesture.slideEl).left + window.scrollX;
        offsetY = elementOffset(gesture.slideEl).top + window.scrollY;
        diffX = offsetX + slideWidth / 2 - touchX;
        diffY = offsetY + slideHeight / 2 - touchY;
        imageWidth = gesture.imageEl.offsetWidth;
        imageHeight = gesture.imageEl.offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;
        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;
        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }
        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      if (forceZoomRatio && zoom.scale === 1) {
        gesture.originX = 0;
        gesture.originY = 0;
      }
      gesture.imageWrapEl.style.transitionDuration = '300ms';
      gesture.imageWrapEl.style.transform = "translate3d(".concat(translateX, "px, ").concat(translateY, "px,0)");
      gesture.imageEl.style.transitionDuration = '300ms';
      gesture.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(zoom.scale, ")");
    }
    function zoomOut() {
      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = elementChildren(swiper.slidesEl, ".".concat(swiper.params.slideActiveClass))[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
        var imageEl = gesture.slideEl.querySelector(".".concat(params.containerClass));
        if (imageEl) {
          imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(gesture.imageEl, ".".concat(params.containerClass))[0];
        } else {
          gesture.imageWrapEl = undefined;
        }
      }
      if (!gesture.imageEl || !gesture.imageWrapEl) return;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.style.touchAction = '';
      }
      zoom.scale = 1;
      currentScale = 1;
      gesture.imageWrapEl.style.transitionDuration = '300ms';
      gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
      gesture.imageEl.style.transitionDuration = '300ms';
      gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
      gesture.slideEl.classList.remove("".concat(params.zoomedSlideClass));
      gesture.slideEl = undefined;
      gesture.originX = 0;
      gesture.originY = 0;
    }

    // Toggle Zoom
    function zoomToggle(e) {
      var zoom = swiper.zoom;
      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoomOut();
      } else {
        // Zoom In
        zoomIn(e);
      }
    }
    function getListeners() {
      var passiveListener = swiper.params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      var activeListenerWithCapture = swiper.params.passiveListeners ? {
        passive: false,
        capture: true
      } : true;
      return {
        passiveListener: passiveListener,
        activeListenerWithCapture: activeListenerWithCapture
      };
    }

    // Attach/Detach Events
    function enable() {
      var zoom = swiper.zoom;
      if (zoom.enabled) return;
      zoom.enabled = true;
      var _getListeners = getListeners(),
        passiveListener = _getListeners.passiveListener,
        activeListenerWithCapture = _getListeners.activeListenerWithCapture;

      // Scale image
      swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
      swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
      ['pointerup', 'pointercancel', 'pointerout'].forEach(function (eventName) {
        swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
      });

      // Move image
      swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
    }
    function disable() {
      var zoom = swiper.zoom;
      if (!zoom.enabled) return;
      zoom.enabled = false;
      var _getListeners2 = getListeners(),
        passiveListener = _getListeners2.passiveListener,
        activeListenerWithCapture = _getListeners2.activeListenerWithCapture;

      // Scale image
      swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
      swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
      ['pointerup', 'pointercancel', 'pointerout'].forEach(function (eventName) {
        swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
      });

      // Move image
      swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
    }
    on('init', function () {
      if (swiper.params.zoom.enabled) {
        enable();
      }
    });
    on('destroy', function () {
      disable();
    });
    on('touchStart', function (_s, e) {
      if (!swiper.zoom.enabled) return;
      onTouchStart(e);
    });
    on('touchEnd', function (_s, e) {
      if (!swiper.zoom.enabled) return;
      onTouchEnd();
    });
    on('doubleTap', function (_s, e) {
      if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        zoomToggle(e);
      }
    });
    on('transitionEnd', function () {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        onTransitionEnd();
      }
    });
    on('slideChange', function () {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
        onTransitionEnd();
      }
    });
    Object.assign(swiper.zoom, {
      enable: enable,
      disable: disable,
      "in": zoomIn,
      out: zoomOut,
      toggle: zoomToggle
    });
  }

  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */
  function Controller(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
    extendParams({
      controller: {
        control: undefined,
        inverse: false,
        by: 'slide' // or 'container'
      }
    });
    swiper.controller = {
      control: undefined
    };
    function LinearSpline(x, y) {
      var binarySearch = function search() {
        var maxIndex;
        var minIndex;
        var guess;
        return function (array, val) {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      }();
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.
      var i1;
      var i3;
      this.interpolate = function interpolate(x2) {
        if (!x2) return 0;

        // Get the indexes of x1 and x3 (the array indexes before and after given x2):
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;

        // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
        return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
      };
      return this;
    }
    function getInterpolateFunction(c) {
      swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
    function setTranslate(_t, byController) {
      var controlled = swiper.controller.control;
      var multiplier;
      var controlledTranslate;
      var Swiper = swiper.constructor;
      function setControlledTranslate(c) {
        if (c.destroyed) return;

        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
        if (swiper.params.controller.by === 'slide') {
          getInterpolateFunction(c);
          // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out
          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
        }
        if (!controlledTranslate || swiper.params.controller.by === 'container') {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
            multiplier = 1;
          }
          controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
        }
        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (var i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    }
    function setTransition(duration, byController) {
      var Swiper = swiper.constructor;
      var controlled = swiper.controller.control;
      var i;
      function setControlledTransition(c) {
        if (c.destroyed) return;
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            nextTick(function () {
              c.updateAutoHeight();
            });
          }
          elementTransitionEnd(c.wrapperEl, function () {
            if (!controlled) return;
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    }
    function removeSpline() {
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    }
    on('beforeInit', function () {
      if (typeof window !== 'undefined' && (
      // eslint-disable-line
      typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
        var controlElement = document.querySelector(swiper.params.controller.control);
        if (controlElement && controlElement.swiper) {
          swiper.controller.control = controlElement.swiper;
        } else if (controlElement) {
          var onControllerSwiper = function onControllerSwiper(e) {
            swiper.controller.control = e.detail[0];
            swiper.update();
            controlElement.removeEventListener('init', onControllerSwiper);
          };
          controlElement.addEventListener('init', onControllerSwiper);
        }
        return;
      }
      swiper.controller.control = swiper.params.controller.control;
    });
    on('update', function () {
      removeSpline();
    });
    on('resize', function () {
      removeSpline();
    });
    on('observerUpdate', function () {
      removeSpline();
    });
    on('setTranslate', function (_s, translate, byController) {
      if (!swiper.controller.control || swiper.controller.control.destroyed) return;
      swiper.controller.setTranslate(translate, byController);
    });
    on('setTransition', function (_s, duration, byController) {
      if (!swiper.controller.control || swiper.controller.control.destroyed) return;
      swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
      setTranslate: setTranslate,
      setTransition: setTransition
    });
  }
  function A11y(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
    extendParams({
      a11y: {
        enabled: true,
        notificationClass: 'swiper-notification',
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
        slideLabelMessage: '{{index}} / {{slidesLength}}',
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: 'group',
        id: null
      }
    });
    swiper.a11y = {
      clicked: false
    };
    var liveRegion = null;
    function notify(message) {
      var notification = liveRegion;
      if (notification.length === 0) return;
      notification.innerHTML = '';
      notification.innerHTML = message;
    }
    var makeElementsArray = function makeElementsArray(el) {
      if (!Array.isArray(el)) el = [el].filter(function (e) {
        return !!e;
      });
      return el;
    };
    function getRandomNumber(size) {
      if (size === void 0) {
        size = 16;
      }
      var randomChar = function randomChar() {
        return Math.round(16 * Math.random()).toString(16);
      };
      return 'x'.repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable(el) {
      el = makeElementsArray(el);
      el.forEach(function (subEl) {
        subEl.setAttribute('tabIndex', '0');
      });
    }
    function makeElNotFocusable(el) {
      el = makeElementsArray(el);
      el.forEach(function (subEl) {
        subEl.setAttribute('tabIndex', '-1');
      });
    }
    function addElRole(el, role) {
      el = makeElementsArray(el);
      el.forEach(function (subEl) {
        subEl.setAttribute('role', role);
      });
    }
    function addElRoleDescription(el, description) {
      el = makeElementsArray(el);
      el.forEach(function (subEl) {
        subEl.setAttribute('aria-roledescription', description);
      });
    }
    function addElControls(el, controls) {
      el = makeElementsArray(el);
      el.forEach(function (subEl) {
        subEl.setAttribute('aria-controls', controls);
      });
    }
    function addElLabel(el, label) {
      el = makeElementsArray(el);
      el.forEach(function (subEl) {
        subEl.setAttribute('aria-label', label);
      });
    }
    function addElId(el, id) {
      el = makeElementsArray(el);
      el.forEach(function (subEl) {
        subEl.setAttribute('id', id);
      });
    }
    function addElLive(el, live) {
      el = makeElementsArray(el);
      el.forEach(function (subEl) {
        subEl.setAttribute('aria-live', live);
      });
    }
    function disableEl(el) {
      el = makeElementsArray(el);
      el.forEach(function (subEl) {
        subEl.setAttribute('aria-disabled', true);
      });
    }
    function enableEl(el) {
      el = makeElementsArray(el);
      el.forEach(function (subEl) {
        subEl.setAttribute('aria-disabled', false);
      });
    }
    function onEnterOrSpaceKey(e) {
      if (e.keyCode !== 13 && e.keyCode !== 32) return;
      var params = swiper.params.a11y;
      var targetEl = e.target;
      if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
        if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
      }
      if (swiper.navigation && swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          notify(params.lastSlideMessage);
        } else {
          notify(params.nextSlideMessage);
        }
      }
      if (swiper.navigation && swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          notify(params.firstSlideMessage);
        } else {
          notify(params.prevSlideMessage);
        }
      }
      if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {
        targetEl.click();
      }
    }
    function updateNavigation() {
      if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
      var _swiper$navigation5 = swiper.navigation,
        nextEl = _swiper$navigation5.nextEl,
        prevEl = _swiper$navigation5.prevEl;
      if (prevEl) {
        if (swiper.isBeginning) {
          disableEl(prevEl);
          makeElNotFocusable(prevEl);
        } else {
          enableEl(prevEl);
          makeElFocusable(prevEl);
        }
      }
      if (nextEl) {
        if (swiper.isEnd) {
          disableEl(nextEl);
          makeElNotFocusable(nextEl);
        } else {
          enableEl(nextEl);
          makeElFocusable(nextEl);
        }
      }
    }
    function hasPagination() {
      return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
    }
    function hasClickablePagination() {
      return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
      var params = swiper.params.a11y;
      if (!hasPagination()) return;
      swiper.pagination.bullets.forEach(function (bulletEl) {
        if (swiper.params.pagination.clickable) {
          makeElFocusable(bulletEl);
          if (!swiper.params.pagination.renderBullet) {
            addElRole(bulletEl, 'button');
            addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
          }
        }
        if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {
          bulletEl.setAttribute('aria-current', 'true');
        } else {
          bulletEl.removeAttribute('aria-current');
        }
      });
    }
    var initNavEl = function initNavEl(el, wrapperId, message) {
      makeElFocusable(el);
      if (el.tagName !== 'BUTTON') {
        addElRole(el, 'button');
        el.addEventListener('keydown', onEnterOrSpaceKey);
      }
      addElLabel(el, message);
      addElControls(el, wrapperId);
    };
    var handlePointerDown = function handlePointerDown() {
      swiper.a11y.clicked = true;
    };
    var handlePointerUp = function handlePointerUp() {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          if (!swiper.destroyed) {
            swiper.a11y.clicked = false;
          }
        });
      });
    };
    var handleFocus = function handleFocus(e) {
      if (swiper.a11y.clicked) return;
      var slideEl = e.target.closest(".".concat(swiper.params.slideClass, ", swiper-slide"));
      if (!slideEl || !swiper.slides.includes(slideEl)) return;
      var isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
      var isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
      if (isActive || isVisible) return;
      if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
      if (swiper.isHorizontal()) {
        swiper.el.scrollLeft = 0;
      } else {
        swiper.el.scrollTop = 0;
      }
      swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
    };
    var initSlides = function initSlides() {
      var params = swiper.params.a11y;
      if (params.itemRoleDescriptionMessage) {
        addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
      }
      if (params.slideRole) {
        addElRole(swiper.slides, params.slideRole);
      }
      var slidesLength = swiper.slides.length;
      if (params.slideLabelMessage) {
        swiper.slides.forEach(function (slideEl, index) {
          var slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
          var ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
          addElLabel(slideEl, ariaLabelMessage);
        });
      }
    };
    var init = function init() {
      var params = swiper.params.a11y;
      if (swiper.isElement) {
        swiper.el.shadowEl.append(liveRegion);
      } else {
        swiper.el.append(liveRegion);
      }

      // Container
      var containerEl = swiper.el;
      if (params.containerRoleDescriptionMessage) {
        addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
      }
      if (params.containerMessage) {
        addElLabel(containerEl, params.containerMessage);
      }

      // Wrapper
      var wrapperEl = swiper.wrapperEl;
      var wrapperId = params.id || wrapperEl.getAttribute('id') || "swiper-wrapper-".concat(getRandomNumber(16));
      var live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
      addElId(wrapperEl, wrapperId);
      addElLive(wrapperEl, live);

      // Slide
      initSlides();

      // Navigation
      var _ref5 = swiper.navigation ? swiper.navigation : {},
        nextEl = _ref5.nextEl,
        prevEl = _ref5.prevEl;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (nextEl) {
        nextEl.forEach(function (el) {
          return initNavEl(el, wrapperId, params.nextSlideMessage);
        });
      }
      if (prevEl) {
        prevEl.forEach(function (el) {
          return initNavEl(el, wrapperId, params.prevSlideMessage);
        });
      }

      // Pagination
      if (hasClickablePagination()) {
        var paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el];
        paginationEl.forEach(function (el) {
          el.addEventListener('keydown', onEnterOrSpaceKey);
        });
      }

      // Tab focus
      swiper.el.addEventListener('focus', handleFocus, true);
      swiper.el.addEventListener('pointerdown', handlePointerDown, true);
      swiper.el.addEventListener('pointerup', handlePointerUp, true);
    };
    function destroy() {
      if (liveRegion) liveRegion.remove();
      var _ref6 = swiper.navigation ? swiper.navigation : {},
        nextEl = _ref6.nextEl,
        prevEl = _ref6.prevEl;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (nextEl) {
        nextEl.forEach(function (el) {
          return el.removeEventListener('keydown', onEnterOrSpaceKey);
        });
      }
      if (prevEl) {
        prevEl.forEach(function (el) {
          return el.removeEventListener('keydown', onEnterOrSpaceKey);
        });
      }

      // Pagination
      if (hasClickablePagination()) {
        var paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el];
        paginationEl.forEach(function (el) {
          el.removeEventListener('keydown', onEnterOrSpaceKey);
        });
      }

      // Tab focus
      swiper.el.removeEventListener('focus', handleFocus, true);
      swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
      swiper.el.removeEventListener('pointerup', handlePointerUp, true);
    }
    on('beforeInit', function () {
      liveRegion = createElement('span', swiper.params.a11y.notificationClass);
      liveRegion.setAttribute('aria-live', 'assertive');
      liveRegion.setAttribute('aria-atomic', 'true');
    });
    on('afterInit', function () {
      if (!swiper.params.a11y.enabled) return;
      init();
    });
    on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', function () {
      if (!swiper.params.a11y.enabled) return;
      initSlides();
    });
    on('fromEdge toEdge afterInit lock unlock', function () {
      if (!swiper.params.a11y.enabled) return;
      updateNavigation();
    });
    on('paginationUpdate', function () {
      if (!swiper.params.a11y.enabled) return;
      updatePagination();
    });
    on('destroy', function () {
      if (!swiper.params.a11y.enabled) return;
      destroy();
    });
  }
  function History(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
    extendParams({
      history: {
        enabled: false,
        root: '',
        replaceState: false,
        key: 'slides',
        keepQuery: false
      }
    });
    var initialized = false;
    var paths = {};
    var slugify = function slugify(text) {
      return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
    };
    var getPathValues = function getPathValues(urlOverride) {
      var window = getWindow();
      var location;
      if (urlOverride) {
        location = new URL(urlOverride);
      } else {
        location = window.location;
      }
      var pathArray = location.pathname.slice(1).split('/').filter(function (part) {
        return part !== '';
      });
      var total = pathArray.length;
      var key = pathArray[total - 2];
      var value = pathArray[total - 1];
      return {
        key: key,
        value: value
      };
    };
    var setHistory = function setHistory(key, index) {
      var window = getWindow();
      if (!initialized || !swiper.params.history.enabled) return;
      var location;
      if (swiper.params.url) {
        location = new URL(swiper.params.url);
      } else {
        location = window.location;
      }
      var slide = swiper.slides[index];
      var value = slugify(slide.getAttribute('data-history'));
      if (swiper.params.history.root.length > 0) {
        var root = swiper.params.history.root;
        if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
        value = "".concat(root, "/").concat(key ? "".concat(key, "/") : '').concat(value);
      } else if (!location.pathname.includes(key)) {
        value = "".concat(key ? "".concat(key, "/") : '').concat(value);
      }
      if (swiper.params.history.keepQuery) {
        value += location.search;
      }
      var currentState = window.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        window.history.replaceState({
          value: value
        }, null, value);
      } else {
        window.history.pushState({
          value: value
        }, null, value);
      }
    };
    var scrollToSlide = function scrollToSlide(speed, value, runCallbacks) {
      if (value) {
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var _slide4 = swiper.slides[i];
          var slideHistory = slugify(_slide4.getAttribute('data-history'));
          if (slideHistory === value) {
            var index = swiper.getSlideIndex(_slide4);
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    };
    var setHistoryPopState = function setHistoryPopState() {
      paths = getPathValues(swiper.params.url);
      scrollToSlide(swiper.params.speed, paths.value, false);
    };
    var init = function init() {
      var window = getWindow();
      if (!swiper.params.history) return;
      if (!window.history || !window.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      initialized = true;
      paths = getPathValues(swiper.params.url);
      if (!paths.key && !paths.value) {
        if (!swiper.params.history.replaceState) {
          window.addEventListener('popstate', setHistoryPopState);
        }
        return;
      }
      scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        window.addEventListener('popstate', setHistoryPopState);
      }
    };
    var destroy = function destroy() {
      var window = getWindow();
      if (!swiper.params.history.replaceState) {
        window.removeEventListener('popstate', setHistoryPopState);
      }
    };
    on('init', function () {
      if (swiper.params.history.enabled) {
        init();
      }
    });
    on('destroy', function () {
      if (swiper.params.history.enabled) {
        destroy();
      }
    });
    on('transitionEnd _freeModeNoMomentumRelease', function () {
      if (initialized) {
        setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    });
    on('slideChange', function () {
      if (initialized && swiper.params.cssMode) {
        setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    });
  }
  function HashNavigation(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      emit = _ref.emit,
      on = _ref.on;
    var initialized = false;
    var document = getDocument();
    var window = getWindow();
    extendParams({
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
        getSlideIndex: function getSlideIndex(_s, hash) {
          if (swiper.virtual && swiper.params.virtual.enabled) {
            var slideWithHash = swiper.slides.filter(function (slideEl) {
              return slideEl.getAttribute('data-hash') === hash;
            })[0];
            if (!slideWithHash) return 0;
            var index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
            return index;
          }
          return swiper.getSlideIndex(elementChildren(swiper.slidesEl, ".".concat(swiper.params.slideClass, "[data-hash=\"").concat(hash, "\"], swiper-slide[data-hash=\"").concat(hash, "\"]"))[0]);
        }
      }
    });
    var onHashChange = function onHashChange() {
      emit('hashChange');
      var newHash = document.location.hash.replace('#', '');
      var activeSlideEl = swiper.slidesEl.querySelector("[data-swiper-slide-index=\"".concat(swiper.activeIndex, "\"]"));
      var activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
      if (newHash !== activeSlideHash) {
        var newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
        if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
        swiper.slideTo(newIndex);
      }
    };
    var setHash = function setHash() {
      if (!initialized || !swiper.params.hashNavigation.enabled) return;
      var activeSlideEl = swiper.slidesEl.querySelector("[data-swiper-slide-index=\"".concat(swiper.activeIndex, "\"]"));
      var activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
      if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
        window.history.replaceState(null, null, "#".concat(activeSlideHash) || 0);
        emit('hashSet');
      } else {
        document.location.hash = activeSlideHash || '';
        emit('hashSet');
      }
    };
    var init = function init() {
      if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
      initialized = true;
      var hash = document.location.hash.replace('#', '');
      if (hash) {
        var speed = 0;
        var index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
        swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
      }
      if (swiper.params.hashNavigation.watchState) {
        window.addEventListener('hashchange', onHashChange);
      }
    };
    var destroy = function destroy() {
      if (swiper.params.hashNavigation.watchState) {
        window.removeEventListener('hashchange', onHashChange);
      }
    };
    on('init', function () {
      if (swiper.params.hashNavigation.enabled) {
        init();
      }
    });
    on('destroy', function () {
      if (swiper.params.hashNavigation.enabled) {
        destroy();
      }
    });
    on('transitionEnd _freeModeNoMomentumRelease', function () {
      if (initialized) {
        setHash();
      }
    });
    on('slideChange', function () {
      if (initialized && swiper.params.cssMode) {
        setHash();
      }
    });
  }

  /* eslint no-underscore-dangle: "off" */
  function Autoplay(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit,
      params = _ref.params;
    swiper.autoplay = {
      running: false,
      paused: false,
      timeLeft: 0
    };
    extendParams({
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: false
      }
    });
    var timeout;
    var raf;
    var autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
    var autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
    var autoplayTimeLeft;
    var autoplayStartTime = new Date().getTime;
    var wasPaused;
    var isTouched;
    var pausedByTouch;
    var touchStartTimeout;
    var slideChanged;
    var pausedByInteraction;
    function onTransitionEnd(e) {
      if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
      if (e.target !== swiper.wrapperEl) return;
      swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
      resume();
    }
    var calcTimeLeft = function calcTimeLeft() {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.autoplay.paused) {
        wasPaused = true;
      } else if (wasPaused) {
        autoplayDelayCurrent = autoplayTimeLeft;
        wasPaused = false;
      }
      var timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
      swiper.autoplay.timeLeft = timeLeft;
      emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
      raf = requestAnimationFrame(function () {
        calcTimeLeft();
      });
    };
    var getSlideDelay = function getSlideDelay() {
      var activeSlideEl;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        activeSlideEl = swiper.slides.filter(function (slideEl) {
          return slideEl.classList.contains('swiper-slide-active');
        })[0];
      } else {
        activeSlideEl = swiper.slides[swiper.activeIndex];
      }
      if (!activeSlideEl) return undefined;
      var currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
      return currentSlideDelay;
    };
    var run = function run(delayForce) {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      cancelAnimationFrame(raf);
      calcTimeLeft();
      var delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
      autoplayDelayTotal = swiper.params.autoplay.delay;
      autoplayDelayCurrent = swiper.params.autoplay.delay;
      var currentSlideDelay = getSlideDelay();
      if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
        delay = currentSlideDelay;
        autoplayDelayTotal = currentSlideDelay;
        autoplayDelayCurrent = currentSlideDelay;
      }
      autoplayTimeLeft = delay;
      var speed = swiper.params.speed;
      var proceed = function proceed() {
        if (!swiper || swiper.destroyed) return;
        if (swiper.params.autoplay.reverseDirection) {
          if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
            swiper.slidePrev(speed, true, true);
            emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
            emit('autoplay');
          }
        } else {
          if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
            swiper.slideNext(speed, true, true);
            emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(0, speed, true, true);
            emit('autoplay');
          }
        }
        if (swiper.params.cssMode) {
          autoplayStartTime = new Date().getTime();
          requestAnimationFrame(function () {
            run();
          });
        }
      };
      if (delay > 0) {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          proceed();
        }, delay);
      } else {
        requestAnimationFrame(function () {
          proceed();
        });
      }

      // eslint-disable-next-line
      return delay;
    };
    var start = function start() {
      swiper.autoplay.running = true;
      run();
      emit('autoplayStart');
    };
    var stop = function stop() {
      swiper.autoplay.running = false;
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
      emit('autoplayStop');
    };
    var pause = function pause(internal, reset) {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      clearTimeout(timeout);
      if (!internal) {
        pausedByInteraction = true;
      }
      var proceed = function proceed() {
        emit('autoplayPause');
        if (swiper.params.autoplay.waitForTransition) {
          swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
        } else {
          resume();
        }
      };
      swiper.autoplay.paused = true;
      if (reset) {
        if (slideChanged) {
          autoplayTimeLeft = swiper.params.autoplay.delay;
        }
        slideChanged = false;
        proceed();
        return;
      }
      var delay = autoplayTimeLeft || swiper.params.autoplay.delay;
      autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
      if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
      proceed();
    };
    var resume = function resume() {
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
      autoplayStartTime = new Date().getTime();
      if (pausedByInteraction) {
        pausedByInteraction = false;
        run(autoplayTimeLeft);
      } else {
        run();
      }
      swiper.autoplay.paused = false;
      emit('autoplayResume');
    };
    var onVisibilityChange = function onVisibilityChange() {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      var document = getDocument();
      if (document.visibilityState === 'hidden') {
        pausedByInteraction = true;
        pause(true);
      }
      if (document.visibilityState === 'visible') {
        resume();
      }
    };
    var onPointerEnter = function onPointerEnter(e) {
      if (e.pointerType !== 'mouse') return;
      pausedByInteraction = true;
      pause(true);
    };
    var onPointerLeave = function onPointerLeave(e) {
      if (e.pointerType !== 'mouse') return;
      if (swiper.autoplay.paused) {
        resume();
      }
    };
    var attachMouseEvents = function attachMouseEvents() {
      if (swiper.params.autoplay.pauseOnMouseEnter) {
        swiper.el.addEventListener('pointerenter', onPointerEnter);
        swiper.el.addEventListener('pointerleave', onPointerLeave);
      }
    };
    var detachMouseEvents = function detachMouseEvents() {
      swiper.el.removeEventListener('pointerenter', onPointerEnter);
      swiper.el.removeEventListener('pointerleave', onPointerLeave);
    };
    var attachDocumentEvents = function attachDocumentEvents() {
      var document = getDocument();
      document.addEventListener('visibilitychange', onVisibilityChange);
    };
    var detachDocumentEvents = function detachDocumentEvents() {
      var document = getDocument();
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
    on('init', function () {
      if (swiper.params.autoplay.enabled) {
        attachMouseEvents();
        attachDocumentEvents();
        autoplayStartTime = new Date().getTime();
        start();
      }
    });
    on('destroy', function () {
      detachMouseEvents();
      detachDocumentEvents();
      if (swiper.autoplay.running) {
        stop();
      }
    });
    on('beforeTransitionStart', function (_s, speed, internal) {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on('sliderFirstMove', function () {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
        return;
      }
      isTouched = true;
      pausedByTouch = false;
      pausedByInteraction = false;
      touchStartTimeout = setTimeout(function () {
        pausedByInteraction = true;
        pausedByTouch = true;
        pause(true);
      }, 200);
    });
    on('touchEnd', function () {
      if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
      clearTimeout(touchStartTimeout);
      clearTimeout(timeout);
      if (swiper.params.autoplay.disableOnInteraction) {
        pausedByTouch = false;
        isTouched = false;
        return;
      }
      if (pausedByTouch && swiper.params.cssMode) resume();
      pausedByTouch = false;
      isTouched = false;
    });
    on('slideChange', function () {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      slideChanged = true;
    });
    Object.assign(swiper.autoplay, {
      start: start,
      stop: stop,
      pause: pause,
      resume: resume
    });
  }
  function Thumb(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
    extendParams({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: true,
        autoScrollOffset: 0,
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-thumbs'
      }
    });
    var initialized = false;
    var swiperCreated = false;
    swiper.thumbs = {
      swiper: null
    };
    function onThumbClick() {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      var clickedIndex = thumbsSwiper.clickedIndex;
      var clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
      if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
      var slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        swiper.slideToLoop(slideToIndex);
      } else {
        swiper.slideTo(slideToIndex);
      }
    }
    function init() {
      var thumbsParams = swiper.params.thumbs;
      if (initialized) return false;
      initialized = true;
      var SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Object.assign(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        Object.assign(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        swiper.thumbs.swiper.update();
      } else if (isObject(thumbsParams.swiper)) {
        var thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
        Object.assign(thumbsSwiperParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
        swiperCreated = true;
      }
      swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on('tap', onThumbClick);
      return true;
    }
    function update(initial) {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

      // Activate thumbs
      var thumbsToActivate = 1;
      var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }
      if (!swiper.params.thumbs.multipleActiveThumbs) {
        thumbsToActivate = 1;
      }
      thumbsToActivate = Math.floor(thumbsToActivate);
      thumbsSwiper.slides.forEach(function (slideEl) {
        return slideEl.classList.remove(thumbActiveClass);
      });
      if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
        for (var i = 0; i < thumbsToActivate; i += 1) {
          elementChildren(thumbsSwiper.slidesEl, "[data-swiper-slide-index=\"".concat(swiper.realIndex + i, "\"]")).forEach(function (slideEl) {
            slideEl.classList.add(thumbActiveClass);
          });
        }
      } else {
        for (var _i11 = 0; _i11 < thumbsToActivate; _i11 += 1) {
          if (thumbsSwiper.slides[swiper.realIndex + _i11]) {
            thumbsSwiper.slides[swiper.realIndex + _i11].classList.add(thumbActiveClass);
          }
        }
      }
      var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
      var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
      if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
        var currentThumbsIndex = thumbsSwiper.activeIndex;
        var newThumbsIndex;
        var direction;
        if (thumbsSwiper.params.loop) {
          var newThumbsSlide = thumbsSwiper.slides.filter(function (slideEl) {
            return slideEl.getAttribute('data-swiper-slide-index') === "".concat(swiper.realIndex);
          })[0];
          newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
          direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
        } else {
          newThumbsIndex = swiper.realIndex;
          direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
        }
        if (useOffset) {
          newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
        }
        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      }
    }
    on('beforeInit', function () {
      var thumbs = swiper.params.thumbs;
      if (!thumbs || !thumbs.swiper) return;
      if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
        var _document = getDocument();
        var getThumbsElementAndInit = function getThumbsElementAndInit() {
          var thumbsElement = typeof thumbs.swiper === 'string' ? _document.querySelector(thumbs.swiper) : thumbs.swiper;
          if (thumbsElement && thumbsElement.swiper) {
            thumbs.swiper = thumbsElement.swiper;
            init();
            update(true);
          } else if (thumbsElement) {
            var onThumbsSwiper = function onThumbsSwiper(e) {
              thumbs.swiper = e.detail[0];
              thumbsElement.removeEventListener('init', onThumbsSwiper);
              init();
              update(true);
              thumbs.swiper.update();
              swiper.update();
            };
            thumbsElement.addEventListener('init', onThumbsSwiper);
          }
          return thumbsElement;
        };
        var watchForThumbsToAppear = function watchForThumbsToAppear() {
          if (swiper.destroyed) return;
          var thumbsElement = getThumbsElementAndInit();
          if (!thumbsElement) {
            requestAnimationFrame(watchForThumbsToAppear);
          }
        };
        requestAnimationFrame(watchForThumbsToAppear);
      } else {
        init();
        update(true);
      }
    });
    on('slideChange update resize observerUpdate', function () {
      update();
    });
    on('setTransition', function (_s, duration) {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      thumbsSwiper.setTransition(duration);
    });
    on('beforeDestroy', function () {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      if (swiperCreated) {
        thumbsSwiper.destroy();
      }
    });
    Object.assign(swiper.thumbs, {
      init: init,
      update: update
    });
  }
  function freeMode(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      emit = _ref.emit,
      once = _ref.once;
    extendParams({
      freeMode: {
        enabled: false,
        momentum: true,
        momentumRatio: 1,
        momentumBounce: true,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: false,
        minimumVelocity: 0.02
      }
    });
    function onTouchStart() {
      var translate = swiper.getTranslate();
      swiper.setTranslate(translate);
      swiper.setTransition(0);
      swiper.touchEventsData.velocities.length = 0;
      swiper.freeMode.onTouchEnd({
        currentPos: swiper.rtl ? swiper.translate : -swiper.translate
      });
    }
    function onTouchMove() {
      var data = swiper.touchEventsData,
        touches = swiper.touches;
      // Velocity
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
          time: data.touchStartTime
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
        time: now()
      });
    }
    function onTouchEnd(_ref2) {
      var currentPos = _ref2.currentPos;
      var params = swiper.params,
        wrapperEl = swiper.wrapperEl,
        rtl = swiper.rtlTranslate,
        snapGrid = swiper.snapGrid,
        data = swiper.touchEventsData;
      // Time diff
      var touchEndTime = now();
      var timeDiff = touchEndTime - data.touchStartTime;
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }
      if (params.freeMode.momentum) {
        if (data.velocities.length > 1) {
          var lastMoveEvent = data.velocities.pop();
          var velocityEvent = data.velocities.pop();
          var distance = lastMoveEvent.position - velocityEvent.position;
          var time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
            swiper.velocity = 0;
          }
          // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.
          if (time > 150 || now() - lastMoveEvent.time > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeMode.momentumVelocityRatio;
        data.velocities.length = 0;
        var momentumDuration = 1000 * params.freeMode.momentumRatio;
        var momentumDistance = swiper.velocity * momentumDuration;
        var newPosition = swiper.translate + momentumDistance;
        if (rtl) newPosition = -newPosition;
        var doBounce = false;
        var afterBouncePosition;
        var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
        var needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeMode.momentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeMode.momentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (params.freeMode.sticky) {
          var nextSlide;
          for (var j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }
          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          once('transitionEnd', function () {
            swiper.loopFix();
          });
        }
        // Fix duration
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
          if (params.freeMode.sticky) {
            // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
            // event, then durations can be 20+ seconds to slide one (or zero!) slides.
            // It's easy to see this when simulating touch with mouse events. To fix this,
            // limit single-slide swipes to the default slide duration. This also has the
            // nice side effect of matching slide speed if the user stopped moving before
            // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
            // For faster swipes, also apply limits (albeit higher ones).
            var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
            var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
            if (moveDistance < currentSlideSize) {
              momentumDuration = params.speed;
            } else if (moveDistance < 2 * currentSlideSize) {
              momentumDuration = params.speed * 1.5;
            } else {
              momentumDuration = params.speed * 2.5;
            }
          }
        } else if (params.freeMode.sticky) {
          swiper.slideToClosest();
          return;
        }
        if (params.freeMode.momentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          elementTransitionEnd(wrapperEl, function () {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
            emit('momentumBounce');
            swiper.setTransition(params.speed);
            setTimeout(function () {
              swiper.setTranslate(afterBouncePosition);
              elementTransitionEnd(wrapperEl, function () {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }, 0);
          });
        } else if (swiper.velocity) {
          emit('_freeModeNoMomentumRelease');
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            elementTransitionEnd(wrapperEl, function () {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      } else if (params.freeMode) {
        emit('_freeModeNoMomentumRelease');
      }
      if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
    }
    Object.assign(swiper, {
      freeMode: {
        onTouchStart: onTouchStart,
        onTouchMove: onTouchMove,
        onTouchEnd: onTouchEnd
      }
    });
  }
  function Grid(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams;
    extendParams({
      grid: {
        rows: 1,
        fill: 'column'
      }
    });
    var slidesNumberEvenToRows;
    var slidesPerRow;
    var numFullColumns;
    var getSpaceBetween = function getSpaceBetween() {
      var spaceBetween = swiper.params.spaceBetween;
      if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
      } else if (typeof spaceBetween === 'string') {
        spaceBetween = parseFloat(spaceBetween);
      }
      return spaceBetween;
    };
    var initSlides = function initSlides(slidesLength) {
      var slidesPerView = swiper.params.slidesPerView;
      var _swiper$params$grid = swiper.params.grid,
        rows = _swiper$params$grid.rows,
        fill = _swiper$params$grid.fill;
      slidesPerRow = slidesNumberEvenToRows / rows;
      numFullColumns = Math.floor(slidesLength / rows);
      if (Math.floor(slidesLength / rows) === slidesLength / rows) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
      }
      if (slidesPerView !== 'auto' && fill === 'row') {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
      }
    };
    var updateSlide = function updateSlide(i, slide, slidesLength, getDirectionLabel) {
      var slidesPerGroup = swiper.params.slidesPerGroup;
      var spaceBetween = getSpaceBetween();
      var _swiper$params$grid2 = swiper.params.grid,
        rows = _swiper$params$grid2.rows,
        fill = _swiper$params$grid2.fill;
      // Set slides order
      var newSlideOrderIndex;
      var column;
      var row;
      if (fill === 'row' && slidesPerGroup > 1) {
        var groupIndex = Math.floor(i / (slidesPerGroup * rows));
        var slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
        var columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
        slide.style.order = newSlideOrderIndex;
      } else if (fill === 'column') {
        column = Math.floor(i / rows);
        row = i - column * rows;
        if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
          row += 1;
          if (row >= rows) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }
      slide.style[getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && "".concat(spaceBetween, "px") : '';
    };
    var updateWrapperSize = function updateWrapperSize(slideSize, snapGrid, getDirectionLabel) {
      var _swiper$params2 = swiper.params,
        centeredSlides = _swiper$params2.centeredSlides,
        roundLengths = _swiper$params2.roundLengths;
      var spaceBetween = getSpaceBetween();
      var rows = swiper.params.grid.rows;
      swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
      swiper.wrapperEl.style[getDirectionLabel('width')] = "".concat(swiper.virtualSize + spaceBetween, "px");
      if (centeredSlides) {
        var newSlidesGrid = [];
        for (var i = 0; i < snapGrid.length; i += 1) {
          var slidesGridItem = snapGrid[i];
          if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
          if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid.splice(0, snapGrid.length);
        snapGrid.push.apply(snapGrid, newSlidesGrid);
      }
    };
    swiper.grid = {
      initSlides: initSlides,
      updateSlide: updateSlide,
      updateWrapperSize: updateWrapperSize
    };
  }
  function appendSlide(slides) {
    var swiper = this;
    var params = swiper.params,
      slidesEl = swiper.slidesEl;
    if (params.loop) {
      swiper.loopDestroy();
    }
    var appendElement = function appendElement(slideEl) {
      if (typeof slideEl === 'string') {
        var tempDOM = document.createElement('div');
        tempDOM.innerHTML = slideEl;
        slidesEl.append(tempDOM.children[0]);
        tempDOM.innerHTML = '';
      } else {
        slidesEl.append(slideEl);
      }
    };
    if (_typeof(slides) === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) appendElement(slides[i]);
      }
    } else {
      appendElement(slides);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
  }
  function prependSlide(slides) {
    var swiper = this;
    var params = swiper.params,
      activeIndex = swiper.activeIndex,
      slidesEl = swiper.slidesEl;
    if (params.loop) {
      swiper.loopDestroy();
    }
    var newActiveIndex = activeIndex + 1;
    var prependElement = function prependElement(slideEl) {
      if (typeof slideEl === 'string') {
        var tempDOM = document.createElement('div');
        tempDOM.innerHTML = slideEl;
        slidesEl.prepend(tempDOM.children[0]);
        tempDOM.innerHTML = '';
      } else {
        slidesEl.prepend(slideEl);
      }
    };
    if (_typeof(slides) === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) prependElement(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      prependElement(slides);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }
  function addSlide(index, slides) {
    var swiper = this;
    var params = swiper.params,
      activeIndex = swiper.activeIndex,
      slidesEl = swiper.slidesEl;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.recalcSlides();
    }
    var baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    var slidesBuffer = [];
    for (var i = baseLength - 1; i >= index; i -= 1) {
      var currentSlide = swiper.slides[i];
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }
    if (_typeof(slides) === 'object' && 'length' in slides) {
      for (var _i12 = 0; _i12 < slides.length; _i12 += 1) {
        if (slides[_i12]) slidesEl.append(slides[_i12]);
      }
      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      slidesEl.append(slides);
    }
    for (var _i13 = 0; _i13 < slidesBuffer.length; _i13 += 1) {
      slidesEl.append(slidesBuffer[_i13]);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }
  function removeSlide(slidesIndexes) {
    var swiper = this;
    var params = swiper.params,
      activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
    }
    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;
    if (_typeof(slidesIndexes) === 'object' && 'length' in slidesIndexes) {
      for (var i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      newActiveIndex = Math.max(newActiveIndex, 0);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }
  function removeAllSlides() {
    var swiper = this;
    var slidesIndexes = [];
    for (var i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }
  function Manipulation(_ref) {
    var swiper = _ref.swiper;
    Object.assign(swiper, {
      appendSlide: appendSlide.bind(swiper),
      prependSlide: prependSlide.bind(swiper),
      addSlide: addSlide.bind(swiper),
      removeSlide: removeSlide.bind(swiper),
      removeAllSlides: removeAllSlides.bind(swiper)
    });
  }
  function effectInit(params) {
    var effect = params.effect,
      swiper = params.swiper,
      on = params.on,
      setTranslate = params.setTranslate,
      setTransition = params.setTransition,
      overwriteParams = params.overwriteParams,
      perspective = params.perspective,
      recreateShadows = params.recreateShadows,
      getEffectParams = params.getEffectParams;
    on('beforeInit', function () {
      if (swiper.params.effect !== effect) return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass).concat(effect));
      if (perspective && perspective()) {
        swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
      }
      var overwriteParamsResult = overwriteParams ? overwriteParams() : {};
      Object.assign(swiper.params, overwriteParamsResult);
      Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on('setTranslate', function () {
      if (swiper.params.effect !== effect) return;
      setTranslate();
    });
    on('setTransition', function (_s, duration) {
      if (swiper.params.effect !== effect) return;
      setTransition(duration);
    });
    on('transitionEnd', function () {
      if (swiper.params.effect !== effect) return;
      if (recreateShadows) {
        if (!getEffectParams || !getEffectParams().slideShadows) return;
        // remove shadows
        swiper.slides.forEach(function (slideEl) {
          slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(function (shadowEl) {
            return shadowEl.remove();
          });
        });
        // create new one
        recreateShadows();
      }
    });
    var requireUpdateOnVirtual;
    on('virtualUpdate', function () {
      if (swiper.params.effect !== effect) return;
      if (!swiper.slides.length) {
        requireUpdateOnVirtual = true;
      }
      requestAnimationFrame(function () {
        if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
          setTranslate();
          requireUpdateOnVirtual = false;
        }
      });
    });
  }
  function effectTarget(effectParams, slideEl) {
    var transformEl = getSlideTransformEl(slideEl);
    if (transformEl !== slideEl) {
      transformEl.style.backfaceVisibility = 'hidden';
      transformEl.style['-webkit-backface-visibility'] = 'hidden';
    }
    return transformEl;
  }
  function effectVirtualTransitionEnd(_ref) {
    var swiper = _ref.swiper,
      duration = _ref.duration,
      transformElements = _ref.transformElements,
      allSlides = _ref.allSlides;
    var activeIndex = swiper.activeIndex;
    var getSlide = function getSlide(el) {
      if (!el.parentElement) {
        // assume shadow root
        var _slide5 = swiper.slides.filter(function (slideEl) {
          return slideEl.shadowEl && slideEl.shadowEl === el.parentNode;
        })[0];
        return _slide5;
      }
      return el.parentElement;
    };
    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      var transitionEndTarget;
      if (allSlides) {
        transitionEndTarget = transformElements;
      } else {
        transitionEndTarget = transformElements.filter(function (transformEl) {
          var el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
          return swiper.getSlideIndex(el) === activeIndex;
        });
      }
      transitionEndTarget.forEach(function (el) {
        elementTransitionEnd(el, function () {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;
          eventTriggered = true;
          swiper.animating = false;
          var evt = new window.CustomEvent('transitionend', {
            bubbles: true,
            cancelable: true
          });
          swiper.wrapperEl.dispatchEvent(evt);
        });
      });
    }
  }
  function EffectFade(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
    extendParams({
      fadeEffect: {
        crossFade: false
      }
    });
    var setTranslate = function setTranslate() {
      var slides = swiper.slides;
      var params = swiper.params.fadeEffect;
      for (var i = 0; i < slides.length; i += 1) {
        var slideEl = swiper.slides[i];
        var offset = slideEl.swiperSlideOffset;
        var tx = -offset;
        if (!swiper.params.virtualTranslate) tx -= swiper.translate;
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
        var targetEl = effectTarget(params, slideEl);
        targetEl.style.opacity = slideOpacity;
        targetEl.style.transform = "translate3d(".concat(tx, "px, ").concat(ty, "px, 0px)");
      }
    };
    var setTransition = function setTransition(duration) {
      var transformElements = swiper.slides.map(function (slideEl) {
        return getSlideTransformEl(slideEl);
      });
      transformElements.forEach(function (el) {
        el.style.transitionDuration = "".concat(duration, "ms");
      });
      effectVirtualTransitionEnd({
        swiper: swiper,
        duration: duration,
        transformElements: transformElements,
        allSlides: true
      });
    };
    effectInit({
      effect: 'fade',
      swiper: swiper,
      on: on,
      setTranslate: setTranslate,
      setTransition: setTransition,
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: !swiper.params.cssMode
        };
      }
    });
  }
  function EffectCube(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
    extendParams({
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }
    });
    var createSlideShadows = function createSlideShadows(slideEl, progress, isHorizontal) {
      var shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
      var shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
      if (!shadowBefore) {
        shadowBefore = createElement('div', "swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top'));
        slideEl.append(shadowBefore);
      }
      if (!shadowAfter) {
        shadowAfter = createElement('div', "swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom'));
        slideEl.append(shadowAfter);
      }
      if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
      if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    var recreateShadows = function recreateShadows() {
      // create new ones
      var isHorizontal = swiper.isHorizontal();
      swiper.slides.forEach(function (slideEl) {
        var progress = Math.max(Math.min(slideEl.progress, 1), -1);
        createSlideShadows(slideEl, progress, isHorizontal);
      });
    };
    var setTranslate = function setTranslate() {
      var el = swiper.el,
        wrapperEl = swiper.wrapperEl,
        slides = swiper.slides,
        swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        rtl = swiper.rtlTranslate,
        swiperSize = swiper.size,
        browser = swiper.browser;
      var params = swiper.params.cubeEffect;
      var isHorizontal = swiper.isHorizontal();
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var wrapperRotate = 0;
      var cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          cubeShadowEl = swiper.slidesEl.querySelector('.swiper-cube-shadow');
          if (!cubeShadowEl) {
            cubeShadowEl = createElement('div', 'swiper-cube-shadow');
            swiper.slidesEl.append(cubeShadowEl);
          }
          cubeShadowEl.style.height = "".concat(swiperWidth, "px");
        } else {
          cubeShadowEl = el.querySelector('.swiper-cube-shadow');
          if (!cubeShadowEl) {
            cubeShadowEl = createElement('div', 'swiper-cube-shadow');
            el.append(cubeShadowEl);
          }
        }
      }
      for (var i = 0; i < slides.length; i += 1) {
        var slideEl = slides[i];
        var slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
        }
        var slideAngle = slideIndex * 90;
        var round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        var progress = Math.max(Math.min(slideEl.progress, 1), -1);
        var tx = 0;
        var ty = 0;
        var tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + round * 4 * swiperSize;
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = 3 * swiperSize + swiperSize * 4 * round;
        }
        if (rtl) {
          tx = -tx;
        }
        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }
        var transform = "rotateX(".concat(isHorizontal ? 0 : -slideAngle, "deg) rotateY(").concat(isHorizontal ? slideAngle : 0, "deg) translate3d(").concat(tx, "px, ").concat(ty, "px, ").concat(tz, "px)");
        if (progress <= 1 && progress > -1) {
          wrapperRotate = slideIndex * 90 + progress * 90;
          if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
        }
        slideEl.style.transform = transform;
        if (params.slideShadows) {
          createSlideShadows(slideEl, progress, isHorizontal);
        }
      }
      wrapperEl.style.transformOrigin = "50% 50% -".concat(swiperSize / 2, "px");
      wrapperEl.style['-webkit-transform-origin'] = "50% 50% -".concat(swiperSize / 2, "px");
      if (params.shadow) {
        if (isHorizontal) {
          cubeShadowEl.style.transform = "translate3d(0px, ".concat(swiperWidth / 2 + params.shadowOffset, "px, ").concat(-swiperWidth / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(params.shadowScale, ")");
        } else {
          var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
          var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
          var scale1 = params.shadowScale;
          var scale2 = params.shadowScale / multiplier;
          var offset = params.shadowOffset;
          cubeShadowEl.style.transform = "scale3d(".concat(scale1, ", 1, ").concat(scale2, ") translate3d(0px, ").concat(swiperHeight / 2 + offset, "px, ").concat(-swiperHeight / 2 / scale2, "px) rotateX(-90deg)");
        }
      }
      var zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
      wrapperEl.style.transform = "translate3d(0px,0,".concat(zFactor, "px) rotateX(").concat(swiper.isHorizontal() ? 0 : wrapperRotate, "deg) rotateY(").concat(swiper.isHorizontal() ? -wrapperRotate : 0, "deg)");
      wrapperEl.style.setProperty('--swiper-cube-translate-z', "".concat(zFactor, "px"));
    };
    var setTransition = function setTransition(duration) {
      var el = swiper.el,
        slides = swiper.slides;
      slides.forEach(function (slideEl) {
        slideEl.style.transitionDuration = "".concat(duration, "ms");
        slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(function (subEl) {
          subEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        var shadowEl = el.querySelector('.swiper-cube-shadow');
        if (shadowEl) shadowEl.style.transitionDuration = "".concat(duration, "ms");
      }
    };
    effectInit({
      effect: 'cube',
      swiper: swiper,
      on: on,
      setTranslate: setTranslate,
      setTransition: setTransition,
      recreateShadows: recreateShadows,
      getEffectParams: function getEffectParams() {
        return swiper.params.cubeEffect;
      },
      perspective: function perspective() {
        return true;
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true
        };
      }
    });
  }
  function createShadow(params, slideEl, side) {
    var shadowClass = "swiper-slide-shadow".concat(side ? "-".concat(side) : '');
    var shadowContainer = getSlideTransformEl(slideEl);
    var shadowEl = shadowContainer.querySelector(".".concat(shadowClass));
    if (!shadowEl) {
      shadowEl = createElement('div', "swiper-slide-shadow".concat(side ? "-".concat(side) : ''));
      shadowContainer.append(shadowEl);
    }
    return shadowEl;
  }
  function EffectFlip(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
    extendParams({
      flipEffect: {
        slideShadows: true,
        limitRotation: true
      }
    });
    var createSlideShadows = function createSlideShadows(slideEl, progress, params) {
      var shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
      var shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
      if (!shadowBefore) {
        shadowBefore = createShadow(params, slideEl, swiper.isHorizontal() ? 'left' : 'top');
      }
      if (!shadowAfter) {
        shadowAfter = createShadow(params, slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
      }
      if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
      if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    var recreateShadows = function recreateShadows() {
      // Set shadows
      var params = swiper.params.flipEffect;
      swiper.slides.forEach(function (slideEl) {
        var progress = slideEl.progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min(slideEl.progress, 1), -1);
        }
        createSlideShadows(slideEl, progress, params);
      });
    };
    var setTranslate = function setTranslate() {
      var slides = swiper.slides,
        rtl = swiper.rtlTranslate;
      var params = swiper.params.flipEffect;
      for (var i = 0; i < slides.length; i += 1) {
        var slideEl = slides[i];
        var progress = slideEl.progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min(slideEl.progress, 1), -1);
        }
        var offset = slideEl.swiperSlideOffset;
        var rotate = -180 * progress;
        var rotateY = rotate;
        var rotateX = 0;
        var tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }
        slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
        if (params.slideShadows) {
          createSlideShadows(slideEl, progress, params);
        }
        var transform = "translate3d(".concat(tx, "px, ").concat(ty, "px, 0px) rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)");
        var targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
      }
    };
    var setTransition = function setTransition(duration) {
      var transformElements = swiper.slides.map(function (slideEl) {
        return getSlideTransformEl(slideEl);
      });
      transformElements.forEach(function (el) {
        el.style.transitionDuration = "".concat(duration, "ms");
        el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(function (shadowEl) {
          shadowEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
      effectVirtualTransitionEnd({
        swiper: swiper,
        duration: duration,
        transformElements: transformElements
      });
    };
    effectInit({
      effect: 'flip',
      swiper: swiper,
      on: on,
      setTranslate: setTranslate,
      setTransition: setTransition,
      recreateShadows: recreateShadows,
      getEffectParams: function getEffectParams() {
        return swiper.params.flipEffect;
      },
      perspective: function perspective() {
        return true;
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: !swiper.params.cssMode
        };
      }
    });
  }
  function EffectCoverflow(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
    extendParams({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: true
      }
    });
    var setTranslate = function setTranslate() {
      var swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        slides = swiper.slides,
        slidesSizesGrid = swiper.slidesSizesGrid;
      var params = swiper.params.coverflowEffect;
      var isHorizontal = swiper.isHorizontal();
      var transform = swiper.translate;
      var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
      var rotate = isHorizontal ? params.rotate : -params.rotate;
      var translate = params.depth;
      // Each slide offset from center
      for (var i = 0, length = slides.length; i < length; i += 1) {
        var slideEl = slides[i];
        var slideSize = slidesSizesGrid[i];
        var slideOffset = slideEl.swiperSlideOffset;
        var centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
        var offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        var translateZ = -translate * Math.abs(offsetMultiplier);
        var stretch = params.stretch;
        // Allow percentage to make a relative stretch for responsive sliders
        if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
          stretch = parseFloat(params.stretch) / 100 * slideSize;
        }
        var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
        var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
        var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

        // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) translateX = 0;
        if (Math.abs(translateY) < 0.001) translateY = 0;
        if (Math.abs(translateZ) < 0.001) translateZ = 0;
        if (Math.abs(rotateY) < 0.001) rotateY = 0;
        if (Math.abs(rotateX) < 0.001) rotateX = 0;
        if (Math.abs(scale) < 0.001) scale = 0;
        var slideTransform = "translate3d(".concat(translateX, "px,").concat(translateY, "px,").concat(translateZ, "px)  rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg) scale(").concat(scale, ")");
        var targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = slideTransform;
        slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          var shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
          var shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
          if (!shadowBeforeEl) {
            shadowBeforeEl = createShadow(params, slideEl, isHorizontal ? 'left' : 'top');
          }
          if (!shadowAfterEl) {
            shadowAfterEl = createShadow(params, slideEl, isHorizontal ? 'right' : 'bottom');
          }
          if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
          if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
        }
      }
    };
    var setTransition = function setTransition(duration) {
      var transformElements = swiper.slides.map(function (slideEl) {
        return getSlideTransformEl(slideEl);
      });
      transformElements.forEach(function (el) {
        el.style.transitionDuration = "".concat(duration, "ms");
        el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(function (shadowEl) {
          shadowEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
    };
    effectInit({
      effect: 'coverflow',
      swiper: swiper,
      on: on,
      setTranslate: setTranslate,
      setTransition: setTransition,
      perspective: function perspective() {
        return true;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: true
        };
      }
    });
  }
  function EffectCreative(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
    extendParams({
      creativeEffect: {
        limitProgress: 1,
        shadowPerProgress: false,
        progressMultiplier: 1,
        perspective: true,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        }
      }
    });
    var getTranslateValue = function getTranslateValue(value) {
      if (typeof value === 'string') return value;
      return "".concat(value, "px");
    };
    var setTranslate = function setTranslate() {
      var slides = swiper.slides,
        wrapperEl = swiper.wrapperEl,
        slidesSizesGrid = swiper.slidesSizesGrid;
      var params = swiper.params.creativeEffect;
      var multiplier = params.progressMultiplier;
      var isCenteredSlides = swiper.params.centeredSlides;
      if (isCenteredSlides) {
        var margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
        wrapperEl.style.transform = "translateX(calc(50% - ".concat(margin, "px))");
      }
      var _loop = function _loop() {
        var slideEl = slides[i];
        var slideProgress = slideEl.progress;
        var progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
        var originalProgress = progress;
        if (!isCenteredSlides) {
          originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
        }
        var offset = slideEl.swiperSlideOffset;
        var t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
        var r = [0, 0, 0];
        var custom = false;
        if (!swiper.isHorizontal()) {
          t[1] = t[0];
          t[0] = 0;
        }
        var data = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        if (progress < 0) {
          data = params.next;
          custom = true;
        } else if (progress > 0) {
          data = params.prev;
          custom = true;
        }
        // set translate
        t.forEach(function (value, index) {
          t[index] = "calc(".concat(value, "px + (").concat(getTranslateValue(data.translate[index]), " * ").concat(Math.abs(progress * multiplier), "))");
        });
        // set rotates
        r.forEach(function (value, index) {
          r[index] = data.rotate[index] * Math.abs(progress * multiplier);
        });
        slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
        var translateString = t.join(', ');
        var rotateString = "rotateX(".concat(r[0], "deg) rotateY(").concat(r[1], "deg) rotateZ(").concat(r[2], "deg)");
        var scaleString = originalProgress < 0 ? "scale(".concat(1 + (1 - data.scale) * originalProgress * multiplier, ")") : "scale(".concat(1 - (1 - data.scale) * originalProgress * multiplier, ")");
        var opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
        var transform = "translate3d(".concat(translateString, ") ").concat(rotateString, " ").concat(scaleString);

        // Set shadows
        if (custom && data.shadow || !custom) {
          var shadowEl = slideEl.querySelector('.swiper-slide-shadow');
          if (!shadowEl && data.shadow) {
            shadowEl = createShadow(params, slideEl);
          }
          if (shadowEl) {
            var shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
            shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
          }
        }
        var targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
        targetEl.style.opacity = opacityString;
        if (data.origin) {
          targetEl.style.transformOrigin = data.origin;
        }
      };
      for (var i = 0; i < slides.length; i += 1) {
        _loop();
      }
    };
    var setTransition = function setTransition(duration) {
      var transformElements = swiper.slides.map(function (slideEl) {
        return getSlideTransformEl(slideEl);
      });
      transformElements.forEach(function (el) {
        el.style.transitionDuration = "".concat(duration, "ms");
        el.querySelectorAll('.swiper-slide-shadow').forEach(function (shadowEl) {
          shadowEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
      effectVirtualTransitionEnd({
        swiper: swiper,
        duration: duration,
        transformElements: transformElements,
        allSlides: true
      });
    };
    effectInit({
      effect: 'creative',
      swiper: swiper,
      on: on,
      setTranslate: setTranslate,
      setTransition: setTransition,
      perspective: function perspective() {
        return swiper.params.creativeEffect.perspective;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: true,
          virtualTranslate: !swiper.params.cssMode
        };
      }
    });
  }
  function EffectCards(_ref) {
    var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
    extendParams({
      cardsEffect: {
        slideShadows: true,
        rotate: true,
        perSlideRotate: 2,
        perSlideOffset: 8
      }
    });
    var setTranslate = function setTranslate() {
      var slides = swiper.slides,
        activeIndex = swiper.activeIndex;
      var params = swiper.params.cardsEffect;
      var _swiper$touchEventsDa = swiper.touchEventsData,
        startTranslate = _swiper$touchEventsDa.startTranslate,
        isTouched = _swiper$touchEventsDa.isTouched;
      var currentTranslate = swiper.translate;
      for (var i = 0; i < slides.length; i += 1) {
        var slideEl = slides[i];
        var slideProgress = slideEl.progress;
        var progress = Math.min(Math.max(slideProgress, -4), 4);
        var offset = slideEl.swiperSlideOffset;
        if (swiper.params.centeredSlides && !swiper.params.cssMode) {
          swiper.wrapperEl.style.transform = "translateX(".concat(swiper.minTranslate(), "px)");
        }
        if (swiper.params.centeredSlides && swiper.params.cssMode) {
          offset -= slides[0].swiperSlideOffset;
        }
        var tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
        var tY = 0;
        var tZ = -100 * Math.abs(progress);
        var scale = 1;
        var rotate = -params.perSlideRotate * progress;
        var tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
        var slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
        var isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
        var isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
        if (isSwipeToNext || isSwipeToPrev) {
          var subProgress = Math.pow(1 - Math.abs((Math.abs(progress) - 0.5) / 0.5), 0.5);
          rotate += -28 * progress * subProgress;
          scale += -0.5 * subProgress;
          tXAdd += 96 * subProgress;
          tY = "".concat(-25 * subProgress * Math.abs(progress), "%");
        }
        if (progress < 0) {
          // next
          tX = "calc(".concat(tX, "px + (").concat(tXAdd * Math.abs(progress), "%))");
        } else if (progress > 0) {
          // prev
          tX = "calc(".concat(tX, "px + (-").concat(tXAdd * Math.abs(progress), "%))");
        } else {
          tX = "".concat(tX, "px");
        }
        if (!swiper.isHorizontal()) {
          var prevY = tY;
          tY = tX;
          tX = prevY;
        }
        var scaleString = progress < 0 ? "".concat(1 + (1 - scale) * progress) : "".concat(1 - (1 - scale) * progress);
        var transform = "\n        translate3d(".concat(tX, ", ").concat(tY, ", ").concat(tZ, "px)\n        rotateZ(").concat(params.rotate ? rotate : 0, "deg)\n        scale(").concat(scaleString, ")\n      ");
        if (params.slideShadows) {
          // Set shadows
          var shadowEl = slideEl.querySelector('.swiper-slide-shadow');
          if (!shadowEl) {
            shadowEl = createShadow(params, slideEl);
          }
          if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
        }
        slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
        var targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
      }
    };
    var setTransition = function setTransition(duration) {
      var transformElements = swiper.slides.map(function (slideEl) {
        return getSlideTransformEl(slideEl);
      });
      transformElements.forEach(function (el) {
        el.style.transitionDuration = "".concat(duration, "ms");
        el.querySelectorAll('.swiper-slide-shadow').forEach(function (shadowEl) {
          shadowEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
      effectVirtualTransitionEnd({
        swiper: swiper,
        duration: duration,
        transformElements: transformElements
      });
    };
    effectInit({
      effect: 'cards',
      swiper: swiper,
      on: on,
      setTranslate: setTranslate,
      setTransition: setTransition,
      perspective: function perspective() {
        return true;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: true,
          virtualTranslate: !swiper.params.cssMode
        };
      }
    });
  }

  // Swiper Class
  var modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
  Swiper.use(modules);
  return Swiper;
});
;// CONCATENATED MODULE: ./src/scripts/home.js


/* ---------- **********  COMMON  ********** ---------- */
{
  var a = Array.from(document.querySelectorAll("a:not(.in-video--a__VIDEOCAPT)"));
  a.forEach(function (v, i, ar) {
    ar[i].addEventListener("click", function (e) {
      e.preventDefault();
    });
  });
}

/* ---------- **********  HEADER  ********** ---------- */

{
  //изменение: 
  //1) фона навигационной панели и
  //2) высоты заднего фона шапки мобильного меню
  //при прокрутке

  var header = document.querySelector(".header");
  var nav = document.querySelector(".header--nav");
  var divBack = document.querySelector(".header--div__BACK");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("header__blur");
      nav.classList.add("header--nav__blur");
      divBack.classList.add("header__scroll");
    } else {
      header.classList.remove("header__blur");
      nav.classList.remove("header--nav__blur");
      divBack.classList.remove("header__scroll");
    }
  });

  //появление мобильного меню и svg-анимация кнопки-бургера

  var body = document.querySelector("body");
  var ul = document.querySelector(".header--ul");
  var buttonBurger = document.querySelector(".header--button__BURGER");
  var line1 = document.querySelector(".header--line:first-of-type");
  var line2 = document.querySelector(".header--line:nth-of-type(2)");
  var line3 = document.querySelector(".header--line:last-of-type");
  buttonBurger.addEventListener("click", function () {
    body.classList.toggle("body__fixed");
    ul.classList.toggle("header__open");
    divBack.classList.toggle("header__backopen");
    line1.classList.toggle("line1");
    line2.classList.toggle("line2");
    line3.classList.toggle("line3");
  });

  //появление подменю

  var imgVect = Array.from(document.querySelectorAll(".header--img__VECT"));
  var ulSub = Array.from(document.querySelectorAll(".header--ul__SUB"));
  imgVect.forEach(function (v, i, a) {
    a[i].addEventListener("click", function () {
      imgVect[i].classList.toggle("header__rotate");
      if (i !== 1) {
        ulSub[i].classList.toggle("header__subopen");
      } else {
        ulSub[i].classList.toggle("header__subopen2");
      }
    });
  });
}

/* ---------- **********  CHOOSE  ********** ---------- */

{
  //открытие скрытого текста

  var head = Array.from(document.querySelectorAll(".in-choose--div__HEAD"));
  var imgArr = Array.from(document.querySelectorAll(".in-choose--img__ARR"));
  var pBody = Array.from(document.querySelectorAll(".in-choose--p__BODY"));
  head.forEach(function (v, i, a) {
    a[i].addEventListener("click", function () {
      imgArr[i].classList.toggle("in-choose-transform");
      pBody[i].classList.toggle("in-choose-open");
    });
  });
}

/* ---------- **********  TESTIMONIAL  ********** ---------- */

{
  //выбор высказывания человека по клику на аватарке

  var testimonial = document.querySelector(".in-testimonial");
  var clients = Array.from(document.querySelectorAll(".in-testimonial--div__CLIENT"));
  var home_text = Array.from(document.querySelectorAll(".in-testimonial--div__TEXT"));
  clients.forEach(function (v, i, a) {
    a[i].addEventListener("click", function () {
      a[i].classList.add("in-testimonial--div__CLIENT_SELECTED");
      home_text[i].classList.add("in-testimonial--div__TEXT_VISIBLE");
      a.filter(function (v1, i1, a1) {
        return a1[i1] != a[i];
      }).forEach(function (v2, i2, a2) {
        a2[i2].classList.remove("in-testimonial--div__CLIENT_SELECTED");
      });
      home_text.filter(function (v1, i1, a1) {
        return a1[i1] != home_text[i];
      }).forEach(function (v2, i2, a2) {
        a2[i2].classList.remove("in-testimonial--div__TEXT_VISIBLE");
      });
    });
  });

  //закрытие любого окна с высказыванием по клику на пустой области

  testimonial.addEventListener("click", function (e) {
    var targs = e.composedPath();
    for (var _i = 0, _clients = clients; _i < _clients.length; _i++) {
      var v = _clients[_i];
      if (targs.includes(v)) return;
    }
    clients.forEach(function (v1, i1, a1) {
      a1[i1].classList.remove("in-testimonial--div__CLIENT_SELECTED");
    });
    home_text.forEach(function (v2, i2, a2) {
      a2[i2].classList.remove("in-testimonial--div__TEXT_VISIBLE");
    });
  });
}

/* ---------- **********  ARTICLES  ********** ---------- */

{
  //слайдер

  var swiper = new Swiper('.in-articles--div__SWIPER', {
    loop: true,
    navigation: {
      nextEl: '.in-articles--button__NEXT'
    },
    pagination: {
      el: '.in-articles--div__PAGINATION',
      type: 'bullets',
      clickable: true
    }
  });
}
;// CONCATENATED MODULE: ./src/main.js






/******/ })()
;