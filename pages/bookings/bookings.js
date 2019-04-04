// pages/bookings/bookings.js
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
    let page = this;
    console.log("index is here")

    // // Display toast when loading
    // wx.showToast({
    //   title: 'Updating',
    //   icon: 'success',
    //   duration: 3000
    // });

    // Get api data
    wx.request({
      url: "http://localhost:3000/api/v1/bookings",
      method: 'GET',
      success(res) {
        const bookings = res.data.bookings;

        // Update local data
        page.setData({
          bookings: bookings
        });

        wx.hideToast();
      }
    });
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