// pages/me/me.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log('loading user info')
    const userInfo = app.globalData.userInfo
    console.log(userInfo)
    this.setData({
      userId: app.globalData.userId,
      nickName: userInfo.nickName,
      profile_picture: userInfo.avatarUrl,
      gender: userInfo.gender,
      language: userInfo.language,
      country: userInfo.country,
      province: userInfo.province,
      city: userInfo.city
    })
  
    const url = `http://localhost:3000/api/v1/users/${this.data.userId}`
    const page = this

    wx.request({
      url: url,
      success: function(res) {
        page.setData({
          manager: res.data.manager
        })
      },
    })
 },

  createSpace: function () {
    wx.navigateTo({
      url: `../spacenew/spacenew`
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
  // let page = this;
  // // const userId = app.globalData.userId;

  //   // Get api data
  //   wx.request({
  //     url: `http://localhost:3000/api/v1/users/${userId}`,
  //     method: 'GET',
  //     success(res) {
  //       console.log(res)
  //       const spaces = res.data.spaces;

  //       console.log("index is here")
  //   // Update local data
  //       page.setData({
  //         spaces: spaces
  //       });

  //     }
  //   });
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})