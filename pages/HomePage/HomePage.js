Page({
  data: {
    imgUrls:[
      'http://pj94pq3zn.bkt.clouddn.com/homeBanner1.png',
      'http://pj94pq3zn.bkt.clouddn.com/homeBanner2.png'
    ],
    isAgent:false,
    apply:true
  },
  onShow: function (options) {

  },
  onLoad: function (options) {
    
  },
  //产品详情
  toDetail(){
    wx.navigateTo({
      url: '../ProductDetail/ProductDetail',
    })
  },
  //代理商进入详情
  toAgentActivity(){
    wx.navigateTo({
      url: '../AgentActicityDetail/AgentActicityDetail?Soldout=' + this.data.Soldout,
    })
  },
  //非代理商进入详情
  toOrdinaryActivity(){
    wx.navigateTo({
      url: '../UserActivityDetail/UserActivityDetail?apply=' + this.data.apply,
    })
  }
})