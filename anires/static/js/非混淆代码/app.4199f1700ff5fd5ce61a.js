webpackJsonp([1],{

/***/ 40:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(88)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(96),
  /* scopeId */
  "data-v-647e008b",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(86)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(94),
  /* scopeId */
  "data-v-35c047fd",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(85)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(93),
  /* scopeId */
  "data-v-22ce9519",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(87)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(95),
  /* scopeId */
  "data-v-53c8d54c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_StyleEditor__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_StyleEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_StyleEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ResumeEditor__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ResumeEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_ResumeEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_reset_css__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_reset_css__);









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    StyleEditor: __WEBPACK_IMPORTED_MODULE_3__components_StyleEditor___default.a,
    ResumeEditor: __WEBPACK_IMPORTED_MODULE_4__components_ResumeEditor___default.a
  },
  data: function data() {
    return {
      interval: 40,
      currentStyle: '',
      enableHtml: false,
      fullStyle: ['/*\n* Inspired by http://strml.net/\n* \u5927\u5BB6\u597D\uFF0C\u6211\u662F\u5357\u65B9\u3002\n* \u6211\u6765\u5199\u4E00\u4EFD\u7B80\u5386\uFF01\n*/\n\n/* \u9996\u5148\u7ED9\u6240\u6709\u5143\u7D20\u52A0\u4E0A\u8FC7\u6E21\u6548\u679C */\n* {\n  transition: all .3s;\n}\n/* \u767D\u8272\u80CC\u666F\u592A\u5355\u8C03\u4E86\uFF0C\u6211\u4EEC\u6765\u70B9\u80CC\u666F */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* \u6587\u5B57\u79BB\u8FB9\u6846\u592A\u8FD1\u4E86 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* \u4EE3\u7801\u9AD8\u4EAE */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* \u52A0\u70B9 3D \u6548\u679C\u5457 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* \u63A5\u4E0B\u6765\u6211\u7ED9\u81EA\u5DF1\u51C6\u5907\u4E00\u4E2A\u7F16\u8F91\u5668 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* \u597D\u4E86\uFF0C\u6211\u5F00\u59CB\u5199\u7B80\u5386\u4E86 */\n\n\n', '\n/* \u8FD9\u4E2A\u7B80\u5386\u597D\u50CF\u5DEE\u70B9\u4EC0\u4E48\n * \u5BF9\u4E86\uFF0C\u8FD9\u662F Markdown \u683C\u5F0F\u7684\uFF0C\u6211\u9700\u8981\u53D8\u6210\u5BF9 HR \u66F4\u53CB\u597D\u7684\u683C\u5F0F\n * \u7B80\u5355\uFF0C\u7528\u5F00\u6E90\u5DE5\u5177\u7FFB\u8BD1\u6210 HTML \u5C31\u884C\u4E86\n */\n', '\n/* \u518D\u5BF9 HTML \u52A0\u70B9\u6837\u5F0F */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'\u2022\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],
      currentMarkdown: '',
      fullMarkdown: '\u5357\u65B9\n====\n\n\u5750\u6807\uFF1A\u6E56\u5357\u957F\u6C99\u3002\n\n\u8D44\u6DF1\u8F6F\u4EF6\u5DE5\u7A0B\u5E08\uFF0C\u8D44\u6DF1\u4EA7\u54C1\u7ECF\u7406\uFF0C\u9AD8\u7EA7\u9879\u76EE\u7ECF\u7406\u3002\u73B0\u4E3A\u81EA\u7531\u804C\u4E1A\u3002\n\n[\u4E0B\u8F7D\u79BB\u7EBF\u7B80\u5386](http://www.sitexa.org/anires/static/resume.pdf)\n\n\u6280\u80FD\n====\n\n\u6570\u636E\u5E93\u8BBE\u8BA1\n----\n  - \u7ED3\u6784\u5316\u6570\u636E\u5E93\u8BBE\u8BA1\n  - noSQL\u8BBE\u8BA1\n\n\u540E\u7AEF\u5F00\u53D1\n----\n  - \u7528\u6237\u7BA1\u7406\n  - \u5355\u70B9\u767B\u5F55\n  - \u7B2C\u4E09\u65B9\u767B\u5F55\n  - \u6743\u9650\u7BA1\u7406\n  - \u4EA4\u6613\u7CFB\u7EDF\n  - \u652F\u4ED8\u7CFB\u7EDF\n  - \u793E\u533A\u7CFB\u7EDF\n  - \u535A\u5BA2\u7CFB\u7EDF\n  - \u516C\u4F17\u53F7\u5F00\u53D1\n  - \u5C0F\u7A0B\u5E8F\u5F00\u53D1\n  - API\u63A5\u53E3\u5F00\u53D1\n\n\u524D\u7AEF\u5F00\u53D1\n----\n  - Web\u524D\u7AEF\u5F00\u53D1\n  - \u79FB\u52A8\u7EC8\u7AEF(Native App, Hybrid App)\n\n\u4EA7\u54C1\u8BBE\u8BA1\n----\n  - \u667A\u6167\u65C5\u6E38\u9879\u76EE\n  - \u8FD0\u52A8\u5065\u5EB7\u4E91\u5E73\u53F0\n  - \u793E\u533A\u652F\u6301\u519C\u4E1AO2O\u9879\u76EE\n  - \u7701\u7EA7\u73AF\u5883\u76D1\u63A7\u5E73\u53F0\n  - \u9AD8\u901F\u516C\u8DEF\u5F02\u5730\u5904\u7F5A\u7CFB\u7EDF\n  - \u73AF\u4FDD\u5C40\u529E\u516C\u81EA\u52A8\u5316\u7CFB\u7EDF\n  - \u4FDD\u9669\u516C\u53F8\u6570\u636E\u8FC1\u79FB\u9879\u76EE\n  - \u5564\u9152\u5382\u4F9B\u5E94\u94FE\u9879\u76EE\n  - \u8D27\u8FD0\u4EE3\u7406\u7CFB\u7EDF\n  - \u96C6\u88C5\u7BB1\u7BA1\u7406\u7CFB\u7EDF\n  - \u6EDE\u671F\u8D39\u7BA1\u7406\u9879\u76EE\n\n\u6280\u672F\u53CA\u8BED\u8A00\n----\n  - Java: SpringMVC, SpringCloud, Hibernate, iBatis, spark, sql2o, HikariCP, freemarker, okHttp, retrofit, RxJava\n  - Kotlin: ktor, exposed, anko\n  - Node.js: express, angular, ionic, react, cordova, meteor, electron, axios\n  - Swift: Vapor, ReactiveSwift\n  - Golang: hugo, beego, gorm, sqlx, matcha\n  - Python: tushare, pandas, numpy, matplotlib\n  - DotNet and PHP\n  - DB: SQLServer, Oracle, MySQL/MariaDB, MongoDB, graphQL, redis, memcached\n  - WebServer: apache, nginx, tomcat, netty, jetty\n  - OS: Ubuntu, CentOS, MacOS, Windows\n  - Others: Docker, git, Xmind\uFF0CAxure\n\n\u5DE5\u4F5C\u7ECF\u5386\n====\n\n1. \u6E56\u5357\u878D\u8000\u5065\u5EB7\u7BA1\u7406\u6709\u9650\u516C\u53F8\n2. \u6E56\u5357\u4E09\u82F1\u7279\u65C5\u6E38\u667A\u80FD\u6280\u672F\u6709\u9650\u516C\u53F8\n3. \u5408\u80A5\u84DD\u76FE\u79D1\u6280\u6709\u9650\u516C\u53F8\n4. \u4E0A\u6D77\u6613\u4FDD\u7F51\u7EDC\u6709\u9650\u516C\u53F8\n5. \u53A6\u95E8\u6D77\u73AF\u8BA1\u7B97\u673A\u8F6F\u4EF6\u6709\u9650\u516C\u53F8\n\n\u6559\u80B2\u7ECF\u5386\n====\n\n1. \u534E\u4E1C\u7406\u5DE5\u5927\u5B66 \u73AF\u5883\u5DE5\u7A0B\u5B66\u58EB\n2. \u53A6\u95E8\u5927\u5B66 \u7CFB\u7EDF\u5DE5\u7A0B\u7855\u58EB\n\n\u6587\u7AE0\n====\n\n* [\u6545\u571F\u96BE\u79BB\uFF08\u6211\u7684\u7236\u4EB2\u6BCD\u4EB2\uFF09](https://www.meipian.cn/qacqfbz?uuid=d541c15eef694065bc9d1ac9a07925a2)\n* [\u6CB9\u817B\u817B\u7684\u4E2D\u5E74\uFF08\u5C0F\u8BD7\uFF09](https://www.meipian.cn/wjaz3zh?uuid=ca1cd053b717451da781786de44e66e7)\n* [\u751F\u547D\uFF08\u8001\u56DB\u4EEC\u7684\u877C\u8681\u4EBA\u751F\uFF09](https://www.meipian.cn/vc4pr59?uuid=799c98f5a187405c94c86f7da7788869)\n* [\u5927\u5065\u5EB7\u5546\u4E1A\u6A21\u5F0F](http://www.sitexa.org/technology/%E5%A4%A7%E5%81%A5%E5%BA%B7%E5%95%86%E4%B8%9A%E6%A8%A1%E5%BC%8F.html)\n* [\u793E\u533A\u793E\u4EA4\u5546\u4E1A\u6A21\u578B](http://www.sitexa.org/other/%E7%A4%BE%E5%8C%BA%E7%A4%BE%E4%BA%A4%E5%95%86%E4%B8%9A%E6%A8%A1%E5%9E%8B.html)\n\n\u94FE\u63A5\n====\n\n* [GitHub](https://github.com/sitexa)\n* [\u6280\u672F\u535A\u5BA2](http://www.sitexa.org)\n* [\u5357\u65B9\u65F6\u4EE3](http://www.sitexa.net)\n* [\u795E\u79D8\u6E58\u9102\u897F](http://www.sitexa.cn)\n\n\u8054\u7CFB\u65B9\u5F0F\n====\n\n* \u7535\u8BDD\uFF1A18673107430\n* \u5FAE\u4FE1\uFF1A18673107430\n* \u90AE\u7BB1\uFF1Axnpeng@163.com\n\n\u79BB\u7EBF\u7B80\u5386\n====\n\n[\u4E0B\u8F7D\u7B80\u5386](http://www.sitexa.org/anires/static/resume.pdf)\n\n\u8865\u5145\u8BF4\u660E\n====\n\n* \u8FD9\u4E24\u5929\u6211\u7684\u7B80\u5386\u7A81\u7136\u4F20\u5F00\u4E86\uFF0C\u4E00\u4E9B\u8001\u677F\u8DDF\u6211\u8054\u7CFB\uFF0C\u5F88\u591A\u670B\u53CB\u5173\u5FC3\u6211\uFF0C\u76DB\u60C5\u9080\u8BF7\u6211\u53BB\u9762\u8BD5\uFF0C\u6211\u8868\u793A\u4E07\u5206\u611F\u8C22\uFF01\n\u56E0\u4E3A\u6211\u5B9A\u5C45\u5728\u6E56\u5357\u957F\u6C99\uFF0C\u9996\u5148\u60F3\u5728\u957F\u6C99\u627E\u5DE5\u4F5C\uFF0C\u8981\u662F\u627E\u4E0D\u5230\u5C31\u53BB\u5916\u5730\u627E\u3002\n\n* \u670B\u53CB\u4EEC\u7684\u70ED\u60C5\u8BA9\u6211\u65E0\u5730\u81EA\u5BB9\uFF0C\u6211\u53EA\u662F\u60F3\u627E\u4EFD\u5DE5\u4F5C\u800C\u5DF2\uFF0C\u7B80\u5386\u4E0A\u5199\u4E86\u5F88\u591A\u6280\u672F\uFF0C\u6211\u867D\u7136\u5B66\u8FC7\u505A\u8FC7\uFF0C\u4E5F\u5C31\u662F\u61C2\u4E00\u70B9\u76AE\u6BDB\uFF0C\n\u4E0D\u662F\u4EC0\u4E48\u5927\u725B\u5927\u795E\u5927\u4F6C\u3002\u4E00\u5F53\u627E\u5230\u5DE5\u4F5C\uFF0C\u6211\u5C31\u628A\u7B80\u5386\u4E0B\u7EBF\u4E86\u3002\n'
    };
  },
  created: function created() {
    this.makeResume();
  },


  methods: {
    makeResume: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.progressivelyShowStyle(0);

              case 2:
                _context.next = 4;
                return this.progressivelyShowResume();

              case 4:
                _context.next = 6;
                return this.progressivelyShowStyle(1);

              case 6:
                _context.next = 8;
                return this.showHtml();

              case 8:
                _context.next = 10;
                return this.progressivelyShowStyle(2);

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function makeResume() {
        return _ref.apply(this, arguments);
      }

      return makeResume;
    }(),
    showHtml: function showHtml() {
      var _this = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        _this.enableHtml = true;
        resolve();
      });
    },
    progressivelyShowStyle: function progressivelyShowStyle(n) {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var interval = _this2.interval;
        var showStyle = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
          var _this3 = this;

          var style, length, prefixLength, l, char;
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  style = this.fullStyle[n];

                  if (style) {
                    _context2.next = 3;
                    break;
                  }

                  return _context2.abrupt('return');

                case 3:
                  length = this.fullStyle.filter(function (_, index) {
                    return index <= n;
                  }).map(function (item) {
                    return item.length;
                  }).reduce(function (p, c) {
                    return p + c;
                  }, 0);
                  prefixLength = length - style.length;

                  if (this.currentStyle.length < length) {
                    l = this.currentStyle.length - prefixLength;
                    char = style.substring(l, l + 1) || ' ';

                    this.currentStyle += char;
                    if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                      this.$nextTick(function () {
                        _this3.$refs.styleEditor.goBottom();
                      });
                    }
                    setTimeout(showStyle, interval);
                  } else {
                    resolve();
                  }

                case 6:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        })).bind(_this2);
        showStyle();
      });
    },
    progressivelyShowResume: function progressivelyShowResume() {
      var _this4 = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var length = _this4.fullMarkdown.length;
        var interval = _this4.interval;
        var showResume = function showResume() {
          if (_this4.currentMarkdown.length < length) {
            _this4.currentMarkdown = _this4.fullMarkdown.substring(0, _this4.currentMarkdown.length + 1);
            var lastChar = _this4.currentMarkdown[_this4.currentMarkdown.length - 1];
            var prevChar = _this4.currentMarkdown[_this4.currentMarkdown.length - 2];
            if (prevChar === '\n' && _this4.$refs.resumeEditor) {
              _this4.$nextTick(function () {
                return _this4.$refs.resumeEditor.goBottom();
              });
            }
            setTimeout(showResume, interval);
          } else {
            resolve();
          }
        };
        showResume();
      });
    }
  }
});

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_StyleEditor__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_StyleEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_StyleEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ResumeEditor__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ResumeEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_ResumeEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_reset_css__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_reset_css__);









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    StyleEditor: __WEBPACK_IMPORTED_MODULE_3__components_StyleEditor___default.a,
    ResumeEditor: __WEBPACK_IMPORTED_MODULE_4__components_ResumeEditor___default.a
  },
  data: function data() {
    return {
      interval: 40,
      currentStyle: '',
      enableHtml: false,
      fullStyle: ['/*\n* Inspired by http://strml.net/\n* \u5927\u5BB6\u597D\uFF0C\u6211\u662F\u5357\u65B9\u3002\n* \u6211\u6765\u5199\u4E00\u4EFD\u7B80\u5386\uFF01\n*/\n\n/* \u9996\u5148\u7ED9\u6240\u6709\u5143\u7D20\u52A0\u4E0A\u8FC7\u6E21\u6548\u679C */\n* {\n  transition: all .3s;\n}\n/* \u767D\u8272\u80CC\u666F\u592A\u5355\u8C03\u4E86\uFF0C\u6211\u4EEC\u6765\u70B9\u80CC\u666F */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* \u6587\u5B57\u79BB\u8FB9\u6846\u592A\u8FD1\u4E86 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* \u592A\u9AD8\u4E86 */\n.styleEditor {\n  height: 45vh;\n}\n/* \u4EE3\u7801\u9AD8\u4EAE */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* \u52A0\u70B9 3D \u6548\u679C\u5457 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* \u63A5\u4E0B\u6765\u6211\u7ED9\u81EA\u5DF1\u51C6\u5907\u4E00\u4E2A\u7F16\u8F91\u5668 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* \u597D\u4E86\uFF0C\u6211\u5F00\u59CB\u5199\u7B80\u5386\u4E86 */\n\n\n', '\n/* \u8FD9\u4E2A\u7B80\u5386\u597D\u50CF\u5DEE\u70B9\u4EC0\u4E48\n * \u5BF9\u4E86\uFF0C\u8FD9\u662F Markdown \u683C\u5F0F\u7684\uFF0C\u6211\u9700\u8981\u53D8\u6210\u5BF9 HR \u66F4\u53CB\u597D\u7684\u683C\u5F0F\n * \u7B80\u5355\uFF0C\u7528\u5F00\u6E90\u5DE5\u5177\u7FFB\u8BD1\u6210 HTML \u5C31\u884C\u4E86\n */\n', '\n/* \u518D\u5BF9 HTML \u52A0\u70B9\u6837\u5F0F */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'\u2022\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],
      currentMarkdown: '',
      fullMarkdown: '\u5357\u65B9\n====\n\u5750\u6807\uFF1A\u6E56\u5357\u957F\u6C99\u3002\n\n\u8D44\u6DF1\u8F6F\u4EF6\u5DE5\u7A0B\u5E08\uFF0C\u8D44\u6DF1\u4EA7\u54C1\u7ECF\u7406\uFF0C\u9AD8\u7EA7\u9879\u76EE\u7ECF\u7406\u3002\u73B0\u4E3A\u81EA\u7531\u804C\u4E1A\u3002\n\n[\u4E0B\u8F7D\u79BB\u7EBF\u7B80\u5386](http://www.sitexa.org/anires/static/resume.pdf)\n\n\u6280\u80FD\n====\n\n\u6570\u636E\u5E93\u8BBE\u8BA1\n----\n  - \u7ED3\u6784\u5316\u6570\u636E\u5E93\u8BBE\u8BA1\n  - noSQL\u8BBE\u8BA1\n\n\u540E\u7AEF\u5F00\u53D1\n----\n  - \u7528\u6237\u7BA1\u7406\n  - \u5355\u70B9\u767B\u5F55\n  - \u7B2C\u4E09\u65B9\u767B\u5F55\n  - \u6743\u9650\u7BA1\u7406\n  - \u4EA4\u6613\u7CFB\u7EDF\n  - \u652F\u4ED8\u7CFB\u7EDF\n  - \u793E\u533A\u7CFB\u7EDF\n  - \u535A\u5BA2\u7CFB\u7EDF\n  - \u516C\u4F17\u53F7\u5F00\u53D1\n  - \u5C0F\u7A0B\u5E8F\u5F00\u53D1\n  - API\u63A5\u53E3\n\n\u524D\u7AEF\u5F00\u53D1\n----\n  - Web\u524D\u7AEF\u5F00\u53D1\n  - \u79FB\u52A8\u7EC8\u7AEF(Native App, Hybrid App)\n\n\u4EA7\u54C1\u8BBE\u8BA1\n----\n  - \u667A\u6167\u65C5\u6E38\u9879\u76EE\n  - \u8FD0\u52A8\u5065\u5EB7\u4E91\u5E73\u53F0\n  - \u793E\u533A\u652F\u6301\u519C\u4E1AO2O\u9879\u76EE\n  - \u7701\u7EA7\u73AF\u5883\u76D1\u63A7\u5E73\u53F0\n  - \u9AD8\u901F\u516C\u8DEF\u5F02\u5730\u5904\u7F5A\u7CFB\u7EDF\n  - \u73AF\u4FDD\u5C40\u529E\u516C\u81EA\u52A8\u5316\u7CFB\u7EDF\n  - \u4FDD\u9669\u516C\u53F8\u6570\u636E\u8FC1\u79FB\u9879\u76EE\n  - \u5564\u9152\u5382\u4F9B\u5E94\u94FE\u9879\u76EE\n  - \u8D27\u8FD0\u4EE3\u7406\u7CFB\u7EDF\n  - \u96C6\u88C5\u7BB1\u7BA1\u7406\u7CFB\u7EDF\n  - \u6EDE\u671F\u8D39\u7BA1\u7406\u9879\u76EE\n\n\u6280\u672F\u53CA\u8BED\u8A00\n----\n  - Java: SpringMVC, SpringCloud, Hibernate, iBatis, spark, sql2o, HikariCP, freemarker, okHttp, retrofit, RxJava\n  - Kotlin: ktor, exposed, anko\n  - Node.js: express, angular, ionic, react, cordova, meteor, electron, axios\n  - Swift: Vapor, ReactiveSwift\n  - Golang: hugo, beego, gorm, sqlx, matcha\n  - Python: tushare, pandas, numpy, matplotlib\n  - DotNet and PHP\n  - DB: SQLServer, Oracle, MySQL/MariaDB, MongoDB, graphQL, redis, memcached\n  - WebServer: apache, nginx, tomcat, netty, jetty\n  - OS: Ubuntu, CentOS, MacOS, Windows\n  - Others: Docker, git, Xmind\uFF0CAxure\n\n\u5DE5\u4F5C\u7ECF\u5386\n====\n\n1. \u6E56\u5357\u878D\u8000\u5065\u5EB7\u7BA1\u7406\u6709\u9650\u516C\u53F8\n2. \u6E56\u5357\u4E09\u82F1\u7279\u65C5\u6E38\u667A\u80FD\u6280\u672F\u6709\u9650\u516C\u53F8\n3. \u5408\u80A5\u84DD\u76FE\u79D1\u6280\u6709\u9650\u516C\u53F8\n4. \u4E0A\u6D77\u6613\u4FDD\u7F51\u7EDC\u6709\u9650\u516C\u53F8\n5. \u53A6\u95E8\u6D77\u73AF\u8BA1\u7B97\u673A\u8F6F\u4EF6\u6709\u9650\u516C\u53F8\n\n\u6559\u80B2\u7ECF\u5386\n====\n\n1. \u534E\u4E1C\u7406\u5DE5\u5927\u5B66 \u73AF\u5883\u5DE5\u7A0B\u5B66\u58EB\n2. \u53A6\u95E8\u5927\u5B66 \u7CFB\u7EDF\u5DE5\u7A0B\u7855\u58EB\n\n\u6587\u7AE0\n====\n\n* [\u6545\u571F\u96BE\u79BB\uFF08\u6211\u7684\u7236\u4EB2\u6BCD\u4EB2\uFF09](https://www.meipian.cn/qacqfbz?uuid=d541c15eef694065bc9d1ac9a07925a2)\n* [\u6CB9\u817B\u817B\u7684\u4E2D\u5E74\uFF08\u5C0F\u8BD7\uFF09](https://www.meipian.cn/wjaz3zh?uuid=ca1cd053b717451da781786de44e66e7)\n* [\u751F\u547D\uFF08\u8001\u56DB\u4EEC\u7684\u877C\u8681\u4EBA\u751F\uFF09](https://www.meipian.cn/vc4pr59?uuid=799c98f5a187405c94c86f7da7788869)\n* [\u5927\u5065\u5EB7\u5546\u4E1A\u6A21\u5F0F](http://www.sitexa.org/technology/%E5%A4%A7%E5%81%A5%E5%BA%B7%E5%95%86%E4%B8%9A%E6%A8%A1%E5%BC%8F.html)\n* [\u793E\u533A\u793E\u4EA4\u5546\u4E1A\u6A21\u578B](http://www.sitexa.org/other/%E7%A4%BE%E5%8C%BA%E7%A4%BE%E4%BA%A4%E5%95%86%E4%B8%9A%E6%A8%A1%E5%9E%8B.html)\n\n\u94FE\u63A5\n====\n\n* [GitHub](https://github.com/sitexa)\n* [\u6280\u672F\u535A\u5BA2](http://www.sitexa.org)\n* [\u5357\u65B9\u65F6\u4EE3](http://www.sitexa.net)\n* [\u795E\u79D8\u6E58\u9102\u897F](http://www.sitexa.cn)\n\n\u8054\u7CFB\u65B9\u5F0F\n====\n\n* \u7535\u8BDD\uFF1A18673107430\n* \u5FAE\u4FE1\uFF1A18673107430\n* \u90AE\u7BB1\uFF1Axnpeng@163.com\n\n\u79BB\u7EBF\u7B80\u5386\n====\n\n[\u4E0B\u8F7D\u7B80\u5386](http://www.sitexa.org/anires/static/resume.pdf)\n\n\u8865\u5145\u8BF4\u660E\n====\n\n* \u8FD9\u51E0\u5929\u6211\u7684\u7B80\u5386\u7A81\u7136\u4F20\u5F00\u4E86\uFF0C\u4E00\u4E9B\u8001\u677F\u8DDF\u6211\u8054\u7CFB\uFF0C\u5F88\u591A\u670B\u53CB\u5173\u5FC3\u6211\uFF0C\u76DB\u60C5\u9080\u8BF7\u6211\u53BB\u9762\u8BD5\uFF0C\u6211\u8868\u793A\u4E07\u5206\u611F\u8C22\uFF01\n\u56E0\u4E3A\u6211\u5B9A\u5C45\u5728\u6E56\u5357\u957F\u6C99\uFF0C\u9996\u5148\u60F3\u5728\u957F\u6C99\u627E\u5DE5\u4F5C\uFF0C\u8981\u662F\u627E\u4E0D\u5230\u5C31\u53BB\u5916\u5730\u627E\u3002\n\n* \u670B\u53CB\u4EEC\u7684\u70ED\u60C5\u8BA9\u6211\u65E0\u5730\u81EA\u5BB9\uFF0C\u6211\u53EA\u662F\u60F3\u627E\u4EFD\u5DE5\u4F5C\u800C\u5DF2\uFF0C\u7B80\u5386\u4E0A\u5199\u4E86\u5F88\u591A\u6280\u672F\uFF0C\u6211\u867D\u7136\u5B66\u8FC7\u505A\u8FC7\uFF0C\u4E5F\u5C31\u662F\u61C2\u4E00\u70B9\u76AE\u6BDB\uFF0C\n\u4E0D\u662F\u4EC0\u4E48\u5927\u725B\u5927\u795E\u5927\u4F6C\u3002\u4E00\u5F53\u627E\u5230\u5DE5\u4F5C\uFF0C\u6211\u5C31\u628A\u7B80\u5386\u4E0B\u7EBF\u4E86\u3002\n\n'
    };
  },
  created: function created() {
    this.makeResume();
  },


  methods: {
    makeResume: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.progressivelyShowStyle(0);

              case 2:
                _context.next = 4;
                return this.progressivelyShowResume();

              case 4:
                _context.next = 6;
                return this.progressivelyShowStyle(1);

              case 6:
                _context.next = 8;
                return this.showHtml();

              case 8:
                _context.next = 10;
                return this.progressivelyShowStyle(2);

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function makeResume() {
        return _ref.apply(this, arguments);
      }

      return makeResume;
    }(),
    showHtml: function showHtml() {
      var _this = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        _this.enableHtml = true;
        _this.$nextTick(function () {
          _this.$refs.resumeEditor.goTop();
        });
        resolve();
      });
    },
    progressivelyShowStyle: function progressivelyShowStyle(n) {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var interval = _this2.interval;
        var showStyle = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
          var _this3 = this;

          var style, length, prefixLength, l, char;
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  style = this.fullStyle[n];

                  if (style) {
                    _context2.next = 3;
                    break;
                  }

                  return _context2.abrupt('return');

                case 3:
                  length = this.fullStyle.filter(function (_, index) {
                    return index <= n;
                  }).map(function (item) {
                    return item.length;
                  }).reduce(function (p, c) {
                    return p + c;
                  }, 0);
                  prefixLength = length - style.length;

                  if (this.currentStyle.length < length) {
                    l = this.currentStyle.length - prefixLength;
                    char = style.substring(l, l + 1) || ' ';

                    this.currentStyle += char;
                    if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                      this.$nextTick(function () {
                        _this3.$refs.styleEditor.goBottom();
                      });
                    }
                    setTimeout(showStyle, interval);
                  } else {
                    resolve();
                  }

                case 6:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        })).bind(_this2);
        showStyle();
      });
    },
    progressivelyShowResume: function progressivelyShowResume() {
      var _this4 = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var length = _this4.fullMarkdown.length;
        var interval = _this4.interval;
        var showResume = function showResume() {
          if (_this4.currentMarkdown.length < length) {
            _this4.currentMarkdown = _this4.fullMarkdown.substring(0, _this4.currentMarkdown.length + 1);
            var lastChar = _this4.currentMarkdown[_this4.currentMarkdown.length - 1];
            var prevChar = _this4.currentMarkdown[_this4.currentMarkdown.length - 2];
            if (prevChar === '\n' && _this4.$refs.resumeEditor) {
              _this4.$nextTick(function () {
                return _this4.$refs.resumeEditor.goBottom();
              });
            }
            setTimeout(showResume, interval);
          } else {
            resolve();
          }
        };
        showResume();
      });
    }
  }
});

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_marked__);



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['markdown', 'enableHtml'],
  name: 'ResumeEditor',
  computed: {
    result: function result() {
      return this.enableHtml ? __WEBPACK_IMPORTED_MODULE_0_marked___default()(this.markdown) : this.markdown;
    }
  },
  methods: {
    goBottom: function goBottom() {
      this.$refs.container.scrollTop = 100000;
    },
    goTop: function goTop() {
      this.$refs.container.scrollTop = 0;
    }
  }
});

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prismjs__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Editor',
  props: ['code'],
  computed: {
    highlightedCode: function highlightedCode() {
      return __WEBPACK_IMPORTED_MODULE_0_prismjs___default.a.highlight(this.code, __WEBPACK_IMPORTED_MODULE_0_prismjs___default.a.languages.css);
    },
    codeInStyleTag: function codeInStyleTag() {
      return '<style>' + this.code + '</style>';
    }
  },
  methods: {
    goBottom: function goBottom() {
      this.$refs.container.scrollTop = 100000;
    }
  }
});

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Mobile__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Mobile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Mobile__);




var width = document.documentElement.clientWidth;

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  render: function render(h) {
    return h(width > 500 ? __WEBPACK_IMPORTED_MODULE_1__App___default.a : __WEBPACK_IMPORTED_MODULE_2__Mobile___default.a);
  }
});

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('StyleEditor', {
    ref: "styleEditor",
    attrs: {
      "code": _vm.currentStyle
    }
  }), _vm._v(" "), _c('ResumeEditor', {
    ref: "resumeEditor",
    attrs: {
      "markdown": _vm.currentMarkdown,
      "enableHtml": _vm.enableHtml
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "container",
    staticClass: "styleEditor"
  }, [_c('div', {
    staticClass: "code",
    domProps: {
      "innerHTML": _vm._s(_vm.codeInStyleTag)
    }
  }), _vm._v(" "), _c('pre', {
    domProps: {
      "innerHTML": _vm._s(_vm.highlightedCode)
    }
  })])
},staticRenderFns: []}

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('StyleEditor', {
    ref: "styleEditor",
    attrs: {
      "code": _vm.currentStyle
    }
  }), _vm._v(" "), _c('ResumeEditor', {
    ref: "resumeEditor",
    attrs: {
      "markdown": _vm.currentMarkdown,
      "enableHtml": _vm.enableHtml
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "container",
    staticClass: "resumeEditor",
    class: {
      htmlMode: _vm.enableHtml
    }
  }, [(_vm.enableHtml) ? _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.result)
    }
  }) : _c('pre', [_vm._v(_vm._s(_vm.result))])])
},staticRenderFns: []}

/***/ })

},[50]);


// WEBPACK FOOTER //
// static/js/app.4199f1700ff5fd5ce61a.js