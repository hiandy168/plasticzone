//mysupply.js

//获取应用实例
var app = getApp();
Page({
  data: {
		name: [],
		page: 1,
		condition: true,
		id: "",
		user_id: ""
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    var _this = this;
    wx.request({
      url: app.globalData.apiHost+'/getMyMsg',
      data: {
          type: 1,
			    page: _this.data.page,
          token: wx.getStorageSync('token'),
          size: 100
      },
      method: 'POST', 
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res){
        if (res.data.err == 0) {
          _this.setData({
            name: res.data.data
          });
        }
       
      },
      fail: function() {
        
      },
      complete: function() {
        
      }
    })

  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

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