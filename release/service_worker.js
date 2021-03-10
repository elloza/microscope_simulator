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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sw/service_worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sw/service_worker.js":
/*!**********************************!*\
  !*** ./src/sw/service_worker.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const VERSION = \"1.7.1\";\r\nconst ORIGIN = (location.hostname == 'localhost') ? '' : location.protocol + '//' + location.hostname;\r\n\r\n\r\nconst STATIC_CACHE_KEY = 'static-' + VERSION;\r\nconst STATIC_FILES = [\r\n    ORIGIN + '/',\r\n    ORIGIN + '/index.html',\r\n    ORIGIN + '/js/app.js',\r\n    ORIGIN + '/css/main.css',\r\n    ORIGIN + '/js/zip.js',\r\n    ORIGIN + '/js/jsinflate.js',\r\n    ORIGIN + '/images/SCOPin_image.svg',\r\n    ORIGIN + '/images/ProfilePhoto.jpg',\r\n    ORIGIN + '/images/facebook-brands.svg',\r\n    ORIGIN + '/images/twitter-square-brands.svg',\r\n    ORIGIN + '/images/line-brands.svg',\r\n    ORIGIN + '/images/SCOPin_favicon.png',\r\n\r\n    ORIGIN + \"/js/lib/axios/dist/axios.standalone.js\",\r\n    ORIGIN + \"/js/lib/CryptoJS/rollups/hmac-sha256.js\",\r\n    ORIGIN + \"/js/lib/CryptoJS/rollups/sha256.js\",\r\n    ORIGIN + \"/js/lib/CryptoJS/components/hmac.js\",\r\n    ORIGIN + \"/js/lib/CryptoJS/components/enc-base64.js\",\r\n    ORIGIN + \"/js/lib/url-template/url-template.js\",\r\n    ORIGIN + \"/js/lib/apiGatewayCore/sigV4Client.js\",\r\n    ORIGIN + \"/js/lib/apiGatewayCore/apiGatewayClient.js\",\r\n    ORIGIN + \"/js/lib/apiGatewayCore/simpleHttpClient.js\",\r\n    ORIGIN + \"/js/lib/apiGatewayCore/utils.js\",\r\n    ORIGIN + \"/js/apigClient.js\",\r\n    ORIGIN + \"/js/payment.js\",\r\n    //\"https://js.stripe.com/v3/\",\r\n    //ORIGIN + \"/js/app_social_connection.js\",\r\n\r\n];\r\n\r\nconst CACHE_KEYS = [\r\n    STATIC_CACHE_KEY\r\n];\r\n\r\nself.addEventListener(\"message\", (event) => {\r\n    if (event.data.action === \"skipWaiting\") {\r\n        console.log(\"Skip waiting\")\r\n        self.skipWaiting()\r\n    }\r\n})\r\n\r\n\r\nself.addEventListener('install', event => {\r\n    //console.log(\"Skip waiting !\")\r\n    //event.waitUntil()\r\n    console.log(\"Store static files\")\r\n    event.waitUntil(\r\n        caches.open(STATIC_CACHE_KEY).then(cache => {\r\n            return Promise.all(\r\n                STATIC_FILES.map(url => {\r\n                    return fetch(new Request(url, { cache: 'no-cache', mode: 'no-cors' })).then(response => {\r\n                        return cache.put(url, response);\r\n                    });\r\n                })\r\n            );\r\n        })\r\n    );\r\n});\r\n\r\nself.addEventListener('fetch', event => {\r\n\r\n\r\n    event.respondWith(\r\n        caches.match(event.request).then(async response => {\r\n            if (response) {\r\n                return response\r\n            } else {\r\n                try {\r\n                    var r = await fetch(event.request)\r\n                } catch (e) {\r\n                    console.warn(`${event.request} cannot be fetched.`)\r\n\r\n                }\r\n                return r\r\n            }\r\n        })\r\n    );\r\n});\r\n\r\n\r\nself.addEventListener('activate', event => {\r\n    console.log(\"Delete previous caches !\")\r\n    event.waitUntil(\r\n        caches.keys().then(keys => {\r\n            return Promise.all(\r\n                keys.filter(key => {\r\n                    return !CACHE_KEYS.includes(key);\r\n                }).map(key => {\r\n                    return caches.delete(key);\r\n                })\r\n            );\r\n        })\r\n    );\r\n});\r\n\r\nself.addEventListener('push', event => {\r\n    const options = event.data.json();\r\n    event.waitUntil(\r\n        caches.open(STATIC_CACHE_KEY).then(cache => {\r\n            fetch(new Request(options.data.url, { mode: 'no-cors' })).then(response => {\r\n                cache.put(options.data.url, response);\r\n            }).then(() => {\r\n                self.registration.showNotification(options.title, options);\r\n            });\r\n        })\r\n    );\r\n});\r\n\r\nself.addEventListener('notificationclick', event => {\r\n    event.notification.close();\r\n    event.waitUntil(\r\n        clients.openWindow(event.notification.data.url)\r\n    );\r\n});\r\n\n\n//# sourceURL=webpack:///./src/sw/service_worker.js?");

/***/ })

/******/ });