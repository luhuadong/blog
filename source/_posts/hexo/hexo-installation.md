---
title: Hexo 安装
date: 2021-03-09 15:59:09
tags: 
  - Hexo
categories: hexo
---



Hexo 的安装方法很简单，但它依赖 Node.js 和 Git，因此需要先安装这些应用程序。

- [Node.js](http://nodejs.org/)（Node.js 版本需不低于 10.13，建议使用 Node.js 12.0 及以上版本）
- [Git](http://git-scm.com/) 版本管理系统



## 安装 Git

Windows 用户可以通过 <https://git-scm.com/download/win> 网页下载并安装 Git。

macOS 用户可以使用 [Homebrew](http://mxcl.github.com/homebrew/)、[MacPorts](http://www.macports.org/) 工具或者直接下载 [安装程序](http://sourceforge.net/projects/git-osx-installer/) 进行安装。

Linux 用户可以通过下面命令安装 Git：

```bash
sudo apt-get install git-core    # for Ubuntu, Debian
sudo yum install git-core        # for Fedora, Red Hat, CentOS
```



## 安装 Node.js

Node.js 为大多数平台提供了官方的 [安装程序](https://nodejs.org/en/download/)。对于中国大陆地区用户，可以前往 [淘宝 Node.js 镜像](https://npm.taobao.org/mirrors/node) 下载。

其它的安装方法：

- Windows：通过 [nvs](https://github.com/jasongin/nvs/)（推荐）或者 [nvm](https://github.com/nvm-sh/nvm) 安装。
- Mac：使用 [Homebrew](https://brew.sh/) 或 [MacPorts](http://www.macports.org/) 安装。
- Linux（DEB/RPM-based）：从 [NodeSource](https://github.com/nodesource/distributions) 安装。



## 安装 Hexo

安装号依赖的应用程序之后，即可使用 npm 安装 Hexo。

```bash
npm install -g hexo-cli
```

对于熟悉 npm 的进阶用户，可以仅局部安装 `hexo` 包。

```bash
npm install hexo
```

安装以后，可以使用以下两种方式执行 Hexo：

1. `npx hexo <command>`
2. 将 Hexo 所在的目录下的 `node_modules` 添加到环境变量之中即可直接使用 `hexo <command>`：

```bash
echo 'PATH="$PATH:./node_modules/.bin"' >> ~/.profile
```

