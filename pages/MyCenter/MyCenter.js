// pages/MyCenter/MyCenter.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  onShow: function () {

  },
  toAssistant(){
    wx.navigateTo({
      url: '../AssistantList/AssistantList',
    })
  },
  toWallet(){
    wx.navigateTo({
      url: '../MyWallet/MyWallet',
    })
  },
  toProfit() {
    wx.navigateTo({
      url: '../MyProfit/MyProfit',
    })
  },
  toBonusDetails(){
    wx.navigateTo({
      url: '../BonusDetails/BonusDetails',
    })
  },
  toMyCustomer(){
    wx.navigateTo({
      url: '../MyCustomer/MyCustomer',
    })
  },
  callPhone(){
    wx.makePhoneCall({
      phoneNumber: '400-818181'
    })
  },
  toAssistantCode(){
    wx.navigateTo({
      url: '../AssistantCode/AssistantCode',
    })
  },
  toMyCode() {
    wx.navigateTo({
      url: '../MyCode/MyCode',
    })
  }
})