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
    let page = this;

    // // Display toast when loading
    // wx.showToast({
    //   title: 'Updating',
    //   icon: 'success',
    //   duration: 3000
    // });

    // Get api data
    wx.request({
      url: "http://localhost:3000/api/v1/spaces",
      method: 'GET',
      success(spa) {
        const spaces = spa.data.spaces;

        // Update local data
        page.setData({
          spaces: spaces
        });

        wx.hideToast();
      }
    });
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