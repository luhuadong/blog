---
title: Hexo 数学公式
date: 2021-03-10 07:18:20
tags: 
  - Hexo
categories: hexo
---



## 添加 MathJax

[MathJax](https://www.mathjax.org/) 是一个 JavaScript 引擎，用来显示网络上的数学公式，它支持大部分的主流的浏览器。

有些 Hexo 主题（如 NexT）内部已经集成了 MathJax，只需要编辑 `themes/next/_config.yml` 配置文件，找到 `math` 配置项，配置为 `enable: true` 即可启用。

```yaml
math:
  # Default (false) will load mathjax / katex script on demand.
  # That is it only render those page which has `mathjax: true` in front-matter.
  # If you set it to true, it will load mathjax / katex srcipt EVERY PAGE.
  every_page: true

  mathjax:
    enable: true
    # Available values: none | ams | all
    tags: none

  katex:
    enable: false
    # See: https://github.com/KaTeX/KaTeX/tree/master/contrib/copy-tex
    copy_tex: false
```





## 参考

- [hexo支持数学公式](https://wenghonghui.github.io/2020/03/05/hexo-mathjax/)

