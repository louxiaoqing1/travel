export const time = () => {
    var date = new Date();
    var y = date.getFullYear();        
    var m = date.getMonth() + 1;

    var d = date.getDate();
    // 在网页中显示时间：
    return y + '-' + m + '-' + d ;
  }