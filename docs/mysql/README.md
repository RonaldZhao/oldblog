# Win10下MySQL8.0.11.zip的安装

[[toc]]

## 环境

OS: Windows10 1709(内部版本16299.371)
MySQL: [8.0.11(点击即可下载)](https://cdn.mysql.com//Downloads/MySQL-8.0/mysql-8.0.11-winx64.zip)
安装目录: D:\softwares\mysql-8.0.11\

## Step 0

将MySQL安装目录的`bin`目录(如我的是：D:\softwares\mysql-8.0.11\bin)加入系统环境变量。

## Step 1

Windows系统中MySQL默认的配置文件是安装目录中的`my.ini`文件，解压后应该是不存在的，所以在安装目录中创建此文件并填入如下内容：

```ini
[mysqld]
# 设置端口号为3306
port = 3306
# 设置MySQL的安装目录，注意路径必须是两个'\'
basedir = D:\\softwares\\mysql-8.0.11
# 设置MySQL数据库数据的存放目录，不存在的话会自动创建，注意路径必须是两个'\'
datadir = D:\\softwares\\mysql-8.0.11\\data
# 设置允许的最大连接数
max_connections = 200
# 设置允许连接失败的次数，防止恶意攻击
max_connect_errors = 10
# 设置服务器端默认使用的字符集
character-set-server = utf8mb4
# 设置创建表时默认的存储引擎
default-storage-engine = INNODB
# 设置认证方式。因为从MySQL8.0.4开始，MySQL的密码认证插件是“caching_sha2_password”，但是这种方式目前很多客户端工具都不支持，所以改为"mysql_native_password"的老方式。
default_authentication_plugin = mysql_native_password
[mysql]
# 设置MySQL客户端的默认字符集
default-character-set = utf8mb4
[client]
# 设置MySQL客户端连接服务器时默认使用的端口和字符集
port = 3306
default-character-set = utf8mb4
```

## Step 2

::: tip 初始化数据库
以管理员权限打开`CMD`或`Power Shell`，然后执行`mysqld --initialize`。
:::

执行后控制台无任何输出，但是会在安装目录中自动创建`data`目录，而且在`data`目录中会有一个`.err`结尾的文件，里面记录着MySQL的初始密码(比如下面的就是：j2=NNm.kinw:)

```err{2}
2018-05-22T17:37:53.290175Z 0 [System] [MY-013169] [Server] D:\softwares\mysql-8.0.11\bin\mysqld.exe (mysqld 8.0.11) initializing of server in progress as process 9252
2018-05-22T17:37:58.892568Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: j2=NNm.kinw:
2018-05-22T17:38:02.154657Z 0 [System] [MY-013170] [Server] D:\softwares\mysql-8.0.11\bin\mysqld.exe (mysqld 8.0.11) initializing of server has completed
```

## Step 3

::: tip 安装服务
执行命令`mysqld --install [服务名]`。
:::

服务名可以不写，默认为`mysql`，但是如果你有多个版本的MySQL就要为他们起不同的名字，比如`mysql57`或`mysql8`。

*注意：服务安装后默认是开机自启的。*

## Step 4

::: tip 启动服务
执行命令`net start mysql`。
:::

::: warning 停止服务
停止服务命令：`net stop mysql`。
:::

::: tip 登录MySQL
执行命令`mysql -u root -p`，然后输入`.err`文件中的密码。
:::

::: tip 修改root密码
登录MySQL之后执行`alter user 'root'@'localhost' identified with mysql_native_password by '新密码';`。
然后执行`flush privileges;`刷新权限。
:::

## 参考文章

[手动安装Mysql8.0.11(zip安装)](https://my.oschina.net/orionlily/blog/1816235)
