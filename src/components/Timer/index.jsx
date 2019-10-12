import React, { useState, useEffect } from 'react'
import { Typography, Icon } from 'antd'
import './index.less'

const { Text } = Typography

const num2Time = number => {
  const hours = Math.floor(number / 3600) || 0
  const minus = Math.floor((number - hours * 3600) / 60) || 0
  const secs = number - minus * 60 - hours * 3600 || 0
  return [hours, minus, secs]
}
const PAGE_IS_VISIBLE = true

/**
 * Timer 用于秒表记时
 * @param {*} props 传入函数组件的props
 */
function Timer(props) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    // 计时器
    const timer = setTimeout(() => {
      setValue(value + 1)
    }, 1000)
    if (props.status === !PAGE_IS_VISIBLE) {
      clearTimeout(timer)
    }
    return () => timer && clearTimeout(timer)
  }, [props.status, value])


  return (
    <div className="global-timer">
      <Text mark>
        @(o･ｪ･o)@，您浏览页面的时长统计
        <Icon type="hourglass" theme="twoTone" twoToneColor="#FFC408"/>
      </Text>
      <div className="timer-content">
        {
          num2Time(value).map((time, index) => (
            <span key={index}>
              {time <= 9 ? `0${time}` : time}
              <span>{index < 2 ? ':' : ''}</span>
            </span>
          ))
        }
      </div>
    </div>
  )
}

export default Timer