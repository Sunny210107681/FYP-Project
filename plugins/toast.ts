import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin({
	name: 'toast',
	setup(nuxtApp) {
		nuxtApp.vueApp.use(Vue3Toastify, {
			limit: 3,
			theme: 'colored'
		} as ToastContainerOptions);
	}
});
