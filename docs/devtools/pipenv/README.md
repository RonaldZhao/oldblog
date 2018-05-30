# 从pip到Pipenv

[[toc]]

## 实验环境

OS：win10专业版

Python：3.6.5

## 安装Pipenv

```shell{1}
$ pip3 install pipenv --user  # 这使用了"用户安装"，以防止破坏任何系统范围的包。
...
```

## 为项目安装python环境

```shell{2}
$ cd myproject
$ pipenv install
Creating a virtualenv for this project…
Using d:\xxx\python\python.exe (3.6.5) to create virtualenv…
Already using interpreter d:\xxx\python\python.exe
Using base prefix 'd:\\xxx\\python'
New python executable in C:\Users\xxx\.virtualenvs\myproject-WutQCvaG\Scripts\python.exe
Installing setuptools, pip, wheel...done.

Virtualenv location: C:\Users\xxx\.virtualenvs\myproject-WutQCvaG
Creating a Pipfile for this project…
Pipfile.lock not found, creating…
Locking [dev-packages] dependencies…
Locking [packages] dependencies…
Updated Pipfile.lock (ca72e7)!
Installing dependencies from Pipfile.lock (ca72e7)…
  ================================ 0/0 - 00:00:00
To activate this project's virtualenv, run the following:
 $ pipenv shell
$ ls

    目录: D:\myproject

Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----        2018/5/23     13:57            138 Pipfile
-a----        2018/5/23     13:57            453 Pipfile.lock
```

## 激活虚拟环境

```shell{1}
$ pipenv shell
Launching subshell in virtual environment. Type 'exit' to return.
Windows PowerShell
版权所有 (C) Microsoft Corporation。保留所有权利。
$ pip -V  # 根据如下输入可知使用的已经是当前项目的python环境了
pip 10.0.1 from c:\users\xxx\.virtualenvs\myproject-wutqcvag\lib\site-packages\pip (python 3.6)
```

## 为项目安装库

```shell{1}
$ pipenv install jinja2
Installing jinja2…
Collecting jinja2
  Downloading https://files.pythonhosted.org/packages/7f/ff/ae64bacdfc95f27a016a7bed8e8686763ba4d277a78ca76f32659220a731/Jinja2-2.10-py2.py3-none-any.whl (126kB)
Collecting MarkupSafe>=0.23 (from jinja2)
  Downloading https://files.pythonhosted.org/packages/4d/de/32d741db316d8fdb7680822dd37001ef7a448255de9699ab4bfcbdf4172b/MarkupSafe-1.0.tar.gz
Building wheels for collected packages: MarkupSafe
  Running setup.py bdist_wheel for MarkupSafe: started
  Running setup.py bdist_wheel for MarkupSafe: finished with status 'done'
  Stored in directory: C:\Users\RonaldZhao\AppData\Local\pip\Cache\wheels\33\56\20\ebe49a5c612fffe1c5a632146b16596f9e64676768661e4e46
Successfully built MarkupSafe
Installing collected packages: MarkupSafe, jinja2
Successfully installed MarkupSafe-1.0 jinja2-2.10

Adding jinja2 to Pipfile's [packages]…
Pipfile.lock (6f7080) out of date, updating to (9304a2)…
Locking [dev-packages] dependencies…
Locking [packages] dependencies…
Updated Pipfile.lock (9304a2)!
Installing dependencies from Pipfile.lock (9304a2)…
  ================================ 10/10 - 00:00:02
To activate this project's virtualenv, run the following:
 $ pipenv shell
```

## 参考文章

[使用pipenv管理你的项目](http://www.dongwm.com/archives/%E4%BD%BF%E7%94%A8pipenv%E7%AE%A1%E7%90%86%E4%BD%A0%E7%9A%84%E9%A1%B9%E7%9B%AE/)
