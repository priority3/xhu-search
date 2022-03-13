// pages/info/info.js
const app  =  getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // bottomHeight:0,
    infolist:[{
      id:1,
      avatarUrl:"../../static/img/avatar1.jpg",
      name:"萱儿",
      infoCont:"你开心就好了得啊啊",
      info:1,
      time:"18:20"

    },{
      id:2,
      avatarUrl:"../../static/img/avatar2.jpg",
      name:"喵喵",
      infoCont:"你今天吃饭了吗",
      info:2,
      time:"18:23"
    },{
      id:3,
      avatarUrl:"../../static/img/avatar3.jpg",
      name:"天天",
      infoCont:"听说你得病了",
      info:4,
      time:"19:20"
    },{
      id:4,
      avatarUrl:"../../static/img/avatar4.jpg",
      name:"狗子",
      infoCont:"噢 你得书",
      time:"14:20"
    },{
      id:5,
      avatarUrl:"../../static/img/avatar5.jpg",
      name:"猴子",
      infoCont:"挺好的",
      time:"20:20"
    },{
      id:6,
      avatarUrl:"../../static/img/avatar6.jpg",
      name:"小郑",
      infoCont:"噢",
      time:"18:29"
    },{
      id:7,
      avatarUrl:"../../static/img/avatar7.jpg",
      name:"老张",
      infoCont:"哦",
      time:"8:32"
    },{
      id:8,
      avatarUrl:"../../static/img/avatar8.jpg",
      name:"玩偶",
      infoCont:"哈窦娥",
      time:"21:45"
    },{
      id:9,
      avatarUrl:"../../static/img/avatar9.jpg",
      name:"工具人",
      infoCont:"得得得",
      time:"18:02"
    }],
    // title active
    activeNames: ['1'],
  },
  // title active event
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   bottomHeight:app.getBottomHeight()
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTabBar().init();
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})