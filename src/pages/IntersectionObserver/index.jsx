import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import HOCPage from '@components/HOCPage'
import CuteEmoji from '@codepen/CuteEmoji'
import CuteDog from '@codepen/CuteDog'
import { Icon } from 'antd'
import configs from '../config/index.js'
import './index.less'

const CONFIG_NAME = 'interobserver'
const icons = [{
  type: 'smile',
  color: '#F7C242'
}, {
  type: 'meh',
  color: '#7BA23F'
}, {
  type: 'frown',
  color: '#D05A6E'
}]
function Container() {
  const [emoji, setEmoji] = useState({
    type: 'love',
    text: 'Two Dog is Not Alone~~'
  })
  const [dogRef, inView] = useInView({})

  useEffect(() => {
    setEmoji({
      type: inView ? 'love' : 'angry',
      text: inView ? 'Two Dog is Not Alone~~' : 'But Leave One Dog is Cruel!!'
    })
  }, [inView])

  return (
    <div className="intersection-observer">
      <div className="show">
        <div ref={dogRef} className="dog-container"><CuteDog /></div>
        <p>滚动页面，下面更精彩...</p>
        <ul className="icon-list">
          {
            icons.map(({ type: iconType, color}, setIndex) => [1, 2, 3].map((val, index) => (
              <li key={`${setIndex}.${index}`}>
                <Icon
                  type={iconType}
                  style={{ fontSize: '24px' }}
                  theme="twoTone"
                  twoToneColor={color}
                />
              </li>
            )))
          }
          <li>让你滚，狗子丢了吧～～</li>
        </ul>
      </div>
      <div className="result">
        <p>{emoji.text}</p>
        <CuteEmoji type={emoji.type} />
      </div>
    </div>
  )
}

export default HOCPage(configs.get(CONFIG_NAME), Container)