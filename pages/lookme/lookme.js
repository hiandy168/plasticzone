// lookme.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    size: 10,
    mode: 0,
    today: 0,
    totals: 0,
    history: [],
    lookmeShow: true,
    lookmeMsg: ""
  },
  lookSwitch: function (event) {
    this.setData({
      mode: event.currentTarget.dataset.id,
      page:1
    });
    wx.pageScrollTo({
      scrollTop: 0
    })
    this.getLookme(this.data.page, this.data.size, this.data.mode);
  },
  //获取谁看过我数据
  getLookme: function (page, size, mode) {
    var _this = this;
    wx.request({
      url: app.globalData.apiHost + '/myInfo/getViewHistoryDetails',
      data: {
        page: page,
        size: size,
        mode: mode,
        token: wx.getStorageSync('token')
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-UA': wx.getStorageSync('XUA')
      },
      success: function (res) {
        if (res.data.err == 0) {
          _this.setData({
            today: res.data.data.today,
            totals: res.data.data.totals,
            lookmeShow:true
          });         
          if (_this.data.page == 1) {
            _this.setData({
              history: res.data.data.history
            });
          } else {
            _this.setData({
              history: _this.data.history.concat(res.data.data.history)
            });
          }
          console.log(_this.data.history);
        }
      },
      fail: function (res) {

      },
      complete: function () {

      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLookme(this.data.page, this.data.size, this.data.mode);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.data.page++;
    this.getLookme(this.data.page, this.data.size, this.data.mode);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})