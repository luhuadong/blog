---
title: Hexo 添加音乐
date: 2021-03-10 07:12:20
tags: 
  - Hexo
categories: hexo
---


Markdown 没有提供音频的语法支持，不过我们可以在页面中直接添加 html 代码实现音乐的添加。例如：

```html
<audio controls="" name="media">
<source src="https://res.wx.qq.com/voice/getvoice?mediaid=MzI4NjAxNjY4N181MDI3NDM5OTM=" type="audio/mp3">
</audio>
```

效果：

<audio controls="" name="media">
<source src="https://res.wx.qq.com/voice/getvoice?mediaid=MzI4NjAxNjY4N181MDI3NDM5OTM=" type="audio/mp3">
</audio>




## 参考

- [踩坑记--hexo中加入音乐](https://blog.csdn.net/qq_38723430/article/details/84060899)
- [hexo添加音乐](https://blog.csdn.net/qq_35859750/article/details/91452615)

