module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // 防止babel将任何模块类型都转译成CommonJS类型，导致tree-shaking失效问题
        modules: true,
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: {
          version: 3,
          proposals: true,
        },
        useESModules: true,
      },
    ],
  ],
};
