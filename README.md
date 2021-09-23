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
- [x] Reading（读书笔记）:star:
- [x] Movies（纪录片、TED 演讲）
- [x] ZeroWaste（环保）
- [x] Markdown（教程）
- [ ] Python（教程）
- [ ] English（英语学习）:star:
- [ ] Money（赚钱思维、理财）:star:
- [ ] 地理（城市介绍）
- [ ] 绘画（素描、色彩）:star:
- [ ] 运动（运动科普、规则介绍） :star:
- [ ] 健康（静脉病科普）
- [ ] 心理学
- [ ] 行业分析
- [ ] 创业案例（灵析、ProcessOn、多抓鱼） :star:

