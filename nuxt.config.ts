// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss'],
	app: {
		pageTransition: { name: 'layout', mode: 'out-in' },
		head: {
			title: 'Nuxt Dojo',
			meta: [{ name: 'description', content: 'Everything about nuxt 3' }],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
				},
			],
		},
	},
	runtimeConfig: {
		currencyKey: process.env.CURRENCY_API_KEY,
		public: {},
	},
})
