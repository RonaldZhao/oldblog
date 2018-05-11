(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{70:function(e,n,t){"use strict";t.r(n);var s=t(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"阿里云ecs服务器安装nginx1-12-2、配置博客目录并开启https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阿里云ecs服务器安装nginx1-12-2、配置博客目录并开启https","aria-hidden":"true"}},[e._v("#")]),e._v(" 阿里云ECS服务器安装nginx1.12.2、配置博客目录并开启https")]),t("p",[e._v("目录")]),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#服务器系统"}},[e._v("服务器系统")])]),t("li",[t("a",{attrs:{href:"#安装"}},[e._v("安装")])]),t("li",[t("a",{attrs:{href:"#配置"}},[e._v("配置")])]),t("li",[t("a",{attrs:{href:"#开启https"}},[e._v("开启https")])]),t("li",[t("a",{attrs:{href:"#重启nginx"}},[e._v("重启nginx")])])])]),t("p"),t("h2",{attrs:{id:"服务器系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器系统","aria-hidden":"true"}},[e._v("#")]),e._v(" 服务器系统")]),t("p",[e._v("CentOS 7.4")]),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装")]),t("p",[e._v("下面的命令都是在root权限下执行，非root需要使用sudo。如："),t("code",[e._v("sudo yum")])]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# vim /etc/yum.repos.d/nginx.repo # 进入后先按小写 **a** ，然后粘贴如下内容，然后按 **esc** ，然后输入 **:wq** 回车退出。\n[nginx]\nname=nginx repo\nbaseurl=http://nginx.org/packages/centos/7/$basearch/\ngpgcheck=0\nenabled=1\n# yum install nginx\n...\n..\n.\n# systemctl start nginx\n# systemctl status nginx # 可见输出的第二行如下\n● nginx.service - nginx - high performance web server\n   Loaded: loaded (/usr/lib/systemd/system/nginx.service; disabled; vendor preset: disabled)\n   Active: **active (running)** since Wed 2017-11-01 16:23:32 CST; 14s ago\n     Docs: http://nginx.org/en/docs/\n  Process: 10379 ExecStart=/usr/sbin/nginx -c /etc/nginx/nginx.conf (code=exited, status=0/SUCCESS)\n  Process: 10378 ExecStartPre=/usr/sbin/nginx -t -c /etc/nginx/nginx.conf (code=exited, status=0/SUCCESS)\n Main PID: 10382 (nginx)\n   CGroup: /system.slice/nginx.service\n           ├─10382 nginx: master process /usr/sbin/nginx -c /etc/nginx/nginx.conf\n           └─10383 nginx: worker process\nNov 01 16:23:32 jesuszhao systemd[1]: Starting nginx - high performance web server...\nNov 01 16:23:32 jesuszhao nginx[10378]: nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nNov 01 16:23:32 jesuszhao nginx[10378]: nginx: configuration file /etc/nginx/nginx.conf test is successful\nNov 01 16:23:32 jesuszhao systemd[1]: Failed to read PID from file /var/run/nginx.pid: Invalid argument\nNov 01 16:23:32 jesuszhao systemd[1]: Started nginx - high performance web server.\n")])]),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置")]),t("p",[e._v("问题一：nginx未设置开机启动，所以如果服务器重启就需要手动启动nginx。")]),t("p",[e._v("解决方法： 执行"),t("code",[e._v("# systemctl enable nginx.service")]),e._v("，然后重启服务器即可。")]),t("p",[e._v("问题二：nginx还未与博客目录、域名绑定 。")]),t("p",[e._v("解决方法：")]),t("p",[e._v("首先你要决定把博客目录放在哪里，然后在那里新建一个文件夹并把博客的所有文件上传到那个文件夹下，比如："),t("code",[e._v("/var/www/blog")]),e._v("目录，然后配置"),t("code",[e._v("nginx")]),e._v("：")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# cd /etc/nginx/conf.d/\n# vim default.conf # 最好先备份：cp default.conf default.conf.bak\n")])]),t("p",[e._v("打开default.conf文件后修改server的花括号之间的以下几项：")]),t("ol",[t("li",[t("strong",[e._v("server_name")]),e._v("：改成你的域名，如："),t("code",[e._v("ronaldzhao.top")]),e._v("（不要带http或https前缀）")]),t("li",[t("strong",[e._v("root")]),e._v("：改成你的博客目录的路径，如："),t("code",[e._v("/var/www/blog")])]),t("li",[t("strong",[e._v("index")]),e._v(": 改成你的博客文件的首页文件名，如："),t("code",[e._v("index.html")])])]),t("h2",{attrs:{id:"开启https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启https","aria-hidden":"true"}},[e._v("#")]),e._v(" 开启https")]),t("ol",[t("li",[t("p",[e._v("首先去"),t("a",{attrs:{href:"https://common-buy.aliyun.com/?spm=5176.2020520163.cas.1.7f850e31atqmMO&commodityCode=cas#/buy",target:"_blank",rel:"noopener noreferrer"}},[e._v("阿里云")]),e._v("、"),t("a",{attrs:{href:"https://console.cloud.tencent.com/ssl/apply",target:"_blank",rel:"noopener noreferrer"}},[e._v("腾讯云")]),e._v("、"),t("a",{attrs:{href:"https://portal.qiniu.com/certificate/apply",target:"_blank",rel:"noopener noreferrer"}},[e._v("七牛云")]),e._v("等申请个免费的https证书。")])]),t("li",[t("p",[e._v("待证书发下来后把nginx版的下载下来，然后登录ECS创建以下目录：")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# cd /etc/nginx/\n# mkdir cert\n")])]),t("p",[e._v("然后使用"),t("code",[e._v("FileZilla")]),e._v("把下载下来的文件（一般是两个，一个"),t("code",[e._v(".pem")]),e._v("的，一个"),t("code",[e._v(".key")]),e._v("的）上传到新建的cert目录里。")])]),t("li",[t("p",[e._v("再次编辑nginx配置文件"),t("code",[e._v("default.conf")]),e._v("：")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# vim default.conf # 然后在文件的最前面添加以下内容，注意几个地方要根据你的情况填写\nserver {\n        listen 443;\n        server_name www.yourdomain.com; #填写绑定证书的域名\n        ssl on;\n        ssl_certificate cert/your_file_name.pem;\n        ssl_certificate_key cert/your_file_name.key;\n        ssl_session_timeout 5m;\n        ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #按照这个协议配置\n        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;#按照这个套件配置\n        ssl_prefer_server_ciphers on;\n        location / {\n            root   html; #站点目录\n            index  index.html index.htm;\n        }\n    }\n")])]),t("p",[e._v("注意不是把原来的server{….}那一堆覆盖。")]),t("p",[e._v("其中的"),t("strong",[e._v("server_name")]),e._v("、"),t("strong",[e._v("root")]),e._v("、"),t("strong",[e._v("index")]),e._v("三项修改为和之前修改的一致。")]),t("p",[e._v("然后在原来的server{…..}那一堆中的**location / {…}**的任意一行添加 "),t("strong",[e._v("rewrite ^(.*) https://$host$1 permanent;")]),e._v(" 强制http为https访问，开启全站https。（可选）")])])]),t("h2",{attrs:{id:"重启nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启nginx","aria-hidden":"true"}},[e._v("#")]),e._v(" 重启nginx")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# systemctl restart nginx\n")])])])}],!1,null,null,null);n.default=r.exports}}]);