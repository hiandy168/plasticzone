//index.js

//获取应用实例
var app = getApp();
Page({
  data: {
    modalHidden: true,
    actionSheetHidden: true,
    name: [],
    isRelease: "",
    isIndex: "",
    isHeadline: "",
    isMyzone: "",
    keywords: "",
    page: 1,
    size: 10,
    sortField: "default",
    sortOrder: "desc",
    sortFieldTxt: "综合排序",
    token: ""
  },
  toRelease: function () {
    this.setData({
      token: wx.getStorageSync('token')
    });
    if (this.data.token) {

    } else {
      this.setData({
        modalHidden: false
      })
    }
  },
  modalConfirm: function (e) {
    this.setData({
      modalHidden: true
    });
    wx.navigateTo({
      url: '../../pages/login/login'
    })
  },
  modalCancel: function (e) {
    this.setData({
      modalHidden: true
    })
  },
  toIndex: function () {

  },
  fnSortField: function () {
    this.setData({
      sortField: "default",
      actionSheetHidden: !this.data.actionSheetHidden,
      sortFieldTxt: "综合排序"
    })

    var _this = this;
    wx.request({
      url: app.globalData.apiHost + '/getPlasticPerson',
      data: {
        keywords: _this.data.keywords,
        page: _this.data.page,
        size: _this.data.size,
        sortField: _this.data.sortField,
        token: wx.getStorageSync('token')
      },
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        if (res.data.err == 0) {
          _this.setData({
            name: res.data.persons
          });
        }
      },
      fail: function (res) {

      },
      complete: function () {

      }
    });
  },
  fnSortOrder: function () {
    this.setData({
      sortField: "input_time",
      sortOrder: "desc",
      actionSheetHidden: !this.data.actionSheetHidden,
      sortFieldTxt: "最近注册"
    })
    var _this = this;
    wx.request({
      url: app.globalData.apiHost + '/getPlasticPerson',
      data: {
        keywords: _this.data.keywords,
        page: _this.data.page,
        size: _this.data.size,
        sortField: _this.data.sortField,
        sortOrder: _this.data.sortOrder,
        token: wx.getStorageSync('token')
      },
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        if (res.data.err == 0) {
          _this.setData({
            name: res.data.persons
          });
        }
      }
    });
  },
  fnPlasticPerson: function (keywords, page, size, sortField, sortOrder) {
    var _this = this;
    wx.request({
      url: app.globalData.apiHost + '/getPlasticPerson',
      data: {
        keywords: keywords,
        page: page,
        size: size,
        sortField: sortField,
        sortOrder: sortOrder,
        token: wx.getStorageSync('token')
      },
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        if (res.data.err == 0) {
          _this.setData({
            name: res.data.persons
          });
          wx.stopPullDownRefresh();
        }
      }
    });

  },
  actionSheetTap: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    //new app.Footer();

    var router = getCurrentPages()[0].__route__;
    console.log(router);
    switch (router) {
      case "pages/release/release":
        this.setData({ isRelease: "footerOn" });
        break;
      case "pages/index/index":
        this.setData({ isIndex: "footerOn" });
        break;
      case "pages/index/index":
        this.setData({ isIndex: "footerOn" });
        break;
      case "pages/index/index":
        this.setData({ isIndex: "footerOn" });
        break;
    }

    this.fnPlasticPerson(this.data.keywords, this.data.page, this.data.size, this.data.sortField, "");

  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
    //String3
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
    //String4
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
    //String5
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
    //String6
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
    //String7
    this.fnPlasticPerson(this.data.keywords, this.data.page, this.data.size, this.data.sortField, this.data.sortOrder);
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
    //String8
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})