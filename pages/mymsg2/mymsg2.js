//myfans.js

//获取应用实例
var app = getApp();
Page({
  data:{
    resMsg:[]
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    var _this = this;
    wx.request({
      url: app.globalData.apiHost + '/getRobotMsg',
      data: {
        page: 1,
        size: 100,
        token: wx.getStorageSync('token')
      },
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.err == 0) {
          _this.setData({
            resMsg: res.data.data
          });
        }
      }
    });

  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
   
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
  }
})