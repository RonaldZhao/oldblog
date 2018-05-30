# Python面试题收集整理

[[toc]]

## 百度大牛总结的十条Python面试题

### 1.类继承

问题：有如下一段代码，请问应该如何调用`A`的`show`方法？

```python
class A(object):
	def show(self):
		print('base show')
class B(A):
    def show(self):
        print('derived show')
obj = B()
obj.show()
```

答案：

```python
obj.__class__ = A
obj.show()
```

解释：

`__class__`方法指向了类对象，只要给他赋值类型` A` ，然后调用方法`show `，但是用完了记得修改回来。 

### 2.方法对象

问题：为了让下面这段代码运行，需要增加那些代码？

```python
class A(object):
    def __init__(self, a, b):
        self.__a = a
        self.__b = b
    def myprint(self):
        print('a=', self.__a, 'b=', self.__b)

a1 = A(10, 20)
a1.myprint()

a1(80)
```

答案：为了能让对象实例能被直接调用，需要实现`__call__`方法：

```python
class A(object):
    def __init__(self, a, b):
        self.__a = a
        self.__b = b
    def myprint(self):
        print('a=', self.__a, 'b=', self.__b)
    def __call__(self, num):
        print('call:', num + self.__a)
```

### 3.new和init

问题：下面这段代码输出什么？

```python
class B(object):
    def fn(self):
        print('B fn')
    def __init__(self):
        print('B INIT')
        
        
class A(object):
    def fn(self):
        print('A fn')
    def __new__(cls, a):
        print('NEW', a)
        if a > 10:
            return super(A, cls).__new__(cls)
        return B()
    def __init__(self, a):
        print('INIT', a)

a1 = A(5)
a1.fn()
a2 = A(20)
a2.fn()
```

答案：

```python
NEW 5
B INIT
B fn
NEW 20
INIT 20
A fn
```

解释：

使用`__new__`方法，可以决定返回哪个对象，也就是创建对象之前。这个可以用于设计模式的单例模式、工厂模式。`__init__`是创建对象用来调用的。

### 4.list和dict生成

问题：下面这段代码输出什么？

```python
ls = [1, 2, 3, 4]
list1 = [i for i in ls if i > 2]
print(list1)

list2 = [i * 2 for i in ls if i > 2]
print(list2)

dic1 = {x:x**2 for x in (2, 4, 6)}
print(dic1)

dic2 = {x:'item'+str(x**2) for x in (2, 4, 6)}
print(dic2)

set1 = {x for x in 'hello world' if x not in 'low level'}
```

答案：

```python
[3, 4]
[6, 8]
{2: 4, 4: 16, 6: 36}
{2: 'item4', 4: 'item16', 6: 'item36'}
set(['h', 'r', 'd'])
```

### 5.全局变量和局部变量

问题：下面这段代码输出什么？

```python
num = 9

def f1():
    num = 20
    
def f2():
    print(num)
    
f2()
f1()
f2()
```

答案：

```python
9
9
```

解释：

`num`看似是个全局变量，实则不是，所以`f1`函数中的`num`实际上是这个函数自己的`num`，与函数外部的`num`没有关系。如果想在`f1`函数内部修改函数外部的`num`的话，则需要使用`global`关键字修饰`num`：

```python
def f1():
    global num
    num = 20
```

这样才能达到在函数内部修改外部的变量的目的。

### 6.交换两个变量的值

问题：用一行代码交换两个变量的值。

```python
a = 8
b = 9
```

答案：`a, b = b, a`

### 7.默认方法

问题：有如下的代码：

```python
class A(object):
    def __init__(seld, a, b):
        self.a1 = a
        self.b1 = b
        print('init')
    def mydefault(self):
        print('default')
        
a1 = A(10, 20)
a1.fn1()
a1.fn2()
a1.fn3()
```

其中，方法`fn1`、`fn2`、`fn3`都没有定义。添加代码，使没有定义的方法都调用`mydefault`函数，使得上面的代码输出：

```python
default
default
default
```

答案：

```python
class A(object):
    def __init__(self, a, b):
        self.a1 = a
        self.b1 = b
        print('init')
    def mydefault(self):
        print('default')
    def __getattr__(self, name):
        return self.mydefault
    
a1 = A(10, 20)
a1.fn1()
a1.fn2()
a1.fn3()
```

解释：

方法`__getattr__`只有当调用了没有定义的方法的时候才会调用它。当`fn1`方法传入参数时，我们可以给`mydefault`方法增加一个`*args`不定参数来兼容：

```python
class A(object):
    def __init__(self, a, b):
        self.a1 = a
        self.b1 = b
        print('init')
    def mydefault(self, *args):
        print('default' + str(args[0]))
    def __getattr__(self, name):
        return self.mydefault
    
a1 = A(10, 20)
a1.fn1()
a1.fn2()
a1.fn3()
```

### 8.包管理

问题：一个包里有三个模块，`mod1.py`、`mod2.py`、`mod3.py`，但使用`from demopack import *`导入模块时，如何保证只有`mod1`、`mod3`被导入了。

答案：在`demopack`包中的`__init__`文件中增加：

```python
__all__ = ['mod', 'mod3']
```

### 9.闭包

问题：写一个函数，接收整数参数`n`，返回一个函数，函数的功能是把函数的参数和`n`相乘并把结果返回。

答案：

```python
def nulby(num):
    def gn(val):
        return num * val
    return gn

zw = nulby(7)
print(zw(9))  # 输出 63
```

### 10.性能

问题：解析下面的代码慢在哪？

```python
def strtest1(num):
    str = 'first'
    for i in range(num):
        str += '×'
    return str

```

答案：

`python`的`str`是个不可变对象，每次迭代，都会生成新的`str`对象来存储新的字符串，`num`越大，创建`str`对象的次数越多，内存消耗越大。

[原文来源](https://segmentfault.com/a/1190000012277531)
