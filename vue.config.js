const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname, dir)
}
module.exports = {
	css: {
		extract: true,
    },
    productionSourceMap: false,
	configureWebpack : config => {
        Object.assign( config , {
            // output: {
            //     libraryExport: 'default'
            // }
        });
    },
}
