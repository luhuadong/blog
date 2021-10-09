---
title: Hexo 固定链接
date: 2021-03-09 16:10:20
tags: 
  - Hexo
categories: hexo
---


大家知道 hexo 默认的链接是 http://xxx.yy.com/2021/07/25/hello-world 这种类型的，这源于站点目录下的配置 _config.yml 里的 permalink 配置。这种默认配置的缺点就是一般文件名是中文，导致 url 链接里有中文出现，这会造成很多问题，如使用 gitment，也不利于 seo。另外就是年月日都会有分隔符。

找到下面一行

```yaml
permalink: :year/:month/:day/:title/
permalink_defaults:
pretty_urls:
```

将其修改为

```yaml
permalink: :category/:title.html
permalink_defaults:
pretty_urls:
```





## 参考

- [hexo链接持久化终极解决之道](https://blog.csdn.net/yanzi1225627/article/details/77761488)
