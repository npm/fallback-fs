'use strict'

require('./index.js').overrideNode(require(process.argv[1]))
require('spawn-wrap').runMain()
