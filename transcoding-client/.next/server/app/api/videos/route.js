"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/videos/route";
exports.ids = ["app/api/videos/route"];
exports.modules = {

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "http2":
/*!************************!*\
  !*** external "http2" ***!
  \************************/
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvideos%2Froute&page=%2Fapi%2Fvideos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvideos%2Froute.ts&appDir=C%3A%5CUsers%5Cshaurya%5CDesktop%5Chls-streaming-aws%5Chls-streaming-client%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshaurya%5CDesktop%5Chls-streaming-aws%5Chls-streaming-client&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvideos%2Froute&page=%2Fapi%2Fvideos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvideos%2Froute.ts&appDir=C%3A%5CUsers%5Cshaurya%5CDesktop%5Chls-streaming-aws%5Chls-streaming-client%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshaurya%5CDesktop%5Chls-streaming-aws%5Chls-streaming-client&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_shaurya_Desktop_hls_streaming_aws_hls_streaming_client_src_app_api_videos_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/videos/route.ts */ \"(rsc)/./src/app/api/videos/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/videos/route\",\n        pathname: \"/api/videos\",\n        filename: \"route\",\n        bundlePath: \"app/api/videos/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\shaurya\\\\Desktop\\\\hls-streaming-aws\\\\hls-streaming-client\\\\src\\\\app\\\\api\\\\videos\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_shaurya_Desktop_hls_streaming_aws_hls_streaming_client_src_app_api_videos_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/videos/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ2aWRlb3MlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnZpZGVvcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnZpZGVvcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzaGF1cnlhJTVDRGVza3RvcCU1Q2hscy1zdHJlYW1pbmctYXdzJTVDaGxzLXN0cmVhbWluZy1jbGllbnQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3NoYXVyeWElNUNEZXNrdG9wJTVDaGxzLXN0cmVhbWluZy1hd3MlNUNobHMtc3RyZWFtaW5nLWNsaWVudCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNxRDtBQUNsSTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpZGVvLXRyYW5zY29kZXItY2xpZW50Lz8zODA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHNoYXVyeWFcXFxcRGVza3RvcFxcXFxobHMtc3RyZWFtaW5nLWF3c1xcXFxobHMtc3RyZWFtaW5nLWNsaWVudFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx2aWRlb3NcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3ZpZGVvcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3ZpZGVvc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdmlkZW9zL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcc2hhdXJ5YVxcXFxEZXNrdG9wXFxcXGhscy1zdHJlYW1pbmctYXdzXFxcXGhscy1zdHJlYW1pbmctY2xpZW50XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHZpZGVvc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS92aWRlb3Mvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvideos%2Froute&page=%2Fapi%2Fvideos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvideos%2Froute.ts&appDir=C%3A%5CUsers%5Cshaurya%5CDesktop%5Chls-streaming-aws%5Chls-streaming-client%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshaurya%5CDesktop%5Chls-streaming-aws%5Chls-streaming-client&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/videos/route.ts":
/*!*************************************!*\
  !*** ./src/app/api/videos/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/s3-request-presigner */ \"(rsc)/./node_modules/@aws-sdk/s3-request-presigner/dist-es/index.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n\n\nconst accessKeyId = process.env.AWS_ACCESS_KEY_ID;\nconst secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;\nconst s3Client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.S3Client({\n    region: \"ap-south-1\",\n    credentials: {\n        accessKeyId,\n        secretAccessKey\n    }\n});\nconst GET = async (req)=>{\n    try {\n        const url = new URL(req.url);\n        const fileName = url.searchParams.get(\"fileName\");\n        const videoUrl = url.searchParams.get(\"videoUrl\");\n        if (!fileName) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n                message: \"Missing required field in request query: fileName\"\n            }, {\n                status: 400\n            });\n        }\n        if (!videoUrl) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n                message: \"Missing required field in request query: videoUrl\"\n            }, {\n                status: 400\n            });\n        }\n        //   videos/VID-20230429-WA0030/VID-20230429-WA0030-1080p.mp4\n        const command = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.GetObjectCommand({\n            Bucket: \"video-upload-final\",\n            Key: `videos/${fileName}/${videoUrl}`\n        });\n        const signedUrl = await (0,_aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_1__.getSignedUrl)(s3Client, command);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n            message: \"URL fetched successfully!\",\n            url: signedUrl\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error generating signed URL:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n            message: \"Error generating pre-signed URL for S3 object retrieval\"\n        }, {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS92aWRlb3Mvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0U7QUFDSDtBQUVsQjtBQUUzQyxNQUFNSSxjQUFjQyxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQjtBQUNqRCxNQUFNQyxrQkFBa0JILFFBQVFDLEdBQUcsQ0FBQ0cscUJBQXFCO0FBRXpELE1BQU1DLFdBQVcsSUFBSVYsd0RBQVFBLENBQUM7SUFDNUJXLFFBQVE7SUFDUkMsYUFBYTtRQUNYUjtRQUNBSTtJQUNGO0FBQ0Y7QUFFTyxNQUFNSyxNQUFNLE9BQU9DO0lBQ3hCLElBQUk7UUFDRixNQUFNQyxNQUFNLElBQUlDLElBQUlGLElBQUlDLEdBQUc7UUFDM0IsTUFBTUUsV0FBV0YsSUFBSUcsWUFBWSxDQUFDQyxHQUFHLENBQUM7UUFDdEMsTUFBTUMsV0FBV0wsSUFBSUcsWUFBWSxDQUFDQyxHQUFHLENBQUM7UUFFdEMsSUFBSSxDQUFDRixVQUFVO1lBQ2IsT0FBT2Qsa0ZBQVlBLENBQUNrQixJQUFJLENBQ3RCO2dCQUFFQyxTQUFTO1lBQW9ELEdBQy9EO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFDQSxJQUFJLENBQUNILFVBQVU7WUFDYixPQUFPakIsa0ZBQVlBLENBQUNrQixJQUFJLENBQ3RCO2dCQUFFQyxTQUFTO1lBQW9ELEdBQy9EO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSw2REFBNkQ7UUFFN0QsTUFBTUMsVUFBVSxJQUFJdkIsZ0VBQWdCQSxDQUFDO1lBQ25Dd0IsUUFBUTtZQUNSQyxLQUFLLENBQUMsT0FBTyxFQUFFVCxTQUFTLENBQUMsRUFBRUcsU0FBUyxDQUFDO1FBQ3ZDO1FBRUEsTUFBTU8sWUFBWSxNQUFNekIsMkVBQVlBLENBQUNRLFVBQVVjO1FBRS9DLE9BQU9yQixrRkFBWUEsQ0FBQ2tCLElBQUksQ0FDdEI7WUFBRUMsU0FBUztZQUE2QlAsS0FBS1k7UUFBVSxHQUN2RDtZQUFFSixRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPSyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQzlDLE9BQU96QixrRkFBWUEsQ0FBQ2tCLElBQUksQ0FDdEI7WUFBRUMsU0FBUztRQUEwRCxHQUNyRTtZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlkZW8tdHJhbnNjb2Rlci1jbGllbnQvLi9zcmMvYXBwL2FwaS92aWRlb3Mvcm91dGUudHM/NGVlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTM0NsaWVudCwgR2V0T2JqZWN0Q29tbWFuZCB9IGZyb20gXCJAYXdzLXNkay9jbGllbnQtczNcIjtcbmltcG9ydCB7IGdldFNpZ25lZFVybCB9IGZyb20gXCJAYXdzLXNkay9zMy1yZXF1ZXN0LXByZXNpZ25lclwiO1xuXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuY29uc3QgYWNjZXNzS2V5SWQgPSBwcm9jZXNzLmVudi5BV1NfQUNDRVNTX0tFWV9JRCE7XG5jb25zdCBzZWNyZXRBY2Nlc3NLZXkgPSBwcm9jZXNzLmVudi5BV1NfU0VDUkVUX0FDQ0VTU19LRVkhO1xuXG5jb25zdCBzM0NsaWVudCA9IG5ldyBTM0NsaWVudCh7XG4gIHJlZ2lvbjogXCJhcC1zb3V0aC0xXCIsXG4gIGNyZWRlbnRpYWxzOiB7XG4gICAgYWNjZXNzS2V5SWQsXG4gICAgc2VjcmV0QWNjZXNzS2V5LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBHRVQgPSBhc3luYyAocmVxOiBSZXF1ZXN0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChyZXEudXJsISk7XG4gICAgY29uc3QgZmlsZU5hbWUgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImZpbGVOYW1lXCIpO1xuICAgIGNvbnN0IHZpZGVvVXJsID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ2aWRlb1VybFwiKTtcblxuICAgIGlmICghZmlsZU5hbWUpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBtZXNzYWdlOiBcIk1pc3NpbmcgcmVxdWlyZWQgZmllbGQgaW4gcmVxdWVzdCBxdWVyeTogZmlsZU5hbWVcIiB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghdmlkZW9VcmwpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBtZXNzYWdlOiBcIk1pc3NpbmcgcmVxdWlyZWQgZmllbGQgaW4gcmVxdWVzdCBxdWVyeTogdmlkZW9VcmxcIiB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gICB2aWRlb3MvVklELTIwMjMwNDI5LVdBMDAzMC9WSUQtMjAyMzA0MjktV0EwMDMwLTEwODBwLm1wNFxuXG4gICAgY29uc3QgY29tbWFuZCA9IG5ldyBHZXRPYmplY3RDb21tYW5kKHtcbiAgICAgIEJ1Y2tldDogXCJ2aWRlby11cGxvYWQtZmluYWxcIixcbiAgICAgIEtleTogYHZpZGVvcy8ke2ZpbGVOYW1lfS8ke3ZpZGVvVXJsfWAsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzaWduZWRVcmwgPSBhd2FpdCBnZXRTaWduZWRVcmwoczNDbGllbnQsIGNvbW1hbmQpO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBtZXNzYWdlOiBcIlVSTCBmZXRjaGVkIHN1Y2Nlc3NmdWxseSFcIiwgdXJsOiBzaWduZWRVcmwgfSxcbiAgICAgIHsgc3RhdHVzOiAyMDAgfVxuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdlbmVyYXRpbmcgc2lnbmVkIFVSTDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgbWVzc2FnZTogXCJFcnJvciBnZW5lcmF0aW5nIHByZS1zaWduZWQgVVJMIGZvciBTMyBvYmplY3QgcmV0cmlldmFsXCIgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiUzNDbGllbnQiLCJHZXRPYmplY3RDb21tYW5kIiwiZ2V0U2lnbmVkVXJsIiwiTmV4dFJlc3BvbnNlIiwiYWNjZXNzS2V5SWQiLCJwcm9jZXNzIiwiZW52IiwiQVdTX0FDQ0VTU19LRVlfSUQiLCJzZWNyZXRBY2Nlc3NLZXkiLCJBV1NfU0VDUkVUX0FDQ0VTU19LRVkiLCJzM0NsaWVudCIsInJlZ2lvbiIsImNyZWRlbnRpYWxzIiwiR0VUIiwicmVxIiwidXJsIiwiVVJMIiwiZmlsZU5hbWUiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJ2aWRlb1VybCIsImpzb24iLCJtZXNzYWdlIiwic3RhdHVzIiwiY29tbWFuZCIsIkJ1Y2tldCIsIktleSIsInNpZ25lZFVybCIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/videos/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@smithy","vendor-chunks/@aws-sdk","vendor-chunks/@aws-crypto"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvideos%2Froute&page=%2Fapi%2Fvideos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvideos%2Froute.ts&appDir=C%3A%5CUsers%5Cshaurya%5CDesktop%5Chls-streaming-aws%5Chls-streaming-client%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshaurya%5CDesktop%5Chls-streaming-aws%5Chls-streaming-client&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();