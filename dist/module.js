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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_sort_news_sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/sort/news_sort.js */ \"./src/script/sort/news_sort.js\");\n/* harmony import */ var _script_sort_category_sort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/sort/category_sort.js */ \"./src/script/sort/category_sort.js\");\n/* harmony import */ var _script_search_channel_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/search/channel_search.js */ \"./src/script/search/channel_search.js\");\n/* harmony import */ var _script_sort_findBySort_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script/sort/findBySort.js */ \"./src/script/sort/findBySort.js\");\n\n\n\n\n\n(0,_script_sort_findBySort_js__WEBPACK_IMPORTED_MODULE_3__.findBySort)();\n\n\n//# sourceURL=webpack://webpack-practice/./src/index.js?");

/***/ }),

/***/ "./src/script/component/listOfOption.js":
/*!**********************************************!*\
  !*** ./src/script/component/listOfOption.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listOfOption\": () => (/* binding */ listOfOption)\n/* harmony export */ });\n/* harmony import */ var _handler_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handler/api.js */ \"./src/script/handler/api.js\");\n/* harmony import */ var _utils_getAllData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getAllData.js */ \"./src/script/utils/getAllData.js\");\n\n\nasync function listOfOption(optionType, i = null, addAllValue = false) {\n  return await (0,_handler_api_js__WEBPACK_IMPORTED_MODULE_0__.response)()\n    .then((res) => {\n      if (res.status === 200) {\n        return res.json();\n      }\n    })\n    .then((value) => {\n      let type;\n      let listOfOption = [];\n      if (optionType === \"category\") {\n        if (i === \"all\") {\n          type = (0,_utils_getAllData_js__WEBPACK_IMPORTED_MODULE_1__.getAllCategories)(value);\n        } else {\n          type = value.endpoints[i].paths;\n        }\n      } else if (optionType === \"channel\") {\n        type = value.endpoints;\n      }\n      type.forEach((data, index) => {\n        listOfOption.push(\n          `<option \n          value=${data.name}\n          data-index-channel=${index}\n          >${data.name.toUpperCase()}</option>`\n        );\n      });\n      addAllValue === true\n        ? listOfOption.unshift(\n            \"<option value=all data-index-channel=all>All</option>\"\n          )\n        : null;\n      return listOfOption;\n    })\n    .catch((err) => {\n      alert(\"Try to reload this page or Check your connection internet\");\n    });\n}\n\n\n//# sourceURL=webpack://webpack-practice/./src/script/component/listOfOption.js?");

/***/ }),

/***/ "./src/script/component/newsBoxComponent/newsBox.js":
/*!**********************************************************!*\
  !*** ./src/script/component/newsBoxComponent/newsBox.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newsBox\": () => (/* binding */ newsBox)\n/* harmony export */ });\nconst newsBox = (data) => {\n  return `<div class=\"news_box w-1/4 h-2/5 flex flex-col p-5 border m-4\">\n    <h4 class=\"font-bold text-xs\">${data.title}</h4>\n    <img src=\"${data.thumbnail}\"  class=\"w-auto mt-4 mb-4\">\n    <a href=\"${data.link}\" clas=\"mt-2 text-xs\" target=\"_blank\">${data.description}</a>\n  </div>`;\n};\n\n\n//# sourceURL=webpack://webpack-practice/./src/script/component/newsBoxComponent/newsBox.js?");

/***/ }),

/***/ "./src/script/component/newsBoxComponent/newsContent.js":
/*!**************************************************************!*\
  !*** ./src/script/component/newsBoxComponent/newsContent.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newsContent\": () => (/* binding */ newsContent)\n/* harmony export */ });\n/* harmony import */ var _newsBox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsBox.js */ \"./src/script/component/newsBoxComponent/newsBox.js\");\n\n\nconst newsContent = (data, isAll = false) => {\n  console.log(data);\n  if (isAll) {\n    return data.map((data) => {\n      return `<div class=\"content flex flex-col m-4 flex-wrap\">\n      <h3 class=\"news-title mb-4\">${data.data.title}</h3>\n      <div class=\"news flex flex-row justify-center flex-wrap\">\n          ${data.data.posts.map((data) => (0,_newsBox_js__WEBPACK_IMPORTED_MODULE_0__.newsBox)(data))}\n      </div>\n    </div>`;\n    });\n  }\n  return `<div class=\"content flex flex-col m-4 flex-wrap\">\n    <h3 class=\"news-title mb-4\">${data.data.title}</h3>\n    <div class=\"news flex flex-row justify-center flex-wrap\">\n        ${data.data.posts.map((data) => (0,_newsBox_js__WEBPACK_IMPORTED_MODULE_0__.newsBox)(data))}\n    </div>\n    </div>`;\n};\n\n\n//# sourceURL=webpack://webpack-practice/./src/script/component/newsBoxComponent/newsContent.js?");

/***/ }),

/***/ "./src/script/handler/api.js":
/*!***********************************!*\
  !*** ./src/script/handler/api.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"response\": () => (/* binding */ response),\n/* harmony export */   \"responseAll\": () => (/* binding */ responseAll)\n/* harmony export */ });\n/* harmony import */ var _utils_getAllData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getAllData.js */ \"./src/script/utils/getAllData.js\");\n\n\nconst response = async (channel = null, category = null) => {\n  let api = \"https://api-berita-indonesia.vercel.app/\";\n  if ((channel != null) & (channel != \"all\")) {\n    api += `${channel}/`;\n    api += `${category}/`;\n  }\n  const res = await fetch(api);\n  return res;\n};\n\nconst responseAll = async (res) => {\n  return await Promise.all(res);\n};\n\n\n//# sourceURL=webpack://webpack-practice/./src/script/handler/api.js?");

/***/ }),

/***/ "./src/script/search/channel_search.js":
/*!*********************************************!*\
  !*** ./src/script/search/channel_search.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_listOfOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/listOfOption.js */ \"./src/script/component/listOfOption.js\");\n\n\n(() => {\n  const dropdown_element = document.getElementsByClassName(\"channel-search\")[0];\n  (0,_component_listOfOption_js__WEBPACK_IMPORTED_MODULE_0__.listOfOption)(\"channel\", null, true).then((value) => {\n    dropdown_element.innerHTML = value;\n  });\n})();\n\n\n//# sourceURL=webpack://webpack-practice/./src/script/search/channel_search.js?");

/***/ }),

/***/ "./src/script/sort/category_sort.js":
/*!******************************************!*\
  !*** ./src/script/sort/category_sort.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_listOfOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/listOfOption.js */ \"./src/script/component/listOfOption.js\");\n/* harmony import */ var _findBySort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findBySort.js */ \"./src/script/sort/findBySort.js\");\n\n\n(() => {\n  const channel_sort_element =\n    document.getElementsByClassName(\"channel-sort\")[0];\n  const category_sort_element =\n    document.getElementsByClassName(\"category-sort\")[0];\n\n  let listOfCategory = (i) => {\n    return (0,_component_listOfOption_js__WEBPACK_IMPORTED_MODULE_0__.listOfOption)(\"category\", i);\n  };\n\n  let channel_value = \"all\";\n  let category_value = \"terbaru\";\n\n  channel_sort_element.addEventListener(\"input\", (event_channel) => {\n    channel_value =\n      event_channel.target.options[channel_sort_element.selectedIndex];\n    listOfCategory(channel_value.dataset.indexChannel).then((value) => {\n      category_sort_element.innerHTML = value;\n      category_value = category_sort_element[0].value;\n      (0,_findBySort_js__WEBPACK_IMPORTED_MODULE_1__.findBySort)(channel_value.value, category_value);\n    });\n  });\n\n  category_sort_element.addEventListener(\"input\", (event_category) => {\n    category_value =\n      event_category.target.options[category_sort_element.selectedIndex].value;\n    (0,_findBySort_js__WEBPACK_IMPORTED_MODULE_1__.findBySort)(channel_value.value, category_value);\n  });\n\n  listOfCategory(\"all\").then((value) => {\n    category_sort_element.innerHTML = value;\n  });\n})();\n\n\n//# sourceURL=webpack://webpack-practice/./src/script/sort/category_sort.js?");

/***/ }),

/***/ "./src/script/sort/findBySort.js":
/*!***************************************!*\
  !*** ./src/script/sort/findBySort.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findBySort\": () => (/* binding */ findBySort)\n/* harmony export */ });\n/* harmony import */ var _handler_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handler/api */ \"./src/script/handler/api.js\");\n/* harmony import */ var _utils_getAllData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getAllData.js */ \"./src/script/utils/getAllData.js\");\n/* harmony import */ var _component_newsBoxComponent_newsContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/newsBoxComponent/newsContent.js */ \"./src/script/component/newsBoxComponent/newsContent.js\");\n\n\n\nlet api = \"https://api-berita-indonesia.vercel.app/\";\nconst findBySort = async (channel = \"all\", category = \"terbaru\") => {\n  let content_container = document.getElementsByClassName(\n    \"news-content-container\"\n  )[0];\n  content_container.innerHTML = \"Loading...\";\n  if (channel != \"all\") {\n    return (0,_handler_api__WEBPACK_IMPORTED_MODULE_0__.response)(channel, category)\n      .then((value) => value.json())\n      .then((data) => {\n        content_container.innerHTML = (0,_component_newsBoxComponent_newsContent_js__WEBPACK_IMPORTED_MODULE_2__.newsContent)(data);\n      });\n  } else {\n    let filtered = [];\n    await (0,_handler_api__WEBPACK_IMPORTED_MODULE_0__.response)()\n      .then((data) => data.json())\n      .then((value) => {\n        (0,_utils_getAllData_js__WEBPACK_IMPORTED_MODULE_1__.getAllChannelData)(value).map((channel, index) => {\n          value.endpoints[index].paths.map((data) => {\n            if (data.name === category) {\n              filtered.push(channel);\n            }\n          });\n        });\n      });\n    let responseNewsAll = filtered.map(async (data) => {\n      return await fetch(`${api}${data}/${category}`);\n    });\n    await (0,_handler_api__WEBPACK_IMPORTED_MODULE_0__.responseAll)([...responseNewsAll])\n      .then((res) => {\n        return res;\n      })\n      .then((res) => Promise.all(res.map((data) => data.json())))\n      .then((res) => {\n        setTimeout(() => {\n          content_container.innerHTML = (0,_component_newsBoxComponent_newsContent_js__WEBPACK_IMPORTED_MODULE_2__.newsContent)(res, true);\n        }, 5000);\n      })\n      .catch(() => {\n        setTimeout(() => {\n          alert(\"try to reload your browser\");\n          location.reload();\n        }, 5000);\n      });\n  }\n};\n\n\n//# sourceURL=webpack://webpack-practice/./src/script/sort/findBySort.js?");

/***/ }),

/***/ "./src/script/sort/news_sort.js":
/*!**************************************!*\
  !*** ./src/script/sort/news_sort.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_listOfOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/listOfOption.js */ \"./src/script/component/listOfOption.js\");\n\n\n(() => {\n  const channel_sort_element =\n    document.getElementsByClassName(\"channel-sort\")[0];\n\n  (0,_component_listOfOption_js__WEBPACK_IMPORTED_MODULE_0__.listOfOption)(\"channel\", null, true).then((value) => {\n    channel_sort_element.innerHTML = value;\n  });\n})();\n\n\n//# sourceURL=webpack://webpack-practice/./src/script/sort/news_sort.js?");

/***/ }),

/***/ "./src/script/utils/getAllData.js":
/*!****************************************!*\
  !*** ./src/script/utils/getAllData.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllCategories\": () => (/* binding */ getAllCategories),\n/* harmony export */   \"getAllChannelData\": () => (/* binding */ getAllChannelData)\n/* harmony export */ });\n/* harmony import */ var _handler_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handler/api.js */ \"./src/script/handler/api.js\");\n\n\nlet getAllCategories = (value) => {\n  let endpoint = value.endpoints;\n  let category = [];\n\n  for (let name of endpoint) {\n    for (let i in name.paths) {\n      category.push(name.paths[i]);\n    }\n  }\n\n  let allCategory = new Set(category);\n  return allCategory;\n};\n\nlet getAllChannelData = (value) => {\n  let endpoint = value.endpoints;\n  let channel = [];\n  for (let name of endpoint) {\n    channel.push(name.name);\n  }\n  return channel;\n};\n\n\n//# sourceURL=webpack://webpack-practice/./src/script/utils/getAllData.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;