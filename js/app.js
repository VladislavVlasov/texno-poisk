/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/static/js/includes/popups.js":
/*!******************************************!*\
  !*** ./src/static/js/includes/popups.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;
const timeout = 300;
function popup() {
  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener('click', function (e) {
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup);
        e.preventDefault();
      });
    }
  }
  const popupCloseIcon = document.querySelectorAll('.close-popup');
  if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
        popupClose(el.closest('.popup'));
        e.preventDefault();
      });
    }
  }
  function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__content')) {
          popupClose(e.target.closest('.popup'));
        }
      });
    }
  }
  function popupClose(popupActive) {
    let doUnlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
        bodyUnLock();
      }
    }
  }
  function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }
  function bodyUnLock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.style.paddingRight = '0px';
        }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
    }, timeout);
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }
  document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
    }
  });
  (function () {
    // проверяем поддержку
    if (!Element.prototype.closest) {
      // реализуем
      Element.prototype.closest = function (css) {
        var node = this;
        while (node) {
          if (node.matches(css)) return node;else node = node.parentElement;
        }
        return null;
      };
    }
  })();
  (function () {
    // проверяем поддержку
    if (!Element.prototype.matches) {
      // определяем свойство
      Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
    }
  })();
}
/* harmony default export */ __webpack_exports__["default"] = (popup);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************************!*\
  !*** ./src/static/js/app.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _includes_popups_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./includes/popups.js */ "./src/static/js/includes/popups.js");


// Functions
(0,_includes_popups_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

// Adding a class to header when scrolling ===================================================================
function headerScroll() {
  const header = document.querySelector('.header');
  let scrollPos = window.scrollY;
  if (scrollPos >= 1) {
    header.classList.add('scrolling');
  } else {
    header.classList.remove('scrolling');
  }
}
window.addEventListener('scroll', headerScroll);
document.addEventListener('DOMContentLoaded', headerScroll);

//Counter ===================================================================
const counter = document.querySelectorAll('.counter__input-input');
for (let item of counter) {
  const counterBtnMinus = item.previousElementSibling;
  const counterBtnPlus = item.nextElementSibling;
  function addClassDisabledBtnMinus() {
    if (item.value === '1') {
      counterBtnMinus.classList.add('disabled');
    } else if (item.value > '1') {
      counterBtnMinus.classList.remove('disabled');
    }
  }
  counterBtnMinus.addEventListener('click', () => {
    if (item.value > '1') item.value--;
    addClassDisabledBtnMinus();
  });
  counterBtnPlus.addEventListener('click', () => {
    item.value++;
    addClassDisabledBtnMinus();
  });
  window.addEventListener("DOMContentLoaded", () => addClassDisabledBtnMinus());
}
//Input ===================================================================
const inputs = document.querySelectorAll('.input-block');
for (let item of inputs) {
  const input = item.querySelector(".input-block__input");
  input.addEventListener("focusin", e => {
    item.classList.add("active");
  });
  input.addEventListener("focusout", e => {
    if (!input.value) {
      item.classList.remove("active");
    }
  });
}
//Tab ===================================================================
if (document.querySelector(".card-page__side-tab")) {
  const tabsBtn = document.querySelectorAll(".card-page__side-btn");
  const tabBtn = document.querySelector(".card-page__side-btn");
  const tabsItems = document.querySelectorAll(".card-page__side-tab");
  tabsBtn.forEach(onTabClick);
  function onTabClick(item) {
    item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);
      if (!currentBtn.classList.contains('active')) {
        tabsBtn.forEach(function (item) {
          item.classList.remove('active');
        });
        tabsItems.forEach(function (item) {
          item.classList.remove('active');
        });
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
      }
    });
  }
  tabBtn.click();
}
}();
/******/ })()
;
//# sourceMappingURL=app.js.map