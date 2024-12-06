module.exports = {
  presets: [
    [
      '@babel/preset-env'
    ],
  ],
  plugins: [
    // 1.自动移除语法转换后内联的辅助函数（inline Babel helpers），使用@babel/runtime/helpers里的辅助函数来替代
    // 2.当代码里使用了core-js的API，自动引入@babel/runtime-corejs3/core-js-stable/，以此来替代全局引入的core-js/stable;
    // 3.当代码里使用了Generator/async函数，自动引入@babel/runtime/regenerator，以此来替代全局引入的regenerator-runtime/runtime；
    ["@babel/plugin-transform-runtime", {
      "corejs": 3
    }]
  ]
};


