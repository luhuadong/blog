---
title: Hexo 图片预览
date: 2021-03-10 07:29:30
tags: 
  - Hexo
categories: hexo
---



如果 Hexo 博客系统中有较多图片，那么通常需要实现图片点击预览，以便读者放大浏览图片。在 Hexo 中，我们可以使用 fancybox 插件来添加图片点击预览功能。

下面以 Next 主题为例进行介绍。

**Step1：切换到主题的 lib 目录**

```bash
cd next/source/lib
```

如果主题的 source 目录下没有 lib 目录，则需要先创建。

**Step2：下载 fancybox 插件**

```bash
git clone https://github.com/theme-next/theme-next-fancybox3 fancybox
```

**Step3：修改主题配置文件 _config.yml**

```yaml
fancybox: true
```

**Step4：编译、预览**

```bash
hexo server
```





## 参考

- [Hexo 实现图片点击预览](https://zyclovehyp.github.io/2019/08/15/Hexo%20%E5%AE%9E%E7%8E%B0%E5%9B%BE%E7%89%87%E7%82%B9%E5%87%BB%E9%A2%84%E8%A7%88/)
- [Hexo文章中图片点击实现全屏查看](https://wugenqiang.github.io/articles/hexo-do-picture-screen.html)

