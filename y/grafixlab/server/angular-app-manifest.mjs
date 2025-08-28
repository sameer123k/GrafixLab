
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
    "redirectTo": "/GrafixLab",
    "route": "/GrafixLab/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5698, hash: 'f8b797e85ba398f351df27bdfdb3920ec2142a3f267978defe6122d062a45b76', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1670, hash: '5a04b6fdf5dbf49c4f5ea0f2de80f21b56b7dbbcf112f9aba70d5edf5d700421', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21240, hash: '7075977b0e2c674db649e2ab16e708c0d1c390ab42a566a51f13cd98c1cfe85d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'colorpallete/index.html': {size: 21240, hash: '7075977b0e2c674db649e2ab16e708c0d1c390ab42a566a51f13cd98c1cfe85d', text: () => import('./assets-chunks/colorpallete_index_html.mjs').then(m => m.default)},
    'image-format-changer/index.html': {size: 21240, hash: '7075977b0e2c674db649e2ab16e708c0d1c390ab42a566a51f13cd98c1cfe85d', text: () => import('./assets-chunks/image-format-changer_index_html.mjs').then(m => m.default)},
    'styles-SDBZV4GP.css': {size: 230949, hash: 'Ph+9IYpH6Nk', text: () => import('./assets-chunks/styles-SDBZV4GP_css.mjs').then(m => m.default)}
  },
};
