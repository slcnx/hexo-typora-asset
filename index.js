// https://hexo.io/api/filter#before-post-render
hexo.extend.filter.register('before_post_render', require('./lib').default);

hexo.extend.filter.unregister('before_post_render', require('./lib').default);