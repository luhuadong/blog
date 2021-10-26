---
title: 【教孩子学编程】第5天 你的第一个 Python 程序
date: 2019-02-07 10:53:27
description: 【教孩子学 Python 编程】系列 Day5：编写 Hello World 程序
tags:
  - Python
  - 教孩子学编程
categories: coding
---


![](/images/coding/coding.png)



今天终于开始写程序啦！在开始之前，我们先思考一下：程序是什么？程序能做什么？



## 编程是干什么的

编程是编写程序的中文简称，就是让计算机为解决某个问题而使用某种程序设计语言（比如我们使用的 Python）编写程序代码，并最终得到相应结果的过程。

为了使计算机能够理解人的意图，人类就必须要将需解决的问题的思路、方法、和手段通过计算机能够理解的形式告诉计算机，使得计算机能够根据人的指令一步一步去工作，完成某种特定的任务。这种人和计算机之间交流的过程就是编程。

![](/images/coding/修电脑.jpeg)



## Python 交互式环境

如何启动 Python 的交互式环境

- 如果是 Linux 系统，按 “Ctrl + Alt + T” 打开一个终端窗口，输入 `python3` 并按回车键；
- 如果是 macOS 系统，在 Dock 中找到 Terminal 终端，启动终端并输入 `python3` 并按回车键；
- 如果是 Windows 系统，在 “开始” 菜单中找到 Python IDLE，点击启动。

启动交互式环境之后，屏幕上会显示一些版本信息，我们可以在提示符 `>>>` 后直接输入代码，按回车就可以得到代码的执行结果。

我们可以把它当成计算器使用，尝试输入并执行 `12 + 13`，看看计算结果是否正确。

![](/images/coding/第一个Python程序.jpeg)

很简单吧，任何有效的数学计算都可以在这里算出来呢！

除了算数，我们也可以让 Python 在屏幕上打印出指定的文字，尝试输入并执行如下代码，看看会发生什么。

```python
print("Hello World")
```

这里的 `print` 是一个函数，括号中包含希望打印的文字，需要用单引号或者双引号括起来，但不能混用单引号和双引号。

这种用单引号或者双引号括起来的文本在程序中叫 “字符串”，在后面的学习中，我们还会经常使用到！

![](/images/coding/第一个Python程序.png)

当代码执行完毕需要退出时，在 `>>>` 提示符后输入 `quit()` 或者 `exit()` 即可。



## 用 Python 打个招呼

前面我们在交互式环境中执行了一些 Python 代码，更多的时候，我们会把 Python 代码先写到文件中，然后再执行。

![](/images/coding/醒醒-敲代码了.jpg)

打开一个编辑器，输入如下代码，并保存为 greet.py 文件。

```python
name = input("你好，请问你叫什么名字？")
print("很高兴认识你，", name)
```

回到终端，输入 `python3 greet.py` ，按回车，即可执行这些 Python 代码。（注意：终端的当前工作目录路径要与文件保存的路径一致）

这里的 `input` 是一个函数，程序执行时会先打印提示信息 “你好，请问你叫什么名字？”，并等待你的输入，当你输入名字并按回车后，你的名字会保存在 `name` 中，然后 `print` 函数会打印一段字符串和你打招呼。

如果嫌电脑不够热情，我们可以让他多喊几次你的名字，将程序修改成这样：

```python
name = input("你好，请问你叫什么名字？")
print("很高兴认识你，", name, name, name)
```

保存文件，回到终端输入 `python3 greet.py` 按回车执行程序！

![](/images/coding/Python打招呼.png)

好啦，不知不觉，你的第一个 Python 程序以及完成啦~

![](/images/coding/回来把代码写完.jpg)



## 代码说明

- 我们在编辑器中输入代码，发现代码会呈现不同的颜色，这种效果称为**代码高亮**，目的让我们看得舒服点。代码高亮是编程的色彩辅助体系，不是语法要求，因此在不同的编辑器中，代码高亮的表现形式各有不同。
- 第一行代码中的 name 被称为变量，变量在程序中用于保存数据，可以是字符串、数字等内容。
- input 函数会先打印提示信息，再等待键盘输入，按回车键表示输入结束，刚刚输入的内容就会存放到 name 变量中。
- print 函数可以带一个或多个参数，也就是括号中的字符串和变量 name，程序执行时将依次打印出来。



## 作业

（1）独立完成本节课的操作，你需要一个字母一个字母地把代码自己敲进去，不能使用 “复制-粘贴”。

（2）把操作过程中出现的错误和疑问记录下来。