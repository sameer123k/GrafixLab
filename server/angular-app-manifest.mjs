
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://sameer123k.github.io/grafixlab',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/grafixlab"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 21350, hash: 'eaef8a03f3ec0ff1310ef54dc852f101e1e528a1a845ad385a0783df5914e62e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17241, hash: '358c16f728528e28dd78757b4c0f4bfcde5e07883d73404f26c36a656555a38f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 36628, hash: '90c2e032f9b80006c75b94388213fa66e7ab70644a972101d4ee70dc8c55c111', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3XTWVHQM.css': {size: 231030, hash: 'dfgbQjrZA/E', text: () => import('./assets-chunks/styles-3XTWVHQM_css.mjs').then(m => m.default)}
  },
};
