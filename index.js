'use strict'

// https://hexo.io/api/filter#before-post-render
hexo.extend.filter.register('after_post_render', require('./lib'), 10)
