//myfans.js

//获取应用实例
var app = getApp();
Page({
  data:{
    page:1,
    name: []
  },
  //获取我的引荐数据
  getMyinvite: function (page) {
    var _this = this;
    wx.request({
      url: app.globalData.apiHost + '/myInfo/getMyIntroduction',
      data: {
        page: page,
        size: 10,
        token: wx.getStorageSync('token')
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-UA': wx.getStorageSync('XUA')
      },
      success: function (res) {
        console.log(res);
        if (res.data.err == 0) {
          if (_this.data.page == 1) {
            _this.setData({
              name: res.data.data
            });
          } else {
            _this.setData({
              name: _this.data.name.concat(res.data.data)
            });
          }

        }
      }
    });
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    var _this = this;
    this.getMyinvite(this.data.page);

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
    var _this = this;
    _this.data.page++;
    this.getMyinvite(this.data.page);
  }
})