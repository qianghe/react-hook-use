import React from 'react'
import HOCDoc from './HOCDoc'

function HOCPageWrapper(config, DynamicComp) {
  return class HOCPage extends React.Component {
    render() {
      return (
        <HOCDoc {...config}>
          <DynamicComp />
        </HOCDoc>
      )
    }
  }
}

export default HOCPageWrapper