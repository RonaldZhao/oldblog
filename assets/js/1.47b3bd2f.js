(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{64:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"python面试题收集整理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python面试题收集整理","aria-hidden":"true"}},[t._v("#")]),t._v(" Python面试题收集整理")]),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#百度大牛总结十条python面试题检验你的真实水平"}},[t._v("百度大牛总结十条Python面试题检验你的真实水平")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-类继承"}},[t._v("1.类继承")])])])])])]),a("p"),a("h2",{attrs:{id:"百度大牛总结十条python面试题检验你的真实水平"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#百度大牛总结十条python面试题检验你的真实水平","aria-hidden":"true"}},[t._v("#")]),t._v(" 百度大牛总结十条Python面试题检验你的真实水平")]),a("h3",{attrs:{id:"_1-类继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-类继承","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.类继承")]),a("p",[t._v("问题：有如下一段代码：")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("A")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token builtin"}},[t._v("object")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("show")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'base show'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("B")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("show")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'derived show'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nobj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" B"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nobj"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("那么应该如何调用"),a("code",[t._v("A")]),t._v("的"),a("code",[t._v("show")]),t._v("方法？")]),a("p",[t._v("答案：")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("obj"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__class__ "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" A\nobj"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("解释："),a("code",[t._v("__class__")]),t._v("方法指向了类对象，只要给他赋值类型"),a("code",[t._v("A")]),t._v(" ，然后调用方法"),a("code",[t._v("show")]),t._v("，但是用完了记得修改回来。")]),a("p",[a("a",{attrs:{href:"http://developer.51cto.com/art/201802/565802.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章来源")])])])}],!1,null,null,null);s.default=o.exports}}]);