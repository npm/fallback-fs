'use strict'

const wrap = require('spawn-wrap')

module.exports.overrideNode = overrideNode
function overrideNode (handler) {
  wrap([require.resolve('./wrap.js'), handler.handlerPath])
}
