(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{50:function(t,s,a){t.exports=a.p+"assets/img/linuxmac.cd1dd353.png"},51:function(t,s,a){t.exports=a.p+"assets/img/windows.3b166ad5.png"},52:function(t,s,a){t.exports=a.p+"assets/img/installdone.9b3cedb7.png"},53:function(t,s,a){t.exports=a.p+"assets/img/login.417e11f0.png"},54:function(t,s,a){t.exports=a.p+"assets/img/serverip.3bd87ec0.png"},55:function(t,s,a){t.exports=a.p+"assets/img/hostname.07727209.png"},56:function(t,s,a){t.exports=a.p+"assets/img/additionalfeature.d48052d4.png"},57:function(t,s,a){t.exports=a.p+"assets/img/serversize.19e2163a.png"},58:function(t,s,a){t.exports=a.p+"assets/img/servertype.3e7f5d65.png"},59:function(t,s,a){t.exports=a.p+"assets/img/location.efbf5715.png"},60:function(t,s,a){t.exports=a.p+"assets/img/deploy.34fc7c8e.png"},61:function(t,s,a){t.exports=a.p+"assets/img/recharge.567d87ef.png"},73:function(t,s,a){"use strict";a.r(s);var r=[function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"小白的翻墙之路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小白的翻墙之路","aria-hidden":"true"}},[t._v("#")]),t._v(" 小白的翻墙之路")]),r("p",[t._v("目录")]),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#部署须知"}},[t._v("部署须知")])]),r("li",[r("a",{attrs:{href:"#vps购买与部署"}},[t._v("VPS购买与部署")])]),r("li",[r("a",{attrs:{href:"#服务器端配置"}},[t._v("服务器端配置")])]),r("li",[r("a",{attrs:{href:"#vps安全加固"}},[t._v("VPS安全加固")])]),r("li",[r("a",{attrs:{href:"#客户端配置"}},[t._v("客户端配置")])]),r("li",[r("a",{attrs:{href:"#验证"}},[t._v("验证")])]),r("li",[r("a",{attrs:{href:"#参考文章"}},[t._v("参考文章")])])])]),r("p"),r("h2",{attrs:{id:"部署须知"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署须知","aria-hidden":"true"}},[t._v("#")]),t._v(" 部署须知")]),r("ol",[r("li",[t._v("RMB花费：5刀/月")]),r("li",[t._v("所得流量：1000G/月")]),r("li",[t._v("服务器端主机系统：Debian 7")]),r("li",[t._v("节点位置：洛杉矶")]),r("li",[t._v("测试速度：取决于你的本地网络，我在家测试4k视频的适合没有等待缓冲的现象")])]),r("h2",{attrs:{id:"vps购买与部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vps购买与部署","aria-hidden":"true"}},[t._v("#")]),t._v(" VPS购买与部署")]),r("p",[t._v("我选择的是"),r("a",{attrs:{href:"https://www.vultr.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vultr")]),t._v("的VPS，至于各种VPS的比较这里就不介绍了，需要的自行查阅后再选择。假如你不需要了解那么多，希望尽快搭建好开始使用，那么请继续阅读。")]),r("p",[t._v("首先到"),r("a",{attrs:{href:"https://www.vultr.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vultr官网")]),t._v("注册一个账号，然后充值10刀(虽然说每个月5刀，但是人家允许最少充10刀)：")]),r("p",[r("img",{attrs:{src:a(61),alt:"预缴费"}})]),r("p",[t._v("然后部署一台主机：")]),r("p",[r("img",{attrs:{src:a(60),alt:"添加Server"}})]),r("p",[r("img",{attrs:{src:a(59),alt:"节点选择"}})]),r("p",[r("img",{attrs:{src:a(58),alt:"服务器类型选择"}})]),r("p",[r("img",{attrs:{src:a(57),alt:"服务器规格选择"}})]),r("p",[r("img",{attrs:{src:a(56),alt:"附加选项"}})]),r("p",[r("img",{attrs:{src:a(55),alt:"主机名设置"}})]),r("p",[r("img",{attrs:{src:a(54),alt:"服务器概览界面"}})]),r("p",[t._v("如果你用的是"),r("strong",[t._v("Windows")]),t._v("，可以使用"),r("strong",[t._v("puty")]),t._v("登录。"),r("a",{attrs:{href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点我去下载")]),t._v("，打开puty后只要设置好你的"),r("strong",[t._v("IP")]),t._v("、用户名"),r("strong",[t._v("root")]),t._v("和"),r("strong",[t._v("端口号22")]),t._v("(ssh端口号为22)登录然后输入密码即可。")]),r("p",[t._v("登录成功显示如下：")]),r("p",[r("img",{attrs:{src:a(53),alt:"SSH登录成功"}})]),r("h2",{attrs:{id:"服务器端配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务器端配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器端配置")]),r("ol",[r("li",[r("p",[t._v("安装SSR：")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ wget --no-check-certificate\t https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocksR.sh\n$ chmod +x shadowsocksR.sh\n$ ./shadowsocksR.sh 2>&1 | tee shadowsocksR.log\n")])]),r("p",[t._v("安装过程中会依次让你输入"),r("strong",[t._v("密码")]),t._v("(可默认，但不建议)、"),r("strong",[t._v("登录用的端口号")]),t._v("(可默认，范围1-65535)、"),r("strong",[t._v("选择加密方式")]),t._v("(建议选择aes-256-cfb)，如果还有其他需要选择的都直接回车默认即可。")]),r("p",[r("img",{attrs:{src:a(52),alt:"安装所需选择/输入的信息"}})])]),r("li",[r("p",[t._v("配置 shadowsocks.json 文件")]),r("p",[t._v("输入"),r("code",[t._v("$ nano /etc/shadowsocks.json")]),t._v("打开文件，然后复制复制如下内容替换文件中的全部内容，然后把"),r("strong",[t._v("port_password")]),t._v("改成你的即可，可设置多对方便手机电脑都使用：")]),r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{attrs:{class:"token property"}},[t._v('"server"')]),r("span",{attrs:{class:"token operator"}},[t._v(":")]),r("span",{attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{attrs:{class:"token property"}},[t._v('"server_ipv6"')]),r("span",{attrs:{class:"token operator"}},[t._v(":")]),r("span",{attrs:{class:"token string"}},[t._v('"::"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{attrs:{class:"token property"}},[t._v('"local_address"')]),r("span",{attrs:{class:"token operator"}},[t._v(":")]),r("span",{attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{attrs:{class:"token property"}},[t._v('"local_port"')]),r("span",{attrs:{class:"token operator"}},[t._v(":")]),r("span",{attrs:{class:"token number"}},[t._v("1080")]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{attrs:{class:"token property"}},[t._v('"port_password"')]),r("span",{attrs:{class:"token operator"}},[t._v(":")]),r("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),r("span",{attrs:{class:"token property"}},[t._v('"你的端口号1"')]),r("span",{attrs:{class:"token operator"}},[t._v(":")]),r("span",{attrs:{class:"token string"}},[t._v('"你的密码1，注意后面有逗号"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),r("span",{attrs:{class:"token property"}},[t._v('"你的端口号2"')]),r("span",{attrs:{class:"token operator"}},[t._v(":")]),r("span",{attrs:{class:"token string"}},[t._v('"你的密码2，注意后面没有逗号"')]),t._v("\n  "),r("span",{attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{attrs:{class:"token property"}},[t._v('"timeout"')]),r("span",{attrs:{class:"token operator"}},[t._v(":")]),r("span",{attrs:{class:"token number"}},[t._v("400")]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{attrs:{class:"token property"}},[t._v('"method"')]),r("span",{attrs:{class:"token operator"}},[t._v(":")]),r("span",{attrs:{class:"token string"}},[t._v('"chacha20"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{attrs:{class:"token property"}},[t._v('"protocol"')]),r("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{attrs:{class:"token string"}},[t._v('"origin"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{attrs:{class:"token property"}},[t._v('"protocol_param"')]),r("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{attrs:{class:"token string"}},[t._v('""')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{attrs:{class:"token property"}},[t._v('"obfs"')]),r("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{attrs:{class:"token string"}},[t._v('"plain"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{attrs:{class:"token property"}},[t._v('"obfs_param"')]),r("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{attrs:{class:"token string"}},[t._v('""')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{attrs:{class:"token property"}},[t._v('"redirect"')]),r("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{attrs:{class:"token string"}},[t._v('""')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{attrs:{class:"token property"}},[t._v('"dns_ipv6"')]),r("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{attrs:{class:"token boolean"}},[t._v("true")]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{attrs:{class:"token property"}},[t._v('"fast_open"')]),r("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{attrs:{class:"token boolean"}},[t._v("true")]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{attrs:{class:"token property"}},[t._v('"workers"')]),r("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),r("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),r("p",[t._v("保存：Ctrl+x然后输入y，然后回车。")])]),r("li",[r("p",[t._v("重启SSR：")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ /etc/init.d/shadowsocks restart\n")])])]),r("li",[r("p",[t._v("添加BBR：")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh\n$ chmod +x bbr.sh\n$ ./bbr.sh\n")])]),r("p",[t._v("然后会要求你重启服务器，输入"),r("strong",[t._v("y")]),t._v("回车即可。然后等待大概半分钟重新连接 SSH 验证安装：")]),r("ul",[r("li",[t._v("输入"),r("code",[t._v("$ uname -r")]),t._v("如果输出中有4.9.0以上就说明安装成功了。输入"),r("code",[t._v("$ lsmod | grep bbr")]),t._v("输出中有"),r("strong",[t._v("tcpbbr")]),t._v("说明BBR已经启动了。")])])]),r("li",[r("p",[t._v("添加一些优化内容：")]),r("ul",[r("li",[r("p",[t._v("打开sysctl.conf文件："),r("code",[t._v("$ nano /etc/systcl.conf")])])]),r("li",[r("p",[t._v("复制如下内容添加到文件最后：")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("# START MY ADD\nfs.file-max = 51200\nnet.core.rmem_max = 67108864\nnet.core.wmem_max = 67108864\nnet.core.netdev_max_backlog = 250000\nnet.core.somaxconn = 4096\nnet.ipv4.tcp_syncookies = 1\nnet.ipv4.tcp_tw_reuse = 1\nnet.ipv4.tcp_tw_recycle = 0\nnet.ipv4.tcp_fin_timeout = 30\nnet.ipv4.tcp_keepalive_time = 1200\nnet.ipv4.ip_local_port_range = 10000 65000\nnet.ipv4.tcp_max_syn_backlog = 8192\nnet.ipv4.tcp_max_tw_buckets = 5000\nnet.ipv4.tcp_fastopen = 3\nnet.ipv4.tcp_mem = 25600 51200 102400\nnet.ipv4.tcp_rmem = 4096 87380 67108864\nnet.ipv4.tcp_wmem = 4096 65536 67108864\nnet.ipv4.tcp_mtu_probing = 1\nnet.ipv4.tcp_congestion_control = bbr\n#END OF MY ADD\n")])])])])]),r("li",[r("p",[t._v("应用并重启SSR:")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ sysctl -p\n输出一些信息...\n$ /etc/init.d/shadowsocks restart\n")])])])]),r("h2",{attrs:{id:"vps安全加固"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vps安全加固","aria-hidden":"true"}},[t._v("#")]),t._v(" VPS安全加固")]),r("p",[t._v("参考此文："),r("a",{attrs:{href:"https://jasper-1024.github.io/2017/04/08/VPS%E7%A7%91%E5%AD%A6%E4%B8%8A%E7%BD%91%E6%95%99%E7%A8%8B3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jasper的博客：科学上网教程（三）——VPS安全加固")])]),r("h2",{attrs:{id:"客户端配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#客户端配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 客户端配置")]),r("p",[t._v("在使用客户端的时候会遇到一个选择：自动代理模式OR全局模式？先区别一下吧，方便后面选择：")]),r("p",[r("strong",[t._v("自动代理模式")]),t._v("和"),r("strong",[t._v("全局模式")]),t._v("的区别：按照我目前的理解是，自动代理模式下客户端会自动判断你当前访问的页面是否被墙了，需要FQ的它才会帮你走你的VPS；而全局模式下会将你的所有浏览请求都使用VPS走。按照我的经验是，在一般情况下使用自动代理模式，当某个页面访问过慢或者打不开的时候临时开一下全局模式就好。")]),r("ul",[r("li",[r("p",[t._v("如果你用的是"),r("strong",[t._v("Windows")]),t._v("，到这里"),r("a",{attrs:{href:"https://github.com/shadowsocks/shadowsocks-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载Shadowsocks")]),t._v("，解压后(不用安装)分别设置地址、端口号、加密方式和密码然后确定，最后启动系统代理即可：")]),r("p",[r("img",{attrs:{src:a(51),alt:"Windows客户端配置"}})])]),r("li",[r("p",[t._v("如果你用的是"),r("strong",[t._v("Linux/Mac")]),t._v("，到这里"),r("a",{attrs:{href:"https://github.com/shadowsocks/ShadowsocksX-NG/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载Shadowsocks")]),t._v("，解压后打开配置如下：")]),r("p",[t._v("打开Shadowsocks后依次点击"),r("strong",[t._v("服务器")]),t._v("➡️"),r("strong",[t._v("打开服务器设定…")]),t._v("，然后分别设置地址、端口号、加密方式和密码然后确定即可：")]),r("p",[r("img",{attrs:{src:a(50),alt:"Linux/Mac客户端配置 "}})])])]),r("h2",{attrs:{id:"验证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#验证","aria-hidden":"true"}},[t._v("#")]),t._v(" 验证")]),r("p",[r("a",{attrs:{href:"https://www.google.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google")])]),r("p",[r("a",{attrs:{href:"https://www.youtube.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YouTube")])]),r("h2",{attrs:{id:"参考文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文章")]),r("p",[r("a",{attrs:{href:"https://33103.ml/2017/11/13/%E7%A7%91%E5%AD%A6%E4%B8%8A%E7%BD%91%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%E2%80%94%E2%80%94VPS%E4%B8%8A%E6%90%AD%E5%BB%BASSR/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LaiKe的博客")])]),r("p",[r("a",{attrs:{href:"https://jasper-1024.github.io/2016/06/26/VPS%E7%A7%91%E5%AD%A6%E4%B8%8A%E7%BD%91%E6%95%99%E7%A8%8B%E7%B3%BB%E5%88%97/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jasper的博客")])]),r("p",[r("a",{attrs:{href:"https://medium.com/@zoomyale/%E7%A7%91%E5%AD%A6%E4%B8%8A%E7%BD%91%E7%9A%84%E7%BB%88%E6%9E%81%E5%A7%BF%E5%8A%BF-%E5%9C%A8-vultr-vps-%E4%B8%8A%E6%90%AD%E5%BB%BA-shadowsocks-fd57c807d97e",target:"_blank",rel:"noopener noreferrer"}},[t._v("Medium的一篇文章")])]),r("div",{staticClass:"warning custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("责任说明")]),r("p",[t._v("请合法使用相关内容，本文只是出于研究学习与技术分享的目的，其他一切后果与本人无关!")])])])}],n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);s.default=e.exports}}]);