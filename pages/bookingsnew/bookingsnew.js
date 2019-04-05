// pages/bookingsnew/bookingsnew.js
const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {

  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // console.log(33, app.globalData.userId)
    // console.log('checking which data are loading')
    // console.log(options.spaceId)
    this.setData({
      spaceId: options.spaceId
    })
  },

    // New booking Submission
    bindSubmit: function (s) {
      const date = s.detail.value.date;
      const user_id = app.globalData.userId;
      // const space_id = app.

      const booking = {
        date: this.data.date,
        user_id: app.globalData.userId,
        space_id: this.data.spaceId
        
      }
      console.log(booking)
      const page = this
      // Get api data
      wx.request({
        url: `https://spaceshare-frank657.herokuapp.com/api/v1/spaces/${page.data.spaceId}/bookings`,
        // url: `http://localhost:3000/api/v1/spaces/${page.data.spaceId}/bookings`,

        method: 'POST',
        data: booking,
        success(a) {
          console.log(11, a)
          // set data
          wx.switchTab({
            url: '/pages/bookings/bookings'
          });
        }
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