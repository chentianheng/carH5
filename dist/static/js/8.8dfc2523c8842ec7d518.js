webpackJsonp([8],{

/***/ "EPuO":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("isjg");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("d6dc9c2a", content, true, {});

/***/ }),

/***/ "isjg":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "\n.container[data-v-756cc9c2]{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: auto;\n    background: black url(\"https://zhaocha.yf-gz.cn/file/1558284360980_a8d8cf2ff4f4c39722919ec31a976f63.png\") no-repeat ;\n    background-size:  auto 100%;\n    width: 100%;\n}\n.headImg[data-v-756cc9c2] {\n    position: absolute;\n    top: 2rem;\n    left: 1rem;\n    width: 3rem;\n    height: 3rem;\n    padding: 0.5rem;\n    background-color: #FFFFFF;\n}\n.username[data-v-756cc9c2] {\n    position: absolute;\n    top: 6rem;\n    left: 1.5rem;\n    color: #FFFFFF;\n}\n.userTitle[data-v-756cc9c2] {\n    font-size: 1.2rem;\n    position: absolute;\n    top: 9rem;\n    left: 1.5rem;\n    color: #FFFFFF;\n    background-color: black;\n    opacity: 0.6;\n}\n.subtitle1[data-v-756cc9c2]{\n    position: absolute;\n    top: 11rem;\n    left: 1.5rem;\n    color: #FFFFFF;\n    background-color: black;\n    opacity: 0.6;\n}\n.subtitle2[data-v-756cc9c2]{\n    position: absolute;\n    top: 12.5rem;\n    left: 1.5rem;\n    color: #FFFFFF;\n    background-color: black;\n    opacity: 0.6;\n}\n.XC40[data-v-756cc9c2]{\n    position: absolute;\n    left: 1.5rem;\n    bottom: 8rem;\n    width: 30%;\n}\n.backBtn[data-v-756cc9c2]{\n    position: absolute;\n    left: 1.5rem;\n    bottom: 5rem;\n    border: 0.1rem solid #FFFFFF;\n    padding: 0.2rem;\n}\n.nextBtn[data-v-756cc9c2]{\n    position: absolute;\n    left: 8rem;\n    bottom: 5rem;\n    border: 0.1rem solid #FFFFFF;\n    padding: 0.2rem;\n}\n.choiceBtn[data-v-756cc9c2]{\n    border-radius: 0;\n    background-color: transparent;\n    border: 0.1rem solid #FFFFFF;\n    padding: 0.2rem 0.4rem;\n    color: #FFFFFF;\n}\n", "", {"version":3,"sources":["/Users/huangchengjie/Documents/yunfeng/汽车H5/carH5/src/drive/choice/fashion.vue"],"names":[],"mappings":";AACA;IACI,cAAc;IACd,uBAAuB;IACvB,oBAAoB;IACpB,aAAa;IACb,qHAAqH;IACrH,4BAA4B;IAC5B,YAAY;CACf;AACD;IACI,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,0BAA0B;CAC7B;AACD;IACI,mBAAmB;IACnB,UAAU;IACV,aAAa;IACb,eAAe;CAClB;AACD;IACI,kBAAkB;IAClB,mBAAmB;IACnB,UAAU;IACV,aAAa;IACb,eAAe;IACf,wBAAwB;IACxB,aAAa;CAChB;AACD;IACI,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,eAAe;IACf,wBAAwB;IACxB,aAAa;CAChB;AACD;IACI,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,eAAe;IACf,wBAAwB;IACxB,aAAa;CAChB;AACD;IACI,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,WAAW;CACd;AACD;IACI,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,6BAA6B;IAC7B,gBAAgB;CACnB;AACD;IACI,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,gBAAgB;CACnB;AACD;IACI,iBAAiB;IACjB,8BAA8B;IAC9B,6BAA6B;IAC7B,uBAAuB;IACvB,eAAe;CAClB","file":"fashion.vue","sourcesContent":["\n.container[data-v-756cc9c2]{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: auto;\n    background: black url(\"https://zhaocha.yf-gz.cn/file/1558284360980_a8d8cf2ff4f4c39722919ec31a976f63.png\") no-repeat ;\n    background-size:  auto 100%;\n    width: 100%;\n}\n.headImg[data-v-756cc9c2] {\n    position: absolute;\n    top: 2rem;\n    left: 1rem;\n    width: 3rem;\n    height: 3rem;\n    padding: 0.5rem;\n    background-color: #FFFFFF;\n}\n.username[data-v-756cc9c2] {\n    position: absolute;\n    top: 6rem;\n    left: 1.5rem;\n    color: #FFFFFF;\n}\n.userTitle[data-v-756cc9c2] {\n    font-size: 1.2rem;\n    position: absolute;\n    top: 9rem;\n    left: 1.5rem;\n    color: #FFFFFF;\n    background-color: black;\n    opacity: 0.6;\n}\n.subtitle1[data-v-756cc9c2]{\n    position: absolute;\n    top: 11rem;\n    left: 1.5rem;\n    color: #FFFFFF;\n    background-color: black;\n    opacity: 0.6;\n}\n.subtitle2[data-v-756cc9c2]{\n    position: absolute;\n    top: 12.5rem;\n    left: 1.5rem;\n    color: #FFFFFF;\n    background-color: black;\n    opacity: 0.6;\n}\n.XC40[data-v-756cc9c2]{\n    position: absolute;\n    left: 1.5rem;\n    bottom: 8rem;\n    width: 30%;\n}\n.backBtn[data-v-756cc9c2]{\n    position: absolute;\n    left: 1.5rem;\n    bottom: 5rem;\n    border: 0.1rem solid #FFFFFF;\n    padding: 0.2rem;\n}\n.nextBtn[data-v-756cc9c2]{\n    position: absolute;\n    left: 8rem;\n    bottom: 5rem;\n    border: 0.1rem solid #FFFFFF;\n    padding: 0.2rem;\n}\n.choiceBtn[data-v-756cc9c2]{\n    border-radius: 0;\n    background-color: transparent;\n    border: 0.1rem solid #FFFFFF;\n    padding: 0.2rem 0.4rem;\n    color: #FFFFFF;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "lRES":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/tool/classFactory/car.js
var car = __webpack_require__("AQrU");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/drive/choice/fashion.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var fashion = ({
    data() {
        return {
            username: '范西客'
        };
    },
    methods: {
        hrefChoice() {
            this.$router.push({ path: '/choice' });
        },
        hrefIntroduction() {
            this.$router.push({ path: '/introduction' });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/drive/choice/fashion.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var choice_fashion = ({
    data() {
        return {
            username: '范西客'
        };
    },
    methods: {
        hrefChoice() {
            this.$router.push({ path: '/choice' });
        },
        hrefIntroduction() {
            this.$router.push({ path: '/introduction' });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-756cc9c2","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/drive/choice/fashion.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"headImg"}),_vm._v(" "),_c('div',{staticClass:"username"},[_vm._v(_vm._s(_vm.username))]),_vm._v(" "),_c('div',{staticClass:"userTitle"},[_vm._v("就是时尚范西客")]),_vm._v(" "),_c('div',{staticClass:"subtitle1"},[_vm._v("讲究设计、质感、搭配")]),_vm._v(" "),_c('div',{staticClass:"subtitle2"},[_vm._v("你就是行走在都市中的时髦精")]),_vm._v(" "),_c('img',{staticClass:"XC40",attrs:{"src":__webpack_require__("eQpc")}}),_vm._v(" "),_c('div',{staticClass:"backBtn"},[_c('button',{staticClass:"choiceBtn",on:{"click":_vm.hrefChoice}},[_vm._v("再测一次")])]),_vm._v(" "),_c('div',{staticClass:"nextBtn"},[_c('button',{staticClass:"choiceBtn",on:{"click":_vm.hrefIntroduction}},[_vm._v("与沃同行")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var drive_choice_fashion = (esExports);
// CONCATENATED MODULE: ./src/drive/choice/fashion.vue
function injectStyle (ssrContext) {
  __webpack_require__("EPuO")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-756cc9c2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  choice_fashion,
  drive_choice_fashion,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_drive_choice_fashion = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=8.8dfc2523c8842ec7d518.js.map