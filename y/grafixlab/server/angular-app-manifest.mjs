
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 21313, hash: '7f7c6c05755bb23595f84a358cb9c8715a6ea31871198e3a10f44d10eb42b59a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17204, hash: '421b40b09117620d1701ea8ed5ca8f73e71542e53f65e1a44cd491fec606473e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 36591, hash: '7d4d22f19682280a260efe147e1c45b454ae93a95c2ca48077c55b12c3d9dcec', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3XTWVHQM.css': {size: 231030, hash: 'dfgbQjrZA/E', text: () => import('./assets-chunks/styles-3XTWVHQM_css.mjs').then(m => m.default)}
  },
};
