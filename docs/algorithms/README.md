# 常用算法的Python实现

[[toc]]

## 快速排序

::: tip 基本思想

将一个大数组按照一个**基准数**分成左右两份，左边的部分都**不大于**基准数，右边的部分都**不小于**基准数；然后对这两份数组再分别应用快速排序，直到分解到每个数组中只剩两个排好序的数为止。

:::

快速排序是一种基于分治思想的排序算法，是一种不稳定排序。

```python
# 快速排序
def quick_sort(nums, left, right):
    # 递归结束的条件
    if left >= right:
        return nums
 
    # 选择第一个数作为基准数并记录在key中，方便最后写回
    key = nums[left]
    lft = left  
    rit = right
 
    # 遍历整个当前数组
    while left < right:
        # 从右侧开始筛选大于参考点的值，直到遇到
        while left < right and nums[right] >= key:
            right -= 1
        nums[left] = nums[right]  # 这个位置的值先挪到左边
 
        # 从左边开始查找小于参考点的值
        while left < right and nums[left] <= key:
            left += 1
        nums[right] = nums[left]  # 这个位置的值挪到右边
 
    # 写回改成的值
    nums[left] = key
 
    # 递归，并返回结果
    quick_sort(nums, low, left - 1)    # 递归左边部分
    quick_sort(nums, left + 1, high)   # 递归右边部分
    return nums

# 测试程序
nums = random.sample(range(1000000), 500000)  # 生成50万个100万范围内的无重复的随机数
print(nums)
sorted_nums = quick_sort(nums, 0, len(nums)-1)
print(sorted_nums)
```

[参考文章](http://yshblog.com/blog/170)
