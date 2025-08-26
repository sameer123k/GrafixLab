
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/colorpallete"
  },
  {
    "renderMode": 2,
    "route": "/image-format-changer"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5810, hash: '6cb9f9df501c37d17ee614b0e28555411aa7737cea6ac47a7146af3f72ede161', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1782, hash: 'c8f1dab7082d1826ecba5ea654b516dd6be9b14470ad473e49ccf72e0c4d09a0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'colorpallete/index.html': {size: 20660, hash: 'c6fa0a043fe90d7417729ccd6e8f64a759c61e9877662a3f591f25d82faa3a68', text: () => import('./assets-chunks/colorpallete_index_html.mjs').then(m => m.default)},
    'index.html': {size: 21316, hash: '488999c2d07578c94ef499c3572dfae589f6b54e4e1704e6aee40312851dfdc1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'image-format-changer/index.html': {size: 20597, hash: 'd41bddc9106c76eeefad0e81300b27ac9b9a6aaa1b865920962496064555fd9d', text: () => import('./assets-chunks/image-format-changer_index_html.mjs').then(m => m.default)},
    'styles-SDBZV4GP.css': {size: 230949, hash: 'Ph+9IYpH6Nk', text: () => import('./assets-chunks/styles-SDBZV4GP_css.mjs').then(m => m.default)}
  },
};
