
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
    'index.csr.html': {size: 5690, hash: '37ca19b8feae50b7cf19f7f79d8a12eea4936e541cb70e29064d000cfeebb665', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1662, hash: '46f45d226332be799b1aa9f80688a2821eb187ee932c45b2fba84a56c63b4d60', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21196, hash: 'a9f720d01769470457971bf844502f81da196dfed2fb78a8aaca1be3a9ed5ef8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'image-format-changer/index.html': {size: 20477, hash: '4e6525f81a8e6b2a08671ea42130f5f407f17ae9e278517549bbf982659c819c', text: () => import('./assets-chunks/image-format-changer_index_html.mjs').then(m => m.default)},
    'colorpallete/index.html': {size: 20540, hash: '086c9635d890b8a7b4f8793cd0c4f9dd5b90a0b12d6ed8fb5b9b083b4c480fcf', text: () => import('./assets-chunks/colorpallete_index_html.mjs').then(m => m.default)},
    'styles-SDBZV4GP.css': {size: 230949, hash: 'Ph+9IYpH6Nk', text: () => import('./assets-chunks/styles-SDBZV4GP_css.mjs').then(m => m.default)}
  },
};
