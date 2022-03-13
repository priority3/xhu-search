// pages/PubThing/PubThing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    marker:{},
    // 发布的图片
    imags:[],
    isPrimary:["primary","default"],
    itmeBox:["一卡通","钱包","书本","钥匙","手机","其他"],
    itemStyle:["border: 2rpx solid rgba(240, 227, 48, 1);color: rgb(240, 227, 48);"],
    // 文本描述
    textValue:"",
    // 发布类型
    lostOrPick:"丢失",
    // 物品类型
    thingCategory:"一卡通",
    // 院系/部门
    department:"",
    // 丢失/上交地点
    position:"",
    // 练习方式
    contactInfo:""

  },
  onClick(event) {
    const { name } = event.currentTarget.dataset;
    let dePrimary = ["default","default"]
    dePrimary[name] = "primary"
    let lostOrPick = ""
    if(name === "0"){
      lostOrPick = "丢失"
    }else[
      lostOrPick = "捡到"
    ]
    this.setData({
      isPrimary:dePrimary,
      lostOrPick
    });
  
  },

  handleChangeItem(e){
    const id = e.currentTarget.dataset.id
    let itemStyle = []
    itemStyle[id] = "border: 2rpx solid rgba(240, 227, 48, 1);color: rgb(240, 227, 48);"
    this.setData({
      itemStyle,
      thingCategory:this.data.itmeBox[id]
    })
  
  },

  handleDepartment(e){
    // console.log(e);
    this.setData({
      department:e.detail.value
    })
  },
  handlePosition(e){
    this.setData({
      position:e.detail.value
    })
  },
  handleContactInfo(e){
    this.setData({
      contactInfo:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option){
    // console.log(option.query)
    const eventChannel = this.getOpenerEventChannel()
    const _this = this
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    // eventChannel.on('handleMarker', function(marker) {
    //   _this.setData({
    //     marker
    //   })
    // })
  },

  chooseImg(){
    let imags = this.data.imags;
    const _this = this;
    wx.chooseImage({
      // 默认原图、压缩图都可以
      // 默认相机、相册都可以
      success:(res)=>{
        let tempFilePaths = res.tempFilePaths;
        // console.log(tempFilePaths);
        for(let i = 0 ; i < tempFilePaths.length ; i++){
          if(imags.length > 9){
            // 最多九张图片
            _this.setData({
              imags,
            })
            return false
          }else{
            imags.push(tempFilePaths[i]);
          }
        }
        _this.setData({
          imags
        })
      },
      complete: (res) => {
        
      },
    })
  },

  delImage(e){
    const {imgid} = e.currentTarget.dataset
    let imags = this.data.imags
    this.setData({
      imags:imags.filter((item,index) => {
        return index !== imgid
      })
    })
  },
  // 预览
  previewImg(e){
    const {imgid} = e.currentTarget.dataset
    wx.previewImage({
      urls: [this.data.imags[imgid]],
    })
  },

  handleStorgeText(e){
    this.setData({
      textValue:e.detail.value
    })
  },



  // 发布程序
  handlePub(){
    const {textValue,department,position,contactInfo} = this.data
    
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