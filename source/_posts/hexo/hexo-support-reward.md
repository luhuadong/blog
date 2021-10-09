---
title: Hexo 添加赞赏
date: 2021-03-10 07:49:30
tags: 
  - Hexo
categories: hexo
---



下面以 NexT 主题为例，为 Hexo 博客添加赞赏功能。

1. 准备支付宝或微信支付的收款二维码，将二维码图片存放于 images 目录（hexo 或 next 下的都可以）。

2. 修改 NexT 主题的 _config.yml 配置文件，开启赞赏功能。

   ```yaml
   # Donate (Sponsor) settings
   # Front-matter variable (unsupport animation).
   reward_settings:
     # If true, a donate button will be displayed in every article by default.
     enable: true
     animation: false
     #comment: Buy me a coffee
     comment: 您的鼓励是我最大的动力！
   
   reward:
     wechatpay: /images/wechatpay.jpeg
     alipay: /images/alipay.jpeg
     #paypal: /images/paypal.png
     #bitcoin: /images/bitcoin.png
   ```

3. 重新编译发布 Hexo 博客，刷新网页，可以看到文章末尾增加了“赞赏”按钮，点击按钮将出现收款二维码。

![](/images/hexo/hexo-next-reward.png)







## 参考

- [Hexo的NexT主题打赏功能](https://blog.csdn.net/wugenqiang/article/details/89046078)
