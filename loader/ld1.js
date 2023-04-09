module.exports = function (content, map, meta) {
  const callback = this.async();
  this.addDependency('/Users/bytedance/my/webpack-loader-demo/src/index.js');

  setTimeout(() => {
    let style = `
      let style = document.createElement('style');
      style.innerHTML = ${JSON.stringify(content)};
      document.head.appendChild(style)
    `;
    console.log('loader1 execution', 'this.data: ', JSON.stringify(this.data))
    callback(null, style, map, meta)
  }, 100);
  
  return;
}

module.exports.pitch = function (rr, pr, data) {
  data.config1 = 'ld1';
  console.log('loader1 pitch')
}

