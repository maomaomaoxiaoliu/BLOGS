function formatTime(time, format) {
  let temp = '0000000000' + time
  let len = format.length
  return temp.substr(-len)
}
//temp.substr(-2)  从后向前留2个字符

module.exports = {
  formatTime: formatTime
}