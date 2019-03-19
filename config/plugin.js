'use strict'

// had enabled by egg
// exports.static = true;
exports.onerror = true
exports.logrotator = true
// mongodb插件配置

exports.mongoose = {
	enable: true,
	package: 'egg-mongoose'
}

exports.routerPlus = {
	enable: true,
	package: 'egg-router-plus'
}

exports.cors = {
	enable: true,
	package: 'egg-cors'
}

exports.alinode = {
	enable: true,
	package: 'egg-alinode'
}
