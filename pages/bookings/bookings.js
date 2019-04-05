// pages/bookings/bookings.js
const app = getApp();

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
    console.log(options)
    // api: http://localhost:3000/api/v1/bookings

    // this.setData({
    //   user_id: options.user_id
    // })

  },


  showSpace(e) {
    const data = e.currentTarget.dataset;
    const space = data.space;
    wx.navigateTo({
      url: `../spaceshow/spaceshow?id=${space.id}`
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
    let page = this;
    const userId = app.globalData.userId;
  

    // // Display toast when loading
    // wx.showToast({
    //   title: 'Updating',
    //   icon: 'success',
    //   duration: 3000
    // });

    // Get api data
  wx.request({
    // url: `http://localhost:3000/api/v1/users/${userId}`,
    url: `https://spaceshare-frank657.herokuapp.com/api/v1/users/${userId}`,
  success(res) {
    console.log(res)
    const bookings = res.data.bookings;

    console.log("index is here")
    //     // Update local data
  page.setData({
  bookings: bookings
   });

    //     wx.hideToast();
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