module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        /**
         * useBuiltIns项取值可以是"usage" 、 "entry" 或 false。如果该项不进行设置，则取默认值false。
         * useBuiltIns这个参数项主要和polyfill的行为有关。在我们没有配置该参数项或是取值为false的时候，polyfill就会全部引入到最终的代码里。
         * useBuiltIns取值为"entry"或"usage"的时候，会根据配置的目标环境找出需要的polyfill进行部分引入。让我们看看这两个参数值使用上的不同。
         */
        useBuiltIns: 'entry',
        corejs: 3,
        targets: {
          chrome: 57, // 修改不同的值可以看到 bundle的大小也不一样
        },
      },
    ],
  ],
  plugins: [
    // "@babel/plugin-transform-runtime"
  ]
};
