# vue-template
> boilerplate for vue application with `webpack`, `babel`, etc.

## Core Dependencies
- `vue`
- `webpack`
- `babel`

## Webpack Plugins
- `vue-loader/lib/plugin`
- `html-webpack-plugin`
    - append bundle code to html
- `webpack.HotModuleReplacementPlugin()`
    - HMR(Hot Module Replacement)

## NPM Commands
- `npm run clean`
    - remove `dist` derectory
- `npm run build`
    - bundle source code & input to `dist` directory
- `npm run serve`
    - serve `webpack-dev-server` on port 3000