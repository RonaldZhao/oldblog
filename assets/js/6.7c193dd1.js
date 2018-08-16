(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{174:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p"),t._m(1),n("p"),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("快速排序是一种基于分治思想的排序算法，是一种不稳定排序。")]),t._v(" "),t._m(4),n("p",[n("a",{attrs:{href:"http://yshblog.com/blog/170",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文章"),n("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"常用算法的python实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用算法的python实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用算法的Python实现")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#快速排序"}},[this._v("快速排序")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"快速排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速排序","aria-hidden":"true"}},[this._v("#")]),this._v(" 快速排序")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("基本思想")]),t._v(" "),n("p",[t._v("将一个大数组按照一个"),n("strong",[t._v("基准数")]),t._v("分成左右两份，左边的部分都"),n("strong",[t._v("不大于")]),t._v("基准数，右边的部分都"),n("strong",[t._v("不小于")]),t._v("基准数；然后对这两份数组再分别应用快速排序，直到分解到每个数组中只剩两个排好序的数为止。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("# 快速排序")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("quick_sort")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" left"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("# 递归结束的条件")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" left "),n("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" right"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" nums\n \n    "),n("span",{attrs:{class:"token comment"}},[t._v("# 选择第一个数作为基准数并记录在key中，方便最后写回")]),t._v("\n    key "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    lft "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" left  \n    rit "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" right\n \n    "),n("span",{attrs:{class:"token comment"}},[t._v("# 遍历整个当前数组")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" left "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("# 从右侧开始筛选大于参考点的值，直到遇到")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" left "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" right "),n("span",{attrs:{class:"token operator"}},[t._v("and")]),t._v(" nums"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" key"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            right "),n("span",{attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n        nums"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("# 这个位置的值先挪到左边")]),t._v("\n \n        "),n("span",{attrs:{class:"token comment"}},[t._v("# 从左边开始查找小于参考点的值")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" left "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" right "),n("span",{attrs:{class:"token operator"}},[t._v("and")]),t._v(" nums"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" key"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            left "),n("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n        nums"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("# 这个位置的值挪到右边")]),t._v("\n \n    "),n("span",{attrs:{class:"token comment"}},[t._v("# 写回改成的值")]),t._v("\n    nums"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" key\n \n    "),n("span",{attrs:{class:"token comment"}},[t._v("# 递归，并返回结果")]),t._v("\n    quick_sort"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" left "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v("# 递归左边部分")]),t._v("\n    quick_sort"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" left "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),n("span",{attrs:{class:"token comment"}},[t._v("# 递归右边部分")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" nums\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("# 测试程序")]),t._v("\nnums "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" random"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sample"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token builtin"}},[t._v("range")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("1000000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("500000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("# 生成50万个100万范围内的无重复的随机数")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsorted_nums "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" quick_sort"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("len")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sorted_nums"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br")])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);