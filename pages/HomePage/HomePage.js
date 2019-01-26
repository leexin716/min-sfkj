
const http = require('../../utils/http.js')
Page({
  data: {
    imgUrls:[
      'http://pkhotk7ch.bkt.clouddn.com/bannerOne.png',
      'http://pkhotk7ch.bkt.clouddn.com/bannerTwo.png'
    ],
    isAgent:false,
    apply:true
  },
  onShow: function (options) {

  },
  onLoad: function (options) {
    this.getHomeInfo(1)
    this.getHomeInfo(2)
  },
  //产品详情
  toDetail(){
    wx.navigateTo({
      url: '../BuyProduct/BuyProduct',
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
  },
  //获取bannert
  getHomeInfo(type){
    http.postReq('banner/list',{
      type:type
    },function(res){
      if(res){
        console.log(res)
      }
    })
  }
})