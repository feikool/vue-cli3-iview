## iView-cli

```
项目运行
 npm install
 npm run dev
```

### iView Ui

> [iView UI 文档](https://www.iviewui.com/docs)

```
!Error:Inline JavaScript is not enabled. Is it set in your options?
fix:
node_modules/less-loader/dist/index.js
function lessLoader(source) {
  ...
    options.javascriptEnabled = true
  ...
}
```
