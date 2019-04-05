var app = getApp()

Page({
  data: {
    selectShow: false,
    selectData: ["District", "Huangpu", "Xuhui", "Changning", "Jing'an", "Putuo", "Hongkou", "Yangpu", "Minhang", "Baoshan", "Jiading", "Pudong", "Jinshan", "Songjiang", "Qingpu", "Fengxian", "Chongming"],
    index: 0,
  },

  selectTap() {
    this.setData({
      selectShow: !this.data.selectShow
    });
  },

  optionTap(e) {
    let Index = e.currentTarget.dataset.index;
    this.setData({
      index: Index,
      selectShow: !this.data.selectShow
    });
  },
  // })
  // const districts = ["Huangpu", "Xuhui", "Changning", "Jing'an", "Putuo", "Hongkou", "Yangpu", "Minhang", "Baoshan", "Jiading", "Pudong", "Jinshan", "Songjiang", "Qingpu", "Fengxian", "Chongming"]


  // Page({

  //   /**
  //    * Page initial data
  //    */
  //   data: {
  //     districts: districts
  //   },

  //   // bindChange: function (e) {
  //   //   const val = e.detail.value
  //   //   console.log(val)
  //   //   this.setData({
  //   //     district: this.data.districts[val[0]],
  //   //   })
  //   // },

  //   /**
  //    * Lifecycle function--Called when page load
  //    */
  //   onLoad: function (options) {
  //   },

  // New Space Submission
  bindSubmit: function (s) {
    const name = s.detail.value.name;
    const district = s.detail.value.district;
    const address = s.detail.value.address_details;
    const spots = s.detail.value.available_spots;
    const picture = s.detail.value.picture;
    const price = s.detail.value.price
    const amenities = s.detail.value.amenities

    const space = {
      name: name,
      district: district,
      address_details: address,
      available_spots: spots,
      picture: 'https://source.unsplash.com/800x450/?office',
      price: price,
      user_id: app.globalData.userId,
      wifi: amenities.includes('wifi'),
      sofa_area: amenities.includes('sofa'),
      purified_air: amenities.includes('air'),
      coffee: amenities.includes('coffee'),
      beer: amenities.includes('beer')
    }
    console.log(space)

    // Get api data
    wx.request({
      url: `https://spaceshare-frank657.herokuapp.com/api/v1/spaces`,
      method: 'POST',
      data: space,
      success(a) {
        console.log(11, a)
        // set data
        // wx.switchTab({
        wx.reLaunch({
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