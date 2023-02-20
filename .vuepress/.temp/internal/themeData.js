export const themeData = JSON.parse("{\"encrypt\":{},\"darkmode\":\"switch\",\"pure\":true,\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"home\":\"/README.md\",\"navbar\":[{\"text\":\"Home\",\"link\":\"/README.md\"},{\"text\":\"Content\",\"link\":\"/content.md\"},{\"text\":\"Original\",\"link\":\"/original.md\"},{\"text\":\"Table\",\"link\":\"/table.md\"}],\"navbarLayout\":{\"start\":[\"Brand\",\"Links\"],\"end\":[\"Language\",\"Repo\",\"Outlook\",\"Search\"]},\"sidebar\":{\"/notes/\":[\"/notes/01_Introduction.md\",\"/notes/02_Miscellaneous_Math.md\",\"/notes/03_Raster_Images.md\"],\"/notes_en\":[\"/notes_en/01_Introduction.md\",\"/notes_en/02_Miscellaneous_Math.md\",\"/notes_en/03_Raster_Images.md\"]},\"breadcrumb\":false,\"breadcrumbIcon\":false,\"prevLink\":false,\"nextLink\":false,\"lastUpdated\":false,\"contributors\":false,\"editLink\":false,\"titleIcon\":false,\"pageInfo\":false,\"logo\":null,\"logoDark\":null}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
