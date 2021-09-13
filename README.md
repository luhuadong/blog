# blog

个人博客


## 博客开发套件

- 静态博客：Hexo、Jekyll、Typecho、Hugo、Ghost
- 博客主题：hexo-theme-fluid
- 评论系统：Valine
- 部署工具：Docker


## 环境搭建

```shell
npm install hexo-cli -g
hexo init blog
cd blog
npm install
hexo server
```

### 部署

```shell
hexo deploy
```

```shell
hexo clean
hexo g d
```

免费用户记得要在 Gitee Pages 页面手动更新！


### 创建文章

```shell
hexo new [layout] <title>
```

layout 是指 Hexo 的三种默认布局：`post`、`page` 和 `draft`。


### 引用本地文件

```yml
# 开始使用本地静态资源
post_asset_folder: true

```

## 主题

- [Next](https://github.com/next-theme/hexo-theme-next)

## 评论

```shell
npm install next-theme/hexo-next-valine
```

## 栏目

- [x] Journal（日记）
- [x] Reading（读书笔记）
- [x] Movies（纪录片、TED演讲）
- [x] ZeroWaste（环保）
- [x] Markdown（教程）
- [ ] English（英语学习：diary 和 journal 的区别）
- [ ] Money（赚钱思维、理财）
- [ ] 地理
- [ ] 绘画
- [ ] 运动
- [ ] 健康
- [ ] 心理学
- [ ] 行业分析

