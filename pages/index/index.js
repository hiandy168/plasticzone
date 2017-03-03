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
    token: "",
    moreHidden:true
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
  toMyfans: function () {
    this.setData({
      token: wx.getStorageSync('token')
    });
    if (this.data.token) {
        wx.navigateTo({
          url: '../../pages/myfans/myfans'
        })
    } else {
      this.setData({
        modalHidden: false
      })
    }
  },
    toMyinvite: function () {
    this.setData({
      token: wx.getStorageSync('token')
    });
    if (this.data.token) {
        wx.navigateTo({
          url: '../../pages/myinvite/myinvite'
        })
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
      sortFieldTxt: "综合排序",
      page:1
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
      sortFieldTxt: "最近注册",
      page: 1
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

    var _this = this;
    wx.request({
      url: app.globalData.apiHost + '/getPlasticPerson',
      data: {
        keywords: _this.data.keywords,
        page: 1,
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
    var _this = this;
    this.setData({page: 1});
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
          wx.stopPullDownRefresh();
        }
      }
    });
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
    this.setData({moreHidden: false});
    var _this = this;
    _this.data.page++;
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
            name: _this.data.name.concat(res.data.persons)
          });
        }
      },
      fail:function(){

      },
      complete:function(){
        _this.setData({
          moreHidden: true
        })
      }
    });    
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