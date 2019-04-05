const app = getApp()
// pages/map/map.js

Page({

  /**
   * Page initial data
   */
  data: {
    lt: "31.1810958",
    lg: "121.6045309",
    sc: '14',
    mk: [
    ]
  },

  markertap(e) {
    console.log(e.markerId)
  }, 
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // let that = this
    // wx.getLocation({
    //   type: 'wgs84', // **1
    //   success: function (res) {
    //     var latitude = res.latitude
    //     var longitude = res.longitude
    //     var speed = res.speed
    //     var accuracy = res.accuracy
    //     that.setData({ latitude, longitude, speed, accuracy })
    //   }
    // })

    
    app.globalData.spaces.forEach((space) => {
      if (space.latitude !== null) {
        this.data.mk.push({
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
console.log(this.data.mk)
    // }//, add more markers here


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