// pages/BuyProduct/BuyProduct.js
Page({
  data: {
    yearList: ['1年', '2年', '3年', '4年', '5年', '6年','7年'],
    isbuy:['是','否'],
    isMask:false,
    isAddYear:-1,
    isAddBuy:-1,
    count:1,
    isYears:'',
    isBuys:Boolean
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
      isAddYear: p.currentTarget.dataset.index,
      isYears: p.currentTarget.dataset.index+1
    })
  },
  //是否配件
  chooseBuy(p){
    console.log(p.currentTarget.dataset.index)
    this.setData({
      isAddBuy: p.currentTarget.dataset.index
    })
    if (p.currentTarget.dataset.index == 0){
      this.setData({
        isBuys:true
      })
    }else{
      this.setData({
        isBuys: false
      })
    }
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
    this.setData({ isMask:false})
    wx.navigateTo({
      url: '../CreateOrder/CreateOrder?isYears=' + this.data.isYears + '&isBuys=' + this.data.isBuys + '&count=' + this.data.count,
    })
  },
  // 减少
  reduce(){
    if (this.data.count < 2){
      return
    }
    this.setData({
      count: this.data.count - 1
    })
  },
  // 增加
  add(){
    this.setData({
      count: this.data.count+1
    })
  }
})