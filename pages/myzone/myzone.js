//myzone.js

//获取应用实例
var app = getApp();
Page({
  data: {
    buy: "",
    supply: "",
    points: "",
    fans: "",
    pay: "",
    invite: "",
    msg: "",
    msg2: "",
    c_name: "",
    name: "",
    mobile: "",
    thumb: "",
    is_pass: "",
    modalHidden: true,
    isRelease: "",
    isIndex: "",
    isHeadline: "",
    isMyzone: "",
    memberlevel:""
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
  toMysupply: function () {
    this.setData({
      token: wx.getStorageSync('token')
    });
    if (this.data.token) {
      wx.navigateTo({
        url: '../../pages/mysupply/mysupply'
      })
    } else {
      this.setData({
        modalHidden: false
      })
    }
  },
  toMybuy: function () {
    this.setData({
      token: wx.getStorageSync('token')
    });
    if (this.data.token) {
      wx.navigateTo({
        url: '../../pages/mybuy/mybuy'
      })
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
  toHelp: function () {
    this.setData({
      token: wx.getStorageSync('token')
    });
    if (this.data.token) {
      wx.navigateTo({
        url: '../../pages/help/help'
      })
    } else {
      this.setData({
        modalHidden: false
      })
    }
  },
  toMypay: function () {
    this.setData({
      token: wx.getStorageSync('token')
    });
    if (this.data.token) {
      wx.navigateTo({
        url: '../../pages/mypay/mypay'
      })
    } else {
      this.setData({
        modalHidden: false
      })
    }
  },
  toMymsg: function () {
    this.setData({
      token: wx.getStorageSync('token')
    });
    if (this.data.token) {
      wx.navigateTo({
        url: '../../pages/mymsg/mymsg'
      })
    } else {
      this.setData({
        modalHidden: false
      })
    }
  },
  toMymsg2: function () {
    this.setData({
      token: wx.getStorageSync('token')
    });
    if (this.data.token) {
      wx.navigateTo({
        url: '../../pages/mymsg2/mymsg2'
      })
    } else {
      this.setData({
        modalHidden: false
      })
    }
  },
  toIndex: function () {
    if (wx.getStorageSync('token')) {
      wx.redirectTo({
        url: '../../pages/index/index',
        success: function (res) {
          // success
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    } else {

    }
  },
  logOut: function () {
    wx.request({
      url: app.globalData.apiHost + '/logOut',
      data: {
        token: wx.getStorageSync('token')
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data.err == 0) {
          wx.setStorageSync('token', '');
          wx.setStorageSync('XUA', '');
          wx.redirectTo({
            url: '../../pages/index/index',
            success: function (res) {
              // success
            },
            fail: function () {
              // fail
            },
            complete: function () {
              // complete
            }
          })

        }
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
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
  //个人信息数据
  getMyzone:function(){
    var _this = this;
    wx.request({
      url: app.globalData.apiHost + '/myInfo/myZone',
      data: {
        token: wx.getStorageSync('token')
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-UA': wx.getStorageSync('XUA')
      },
      success: function (res) {
        console.log(res.data);
        if (res.data.err == 0) {
          _this.setData({
            name: res.data.data.name,
            c_name: res.data.data.c_name,
            mobile: res.data.data.mobile,
            thumb: res.data.data.thumb,
            is_pass: res.data.is_pass,
            buy: res.data.s_in_count,
            supply: res.data.s_out_count,
            points: res.data.points,
            msg: res.data.leaveword,
            msg2: res.data.message,
            invite: res.data.introduction,
            fans: res.data.myfans,
            pay: res.data.myconcerns,
            memberlevel: res.data.data.memberlevel,
            rank: res.data.data.rank
          });

        } else if (res.data.err == 1) {
          _this.setData({
            modalHidden: false
          })
        }
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    });
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    var _this = this;
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
      case "pages/myzone/myzone":
        this.setData({ isMyzone: "footerOn" });
        break;
    }
    this.getMyzone();
    


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