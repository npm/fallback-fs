'use strict'

module.exports.overrideNode = overrideNode
function overrideNode (handler) {
  require('./fs.js').overrideNode(handler)
  require('./child_process.js').overrideNode(handler)
  require('./module.js').overrideNode()
}
