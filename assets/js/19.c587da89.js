(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{176:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p"),t._m(1),a("p"),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("OS: Windows10 1709(内部版本16299.371)\nMySQL: "),a("a",{attrs:{href:"https://cdn.mysql.com//Downloads/MySQL-8.0/mysql-8.0.11-winx64.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("8.0.11(点击即可下载)"),a("OutboundLink")],1),t._v("\n安装目录: D:\\softwares\\mysql-8.0.11\\")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),a("p",[a("a",{attrs:{href:"https://my.oschina.net/orionlily/blog/1816235",target:"_blank",rel:"noopener noreferrer"}},[t._v("手动安装Mysql8.0.11(zip安装)"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"win10下mysql8-0-11-zip的安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#win10下mysql8-0-11-zip的安装","aria-hidden":"true"}},[this._v("#")]),this._v(" Win10下MySQL8.0.11.zip的安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#环境"}},[this._v("环境")])]),s("li",[s("a",{attrs:{href:"#step-0"}},[this._v("Step 0")])]),s("li",[s("a",{attrs:{href:"#step-1"}},[this._v("Step 1")])]),s("li",[s("a",{attrs:{href:"#step-2"}},[this._v("Step 2")])]),s("li",[s("a",{attrs:{href:"#step-3"}},[this._v("Step 3")])]),s("li",[s("a",{attrs:{href:"#step-4"}},[this._v("Step 4")])]),s("li",[s("a",{attrs:{href:"#参考文章"}},[this._v("参考文章")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 环境")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"step-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-0","aria-hidden":"true"}},[this._v("#")]),this._v(" Step 0")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("将MySQL安装目录的"),s("code",[this._v("bin")]),this._v("目录(如我的是：D:\\softwares\\mysql-8.0.11\\bin)加入系统环境变量。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"step-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1","aria-hidden":"true"}},[this._v("#")]),this._v(" Step 1")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Windows系统中MySQL默认的配置文件是安装目录中的"),s("code",[this._v("my.ini")]),this._v("文件，解压后应该是不存在的，所以在安装目录中创建此文件并填入如下内容：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v("[mysqld]")]),t._v("\n# 设置端口号为3306\n"),a("span",{attrs:{class:"token constant"}},[t._v("port")]),t._v(" "),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 3306")]),t._v("\n# 设置MySQL的安装目录，注意路径必须是两个'\\'\n"),a("span",{attrs:{class:"token constant"}},[t._v("basedir")]),t._v(" "),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" D:\\\\softwares\\\\mysql-8.0.11")]),t._v("\n# 设置MySQL数据库数据的存放目录，不存在的话会自动创建，注意路径必须是两个'\\'\n"),a("span",{attrs:{class:"token constant"}},[t._v("datadir")]),t._v(" "),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" D:\\\\softwares\\\\mysql-8.0.11\\\\data")]),t._v("\n# 设置允许的最大连接数\n"),a("span",{attrs:{class:"token constant"}},[t._v("max_connections")]),t._v(" "),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 200")]),t._v("\n# 设置允许连接失败的次数，防止恶意攻击\n"),a("span",{attrs:{class:"token constant"}},[t._v("max_connect_errors")]),t._v(" "),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 10")]),t._v("\n# 设置服务器端默认使用的字符集\n"),a("span",{attrs:{class:"token constant"}},[t._v("character-set-server")]),t._v(" "),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" utf8mb4")]),t._v("\n# 设置创建表时默认的存储引擎\n"),a("span",{attrs:{class:"token constant"}},[t._v("default-storage-engine")]),t._v(" "),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" INNODB")]),t._v('\n# 设置认证方式。因为从MySQL8.0.4开始，MySQL的密码认证插件是“caching_sha2_password”，但是这种方式目前很多客户端工具都不支持，所以改为"mysql_native_password"的老方式。\n'),a("span",{attrs:{class:"token constant"}},[t._v("default_authentication_plugin")]),t._v(" "),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" mysql_native_password")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("[mysql]")]),t._v("\n# 设置MySQL客户端的默认字符集\n"),a("span",{attrs:{class:"token constant"}},[t._v("default-character-set")]),t._v(" "),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" utf8mb4")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("[client]")]),t._v("\n# 设置MySQL客户端连接服务器时默认使用的端口和字符集\n"),a("span",{attrs:{class:"token constant"}},[t._v("port")]),t._v(" "),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 3306")]),t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("default-character-set")]),t._v(" "),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" utf8mb4")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"step-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Step 2")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("初始化数据库")]),t._v(" "),a("p",[t._v("以管理员权限打开"),a("code",[t._v("CMD")]),t._v("或"),a("code",[t._v("Power Shell")]),t._v("，然后执行"),a("code",[t._v("mysqld --initialize")]),t._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("执行后控制台无任何输出，但是会在安装目录中自动创建"),s("code",[this._v("data")]),this._v("目录，而且在"),s("code",[this._v("data")]),this._v("目录中会有一个"),s("code",[this._v(".err")]),this._v("结尾的文件，里面记录着MySQL的初始密码(比如下面的就是：j2=NNm.kinw:)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-err line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[this._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("2018-05-22T17:37:53.290175Z 0 [System] [MY-013169] [Server] D:\\softwares\\mysql-8.0.11\\bin\\mysqld.exe (mysqld 8.0.11) initializing of server in progress as process 9252\n2018-05-22T17:37:58.892568Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: j2=NNm.kinw:\n2018-05-22T17:38:02.154657Z 0 [System] [MY-013170] [Server] D:\\softwares\\mysql-8.0.11\\bin\\mysqld.exe (mysqld 8.0.11) initializing of server has completed\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"step-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Step 3")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("安装服务")]),this._v(" "),s("p",[this._v("执行命令"),s("code",[this._v("mysqld --install [服务名]")]),this._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("服务名可以不写，默认为"),s("code",[this._v("mysql")]),this._v("，但是如果你有多个版本的MySQL就要为他们起不同的名字，比如"),s("code",[this._v("mysql57")]),this._v("或"),s("code",[this._v("mysql8")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("注意：服务安装后默认是开机自启的。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"step-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-4","aria-hidden":"true"}},[this._v("#")]),this._v(" Step 4")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("启动服务")]),this._v(" "),s("p",[this._v("执行命令"),s("code",[this._v("net start mysql")]),this._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("停止服务")]),this._v(" "),s("p",[this._v("停止服务命令："),s("code",[this._v("net stop mysql")]),this._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("登录MySQL")]),this._v(" "),s("p",[this._v("执行命令"),s("code",[this._v("mysql -u root -p")]),this._v("，然后输入"),s("code",[this._v(".err")]),this._v("文件中的密码。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("修改root密码")]),this._v(" "),s("p",[this._v("登录MySQL之后执行"),s("code",[this._v("alter user 'root'@'localhost' identified with mysql_native_password by '新密码';")]),this._v("。\n然后执行"),s("code",[this._v("flush privileges;")]),this._v("刷新权限。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考文章")])}],!1,null,null,null);n.options.__file="README.md";s.default=n.exports}}]);