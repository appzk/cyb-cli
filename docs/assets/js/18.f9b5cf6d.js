(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{173:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"使用rem等比适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用rem等比适配"}},[t._v("#")]),t._v(" 使用REM等比适配")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("CYB已集成业界先进的移动端REM解决方案，开发人员照常使用"),a("code",[t._v("px")]),t._v("单位书写样式，CYB会将样式中的"),a("code",[t._v("px")]),t._v("单位根据配置自动计算并转换为"),a("code",[t._v("rem")]),t._v("单位。")])]),t._v(" "),a("blockquote",[a("p",[t._v("如果您使用了第三方框架，比如"),a("code",[t._v("framework7")]),t._v("来开发项目，CYB也会自动将第三方框架中的"),a("code",[t._v("px")]),t._v("单位自动计算并转换为"),a("code",[t._v("rem")]),t._v("单位。")])]),t._v(" "),a("h2",{attrs:{id:"开始使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始使用"}},[t._v("#")]),t._v(" 开始使用")]),t._v(" "),a("ul",[a("li",[t._v("在"),a("code",[t._v("cyb.config.js")]),t._v("中开启"),a("code",[t._v("useREM")]),t._v("配置")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cyb.config.js")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  useREM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    css"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      available"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//启用 css/less/sass/scss/styl 中的 px => rem 转换")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("在"),a("code",[t._v("src/static/style")]),t._v("样式目录新建公共样式"),a("code",[t._v("rem.less")]),t._v("(或者sass/scss/styl)")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("static\n└── styles\n    ├── index.less\n    ├── common.less\n    └── lib\n        └── rem.less\n")])])]),a("p",[t._v("以上"),a("code",[t._v("rem.less")]),t._v("内容为：")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* rem.less */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// REM 适配")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 375px (iPhone 6) 此为基准值, 与视觉设计稿 `宽度/2` 保持一致")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16PX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 13.6533333 = 320*16/375 (iPhone 5)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@media only screen and "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("min-width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 320px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 13.6533333PX "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// base root size (iPhone 6)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@media only screen and "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("min-width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 375px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16PX "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 17.0666667 = 400*16/375 (Most Android)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@media only screen and "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("min-width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 17.0666667PX "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 17.664 = 414*16/375 (iPhone 6 Plus)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@media only screen and "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("min-width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 414px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 17.664PX "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 20.48 = 480*16/375 (iPad)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@media only screen and "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("min-width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 480px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20.48PX "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 桌面")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@media only screen and "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("min-width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 768px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16PX "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("blockquote",[a("p",[t._v("可自行根据实际项目使用高级配置设置基准值，CYB默认使用iphone6屏幕下"),a("code",[t._v("16px")]),t._v("为基准值。")])]),t._v(" "),a("ul",[a("li",[t._v("在项目公共样式引入"),a("code",[t._v("rem.less")])])]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* index.less 或 common.less */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./lib/rem.less"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("发布代码时CYB会将样式中的"),a("code",[t._v("px")]),t._v("转换为"),a("code",[t._v("rem")]),t._v("。")])]),t._v(" "),a("blockquote",[a("p",[t._v("如果某些样式不需要"),a("code",[t._v("REM")]),t._v("转换，可使用大写的"),a("code",[t._v("Px")]),t._v("或"),a("code",[t._v("PX")]),t._v("，CYB将忽略转换。")])]),t._v(" "),a("h2",{attrs:{id:"高级配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级配置"}},[t._v("#")]),t._v(" 高级配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cyb.config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 启用 PX => REM 自动化转换\n   * 如果启用 REM 转换需要在公共样式中对<html>设置基准值\n   * 通过 media媒体查询 为 <html> 设置不同值 以实现在不同的屏幕中等比缩放\n   */")]),t._v("\n  useREM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    css"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      available"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//启用 css/less/sass/scss 中的 px => rem 转换")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n       * 配置参考：https://github.com/cuth/postcss-pxtorem\n       */")]),t._v("\n      options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rootValue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//相对于html根字体大小")]),t._v("\n        unitPrecision"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//允许REM单位增长到的十进制数")]),t._v("\n        propList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可以从px更改为rem的属性")]),t._v("\n        selectorBlackList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//要忽略的选择器")]),t._v("\n        replace"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//替换包含rems的规则，而不是添加fallback")]),t._v("\n        mediaQuery"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//允许在媒体查询中转换px")]),t._v("\n        minPixelValue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置要替换的最小像素值")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);