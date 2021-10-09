---
title: Hexo 添加搜索
date: 2021-03-10 07:10:20
tags: 
  - Hexo
categories: hexo
---


在使用 Hexo 博客时，如果文章较多，就会发现分类和标签已经很难快速找到所需要的文章内容了。这时候就需要为 Hexo 博客系统添加本站的搜索功能。



## 安装插件

Hexo 的搜索功能依赖于 [hexo-generator-search](https://github.com/theme-next/hexo-generator-search) 插件，在博客根目录执行下面命令进行安装。

```shell
npm install hexo-generator-searchdb --save
```



## 修改配置

### 修改站点配置文件

修改根目录下的 `_config.yml` 配置文件，添加如下内容。

```yaml
# hexo-generator-searchdb
search:
  path: search.xml
  field: post
  format: html
  limit: 10000
  content: true
```

**参数说明：**

- **path** —— 文件路径。默认为 `search.xml`，如果将扩展名改为 `.json`，则输出格式为 JSON，否则使用 XML 格式。
- **field** —— 指定搜索范围。可选：
  - **post**（默认）：只覆盖博客中已发布的所有文章；
  - **page**：只覆盖博客中所有页面；
  - **all**：覆盖博客中所有页面和已发布的文章。
- **content** —— 是否包含每一篇文章的内容。若为 `false` 则只会根据文章标题和 meta 元数据进行搜索，默认为 `true`。
- **format** —— 页面内容的形式。可选：
  - **html**（默认）：原始 html 字符串被缩小。
  - **striptags**：原始 html 字符串被缩小，并删除所有标签。
  - **raw**：每个帖子或页面的 Markdown 文本。



### 修改主题配置文件

另外，还需要修改对应主题的 `_config.yml` 配置文件。

以 Next 主题为例，打开 ./themes/next/_config.yml 文件，开启 `local_search` 配置。

```yaml
local_search:
	enable: true
```



## 问题

### 上传 GitHub Pages 后无法使用搜索功能

表现：Local Search 一直在转圈圈

![](/images/hexo/hexo-local-search-not-ok.png)

这种情况有可能是 XML 解析不正确，比如字符有问题。一种简单的解决方法是使用 json 替代 xml 格式。修改 `_config.yaml` 文件 search 部分，重新编译即可。

```yaml
# hexo-generator-searchdb
search:
  path: search.json
  field: post
  format: html
  limit: 10000
  content: true
```







## 参考

- [hexo-generator-searchdb](https://www.npmjs.com/package/hexo-generator-searchdb)
- [Hexo博客添加搜索功能](https://xinyufeng.net/2020/09/25/Hexo%E5%8D%9A%E5%AE%A2%E6%B7%BB%E5%8A%A0%E6%90%9C%E7%B4%A2%E5%8A%9F%E8%83%BD/)
- [HEXO-NexT 的 Local Search 转圈圈问题](https://leo.xuebin.me/posts/abcc0996.html)
- [Hexo 博客无法搜索的终极解决方法](https://www.sqlsec.com/2017/12/hexosearch.html)
- [hexo博客本地搜索失效，一直转圈](https://dandelioncloud.cn/article/details/1434183575834013698)

