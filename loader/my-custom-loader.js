module.exports = require("babel-loader").custom(babel => {
  function myPlugin() {
    return {
      visitor: {},
    };
  }

  return {
    // 传给 loader 的选项。
    customOptions({ opt1, opt2, ...loader }) {
      return {
        // 获取 loader 可能会有的自定义选项
        custom: { opt1, opt2 },

        // 传入"移除了两个自定义选项"后的选项
        loader,
      };
    },

    // 提供 Babel 的 'PartialConfig' 对象
    config(cfg) {
      if (cfg.hasFilesystemConfig()) {
        // 使用正常的配置
        return cfg.options;
      }

      return {
        ...cfg.options,
        plugins: [
          ...(cfg.options.plugins || []),

          // 在选项中包含自定义 plugin
          myPlugin,
        ],
      };
    },

    result(result, opt) {
      return {
        ...result,
        code: result.code + "\n// 自定义loader生成",
      };
    },
  };
});