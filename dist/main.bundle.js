/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html, body {\r\n    height: 100%;\r\n    margin: 0;\r\n    font-family: Arial, sans-serif;\r\n}\r\n\r\n#Container {\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    grid-template-columns: auto 1fr;\r\n    width: 100%;\r\n    margin: auto;\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#ListsContainer {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: auto 1fr;\r\n    width: 307px;\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    background-color: #2E3B4E; /* Dark blue */\r\n    color: #FFFFFF; /* White text */\r\n}\r\n\r\n#ItemsContainer {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: auto 1fr;\r\n    width: 100%;\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    background-color: #2B4F68;\r\n    color: white; /* Dark gray text */\r\n}\r\n\r\n#ItemDisplay {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 10px;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: #B0C4DE;\r\n}\r\n\r\n#ListsDisplay {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 10px;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: #324A5F; /* Slightly lighter dark blue */\r\n    align-items: center;\r\n    font-size: 10px;\r\n}\r\n\r\n/* Custom Scrollbar Styles */\r\n::-webkit-scrollbar {\r\n    width: 12px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: #F5F5F5; /* Light gray */\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #2E3B4E; /* Dark blue */\r\n    border-radius: 6px;\r\n    border: 3px solid #F5F5F5; /* Light gray */\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background-color: #1D2735; /* Darker blue */\r\n}\r\n\r\n.form-container input[type=\"text\"] {\r\n    width: 100%;\r\n    border: 2px solid #ccc;\r\n    border-radius: 5px;\r\n    font-size: 16px;\r\n    transition: border-color 0.3s;\r\n    padding: 8px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-container input[type=\"text\"]:focus {\r\n    border-color: #2E3B4E; /* Dark blue */\r\n    outline: none;\r\n}\r\n\r\n.form-container button {\r\n    padding: 10px 20px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s, transform 0.3s;\r\n    width: 100%;\r\n}\r\n\r\n#AddItem:hover {\r\n    background-color: #cea419; /* Hover color */\r\n    transform: scale(1.05);\r\n}\r\n\r\n#AddItem{\r\n    background-color: #4CAF50;\r\n    color: #dfffd2;\r\n}\r\n\r\n#AddList:hover {\r\n    background-color: #cea419; /* Hover color */\r\n    transform: scale(1.05);\r\n}\r\n\r\n#AddList{\r\n    background-color: #FF5252;\r\n    color: #FFCDD2;\r\n}\r\n\r\n.TodoList{\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    width: 100%;\r\n    height: 100px;\r\n    background-color: #6C8893;\r\n}\r\n\r\n.TodoList > :first-child {\r\n    align-self: center; \r\n}\r\n\r\n.TodoList > :nth-child(2) {\r\n    align-self: center; \r\n}\r\n\r\n.TodoList > :nth-child(3) {\r\n    align-self: center; \r\n}\r\n\r\n.form-container label {\r\n    display: block;\r\n    font-size: 18px;\r\n    color: #333;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n/* Firefox scrollbar styles */\r\n* {\r\n    scrollbar-width: thin;\r\n    scrollbar-color: #2E3B4E #F5F5F5;\r\n}\r\n\r\n.ConfigureListButton {\r\n    display: inline-block;\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: #7FA5C3;\r\n    color: white;\r\n    text-align: center;\r\n    line-height: 100px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    border: none;\r\n    cursor: pointer;\r\n    perspective: 1000px;\r\n    transition: background-color 0.3s, transform 0.3s;\r\n    font-size: 16px;\r\n}\r\n\r\n.DeleteButton {\r\n    display: inline-block;\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: #c37f7f;\r\n    color: white;\r\n    text-align: center;\r\n    line-height: 100px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    border: none;\r\n    cursor: pointer;\r\n    perspective: 1000px;\r\n    transition: background-color 0.3s, transform 0.3s;\r\n    font-size: 16px;\r\n}\r\n\r\n.DeleteButton:hover {\r\n    background-color: #cea419; /* Hover color */\r\n    transform: scale(1.05);\r\n}\r\n\r\n.ConfigureListButton:hover {\r\n    background-color: #cea419; /* Hover color */\r\n    transform: scale(1.05);\r\n}\r\n\r\n.modal::backdrop{\r\n    background-color: rgba(197, 222, 242, 0.8);\r\n}\r\n\r\n\r\n.smallText{\r\n    font-size: small;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/LocalStorage.js":
/*!*****************************!*\
  !*** ./src/LocalStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddProperties: () => (/* binding */ AddProperties),\n/* harmony export */   CheckIfDuplicate: () => (/* binding */ CheckIfDuplicate),\n/* harmony export */   CreateLocalStorageTodoList: () => (/* binding */ CreateLocalStorageTodoList),\n/* harmony export */   DeleteTodoList: () => (/* binding */ DeleteTodoList),\n/* harmony export */   ReturnObjectPriority: () => (/* binding */ ReturnObjectPriority),\n/* harmony export */   printLocalStorage: () => (/* binding */ printLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _barrel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barrel */ \"./src/barrel.js\");\n\r\n\r\n\r\n// TODO: OTHER ATTRIBUTE CAN BE ADDED ON THE SETTINGS\r\nfunction CreateLocalStorageTodoList(name){\r\n    let TodoListObject = new Object();\r\n    TodoListObject.TodoArray = [];\r\n    TodoListObject.dueDate = \"Sample Date\";\r\n    TodoListObject.description = \"Sample Description\";\r\n    TodoListObject.priority = \"low\";\r\n\r\n    localStorage.setItem(name, JSON.stringify(TodoListObject));\r\n    console.log(`Successfully stored ${name}`);\r\n\r\n    (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.CreateTodoList)(name); // Adds the new list (instead of resetting all)\r\n}\r\n\r\nfunction DeleteTodoList(name){\r\n    localStorage.removeItem(name);\r\n}\r\n\r\nfunction printLocalStorage() {\r\n    for (let i = 0; i < localStorage.length; i++) {\r\n        let key = localStorage.key(i);\r\n        let value = localStorage.getItem(key);\r\n        console.log(`Key: ${key}, Value: ${value}`);\r\n    }\r\n}\r\n\r\nfunction CheckIfDuplicate(name){\r\n    if (localStorage.getItem(name) === null){\r\n        return false\r\n    } else {return true}\r\n}\r\n\r\nfunction AddProperties(ListName, NewDueDate, NewDescription, NewPriority){\r\n    let List = JSON.parse(localStorage.getItem(ListName));\r\n\r\n    if (!(0,_barrel__WEBPACK_IMPORTED_MODULE_0__.IsEmpty)(NewDueDate)){List.dueDate = NewDueDate;}\r\n    if (!(0,_barrel__WEBPACK_IMPORTED_MODULE_0__.IsEmpty)(NewDescription)){List.description = NewDescription;}\r\n    if (NewPriority !== \"Empty\"){List.priority = NewPriority}\r\n\r\n    localStorage.setItem(ListName, JSON.stringify(List));\r\n}\r\n\r\nfunction ReturnObjectPriority(ListName){\r\n    return JSON.parse(localStorage.getItem(ListName)).priority;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/LocalStorage.js?");

/***/ }),

/***/ "./src/barrel.js":
/*!***********************!*\
  !*** ./src/barrel.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddProperties: () => (/* reexport safe */ _LocalStorage__WEBPACK_IMPORTED_MODULE_2__.AddProperties),\n/* harmony export */   CheckIfDuplicate: () => (/* reexport safe */ _LocalStorage__WEBPACK_IMPORTED_MODULE_2__.CheckIfDuplicate),\n/* harmony export */   ClearConfigInputs: () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_1__.ClearConfigInputs),\n/* harmony export */   ClearInput: () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_1__.ClearInput),\n/* harmony export */   CreateLocalStorageTodoList: () => (/* reexport safe */ _LocalStorage__WEBPACK_IMPORTED_MODULE_2__.CreateLocalStorageTodoList),\n/* harmony export */   CreateTodoList: () => (/* reexport safe */ _htmlGenerator_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodoList),\n/* harmony export */   DeleteTodoList: () => (/* reexport safe */ _LocalStorage__WEBPACK_IMPORTED_MODULE_2__.DeleteTodoList),\n/* harmony export */   GenerateAllTodoList: () => (/* reexport safe */ _htmlGenerator_js__WEBPACK_IMPORTED_MODULE_0__.GenerateAllTodoList),\n/* harmony export */   IsEmpty: () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_1__.IsEmpty),\n/* harmony export */   ListSelected: () => (/* reexport safe */ _main__WEBPACK_IMPORTED_MODULE_3__.ListSelected),\n/* harmony export */   ListSelectedNull: () => (/* reexport safe */ _main__WEBPACK_IMPORTED_MODULE_3__.ListSelectedNull),\n/* harmony export */   PopUpWarning: () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_1__.PopUpWarning),\n/* harmony export */   ReturnObjectPriority: () => (/* reexport safe */ _LocalStorage__WEBPACK_IMPORTED_MODULE_2__.ReturnObjectPriority),\n/* harmony export */   ReturnPriority: () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_1__.ReturnPriority),\n/* harmony export */   ShowConfigModal: () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_1__.ShowConfigModal),\n/* harmony export */   TextLimiter: () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_1__.TextLimiter),\n/* harmony export */   printLocalStorage: () => (/* reexport safe */ _LocalStorage__WEBPACK_IMPORTED_MODULE_2__.printLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _htmlGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlGenerator.js */ \"./src/htmlGenerator.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocalStorage */ \"./src/LocalStorage.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/barrel.js?");

/***/ }),

/***/ "./src/htmlGenerator.js":
/*!******************************!*\
  !*** ./src/htmlGenerator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateTodoList: () => (/* binding */ CreateTodoList),\n/* harmony export */   GenerateAllTodoList: () => (/* binding */ GenerateAllTodoList)\n/* harmony export */ });\n/* harmony import */ var _barrel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barrel */ \"./src/barrel.js\");\n\r\n\r\nconst ListsDisplay = document.getElementById(\"ListsDisplay\");\r\n\r\nfunction CreateTodoList(name) {\r\n    let TodoList = document.createElement(\"div\");\r\n    TodoList.className = \"TodoList\";\r\n    TodoList.appendChild(Object.assign(document.createElement(\"h1\"), { innerText: name , onclick: () => {(0,_barrel__WEBPACK_IMPORTED_MODULE_0__.ListSelected)(name)}})); // Title\r\n\r\n    let configureList = Object.assign(document.createElement(\"button\"), { innerText: \"Configure\", className: \"ConfigureListButton\" });\r\n    configureList.addEventListener(\"click\", () =>{\r\n        console.log(\"Configuration\");\r\n        (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.ShowConfigModal)();\r\n        (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.ListSelected)(name);\r\n    })\r\n\r\n    let DeleteButton = Object.assign(document.createElement(\"button\"), { innerText: \"Delete\", className: \"DeleteButton\" });\r\n    DeleteButton.addEventListener(\"click\", () =>{\r\n        // Removing its existence\r\n        (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.ListSelectedNull)(); // Making selected empty again\r\n        (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.DeleteTodoList)(name)\r\n        TodoList.remove();\r\n    })\r\n\r\n    TodoList.append(configureList);\r\n    TodoList.append(DeleteButton);\r\n    ListsDisplay.appendChild(TodoList);\r\n}\r\n\r\nfunction GenerateAllTodoList(){\r\n    for (let i = 0; i < localStorage.length; i++) {\r\n        // Weird solution to deal with object in local storage causes by extension\r\n        // Sorting by catching an error by trying to parse and get the related attribute\r\n        try {\r\n            let ListName = localStorage.key(i);\r\n            JSON.parse(localStorage.getItem(ListName)).TodoArray; // One line if statement causes error if not found\r\n            CreateTodoList(ListName);\r\n        } catch (error) {}  \r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/htmlGenerator.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListSelected: () => (/* binding */ ListSelected),\n/* harmony export */   ListSelectedNull: () => (/* binding */ ListSelectedNull)\n/* harmony export */ });\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _barrel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barrel */ \"./src/barrel.js\");\n\r\n\r\n\r\n\r\nconst ItemListInput = document.getElementById(\"itemInput\")\r\nlet SelectionIdentifier = document.getElementById(\"SelectionIdentifier\");\r\nlet CurrentlySelectedListName = \"\";\r\nconst dueDateText = document.getElementById(\"DueDateText\");\r\nconst descriptionText = document.getElementById(\"DescriptionText\");\r\n\r\nfunction ButtonFunctionality(){\r\n    // Add Item\r\n    document.getElementById(\"AddItem\").addEventListener(\"click\", () =>{\r\n         // TODO: REMOVE AFTER\r\n        (0,_barrel__WEBPACK_IMPORTED_MODULE_1__.printLocalStorage)();\r\n        if ((0,_barrel__WEBPACK_IMPORTED_MODULE_1__.IsEmpty)(ItemListInput.value)){(0,_barrel__WEBPACK_IMPORTED_MODULE_1__.PopUpWarning)(\"Cannot proceed (No Input For Item Name)\");return} // Check if empty (returns if true)\r\n        else if ((0,_barrel__WEBPACK_IMPORTED_MODULE_1__.TextLimiter)(ItemListInput.value)){(0,_barrel__WEBPACK_IMPORTED_MODULE_1__.PopUpWarning)(\"Input must be 8 letters or lower\"); return} // Check if input is less than 16 letters\r\n\r\n        console.log(\"Good to go\");\r\n        (0,_barrel__WEBPACK_IMPORTED_MODULE_1__.ClearInput)(); // Clear Input\r\n    })\r\n\r\n    // Add List Button\r\n    document.getElementById(\"AddList\").addEventListener(\"click\", () =>{\r\n        if ((0,_barrel__WEBPACK_IMPORTED_MODULE_1__.IsEmpty)(ItemListInput.value)){(0,_barrel__WEBPACK_IMPORTED_MODULE_1__.PopUpWarning)(\"Cannot proceed (No Input For List Name)\");return} // Check if empty (returns if true)\r\n        else if ((0,_barrel__WEBPACK_IMPORTED_MODULE_1__.TextLimiter)(ItemListInput.value)){(0,_barrel__WEBPACK_IMPORTED_MODULE_1__.PopUpWarning)(\"Input must be 8 letters or lower\"); return} // Check if input is less than 16 letters\r\n        else if ((0,_barrel__WEBPACK_IMPORTED_MODULE_1__.CheckIfDuplicate)(ItemListInput.value)){(0,_barrel__WEBPACK_IMPORTED_MODULE_1__.PopUpWarning)(\"Duplicate name found\"); return} // Check if duplicate\r\n\r\n        (0,_barrel__WEBPACK_IMPORTED_MODULE_1__.CreateLocalStorageTodoList)(ItemListInput.value); // Create Object\r\n        (0,_barrel__WEBPACK_IMPORTED_MODULE_1__.ClearInput)(); // Clear Input\r\n    })\r\n\r\n    // Close Modal Warning Button\r\n    document.getElementById(\"ModalCloseButton\").addEventListener(\"click\", () =>{\r\n        document.getElementById(\"ModalDialogWarning\").close();\r\n    })\r\n\r\n    // Close Modal Config Button\r\n    document.getElementById(\"closeButton\").addEventListener(\"click\", () =>{\r\n        document.getElementById(\"ConfigurationModal\").close();\r\n    })\r\n\r\n    // Save Configuration Button\r\n    document.getElementById(\"saveButton\").addEventListener(\"click\", () =>{\r\n        let Description = document.getElementById(\"DescriptionInput\").value;\r\n        let DueDate = document.getElementById(\"DueDate\").value;\r\n        let priority = (0,_barrel__WEBPACK_IMPORTED_MODULE_1__.ReturnPriority)();\r\n        (0,_barrel__WEBPACK_IMPORTED_MODULE_1__.AddProperties)(CurrentlySelectedListName, DueDate, Description, priority);\r\n        document.getElementById(\"ConfigurationModal\").close();\r\n        (0,_barrel__WEBPACK_IMPORTED_MODULE_1__.ClearConfigInputs)(); // Clear inputs of the config modal\r\n        ListSelected(CurrentlySelectedListName); // Update the details\r\n    })\r\n}\r\n\r\nfunction ListSelected(ListName){\r\n    let colorPriority = (0,_barrel__WEBPACK_IMPORTED_MODULE_1__.ReturnObjectPriority)(ListName); // Getting the priority for color coding the text\r\n    CurrentlySelectedListName = ListName; // A way to identify what it selected (used for later)\r\n    SelectionIdentifier.innerText = `Currently Selecting: ${ListName}\\n Priority: ${colorPriority}`;\r\n    dueDateText.innerText = `Due Date: ${JSON.parse(localStorage.getItem(ListName)).dueDate}`;\r\n    descriptionText.innerText = `Description: ${JSON.parse(localStorage.getItem(ListName)).description}`;\r\n\r\n    // Changing its colors depending on the priority\r\n    if (colorPriority === \"low\"){SelectionIdentifier.style.color = \"green\";}\r\n    else if (colorPriority === \"medium\"){SelectionIdentifier.style.color = \"yellow\";}\r\n    else if (colorPriority === \"high\"){SelectionIdentifier.style.color = \"red\";}\r\n}\r\n\r\nfunction ListSelectedNull(){\r\n    CurrentlySelectedListName = \"\";\r\n    SelectionIdentifier.innerText = `Currently Selecting:`;\r\n    dueDateText.innerText = \"Due Date:\";\r\n    descriptionText.innerText = \"Description:\";\r\n    SelectionIdentifier.style.color = \"white\";\r\n}\r\n\r\n\r\nfunction Bootstrap(){\r\n    ButtonFunctionality();\r\n    (0,_barrel__WEBPACK_IMPORTED_MODULE_1__.GenerateAllTodoList)();\r\n}\r\n\r\n\r\nBootstrap();\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ClearConfigInputs: () => (/* binding */ ClearConfigInputs),\n/* harmony export */   ClearInput: () => (/* binding */ ClearInput),\n/* harmony export */   IsEmpty: () => (/* binding */ IsEmpty),\n/* harmony export */   PopUpWarning: () => (/* binding */ PopUpWarning),\n/* harmony export */   ReturnPriority: () => (/* binding */ ReturnPriority),\n/* harmony export */   ShowConfigModal: () => (/* binding */ ShowConfigModal),\n/* harmony export */   TextLimiter: () => (/* binding */ TextLimiter)\n/* harmony export */ });\n\r\nconst DialogModal = document.getElementById(\"ModalDialogWarning\");\r\n\r\nfunction IsEmpty(input) {\r\n    return input.trim() === '';\r\n}\r\n\r\n\r\nfunction PopUpWarning(message){\r\n    document.getElementById(\"ModalWarningText\").innerText = message\r\n    DialogModal.showModal();\r\n}\r\n\r\nfunction TextLimiter(text) {\r\n    return text.length > 8;\r\n}\r\n\r\nfunction ShowConfigModal(){\r\n    document.getElementById(\"ConfigurationModal\").showModal();\r\n}\r\n\r\nfunction ClearInput(){\r\n    document.getElementById(\"itemInput\").value = \"\";\r\n}\r\n\r\nfunction ReturnPriority(){\r\n    let priorityChecked = \"Empty\"\r\n    for (let priority of document.getElementsByName('priority')){\r\n        if (priority.checked) {\r\n            priorityChecked = priority.value;\r\n        }\r\n    }\r\n    return priorityChecked;\r\n}\r\n\r\n// Clear all input in the config modal\r\nfunction ClearConfigInputs(){\r\n    document.getElementById('DescriptionInput').value = '';\r\n    document.getElementById('DueDate').value = '';\r\n    document.querySelectorAll('input[type=\"radio\"]').forEach(input => input.checked = false);\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/utilities.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;