---
title: 【教孩子学编程】第7天 和电脑玩猜数字游戏
date: 2019-02-09 10:53:27
description: 【教孩子学 Python 编程】系列 Day7：编写猜数字程序
tags:
  - Python
  - 教孩子学编程
categories: coding
---

![](/images/coding/咕噜.png)

猜数字（又称 Bulls and Cows ）是一种古老的的密码破译类益智类小游戏，起源于20世纪中期，一般由两个人或多人玩，也可以由一个人和电脑玩。今天我们就来用 Python 写一个猜数字游戏！



## 游戏规则



- 一个玩家从1\~10（或者1\~100）之间选取一个随机数；
- 另一个玩家尝试猜这个数字，如果猜的数太大则提示 “小了”，如果猜的数太小则提示 “大了”，直到猜对为止；
- 谁猜的次数最少，谁就获胜。



![](/images/coding/Bulls_and_Cows.jpg)



为了实现这个游戏，我们需要解决两个问题：

1. 如何生成一个随机数？
2. 如何实现分支结构的控制流程？



## 生成随机数

Python 已经为我们准备好了 random 模块，使用它可以很方便地生成随机数。暂时先不用管模块是什么，我们先把它用起来！

在 Python 交互式环境中逐行输入以下代码：

```python
import random
random.randint(1, 10)
```

第一行代码使用 import 命令导入 random 模块；第二行代码使用 random 模块中的 `randint()` 函数（它是 random integer 的缩写，表示随机的整数），生成一个 1~10 之间的随机数。



![](/images/coding/摇骰子.gif)

重复运行多次 `random.randint(1, 10)` 看看是否出现不同的随机数。（`import random` 在程序中只需要执行一次即可）

![](/images/coding/生成随机数.png)



## 分支结构

现实生活有很多 “分支” 情况，比如家里的水管分支。

![](/images/coding/水管分支.jpg)

物种进化的分支结构促进了生物多样性。

![](/images/coding/生物进化谱系图.jpeg)

同样，在程序的世界里，分支结构也无处不在，通过分支的组合，可以编写出很多有趣的程序。通常，分支结构通过条件判断来实现。

根据判断的情况，又可分为单项分支、双项分支、多项分支。三种结构的伪代码如下：

### 单项分支



```python
if 条件:
    #执行的内容...
```



### 双项分支



```python
if 条件:
    #执行的内容...
else:
    #执行的内容...
```



单项分支和双项分支就像开关一样，要么开，要么关。只不过单项分支只关心其中一种情况，双项分支两种情况都关心。

![](/images/coding/开关2.jpg)



### 多项分支



```python
if 条件:
    #执行的内容...
elif 条件:
    #执行的内容...
else:
    #执行的内容...
```

多项分支中可以有很多个 `elif` 分支。就像风扇开关那样，有不同的档位，每个档位都有不同的处理方式。



![](/images/coding/风扇开关.jpg)



说明：

- 分支结构的条件判断顺序是自上而下逐个分支进行判断的；
- 在分支结构中，无论如何只会执行一个分支；
- 当执行完一个分之后，分支结构就会结束，后面的分支是不会执行的。



## 猜数字游戏

有了前面的知识背景，我们就可以撸起袖子写代码了。



![](/images/coding/保佑代码没有bug.png)



打开编辑器，输入下面代码，并保存为 guess.py 文件。

```python
import random

target = random.randint(1, 10)
guess = int(input("1~10之间猜一个数字："))

while guess != target:
    if guess > target:
        print(guess, "太大了")
    elif guess < target:
        print(guess, "太小了")

    guess = int(input("再猜一遍："))

print("猜对了！{} 是正确的数字".format(guess))
```

执行 `python3 guess.py ` 看看运行效果吧~

![](/images/coding/猜数字游戏结果.png)



## 代码说明

- 第一行代码导入 random 模块，以便于待会可以使用 randint 函数生成一个随机整数。
- 生成的随机整数存放在变量 target 中。
- 玩家输入的数字存放在变量 guess 中。
- 接下来，判断 guess 和 target 的大小。



## 作业

（1）自己动手写一遍猜数字游戏的代码。

（2）运行猜数字游戏，想一想用什么策略可以猜得更快。

