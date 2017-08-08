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
      if (res.data.err == 0) {
        var status = true;
        callback(status);
      } else {
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
var mobileReg = /^1(3|4|5|7|8)\d{9}$/;
var helper = {
  verifyMobile: function (mobile) {
    if (mobile.length == 0 && mobile.length < 11 && !mobileReg.test(mobile)) {
      return false;
    }else{
      return true;
    }
  },
  verifyPwd:function(pwd){
    if(pwd.length<6){
      return false;
    }else{
      return true;
    }
  },
  showVerifyToast: function (msg) {
    wx.showToast({
      title: msg,
      icon: 'success',
      duration: 2000
    });
  }
}


module.exports = {
  isLogin: isLogin,
  helper: helper
}