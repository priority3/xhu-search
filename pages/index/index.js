
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:"",
    longitude:"",
    markers:[], //存放标记点
    poiName:"",
    isBut:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      type: 'wgs84',
      altitude: false,
      success: (result)=>{
        // console.log(result);
        const {latitude,longitude} = result
        this.setData({
          latitude,
          longitude
        })
        let marker = {
          id:this.data.markers.length,
          latitude:latitude,
          longitude:longitude,
          iconPath:"../../static/sign/cur.png",
          width:30,
          height:30,
          customCallout:{
            display:'BYCLICK',
            anchorX:1,
            anchorY:1
          }
        }
        let markers = []
        markers.push(marker)
        this.setData({
          markers
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    
    
  },
  handlePoiTap(params){
    console.log(params);
    const {name,latitude,longitude} = params.detail
    this.setData({
      poiName:name,
      latitude,
      longitude
    })
    let marker = {
      id:this.data.markers.length,
      latitude:latitude,
      longitude:longitude,
      iconPath:"../../static/sign/sig.png",
      width:30,
      height:30,
    }
    let markers = this.data.markers
    // 判断
    if(markers[markers.length-1].iconPath === "../../static/sign/sig.png" ){
      markers.pop()
    }
    markers.push(marker)
    this.setData({
      markers,
      isBut:false
    })

  },

  handleTap(params){
    console.log(params);
    const {latitude,longitude} = params.detail
    let marker = {
      id:this.data.markers.length,
      latitude:latitude,
      longitude:longitude,
      iconPath:"../../static/sign/sig.png",
      width:30,
      height:30,
    }
    let markers = this.data.markers
    // 判断
    if(markers[markers.length-1].iconPath === "../../static/sign/sig.png" ){
      markers.pop()
    }
    markers.push(marker)
    this.setData({
      poiName:"",
      markers,
      isBut:false
    })
    

  },

  addMarker(latitude,longitude){
    let marker = {
      id:this.data.markers.length,
      latitude:latitude,
      longitude:longitude,
      iconPath:"../../static/sign/unSelect.png",
      width:30,
      height:30,
      customCallout:{
        display:'BYCLICK',
        anchorX:1,
        anchorY:1
      }
    }
  },

  handleToPub(){
    // 将的到的经纬度放进缓存当中 在pub当中取 
    let marker = {
      latitude:this.data.latitude,
      longitude:this.data.longitude,
      poiName:this.data.poiName
    }
    // wx.setStorageSync('marker', marker);
    wx.navigateTo({
      url: '../PubThing/PubThing',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        pubAddMarker(marker){
          // 从pub中拿到指定号的marker
          console.log(marker);
        }
        
      },
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        // 将获得的部分 marker 传到pub
        res.eventChannel.emit('handleMarker', marker)
      }
    })
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 使用 wx.createMapContext 获取 map 上下文
    // this.mapCtx = wx.createMapContext('myMap')

    // 当前位置
    wx.clearStorage({
      complete: (res) => {
        console.log("yes")
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
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