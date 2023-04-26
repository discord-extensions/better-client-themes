/** @type {import('bd-scss/lib/config').Config} */
export default {
    fileName: 'better-client-themes',
    baseImport: 'https://discord-extensions.github.io/better-client-themes/src/better-client-themes.css',
	meta: {
        name: 'Better Client Themes',
        author: 'LuckFire',
        version: '0.1.0',
        description: 'Improves Discord\'s client themes.',
        source: 'https://github.com/discord-extensions/better-client-themes',
        invite: 'vYdXbEzqDs',
        authorId: '399416615742996480'
	},
    dist: {
        target: 'src/source.scss',
        output: 'clients'
    },
    base: {
        target: 'src/source.scss',
        output: 'src'
    },
    dev: {
        target: 'src/source.scss'
    }
};