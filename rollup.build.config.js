import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

import config from './rollup.config';

// config.plugins.push(
//     uglify({
//         compress: {
//             warnings: false,
//             drop_debugger: true,
//             drop_console: true
//         },
//         mangle: true
//     }, minify)
// );

export default {
    entry: 'src/index.ts',
    format: 'umd',
    moduleName: 'ReduxActionsPromise',
    dest: 'dist/index.js',
    plugins: config.plugins
};