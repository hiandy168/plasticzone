var app = getApp();

//判断登录
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
    },
    fail: function (res) {

    },
    complete: function () {

    }
  });
}

//判断手机号
function verifyMobile(mobile){
  if(mobile.length==0){
    console.log("请输入手机号码！");
    return false;
  }
}


module.exports = {
  isLogin: isLogin
}