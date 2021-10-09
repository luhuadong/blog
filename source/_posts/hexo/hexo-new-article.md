---
title: Hexo 创建文章
date: 2021-03-09 16:05:19
tags: 
  - Hexo
categories: hexo
---


## 创建文章

简单的，我们可以使用下面命令创建文章，其中 `title` 为文章标题。

```bash
hexo new <title>
```

这种创建方式会将新文章建立在 `source/_posts` 目录下，例如创建一篇名为“new article”的文章。

```bash
hexo new "new article"
```

可以看到在 `source/_posts` 目录下多了一个 new-article.md 的文件。打开之后我们会看到如下内容。

```yaml
---
title: new article
date: 2021-09-22 14:45:14
tags:
---
```



### 文章属性

文章可以拥有如下属性：

- layout Layout post 或 page
- title 文章的标题
- date 创建日期（文件的创建日期）
- updated 修改日期（文件的修改日期）
- comments 是否开启评论 true
- tags 标签
- categories 分类
- permalink url 中的名字

动态博客中通过发布文章页面设置的各种属性，在 hexo 里要这样设置。



## 保存草稿

如果文章还没写完，或者暂时不想公开，这时候可以将文章保存为草稿。

```bash
hexo new draft "new draft"
```

执行上面命令，会在 `source/_drafts` 目录下生成一个 new-draft.md 文件。但是这个文件不被显示在页面上，链接也访问不到。也就是说如果你想把某一篇文章移除显示，又不舍得删除，可以把它移动到 `_drafts` 目录之中。

如果你希望强行预览草稿，更改配置文件：

```yaml
render_drafts: true
```

或者，如下方式启动 server：

```bash
hexo server --drafts
```

下面这条命令可以把草稿变成文章，或者页面：

```bash
hexo publish [layout]
```





## 参考

- [Hexo 文章保存为草稿](https://novnan.github.io/Hexo/hexo-draft/)
- [Hexo创建文章和草稿](https://seachal.github.io/BolgBuild/2017/12/25/BlogBuild/Hexo%E5%88%9B%E5%BB%BA%E6%96%87%E7%AB%A0%E5%92%8C%E8%8D%89%E7%A8%BF_2017-12-30-1/)

