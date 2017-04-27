//protocol.js
//获取应用实例
var app = getApp();

Page({
  data: {
    id: "",
    user_id: "",
    name: "",
    c_name: "",
    mobile: "",
    thumb: "",
    sex: "",
    release: [],
    condition: true
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    this.setData({
      user_id: options.id
    });
    var _this = this;
    wx.request({
      url: app.globalData.apiHost + '/getZoneFriend',
      data: {
        userid: _this.data.user_id,
        token: wx.getStorageSync('token'),
        size: 10
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        _this.setData({
          name: res.data.data.name,
          c_name: res.data.data.c_name,
          mobile: res.data.data.mobile,
          thumb: res.data.data.thumb,
          sex: res.data.data.sex,
          is_pass: res.data.data.is_pass
        });
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    });

    wx.request({
      url: app.globalData.apiHost + '/getTaPur',
      data: {
        userid: _this.data.user_id,
        token: wx.getStorageSync('token'),
        size: 5,
        type: 2,
        page: 1
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data.err == 0) {
          _this.setData({
            release: res.data.data,
            condition: true
          });
        } else if (res.data.err == 2) {
          _this.setData({
            condition: false
          });
        }
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    });
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
    //String3
  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

  }
})