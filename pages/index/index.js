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
      this.setData({
        modalHidden: false
      })
    }
  },
  toPersonInfo:function(event){
    //console.log(event);
    console.log(event.currentTarget.dataset.id);
    this.setData({
      token: wx.getStorageSync('token')
    });
    if (this.data.token) {
        wx.navigateTo({
          url: '../../pages/personinfo/personinfo?id='+event.currentTarget.dataset.id
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
  toMyzone: function () {
    this.setData({
      token: wx.getStorageSync('token')
    });
    if (this.data.token) {
        wx.redirectTo({
          url: '../../pages/myzone/myzone',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        });
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
    wx.redirectTo({
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
  //筛选
  fnAll: function () {
    var _this = this;
    this.setData({
      c_type:0,
      actionSheetHidden: !this.data.actionSheetHidden,
      cType: "所有分类",
      page:1
    })
    this.getPlasticPerson(this.data.keywords, this.data.page, this.data.size, this.data.region, this.data.c_type);
  },
  fnPlastic: function () {
    var _this = this;
    this.setData({
      c_type: 1,
      actionSheetHidden: !this.data.actionSheetHidden,
      cType: "塑料制品厂",
      page: 1
    })
    this.getPlasticPerson(this.data.keywords, this.data.page, this.data.size, this.data.region, this.data.c_type);
  },
  fnMaterial: function () {
    var _this = this;
    this.setData({
      c_type: 2,
      actionSheetHidden: !this.data.actionSheetHidden,
      cType: "原料供应商",
      page: 1
    })
    this.getPlasticPerson(this.data.keywords, this.data.page, this.data.size, this.data.region, this.data.c_type);
  },
  fnLogistics: function () {
    var _this = this;
    this.setData({
      c_type: 4,
      actionSheetHidden: !this.data.actionSheetHidden,
      cType: "物流服务商",
      page: 1
    })
    this.getPlasticPerson(this.data.keywords, this.data.page, this.data.size, this.data.region, this.data.c_type);
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
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
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
        persons.forEach(function (v, i, a) {
          v.need_product = v.need_product.replace(/<\/?[^>]*>/g, '');
        });
        console.log(persons);
        if (res.data.err == 0) {
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
          _this.setData({
            modalHidden: false
          })
        }
      },
      fail:function(res){

      },
      complete: function () {
        _this.setData({
          moreHidden: true
        });
      }
    });    
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载

    //new app.Footer();
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