//index.js

//获取应用实例
var app = getApp();
var items = ['综合排序', '最近注册'];
Page({
  data: {
    actionSheetHidden: true,
    actionSheetItems: items,
    name: [],
    isRelease: "",
    isIndex: "",
    isHeadline: "",
    isMyzone: "",
    keywords:"",
    page:1,
    size:10,
    sortField: "input_time",
		sortOrder: "desc"
  },
  toRelease: function () {

  },
  toIndex: function () {

  },
  plasticPerson: function (keywords,page,size,sortField,sortOrder) {
    var _this = this;
    wx.request({
      url: app.globalData.apiHost + '/getPlasticPerson',
      data: {
        keywords: keywords,
        page: page,
        size: size,
        sortField: sortField,
				sortOrder: sortOrder,
        token: ""
      },
      method: "POST",
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

    this.plasticPerson(this.data.keywords,this.data.page,this.data.size,"","");

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
    this.plasticPerson(this.data.keywords,this.data.page,this.data.size,"","");
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