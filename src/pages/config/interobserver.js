
import React from 'react'
import { Typography } from 'antd'
const { Text } = Typography

const apiInfo = (
  <div>
    <p>API提供了一种异步观察目标元素与祖先元素或顶级文档viewport的交集中的变化的方法。</p>
    <br />
    <Text code>使用情景:</Text>
    <ul style={{ paddingLeft: 10 }}>
      <li>1.当页面滚动时，懒加载图片或其他内容。</li>
      <li>2.实现“可无限滚动”网站，也就是当用户滚动网页时直接加载更多内容，无需翻页。</li>
      <li>3.为计算广告收益，检测其广告元素的曝光情况。</li>
      <li>4.根据用户是否已滚动到相应区域来灵活开始执行任务或动画。</li>
    </ul>
  </div>
)
const config = {
  title: 'Intersection Observer API',
  mdn: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API',
  github: 'https://github.com/thebuilder/react-intersection-observer#readme',
  apiInfo,
  demoInfo: '滚动dog, 掌控小光头的情绪吧～'
}

export default config