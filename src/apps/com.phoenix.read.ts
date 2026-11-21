import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 1,
      name: '功能类-[上滑]继续看短剧',
      desc: '①读秒结束后自动上滑 ②未显示选集时每5秒上滑1次，兼容横屏广告',
      fastQuery: true,
      activityIds: [
        'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
        'com.dragon.read.component.shortvideo.impl.fullscreen.ShortSeriesLandActivity',
        'com.dragon.read.pages.main.MainFragmentActivity',
      ],
      rules: [
        {
          key: 1,
          name: '①读秒结束后自动上滑（横竖屏兼容）',
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.7',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200,
          },
          anyMatches: [
            '[text="上滑继续观看短剧"][visibleToUser=true]',
            '[text="上滑继续观看剧集"][visibleToUser=true]',
            '[text*="上滑继续观看"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/32430183',
          excludeSnapshotUrls: 'https://i.gkd.li/i/32430193',
          exampleUrls: 'https://e.gkd.li/248c4c7b-469c-459b-a489-23c123f35766',
        },
        {
          key: 2,
          name: '②未显示选集时每5秒自动上滑',
          actionCd: 4000,
          actionDelay: 1000,
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.7',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200,
          },
          excludeMatches: [
            '[text="选集" || text*="剧评"][visibleToUser=true]',
            '[text*="剧备字" || text="全屏观看"][height>0]',
            'TextView[text$="%"][text.length<5][height>-50 && height<1]',
          ],
          matches: '[text="选集"][visibleToUser=false]',
          snapshotUrls: [
            'https://i.gkd.li/i/32429827',
            'https://i.gkd.li/i/32429877',
            'https://i.gkd.li/i/32429830',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/32430107',
            'https://i.gkd.li/i/34210794',
            'https://i.gkd.li/i/32434872',
            'https://i.gkd.li/i/33193929',
            'https://i.gkd.li/i/32683026',
            'https://i.gkd.li/i/33289353',
            'https://i.gkd.li/i/34212237',
          ],
          exampleUrls: [
            'https://e.gkd.li/0128820c-4e8d-44ed-9ebc-ef2d5a062e26',
            'https://e.gkd.li/b70813b8-1377-4210-be6c-fe04f3c9c701',
            'https://e.gkd.li/38c5c9d1-9962-4e07-a7de-49999d3ddf2b',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      desc: '点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          matches: [
            '[text*="开启"][text*="提醒" || text*="通知"]',
            '[text="取消"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/33926663',
        },
      ],
    },
  ],
});
