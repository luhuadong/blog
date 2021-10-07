---
title: 【教孩子学编程】第10天 世界那么大，我想去看看
date: 2019-02-12 10:53:27
description: 【教孩子学 Python 编程】系列 Day10：了解如何使用 Python 生成地图
tags:
  - Python
  - 教孩子学编程
categories: coding
---


![](/images/coding/阿姆斯特丹.jpeg)



今天已经是本期春节特训营的最后一天了，我们讲一些轻松的话题 —— 世界那么大，我们一起去看看吧。

但是在看世界之前，我们得先熟悉一下世界地图，对我们生活的世界有一个整体认识。刚好，我们可以用 Python 来绘制地图！



## 我们的地球

现在我们都知道地球是一个两极稍扁，赤道略鼓的不规则球体。确切地说，地球是个三轴椭球体，大多数时候，我们可以认为地球是一个十分接近正圆球体的星球。但是，得到这一正确认识却经历了相当漫长的过程。。。

![](/images/coding/蛤.jpg)

### 地球是圆的

据说，早在公元前500年前后，古希腊的**毕达哥拉斯**（Pythagoras，约公元前580-500年）就提出了大地是球形的观点。

古希腊哲学家亚里士多德（Aristotle，公元前384-322年）根据月食时月球上地影是一个圆，科学地论证了地球是个球体。亚里士多德真厉害，每天要花那么多时间写作，还要长时间观察月亮，夜间南北往返，出海远行。

![](/images/coding/亚里士多德.jpeg)


除了认为地球是圆的，古代的先知们还精确测出了地球圆周长！

古埃及希腊裔人**埃拉托斯特尼**（Eratosthenes，公元前276-194年），生长于古埃及托勒密王朝时期，该王朝是亚历山大大帝的部将托勒密所建的。40岁时，埃拉托斯特尼被托勒密三世任命为亚历山大图书馆的馆长。


![](/images/coding/%E4%BA%9A%E5%8E%86%E5%B1%B1%E5%A4%A7%E5%9B%BE%E4%B9%A6%E9%A6%86.jpg)


在任图书馆馆长期间，一天无意间发现了一本纸草的古文书，里面有这么一段话：

> 靠近尼罗河第一个瀑布的赛印（Syene，今埃及的亚斯文），每年6月21日中午，垂直竖立的柱子没有影子。

这一小段不起眼的叙述，引起他极大兴趣！

![](/images/coding/亚历山大城和赛印.jpg)

他做了一个实验：6月21日，在亚历山大城竖立柱子，观察会不会有影子。结果发现柱子有影子。

亚历山大城在赛印的北边，两地距离颇远，一地柱子有影子，另一地却无。他因此推测，如果地球是完全平的，不会产生这种现象，地球应该是圆的。

![](/images/coding/亚历山大城的柱子.gif)

6月21日中午，从赛印的井边往下看，可看到太阳完全映在水井底部，此时太阳是位于正上方；同时，在亚历山大城，见到的太阳则有倾斜角。

埃拉托斯特尼大胆假设地球是圆的，仅使用粗陋的测量工具，以及简单的几何学知识，推算出与实际误差很小的地球圆周长。他由柱子的影子计算出太阳的倾斜角约为7度，也就是说，亚历山大城与赛印的距离，是地球圆周的 7/360。从往来两个城市的商队得知，两地的距离约500斯塔德（stadia，希腊尺寸单位），因此推断出地球圆周长在39690～46629千米之间，与实际地球圆周40008千米非常接近。要知道，那是两千多年前啊。

![](/images/coding/推算地球圆周长.jpg)

现在我们知道，埃拉托斯特尼做实验的时间其实就是夏至。每年6月21日前后的正午，太阳会直射北回归线，而赛印就位于北回归线附近。因此夏至中午，那里垂直竖立的柱子就不会有影子。

![](/images/coding/夏至太阳直射北回归线.jpg)



### 从地心说到日心说

虽然大家同意地球是圆的，但由于人们每天看到太阳、月亮从东边升起，在西边落下。于是就认为地球是宇宙的中心，日月星辰都是围绕地球运行的天体。

![](/images/coding/地心说的宇宙构成.jpeg)

后来，罗马帝国时期的天文学家**克罗狄斯·托勒密**（Claudius Ptolemy，90-168年），进一步改进和完善了地心说，使之与天文观测符合得更好，并完成了天文学著作《至大论》，于是地心说成为了当时宇宙观的主流。

![](/images/coding/克罗狄斯-托勒密.jpeg)



到了中世纪的欧洲，托勒密的地心说被教会所利用。教会明确提出：上帝生活在原动天，是上帝的推动才使得诸天围绕地球旋转，位于宇宙中心的地球，沐浴在上帝的恩泽之中，在上帝的意志下，所有的星星都向着地球上的人类闪闪发光。

由于地心说受到教会的支持和保护，随着传教活动而传遍欧洲，人们的头脑中逐渐根深蒂固。在此后一千多年里，几乎没有人再对地心说表示怀疑。

![](/images/coding/拾穗者-动图.gif)

直到16-17世纪，才有人开始质疑。首先出场的是波兰人**哥白尼**（Copernicus，1473-1543年），他提出了日心说，认为太阳才是宇宙的中心，地球才是绕着太阳转的。由于当时教皇比较开明，哥白尼论证日心说，并未遭到教皇的反对，但却害怕受到教会的反对和压迫，以至于他的著作《天体运行论》直到1541年才发表。

![](/images/coding/哥白尼2.jpeg)

随后而来的是一代大师**伽利略**（Galileo，1564-1642年），这位老哥拿着自制的天文望远镜，朝着月球上一看，哇不得了，发现月球上全是坑。接着一发不可收拾，又观测到很多天文现象。经过严密的推算，伽利略宣告说：日心说是对的！

![](/images/coding/伽利略.jpeg)

要知道当时还处于教会的统治下，为了巩固教会的威望、统一思想，任何发表支持日心说的言论都变得很危险。晚年的伽利略为了活命，被迫写了份声明，声称自己是不承认日心说的。勇敢的科学家**布鲁诺**（Bruno，1548-1600年）因为坚持日心说，被教会活活烧死了。

![](/images/coding/布鲁诺-日心说.jpeg)



结束这一切争执的人，就是伟大的**牛顿**（1643-1727年）。一个万有引力定律就把教会的地心说给埋葬了。

![](/images/coding/牛顿.jpeg)



### 把世界连成一片

欧洲文艺复兴以来，航海家也没闲着。1492年，**哥伦布**（1451-1506年）在西班牙王室的资助下，率领船队横渡茫茫无际的大西洋，同年10月12日，哥伦布的船队抵达加勒比海上的一个小岛，从此发现了一个新世界——美洲大陆。正是哥伦布发现美洲的壮举拉开了全球化时代的序幕。

![](/images/coding/首次向克里斯托弗-哥伦布致敬.jpg)

1519-1522年，葡萄牙航海探险家**麦哲伦**（1480-1521年）率领船队横渡大西洋，进入太平洋、印度洋、好望角，最后回到欧洲，完成了环球航行。麦哲伦环球航行不仅成功开辟了新航线，还通过他的探险航行证明了地球是一个圆球。可惜在途径菲律宾群岛时，麦哲伦在与菲律宾土人冲突中被杀，无法见证伟大的时刻。

![](/images/coding/麦哲伦.jpeg)

新航路的开辟，使得从欧洲到亚洲、美洲和非洲等地的交通往来日益密切，世界开始连成一个整体。欧洲大西洋沿岸工商业经济繁荣起来，促进了资本主义的产生和发展。

![](/images/coding/麦哲伦环球航行.jpeg)



### 太空探索

随着技术的进步，人们开始进行太空探索，陆续从高空、从人造卫星、从月球的角度拍下了地球的照片。其中最著名的是下面这张 “蓝色弹珠”（英文：The Blue Marble）。

![](/images/coding/TheBlueMarble.jpg)

该照片是在1972年12月7日由阿波罗17号太空船船员所拍摄的。当时太空船正运行至距离地球45,000公里（28,000英里）之处。这张照片是迄今为止最广泛流传的照片**。它是少数能把整个地球清晰地拍下来的照片，正因拍摄当时太空船正背向太阳。**此时，对于身在太空船上的太空人来说，地球的大小就像小孩子的玩耍的弹珠一样，因而命名 “蓝色弹珠”。

是不是感觉似曾相识？没错，微信 App 启动界面上的那个地球就来自于蓝色弹珠。



## 用 Python 画地球

接下来，我们使用 Basemap 包来绘制一些地图。我这里使用 Anaconda 安装，并在 Jupyter Notebook 中运行。打开终端，进入 Anaconda 环境，执行以下命令即可安装 Basemap：

```shell
conda install basemap
```

安装好之后就可以马上画一张地图啦～

切换到工作目录，在终端执行 `jupyter notebook`，将会在浏览器中打开一个页面，点击新建 Python 3 将会打开一个新的页面，如下所示。今天的代码，我们将在这里输入并运行。

![](/images/coding/JupyterNotebook.png)

输入下面这几行代码：

```python
import matplotlib.pyplot as plt
from mpl_toolkits.basemap import Basemap

map = Basemap()
map.drawcoastlines()
plt.show()
```

见证奇迹的时候到了！按 Shift + Enter 运行，你将会看到一张世界地图：

![](/images/coding/Basemap默认世界地图.png)

代码中的前两行是导入相应的 Python 库，后三行代码绘制一张最简单的世界地图。

Basemap 默认的投影方式是 cyl（圆柱等距离投影），我们可以通过传入参数来改变投影方式，比如使用 ortho 正射投影：

```python
map = Basemap(projection='ortho', lat_0=0, lon_0=105)
map.drawcoastlines()
plt.show()
```

另外两个参数 `lat_0` 和 `lon_0` 分别表示中心点的经度和纬度，我们知道中国位于东八区，一个时区占经度15°，所以 `lon_0=105` 的目的是为了让亚洲大陆面向我们。

![](/images/coding/ortho投影-简单地图.png)

即使有新的投影，但地图看上去实在太单调了，我们用一些颜色填充海洋和陆地吧！

```python
map = Basemap(projection='ortho', lat_0=0, lon_0=105)
map.drawmapboundary(fill_color='aqua')
map.fillcontinents(color='coral', lake_color='aqua')
map.drawcoastlines()
plt.show()
```

海洋和湖泊填上海蓝色 aqua，陆地填上珊瑚色 coral：

![](/images/coding/ortho投影-添加颜色.png)

但地图仍然有点空，在 `plt.show()` 前面加上下面这行代码，在地图上描绘国界：

```python
map.drawcountries()
```

![](/images/coding/ortho投影-添加颜色和国界.png)

如果觉得这样不够真实，我们可以直接采用 NASA 的 “蓝色弹珠” 风格作为地图背景：

```python
map = Basemap(projection='ortho', lat_0=0, lon_0=105)
map.bluemarble()
plt.show()
```

![](/images/coding/ortho投影-bluemarble背景.png)

ortho 投影方式虽然看上去更真实，但不利于我们在一个平面上查看，所以我们接着使用 cyl 投影方式来展示。

```python
plt.figure(figsize=(16,8))

map = Basemap(projection='cyl')
map.drawcoastlines()
map.drawrivers()
map.bluemarble()
plt.show()
```

第一行代码的作用是设置画布大小，这样看起来舒服点～ 七大洲四大洋都一目了然啦，哈哈！

![](/images/coding/cyl投影-世界地图-bluemarble.png)

为了清晰得观察政治边界，暂时还是把 bluemarble 背景去掉吧。

```python
plt.figure(figsize=(16,8))
map = Basemap()
map.drawcoastlines()
map.drawcountries()
plt.show()
```

只留下海岸线和国界：

![](/images/coding/cyl投影-添加国界.png)

## 用 Python 画中国地图

世界太大了，一时间看不完，还是先把焦点放在我们亲爱的祖国身上吧！通过查阅资料，我们了解到中国最东端是东经135度，最西端是东经73度，最北端是北纬53度，最南端是北纬3度。

```python
plt.figure(figsize=(16,8))
map = Basemap(llcrnrlon=72, llcrnrlat=3, urcrnrlon=136, urcrnrlat=54)
map.drawcoastlines()
map.drawcountries(linewidth=1.5)

plt.show()
```

看上去有点奇怪，原因是默认的投影 cyl 是圆柱等距离投影，高纬度地区被横向拉长了。

![](/images/coding/cyl投影-中国.png)

好吧，我们换成 lcc 兰勃特投影，同时需要额外添加几个参数：

```python
plt.figure(figsize=(16,8))
m = Basemap(llcrnrlon=77, llcrnrlat=14, urcrnrlon=140, urcrnrlat=51, projection='lcc', lat_1=33, lat_2=45, lon_0=100)
m.drawcoastlines()
m.drawcountries(linewidth=1.5)

plt.show()
```

这样看上去正常一些：

![](/images/coding/lcc投影-中国.png)

我们想把中国的省份划分出来，可以导入对应的 shapefile 文件，相应的文件资源我已经上传至百度网盘：

链接: <https://pan.baidu.com/s/1RTVl45frSaOZnHzEm_2JeA> 提取码: 98ff 

下载并解压 shapefile 资源文件，注意路径哦！然后在 `plt.show()` 前面加上下面这一行代码：

```python
m.readshapefile('gadm36_CHN_shp/gadm36_CHN_1', 'states', drawbounds=True)
```

![](/images/coding/lcc投影-中国省份.png)

给我们的祖国涂上中国红，中国红对应的颜色值是 `RGB(230,0,0)`，转成十六进制就是 E60000。

```python
plt.figure(figsize=(16,8))
m = Basemap(llcrnrlon=77, llcrnrlat=14, urcrnrlon=140, urcrnrlat=51, projection='lcc', lat_1=33, lat_2=45, lon_0=100)
m.drawcoastlines()
m.drawcountries(linewidth=1.5)
m.readshapefile('gadm36_CHN_shp/gadm36_CHN_1', 'states', drawbounds=True)

from matplotlib.patches import Polygon

ax = plt.gca()
for nshape, seg in enumerate(m.states):
    poly = Polygon(seg, facecolor='#E60000')
    ax.add_patch(poly)
```



![](/images/coding/lcc投影-中国省份-中国红.png)

我们惊讶的发现，居然不包含台湾！台湾是中华人民共和国不可分割的领土，小卢老师决定在这里收复台湾啦！

百度网盘上还有一份台湾的 shapefile 资源，下载并解压，我们把它补上：

```python
plt.figure(figsize=(16,8))
m = Basemap(llcrnrlon=77, llcrnrlat=14, urcrnrlon=140, urcrnrlat=51, projection='lcc', lat_1=33, lat_2=45, lon_0=100)
m.drawcoastlines()
m.drawcountries(linewidth=1.5)
m.readshapefile('gadm36_CHN_shp/gadm36_CHN_1', 'states', drawbounds=True)

from matplotlib.patches import Polygon

ax = plt.gca()
for nshape, seg in enumerate(m.states):
    poly = Polygon(seg, facecolor='#E60000')
    ax.add_patch(poly)
    
m.readshapefile('gadm36_TWN_shp/gadm36_TWN_0', 'taiwan', drawbounds=True)

for nshape, seg in enumerate(m.taiwan):
    poly = Polygon(seg, facecolor='#E60000')
    ax.add_patch(poly)
```

好啦，我们用代码实现了祖国的统一！

![](/images/coding/lcc投影-中国省份-中国红-含台湾.png)

百度网盘中有一份2010年中国大陆的人口统计数据，我们可以将其中的人口数据展示到地图上，直观地看看中国的人口分布情况。

```python
import matplotlib.pyplot as plt
from mpl_toolkits.basemap import Basemap
from matplotlib.patches import Polygon
from matplotlib.colors import rgb2hex
import numpy as np
import pandas as pd

plt.figure(figsize=(16,8))
m = Basemap(llcrnrlon=77, llcrnrlat=14, urcrnrlon=140, urcrnrlat=51, projection='lcc', lat_1=33, lat_2=45, lon_0=100)
m.drawcountries(linewidth=1.5)
m.drawcoastlines()

m.readshapefile('gadm36_CHN_shp/gadm36_CHN_1', 'states', drawbounds=True)

df = pd.read_csv('data/2010年各地区户数人口数和性别比.csv')
df['省名'] = df.地区.str[:2]
df.set_index('省名', inplace=True)

statenames=[]
colors={}
cmap = plt.cm.YlOrRd
vmax = 100000000
vmin = 3000000
for shapedict in m.states_info:
    statename = shapedict['NL_NAME_1']
    p = statename.split('|')
    if len(p) > 1:
        s = p[1]
    else:
        s = p[0]
    s = s[:2]
    if s == '黑龍':
        s = '黑龙'
    statenames.append(s)
    pop = df['人口数'][s]
    colors[s] = cmap(np.sqrt((pop - vmin) / (vmax - vmin)))[:3]

ax = plt.gca()
for nshape, seg in enumerate(m.states):
    color = rgb2hex(colors[statenames[nshape]])
    poly = Polygon(seg, facecolor=color, edgecolor=color)
    ax.add_patch(poly)

plt.show()
```

可以看到，我国人口分布情况是**东多西少**，沿海经济发达地区人口明显更多，其中河南、山东、广东、四川这几个省份人口最多。

![](/images/coding/lcc投影-中国-人口分析.png)



## 在地图上展示数据

世界那么大，是不是怎么看都意犹未尽？由于 Basemap 绘制的是静态地图，展示数据时比较麻烦，接下来我们使用 pyecharts 再来做一些有趣的地图。

如果还没有安装 pyecharts 环境，则在 Anaconda 环境下执行以下命令即可：

```shell
pip install pyecharts
pip install pyecharts-snapshot
```

另外还需要安装一些地图包：

```shell
pip install echarts-countries-pypkg
pip install echarts-china-provinces-pypkg
pip install echarts-china-cities-pypkg
pip install echarts-china-counties-pypkg
```

### 世界地图

还是在 Jupyter Notebook 中写代码，先来画一张简单的世界地图，并给面积最大的5个国家涂上颜色。

```python
from pyecharts import Map

value = [95.1, 23.2, 43.3, 66.4, 88.5]
attr = ["China", "Canada", "Brazil", "Russia", "United States"]

map = Map("世界地图示例", width=1200, height=600)
map.add("世界地图", attr, value, maptype="world", 
         is_visualmap=True, visual_text_color='#000')
map.render(path="./data/世界地图.html")
```

在浏览器中打开该 HTML 页面：

![](/images/coding/pyecharts-世界地图示例.png)

### 中国红包地图

春节刚过去不久，我在网上找了一些关于各省份红包大小的数据，我们一起来绘制一张**中国红包地图**。

![](/images/coding/红包使不得.jpeg)

```python
data = {'河南':400, '北京':2900, '河北':800, '辽宁':500, '江西':500, 
        '上海':1600, '安徽':800, '江苏':1000, '湖南':800, '浙江':3100, 
        '海南':400, '湖北':400, '黑龙江':500, '四川':800, '重庆':500, 
        '广东':50, '澳门':600, '香港':850, '台湾': 660, '陕西':400,
        '内蒙古':300, '云南':400, '贵州':300, '吉林':500, '山西':300, 
        '山东':800, '福建':3500, '青海':300, '天津':1000, '西藏':300, 
        '新疆':500, '甘肃':400, '宁夏':500, '广西':300}

province = list(data.keys())
values = list(data.values())

map = Map("全国压岁钱地图", '中国地图', width=1000, height=800)
# maptype='china'
map.add("", province, values, visual_range=[0, 1000], maptype='china', 
        is_visualmap=True, visual_text_color='#000', is_label_show=True)
#map.show_config()
map.render(path="./data/中国地图.html")
```

在浏览器中打开该 HTML 页面：

![](/images/coding/pyecharts-全国压岁钱地图.png)

小卢老师到现在都还没发家致富，可能就是因为广东的红包太小啦！

![](/images/coding/给你跪了.gif)

### 广东省人均 GDP 排名

我在网上找了一份**2018年广东省各城市人均 GDP 排名**的数据，我们把这些数据画出来。

```python
# 广东省 2018年人均 GDP 排名
cities = ['深圳市', '珠海市', '广州市', '佛山市', '中山市', '东莞市', '惠州市', 
        '江门市', '肇庆市', '阳江市', '茂名市', '韶关市', '汕头市', '湛江市', 
        '清远市', '潮州市', '揭阳市', '云浮市', '河源市', '汕尾市', '梅州市']
# 单位：万元（人民币）
avgGDP = [19.33, 16.51, 15.77, 12.98, 11.14,  9.92,  8.59, 
           6.36,  5.35,  5.31,  4.98,  4.51,  4.48,  4.12, 
           4.05,  4.03,  3.54,  3.39,  3.25,  3.01,  2.54]

map = Map('2018年广东各城市人均GDP排名','广东地图', width=1000, height=800)
map.add('广东', cities, avgGDP, visual_range=[0, 20], maptype='广东', 
         is_visualmap=True, visual_text_color='#000', is_label_show=True)

map.render(path="./data/广东地图.html")
```

噔噔噔，果然是粤港澳大湾区最红～

![](/images/coding/pyecharts-2018年广东各城市人均GDP排名.png)

### 清远房价地图

再来看看我们的家乡清远，我找到了**2019年2月份清远市各县区平均房价**数据。

```python
counties = ['清城区', '清新区', '佛冈县', '英德市', '阳山县', 
            '连州市', '连南瑶族自治县', '连山壮族瑶族自治县']

# 2019年2月各县区房价排行
prices = [9343, 8172, 7950, 7360, 6500, 6383, 4000, 4000]

map = Map('2019年2月各县区房价热力图','清远地图', width=1000, height=800)
map.add("清远", counties, prices, visual_range=[4000, 11000], maptype='清远', 
         is_visualmap=True, visual_text_color='#000', is_label_show=True)
map.render(path="./data/清远地图.html")
```

由于连南和连山两个少数名族自治县的房地产不发达，于是我瞎编了个4000元。整体来看，从北往南，也就是说，越靠近大湾区的地方房价就越高，未来的发展速度也越快。

![](/images/coding/pyecharts-2019年2月各县区房价热力图.png)

既然说到房子，顺便打个广告吧～

买房置业，定制家具的可以找我大姐！

<img src="/images/coding/广告-大姐.jpeg" width="200" />

新房、二手房交易，家居装修的可以找我二姐！

<img src="/images/coding/广告-二姐.jpeg" width="200" />

学编程、聊人生、谈理想、做环保、哈哈哈的可以找我！

<img src="/images/coding/广告-大哥.jpeg" width="200" />

划红色圈圈的地方都是我们的业务范围！

<img src="/images/coding/广告-业务范围.jpeg" width="200" />


唔。。。

![](/images/coding/发现作业还没写.jpeg)



## 作业

（1）细心的你可能发现，在 Basemap 绘制的中国地图上，除了台湾，其实藏南地区也没有画上。请上网查阅资料，了解为什么台湾和藏南地区的主权归属存在争议？

（2）中国是全球人口最多的国家，思考一下，人口增长可能会对环境和我们的日常生活造成什么影响？

（3）绘制你所在省份的地图，看看周边都有哪些城市，说说你对这些城市的印象。

（4）思考气候变化可能会对我们日常生活造成什么影响。



## 思考

1. 为什么地球是圆的，但是地面却是平的？ 
   答：因为我们人类太渺小了！
2. 为什么使用国外的数据时，台湾和藏南地区存在问题？
   答：历史原因。
3. 世界观是什么？
   答：世界观，也叫宇宙观，是一个人对整个世界的根本看法，世界观建立于一个人对自然、人生、社会和精神的、科学的、系统的、丰富的认识基础上，它包括自然观、社会观、人生观、价值观。世界观不仅仅是认识问题，而且还包括坚定的信念和积极的行动。



## 附录


### 地图投影

地图投影（Map Projection）是利用一定数学法则把地球表面的经、纬线转换到平面上的理论和方法。

由于地球是一个赤道略宽、两极略扁的不规则的梨形球体，故其表面是一个不可展平的曲面，所以运用任何数学方法进行这种转换都会产生误差和变形，为按照不同的需求缩小误差，就产生了各种投影方法。

地图投影是把地球表面的任意点，利用一定数学法则，转换到地图平面上的理论和方法。

书面概念化定义：地图投影就是指建立地球表面（或其他星球表面或天球面）上的点与投影平面（即地图平面）上点之间的一一对应关系的方法。即建立之间的数学转换公式。它将作为一个不可展平的曲面即地球表面投影到一个平面的基本方法，保证了空间信息在区域上的联系与完整。这个投影过程将产生投影变形，而且不同的投影方法具有不同性质和大小的投影变形。

常用的投影方法有：

- 墨卡托投影（正轴等角圆柱投影）
- 高斯-克吕格投影
- 斜轴等面积方位投影
- 双标准纬线等角圆锥投影
- 等差分纬线多圆锥投影
- 正轴方位投影

### 领土问题

以下为历史上属于中国，但自近代在列强侵略战争中所失去的领土。现今的中华人民共和国政府不再宣称对其拥有主权。

- **外东北**：是指夹在外兴安岭（斯塔诺夫山脉）、鲸海（日本海）、鄂霍次克海、黑龙江、乌苏里江之间的，包括江东六十四屯和库页岛在内一百多万平方公里的地区。
- **唐努乌梁海**：地处外蒙古西北部，北靠萨彦岭，南抵唐努山，是位于两山之间的狭长地带，总面积约17万平方公里。
- **巴尔喀什湖地区**：巴尔喀什湖原是中国的西部疆界。


## References

- [基于Python轻松绘制地图](https://cloud.tencent.com/developer/news/238175)
- [Python框架-pygal之世界地图](https://www.cnblogs.com/keqipu/p/7283991.html)
- https://blog.csdn.net/zfy2072151/article/details/86684116
- https://blog.csdn.net/byc233518/article/details/79800623
- [Basemap手册——第一章入门（始于颜值）](https://blog.csdn.net/pengranxindong/article/details/79136486)
- [用Python画中国地图（二）](https://segmentfault.com/a/1190000010900212)
- [Basemap绘制地图](https://blog.csdn.net/u011596455/article/details/79621758)
- [Basemap tutorial 0.1 documentation](https://basemaptutorial.readthedocs.io/en/latest/plotting_data.html)
- [The GIS Studio](https://gisstudio.wordpress.com/)
- [中国2010年人口普查资料](http://www.stats.gov.cn/tjsj/pcsj/rkpc/6rp/indexce.htm)

