const app = getApp()

Page({
  data: {},

  getUserInfo: function (e) {
    console.log('getting user info')
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
    wx.switchTab({
      url: '../../pages/spaces/spaces',
    })
  },
})
