---
title: 俏皮的 Markdown Emoji 表情
date: 2021-03-07 23:07:08
tags:
  - Markdown
categories: markdown
---

**【Markdown从入门到精通】**

:question: 如果不懂外语，在互联网上怎么交流？—— 别慌，可以用互联网时代全球通用语言 Emoji 呀！


## Emoji 的发展史

:paperclip: ​Emoji 的演变主要分为三个阶段。

### :one: **符号表情（颜文字）**

早在 1967 年，美国《Reader's Digest》的一篇文章就提出了用符号表达情绪的概念，但这个想法并未付诸实践。直到  1982 年，卡耐基梅隆大学的 Scott Fahlman 教授提议在留言板上使用 `:-)` 和 `:-(` 符号来区分严肃的帖子和笑话。

```
19-Sep-82 11:44    Scott E  Fahlman             :-)
From: Scott E  Fahlman <Fahlman at Cmu-20c>

I propose that the following character sequence for joke markers:

:-)

Read it sideways.  Actually, it is probably more economical to mark
things that are NOT jokes, given current trends.  For this, use

:-(
```

之后开始出现各种不同形式的符号，比如 `:-o` 表示惊讶，`ORZ` 表示低头下跪等等。虽然符号表情需要把头逆时针转90度才能看懂，但在 BP 机时代给人们带来了许多快乐，现在仍然有许多人在使用（包括我）。



### :two: **Emoji（绘文字）**

基于 ASCII 的符号表情所能表达的内容有限，并且输入符号的体验并不是很好。日本移动通讯运营商 NTT DOCOMO 的工程师栗田穣崇在 1999 年设计了一套 12x12 像素的图形化表情。虽然今天我们所用的 emoji 与最初的相比已有了翻天覆地的变化，但都离不开栗田穣崇为 emoji 创造的原始基因。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307230335427.jpg)


Emoji 一词并不是栗田穣崇创造出来的，而是日语中早就存在的。大概是江户年代起就有将类似 emoji 的图形符号当做文字来用的历史了。e 是日文汉字「絵」（图画的意思），moji 是「文字」，所以 emoji，也称作绘文字。而 kao 是「颜」（脸的意思），所以 kaomoji 就是颜文字。

全世界第一个 Emoji 表情 :heart:



### :three: **Emoji 统一码**

2010年，Unicode 6.0 首次收录了 emoji 编码，这是 emoji 发展史的里程碑之一，将有助于推动 emoji 的全球统一标准。

此前 emoji 仅在日本流行，直到 2011 年，苹果在 iPhone 系统中加入一套 Apple Color Emoji 后，emoji 才真正开始火爆，涌入全球用户的屏幕中，成为当今数字通讯中的一种新形式，逐渐成为一门世界通用语言。

Emoji 仍在不断发展，Unicode 8.0 就加入了5个修饰符，用来调节人形表情的肤色。

Unicode 10.0 版本的部分 emoji 编码如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307230405868.png)




## 在 Markdown 中使用 Emoji

:star: 重点：有两种方法可以将 emoji 表情符号添加到 Markdown 文档

1. 将表情符号直接复制粘贴到 Markdown 文档中，就像普通文字那样；
2. 使用冒号 `:` 将表情代码（emoji shortcodes）包裹起来。



### 复制粘贴表情符号

大多数情况下，你可以简单地从 [Emojipedia]() 等来源复制表情符号，直接 Ctrl + V 粘贴到 Markdown 文档中。许多 Markdown 编辑器都会自动转换为其支持的表情符号显示类型，所以不同编辑器或网站看到的效果可能会有差别。

Tips：如果使用静态网站生成器，请确保将 HTML 页面编码修改为 UTF-8。

💰



### 使用表情符号代码

使用冒号包裹表情代码即可，比如下面这样：

```markdown
去露营了！ :tent: 很快回来。

真好笑！ :joy:
```

效果是这样的：

> 去露营了！ :tent: 很快回来。
>
> 真好笑！ :joy:

表情代码有上千个，记不住不要紧，很多 Markdown 编辑器都有提示和补全功能，输入冒号 `:` 加首字母就会给你提示。

具体的表情代码可以通过下面的网站查阅：

- <https://emojipedia.org>
- <https://www.webfx.com/tools/emoji-cheat-sheet/>
- <https://gist.github.com/rxaviers/7360908>

不同平台和编辑器对 emoji 的支持和显示效果可能会不一样，各位小伙伴们需要注意哦！同时注意文明使用 emoji 哟~


:kiss:​

<br/>