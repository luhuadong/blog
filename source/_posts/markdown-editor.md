---
title: 盘点好用的 Markdown 编辑器
date: 2021-03-07 13:06:56
tags:
  - Markdown
categories: markdown
---

**【Markdown从入门到精通】**

Markdown 是以文本形式保存的，基本上任何一款编辑器都可以完成 Markdown 写作（包括 Windows 的记事本、Linux 的 Vim 等等）。不过，如果你想更专注于写作，一款支持语法显示和实时渲染的工具能让你事半功倍！

下面列出的是我个人使用过一些 Markdown 编辑器，小伙伴们可以根据自己的需要安装使用。

| 名称                                           | 特点                                                         | 支持平台              | 费用             |
| ---------------------------------------------- | ------------------------------------------------------------ | --------------------- | ---------------- |
| [MarkdownPad](http://markdownpad.com/)         | Windows 平台最好用的 Markdown 编辑器                         | Windows               | 免费 + 付费      |
| [Atom](https://atom.io/)                       | 开源，跨平台，超棒的编辑器，需安装插件                       | Windows、Linux、macOS | 免费             |
| [Sublime Text 3](https://www.sublimetext.com/) | 精致的代码编辑器，安装插件支持即时渲染                       | Windows、Linux、macOS | 免费 + 付费      |
| [JetBrains's IDE](https://www.jetbrains.com/)  | 需要安装插件，免费版有时长限制，适合程序员                   | Windows、Linux、macOS | 免费 + 付费      |
| [VS Code](https://code.visualstudio.com/)      | 适合开发者，有众多插件                                       | Windows、Linux、macOS | 免费             |
| [Typora](https://typora.io/)                   | 跨平台、即时渲染（所见即所得）                               | Windows、Linux、macOS | 免费             |
| [Ulysses](https://ulysses.app/)                | 一站式写作平台，优良的写作体验                               | iPhone、iPad、macOS   | 付费（免费试用） |
| [Bear](https://bear.app/)                      | 高颜值，免费版本不能跨平台同步                               | iPhone、iPad、macOS   | 免费 + 付费      |
| [MWeb](http://zh.mweb.im/)                     | 支持图床、博客发布等功能                                     | iPhone、iPad、macOS   | 付费             |
| [MacDown](https://macdown.uranusjr.com/)       | 开源，可从 Mou 平滑过渡                                      | macOS                 | 免费             |
| [GitBook Editor](https://www.gitbook.com/)     | 跨平台，集成了 Git 和 Markdown                               | Windows、Linux、macOS | 免费             |
| [CSDN](https://blog.csdn.net/)                 | 国内程序员博客网站                                           | Web                   | 免费             |
| [简书](https://www.jianshu.com/)               | 最早支持 Markdown 写作的网站之一                             | Web                   | 免费             |
| [印象笔记](https://www.yinxiang.com/)          | 支持多端同步，提供强大的 [马克飞象](https://maxiang.io/) 编辑器 | Windows、Linux、macOS | 免费 + 付费      |
| [有道云笔记](https://note.youdao.com/)         | 支持多端同步                                                 | Windows、Linux、macOS | 免费 + 付费      |



当然，除了上面列出这些，还有许多优秀的 Markdown 编辑器，有待您进一步探索！

对于我来说，目前最常用的是 Typora 和 VS Code 这两款免费、跨平台的编辑器，下面简单介绍一下安装过程。



## Typora

打开 Typora 的官网 <https://typora.io>，点击 Download 标签，对于 Windows 和 macOS 用户，直接下载安装包进行安装即可。对于 Linux 用户稍微复杂一些，比如 Ubuntu 用户可以执行如下命令进行安装或更新。

```shell
# or run:
# sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys BA300B7755AFCFAE
wget -qO - https://typora.io/linux/public-key.asc | sudo apt-key add -

# add Typora's repository
sudo add-apt-repository 'deb https://typora.io/linux ./'
sudo apt-get update

# install typora
sudo apt-get install typora
```

Typora 非常简洁，提供流畅的即时预览界面，而不是分栏设计，可以让你在一个屏幕上看到更多内容，甚至忘记自己在写 Markdown。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307130330755.png)




## VS Code

打开 VS Code 的官网 <https://code.visualstudio.com> 下载对应平台的安装包，进行安装即可。也可以在系统的应用商店找到，直接安装。

唯一值得提醒的是，如何安装 Markdown 插件，并且启动预览界面。

点击左侧栏的 Extensions 图标，输入 Markdown 进行搜索。由于 VS Code 支持第三方插件，因此你会看到许多不同的 Markdown 插件，我们安装第一个 Markdown All in One 即可，点击 Install 进行安装。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307130354210.png)


安装完成后打开或新建一个 .md 文档，在编辑区的右上角可以看到几个小按钮，点击中间那个 preview 即可实时预览 Markdown 渲染后的效果。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307130407531.png)


![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307130420679.png)


好啦，关于 Markdown 编辑器的选择与安装就先到这里了，下一节我们正式开始学习 Markdown 的语法。

