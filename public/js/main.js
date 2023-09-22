/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/swiper */ \"./src/js/module/swiper.js\");\n/* harmony import */ var _module_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/accordion */ \"./src/js/module/accordion.js\");\n/* harmony import */ var _module_newsSwiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/newsSwiper */ \"./src/js/module/newsSwiper.js\");\n/* harmony import */ var _module_headerMob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/headerMob */ \"./src/js/module/headerMob.js\");\n// \"use strict\";\n\n\n\n\n\n(0,_module_accordion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_module_headerMob__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n//# sourceURL=webpack://test_500na700/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/accordion.js":
/*!************************************!*\
  !*** ./src/js/module/accordion.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ accordion; }\n/* harmony export */ });\nfunction accordion() {\n  const titles = document.querySelectorAll(\".accordion-title\");\n  const contents = document.querySelectorAll(\".accordion-content\");\n\n  titles.forEach((item, i) => {\n    item.addEventListener(\"click\", () => {\n      const activeContent = document.querySelector(\"#\" + item.dataset.tab);\n      if (activeContent.classList.contains(\"active\")) {\n        activeContent.classList.remove(\"active\");\n        item.classList.remove(\"active\");\n        activeContent.style.maxHeight = 0;\n      } else {\n        contents.forEach((el) => {\n          el.classList.remove(\"active\");\n          el.style.maxHeight = 0;\n        });\n        titles.forEach((el) => el.classList.remove(\"active\"));\n        item.classList.add(\"active\");\n        activeContent.classList.add(\"active\");\n        activeContent.style.maxHeight = activeContent.scrollHeight + \"px\";\n      }\n    });\n  });\n}\n\n\n//# sourceURL=webpack://test_500na700/./src/js/module/accordion.js?");

/***/ }),

/***/ "./src/js/module/headerMob.js":
/*!************************************!*\
  !*** ./src/js/module/headerMob.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ headerMob; }\n/* harmony export */ });\nfunction headerMob() {\n  const titles = document.querySelectorAll(\".ph-acc-title\");\n  const contents = document.querySelectorAll(\".ph-acc-content\");\n\n  titles.forEach((item, i) => {\n    item.addEventListener(\"click\", () => {\n      const activeContent = document.querySelector(\"#\" + item.dataset.tab);\n      if (activeContent.classList.contains(\"active\")) {\n        activeContent.classList.remove(\"active\");\n        item.classList.remove(\"active\");\n        activeContent.style.maxHeight = 0;\n      } else {\n        contents.forEach((el) => {\n          el.classList.remove(\"active\");\n          el.style.maxHeight = 0;\n        });\n        titles.forEach((el) => el.classList.remove(\"active\"));\n        item.classList.add(\"active\");\n        activeContent.classList.add(\"active\");\n        activeContent.style.maxHeight = activeContent.scrollHeight + \"px\";\n      }\n    });\n  });\n\n  const [navBlock] = document.getElementsByClassName(\"mob-container\");\n  console.log(navBlock);\n  const [phMenu] = document.getElementsByClassName(\"ph-menu\");\n  phMenu.addEventListener(\"click\", () => {\n    console.log(`CLICKED`);\n    navBlock.classList.toggle(\"mob-container-active\");\n  });\n}\n\n\n//# sourceURL=webpack://test_500na700/./src/js/module/headerMob.js?");

/***/ }),

/***/ "./src/js/module/newsSwiper.js":
/*!*************************************!*\
  !*** ./src/js/module/newsSwiper.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Swiper(\".swiper-news\", {\n  loop: true,\n\n  slidesPerView: 1.5,\n\n  spaceBetween: 10,\n}));\n\n\n//# sourceURL=webpack://test_500na700/./src/js/module/newsSwiper.js?");

/***/ }),

/***/ "./src/js/module/swiper.js":
/*!*********************************!*\
  !*** ./src/js/module/swiper.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Swiper(\".swiper\", {\n  loop: true,\n  keyboard: {\n    enable: true,\n  },\n  autoplay: {\n    delay: 3000,\n    disableOnInteraction: true,\n  },\n  slidesPerView: 1.15,\n  centeredSlides: true,\n  spaceBetween: 10,\n  navigation: {\n    nextEl: \".swiper-button-nextCustom\",\n    prevEl: \".swiper-button-prevCustom\",\n  },\n}));\n\n\n//# sourceURL=webpack://test_500na700/./src/js/module/swiper.js?");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;