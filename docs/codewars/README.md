# codewars题目的Python求解

[[toc]]

## 最好的旅行(Best travel)

::: tip 题目描述

John和Mary几个城镇A, B, C, ..., 之间旅行。Mary在一张纸上列出了这些城镇之间的距离列表。`ls = [50, 55, 57, 58, 60]`。John厌倦了驾驶并且对Mary说他不想开车超过`t = 174英里`，并且他将只参观3个城镇。

他们将选择哪些距离，哪些城镇使得距离之和尽可能最大。

解释：

在`ls`列表和参观3个城镇的条件下，他们的选择有这些：`[50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60]`。

相对应的距离之和为：`162, 163, 165, 165, 167, 168, 170, 172, 173, 175 `。

考虑到可能的最大和上限为174，所以上面最接近的是173，对应的城镇距离为`[55, 58, 60]`。

函数`choose_best_sum`将会接收参数`t`(距离和的最大值，整数，非负)，`k`(要参观城镇的数量，`k>=1`)和`ls`(距离列表，所有的距离都是正整数或空整数(None/null))。函数返回“最好的”和，比如如果这个和存在则返回`k`个距离的小于或等于给定上限`t`的可能的最大和，否则返回`None`。

示例：

```
ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163
xs = [50] choose_best_sum(163, 3, xs) -> None (or null or ... or -1 (C++, C, Rust, Swift, Go)
ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

```

:::

<details>

<summary>我的解法(点击展开)</summary>

```python
# 待添加
```

</details>

## 百兽盛宴(The Feast of Many Beasts)

::: tip 题目描述

所有的动物都有盛宴！ 每只动物要带来一个盘子。 只有一个规则：盘子中的食物名必须以与动物名称的首字母和尾字母相同。 例如，伟大的蓝鹭(**g**reat blue hero**n**)带来蒜味印度烤饼(**g**arlic naa**n**)，山雀(chickadee)带来巧克力蛋糕(chocolate cake)。

写一个盛宴函数，以动物的名字和盘子中的食物名作为参数，并返回真或假，以表明是否允许此野兽把盘子带到盛宴。

假设野兽的名字和盘子中的食物名都是小写字母，并且每个字母至少有两个字母。 野兽名和盘子中的食物名可能包含连字符和空格，但这些不会出现在字符串的开头或结尾。 而且他们不会包含数字。

:::

<details>

<summary>我的解法(点击展开)</summary>

```python
def feast(beast, dish):
    # 解法一
    return beast[0] == dish[0] and beast[-1] == dish[-1]
	# 解法二：return beast.startswith(dish[0]) and beast.endswith(dish[-1])
```

</details>

## IP验证(IP Validation)

::: tip 问题描述

编写一个能够识别合法的点分十进制格式IPv4地址的算法。如果一个IP地址由四个[八字节](https://zh.wikipedia.org/zh-cn/%E5%85%AB%E4%BD%8D%E5%85%83%E7%B5%84)的介于**[0, 255]**的值组成，则视为合法。

函数的输入保证为单个字符串。

示例：

```python
# 合法输入
1.2.3.4
123.45.67.89
# 不合法输入
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
```

:::

我的解法：

```python
def is_valid_IP(strng):
  lst = strng.split('.')
  passed = 0
  for sect in lst:
    if sect.isdigit():
      if sect[0] != '0':
        if 0 < int(sect) <= 255:
          passed += 1
  return passed == 4
```

网友使用`re`模块的解法：

```python
import re
def is_valid_IP(strng):
    return bool(re.match(r'^((\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}(?=$)',strng))
```

网友使用`socket`模块的解法：

```python
import socket

def is_valid_IP(addr):
    try:
        socket.inet_pton(socket.AF_INET, addr)
        return True
    except socket.error:
        return False
```

## 排序奇数(Sort the odd)

::: tip 问题描述

你有一个由数字组成的数组。

你的任务是将其中的奇数按照升序排序，但是偶数必须仍然在它们本来的位置。

零不是一个奇数所以你不需要移动它。如果你得到了一个空数组，你需要直接返回它。

例如：

```python
sort_array([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
```

:::

我的解法：

```python
# 快速排序，刚学会，所以没用内置的排序函数而自己写了一个
def quick_sort(nums, left, right):
    if left >= right:
        return nums
    key = nums[left]
    low = left
    high = right
    
    while left < right:
        while left < right and nums[right] >= key:
            right -= 1
        nums[left] = nums[right]
        
        while left < right and nums[left] <= key:
            left += 1
        nums[right] = nums[left]
    nums[left] = key
    quick_sort(nums, low, left-1)
    quick_sort(nums, left+1, high)
    return nums

def sort_array(source_array):
    # Return a sorted array.
    odd_nums = []
    [odd_nums.append(x) for x in source_array if x % 2 != 0]
    odd_nums = quick_sort(odd_nums[:], 0, len(odd_nums)-1)
    j=0
    for i in range(len(source_array)):
        if source_array[i] % 2 == 0:
            continue
        source_array[i] = odd_nums[j]
        j += 1
    return source_array
```



## 简单加密＃1 - 交替分割(Simple Encryption #1 - Alternating Split)

::: tip 问题描述

为了构建加密的字符串：

从字符串中每两个字符取一个，然后是其他的剩余字符，将他们拼接起来作为新字符串。

按照上面的方法重复做`n`次。

例如：

```python
"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
```

编写两个方法：

```python
def encrypt(text, n)
def decrypt(encrypted_text, n)
```

对于这两个方法：

如果输入字符串是`None`或者空字符串则直接返回它的值。

如果`n<=0`则直接返回输入的字符串。

:::

我的解法：

```python
def decrypt_once(encrypted_text):
    list_of_encrypted_text = list(encrypted_text)
    left_half = encrypted_text[:len(encrypted_text)//2]
    right_half = encrypted_text[len(encrypted_text)//2:]
    list_of_zip = list(zip(right_half, left_half))
    for i in range(len(list_of_zip)):
        list_of_zip[i] = "".join(list_of_zip[i])
    decrypt_text = "".join(list_of_zip)
    if len(right_half) > len(left_half):
        decrypt_text += encrypted_text[-1]
    return decrypt_text
    
def decrypt(encrypted_text, n):
    if encrypted_text == None or encrypted_text == '' or n <= 0:
        return encrypted_text
    for i in range(n):
        encrypted_text = decrypt_once(encrypted_text)
    return encrypted_text

def encrypt_once(text):
    encrypted_text = ''
    list_of_text = list(text)
    for i in range(1, len(text)//2+1):
        encrypted_text += list_of_text.pop(i)
    encrypted_text += "".join(list_of_text)
    return encrypted_text

def encrypt(text, n):
    if text == None or text == '' or n <= 0:
        return text
    for i in range(n):
        text = encrypt_once(text)
    return text
```

## 乌龟赛跑(Tortoise racing)

::: tip 问题描述

名为`A`和`B`的两只乌龟必须进行一场赛跑。`A`以**每小时720英尺**的平均速度开始。年轻的`B`知道她跑的比`A`快，并且还没有吃完她的白菜。当她开始时，她看到`A`已经**领先70英尺**，但是`B`的速度是**每小时850英尺**。`B`需要多久才能追上`A`？

通俗的讲：给定两个速度`v1`(`A`的速度，整数，大于零)和`v2`(`B`的速度，整数，大于零)和领先值`g`(整数，大于零)，多久`B`能追上`A`？

结果是一个由小时、分钟、秒组成的所需时间数组`[hour, min, sec](向下舍入到最接近的秒)`或者是某些语言的字符串。

如果`v1>=v2`那么对于`C++`、`C`、`Go`、`Nim`分别返回`nil`、`nothing`、`null`、`None`，对于`Kotlin`返回`[]`或`-1 -1 -1`。

示例：

(结果的形式取决于所用的语言)

```
race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
```

:::

我的解法：

```python
def race(v1, v2, g):
    if v1 >= v2:
    	return None
    s = g/(v2-v1)*3600
    hour = int(s//3600)
    s = s-hour*3600
    min = int(s//60)
    sec = int(s-min*60)
    return [hour, min, sec]
```

## 找众数(Find the majority)

::: tip 题目描述

目标：

给定一个元素列表`[a1, a2, ... , an]`，每一个元素都是一个字符串，编写一个函数`majority`，返回列表中出现次数最多的元素的值。

如果没有赢家，函数应该基于语言返回`None`、`NULL`、`nil`等。

示例：

`majority(["A", "B", "A"])`返回`"A"`，`majority(["A", "B", "B", "A"])`返回`None`。

:::

我的解法：

```python
def majority(arr):
  if arr == []:
      return None
  set_of_arr = set(arr)
  d = dict()
  maxes = []
  for item in set_of_arr:
      d[arr.count(item)] = item
      maxes.append(arr.count(item))
  if maxes.count(max(maxes)) > 1:
      return None
  return d[max(maxes)]
```

## i的幂(Power of i)

::: tip 题目描述

`i`是虚数单位，它由`i²= -1`定义，因此它是`x²+ 1 = 0`的解。

你的任务：

就是写一个函数`pofi`，它以一个字符串（答案可能包含`i`）的形式返回给定的非负整数的最简单形式的幂。

即：给定一个非负整数`n`，返回`i^n`。`i`是虚数单位。

:::

我的解法：

```python
def pofi(n):
    result = ['1', 'i', '-1', '-i']
    return result[n%4]
```

简化一下：

```python
def pofi(n):
    return ['1', 'i', '-1', '-i'][n%4]
```

## 数组的最小和(Minimize Sum Of Array (Array Series #1))

::: tip 题目描述

任务：

给定一个整数数组，求出从每个两个整数乘积求和得到的最小和。

注意：

- 数组只包含正数
- 数组元素个数一定为偶数

输入输出示例：

```
1- minSum({5,4,2,3}) ==> return (22)
```

解释：

对两个整数乘积求和得到的最小和：`5 * 2 + 3 * 4 = 22`

```
2- minSum({12,6,10,26,3,24}) ==> return (342)
```

解释：

将两个整数的积相加得到的最小和：`26 * 3 + 24 * 6 + 12 * 10 = 342`

```
3- minSum({9,2,8,7,5,4,0,6}) ==> return (74)
```

解释：

对两个整数乘积求和得到的最小和：`9 * 0 + 8 * 2 + 7 * 4 + 6 * 5 = 74`

```python
minSum({5,4,2,3}) // return 22 
"""
Explanation :: 
5*2 +3*4 = 22
"""

minSum({12,6,10,26,3,24}) // return 342
"""
Explanation ::
26*3 + 24*6 + 12*10 = 342
"""

minSum({9,2,8,7,5,4,0,6}) // return 74
"""
Explanation ::
9*0 + 8*2 +7*4 +6*5 = 74
"""
```

:::

我的解法：

```python
def min_sum(arr):
    arr.sort()
    sum = 0
    for i in range(len(arr)//2):
        sum += (arr[i] * arr[-(i+1)])
    return sum
```

简化一下：

```python
def min_sum(arr):
    arr.sort()
    return sum([arr[i] * arr[-i-1] for i in range(len(arr)//2)])
```

## X和O(Exes and Ohs)

::: tip 题目描述

检查一下字符串中是否有相同数量的`x`s和`o`，忽略大小写。该方法必须返回一个布尔值。字符串可以包含任何字符。

示例：

```
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
```

:::

我的解法：

```python
def xo(s):
    return s.lower().count('x') == s.lower().count('o')
```

## 等值线(Isograms)

::: tip 题目描述

等值线是一个没有重复字母，连续或不连续的字/词。实现一个函数，该函数确定仅包含字母的字符串是否是一个等值线。假设空字符串是一个等值线。忽略大小写。

示例：

```
is_isogram("Dermatoglyphics" ) == true
is_isogram("aba" ) == false
is_isogram("moOse" ) == false # -- ignore letter case
```

:::

我的解法：

```python
def is_isogram(string):
    if string == '':
        return True
    return len(string) == len(set(string.lower()))
```

## 喃喃(Mumbling)

::: tip 题目描述

这一次没有故事，没有理论。下面的例子向你展示了如何编写一个函数`accum`。

示例：

```
accum("abcd")    # "A-Bb-Ccc-Dddd"
accum("RqaEzty") # "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt")    # "C-Ww-Aaa-Tttt"
```

:::

我的解法：

```python
def accum(s):
    list_of_s = list(s)
    for i in range(len(s)):
        list_of_s[i] = (list_of_s[i]*(i+1)).title()
    return '-'.join(list_of_s)
```

## 正数的和(Sum of positive)

::: tip 题目描述

你得到一组数字，返回所有正数的总和。

示例：

```
[1,-4,7,12] => 1 + 7 + 12 = 20
```

:::

我的解法：

```python
def is_positive(n):
    return n > 0

def positive_sum(arr):
    arr = filter(is_positive, arr)
    if len(arr) == 0:
        return 0
    return sum(arr)
```

## 二合一(Two to One)

::: tip 题目描述

取两个字符串`s1`和`s2`，仅包含来自`a`到`z`的字母。返回一个新的排好序的，尽可能长的，包含不同的字母的字符串。

- 每个字符仅取一次——无论来自`s2`还是`s2`，示例：

```
a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
```

:::

我的解法：

```python
def longest(s1, s2):
    s = list(set(s1 + s2))
    s.sort()  # 返回值是None，不是list
    return ''.join(s)
```

简化版：

```python
def longest(s1, s2):
    return ''.join(sorted(set(s1 + s2)))  # sorted返回的是一个按升序排列的list
```

## 排序的？是？否？如何排序的？(Sorted? yes? no? how?)

::: tip 题目描述

完成接受整数数组的方法，并返回以下内容之一：

- `"yes, ascending"` - 如果数组中的数字按升序排序
- `"yes, descending"` - 如果数组中的数字按降序排序
- `"no"` - 其他情况

你可以假设这个数组总是合法的，并且总会有一个正确的答案。

:::

我的解法：

```python
def is_sorted_and_how(arr):
    if arr == sorted(arr):
        return 'yes, ascending'
    elif arr == sorted(arr, reverse=True):
        return 'yes, descending'
    return 'no'
```

## 所有3或5的倍数之和(Sum of all the multiples of 3 or 5)

::: tip 题目描述

你的任务是写一个函数`findSum `。

上至并包含`n`，这个函数将会返回所有3或5的倍数的和。

示例：

`findSum(5)` should return 8 (3 + 5) 

`findSum(10)` should return 33 (3 + 5 + 6 + 9 + 10) 

:::

我的解法：

```python
def is_multiples_of_3_or_5(x):
    return x % 3 == 0 or x % 5 == 0

def find(n):
    return sum(filter(is_multiples_of_3_or_5, range(1, n + 1)))
```

## 损坏的序列(Broken sequence)

::: tip 题目描述

您会收到一些以空格分隔的由随机元素组成的字符串。检查元素是否是从1开始的递增整数序列的一部分，增量为1（例如1，2，3，4）。

返回：

- `0`：如果元素可以形成这样的序列，并且没有数字缺失（“未被破坏”），例如`“1 2 4 3”`。
- `1`：如果输入中有任何非数字元素（“无效”），例如`“1 2 a”`。
- `n`：如果元素是这种序列的一部分，但是有些数字缺失，并且`n`是最小的（“损坏了”），例如`“1 2 4”`或`“1 5”`。

示例：

```
"1 2 3 4"  ==>  返回 0, 因为序列完整

"1 2 4 3"  ==>  返回 0, 因为序列完整 (顺序无所谓)

"2 1 3 a"  ==>  返回 1, 因为包含一个非数字字符

"1 3 2 5"  ==>  返回 4, 因为4是序列所缺失的

"1 5"      ==>  返回 2, 因为序列缺少的是 2, 3, 4 而且 2 是其中最小的
```

:::

<details>

<summary>我的解法(点击展开)</summary>

```python
def find_missing_number(sequence):
    if sequence == '':
        return 0
    elif not sequence.replace(' ', '').isdigit() or 1 not in list(map(int, sequence.split(' '))):
        return 1
    else:
        set_of_sequence = set(map(int, sequence.split(' ')))
        set_range = set(range(1, len(set_of_sequence)+1))
        sub_set = set_range - set_of_sequence
        if len(sub_set) == 0:
            return 0
        else:
            return min(sub_set)
```

</details>
