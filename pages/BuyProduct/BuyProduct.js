// pages/BuyProduct/BuyProduct.js
Page({
  data: {
    yearList: ['1年', '2年', '3年', '4年', '5年', '6年','7年'],
    isbuy:['是','否'],
    isMask:false,
    isAddYear:-1,
    isAddBuy:-1
  },
  onLoad: function (options) {

  },
  preventTouchMove(){
    return
  },
  //显示弹窗
  showMask(){
    this.setData({
      isMask:true
    })
  },
  //选择年限
  chooseYear(p){
    console.log(p.currentTarget.dataset.index)
    this.setData({
      isAddYear: p.currentTarget.dataset.index
    })
  },
  //是否配件
  chooseBuy(p){
    console.log(p.currentTarget.dataset.index)
    this.setData({
      isAddBuy: p.currentTarget.dataset.index
    })
  },
  closeMask(p){
    // this.setData({
    //   isMask:false
    // })
    // console.log(p)
  },
  //确认
  sure(){
    if (this.data.isAddYear == -1){
      wx.showToast({
        title: '请选择年限',
        icon:'none'
      })
      return
    }
    if(this.data.isAddBuy == -1){
      wx.showToast({
        title: '请选择是否购买',
        icon: 'none'
      })
      return
    }
    wx.navigateTo({
      url: '../CreateOrder/CreateOrder',
    })
  }
})