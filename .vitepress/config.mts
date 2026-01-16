import { defineConfig } from 'vitepress'

export default defineConfig({
  // 关键：指定文档源目录为 docs（你的 md 文件都在 docs 下）
  srcDir: 'docs',
  title: "FaultTracker Elite",
  description: "Track, analyze and conquer every mistake on your way to mastery.",
  themeConfig: {
    // 适配你的项目的导航栏（替换默认的 Examples）
    nav: [
      { text: '首页', link: '/' },
      { text: '行测', link: '/gongkao/xingce' },
      { text: '申论', link: '/gongkao/shenlun' },
      { text: '公基', link: '/gongkao/gongji' },
      { text: '面试', link: '/gongkao/mianshi' }
    ],

    // 侧边栏可以根据你的需求调整，暂时先注释掉默认示例
    // 如果你需要侧边栏，后续可以按自己的结构配置
    // sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})