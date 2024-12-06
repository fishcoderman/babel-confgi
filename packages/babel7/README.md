# Babel1

安装

| npm install --save-dev @babel/cli @babel/core @babel/preset-env

配置

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env'
    ],
  ]
};
```

其中的presets是一个预设，预设是一组插件的集合。 @babel/preset-env 负责将ES6+的代码转换为ES5。

- @babel/cli，@babel/core与@babel/preset-env是Babel官方的三个包，它们的作用如下：
- @babel/cli是Babel命令行转码工具，如果我们使用命令行进行Babel转码就需要安装它。
- @babel/cli依赖@babel/core，因此也需要安装@babel/core这个Babel核心npm包。
- @babel/preset-env这个npm包提供了ES6转换ES5的语法转换规则，我们在Babel配置文件里指定使用它。如果不使用的话，也可以完成转码，但转码后的代码仍然是ES6的，相当于没有转码。