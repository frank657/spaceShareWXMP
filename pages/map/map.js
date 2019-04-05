const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
  },

  markertap(e) {
    console.log(e.markerId)

    console.log('Redirecting to show page')
    wx.navigateTo({
      url: `../spaceshow/spaceshow?id=${e.markerId}`
    });
  }, 
  /**
   * Lifecycle function--Called when page load
   */

// getLocation: function (e) {
//   wx.authorize({ scope: "scope.userLocation" })
// },

  onLoad: function (options) {
    let that = this

    const markers = []
    app.globalData.spaces.forEach((space) => {
      if (space.latitude !== null) {
        markers.push({
          iconPath: "/images/marker.png", // **1
          id: space.id,
          latitude: space.latitude,
          longitude: space.longitude,
          width: 35,
          height: 50,
          callout: { content: space.name, fontSize: 15, color: "#000000", padding: 10 }
        })
      }
    })
    
    wx.getLocation({
      type: 'wgs84', // **1
      success: function (res) {
        var lt = res.latitude
        var lg = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy

        markers.push({
          iconPath: "/images/marker_red.png", // **1
          id: 0,
          latitude: lt,
          longitude: lg,
          width: 25,
          height: 40, 
          callout: { content: 'Current \nlocation', fontSize: 15, color: "#000000", padding: 10 }
        })
        var mk = markers
        var sc = '14'

        that.setData({ lt, lg, speed, accuracy, sc, mk })
        // sc: '14'
        // mk: markers
      }
    })
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