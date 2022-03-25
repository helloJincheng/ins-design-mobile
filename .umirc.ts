import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'ins-design-mobile',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    {
      title: '组件',
      path: '/components',
    }, {
      title: '其他版本',
      children: [
        {
          title: 'v2',
          path: 'https://antd-mobile-v2.surge.sh',
        },
        {
          title: 'v3 alpha',
          path: 'https://antd-mobile-v3.surge.sh',
        },
      ],
    }, {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi',
    },
  ],
  menus: {'/components': [{
      title: '基础组件',
      children: ['/components/button'],
    }]
  },
  // themeConfig: {
  //   carrier: 'ins', // 设备状态栏左侧的文本内容
  //   hd: {
  //     // 根据不同的设备屏幕宽度断点切换高清方案
  //     rules: [
  //       { maxWidth: 375, mode: 'vw', options: [100, 750] },
  //       { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
  //     ],
  //     // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
  //   }
  // }
  // more config: https://d.umijs.org/config
});
