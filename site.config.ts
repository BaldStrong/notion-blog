import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '44d1b472570b4ee6ad5eb821edce6ab5',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "BaldStrong's Logs Cabin",
  domain: 'baldstrong.eu.org',
  author: 'BaldStrong',

  // open graph metadata (optional)
  description: '专注技术、持续学习',

  // social usernames (optional)
  twitter: 'bald__strong',
  github: 'baldstrong',
  linkedin: '',
  // zhihu: 'fan-zhong-li-luo-xie',
  language: 'zh',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: "https://laomiao.site/page-icon.png",
  defaultPageCover: "https://laomiao.site/page-conver.jpg",
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '44c0ebd7448e4a8984ad0a5a7ada2c06'
    }
  ]
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: '9d3cf695ba0f44e787fb3f9e6aa9fd25'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
