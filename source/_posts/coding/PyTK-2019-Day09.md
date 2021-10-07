---
title: 【教孩子学编程】第9天 老师的点名神器
date: 2019-02-11 10:53:27
description: 【教孩子学 Python 编程】系列 Day9：编写随机数生成程序，了解图形界面概念
tags:
  - Python
  - 教孩子学编程
categories: coding
---


![](/images/coding/教室1997.jpg)



小时候上学点名，大学上课点名，出来社会上班还是要点名。小卢老师也是烦透了，好想逃......

![](/images/coding/百度一下不就知道了吗.jpg)

心里默念别叫我！别叫我！千万别叫我！越是这样，偏偏就被点到，真是醉了！

![](/images/coding/别叫我.jpg)



![](/images/coding/被点名时的表情.jpg)



所以本着公平公正的原则，让大家都有机会被点名，今天我们就用 Python 来写一个帮老师点名的程序吧～



## 图形界面

前面的编程我们一直都在终端控制台中操作，总觉得不够过瘾，本节课程将介绍如何编写带有可视窗口的程序，也就是 GUI 图形用户界面编程。

![](/images/coding/龟GUI.png)

我们会使用一个叫 wxPython 的库，如果你的编程环境中还没有，可以打开终端执行如下命令安装：

```shell
sudo pip3 install -U wxpython
```

安装好之后，我们先来画个框。

```python
import wx
app = wx.App()
win = wx.Frame(None)
win.Show()
app.MainLoop()
```

代码说明：

- 第一行代码导入 wx 模块，导入之后才能使用 wxPython 相关的图形界面组件。
- 第二行代码创建应用程序对象，有了这个对象就说明你有了一个应用程序。
- 第三行代码创建一个单独的窗口，也就是待会我们能够看到的一个图形窗口，`wx.Frame` 函数传入一个参数 None，表示这个窗口没有父窗口，而是一个独立的窗口。
- 第四行代码设置窗口可见，否则我们啥都看不见。
- 第五行代码是让应用程序进入事件循环，这样应用程序就会等待我们操作，比如点击关闭按钮。

![](/images/coding/一只大象.jpeg)

保存为 lottery.py 文件，然后在终端执行 `python3 lottery.py`。如无意外，你应该可以看到一个空白窗口（在不同系统看到的窗口会有点不同）。其中最上方的一栏称为标题栏，通常包含最小化、最大化和关闭按钮。

![](/images/coding/wxPython-空白窗口.png)

## 几个概念

在编写GUI图形界面程序之前，我们先来了解几个概念：

### 像素

像素的英文名称是 Pixel，表示一个像素通常被视为图像的最小的完整采样。像素是一个相对长度单位，也就是说没有人规定一个像素一定要多长多宽。

我们在计算机上看到的图片有位图和矢量图两种，像素就是构成位图的基本单位，我们手机拍摄的照片也是位图，文件后缀通常是 jpg。

![](/images/coding/像素蜘蛛侠.jpeg)

当你把一张照片放大时，你会发现在色彩交界处有明显的锯齿感，每一个小方点实际上就是像素。一张色彩绚丽的数码相片就是由许许多多这样的小方点组成，所以像素越高，画面越清晰，越能表达颜色的真实感，但随之而来的是存储空间的增加。



### 分辨率

分辨率的英文名称是 Resolution，通常用于描述显示设备能显示多少像素。比如我们听到的 2K、4K 电视，指的就是电视机液晶屏所支持的最高分辨率。

![](/images/coding/2k-4k.jpeg)

2K 对应的分辨率是 2048×1080，意思是整个屏幕中有 2048×1080 ≈ 2×10^6^ 个像素点。可以把整个屏幕想象成一个大型棋盘，其中横向2048个点，纵向1080个点。



### 尺寸

这里的尺寸指的是屏幕真实的物理尺寸，通常使用英寸（inch）为计量单位，1英寸=2.54厘米。需要注意的是，屏幕尺寸的是以屏幕对角线的长度来计算的，我们平时听到的手机大小是4.7寸、5.5寸指的就是手机屏幕对角线的尺寸。

![](/images/coding/移动设备屏幕尺寸.jpeg)

前面我们说了，像素是一个相对长度单位，实际上说的是像素大小和屏幕尺寸没有关系。一个小小的手机屏幕分辨率往往比一台商场广告机的分辨率还高，所以我们在手机上看到画面会更加细腻。衡量这个指标的参数是 PPI（Pixels Per Inch），即每英寸所拥有的像素数目，显然手机的 PPI 值远高于广告机的 PPI 值。



## 拼装组件

了解了像素、分辨率、屏幕尺寸等概念，我们就可以开始设计第一个 GUI 应用程序啦！接下来要完成的应用程序效果图如下所示，我已经把元素的位置信息标注出来了。

![](/images/coding/第一个GUI应用程序-标注.png)

这个应用程序很简单，只包含两个可视化元素，一个是“数字”标签，另一个是按钮。外围的窗口框是操作系统提供的，不同系统的显示风格略有不同，最上面的那栏被称为标题栏，通常包含一些控制按钮，比如最小化、最大化、关闭等等，这里还写上了“你的第一个GUI应用程序”的标题，这样可以与其他应用程序区分开来。

需要注意的是，窗口的像素原点位于左上角（不包含窗口框），这个窗口的宽度是 400px，高度是 300px（px 是像素单位）。

在前面的代码基础上增加一些代码：

```python
import wx
app = wx.App()
win = wx.Frame(None, title="翻牌子", size=(400, 300))
numText = wx.StaticText(win, label="Who?")
startBtn = wx.Button(win, label="点名")
win.Show()
app.MainLoop()
```

代码说明：

- 第三行代码为 `wx.Frame` 函数增加两个参数，其中 title 是该窗口的标题，size 是窗口大小。
- 第四行代码创建一个静态文本，第一个参数表示这个文本属于 win 对象，第二个参数表示显示的内容是 “Who?”。
- 第五行代码创建一个按钮，第一个参数表示这个按钮属于 win 对象，第二个参数表示按钮上的文字是 “点名”。
- 其他代码跟之前的一样。

执行 `python3 lottery.py` 可以看到如下窗口，可是，“Who?” 去哪里啦？

![](/images/coding/翻牌子-创建元素.png)

静态文本 “Who?” 其实是被按钮遮盖了，因为我们没有指定它们的位置，默认都放在左上角的原点上。所以我们要按照前面的尺寸标注设置它们的大小和位置，修改第四、第五行代码：

```python
numText = wx.StaticText(win, label="Who?", size=(400, 150), pos=(0, 50), style=wx.ALIGN_CENTER)
startBtn = wx.Button(win, label="点名", size=(100, 50), pos=(150, 200))
```

代码说明：

- 参数 size 设置元素的大小，pos 设置元素的位置。
- `style=wx.ALIGN_CENTER` 用于使静态文本居中。

![](/images/coding/翻牌子-调整位置.png)

唔～ 怎么那么小

![](/images/coding/看我的小眼神行事.jpeg)

加点代码吧，在 `numText = wx.StaticText...` 那行后面加入如下几行代码，用于调整字体大小和粗细。

```python
font = numText.GetFont()
font.PointSize += 60
font = font.Bold()
numText.SetFont(font)
```

再次运行，完美！

![](/images/coding/翻牌子-大字体.png)



## 事件处理

但是现在你使劲点击按钮也是没有用的，因为我们还没有绑定事件。

还记得这句代码吗？

```python
app.MainLoop()
```

它会让程序进入事件循环，等待事件触发，比如我们单击按钮、双击按钮、触碰按钮等等都是事件。图形界面程序和我们前面写的程序不太一样，因为图形界面通常都在等用户触发事件来决定接下来要做什么。

下面我们来为 “点名” 按钮绑定事件，并定义触发事件后该做的事情。

在 `startBtn = wx.Button...` 后面加入这行代码：

```python
startBtn.Bind(wx.EVT_BUTTON, lottery)
```

用于绑定按钮点击事件，触发后执行 lottery 函数。因此我们还要在前面定义 lottery 函数：

```python
def lottery(event):
	who = random.randint(1, 50)
	numText.SetLabel(str(who)) 
```

这个函数的作用是假设你们班上有50位同学，编号从1~50，然后从这里面随机抽一个数字，再将这个数字显示到静态文本的位置。

因为使用了随机数函数，所以别忘导入 random 模块，完整的代码如下：

```python
# 导入模块
import wx
import random

# 事件处理函数
def lottery(event):
	who = random.randint(1, 50)
	numText.SetLabel(str(who)) 

# 创建应用程序对象
app = wx.App()

# 创建一个窗口
win = wx.Frame(None, title="翻牌子", size=(400, 300))

# 待会显示数字的文本
numText = wx.StaticText(win, label="Who?", size=(400, 150), pos=(0, 50), style=wx.ALIGN_CENTER)
font = numText.GetFont()
font.PointSize += 60
font = font.Bold()
numText.SetFont(font)

# “点名”按钮
startBtn = wx.Button(win, label="点名", size=(100, 50), pos=(150, 200))

# 绑定按钮点击事件
startBtn.Bind(wx.EVT_BUTTON, lottery)

# 设置窗口可见
win.Show()

# 进入应用程序事件主循环
app.MainLoop()
```

今天的代码比较长，为了方便阅读，我加上了一些注释，也就是以 `#` 号开始的行。注释是给我们人类看的，程序执行的时候会忽略掉。



## 开始点名

好啦，一切就绪。执行 `python3 lottery.py` 看看翻到谁的牌子吧～

![](/images/coding/翻牌子-who.png)

点名

![](/images/coding/翻牌子-34.png)

再点

![](/images/coding/翻牌子-1.png)

下一个

![](/images/coding/翻牌子-26.png)

再下一个

![](/images/coding/翻牌子-49.png)

额... 总是被动也不行，遇到合适的还是主动举手吧！

![](/images/coding/这题我会.jpg)



## 飞机大战

最后，我们还一起看了 “飞机大战” 的 Demo 代码，源代码放在 [这里](https://gitee.com/luhuadong/Python_Learning/tree/master/2nd_week/homework/aircraft_war)。

运行效果如下：

![](/images/coding/飞机大战.png)

我们还看了怎么更换飞机的图片、怎么增加背景音乐、怎么修改子弹速度...... 通过这次体验，你应该了解了游戏的本质 —— 就是按游戏规则堆叠图片和切换画面。

游戏也好，小说也罢，我们可以玩可以看，但不要过度，不要沉迷于虚拟世界。好好生活，现实世界比虚拟世界有趣多了！



## 作业

（1）理解像素、分辨率、屏幕尺寸等概念。

（2）用手机拍一些照片，看看能否从这些照片的像素大小计算出对应的存储大小。

（3）理解 GUI 应用程序中事件的概念。

（4）根据示例，自己动手编写并运行程序。


