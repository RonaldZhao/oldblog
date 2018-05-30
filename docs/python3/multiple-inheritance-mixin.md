# 一文理解Python多重继承

[[toc]]

## 多重继承

### 为什么要有继承？

答：有了继承，子类就可以延用并扩展父类的功能，实现**代码的复用**，这是面向对象编程中一个重要的方式。

### 又为什么要有多重继承？

答：有时候有的子类需要继承多个父类的功能，所以就需要有**多重继承**了。比如蝙蝠不但属于哺乳类，又属于能飞的一类，所以蝙蝠可以直接继承两类的功能：

```python
class Mammal(object):
    def kind(slef):
        print('I am a mammal.')

class Flyable(object):
    def ability(self):
        print('I can fly.')
        
class Bat(Mammal, Flyable):
    pass

bat = Bat()
bat.kind()  # 输出：I am a mammal.
bat.ability()  # 输出：I can fly.
```

### 多重继承存在的问题

钻石继承(菱形继承)问题：不相关的祖先类实现了同名方法所引起的问题。如：

```python
class A(object):
    def who_am_i(self):
        print('I am A.')

class B(A):
    def who_am_i(self):
        print('I am B.')

class C(A):
    def who_am_i(self):
        print('I am C.')

class D(B, C):
    def who_am_i(self):
        print('I am D.')

d1 = D()
d1.who_am_i()  # 输出：I am D.
```

但是如果将`D`改为：

```python
class D(B, C):
    pass
```

再次调用`d1.who_am_i()`则会输出：`I am B.`。

所以问题来了，为什么会输出`I am B.`而不是`I am C.`呢？假如我想要调用的是`C`中的`who_am_i`呢？

这就是**钻石问题(菱形问题)**，因为其继承层次像一颗钻石(菱形)。

### 钻石问题的解决办法

为了解决这个问题，python使用了一种叫“方法解析顺序(Method Resolution Order, **MRO**)”的方法，但是现在一般使用的是**C3**算法。

#### MRO

MRO算法主要用于在多继承时判断所调用的属性的路径(即来自哪个类)。但是只用在**python2.3**之前的版本，所以我们就不必再去深究它了。之后版本的python使用的都是**C3**算法。

#### C3

##### 为什么采用C3算法

C3算法最早被提出是用于**Lisp**的，应用在python中是为了解决MRO的**不满足本地优先级**和**单调性**的问题。

- 本地优先级：指声明子类时父类的书写顺序，比如`C(A, B)`，如果访问`C`类对象的属性时，如果在本类中找不到，则应该根据父类的声明顺序，优先在`A`类中查找，然后再在`B`类中查找。
- 单调性：如果在`C`的解析顺序中，`A`排在`B`的前面，那么在`C`的所有子类里，也必须(肯定)满足这个顺序。

##### C3算法

判断MRO(方法解析顺序)要先确定一个线性序列，然后查找路径由序列中类的顺序决定。所以**C3**算法就是生成这个线性序列。如：

```python
class B(A):
    pass
```

则这时`B`的**MRO序列**为：`[B, A]`。

如果：

```python
class B(A1, A2, A3, ...):
    pass
```

则这时`B`的**MRO序列**为：`mro(B) = [B] + merge(mro(A1), mro(A2), mro(A3), ..., [A1, A2, A3, ...])`

所以`merge`操作就是C3算法的核心。

##### merge

遍历执行`merge`操作的序列，如果序列的第一个元素在其他序列中也是第一个元素，或不在其他序列出现，则从所有执行`merge`操作的序列中删除这个元素，并将其合并到当前的`mro`中。

执行`merge`操作后的序列，继续执行`merge`操作，知道其操作序列为空。

如果操作序列无法为空，则说明不合法。

举个栗子：

```python
class A(O):
    pass

class B(O):
    pass

class C(O):
    pass

calss D(A, B):
    pass

class E(B, C):
    pass

class F(D, E):
    pass
```

`A`、`B`、`C`都继承自同一个基类`O`，所以它们的`mro序列`分别为`[A, O]`、`[B, O]`、`[C, O]`。所以：

```python
mro(D) = [D] + merge(mro(A) + mro(B) + [A, B]) = [D] + merge([A, O], [B, O], [A, B])
```

所以将执行`merge`操作的序列为`[A, O], [B, O], [A, B]`：

`A`时序列`[A, O]`中的第一个元素，而且在序列`[B, O]`中没有出现，在序列`[A, B]`中也是第一个元素，所以从`merge序列`中删除`A`并将其加入到当前`mro序列[D]`中：

```python
mro(D) = [D, A] + merge([O], [B, O], [B])
```

再执行`merge`操作，`O`时序列`[O]`中的第一个元素，但是它在序列`[B, O]`中出现了并且不是其第一个元素，忽略。继续查看序列`[B, O]`中的第一个元素`B`知其满足merge的条件，所以对其执行merge操作得：

```python
mro(D) = [D, A, B] + merge([O], [O])
```

然后再执行一次merge操作即得：`mro(D) = [D, A, B, O]`即为`D`的**mro序列**。

同理：

```python
mro(E) = [E] + merge(mro(B) + mro(C) + [B, C])
       = [E] + merge([B, O] + [C, O] + [B, C])
       = [E, B] + merge([O] + [C, O] + [C])
       = [E, B, C] + merge([O] + [O])
       = [E, B, C, O]
mro(F) = [F] + merge(mro(D) + mro(E) + [D, E])
       = [F] + merge([D, A, B, O] + [E, B, C, O] + [D, E])
       = [F, D] + merge([A, B, O] + [E, B, C, O] + [E])
       = [F, D, A] + merge([B, O] + [E, B, C, O] + [E])
       = [F, D, A, E] + merge([B, O] + [B, C, O])
       = [F, D, A, E, B] + merge([O], [C, O])
       = [F, D, A, E, B, C] + merge([O], [O])
       = [F, D, A, E, B, C, O]
```

这就是**C3算法**生成**MRO序列**的核心步骤。

## MixIn

还没搞清楚，等我实际用到了切身体会一下再回来添加上。

## 参考文章

- [廖雪峰python教程](https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/0014318680104044a55f4a9dbf8452caf71e8dc68b75a18000)
- [Python多重继承方法解析顺序（MRO构建算法）](https://www.jianshu.com/p/33369eb6268e)
- [多重继承的陷阱：钻石继承（菱形继承）问题 ](http://www.cnblogs.com/fclbky/articles/4098181.html)
- [关于MRO 和 C3算法](https://www.jianshu.com/p/a08c61abe895)
- [关于Python的Mixin模式](http://www.bjhee.com/python-mixin.html)
- [Python mixin模式](https://www.jianshu.com/p/933a22ac0eb7)

觉得没看懂？欢迎来信反馈<zzgdata@gmail.com>