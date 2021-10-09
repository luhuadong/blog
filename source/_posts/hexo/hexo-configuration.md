---
title: Hexo 配置
date: 2021-03-09 16:03:19
tags: 
  - Hexo
categories: hexo
---




- 文章更新时间
- 文章字数
- 文章阅读量



## 设置首页只显示部分摘要

Next默认是会显示全文的，这样显然很不方便，因此需要一些方法去只显示前面一部分。

首先，检查 Next 主题的 _config.yml 中把设置打开 `excerpt_description` 选项。

在文章的 `front-matter` 中添加 `description` 描述，其中 description 中的内容就会被作为摘要显示在首页上，其余一律不显示。

```yaml
---
title: 让首页显示部分内容
date: 2021-09-23 21:58:37
description: 这是显示在首页的概述，正文内容均会被隐藏。
---
```



## 文章分类

修改 `new_post_name` 值，在 _config.yml 文件找到该配置项，默认值为 `:title.md`。

```yaml
# Writing
new_post_name: :title.md # File name of new posts
```

修改为 `:category/:title.md`

```yaml
# Writing
new_post_name: :category/:title.md # File name of new posts
```







## 参考

- [Hexo Next主题显示文章更新时间](https://www.voidking.com/dev-hexo-next-update-time/)
- [如何在Hexo中对文章md文件分类](https://www.githang.com/2018/12/22/hexo-new-post-path/) :star:

