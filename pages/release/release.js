// release.js
var common = require('../../common/common.js');
//获取应用实例
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isRelease: "",
    isIndex: "",
    isHeadline: "",
    isMyzone: "",
    release: [],
    page: 1,
    size: 10,
    token: "",
    sortField1: "ALL",
    sortField2: "",
    selectOn: "ALL",
    moreHidden: true
  },
  toPersonInfo: function (event) {
    console.log(event.currentTarget.dataset.id);
    common.isLogin(function (status) {
      if (status) {
        wx.request({
          url: app.globalData.apiHost + '/friend/getZoneFriend',
          data: {
            user_id: event.currentTarget.dataset.id,
            showType: 1,
            token: wx.getStorageSync('token')
          },
          method: "POST",
          header: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-UA': wx.getStorageSync('XUA')
          },
          success: function (res) {
            if (res.data.err == 0) {
              wx.navigateTo({
                url: '../../pages/personinfo/personinfo?id=' + event.currentTarget.dataset.id
              });
            } else if (res.data.err == 99) {
              console.log("lala");
              wx.showModal({
                title: '塑料圈通讯录',
                content: res.data.msg,
                success: function (res) {
                  if (res.confirm) {
                    wx.request({
                      url: app.globalData.apiHost + '/friend/getZoneFriend',
                      data: {
                        user_id: event.currentTarget.dataset.id,
                        showType: 5,
                        token: wx.getStorageSync('token')
                      },
                      method: "POST",
                      header: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'X-UA': wx.getStorageSync('XUA')
                      },
                      success: function (res) {
                        if (res.data.err == 0) {
                          wx.navigateTo({
                            url: '../../pages/personinfo/personinfo?id=' + event.currentTarget.dataset.id
                          });
                        } else {
                          wx.showModal({
                            title: '塑料圈通讯录',
                            content: res.data.msg,
                            showCancel: false,
                            success: function (res) {
                              if (res.confirm) {

                              }
                            }
                          });
                        }
                      },
                      fail: function (res) {

                      },
                      complete: function () {

                      }
                    });
                  } else if (res.cancel) {

                  }
                }
              });
            }
          },
          fail: function (res) {

          },
          complete: function () {

          }
        });

      } else {

      }
    })
  },
  toRelease: function () {

  },
  toMyzone: function () {
    common.isLogin(function (status) {
      if (status) {
        wx.redirectTo({
          url: '../../pages/myzone/myzone',
        })
      } else {

      }
    })
  },
  toQuickRelease: function () {
    common.isLogin(function (status) {
      if (status) {
        wx.navigateTo({
          url: '../../pages/quickrelease/quickrelease',
        })
      } else {

      }
    })
  },
  toIndex: function () {
    common.isLogin(function (status) {
      if (status) {
        wx.redirectTo({
          url: '../../pages/index/index',
        })
      } else {

      }
    })
  },
  select: function (event) {
    var _this = this;
    var status = event.currentTarget.dataset.id;
    switch (status) {
      case "ALL":
        wx.pageScrollTo({
          scrollTop: 0
        })
        wx.showLoading({
          title: '加载中',
        })
        this.setData({
          page: 1,
          sortField1: "ALL",
          sortField2: "",
          selectOn: "ALL"
        });
        this.getRelease(this.data.page, this.data.size, this.data.sortField1, this.data.sortField2);
        break;
      case "AUTO":
        wx.pageScrollTo({
          scrollTop: 0
        })
        wx.showLoading({
          title: '加载中',
        })
        this.setData({
          page: 1,
          sortField1: "",
          sortField2: "AUTO",
          selectOn: "AUTO"
        });
        this.getRelease(this.data.page, this.data.size, this.data.sortField1, this.data.sortField2);
        break;
      case "CONCERN":
        wx.pageScrollTo({
          scrollTop: 0
        })
        wx.showLoading({
          title: '加载中',
        })
        this.setData({
          page: 1,
          sortField1: "",
          sortField2: "CONCERN",
          selectOn: "CONCERN"
        });
        this.getRelease(this.data.page, this.data.size, this.data.sortField1, this.data.sortField2);
        break;
      case "DEMANDORSUPPLY":
        wx.pageScrollTo({
          scrollTop: 0
        })
        wx.showLoading({
          title: '加载中',
        })
        this.setData({
          page: 1,
          sortField1: "",
          sortField2: "DEMANDORSUPPLY",
          selectOn: "DEMANDORSUPPLY"
        });
        this.getRelease(this.data.page, this.data.size, this.data.sortField1, this.data.sortField2);
        break;
      default:
        break;
    }
  },
  //获取供求数据
  getRelease: function (page, size, sortField1, sortField2) {
    var _this = this;

    wx.request({
      url: app.globalData.apiHost + '/releaseMsg/getReleaseMsg',
      data: {
        page: page,
        size: size,
        sortField1: sortField1,
        sortField2: sortField2,
        token: wx.getStorageSync('token')
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-UA': wx.getStorageSync('XUA')
      },
      success: function (res) {
        if (res.data.err == 0) {
          if (_this.data.page == 1) {
            _this.setData({
              condition: res.data.err,
              release: res.data.data
            });
          } else {
            _this.setData({
              release: _this.data.release.concat(res.data.data)
            });
          }
        } else if (res.data.err == 1) {
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
          });
        } else if (res.data.err == 2) {
          _this.setData({
            condition: res.data.err,
            errmsg: res.data.msg,
            release: [],
            moreHidden: true
          });
        } else if (res.data.err == 3) {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
          });
          _this.setData({ moreHidden: true });
        } else if (res.data.err == 4) {
          _this.setData({
            condition: res.data.err,
            errmsg: res.data.msg,
            release: [],
            moreHidden: true
          });
        } else if (res.data.err == 6) {
          _this.setData({
            condition: res.data.err,
            errmsg: res.data.msg,
            release: [],
            moreHidden: true
          });
        } else if (res.data.err == 7) {
          _this.setData({
            condition: res.data.err,
            errmsg: res.data.msg,
            release: [],
            moreHidden: true
          });
        } else if (res.data.err == 8) {
          _this.setData({
            condition: res.data.err,
            errmsg: res.data.msg,
            release: [],
            moreHidden: true
          });
        } else if (res.data.err == 9) {
          _this.setData({
            condition: res.data.err,
            errmsg: res.data.msg,
            release: [],
            moreHidden: true
          });
        }
      },
      fail: function (res) {

      },
      complete: function () {
        wx.hideLoading()
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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

    this.getRelease(this.data.page, this.data.size, this.data.sortField1, this.data.sortField2);

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
    this.setData({ moreHidden: false });
    var _this = this;
    this.data.page++;
    this.getRelease(this.data.page, this.data.size, this.data.sortField1, this.data.sortField2);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {


  }
})