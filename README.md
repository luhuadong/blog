# blog

个人博客



环境搭建

```shell
npm install hexo-cli -g
hexo init blog
cd blog
npm install
hexo server
```

部署

```shell
hexo deploy
```

免费用户记得要在 Gitee Pages 页面手动更新！


创建文章

```shell
hexo new [layout] <title>
```

layout 是指 Hexo 的三种默认布局：`post`、`page` 和 `draft`。
