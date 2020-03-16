let Encore = require('@symfony/webpack-encore')

Encore
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/js/app.js')
    .enablePostCssLoader()
    .configureLoaderRule('css', loaderRule => {
        loaderRule.test = /\.(css|p(ost)?css)$/
    })

module.exports = Encore.getWebpackConfig()
