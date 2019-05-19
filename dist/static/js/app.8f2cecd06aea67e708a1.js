webpackJsonp([10],{

/***/ "3k2l":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4tKP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__("mw3O");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/iview/dist/iview.js
var iview = __webpack_require__("BTaQ");
var iview_default = /*#__PURE__*/__webpack_require__.n(iview);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("mtWM");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/tool/common.js
const getCookie = function (objName) {
  var arrStr = document.cookie.split("; ");
  for (var i = 0; i < arrStr.length; i++) {
    var temp = arrStr[i].split("=");
    if (temp[0] == objName) return unescape(temp[1]);
  }
};

const dateFormat = function (time, flag = false) {
  let date = new Date(time);
  let str = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  if (!flag) {
    return str;
  }
  return `${str} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
// CONCATENATED MODULE: ./src/tool/axios.js




/* harmony default export */ var tool_axios = __webpack_exports__["a"] = (function (config) {
  // config.data.sesionId = getCookie('sessionId')
  // config.data.coachSessionId = getCookie('coachSessionId')
  if (config.isFormData) {
    config.data = lib_default.a.stringify(config.data);
    !config.headers && (config.headers = {});
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  return axios_default()(config).then(res => {
    if (res.data.status >= 1) {
      config.showSuccess && iview_default.a.Notice.success({
        duration: 2,
        title: '通知',
        desc: res.data.msg
      });
      return Promise.resolve(res);
    }

    if (res.data.status === 0) {
      !config.hiddenError && iview_default.a.Notice.error({
        duration: 2,
        title: '提示',
        desc: res.data.msg
      });
      return Promise.reject(res);
    }

    if (res.data.status < 0) {
      location.href = `#/login?returnUrl=${location.href}`;
      localStorage.removeItem('user');
      return Promise.reject(res);
    }
  });
});

/***/ }),

/***/ "7sYg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "CTX+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Gb7R":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ISHt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vux/src/libs/clean-style.js
var clean_style = __webpack_require__("wmxo");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/group/index.vue
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



/* harmony default export */ var group = ({
  name: 'group',
  methods: {
    cleanStyle: clean_style["a" /* default */]
  },
  props: {
    title: String,
    titleColor: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    gutter: [String, Number],
    footerTitle: String,
    footerTitleColor: String
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/group/index.vue
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



/* harmony default export */ var components_group = ({
  name: 'group',
  methods: {
    cleanStyle: clean_style["a" /* default */]
  },
  props: {
    title: String,
    titleColor: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    gutter: [String, Number],
    footerTitle: String,
    footerTitleColor: String
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4e216ed4","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/group/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.title)?_c('div',{staticClass:"weui-cells__title",style:(_vm.cleanStyle({
    color: _vm.titleColor
  })),domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),_vm._v(" "),_vm._t("title"),_vm._v(" "),_c('div',{staticClass:"weui-cells",class:{
    'vux-no-group-title': !_vm.title
  },style:(_vm.cleanStyle({
    marginTop: typeof _vm.gutter === 'number' ? (_vm.gutter + 'px') : _vm.gutter
  }))},[_vm._t("after-title"),_vm._v(" "),_vm._t("default")],2),_vm._v(" "),(_vm.footerTitle)?_c('div',{staticClass:"weui-cells__title vux-group-footer-title",style:(_vm.cleanStyle({
    color: _vm.footerTitleColor
  })),domProps:{"innerHTML":_vm._s(_vm.footerTitle)}}):_vm._e()],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_group = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/group/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("qHQD")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_group,
  src_components_group,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vux_src_components_group = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/inline-desc/index.vue
//
//
//
//

/* harmony default export */ var inline_desc = ({
  name: 'inline-desc'
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/inline-desc/index.vue
//
//
//
//

/* harmony default export */ var components_inline_desc = ({
  name: 'inline-desc'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-291627fe","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/inline-desc/index.vue
var inline_desc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"vux-label-desc"},[_vm._t("default")],2)}
var inline_desc_staticRenderFns = []
var inline_desc_esExports = { render: inline_desc_render, staticRenderFns: inline_desc_staticRenderFns }
/* harmony default export */ var src_components_inline_desc = (inline_desc_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/inline-desc/index.vue
function inline_desc_injectStyle (ssrContext) {
  __webpack_require__("3k2l")
}
var inline_desc_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var inline_desc___vue_template_functional__ = false
/* styles */
var inline_desc___vue_styles__ = inline_desc_injectStyle
/* scopeId */
var inline_desc___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var inline_desc___vue_module_identifier__ = null
var inline_desc_Component = inline_desc_normalizeComponent(
  components_inline_desc,
  src_components_inline_desc,
  inline_desc___vue_template_functional__,
  inline_desc___vue_styles__,
  inline_desc___vue_scopeId__,
  inline_desc___vue_module_identifier__
)

/* harmony default export */ var vux_src_components_inline_desc = (inline_desc_Component.exports);

// EXTERNAL MODULE: ./node_modules/vux/src/libs/router.js
var router = __webpack_require__("0FxO");

// EXTERNAL MODULE: ./node_modules/vux/src/components/cell/props.js
var props = __webpack_require__("2IIR");

// EXTERNAL MODULE: ./node_modules/vux/src/libs/get-parent-prop.js
var get_parent_prop = __webpack_require__("vLYD");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/cell/index.vue
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







/* harmony default export */ var cell = ({
  name: 'cell',
  components: {
    InlineDesc: vux_src_components_inline_desc
  },
  props: Object(props["a" /* default */])(),
  created() {
    /* istanbul ignore if */
    if (false) {
      console.warn('[VUX] 抱歉，当前组件[cell]要求更新依赖 vux-loader@latest');
    }
  },
  beforeMount() {
    this.hasTitleSlot = !!this.$slots.title;
    /* istanbul ignore if */
    if (this.$slots.value && "production" === 'development') {
      console.warn('[VUX] [cell] slot=value 已经废弃，请使用默认 slot 替代');
    }
  },
  computed: {
    labelStyles() {
      return Object(clean_style["a" /* default */])({
        width: Object(get_parent_prop["a" /* default */])(this, 'labelWidth'),
        textAlign: Object(get_parent_prop["a" /* default */])(this, 'labelAlign'),
        marginRight: Object(get_parent_prop["a" /* default */])(this, 'labelMarginRight')
      });
    },
    valueClass() {
      return {
        'vux-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
        'vux-cell-align-left': this.valueAlign === 'left',
        'vux-cell-arrow-transition': !!this.arrowDirection,
        'vux-cell-arrow-up': this.arrowDirection === 'up',
        'vux-cell-arrow-down': this.arrowDirection === 'down'
      };
    },
    labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    },
    style() {
      if (this.alignItems) {
        return {
          alignItems: this.alignItems
        };
      }
    }
  },
  methods: {
    onClick() {
      /* istanbul ignore next */
      !this.disabled && Object(router["a" /* go */])(this.link, this.$router);
    }
  },
  data() {
    return {
      hasTitleSlot: true,
      hasMounted: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/cell/index.vue
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







/* harmony default export */ var components_cell = ({
  name: 'cell',
  components: {
    InlineDesc: vux_src_components_inline_desc
  },
  props: Object(props["a" /* default */])(),
  created() {
    /* istanbul ignore if */
    if (false) {
      console.warn('[VUX] 抱歉，当前组件[cell]要求更新依赖 vux-loader@latest');
    }
  },
  beforeMount() {
    this.hasTitleSlot = !!this.$slots.title;
    /* istanbul ignore if */
    if (this.$slots.value && "production" === 'development') {
      console.warn('[VUX] [cell] slot=value 已经废弃，请使用默认 slot 替代');
    }
  },
  computed: {
    labelStyles() {
      return Object(clean_style["a" /* default */])({
        width: Object(get_parent_prop["a" /* default */])(this, 'labelWidth'),
        textAlign: Object(get_parent_prop["a" /* default */])(this, 'labelAlign'),
        marginRight: Object(get_parent_prop["a" /* default */])(this, 'labelMarginRight')
      });
    },
    valueClass() {
      return {
        'vux-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
        'vux-cell-align-left': this.valueAlign === 'left',
        'vux-cell-arrow-transition': !!this.arrowDirection,
        'vux-cell-arrow-up': this.arrowDirection === 'up',
        'vux-cell-arrow-down': this.arrowDirection === 'down'
      };
    },
    labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    },
    style() {
      if (this.alignItems) {
        return {
          alignItems: this.alignItems
        };
      }
    }
  },
  methods: {
    onClick() {
      /* istanbul ignore next */
      !this.disabled && Object(router["a" /* go */])(this.link, this.$router);
    }
  },
  data() {
    return {
      hasTitleSlot: true,
      hasMounted: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ca2d6776","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/cell/index.vue
var cell_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-cell",class:{
    'vux-tap-active': _vm.isLink || !!_vm.link,
    'weui-cell_access': _vm.isLink || !!_vm.link,
    'vux-cell-no-border-intent': !_vm.borderIntent,
    'vux-cell-disabled': _vm.disabled
  },style:(_vm.style),on:{"click":_vm.onClick}},[_c('div',{staticClass:"weui-cell__hd"},[_vm._t("icon")],2),_vm._v(" "),_c('div',{staticClass:"vux-cell-bd",class:{'vux-cell-primary': _vm.primary === 'title' && _vm.valueAlign !== 'left'}},[_c('p',[(_vm.title || _vm.hasTitleSlot)?_c('label',{staticClass:"vux-label",class:_vm.labelClass,style:(_vm.labelStyles)},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2):_vm._e(),_vm._v(" "),_vm._t("after-title")],2),_vm._v(" "),_c('inline-desc',[_vm._t("inline-desc",[_vm._v(_vm._s(_vm.inlineDesc))])],2)],1),_vm._v(" "),_c('div',{staticClass:"weui-cell__ft",class:_vm.valueClass},[_vm._t("value"),_vm._v(" "),_vm._t("default",[_vm._v(_vm._s(_vm.value))]),_vm._v(" "),(_vm.isLoading)?_c('i',{staticClass:"weui-loading"}):_vm._e()],2),_vm._v(" "),_vm._t("child")],2)}
var cell_staticRenderFns = []
var cell_esExports = { render: cell_render, staticRenderFns: cell_staticRenderFns }
/* harmony default export */ var src_components_cell = (cell_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/cell/index.vue
function cell_injectStyle (ssrContext) {
  __webpack_require__("7sYg")
}
var cell_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var cell___vue_template_functional__ = false
/* styles */
var cell___vue_styles__ = cell_injectStyle
/* scopeId */
var cell___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var cell___vue_module_identifier__ = null
var cell_Component = cell_normalizeComponent(
  components_cell,
  src_components_cell,
  cell___vue_template_functional__,
  cell___vue_styles__,
  cell___vue_scopeId__,
  cell___vue_module_identifier__
)

/* harmony default export */ var vux_src_components_cell = (cell_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/HelloFromVux.vue




/* harmony default export */ var HelloFromVux = ({
  components: {
    Group: vux_src_components_group,
    Cell: vux_src_components_cell
  },
  data() {
    return {

      msg: 'Hello World!'
    };
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/HelloFromVux.vue




/* harmony default export */ var components_HelloFromVux = ({
  components: {
    Group: vux_src_components_group,
    Cell: vux_src_components_cell
  },
  data() {
    return {

      msg: 'Hello World!'
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4fb68f8c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/HelloFromVux.vue
var HelloFromVux_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('group',{attrs:{"title":"cell demo"}},[_c('cell',{attrs:{"title":"VUX","value":"cool","is-link":""}})],1)],1)}
var HelloFromVux_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-demo"},[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__("ge4Q")}}),_vm._v(" "),_c('h1')])}]
var HelloFromVux_esExports = { render: HelloFromVux_render, staticRenderFns: HelloFromVux_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_components_HelloFromVux = (HelloFromVux_esExports);
// CONCATENATED MODULE: ./src/components/HelloFromVux.vue
function HelloFromVux_injectStyle (ssrContext) {
  __webpack_require__("Gb7R")
}
var HelloFromVux_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var HelloFromVux___vue_template_functional__ = false
/* styles */
var HelloFromVux___vue_styles__ = HelloFromVux_injectStyle
/* scopeId */
var HelloFromVux___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var HelloFromVux___vue_module_identifier__ = null
var HelloFromVux_Component = HelloFromVux_normalizeComponent(
  components_HelloFromVux,
  selectortype_template_index_0_src_components_HelloFromVux,
  HelloFromVux___vue_template_functional__,
  HelloFromVux___vue_styles__,
  HelloFromVux___vue_scopeId__,
  HelloFromVux___vue_module_identifier__
)

/* harmony default export */ var src_components_HelloFromVux = __webpack_exports__["default"] = (HelloFromVux_Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./node_modules/fastclick/lib/fastclick.js
var fastclick = __webpack_require__("v5o6");
var fastclick_default = /*#__PURE__*/__webpack_require__.n(fastclick);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'app'
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//

/* harmony default export */ var selectortype_script_index_0_src_App = ({
  name: 'app'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-11407e04","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("CTX+")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  selectortype_script_index_0_src_App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__("zL8q");
var element_ui_common_default = /*#__PURE__*/__webpack_require__.n(element_ui_common);

// EXTERNAL MODULE: ./src/components/HelloFromVux.vue + 15 modules
var HelloFromVux = __webpack_require__("ISHt");

// EXTERNAL MODULE: ./src/tool/axios.js + 1 modules
var axios = __webpack_require__("4tKP");

// CONCATENATED MODULE: ./src/router.js




vue_esm["default"].use(vue_router_esm["a" /* default */]);

const appRouter = [{
    path: '/',
    meta: {
        keepAlive: true
    },
    component: resolve => {
        new Promise(function(resolve) { resolve(); }).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("ISHt")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/index',
    meta: {
        title: '学员页',
        keepAlive: false
    },
    component: resolve => {
        Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(2)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("UDua")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/choice',
    meta: {
        title: '学员页',
        keepAlive: false
    },
    component: resolve => {
        Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(1)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("SQ7c")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/fashion',
    meta: {
        title: '学员页',
        keepAlive: false
    },
    component: resolve => {
        Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(8)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("lRES")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/reliable',
    meta: {
        title: '学员页',
        keepAlive: false
    },
    component: resolve => {
        Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(6)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("OzEC")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/tech',
    meta: {
        title: '学员页',
        keepAlive: false
    },
    component: resolve => {
        Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(7)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("T+wX")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/introduction',
    meta: {
        title: '学员页',
        keepAlive: false
    },
    component: resolve => {
        Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(5)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("3YFA")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/primary',
    meta: {
        title: '学员页',
        keepAlive: false
    },
    component: resolve => {
        Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(4)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("qFt4")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/secondary',
    meta: {
        title: '学员页',
        keepAlive: false
    },
    component: resolve => {
        Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(3)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("sY+9")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}];
// EXTERNAL MODULE: ./node_modules/vue-wechat-title/vue-wechat-title.js
var vue_wechat_title = __webpack_require__("YqKu");
var vue_wechat_title_default = /*#__PURE__*/__webpack_require__.n(vue_wechat_title);

// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.









vue_esm["default"].use(vue_wechat_title_default.a);
vue_esm["default"].use(vue_router_esm["a" /* default */]);
vue_esm["default"].use(element_ui_common_default.a);
vue_esm["default"].prototype.$axios = axios["a" /* default */];
//  const routes = [{
//   path: '/',
//   component: Home
// }]
const routes = appRouter;
const router = new vue_router_esm["a" /* default */]({
  routes
});

fastclick_default.a.attach(document.body);

vue_esm["default"].config.productionTip = false;

/* eslint-disable no-new */
new vue_esm["default"]({
  router,
  render: h => h(src_App)
}).$mount('#app-box');

/***/ }),

/***/ "ge4Q":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/vux_logo.79cbb96.png";

/***/ }),

/***/ "qHQD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.8f2cecd06aea67e708a1.js.map