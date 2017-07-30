var app = getApp();
function isLogin(callback) {
  
  wx.request({
    url: app.globalData.apiHost + '/user/validUserToken',
    data: {

    },
    method: "POST",
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-UA': wx.getStorageSync('XUA')
    },
    success: function (res) {
      if(res.data.err==0){
        var status = true;
        callback(status);
      }else{
        wx.showModal({
          title: '塑料圈通讯录',
          content: '您未登录塑料圈,无法查看企业及个人信息',
          success: function (res) {
            if (res.confirm) {
              wx.redirectTo({
                url: '../../pages/login/login'
              })

            } else if (res.cancel) {
              
            }
          }
        })
        var status = false;
        callback(status);
      }
      
      // if (res.data.err == 0) {
      //   status = true;
      // } else {
      //   status = false;
      // }
    },
    fail: function (res) {

    },
    complete: function () {

    }
  });

}

module.exports = {
  isLogin: isLogin
}