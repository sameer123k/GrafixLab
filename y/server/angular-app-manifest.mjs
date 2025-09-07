
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'GrafixLab',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/GrafixLab"
  },
  {
    "renderMode": 2,
    "route": "/GrafixLab/colorpallete"
  },
  {
    "renderMode": 2,
    "route": "/GrafixLab/image-format-changer"
  },
  {
    "renderMode": 2,
    "route": "/GrafixLab/image-compressor"
  },
  {
    "renderMode": 2,
    "redirectTo": "/GrafixLab",
    "route": "/GrafixLab/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5698, hash: 'd3dec15a29adc867926425ec211665ac08d2c3be2d552221a850c181b594d189', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1670, hash: '97d790328591e7e2b76ba6a63b2adbdbea9ee0c19d02541ede070ad6774e82d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21140, hash: '0ad76ac29b12169703dedaf5efc7b46d67c4c296b445c143a79d2e1fd63f9086', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'colorpallete/index.html': {size: 21140, hash: '0ad76ac29b12169703dedaf5efc7b46d67c4c296b445c143a79d2e1fd63f9086', text: () => import('./assets-chunks/colorpallete_index_html.mjs').then(m => m.default)},
    'image-format-changer/index.html': {size: 21140, hash: '0ad76ac29b12169703dedaf5efc7b46d67c4c296b445c143a79d2e1fd63f9086', text: () => import('./assets-chunks/image-format-changer_index_html.mjs').then(m => m.default)},
    'image-compressor/index.html': {size: 21140, hash: '0ad76ac29b12169703dedaf5efc7b46d67c4c296b445c143a79d2e1fd63f9086', text: () => import('./assets-chunks/image-compressor_index_html.mjs').then(m => m.default)},
    'styles-SDBZV4GP.css': {size: 230949, hash: 'Ph+9IYpH6Nk', text: () => import('./assets-chunks/styles-SDBZV4GP_css.mjs').then(m => m.default)}
  },
};
