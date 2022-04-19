
### hx-antd-vue-serverless

基于腾讯云 serverless 搭建 express 服务，专门提供给 hx-antd-vue 项目打包后的访问和部分数据接口的服务

dist 文件夹为 hx-antd-vue-ui 项目执行 npm run build 后打包的代码

### 安装
```shell
npm install serverless-tencent -g // 已有 serverless-tencent 可忽略
npm install
```

### 部署
```shell
slt deploy // 之后扫描二维码或点击链接登录腾讯云就可以发布hx-antd-vue应用
```