# 一文看懂Python闭包

[[toc]]

## 热身

函数作为**第一类对象**，它可以作为函数的返回值返回，现在我们来考虑如下的例子： 

```python
def print_msg():
    # print_msg 是外围函数
    msg = "zen of python"
    def printer():
        # printer 是嵌套函数
        print(msg)
    return printer

another = print_msg()
# 输出 zen of python
another()
```

这段代码不同的地方在于内部函数`printer`直接作为返回值返回了。 

一般情况下，函数中的局部变量仅在函数的执行期间可用，一旦`print_msg()`执行过后，我们会认为`msg`变量将不再可用。然而，在这里我们发现`print_msg`执行完之后，在调用`another`的时候`msg`变量的值正常输出了，这就是闭包的作用。**闭包使得局部变量在函数外被访问成为可能**。

这里的`another`就是一个闭包，闭包本质上是一个函数，它有两部分组成，`printer`函数和变量`msg`。闭包使得这些变量的值始终保存在**内存**中。 

闭包，顾名思义，就是一个封闭的包裹，里面包裹着自由变量，就像在类里面定义的属性值一样，自由变量的可见范围随同包裹，哪里可以访问到这个包裹，哪里就可以访问到这个自由变量。 

## 为什么要使用闭包？

闭包避免了使用全局变量，此外，闭包允许将函数与其所操作的某些数据（环境）关连起来。这一点与面向对象编程是非常类似的，在面对象编程中，对象允许我们将某些数据（对象的属性）与一个或者多个方法相关联。 

一般来说，当对象中只有一个方法时，这时使用闭包是更好的选择。来看一个例子： 

```python
def adder(x):
    def wrapper(y):
        return x + y
    return wrapper
adder5 = adder(5)
adder5(10)  # 输出 15
adder5(6)  # 输出 11
```

这比用类来实现更优雅，此外**装饰器**也是基于闭包的一种应用场景。 

## 稍加深入

所有函数都有一个`__closure__`属性，如果这个函数是一个闭包的话，那么它返回的是一个由`cell`对象 组成的元组对象。`cell`对象的`cell_contents`属性就是闭包中的自由变量。 

```python
>>> adder.__closure__
>>> adder5.__closure__
(<cell at 0x103075910: int object at 0x7fd251604518>,)
>>> adder5.__closure__[0].cell_contents
5
>>>
```

这解释了为什么局部变量脱离函数之后，还可以在函数之外被访问的原因的，因为它存储在了闭包的 `cell_contents中`了。 

[原文来源](https://foofish.net/python-closure.html )