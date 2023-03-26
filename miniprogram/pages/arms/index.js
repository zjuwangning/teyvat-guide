// index.js

Page({
  data: {
    tabs: [{
      name: "周一/四",
      count: 0
    }, {
      name: "周二/五",
      count: 0
    }, {
      name: "周三/六",
      count: 0
    }],
    colors: [
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
    ]
  },

  onLoad() {
    this.getImageList()
  },

  tabChange: function(e) {
    console.log(e.detail.current)
  },

  getImageList: function() {
    
  }
})