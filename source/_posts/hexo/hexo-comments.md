---
title: Hexo 评论系统
date: 2021-03-09 17:10:20
tags: 
  - Hexo
categories: hexo
---



由于 Hexo 博客系统是静态博客，所以它本身无法支持评论等动态的功能。不过，有很多第三方的评论系统都可以通过添加 JS 代码的方式让 Hexo 博客支持评论功能。

常见的评论系统包括：Valine、Disqus、Gitment 等等。



## 添加 Valine 评论系统



### 注册 LeanCloud

由于 valine 评论系统是放在 LeanCloud 上的，因此需要先打开 <https://www.leancloud.cn> 网址注册一个 LeanCloud 账号。

注册完成后创建一个应用，比如名字为 blog，然后进入应用，在 **设置 -> 应用凭证** 中找到 APP ID 和 APP Key。

### Hexo 配置

在 hexo 工程下执行如下命令安装插件

```bash
npm install next-theme/hexo-next-valine
```

在 _config.yml 文件末尾插入如下内容（可以是 hexo 或 theme 的 _config.yml）

```yaml
# Valine
# For more information: https://valine.js.org, https://github.com/xCss/Valine
valine:
  enable: false
  appId:  # your leancloud application appid
  appKey:  # your leancloud application appkey
  serverURLs: # When the custom domain name is enabled, fill it in here
  placeholder: Just go go # comment box placeholder
  avatar: mm # gravatar style
  meta: [nick, mail, link] # Custom comment header
  pageSize: 10 # pagination size
  visitor: false # leancloud-counter-security is not supported for now. When visitor is set to be true, appid and appkey are recommended to be the same as leancloud_visitors' for counter compatibility. Article reading statistic https://valine.js.org/visitor.html
  comment_count: true # If false, comment count will only be displayed in post page, not in home page
  recordIP: false # Whether to record the commenter IP
```

将 `enable` 项改为 `true`，复制前面生成的 appId 和 appKey。

### 配置域名

记得在 **设置 -> 安全中心 -> Web 安全域名** 把你的域名加进去。例如：

```bash
https://luhuadong.com
```

否则网页会出现 “Code 401: 未经授权的操作，请检查你的AppId和AppKey.” 提示。

注意：如果你使用的是自定义域名，还需要填写 serverURLs 项，该值可在 **设置 -> 应用凭证** 中找到。

### Valine 评论区

一切顺利的话，你将会在 Hexo 博客文章末尾看到如下评论区。

![](/images/hexo/hexo-valine.png)



## 添加 Disqus 评论系统

