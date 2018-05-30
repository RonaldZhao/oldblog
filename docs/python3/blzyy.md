# Python变量的作用域

[[toc]]

## 全局变量

即，在**函数之外**(如果是嵌套函数则是**最外层**函数之外)或在**全局范围内**声明的变量，全局变量可以在当前模块的任意之处访问。举个例子：

```python
x = '我是全局变量'
def outer():
    def inner():
        def inner_inner():
            print(x)
        inner_inner()
        print(x)
    inner()
    print(x)
outer()
```

输出如下：

```python
>>> outer()
我是全局变量
我是全局变量
我是全局变量
```

由此便引出了一个问题：当我想在**函数内部**修改全局变量的时候怎么办？先试试再说：

```python
x = '我是全局变量'
def update_outer_x():
    x = '我被修改了'
    print(x)
update_outer_x()
print(x)
```

然而你会得到如下结果：

```python
>>> update_outer_x()
我被修改了
>>> print(x)
我是全局变量
```

外部的`x`并没有被真正修改，函数`update_outer_x`内部的`x`实际上被定义成了一个局部变量，而并没有修改外部`x`的值，执行内部的`print`的时候输出的也只是函数内部的`x`，所以没有达到修改全局变量`x`的目的。

由此便有了`global`关键字：

```python
x = '我是全局变量'
def update_outer_x():
    global x
    x = '我被修改了'
    print(x)
update_outer_x()
print(x)
```

执行结果如下：

```python
>>> update_outer_x()
我被修改了
>>> print(x)
我被修改了
```

因此通过在函数内部使用`global`关键字，达到了在函数内部修改全局变量的目的。

## 局部变量

即，在函数体内部或在局部作用域内声明的 变量。局部变量无法在它的作用域之外(如函数体之外)访问：

```python
def f():
    x = '我是局部变量'
f()
print(x)
```

执行结果如下：

```python
>>> f()
>>> print(x)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'x' is not defined
```

因为变量`x`的作用域只在函数`f()`之内，当函数执行完毕的时候，它所占的资源也就被释放了。

## 非局部变量

假设有如下一段代码：

```python
x = '我是全局变量x'
def outer():
    x = '我是outer函数的变量x'
    def inner():
        x = '我是inner函数的变量x'
        print(x)
    inner()
    print(x)
outer()
print(x)
```

我们想要达到的目的是在`inner`函数内部修改其外部、函数`outer`内部的变量`x`，但是不修改全局变量`x`。但是现在的代码执行结果如下：

```python
>>> outer()
我是inner函数的变量x
我是outer函数的变量x
>>> print(x)
我是全局变量x
```

可见，并没有达到我们的目的。前面我们知道，我们可以使用`global`关键字达到修改函数外部变量的目的，让我们试试：

```python
x = '我是全局变量x'
def outer():
    x = '我是outer函数的变量x'
    def inner():
        global x
        x = '我是inner函数的变量x'
        print(x)
    inner()
    print(x)
outer()
print(x)
```

执行结果如下：

```python
>>> outer()
我是inner函数的变量x
我是outer函数的变量x
>>> print(x)
我是inner函数的变量x
```

可见，仍然没有达到我们的目的，而是修改了全局变量`x`。。。

因此，便有了**非局部变量**，通过关键字`nonlocal`来创建**非局部变量**，以达到在嵌套函数内部修改**嵌套函数外部但非全局变量**的变量的目的。将上面程序的`global`替换为`nonlocal`：

```python
x = '我是全局变量x'
def outer():
    x = '我是outer函数的变量x'
    def inner():
        nonlocal x
        x = '我是inner函数的变量x'
        print(x)
    inner()
    print(x)
outer()
print(x)
```

执行结果如下：

```python
>>> outer()
我是inner函数的变量x
我是inner函数的变量x
>>> print(x)
我是全局变量x
```

​达到了我们想要在`inner`函数内部修改其函数外部、`outer`函数内部的变量`x`的目的。这就是`nonlocal`的用法和意义。

[参考文章](https://mp.weixin.qq.com/s/OLNwWSBF0uNKqiXIhSaYRA)