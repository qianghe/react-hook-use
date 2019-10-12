import React, { useState, useRef } from 'react'
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
  const controlScroll = () => {
    const $container = $scrollContainer.current
    const { clientHeight, scrollHeight } = $container
    $container.scrollTop = scrollHeight - clientHeight
  }
  const handleVisibilityChange = isVisible => {
    const currentTime = dayjs().format('YYYY-MM-DD a hh:mm:ss')
    const visibleLogText = isVisible === PAGE_IS_VISIBLE ? 
      `o((>ω< ))o ～～ 访问页面的时间点是：${currentTime}` : `(￣(oo)￣)ﾉ ～～离开页面的时间点是：${currentTime}`
    setLog(logs.concat(visibleLogText))
    setStatus(isVisible)
    isVisible && controlScroll()
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