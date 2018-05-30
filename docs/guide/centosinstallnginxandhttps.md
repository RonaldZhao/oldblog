# 阿里云ECS服务器安装nginx1.12.2、配置博客目录并开启https

[[toc]]

## 服务器系统

CentOS 7.4

## 安装

下面的命令都是在root权限下执行，非root需要使用sudo。如：`sudo yum`

```shell
# vim /etc/yum.repos.d/nginx.repo # 进入后先按小写 **a** ，然后粘贴如下内容，然后按 **esc** ，然后输入 **:wq** 回车退出。
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/
gpgcheck=0
enabled=1
# yum install nginx
...
..
.
# systemctl start nginx
# systemctl status nginx # 可见输出的第二行如下
● nginx.service - nginx - high performance web server
   Loaded: loaded (/usr/lib/systemd/system/nginx.service; disabled; vendor preset: disabled)
   Active: **active (running)** since Wed 2017-11-01 16:23:32 CST; 14s ago
     Docs: http://nginx.org/en/docs/
  Process: 10379 ExecStart=/usr/sbin/nginx -c /etc/nginx/nginx.conf (code=exited, status=0/SUCCESS)
  Process: 10378 ExecStartPre=/usr/sbin/nginx -t -c /etc/nginx/nginx.conf (code=exited, status=0/SUCCESS)
 Main PID: 10382 (nginx)
   CGroup: /system.slice/nginx.service
           ├─10382 nginx: master process /usr/sbin/nginx -c /etc/nginx/nginx.conf
           └─10383 nginx: worker process
Nov 01 16:23:32 jesuszhao systemd[1]: Starting nginx - high performance web server...
Nov 01 16:23:32 jesuszhao nginx[10378]: nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
Nov 01 16:23:32 jesuszhao nginx[10378]: nginx: configuration file /etc/nginx/nginx.conf test is successful
Nov 01 16:23:32 jesuszhao systemd[1]: Failed to read PID from file /var/run/nginx.pid: Invalid argument
Nov 01 16:23:32 jesuszhao systemd[1]: Started nginx - high performance web server.
```

## 配置

问题一：nginx未设置开机启动，所以如果服务器重启就需要手动启动nginx。

解决方法： 执行`# systemctl enable nginx.service `，然后重启服务器即可。

问题二：nginx还未与博客目录、域名绑定 。

解决方法：

首先你要决定把博客目录放在哪里，然后在那里新建一个文件夹并把博客的所有文件上传到那个文件夹下，比如：`/var/www/blog`目录，然后配置`nginx`：

```shell
# cd /etc/nginx/conf.d/
# vim default.conf # 最好先备份：cp default.conf default.conf.bak
```

 打开default.conf文件后修改server的花括号之间的以下几项： 

1. **server_name**：改成你的域名，如：`ronaldzhao.top`（不要带http或https前缀）
2. **root**：改成你的博客目录的路径，如：`/var/www/blog `
3.  **index**: 改成你的博客文件的首页文件名，如：`index.html `

## 开启https

1. 首先去[阿里云](https://common-buy.aliyun.com/?spm=5176.2020520163.cas.1.7f850e31atqmMO&commodityCode=cas#/buy)、[腾讯云](https://console.cloud.tencent.com/ssl/apply)、[七牛云](https://portal.qiniu.com/certificate/apply)等申请个免费的https证书。 

2. 待证书发下来后把nginx版的下载下来，然后登录ECS创建以下目录：

   ```shell
   # cd /etc/nginx/
   # mkdir cert
   ```

   然后使用`FileZilla`把下载下来的文件（一般是两个，一个`.pem`的，一个`.key`的）上传到新建的cert目录里。

3. 再次编辑nginx配置文件`default.conf `：

   ```shell
   # vim default.conf # 然后在文件的最前面添加以下内容，注意几个地方要根据你的情况填写
   server {
           listen 443;
           server_name www.yourdomain.com; #填写绑定证书的域名
           ssl on;
           ssl_certificate cert/your_file_name.pem;
           ssl_certificate_key cert/your_file_name.key;
           ssl_session_timeout 5m;
           ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #按照这个协议配置
           ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;#按照这个套件配置
           ssl_prefer_server_ciphers on;
           location / {
               root   html; #站点目录
               index  index.html index.htm;
           }
       }
   ```

   注意不是把原来的server{….}那一堆覆盖。

   其中的**server_name**、**root**、**index**三项修改为和之前修改的一致。

   然后在原来的server{…..}那一堆中的**location / {…}**的任意一行添加 **rewrite ^(.\*) https://$host$1 permanent;** 强制http为https访问，开启全站https。（可选）

## 重启nginx

```shell
# systemctl restart nginx
```