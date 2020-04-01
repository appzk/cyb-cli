(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{183:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),a("p",[s._v("CYB CLI 天生支持 "),a("a",{attrs:{href:"https://postcss.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PostCSS"),a("OutboundLink")],1),s._v("、"),a("a",{attrs:{href:"https://github.com/css-modules/css-modules",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS Modules"),a("OutboundLink")],1),s._v(" 和包含 "),a("a",{attrs:{href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Sass"),a("OutboundLink")],1),s._v("、"),a("a",{attrs:{href:"http://lesscss.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Less"),a("OutboundLink")],1),s._v("、"),a("a",{attrs:{href:"http://stylus-lang.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Stylus"),a("OutboundLink")],1),s._v(" 在内的预处理器。")]),s._v(" "),s._m(1),s._v(" "),a("p",[s._v("CYB CLI 内部使用了 PostCSS。默认开启了 "),a("a",{attrs:{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer"}},[s._v("autoprefixer"),a("OutboundLink")],1),s._v("，我们如果要配置目标浏览器，可以通过"),a("code",[s._v("cyb.config.js")]),s._v("中的"),a("code",[s._v("autoprefixer.options")]),s._v("字段配置。CYB CLI 也支持通过"),a("code",[s._v("postcss.config.js")]),s._v("配置文件来配置PostCSS，如果使用了"),a("code",[s._v("postcss.config.js")]),s._v("配置文件，需要自行独立配置 "),a("code",[s._v("autoprefixer")]),s._v("。")]),s._v(" "),s._m(2),s._v(" "),a("p",[s._v("你可以通过 <style module > 以开箱即用的方式使用 CSS Modules。\n如果想在 JavaScript 中作为 CSS Modules 导入 CSS 或其它预处理文件，该文件应该以 .module.(css|less|sass|scss|styl) 结尾：")]),s._v(" "),s._m(3),a("p",[s._v("如果你想去掉文件名中的 .module，可以设置 cyb.config.js 中的 webpack.cssLoader.options.module 为 true：")]),s._v(" "),s._m(4),s._m(5),s._v(" "),a("p",[s._v("有的时候你想要向 webpack 的预处理器 loader 传递选项。你可以使用 cyb.config.js 中的 webpack 选项。支持的Loader包括：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/webpack-contrib/css-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("css-loader"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/webpack-contrib/sass-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("sass-loader"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/webpack-contrib/less-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("less-loader"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/shama/stylus-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("stylus-loader"),a("OutboundLink")],1)])]),s._v(" "),s._m(6)])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"css相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css相关"}},[this._v("#")]),this._v(" CSS相关")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"postcss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postcss"}},[this._v("#")]),this._v(" PostCSS")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"css-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-modules"}},[this._v("#")]),this._v(" CSS Modules")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" styles "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo.module.css'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 所有支持的预处理器都一样工作")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sassStyles "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo.module.scss'")]),s._v("\n")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// cyb.config.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  webpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    cssLoader"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      options"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        importLoaders"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"向预处理器-loader-传递选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#向预处理器-loader-传递选项"}},[this._v("#")]),this._v(" 向预处理器 Loader 传递选项")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  webpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * css-loader配置\n     */")]),s._v("\n    cssLoader"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      options"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        sourceMap"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * less-loader配置\n     */")]),s._v("\n    lessLoader"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      options"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        sourceMap"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * sass-loader配置\n     */")]),s._v("\n    sassLoader"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      options"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        sourceMap"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * stylus-loader配置\n     */")]),s._v("\n    stylusLoader"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      options"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        sourceMap"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])}],!1,null,null,null);t.default=n.exports}}]);