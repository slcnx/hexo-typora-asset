'use strict'
const Hexo = require('hexo')
const hexo = new Hexo(process.cwd(), {})
// https://hexo.io/api/filter#before-post-render
hexo.extend.filter.register('before_post_render', require('./lib'), 10)
