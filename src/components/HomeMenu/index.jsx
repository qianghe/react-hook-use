import React from 'react'
import isEmpty from 'lodash.isempty'
import { withRouter } from 'react-router'
import { Menu, Icon } from 'antd'

const { SubMenu, Item, ItemGroup } = Menu
const renderIcon = icon => isEmpty(icon) ? '' : (<Icon {...icon} />)

const renderItem = ({ name, icon, path }, key) => (
  <Item key={key} path={path}>
    { renderIcon(icon) }
    { name }
  </Item>
)

const renderMenuItems = (children, key) => children.map((child, index) => {
  const { isGroup, name } = child
  // key值自增
  const itemKey = `${isEmpty(key) ? '' : key}${isEmpty(key) ? '' : '.'}${index + 1}`
  if (isGroup) {
    return (
      <ItemGroup key={itemKey} title={name}>
        {renderMenuItems(child.children, itemKey)}
      </ItemGroup>
    )
  } else if (isEmpty(child.children)) {
    return renderItem(child, itemKey)
  }
  return renderSubMenu(child, itemKey)
})

const renderSubMenu = ({ name, icon, children }, key) => (
  <SubMenu
    key={key}
    title={
      <span>
        { renderIcon(icon) }
        <span>{name}</span>
      </span>
    }
  >
    {renderMenuItems(children, key)}
  </SubMenu>
)

class MainMenu extends React.Component {
  state = {
    selectedKeys: [],
    openKeys: []
  }
  // 通过config寻找第一个可以展开的
  componentDidMount() {
    const { config } = this.props
    const [ firstItem ] = config 
    const { children } = firstItem
    let selectKey = 0
    let openKey = 0
    let currentPath = ''

    if (isEmpty(children)) {
      selectKey = '1'
      currentPath = firstItem.path
    } else {
      const [ firstChild ] = children
      const { isGroup, path } = firstChild
      selectKey = isGroup ? '1.1.1' : '1.1'
      openKey = '1'
      currentPath = path
    }
    this.setState({
      selectedKeys: [selectKey],
      openKeys: [openKey]
    })
    currentPath && this.props.history.push(currentPath)
  }
  handleClick = event => {
    const { key, item } = event
    const selectPath = item?.props?.path
    this.setState({
      selectedKeys: key ? [key] : []
    })
    if (!selectPath || this.props.location.pathname === selectPath) return
   this.props.history.push(selectPath)
  }
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    this.setState({
      openKeys: latestOpenKey ? [latestOpenKey] : [],
    })
  }
  render() {
    const { config } = this.props
    const { selectedKeys, openKeys } = this.state
    return (
      <Menu
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onClick={this.handleClick}
        onOpenChange={this.onOpenChange}
        mode="inline"
        style={{ width: 300, height: '100vh' }}
      >
        {renderMenuItems(config)}
      </Menu>
    )
  }
}

export default withRouter(MainMenu)
