export const data = JSON.parse("{\"key\":\"v-e8b6c472\",\"path\":\"/notes/\",\"title\":\"Notes\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Notes\",\"article\":false},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
