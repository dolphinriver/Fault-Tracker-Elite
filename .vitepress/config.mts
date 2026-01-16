import { defineConfig } from 'vitepress'

export default defineConfig({
  // 必须加！对应你的GitHub仓库名，匹配子路径
  base: '/Fault-Tracker-Elite/',
  srcDir: 'docs', // 之前配置的文档源目录
  title: "FaultTracker Elite",
  description: "Track, analyze and conquer every mistake on your way to mastery.",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '行测', link: '/gongkao/xingce' },
      { text: '申论', link: '/gongkao/shenlun' },
      { text: '公基', link: '/gongkao/gongji' },
      { text: '面试', link: '/gongkao/mianshi' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})