const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // '@Layouts': path.resolve(__dirname, 'src/components/Layouts/'),
                // '@Inputs': path.resolve(__dirname, 'src/components/Input/'),
                '@': path.resolve(__dirname, 'src/'),
            }
        },
    }
}