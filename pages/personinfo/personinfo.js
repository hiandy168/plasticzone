//myzone.js

//获取应用实例
var app = getApp();
Page({
  data: {
    name: "",
    buy: "",
    sale: "",
    c_name: "",
    mobile: "",
    address: "",
    sex: "",
    status: "",
    thumb: "",
    need_product: "",
    id: "",
    user_id: "",
    content: "",
    is_pass: "",
    cardImg: "",
    mobile2: "",
    type: "",
    main_product: "",
    month_consum: "",
    buylist: [],
    supplylist: [],
    modalHidden: true,
    resMsg: "",
    personId: ""
  },
  modalConfirm: function (e) {
    var _this = this;
    this.setData({
      modalHidden: true
    });
    wx.request({
      url: app.globalData.apiHost2 + '/api/score/decScore',
      data: {
        type: 2,
        token: wx.getStorageSync('token'),
        other_id: _this.data.personId
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data.err == 0) {
          wx.request({
            url: app.globalData.apiHost + '/getZoneFriend',
            data: {
              token: wx.getStorageSync('token'),
              userid: _this.data.personId
            },
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
              if (res.data.err == 0) {
                _this.setData({
                  name: res.data.data.name,
                  c_name: res.data.data.c_name,
                  address: res.data.data.address,
                  mobile: res.data.data.mobile,
                  sex: res.data.data.sex,
                  need_product: res.data.data.need_product,
                  status: res.data.data.status,
                  main_product: res.data.data.main_product,
                  month_consum: res.data.data.month_consum,
                  thumb: res.data.data.thumb,
                  cardImg: res.data.data.thumbcard,
                  buy: res.data.data.buy,
                  sale: res.data.data.sale,
                  is_pass: res.data.data.is_pass,
                  type: res.data.data.type,
                  user_id: res.data.data.user_id
                });
              }
            },
            fail: function () {
              // fail
            },
            complete: function () {
              // complete
            }
          });
        } else if (res.data.err == 99) {
          _this.setData({
            modalHidden: false,
            resMsg: res.data.msg
          })
        } else if (res.data.err == 100) {
          _this.setData({
            modalHidden: false,
            resMsg: res.data.msg
          })
        }
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
  modalCancel: function (e) {
    this.setData({
      modalHidden: true
    });
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function (res) {
        // success
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
  toReleaseBuy: function (event) {
    //console.log(event);
    console.log(event.currentTarget.dataset.id);
    this.setData({
      token: wx.getStorageSync('token')
    });
    if (this.data.token) {
      wx.navigateTo({
        url: '../../pages/releasebuy/releasebuy?id=' + event.currentTarget.dataset.id
      })
    } else {

    }
  },
  toReleaseSupply: function (event) {
    //console.log(event);
    console.log(event.currentTarget.dataset.id);
    this.setData({
      token: wx.getStorageSync('token')
    });
    if (this.data.token) {
      wx.navigateTo({
        url: '../../pages/releasesupply/releasesupply?id=' + event.currentTarget.dataset.id
      })
    } else {

    }
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    this.setData({
      personId: options.id
    });
    var _this = this;
    wx.request({
      url: app.globalData.apiHost + '/getZoneFriend',
      data: {
        token: wx.getStorageSync('token'),
        userid: options.id
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data.err == 0) {
          _this.setData({
            name: res.data.data.name,
            c_name: res.data.data.c_name,
            address: res.data.data.address,
            mobile: res.data.data.mobile,
            sex: res.data.data.sex,
            need_product: res.data.data.need_product,
            status: res.data.data.status,
            main_product: res.data.data.main_product,
            month_consum: res.data.data.month_consum,
            thumb: res.data.data.thumb,
            cardImg: res.data.data.thumbcard,
            buy: res.data.data.buy,
            sale: res.data.data.sale,
            is_pass: res.data.data.is_pass,
            type: res.data.data.type,
            user_id: res.data.data.user_id
          });
        } else if (res.data.err == 99) {
          _this.setData({
            modalHidden: false,
            resMsg: res.data.msg
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

    wx.request({
      url: app.globalData.apiHost + '/getTaPur',
      data: {
        userid: options.id,
        page: 1,
        size: 5,
        type: 1,
        token: wx.getStorageSync('token'),
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        _this.setData({
          buylist: res.data.data,
        });

      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    });

    wx.request({
      url: app.globalData.apiHost + '/getTaPur',
      data: {
        userid: options.id,
        page: 1,
        size: 5,
        type: 2,
        token: wx.getStorageSync('token'),
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        _this.setData({
          supplylist: res.data.data,
        });

      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
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