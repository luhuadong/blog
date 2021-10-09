---
title: 【教孩子学编程】第6天 电脑也会九九乘法口诀
date: 2019-02-08 10:53:27
description: 【教孩子学 Python 编程】系列 Day6：编写九九乘法程序
tags:
  - Python
  - 教孩子学编程
categories: coding
---


![](/images/coding/校园课堂.jpg)



上一节课我们写了第一个 Python 程序，并使用了输入和输出函数 —— input 和 print。今天我们将进一步学习输出函数 print 的用法，还会学习程序的控制流程，并在此基础上让电脑为我们打印出《九九乘法表》。



## print 输出格式

print 默认输出是换行的，如果不想换行，需要加上 end 参数来指定结束符，就像这样：

```python
print("Hello World", end="")
```

前面我们通过这种方式打印一句话和你的名字：

```python
name = input("你好，请问你叫什么名字？")
print("很高兴认识你，", name)
```

今天我们会学习一种新的表达方式，我们暂时称呼它为 “字符串格式化输出”，上面这行代码就可以改写为：

```python
name = input("你好，请问你叫什么名字？")
print("很高兴认识你，{}".format(name))
```

字符串 `"很高兴认识你，{}"` 中的花括号是占位符，意思是等一下这里要打印其他内容，先占个位。至于填充什么内容，就由字符串后的 `.format()` 中的内容决定。

如果还想让它喊你的名字三遍，就可以预留三个坑，然后在 `format` 中填充。

```python
name = input("你好，请问你叫什么名字？")
print("很高兴认识你，{}, {}, {}".format(name, name, name))
```

我们可以给占位符编个号，表示这个坑使用 `format` 函数中的第几个参数。下面代码的执行效果与上面是一样的。

```python
name = input("你好，请问你叫什么名字？")
print("很高兴认识你，{0}, {1}, {2}".format(name, name, name))
```

也许你已经想到了，`name` 变量其实不需要写三遍，这样就行了！

```python
name = input("你好，请问你叫什么名字？")
print("很高兴认识你，{0}, {0}, {0}".format(name))
```

除此之外，我们还可以为不同的坑指定不同的效果，比如左对齐、右对齐、居中。

```python
name = input("你好，请问你叫什么名字？")
print("很高兴认识你，{0:<8}, {0:^8}, {0:>8}".format(name))
```

执行效果如下：

![](/images/coding/print占位符操作.png)

占位符的序号和其需要的效果操作之间用冒号 `:` 隔开。`<` 表示左对齐（默认），`>` 表示右对齐，`^` 表示中间对齐。后面的数字8表示这里占了八个字符长度，你也可以改成你需要的长度。



关于 print 的格式化输出，我们先了解到这里就可以了！



![](/images/coding/小可爱一起跳舞.gif)



## 循环语句

前面的代码都是顺序执行的，也就是执行完第一行，再执行第二行，直到最后一行结束。在程序中，我们还经常使用循环来让代码重复执行，先把下面的代码执行一遍看看。

```python
for x in range(10):
    print(x)
```

没错，你会看到屏幕上打印出0~9，一共十行数字。

函数 `range(10)` 帮我们创建了0~9这十个数字，我们通过 `for ... in ...` 语句将这十个数字依次取出来，放在变量 x 中，然后再使用 `print` 函数把它们打印出来。

需要注意的是，第二行代码有一些空白位置，这是因为按了 Tab 键。在你输入代码的时候，你使用的编辑器可能也已经帮你添加上了。这个空白叫做**代码缩进**，表示代码之间的从属关系，在这里就表示 `print(x)` 这行代码是在 for 循环中被执行的。

range 函数默认从0开始，如果想从1开始，则可以使用两个参数，分别表示开始和结束。

```python
for x in range(1, 10):
    print(x)
```



循环是可以嵌套的，也就是说，一层循环中可以包括另一层循环，下一层循环中由可以包含下一层循环，但建议不要嵌套太多层，不然会晕的。。。

![](/images/coding/循环.gif)

下面的代码中有两层循环，第一层循环5次，第二层循环10次。第3行的 print 语句属于第二层循环，第4行的 print 则属于第一层，可以看到代码缩进其实是在表达这种层次关系。

```python
for x in range(5):
    for y in range(10):
        print("*", end=" ")
    print("")
```

执行代码，看看是不是打印出了5行10列的小星星。

```
* * * * * * * * * * 
* * * * * * * * * * 
* * * * * * * * * * 
* * * * * * * * * * 
* * * * * * * * * * 
```



除了 for in 循环语句，在 Python 中我们还可以使用 while 循环语句。同样是打印0~9十个数字，使用 while 循环可以这样来写：

```python
x = 0
while x<10:
    print(x)
    x = x + 1
```

这里我们借助了 x 变量来记录当前的数字，紧跟 while 后面的是判断条件，比如这里的 `x<10` 表示当 x 小于 10 的时候，执行循环中的代码。换句话说，就是当 x 大于等于 10，就跳出 while 循环，此时程序就结束了。

同样，while 循环也可以嵌套，for in 循环和 while 循环之间也可以相互嵌套。



## 九九乘法表

![](/images/coding/九九乘法表1.jpeg)

学习完前面的内容，我们已经完全有能力使用 Python 来打印一张**九九乘法表**啦！紧不紧张，兴不兴奋？

你先想十分钟，想不出来再看看我下面给的代码。

![](/images/coding/就是这么任性.gif)



这里使用 for in 循环来实现，打开编辑器输入如下代码，并保存为 99Table.py 文件。

```python
for i in range(1, 10):
    for j in range(1, i+1):
        print("{}*{}={:<3}".format(j,i,i*j), end=" ")
    print("")
```

在终端执行 `python3 99Table.py `，看看小九九有没有打印出来。

```
1*1=1   
1*2=2   2*2=4   
1*3=3   2*3=6   3*3=9   
1*4=4   2*4=8   3*4=12  4*4=16  
1*5=5   2*5=10  3*5=15  4*5=20  5*5=25  
1*6=6   2*6=12  3*6=18  4*6=24  5*6=30  6*6=36  
1*7=7   2*7=14  3*7=21  4*7=28  5*7=35  6*7=42  7*7=49  
1*8=8   2*8=16  3*8=24  4*8=32  5*8=40  6*8=48  7*8=56  8*8=64  
1*9=9   2*9=18  3*9=27  4*9=36  5*9=45  6*9=54  7*9=63  8*9=72  9*9=81
```



![](/images/coding/输出九九乘法表.png)





## 代码说明

- **代码缩进**是指一行代码开始前的空白区域，表达程序的格式框架，一个程序中可能会存在单行缩进或多行缩进。缩进是程序语法的一部分，需要严格明确；缩进表明了代码间的层次关系，缩进不正确会导致程序运行错误；通常使用1个Tab来缩进。
- 九九乘法表可以看做一个九行九列的表格，因此使用两层循环可以很方便地实现。第一行代码表示变量`i`的值从1到9循环执行。
- 因为九九乘法表的形状是三角形，也就是说内容是逐行增加的，所以第二行的循环范围从1开始，到 i+1 结束，随着第一层循环中 i 的变化，第二层循环中的长度也会发生变化。
- Python 中可以直接做数值运算，所以第三行代码使用 `i*j` 来得出乘法表中的各项结果，需要注意的是可能是输出的格式。
- 第四行代码属于第一层循环，它的作用是每打印完一行就换一个新行。



## 作业

（1）自己动手练习一遍，看看能否输出九九乘法表。

（2）调整九九乘法表的显示，让它看起来像这样：

```
1*9=9   2*9=18  3*9=27  4*9=36  5*9=45  6*9=54  7*9=63  8*9=72  9*9=81  
1*8=8   2*8=16  3*8=24  4*8=32  5*8=40  6*8=48  7*8=56  8*8=64  
1*7=7   2*7=14  3*7=21  4*7=28  5*7=35  6*7=42  7*7=49  
1*6=6   2*6=12  3*6=18  4*6=24  5*6=30  6*6=36  
1*5=5   2*5=10  3*5=15  4*5=20  5*5=25  
1*4=4   2*4=8   3*4=12  4*4=16  
1*3=3   2*3=6   3*3=9   
1*2=2   2*2=4   
1*1=1   
```

（3）尝试使用 while 循环语句来输出九九乘法表。



![](/images/coding/九九乘法表2.jpeg)



while 版本

```python
i=1
while i<10:
    j=1
    while j<i+1:
        print("{}*{}={:<3}".format(j,i,i*j), end=" ")
        j=j+1
    i=i+1
    print("")
```