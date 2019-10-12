
import React from 'react'
import { Typography } from 'antd'
const { Text } = Typography

const apiInfo = (
  <div>
    <p>页面可见性 API对于节省资源和提高性能特别有用，它使页面在文档不可见时避免执行不必要的任务。</p>
    <br />
    <Text code>使用情景:</Text>
    <ul style={{ paddingLeft: 10 }}>
      <li>1.网站有图片轮播效果，只有在用户观看轮播的时候，才会自动展示下一张幻灯片。</li>
      <li>2.显示信息仪表盘的应用程序不希望在页面不可见时轮询服务器进行更新。</li>
      <li>3.页面想要检测是否正在渲染，以便可以准确的计算网页浏览量</li>
      <li>4.当设备进入待机模式时，网站想要关闭设备声音（用户按下电源键关闭屏幕）</li>
    </ul>
  </div>
)
const config = {
  title: 'Page Visibility API',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API',
  github: 'https://github.com/pgilad/react-page-visibility',
  apiInfo,
  demoInfo: '统计用户在当前页面停留的时间，如果用户切换tab到其他页面，统计时长停止'
}

export default config