export const getCookie = function (objName) {
  var arrStr = document.cookie.split("; ")
  for (var i = 0; i < arrStr.length; i++) {
    var temp = arrStr[i].split("=")
    if(temp[0] == objName)
      return unescape(temp[1])
  }
};


export const dateFormat = function (time, flag = false) {
  let date = new Date(time);
  let str = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  if (!flag) {
    return str;
  }
  return `${str} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

};
