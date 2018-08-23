(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{184:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"lintcode-个人-ac-解法-python3-java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lintcode-个人-ac-解法-python3-java","aria-hidden":"true"}},[s._v("#")]),s._v(" LintCode 个人 AC 解法(Python3/Java)")]),s._v(" "),a("h2",{attrs:{id:"入门级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入门级","aria-hidden":"true"}},[s._v("#")]),s._v(" 入门级")]),s._v(" "),a("h3",{attrs:{id:"_452-删除链表中的元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_452-删除链表中的元素","aria-hidden":"true"}},[s._v("#")]),s._v(" 452. 删除链表中的元素")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# python3 解")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("removeElements")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" head"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" val"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    cur "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" head  "),a("span",{attrs:{class:"token comment"}},[s._v("# 设置游标")]),s._v("\n    prev "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" head  "),a("span",{attrs:{class:"token comment"}},[s._v("# 用来保存游标的上一个结点")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("while")]),s._v(" cur "),a("span",{attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("None")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" cur"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),a("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v(" val"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  "),a("span",{attrs:{class:"token comment"}},[s._v("# 如果当前结点的值等于要给定的值")]),s._v("\n            "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" cur "),a("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v(" head"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                head "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n                cur "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" head\n                "),a("span",{attrs:{class:"token keyword"}},[s._v("continue")]),s._v("\n            "),a("span",{attrs:{class:"token keyword"}},[s._v("else")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                prev"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" cur"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token builtin"}},[s._v("next")]),s._v("  "),a("span",{attrs:{class:"token comment"}},[s._v("# 删除结点")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("else")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            prev "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" cur  "),a("span",{attrs:{class:"token comment"}},[s._v("# 更新 prev 的指向")]),s._v("\n        cur "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" cur"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token builtin"}},[s._v("next")]),s._v("  "),a("span",{attrs:{class:"token comment"}},[s._v("# 移动游标")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" head\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("// Java 解")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" ListNode "),a("span",{attrs:{class:"token function"}},[s._v("removeElements")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ListNode head"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("int")]),s._v(" val"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("head "),a("span",{attrs:{class:"token operator"}},[s._v("!=")]),s._v(" null"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        ListNode cur "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ListNode pre "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("while")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cur "),a("span",{attrs:{class:"token operator"}},[s._v("!=")]),s._v(" null"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("val "),a("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v(" cur"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cur "),a("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v(" head"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    head "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    cur "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    "),a("span",{attrs:{class:"token keyword"}},[s._v("continue")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    pre"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" cur"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                pre "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" cur"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            cur "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" cur"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" head"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h2",{attrs:{id:"简单级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单级","aria-hidden":"true"}},[s._v("#")]),s._v(" 简单级")]),s._v(" "),a("h2",{attrs:{id:"中等级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中等级","aria-hidden":"true"}},[s._v("#")]),s._v(" 中等级")]),s._v(" "),a("h2",{attrs:{id:"困难级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#困难级","aria-hidden":"true"}},[s._v("#")]),s._v(" 困难级")]),s._v(" "),a("h2",{attrs:{id:"超难级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超难级","aria-hidden":"true"}},[s._v("#")]),s._v(" 超难级")])])}],!1,null,null,null);e.options.__file="README.md";t.default=e.exports}}]);