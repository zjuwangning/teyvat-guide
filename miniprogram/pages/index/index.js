// index.js
// const app = getApp()
const { envList } = require('../../envList.js');

Page({
  data: {
    showUploadTip: false,
    powerList: [{
      title: '角色材料',
      tip: '角色天赋升级材料',
      page: "talent"
    }, {
      title: '武器材料',
      tip: '武器突破材料',
      page: ""
    }, {
      title: '周本材料',
      tip: '天赋升级周本材料',
    }, {
      title: '消耗计算',
      tip: '突破升级消耗计算器',
    }],
    envList,
    selectedEnv: envList[0],
    haveCreateCollection: false
  },

  onClickPowerInfo(e) {
    this.jumpPage(this.data.powerList[e.currentTarget.dataset.index]['page'])
  },


  jumpPage(page) {
    wx.navigateTo({
      url: `/pages/${page}/index`,
    });
  },

  onClickDatabase(powerList) {
    wx.showLoading({
      title: '',
    });
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.selectedEnv.envId
      },
      data: {
        type: 'createCollection'
      }
    }).then((resp) => {
      if (resp.result.success) {
        this.setData({
          haveCreateCollection: true
        });
      }
      this.setData({
        powerList
      });
      wx.hideLoading();
    }).catch((e) => {
      console.log(e);
      this.setData({
        showUploadTip: true
      });
      wx.hideLoading();
    });
  }
});
