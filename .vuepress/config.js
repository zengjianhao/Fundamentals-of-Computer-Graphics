import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
    lang: 'zh-CN',
    base: '/Fundamentals-of-Computer-Graphics/',
    // 插件配置
    plugins: [
        searchPlugin({}),
    ],
    // 主题配置
    theme: hopeTheme({
        darkmode: "switch",
        pure: true,
        // 主题插件
        plugins: {
            mdEnhance: {
                katex: true,
                align: true,
                footnote: true,
            },
        },

        home: "/README.md",
        // 导航栏
        navbar: [
            { text: "Home", link: "/README.md" },
            { text: "Content", link: "/content.md" },
            { text: "Original", link: "/original.md" },
            { text: "Table", link: "/table.md" }
        ],
        navbarLayout: { start: ["Brand", "Links",], end: ["Language", "Repo", "Outlook", "Search"] },
        // 侧边栏
        sidebar: {
            "/notes/": [
                "/notes/01_Introduction.md",
                "/notes/02_Miscellaneous_Math.md",
                "/notes/03_Raster_Images.md"
            ],
            "/notes_en": [
                "/notes_en/01_Introduction.md",
                "/notes_en/02_Miscellaneous_Math.md",
                "/notes_en/03_Raster_Images.md"
            ]
        },
        // 路径导航
        breadcrumb: false,
        breadcrumbIcon: false,
        prevLink: false,
        nextLink: false,

        // Meta
        lastUpdated: false,
        contributors: false,
        editLink: false,

        // 标题
        titleIcon: false,
        pageInfo: false,

        logo: null,
        logoDark: null,

    }),
});
