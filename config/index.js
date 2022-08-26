const CONFIG = {
  // ================================基础配置 - 无需修改================================
  // 和风天气API
  HEFENG_API_KEY: "2b28f42e1d8b4e56bf50edbcf8d8950e",

  // ================================高级配置 - 需要修改================================

  // 微信公众号的appID
  APP_ID: "wx06f5ac10fefbceb4",

  // 微信公众号的appsecret
  APP_SECRET: "2d8307b8176db052c5190e3f64fb4f7f",

  // 微信公众号的模板ID
  TEMPLATE_ID: "R2-Zq6R-vbNYAZkC5TFFic-9rwfqdmV3uu7PXB34nvY",

  // 天行API的key
  TXApiKey: "4275fd11fb0f83283d740d60439a8214",

  // 用户列表 可配置多个用户
  user: [
  
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "hh",
      // 用户列表的`微信号`
      userId: "oPiQI6P82Aa502rEits2tPJBetlI",
      // 星座
      star: "水瓶座",
      // 生日 - 格式：08-22
      birthday: "08-17",
      // 城市 - 格式：支持省市县区
      city: "历下区",
    },
  ],

  // 计划旅游日 - 格式：2022-05-20
  tourism: "2022-12-12",

  // 恋爱纪念日 - 格式：2020-07-06
  loveDay: "2020-07-06",

  // ================================功能配置 - 可选修改================================

  // 默认全部开启，关闭可以加快响应速度
  // true 开启，false 关闭
  plugins: {
    // 天气预报
    weather: true,
    // 天气接口 默认接口1，可选接口1、2，接口2暂时无法使用
    weatherType: 1,
    // 星座运势
    star: true,
  },
};

module.exports = {
  CONFIG,
};
