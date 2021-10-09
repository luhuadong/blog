---
title: Hexo 嵌入视频
date: 2021-03-10 07:15:20
tags: 
  - Hexo
categories: hexo
---



## 嵌入B站视频

如果想把B站的视频嵌入到自己的博客网站中，直接使用官方视频下面的嵌入代码即可。代码如下，其中 aid、bvid 和 cid 随不同视频而变化。

```html
<iframe src="//player.bilibili.com/player.html?aid=xxx&bvid=yyy&cid=zzz&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
```

但由于官方提供的这段代码的视频排版不是很美观，而且不能观看高清视频，也发不了弹幕（或关闭弹幕），因此有必要对它进行调整。

**优化示例：**

```html
<iframe src="//player.bilibili.com/player.html?aid=xxx&bvid=yyy&cid=zzz&page=1&high_quality=1&danmaku=0" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>
```

**参数解释：**

- URL 参数
  - `&high_quality=1`：1 = 最高画质，0 = 最低画质
  - `&danmaku=0`：1 = 打开弹幕，0 = 关闭弹幕
- iframe 参数
  - `allowfullscreen="allowfullscreen"`：移动端全屏
  - `sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"`：禁止弹出网页

**详细参数属性说明：**

| 属性         | 值                                                           | 描述                                                         |
| :----------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| align        | left right top middle bottom                                 | 不赞成使用。请使用样式代替。规定如何根据周围的元素来对齐此框架。 |
|              |                                                              |                                                              |
| frameborder  | 10                                                           | 规定是否显示框架周围的边框。                                 |
| height       | pixels%                                                      | 规定 iframe 的高度。                                         |
| longdesc     | URL                                                          | 规定一个页面，该页面包含了有关iframe 的较长描述。            |
|              |                                                              |                                                              |
| marginheight | pixels                                                       | 定义 iframe的顶部和底部的边距。                              |
|              |                                                              |                                                              |
| marginwidth  | pixels                                                       | 定义 iframe的左侧和右侧的边距。                              |
|              |                                                              |                                                              |
| name         | frame_name                                                   | 规定 iframe 的名称。                                         |
| sandbox      | "allow-formsallow-same-originallow-scriptsallow-top-navigation" | 启用一系列对 <_iframe> 中内容的额外限制。                    |
| scrolling    | yesnoauto                                                    | 规定是否在 iframe中显示滚动条。                              |
|              |                                                              |                                                              |
| seamless     | seamless                                                     | 规定 <_iframe> 看上去像是包含文档的一部分。                  |
| src          | URL                                                          | 规定在 iframe中显示的文档的 URL。                            |
|              |                                                              |                                                              |
| srcdoc       | HTML_code                                                    | 规定在 <_iframe> 中显示的页面的 HTML 内容。                  |
| width        | pixels%                                                      | 定义 iframe 的宽度。                                         |





## 参考

- [如何在网站中嵌入B 站视频 自适应页面+ 默认 1080P + 并且去掉弹幕](https://cloud.tencent.com/developer/article/1858356)
