(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{65:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"python变量的作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python变量的作用域","aria-hidden":"true"}},[t._v("#")]),t._v(" Python变量的作用域")]),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#全局变量"}},[t._v("全局变量")])]),a("li",[a("a",{attrs:{href:"#局部变量"}},[t._v("局部变量")])]),a("li",[a("a",{attrs:{href:"#非局部变量"}},[t._v("非局部变量")])])])]),a("p"),a("h2",{attrs:{id:"全局变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局变量")]),a("p",[t._v("即，在"),a("strong",[t._v("函数之外")]),t._v("(如果是嵌套函数则是"),a("strong",[t._v("最外层")]),t._v("函数之外)或在"),a("strong",[t._v("全局范围内")]),t._v("声明的变量，全局变量可以在当前模块的任意之处访问。举个例子：")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'我是全局变量'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("outer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("inner")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("inner_inner")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        inner_inner"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    inner"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nouter"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("输出如下：")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" outer"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n我是全局变量\n我是全局变量\n我是全局变量\n")])]),a("p",[t._v("由此便引出了一个问题：当我想在"),a("strong",[t._v("函数内部")]),t._v("修改全局变量的时候怎么办？先试试再说：")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'我是全局变量'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("update_outer_x")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'我被修改了'")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nupdate_outer_x"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("然而你会得到如下结果：")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" update_outer_x"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n我被修改了\n"),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n我是全局变量\n")])]),a("p",[t._v("外部的"),a("code",[t._v("x")]),t._v("并没有被真正修改，函数"),a("code",[t._v("update_outer_x")]),t._v("内部的"),a("code",[t._v("x")]),t._v("实际上被定义成了一个局部变量，而并没有修改外部"),a("code",[t._v("x")]),t._v("的值，执行内部的"),a("code",[t._v("print")]),t._v("的时候输出的也只是函数内部的"),a("code",[t._v("x")]),t._v("，所以没有达到修改全局变量"),a("code",[t._v("x")]),t._v("的目的。")]),a("p",[t._v("由此便有了"),a("code",[t._v("global")]),t._v("关键字：")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'我是全局变量'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("update_outer_x")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("global")]),t._v(" x\n    x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'我被修改了'")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nupdate_outer_x"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("执行结果如下：")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" update_outer_x"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n我被修改了\n"),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n我被修改了\n")])]),a("p",[t._v("因此通过在函数内部使用"),a("code",[t._v("global")]),t._v("关键字，达到了在函数内部修改全局变量的目的。")]),a("h2",{attrs:{id:"局部变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#局部变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 局部变量")]),a("p",[t._v("即，在函数体内部或在局部作用域内声明的 变量。局部变量无法在它的作用域之外(如函数体之外)访问：")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'我是局部变量'")]),t._v("\nf"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("执行结果如下：")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" f"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nTraceback "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("most recent call last"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  File "),a("span",{attrs:{class:"token string"}},[t._v('"<stdin>"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("module"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\nNameError"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" name "),a("span",{attrs:{class:"token string"}},[t._v("'x'")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("not")]),t._v(" defined\n")])]),a("p",[t._v("因为变量"),a("code",[t._v("x")]),t._v("的作用域只在函数"),a("code",[t._v("f()")]),t._v("之内，当函数执行完毕的时候，它所占的资源也就被释放了。")]),a("h2",{attrs:{id:"非局部变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非局部变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 非局部变量")]),a("p",[t._v("假设有如下一段代码：")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'我是全局变量x'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("outer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'我是outer函数的变量x'")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("inner")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'我是inner函数的变量x'")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    inner"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nouter"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("我们想要达到的目的是在"),a("code",[t._v("inner")]),t._v("函数内部修改其外部、函数"),a("code",[t._v("outer")]),t._v("内部的变量"),a("code",[t._v("x")]),t._v("，但是不修改全局变量"),a("code",[t._v("x")]),t._v("。但是现在的代码执行结果如下：")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" outer"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n我是inner函数的变量x\n我是outer函数的变量x\n"),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n我是全局变量x\n")])]),a("p",[t._v("可见，并没有达到我们的目的。前面我们知道，我们可以使用"),a("code",[t._v("global")]),t._v("关键字达到修改函数外部变量的目的，让我们试试：")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'我是全局变量x'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("outer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'我是outer函数的变量x'")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("inner")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("global")]),t._v(" x\n        x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'我是inner函数的变量x'")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    inner"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nouter"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("执行结果如下：")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" outer"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n我是inner函数的变量x\n我是outer函数的变量x\n"),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n我是inner函数的变量x\n")])]),a("p",[t._v("可见，仍然没有达到我们的目的，而是修改了全局变量"),a("code",[t._v("x")]),t._v("。。。")]),a("p",[t._v("因此，便有了"),a("strong",[t._v("非局部变量")]),t._v("，通过关键字"),a("code",[t._v("nonlocal")]),t._v("来创建"),a("strong",[t._v("非局部变量")]),t._v("，以达到在嵌套函数内部修改"),a("strong",[t._v("嵌套函数外部但非全局变量")]),t._v("的变量的目的。将上面程序的"),a("code",[t._v("global")]),t._v("替换为"),a("code",[t._v("nonlocal")]),t._v("：")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'我是全局变量x'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("outer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'我是outer函数的变量x'")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("inner")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("nonlocal")]),t._v(" x\n        x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'我是inner函数的变量x'")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    inner"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nouter"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("执行结果如下：")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" outer"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n我是inner函数的变量x\n我是inner函数的变量x\n"),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n我是全局变量x\n")])]),a("p",[t._v("​达到了我们想要在"),a("code",[t._v("inner")]),t._v("函数内部修改其函数外部、"),a("code",[t._v("outer")]),t._v("函数内部的变量"),a("code",[t._v("x")]),t._v("的目的。这就是"),a("code",[t._v("nonlocal")]),t._v("的用法和意义。")]),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/OLNwWSBF0uNKqiXIhSaYRA",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文章")])])])}],!1,null,null,null);s.default=o.exports}}]);