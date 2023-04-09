module.exports = function (content, map, meta) {
  // let style = `
  //   let style = document.createElement('style');
  //   style.innerHTML = ${JSON.stringify(content)};
  //   document.head.appendChild(style)
  // `;
  const callback = this.async();
  setTimeout(() => {
    console.log('loader3 execution', 'this.data: ', JSON.stringify(this.data))
    callback(null, content, map, meta);
  }, 500);
  return;
}

module.exports.pitch = function (rr, pr, data) {
  data.config3 = 'ld3';
  console.log('loader3 pitch')
}
