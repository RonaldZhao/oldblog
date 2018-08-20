(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{185:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p"),t._m(1),n("p"),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),n("p",[t._v("闭包，顾名思义，就是一个封闭的包裹，里面包裹着自由变量，就像在类里面定义的属性值一样，自由变量的可见范围随同包裹，哪里可以访问到这个包裹，哪里就可以访问到这个自由变量。")]),t._v(" "),t._m(8),t._v(" "),n("p",[t._v("闭包避免了使用全局变量，此外，闭包允许将函数与其所操作的某些数据（环境）关连起来。这一点与面向对象编程是非常类似的，在面对象编程中，对象允许我们将某些数据（对象的属性）与一个或者多个方法相关联。")]),t._v(" "),n("p",[t._v("一般来说，当对象中只有一个方法时，这时使用闭包是更好的选择。来看一个例子：")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),n("p",[n("a",{attrs:{href:"https://foofish.net/python-closure.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文来源"),n("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"一文看懂python闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一文看懂python闭包","aria-hidden":"true"}},[this._v("#")]),this._v(" 一文看懂Python闭包")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#热身"}},[this._v("热身")])]),s("li",[s("a",{attrs:{href:"#为什么要使用闭包？"}},[this._v("为什么要使用闭包？")])]),s("li",[s("a",{attrs:{href:"#稍加深入"}},[this._v("稍加深入")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"热身"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#热身","aria-hidden":"true"}},[this._v("#")]),this._v(" 热身")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("函数作为"),s("strong",[this._v("第一类对象")]),this._v("，它可以作为函数的返回值返回，现在我们来考虑如下的例子：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("print_msg")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("# print_msg 是外围函数")]),t._v("\n    msg "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"zen of python"')]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("printer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("# printer 是嵌套函数")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" printer\n\nanother "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" print_msg"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("# 输出 zen of python")]),t._v("\nanother"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这段代码不同的地方在于内部函数"),s("code",[this._v("printer")]),this._v("直接作为返回值返回了。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("一般情况下，函数中的局部变量仅在函数的执行期间可用，一旦"),n("code",[t._v("print_msg()")]),t._v("执行过后，我们会认为"),n("code",[t._v("msg")]),t._v("变量将不再可用。然而，在这里我们发现"),n("code",[t._v("print_msg")]),t._v("执行完之后，在调用"),n("code",[t._v("another")]),t._v("的时候"),n("code",[t._v("msg")]),t._v("变量的值正常输出了，这就是闭包的作用。"),n("strong",[t._v("闭包使得局部变量在函数外被访问成为可能")]),t._v("。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("这里的"),n("code",[t._v("another")]),t._v("就是一个闭包，闭包本质上是一个函数，它有两部分组成，"),n("code",[t._v("printer")]),t._v("函数和变量"),n("code",[t._v("msg")]),t._v("。闭包使得这些变量的值始终保存在"),n("strong",[t._v("内存")]),t._v("中。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"为什么要使用闭包？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用闭包？","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么要使用闭包？")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("adder")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("wrapper")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" y\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" wrapper\nadder5 "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" adder"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("5")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nadder5"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("10")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("# 输出 15")]),t._v("\nadder5"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("6")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("# 输出 11")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这比用类来实现更优雅，此外"),s("strong",[this._v("装饰器")]),this._v("也是基于闭包的一种应用场景。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"稍加深入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#稍加深入","aria-hidden":"true"}},[this._v("#")]),this._v(" 稍加深入")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("所有函数都有一个"),n("code",[t._v("__closure__")]),t._v("属性，如果这个函数是一个闭包的话，那么它返回的是一个由"),n("code",[t._v("cell")]),t._v("对象 组成的元组对象。"),n("code",[t._v("cell")]),t._v("对象的"),n("code",[t._v("cell_contents")]),t._v("属性就是闭包中的自由变量。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token operator"}},[t._v(">>")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" adder"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__closure__\n"),n("span",{attrs:{class:"token operator"}},[t._v(">>")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" adder5"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__closure__\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("cell at "),n("span",{attrs:{class:"token number"}},[t._v("0x103075910")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("object")]),t._v(" at "),n("span",{attrs:{class:"token number"}},[t._v("0x7fd251604518")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v(">>")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" adder5"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__closure__"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cell_contents\n"),n("span",{attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v(">>")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这解释了为什么局部变量脱离函数之后，还可以在函数之外被访问的原因的，因为它存储在了闭包的 "),s("code",[this._v("cell_contents中")]),this._v("了。")])}],!1,null,null,null);e.options.__file="closure.md";s.default=e.exports}}]);