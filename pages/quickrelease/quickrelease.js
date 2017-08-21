//quickerelease.js

//获取应用实例
var app = getApp();
Page({
  data: {
    mode: 0,
    model:"",
    f_name:"",
    store_house:"",
    price:"",
  },
  toBack: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  lookSwitch: function (event) {
    this.setData({
      mode: event.currentTarget.dataset.id
    });
  },
  modelInput:function(e){
    this.setData({
      model: e.detail.value
    })
  },
  fnameInput: function (e) {
    this.setData({
      f_name: e.detail.value
    })
  },
  priceInput: function (e) {
    this.setData({
      price: e.detail.value
    })
  },
  storehouseInput: function (e) {
    this.setData({
      store_house: e.detail.value
    })
  },
  releaseBuy:function(){
    var _this=this;
    wx.request({
      url: app.globalData.apiHost + '/releaseMsg/releaseNewDemand',
      data: {
        mode: 2,
        model: this.data.model.toUpperCase(),
        vendor: this.data.f_name,
        storehouse: this.data.store_house,
        price: this.data.price,
        type: 1,
        channel: 0,
        content: ""
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-UA': wx.getStorageSync('XUA')
      },
      success: function (res) {
        if (res.data.err == 0) {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2500
          })
        }else{
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2500
          })         
        }
      },
      fail: function (res) {

      },
      complete: function () {

      }
    });
  },
  releaseSupply: function () {
    var _this = this;
    wx.request({
      url: app.globalData.apiHost + '/releaseMsg/releaseNewDemand',
      data: {
        mode: 2,
        model: this.data.model.toUpperCase(),
        vendor: this.data.f_name,
        storehouse: this.data.store_house,
        price: this.data.price,
        type: 2,
        channel: 0,
        content: ""
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-UA': wx.getStorageSync('XUA')
      },
      success: function (res) {
        if (res.data.err == 0) {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2500
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2500
          })
        }
      },
      fail: function (res) {

      },
      complete: function () {

      }
    });
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    var _this = this;

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