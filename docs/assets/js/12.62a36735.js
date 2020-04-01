(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{178:function(a,s,t){"use strict";t.r(s);var n=t(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"使用图片无损压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用图片无损压缩","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用图片无损压缩")]),a._v(" "),t("p",[a._v("图像通常是网页中需要下载字节最多的部分，并且通常占据着一些重要的视觉空间。因此，压缩优化图像通常可以为我们的网站带来最大量的数据节省和性能提升：浏览器需要下载的数据量越少，客户端的带宽压力就越小，并且浏览器可以下载并在屏幕内渲染有效内容的速度越快。")]),a._v(" "),t("h2",{attrs:{id:"压缩全站图片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩全站图片","aria-hidden":"true"}},[a._v("#")]),a._v(" 压缩全站图片")]),a._v(" "),t("p",[t("strong",[a._v("1、将所有需要压缩的图片放在"),t("code",[a._v("src/static/images")]),a._v("目录下")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("└── src\n    └── static\n        └── images\n             ├── "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bg")]),a._v("\n             │   └── rank.jpg\n             ├── graph.png\n             └── scroll-demo.gif\n")])])]),t("p",[t("strong",[a._v("2、执行"),t("code",[a._v("cyb imagemin")]),a._v("命令")])]),a._v(" "),t("p",[a._v("根据提示选择图片压缩质量")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("➜  test1 cyb imagemin\n---------------------------------------\n* 欢迎使用 CYB 前端模块化工程构建工具 *\n---------------------------------------\n? 请填写jpg/jpeg压缩质量：（1～100） 85\n? 请填写Gif压缩质量：（1～3） 1\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("13:34:48"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Start imagemin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("13:34:49"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" gulp-imagemin: ✔ scroll-demo.gif "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("already optimized"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("13:34:49"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" gulp-imagemin: ✔ bg/rank.jpg "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("saved 251 kB - 72.7%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("13:34:49"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" gulp-imagemin: ✔ graph.png "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("saved 342 kB - 73.2%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("13:34:49"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" gulp-imagemin: Minified 2 images "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("saved 594 kB - 73%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("13:34:49"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Completed imagemin.\n")])])]),t("h2",{attrs:{id:"压缩单张或多张图片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩单张或多张图片","aria-hidden":"true"}},[a._v("#")]),a._v(" 压缩单张或多张图片")]),a._v(" "),t("p",[t("strong",[a._v("1、进入需要压缩的图片目录")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" project/src/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/图片目录\n")])])]),t("p",[t("strong",[a._v("2、执行"),t("code",[a._v("cyb imagemin")]),a._v("命令，命令后面填写压缩图片的文件名")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cyb imagemin graph.png rank.jpg\n")])])]),t("p",[a._v("根据提示填写压缩质量")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("---------------------------------------\n* 欢迎使用 CYB 前端模块化工程构建工具 *\n---------------------------------------\n? 请填写jpg/jpeg压缩质量：（1～100） 85\n✔ Images have been compressed "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" graph.png\n✔ Images have been compressed "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" rank.jpg\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);