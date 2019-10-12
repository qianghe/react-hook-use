export default [{
  name: '三方实现',
  icon: {
    type: "smile",
    theme: "twoTone",
    twoToneColor: "#eb2f96"
  },
  children: [{
    name: 'react-page-visibility',
    path: '/library/pageview'
  }, {
    name: 'react-page-observable',
    path: '/library/pageobserv'
  }]
}, {
  name: 'Navigation Two',
  icon: {
    type: "meh",
    theme: "twoTone",
    twoToneColor: "#52c41a"
  },
  children: [{
    isGroup: true,
    name: 'item 1',
    children: [{
      name: 'Option 1'
    }, {
      name: 'Option 2'
    }]
  }, {
    isGroup: true,
    name: 'item 2',
    children: [{
      name: 'Option 3'
    }, {
      name: 'Option 4'
    }]
  }]
}, {
  name: 'Navigation One',
  icon: {
    type: "bug",
    theme: "twoTone"
  }
}]