// pages/ProductDetail/ProductDetail.js
Page({
  data: {
    
  },
  toBuy(){
    // wx.showModal({
    //   title: '提示',
    //   content: '您需扫描代理商二维码后才可购买',
    //   showCancel:false
    // })
    wx.navigateTo({
      url: '../BuyProduct/BuyProduct',
    })
  }
})