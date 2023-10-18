import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		title: 'PayPal Auth Assertion Header Demo',
		author: 'Carsten Boensel',
		github: {
			orgOrUser: 'CBoensel',
			repo: 'paypal-auth-assertion-header'
		}
	}
});

export default app;