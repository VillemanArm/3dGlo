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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_validation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation.js */ \"./src/modules/validation.js\");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs.js */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider.js */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc.js */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm.js */ \"./src/modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet deadline = '17 august 2023 17:00'\r\n\r\nconst sliderData = {\r\n    sliderBlockClass: 'portfolio-content',\r\n    slideClass: 'portfolio-item',\r\n    slideActiveClass: 'portfolio-item-active',\r\n    arrowClass: 'portfolio-btn',\r\n    arrowLeftId: 'arrow-left',\r\n    arrowRighttId: 'arrow-right',\r\n    dotsBlockClass: 'portfolio-dots',    \r\n    dotClass: 'dot' ,   \r\n    dotActiveClass: 'dot-active',    \r\n    timeInterval: 2000,\r\n}\r\n\r\n\r\n;(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(deadline)\r\n;(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_validation_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(sliderData)\r\n;(0,_modules_calc_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ \r\n    formId: 'form1', \r\n    someElement: [\r\n        {\r\n            type: 'block',\r\n            id: 'total'\r\n        }\r\n    ] \r\n})\r\n;(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ formId: 'form2' })\r\n;(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ formId: 'form3' })\r\n\n\n//# sourceURL=webpack://3Dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\r\n    const calcBlock = document.querySelector('.calc-block')\r\n    const calcType = document.querySelector('.calc-type')\r\n    const calcSquare = document.querySelector('.calc-square')\r\n    const calcCount = document.querySelector('.calc-count')\r\n    const calcDay = document.querySelector('.calc-day')\r\n    const total = document.querySelector('#total')\r\n\r\n    const countCalc = () => {\r\n        let calcCountValue = 1\r\n        let calcDayValue = 1\r\n\r\n        if (calcCount.value > 1) {\r\n            calcCountValue += +calcCount.value / 10\r\n        }\r\n\r\n        if (calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2\r\n        } else if (calcDay.value && calcDay.value < 10){\r\n            calcDayValue = 1.5\r\n        }\r\n\r\n        return price * (+calcType.value) * (+calcSquare.value) * calcCountValue * calcDayValue\r\n\r\n    }\r\n\r\n    const animateTotal =() => {\r\n        const firstValue = +total.innerText\r\n        const lastValue = countCalc()\r\n\r\n        if (firstValue < lastValue) {\r\n            liveCount(total, firstValue, lastValue)\r\n        } else if (firstValue > lastValue) {\r\n            liveCount(total, lastValue, firstValue)\r\n        }\r\n    }\r\n\r\n    const liveCount = (element, firstValue, lastValue, step = 100) => {\r\n        const idInterval = setInterval(() => {\r\n            firstValue += step\r\n            element.innerText = firstValue\r\n        \r\n            if (firstValue >= lastValue - step) {\r\n                element.innerText = lastValue\r\n                clearInterval(idInterval)\r\n            }\r\n        }, 1)\r\n    }\r\n\r\n    calcBlock.addEventListener('change', (e) => {\r\n        if (calcType.value && calcSquare.value) {\r\n            animateTotal()\r\n        }        \r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3Dglo/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate)\n/* harmony export */ });\nfunction animate({timing, draw, duration}) {\r\n    // подробности на сайте https://learn.javascript.ru/js-animation\r\n    \r\n    let start = performance.now();\r\n  \r\n    requestAnimationFrame(function animate(time) {\r\n      // timeFraction изменяется от 0 до 1\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) timeFraction = 1;\r\n  \r\n      // вычисление текущего состояния анимации\r\n      let progress = timing(timeFraction);\r\n  \r\n      draw(progress); // отрисовать её\r\n  \r\n      if (timeFraction < 1) {\r\n        requestAnimationFrame(animate);\r\n      }\r\n      \r\n      // подключение:\r\n    //   animate({\r\n    //     duration: 1000,\r\n    //     timing(timeFraction) {\r\n    //       return timeFraction;\r\n    //     },\r\n    //     draw(progress) {\r\n    //       elem.style.width = progress * 100 + '%';\r\n    //     }\r\n    //   });\r\n    });\r\n  }\r\n\r\n  \n\n//# sourceURL=webpack://3Dglo/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _smooth_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smooth_scroll */ \"./src/modules/smooth_scroll.js\");\n\r\n\r\nconst menu = () => {\r\n    const menu = document.querySelector('menu')\r\n    const main = document.querySelector('main')\r\n\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.matches('menu li>a')) {\r\n            handleMenu()            \r\n            ;(0,_smooth_scroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e)\r\n        } else if (e.target.matches('a.close-btn')) {\r\n            handleMenu() \r\n        } else if (e.target.closest('.menu')) {\r\n            handleMenu()  \r\n        } else if (e.target.matches('main>a')) {\r\n            (0,_smooth_scroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e)\r\n        } else if (!e.target.closest('menu') && menu.classList.contains('active-menu')) {\r\n            handleMenu()  \r\n        }        \r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://3Dglo/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    const modal = document.querySelector('.popup')\r\n    const content = modal.querySelector('.popup-content')\r\n\r\n    const moveToCenter = (element) => {\r\n        if (innerWidth > 768) {\r\n            element.style.transform = 'translateY(-50%)'\r\n\r\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 1000,\r\n                timing: bounceEaseOut,\r\n                draw(progress) {\r\n                    element.style.top = (50 * progress) + '%'\r\n                }\r\n              });\r\n        }\r\n    }\r\n\r\n    function makeEaseOut(timing) {\r\n        return function(timeFraction) {\r\n          return 1 - timing(1 - timeFraction);\r\n        }\r\n      }\r\n    \r\n    function bounce(timeFraction) {\r\n    for (let a = 0, b = 1; 1; a += b, b /= 2) {\r\n        if (timeFraction >= (7 - 4 * a) / 11) {\r\n        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)\r\n        }\r\n    }\r\n    }\r\n\r\n    let bounceEaseOut = makeEaseOut(bounce);\r\n    \r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modal.style.display = 'block'\r\n            moveToCenter(content)\r\n        })\r\n    })\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.closest('.popup-close')) {\r\n            modal.style.display = 'none'\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://3Dglo/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElement = []}) => {\r\n    const form = document.getElementById(formId)\r\n    \r\n    const statusBlock = document.createElement('div')\r\n    const loadText = 'Загрузка...'\r\n    const errorText = 'Ошибка'\r\n    const successText = 'Спасибо! Наш менеджер свяжется с вами.'\r\n\r\n    const validate = (list) => {\r\n        let success = true\r\n        const phoneSymbols = /[^\\d\\+\\(\\)-]/g\r\n        const russianSymbols = /[^а-я- ]/gi\r\n        const messageSymbols = /[^а-я- \\,\\.\\:\\;\\'\\\"\\@\\%\\(\\)]/gi\r\n\r\n\r\n        list.forEach(input => {\r\n            if (input.name === 'user_phone' && phoneSymbols.test(input.value) ||\r\n                input.name === 'user_name' && russianSymbols.test(input.value) ||\r\n                input.name === 'user_message' && messageSymbols.test(input.value)) {\r\n                success = false\r\n            } \r\n        })\r\n\r\n        return success\r\n    }\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n\r\n        }).then(response => response.json())\r\n    }\r\n\r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll('input')\r\n        const formData = new FormData(form)\r\n        let formBody = {}\r\n\r\n        statusBlock.textContent = loadText\r\n        form.append(statusBlock)\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val\r\n        })\r\n\r\n        someElement.forEach(elem => {\r\n            const element = document.getElementById(elem.id)\r\n\r\n            if (elem.type === 'block') {\r\n                formBody[elem.id] = element.textContent\r\n            } else if (elem.type === 'input') {\r\n                formBody[elem.id] = element.value\r\n            }\r\n        })\r\n\r\n        if (validate(formElements)) {\r\n            sendData(formBody).then(data => {\r\n                statusBlock.textContent = successText\r\n\r\n                formElements.forEach(input => {\r\n                    input.value = ''\r\n                })\r\n            })\r\n            .catch(error => {\r\n                statusBlock.textContent = errorText\r\n\r\n                console.log(error.message);\r\n                }\r\n            )\r\n        } else {\r\n            alert('Данные не валидны!')\r\n        }\r\n    }\r\n\r\n    try {\r\n        if (!form) {\r\n            throw new Error('Форма отсутствует!')\r\n        }\r\n\r\n        form.addEventListener('submit', (event) => {\r\n            event.preventDefault()\r\n    \r\n            submitForm()\r\n        })\r\n    } catch(error) {\r\n        console.log(error.message);\r\n    }\r\n\r\n\r\n    \r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3Dglo/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = ({\r\n    sliderBlockClass,\r\n    slideClass,\r\n    slideActiveClass = 'slide-active',\r\n    arrowClass,\r\n    arrowLeftId = 'left',\r\n    arrowRighttId = 'right',\r\n    dotsBlockClass,    \r\n    dotClass,   \r\n    dotActiveClass = 'dot-active',    \r\n    timeInterval = 2000\r\n}) => {\r\n\r\n    const sliderBlock = document.querySelector(`.${sliderBlockClass}`) \r\n    const slides = document.querySelectorAll(`.${slideClass}`) \r\n    const dotsBlock = document.querySelector(`.${dotsBlockClass}`)     \r\n    \r\n    let currentSlide = 0\r\n    let dots \r\n    let interval \r\n\r\n    if (sliderBlock === null || slides === null) return\r\n\r\n\r\n    const addDots = () => {\r\n        slides.forEach(() => {\r\n            dotsBlock.innerHTML = dotsBlock.innerHTML + `<li class=\"${dotClass}\"></li>`\r\n        })\r\n        dots = document.querySelectorAll(`.${dotClass}`) \r\n        dots[0].classList.add(dotActiveClass)\r\n    }\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass)\r\n    }\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass)\r\n    }\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, slideActiveClass)\r\n        prevSlide(dots, currentSlide, dotActiveClass)\r\n        \r\n        currentSlide++\r\n        if (currentSlide >= slides.length) currentSlide = 0\r\n        \r\n        nextSlide(slides, currentSlide, slideActiveClass)\r\n        nextSlide(dots, currentSlide, dotActiveClass)\r\n    }\r\n\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer)\r\n    }\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval)\r\n    }\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n\r\n        if (!e.target.matches(`.${dotClass}, .${arrowClass}`)) {\r\n            return\r\n        }\r\n\r\n        prevSlide(slides, currentSlide, slideActiveClass)\r\n        prevSlide(dots, currentSlide, dotActiveClass)\r\n\r\n        if (e.target.matches(`#${arrowRighttId}`)) {\r\n            currentSlide++\r\n        } else if (e.target.matches(`#${arrowLeftId}`)) {\r\n            currentSlide--\r\n        } else if (e.target.classList.contains(dotClass)) {\r\n            dots.forEach((dot, index) => {\r\n                if (dot === e.target) {\r\n                    currentSlide = index\r\n                }\r\n            })\r\n        }\r\n\r\n        if (currentSlide >= slides.length) currentSlide = 0\r\n        if (currentSlide < 0) currentSlide = slides.length - 1\r\n\r\n\r\n        nextSlide(slides, currentSlide, slideActiveClass)\r\n        nextSlide(dots, currentSlide, dotActiveClass)\r\n    })\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches(`.${dotClass}, .${arrowClass}`)) {\r\n            stopSlide()\r\n        }\r\n    }, true)\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches(`.${dotClass}, .${arrowClass}`)) {\r\n            startSlide(timeInterval)\r\n        }\r\n    }, true)\r\n\r\n    addDots()    \r\n    startSlide(timeInterval)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack://3Dglo/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/smooth_scroll.js":
/*!**************************************!*\
  !*** ./src/modules/smooth_scroll.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScroll = (e) => {\r\n    e.preventDefault()\r\n    const idBorder = e.target.href.indexOf('#')\r\n    const block = document.querySelector(e.target.href.slice(idBorder))\r\n    block.scrollIntoView({behavior: 'smooth'}, true )\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack://3Dglo/./src/modules/smooth_scroll.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabContent = document.querySelectorAll('.service-tab')\r\n    const tabs = document.querySelectorAll('.service-header-tab')\r\n    const tabPanel = document.querySelector('.service-header')\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab')\r\n\r\n            tabs.forEach((tab, index) => {                 \r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active')\r\n                    tabContent[index].classList.remove(\"d-none\")\r\n                } else {\r\n                    tab.classList.remove('active')\r\n                    tabContent[index].classList.add(\"d-none\")\r\n                }\r\n            })\r\n        };\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3Dglo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.querySelector('#timer-hours')\r\n    const timerMinutes = document.querySelector('#timer-minutes')\r\n    const timerSeconds = document.querySelector('#timer-seconds')\r\n\r\n    const getSecondsRemaining = (deadline) => {\r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n\r\n        return timeRemaining        \r\n    }\r\n    \r\n    const getTimeRemaining = () => {\r\n        let timeRemaining = getSecondsRemaining(deadline)\r\n        let hours = Math.floor(timeRemaining / 60 / 60 )\r\n        let minutes = Math.floor(timeRemaining / 60 % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n    \r\n        return { timeRemaining, hours, minutes, seconds, }\r\n\r\n    }\r\n\r\n    const formatTime = time => {\r\n        if (time <= 0) return '00';\r\n        else if (time < 10 && time > 0) return '0' + time;\r\n        else return time;\r\n    }\r\n    \r\n    const updateClock = () => {\r\n        let currentTime = getTimeRemaining()\r\n\r\n        timerHours.textContent = formatTime(currentTime.hours)\r\n        timerMinutes.textContent = formatTime(currentTime.minutes)\r\n        timerSeconds.textContent = formatTime(currentTime.seconds)\r\n    }\r\n    \r\n    let idInterval = setInterval(() => {\r\n        let secondsRemaining = getSecondsRemaining(deadline)\r\n        if (secondsRemaining <= 1) {\r\n            clearInterval(idInterval)\r\n        }\r\n        updateClock()    \r\n    }, 1000)\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://3Dglo/./src/modules/timer.js?");

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n    const calcTextInputs = document.querySelectorAll('.calc-block>input[type=text]')\r\n    const names = document.querySelectorAll('.form-name-validation')\r\n    const emails = document.querySelectorAll('.form-email')\r\n    const phones = document.querySelectorAll('.form-phone')\r\n\r\n    const digits = /[^\\d]/g\r\n    const cyrillic = /[^а-я -]/gi\r\n    const email = /[^\\w\\d@-_\\.\\!\\~\\*\\']/gi\r\n    const phone = /[^\\d()-]/gi\r\n\r\n\r\n    const addValidaton = (input, regExp) => {\r\n        input.addEventListener('input', (event) => {\r\n            input.value = input.value.replace(regExp, '')\r\n            if (input.value && input.value.match(/  /g)) {\r\n                if (input.value.match(/  /g).length > 0) {\r\n                    input.value = input.value.slice(0, input.value.length - 1)\r\n                }\r\n\r\n            }\r\n        })\r\n    }\r\n\r\n\r\n    calcTextInputs.forEach((input) => {\r\n        addValidaton(input, digits)\r\n    })\r\n\r\n    names.forEach((input) => {\r\n        addValidaton(input, cyrillic)\r\n    })\r\n\r\n    emails.forEach((input) => {\r\n        addValidaton(input, email)\r\n    })\r\n\r\n    phones.forEach((input) => {\r\n        addValidaton(input, phone)\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack://3Dglo/./src/modules/validation.js?");

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