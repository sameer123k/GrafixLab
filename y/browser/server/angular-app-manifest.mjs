
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
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 21313, hash: '05f7664d88d99d21a56730a98e9ea12f48572b749fe618c7b48dc80585b82bae', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17204, hash: '1b28a646e45b1873f4d71bdb8135f1177909ffd1de8c8dc73951d0e4cf3ccb5f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 37229, hash: 'ee2d58dcbd0c059ac64a5fd949f565955fd99aa39a6bde72324c19fa46f50d6c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'colorpallete/index.html': {size: 36334, hash: '93f7f20c82728646b87e1677e20b67e929611203cf95d8c0b27a38ffd4082873', text: () => import('./assets-chunks/colorpallete_index_html.mjs').then(m => m.default)},
    'styles-3XTWVHQM.css': {size: 231030, hash: 'dfgbQjrZA/E', text: () => import('./assets-chunks/styles-3XTWVHQM_css.mjs').then(m => m.default)}
  },
};
