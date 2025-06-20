import type { NuxtPage } from 'nuxt/schema';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/fonts', '@nuxt/icon'],
	hooks: {
		'pages:extend': function (pages) {
			function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
				const pagesToRemove: NuxtPage[] = [];

				for (const page of pages) {
					if (page.file?.match(pattern)) {
						pagesToRemove.push(page);
					} else {
						removePagesMatching(pattern, page.children);
					}
				}

				for (const page of pagesToRemove) {
					pages.splice(pages.indexOf(page), 1);
				}
			}

			removePagesMatching(/\/_.*?/, pages);
		}
	},
	fonts: {
		processCSSVariables: true
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	}
});
