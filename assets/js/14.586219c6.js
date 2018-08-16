(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{166:function(s,n,e){"use strict";e.r(n);var t=e(0),a=Object(t.a)({},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("div",{staticClass:"content"},[s._m(0),s._v(" "),e("p"),s._m(1),e("p"),s._v(" "),s._m(2),s._v(" "),e("p",[s._v("CentOS 7.4")]),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5),s._m(6),s._v(" "),e("p",[s._v("问题一：nginx未设置开机启动，所以如果服务器重启就需要手动启动nginx。")]),s._v(" "),s._m(7),s._v(" "),e("p",[s._v("问题二：nginx还未与博客目录、域名绑定 。")]),s._v(" "),e("p",[s._v("解决方法：")]),s._v(" "),s._m(8),s._v(" "),s._m(9),e("p",[s._v("打开default.conf文件后修改server的花括号之间的以下几项：")]),s._v(" "),s._m(10),s._v(" "),s._m(11),s._v(" "),e("ol",[e("li",[e("p",[s._v("首先去"),e("a",{attrs:{href:"https://common-buy.aliyun.com/?spm=5176.2020520163.cas.1.7f850e31atqmMO&commodityCode=cas#/buy",target:"_blank",rel:"noopener noreferrer"}},[s._v("阿里云"),e("OutboundLink")],1),s._v("、"),e("a",{attrs:{href:"https://console.cloud.tencent.com/ssl/apply",target:"_blank",rel:"noopener noreferrer"}},[s._v("腾讯云"),e("OutboundLink")],1),s._v("、"),e("a",{attrs:{href:"https://portal.qiniu.com/certificate/apply",target:"_blank",rel:"noopener noreferrer"}},[s._v("七牛云"),e("OutboundLink")],1),s._v("等申请个免费的https证书。")])]),s._v(" "),s._m(12),s._v(" "),s._m(13)]),s._v(" "),s._m(14),s._v(" "),s._m(15)])},[function(){var s=this.$createElement,n=this._self._c||s;return n("h1",{attrs:{id:"阿里云ecs服务器安装nginx1-12-2、配置博客目录并开启https"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#阿里云ecs服务器安装nginx1-12-2、配置博客目录并开启https","aria-hidden":"true"}},[this._v("#")]),this._v(" 阿里云ECS服务器安装nginx1.12.2、配置博客目录并开启https")])},function(){var s=this.$createElement,n=this._self._c||s;return n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#服务器系统"}},[this._v("服务器系统")])]),n("li",[n("a",{attrs:{href:"#安装"}},[this._v("安装")])]),n("li",[n("a",{attrs:{href:"#配置"}},[this._v("配置")])]),n("li",[n("a",{attrs:{href:"#开启https"}},[this._v("开启https")])]),n("li",[n("a",{attrs:{href:"#重启nginx"}},[this._v("重启nginx")])])])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h2",{attrs:{id:"服务器系统"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务器系统","aria-hidden":"true"}},[this._v("#")]),this._v(" 服务器系统")])},function(){var s=this.$createElement,n=this._self._c||s;return n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var s=this.$createElement,n=this._self._c||s;return n("p",[this._v("下面的命令都是在root权限下执行，非root需要使用sudo。如："),n("code",[this._v("sudo yum")])])},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# vim /etc/yum.repos.d/nginx.repo # 进入后先按小写 **a** ，然后粘贴如下内容，然后按 **esc** ，然后输入 **:wq** 回车退出。\n[nginx]\nname=nginx repo\nbaseurl=http://nginx.org/packages/centos/7/$basearch/\ngpgcheck=0\nenabled=1\n# yum install nginx\n...\n..\n.\n# systemctl start nginx\n# systemctl status nginx # 可见输出的第二行如下\n● nginx.service - nginx - high performance web server\n   Loaded: loaded (/usr/lib/systemd/system/nginx.service; disabled; vendor preset: disabled)\n   Active: **active (running)** since Wed 2017-11-01 16:23:32 CST; 14s ago\n     Docs: http://nginx.org/en/docs/\n  Process: 10379 ExecStart=/usr/sbin/nginx -c /etc/nginx/nginx.conf (code=exited, status=0/SUCCESS)\n  Process: 10378 ExecStartPre=/usr/sbin/nginx -t -c /etc/nginx/nginx.conf (code=exited, status=0/SUCCESS)\n Main PID: 10382 (nginx)\n   CGroup: /system.slice/nginx.service\n           ├─10382 nginx: master process /usr/sbin/nginx -c /etc/nginx/nginx.conf\n           └─10383 nginx: worker process\nNov 01 16:23:32 jesuszhao systemd[1]: Starting nginx - high performance web server...\nNov 01 16:23:32 jesuszhao nginx[10378]: nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nNov 01 16:23:32 jesuszhao nginx[10378]: nginx: configuration file /etc/nginx/nginx.conf test is successful\nNov 01 16:23:32 jesuszhao systemd[1]: Failed to read PID from file /var/run/nginx.pid: Invalid argument\nNov 01 16:23:32 jesuszhao systemd[1]: Started nginx - high performance web server.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h2",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置")])},function(){var s=this.$createElement,n=this._self._c||s;return n("p",[this._v("解决方法： 执行"),n("code",[this._v("# systemctl enable nginx.service")]),this._v("，然后重启服务器即可。")])},function(){var s=this.$createElement,n=this._self._c||s;return n("p",[this._v("首先你要决定把博客目录放在哪里，然后在那里新建一个文件夹并把博客的所有文件上传到那个文件夹下，比如："),n("code",[this._v("/var/www/blog")]),this._v("目录，然后配置"),n("code",[this._v("nginx")]),this._v("：")])},function(){var s=this.$createElement,n=this._self._c||s;return n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("# cd /etc/nginx/conf.d/\n# vim default.conf # 最好先备份：cp default.conf default.conf.bak\n")])]),this._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[this._v("1")]),n("br"),n("span",{staticClass:"line-number"},[this._v("2")]),n("br")])])},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ol",[e("li",[e("strong",[s._v("server_name")]),s._v("：改成你的域名，如："),e("code",[s._v("ronaldzhao.top")]),s._v("（不要带http或https前缀）")]),s._v(" "),e("li",[e("strong",[s._v("root")]),s._v("：改成你的博客目录的路径，如："),e("code",[s._v("/var/www/blog")])]),s._v(" "),e("li",[e("strong",[s._v("index")]),s._v(": 改成你的博客文件的首页文件名，如："),e("code",[s._v("index.html")])])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h2",{attrs:{id:"开启https"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开启https","aria-hidden":"true"}},[this._v("#")]),this._v(" 开启https")])},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("li",[e("p",[s._v("待证书发下来后把nginx版的下载下来，然后登录ECS创建以下目录：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# cd /etc/nginx/\n# mkdir cert\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("然后使用"),e("code",[s._v("FileZilla")]),s._v("把下载下来的文件（一般是两个，一个"),e("code",[s._v(".pem")]),s._v("的，一个"),e("code",[s._v(".key")]),s._v("的）上传到新建的cert目录里。")])])},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("li",[e("p",[s._v("再次编辑nginx配置文件"),e("code",[s._v("default.conf")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# vim default.conf # 然后在文件的最前面添加以下内容，注意几个地方要根据你的情况填写\nserver {\n        listen 443;\n        server_name www.yourdomain.com; #填写绑定证书的域名\n        ssl on;\n        ssl_certificate cert/your_file_name.pem;\n        ssl_certificate_key cert/your_file_name.key;\n        ssl_session_timeout 5m;\n        ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #按照这个协议配置\n        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;#按照这个套件配置\n        ssl_prefer_server_ciphers on;\n        location / {\n            root   html; #站点目录\n            index  index.html index.htm;\n        }\n    }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("注意不是把原来的server{….}那一堆覆盖。")]),s._v(" "),e("p",[s._v("其中的"),e("strong",[s._v("server_name")]),s._v("、"),e("strong",[s._v("root")]),s._v("、"),e("strong",[s._v("index")]),s._v("三项修改为和之前修改的一致。")]),s._v(" "),e("p",[s._v("然后在原来的server{…..}那一堆中的**location / {…}**的任意一行添加 "),e("strong",[s._v("rewrite ^(.*) https://$host$1 permanent;")]),s._v(" 强制http为https访问，开启全站https。（可选）")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h2",{attrs:{id:"重启nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重启nginx","aria-hidden":"true"}},[this._v("#")]),this._v(" 重启nginx")])},function(){var s=this.$createElement,n=this._self._c||s;return n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("# systemctl restart nginx\n")])]),this._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[this._v("1")]),n("br")])])}],!1,null,null,null);a.options.__file="centosinstallnginxandhttps.md";n.default=a.exports}}]);