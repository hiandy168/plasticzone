//index.js
var common=require('../../common/common.js');
//获取应用实例
var app = getApp();

Page({
  data: {
    name: [],
    isRelease: "",
    isIndex: "",
    isHeadline: "",
    isMyzone: "",
    keywords: "",
    region:0,
    c_type:0,
    page: 1,
    size: 10,
    cType: "所有分类",
    token: "",
    moreHidden:true
  },
  toRelease: function () {
    this.setData({
      token: wx.getStorageSync('token')
    });
    if (this.data.token) {

    } else {

    }
  },
  toPersonInfo:function(event){
    console.log(event.currentTarget.dataset.id);
    common.isLogin(function (status) {
      if (status) {
        wx.request({
          url: app.globalData.apiHost + '/friend/getZoneFriend',
          data: {
            user_id: event.currentTarget.dataset.id,
            showType:1,
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
            }else if(res.data.err==99){
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
                        } else{
                          wx.showModal({
                            title: '塑料圈通讯录',
                            content: res.data.msg,
                            showCancel:false,
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
  toMyfans: function () {
    common.isLogin(function(status){
      if (status){
        wx.navigateTo({
          url: '../../pages/myfans/myfans'
        })
      }else{

      }
    })
  },
  toMypay: function () {
    common.isLogin(function (status) {
      if (status) {
        wx.navigateTo({
          url: '../../pages/mypay/mypay'
        })
      } else {

      }
    })
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

  },
  fnOther: function () {
    var _this = this;
    this.setData({
      c_type: 5,
      actionSheetHidden: !this.data.actionSheetHidden,
      cType: "其他",
      page: 1
    })
    this.getPlasticPerson(this.data.keywords, this.data.page, this.data.size, this.data.region, this.data.c_type);
  },
  searchPlastic:function(e){
    this.setData({
      keywords: e.detail.value,
      page: 1
    });
    this.getPlasticPerson(this.data.keywords, this.data.page, this.data.size, this.data.region, this.data.c_type);
  },
  actionSheetTap: function (e) {
    //筛选
    var _this=this;
    wx.showActionSheet({
      itemList: ['所有分类', '塑料制品厂', '原料供应商', '物流服务商','其他'],
      success: function (res) {
        console.log(res.tapIndex)
        switch (res.tapIndex) {
          case 0:
            _this.setData({
              c_type: 0,
              cType: "所有分类",
              page: 1
            })
            _this.getPlasticPerson(_this.data.keywords, _this.data.page, _this.data.size, _this.data.region, _this.data.c_type);
            
            break;
          case 1:
            _this.setData({
              c_type: 1,
              cType: "塑料制品厂",
              page: 1
            })
            _this.getPlasticPerson(_this.data.keywords, _this.data.page, _this.data.size, _this.data.region, _this.data.c_type);
            
            break;
          case 2:
            _this.setData({
              c_type: 2,
              cType: "原料供应商",
              page: 1
            })
            _this.getPlasticPerson(_this.data.keywords, _this.data.page, _this.data.size, _this.data.region, _this.data.c_type);

            break;
            case 3:
              _this.setData({
                c_type: 4,
                cType: "物流服务商",
                page: 1
              })
              _this.getPlasticPerson(_this.data.keywords, _this.data.page, _this.data.size, _this.data.region, _this.data.c_type);

            break;
            case 4:
              _this.setData({
                c_type: 5,
                cType: "其他",
                page: 1
              })
              _this.getPlasticPerson(_this.data.keywords, _this.data.page, _this.data.size, _this.data.region, _this.data.c_type);

            break;
          default:;
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  //获取通讯录数据
  getPlasticPerson:function(keywords,page,size,region,c_type){
    var _this=this;
    wx.request({
      url: app.globalData.apiHost + '/friend/getPlasticPerson',
      data: {
        keywords: keywords,
        page: page,
        size: size,
        region: region,
        c_type:c_type,
        token: wx.getStorageSync('token')
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-UA': wx.getStorageSync('XUA')
      },
      success: function (res) {
        var persons = res.data.persons;
        if (res.data.err == 0) {
          persons.forEach(function (v, i, a) {
            v.need_product = v.need_product.replace(/<\/?[^>]*>/g, '');
          });
          if(_this.data.page==1){
            _this.setData({
              name: persons
            });
            wx.stopPullDownRefresh();
          }else{
            persons.forEach(function (v, i, a) {
              v.need_product = v.need_product.replace(/<\/?[^>]*>/g, '');
            })
            _this.setData({
              name: _this.data.name.concat(persons)
            });   
          }
        }else if(res.data.err==1){
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
        } else if (res.data.err == 3){
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
          });
          _this.setData({ moreHidden: true });
        }
      },
      fail:function(res){

      },
      complete: function () {

      }
    });    
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    wx.setStorageSync('XUA', "weixin|5.5|" + wx.getStorageSync("userid") + "|" + wx.getStorageSync("token") + "|0|Win32|Win32|Win32|Netscape|Mozilla|0|0|0");
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
    this.getPlasticPerson(this.data.keywords, this.data.page, this.data.size, this.data.region, this.data.c_type);

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
    //var _this = this;
    this.setData({page: 1});
    this.getPlasticPerson(this.data.keywords, this.data.page, this.data.size, this.data.region, this.data.c_type);
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
    this.setData({moreHidden: false});
    var _this = this;
    _this.data.page++;
    this.getPlasticPerson(this.data.keywords, this.data.page, this.data.size, this.data.region, this.data.c_type);   
  }
})