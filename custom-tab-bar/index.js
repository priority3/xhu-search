// index.js文件
Component({
  // borderStyle: "black",
  data: {
  active: 0,
  list: [
    {
      "url": "/pages/index/index",
      "icon": "../static/home.png",
      "selectIcon":"../static/home-active.png",
      "text": "首页"
    },
    {
      "url": "/pages/publish/publish",
      "icon": "../static/pub.jpg",
      "selectIcon":"../static/pub-active.jpg",
      "text": "发布"
    },
    {
      "url": "/pages/info/info",

      "icon": "../static/info.png",
      "selectIcon":"../static/info-active.png",
      "text": "消息"
    },
    {
      "url": "/pages/user/user",
      "icon": "../static/user.jpg",
      "selectIcon":"../static/user-active.jpg",
      "text": "我的"
    }
  ]
  },
  methods: {
  onChange(e) {
      console.log(e,'e')
      this.setData({},()=>{
        wx.switchTab({
          url: this.data.list[e.detail].url
        });
      });
  },
  init() {
      const page = getCurrentPages().pop();
      this.setData({
      　  active: this.data.list.findIndex(item => item.url === `/${page.route}`)
      });
      }
  }
});