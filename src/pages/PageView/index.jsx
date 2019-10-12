import React, { useState, useCallback, useRef } from 'react'
import dayjs from 'dayjs'
import PageVisibility from 'react-page-visibility';
import HOCPage from '@components/HOCPage'
import Timer from '@components/Timer/index'
import configs from '../config/index.js'
import './index.less'

const CONFIG_NAME = 'pageview'
const PAGE_IS_VISIBLE = true

function Container() {
  const $scrollContainer = useRef(null)
  const [logs, setLog] = useState([
    '欢迎使用🎉：现在可以尝试切换到其他的tab页'
  ])
  const [status, setStatus] = useState('')
  // 缓存需要执行的回到函数
  const memoizedCallback = useCallback(
    () => {
      // 当前scroll-console是否滚动到了最底端
      if (status === PAGE_IS_VISIBLE) {
        const $container = $scrollContainer.current
        const { clientHeight, scrollHeight } = $container
        $container.scrollTop = scrollHeight - clientHeight
      }
    }, 
    [status],
  )
  const handleVisibilityChange = isVisible => {
    const currentTime = dayjs().format('YYYY-MM-DD a hh:mm:ss')
    const visibleLogText = isVisible === PAGE_IS_VISIBLE ? 
      `o((>ω< ))o ～～ 访问页面的时间点是：${currentTime}` : `(￣(oo)￣)ﾉ ～～离开页面的时间点是：${currentTime}`
    setLog(logs.concat(visibleLogText))
    setStatus(isVisible)
    memoizedCallback()
  }
  return (
    <PageVisibility onChange={handleVisibilityChange}>
      <div className="page-view">
        <ul ref={$scrollContainer}>
          {
            logs.map((log, index) => <li key={index}>{log}</li>)
          }
          <span className="blink"></span>
        </ul>
        <Timer status={status} />
      </div>
    </PageVisibility>
  )
}


export default HOCPage(configs.get(CONFIG_NAME), Container)