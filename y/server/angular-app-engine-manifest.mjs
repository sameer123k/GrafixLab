
export default {
  basePath: 'GrafixLab',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
