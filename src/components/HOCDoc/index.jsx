import React from 'react'
import { Typography, Alert, Divider, Icon } from 'antd'
import './index.less'

const { Title, Text } = Typography;

const AlertInfoTitle= (contentType = 'api') => {
  const titleMap = {
    'api': 'API',
    'code': 'CODE DEMO'
  }
  return (
    <Text strong>{titleMap[contentType] || 'Nothing'}</Text>
  )
}
const Doc = (props) => {
  const {
    title,
    github,
    mdn,
    apiInfo = 'No Introduction ╮(－_－)╭',
    demoInfo = 'No Introduction ╮(－_－)╭'
  } = props

  return (
    <div className="global-doc">
      {/* API Title */}
      <Title level={2}>{title || 'Title'}</Title>
      {/* API content description */}
      <Alert
        message={AlertInfoTitle('api')}
        description={apiInfo}
        type="info"
      />
      <Divider orientation="left">
        <Icon type="bulb" theme="twoTone" twoToneColor="#B9887D" />&nbsp;API LINK
      </Divider>
      {/* API LINK: mdn & github */}
      <ul>
        <li>
          <p><Icon type="medium" /> MDN </p>
          {/* info: https://mathiasbynens.github.io/rel-noopener/#hax */}
          <a href={mdn} rel="noopener noreferrer" target="_blank">{mdn}</a>
        </li>
        <li>
          <p><Icon type="github" /> Github </p>
          <a href={github} rel="noopener noreferrer" target="_blank">{github}</a>
        </li>
      </ul>
      {/* API DEMO */}
      <Divider orientation="left">
        <Icon type="code" theme="twoTone" twoToneColor="#B481BB" /> DEMO
      </Divider>
      {/* CODE DEMO Description */}
      <Alert
        message={AlertInfoTitle('code')}
        description={demoInfo}
        type="success"
      />
      {props.children}
    </div>
  )
}

export default Doc
