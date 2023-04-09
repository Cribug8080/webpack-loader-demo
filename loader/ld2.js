module.exports = function (content, map, meta) {
  // console.log('loader2 execution start')
  // 回调函数，告诉webpack是异步的
  const callback = this.async();

  // webpack config 的options配置
  // const options = this.getOptions();
  // console.log('loader options', options)
  // console.log('loader query', this.query)


  // 添加依赖，文件变化可以触发更新
  // this.addContextDependency
  // this.addDependency
  // this.addMissingDependency
  // this.clearDependencies

  // this.cacheable(flag = true) // 默认缓存

  // 模块所在的目录
  // console.log('this.context', this.context); // /Users/bytedance/my/webpack-loader-demo/src/needLoader

  // 在 pitch 阶段和 normal 阶段之间共享的 data 对象
  // console.log('this.data', this.data)

  // emit 一个错误，也可以在输出中显示
  // this.emitError(new Error('loader2 execution error'));

  // 发出一个警告
  // this.emitWarning(new Error('loader2 execution warning'));


  // 用于访问 compilation 的 inputFileSystem 属性
  // console.log('this.fs', this.fs)

  // 创建一个类似于 this.resolve 的解析函数
  // console.log('this.getResolve', this.getResolve)

  // 所有 loader 组成的数组。它在 pitch 阶段的时候是可以写入的
  // console.log('this.loaders', this.loaders)


  // console.log('this.rootContext', this.rootContext)
  console.log('this.sourceMap', this.sourceMap)
  console.log('this.target', this.target)




  setTimeout(() => {
    // console.log('loader2 execution', content, map, meta)
    callback(null, content, map, meta);
  }, 500);


  console.log('loader2 execution end')
  return;
}

module.exports.pitch = function (rr, pr, data) {
  // data是共享的数据，可以在execution使用
  data.config2 = 'ld2';
  console.log('loader2 pitch');

  // 这个return 可以直接返回loader的结果，并且停止之后的loader执行
  // return 'xx';
}
