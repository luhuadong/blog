---
title: Python 临时启动简单的 HTTP 服务器
date: 2020-08-16 10:53:27
tags:
  - Python
categories: coding
---

有时候我们需要临时启动一个简单的 Web Server 进行测试或分享文件，当然可以用 Apache、Nginx 这些 HTTP 服务，不过又显得过于麻烦。其实 Python 自带了一个简单的内建 HTTP 服务器，这时候用它就特别合适了！

基本命令

```shell
python -m Web服务器模块 [端口号，默认8000]
```

这里的“Web服务器模块”有以下三种：

- BaseHTTPServer: 提供基本的 Web 服务和处理器类，分别是 HTTPServer 和 BaseHTTPRequestHandler；
- SimpleHTTPServer: 包含执行 GET 和 HEAD 请求的 SimpleHTTPRequestHandler 类；
- CGIHTTPServer: 包含处理 POST 请求和执行 CGIHTTPRequestHandler 类。

例如：对于 Python2，只需要在你希望作为 Web 服务器根目录的位置，执行如下命令：

```shell
python -m SimpleHTTPServer 8080
```

这将会使用 8080 端口提供 Web 服务，你可以访问 <http://localhost:8080> 试试。

对于 Python3，则可以使用如下命令启动 Web 服务：

```shell
python3 -m http.server 8080
```


