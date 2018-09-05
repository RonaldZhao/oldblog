(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{196:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("blockquote",[n("p",[t._v("原文链接: "),n("a",{attrs:{href:"https://foofish.net/python-decorator.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解 Python 装饰器看这一篇就够了"),n("OutboundLink")],1)])]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("举个栗子:")]),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("正确理解 Python 装饰器前, 还要明白一件事: Python 中的函数和 C++, Java 中的函数不大一样. Python 中的函数可以像普通变量一样当作参数传递给另一个函数, 例如:")]),t._v(" "),t._m(3),n("p",[t._v("Python 装饰器本质上就是一个 Python 函数或类, 它可以让其他函数或类在不改变代码的前提下增加额外的功能. Python 装饰器的返回值也是一个函数或类对象.")]),t._v(" "),n("p",[t._v("Python 装饰器经常用于有切面需求的场景, 比如: 插入日志, 性能测试, 事务处理, 缓存, 权限校验等场景, Python 装饰器是解决这类问题的绝佳设计. 有了 Python 装饰器, 我们就可以抽离出大量与函数功能本身无关的雷同代码到装饰器中并继续重用. 概括地讲, Python 装饰器的作用就是在不改动现有对象的前提下为其增加功能.")]),t._v(" "),n("p",[t._v("一个简单的例子:")]),t._v(" "),t._m(4),n("p",[t._v("现在有一个新的需求: 希望可以记录下函数的执行日志. 于是可以这么改:")]),t._v(" "),t._m(5),n("p",[t._v("这是需求只涉及到一个函数的情况(很简单). 但是如果需求涉及到大量的函数, 如果再这样做的话就会造成大量的雷同代码. 于是为了减少重复书写雷同代码的愚蠢行为, 我们可以重新定义一个新的函数用来专门处理日志, 日志处理完毕之后再执行真正的业务代码:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),n("p",[t._v("于是, Python 装饰器横空出世.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),n("p",[t._v("在这个例子中, 函数进入和退出时, 被称为一个横切面, 所以这种编程方式被称为面向切面的编程.")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),n("p",[t._v("对于无参数的函数, 以上装饰器已经可以达成所需了. 但是当业务逻辑函数带有参数的时候, 就要对装饰器稍加修改了. 比如:")]),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),n("p",[t._v("未完待续...")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"一文理解-python-装饰器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一文理解-python-装饰器","aria-hidden":"true"}},[this._v("#")]),this._v(" 一文理解 Python 装饰器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"python-装饰器是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-装饰器是什么","aria-hidden":"true"}},[this._v("#")]),this._v(" Python 装饰器是什么?")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们都知道内裤的主要功能是用来遮羞, 但是到了冬天它无法防风御寒. 咋办? 一个办法就是把内裤改造得又长又厚. 但同时又有个问题, 它本质上已经不是一条内裤了, 而成了长裤. 于是聪明的做法是在内裤外面再穿一条长裤. 这样内裤便还是内裤, 而且通过套在外面的长裤达到了保暖的作用. "),s("code",[this._v("装饰器")]),this._v("就如同这里的长裤, 可以在不改变内裤的前提下增加额外的功能.")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("param")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'this is function param()'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("f")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    p"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nf"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("f")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'this is function f()'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("f")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'this is function f()'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    logging"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'function f() is running.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("use_logging")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    logging"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("warn"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'{0} is running.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token builtin"}},[t._v("format")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__name__"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    f"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("f")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'this is function f()'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuse_logging"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("这样逻辑上没有问题, 需求也实现了, 但是我们在调用的时候已经不再是调用真正的业务逻辑"),n("code",[t._v("f()")]),t._v("函数了, 而是换成了"),n("code",[t._v("use_logging()")]),t._v("函数, 这样就破坏了原有的代码结构, 现在我们不得不每次都要把原来的那个"),n("code",[t._v("f()")]),t._v("函数作为参数传递给"),n("code",[t._v("use_logging()")]),t._v("函数...")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"简单装饰器-装饰无参函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单装饰器-装饰无参函数","aria-hidden":"true"}},[this._v("#")]),this._v(" 简单装饰器(装饰无参函数)")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("use_logging")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("wrapper")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        logging"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("warn"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'{0} is running.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token builtin"}},[t._v("format")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__name__"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" func"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" wrapper\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("f")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'this is function f()'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nf "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" use_logging"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nf"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("这里的"),n("code",[t._v("use_logging()")]),t._v("函数就是一个装饰器, 它是一个普通的函数, 它把真正执行业务逻辑的函数"),n("code",[t._v("f()")]),t._v("包裹在其中, 于是"),n("code",[t._v("f()")]),t._v("函数看起来就像被"),n("code",[t._v("use_logging()")]),t._v("装饰了一样. "),n("code",[t._v("use_logging()")]),t._v("返回的也是一个函数, 这个函数的名字叫"),n("code",[t._v("wrapper")]),t._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"语法糖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法糖","aria-hidden":"true"}},[this._v("#")]),this._v(" @语法糖")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("@")]),this._v("符号是 Python 装饰器的语法糖, 它放在函数开始定义(即"),s("code",[this._v("def")]),this._v(")的上方, 这样就可以省略最后一步对函数重新赋值的操作.")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("use_logging")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("wrapper")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        logging"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("warn"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'{0} is running.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token builtin"}},[t._v("format")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__name__"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" func"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" wrapper\n\n@use_logging\n"),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("f")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'this is function f()'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nf"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如上所示, 有了"),s("code",[this._v("@")]),this._v(", 我们就可以省去"),s("code",[this._v("f = use_logging(f)")]),this._v("这一行了, 直接调用"),s("code",[this._v("f()")]),this._v("即可得到想要的结果.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("从这个例子也可以看出, "),s("code",[this._v("f()")]),this._v("函数不需要做任何的修改, 只需要在定义的地方加上装饰器, 调用方式依然不变. 如果有其他的类似函数, 我们就可以继续调用装饰器来修饰函数, 而不用重复修改函数或增加新的封装. 这样, 我们就提高了程序的可重用性, 并增加了程序的可读性.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"args-kwargs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args-kwargs","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("*args")]),this._v(", "),s("code",[this._v("**kwargs")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-python line-numbers-mode"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("use_logging")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("wrapper")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        logging"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("warn"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'{0} is running.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token builtin"}},[t._v("format")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__name__"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" func"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" wrapper\n\n@use_logging\n"),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("f")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'i am {0}'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token builtin"}},[t._v("format")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nf"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'ronald'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("但是这只能适用于参数个数固定为一个的情况, 对于多个参数甚至参数个数不固定的函数, 就要使用"),s("code",[this._v("*args")]),this._v("来代替:")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-python line-numbers-mode"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("use_logging")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("wrapper")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        logging"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("warn"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'{0} is running.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token builtin"}},[t._v("format")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__name__"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" func"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" wrapper\n\n@use_logging\n"),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("f")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'my name is {0} and i am {1} years old.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token builtin"}},[t._v("format")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nf"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'ronald'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("但是对于关键字参数, "),s("code",[this._v("*args")]),this._v("也是无能为力的, 所以就需要继续加上"),s("code",[this._v("**kwargs")]),this._v("了:")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-python line-numbers-mode"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("use_logging")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("wrapper")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        logging"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("warn"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'{0} is running.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token builtin"}},[t._v("format")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__name__"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" func"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" wrapper\n\n@use_logging\n"),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("f")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token boolean"}},[t._v("None")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'my name is {0} and i am {1} years old.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token builtin"}},[t._v("format")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nf"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'ronald'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"带参数的装饰器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#带参数的装饰器","aria-hidden":"true"}},[this._v("#")]),this._v(" 带参数的装饰器")])}],!1,null,null,null);e.options.__file="python-decorator.md";s.default=e.exports}}]);