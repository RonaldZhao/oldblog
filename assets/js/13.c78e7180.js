(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{167:function(t,e,s){"use strict";s.r(e);var i=s(0),r=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("blockquote",[s("p",[t._v("文章原文: "),s("a",{attrs:{href:"https://blog.csdn.net/yannanxiu/article/details/78703888",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows下用PowerShell激活Python的虚拟环境"),s("OutboundLink")],1)])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("因为PowerShell默认不允许执行*.ps1脚本文件，所以首先需要开启权限。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"windows-powershell-无法激活-python-虚拟环境问题的解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-powershell-无法激活-python-虚拟环境问题的解决","aria-hidden":"true"}},[this._v("#")]),this._v(" Windows PowerShell 无法激活 python 虚拟环境问题的解决")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("之前以为是"),s("code",[t._v("PowerShell")]),t._v("的"),s("code",[t._v("bug")]),t._v(", 也没有搜索一下就一直在用"),s("code",[t._v("CMD")]),t._v("或者"),s("code",[t._v("Cmder")]),t._v(", 直到今天才解决. 看来有问题要先搜索一下才是王道啊!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"为什么powershell默认不能激活python虚拟环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么powershell默认不能激活python虚拟环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么"),e("code",[this._v("PowerShell")]),this._v("默认不能激活python虚拟环境")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"解决方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 解决方法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("以管理员身份启动"),e("code",[this._v("PowerShell")]),this._v("，并执行"),e("code",[this._v("Set-ExecutionPolicy RemoteSigned")]),this._v(", 然后输入"),e("code",[this._v("Y")]),this._v("回车即可.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("最后再次激活需要的 python 虚拟环境: "),e("code",[this._v("..\\venv\\Scripts\\Activate.ps1")]),this._v(", 即可看到环境已激活.")])}],!1,null,null,null);r.options.__file="README.md";e.default=r.exports}}]);