---
title: Hexo 编译发布
date: 2021-03-09 16:08:19
tags: 
  - Hexo
categories: hexo
---



一般我们都会使用 `hexo new <title>` 来建立文章，这种建立方法会将新文章建立在 `source/_posts` 目录下，当使用 `hexo generate` 编译 markdown 文件时，会将其 HTML 结果编译在 `public` 目录下，之后 `hexo deploy` 将会把 `public` 目录下所有文章部署到 GitHub，这是我们熟悉的 Hexo 流程。

## 编译

```bash
hexo generate
```



## 发布

```bash
hexo deploy
```



```yaml
# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  type: git
  repository: git@github.com:luhuadong/blog.git
  branch: public
```





## 参考

- [Hexo 文章保存为草稿](https://novnan.github.io/Hexo/hexo-draft/)
