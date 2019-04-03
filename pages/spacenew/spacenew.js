// pages/spacenew/spacenew.js
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

    // New Space Submission
    bindSubmit: function (s) {

      var name = s.detail.value.name;
      var address = s.detail.value.address;
      var spots = s.detail.value.available_spots;
      var picture = e.detail.value.picture;
      var price = e.detail.value.price

      let space = {
        name: name,
        address_details: address,
        spots: spots,
        picture: picture,
        price: price
        
      }

      // Get api data
      wx.request({
        url: `"https://spaceshare-frank657.herokuapp.com/api/v1/spaces"`,
        method: 'POST',
        data: space,
        success() {
          // set data on me page and show
          wx.redirectTo({
            url: '/pages/me/me'
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