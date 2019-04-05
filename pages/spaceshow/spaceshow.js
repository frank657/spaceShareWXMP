// pages/spacesshow/spacesshow.js
var app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
  },

  bookSpace: function (s) {
    console.log(this.data.space_id)
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({space_id: options.id})
    console.log(options.id)
    let page = this
    wx.request({
      url: `https://spaceshare-frank657.herokuapp.com/api/v1/spaces/${options.id}`,
      // url: `http://localhost:3000/api/v1/spaces/${options.id}`,
      
      success(res) {
        console.log(res.data)
        page.setData(res.data)
      }
    })
  }, 

  bookSpace: function (e) {
    console.log('Trying to book a space')
    console.log(e)
    wx.navigateTo({
    url: `../bookingsnew/bookingsnew?spaceId=${e.currentTarget.dataset.id}`
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