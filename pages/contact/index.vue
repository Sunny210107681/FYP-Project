<script setup lang="ts">
const isFormLoading = ref(true);

useHead({
	title: 'Contact Us | AI Health',
	script: [
		{
			// Using Hubspot as the database to store the contact form data
// Right now it is loading the Hubspot script provided by the Hubpspot itself
// Then it calls that hubspot instance and then create a form based on the method on that instance
// The form is created based on the formID that we have created in our hubspot account

			src: 'https://js.hsforms.net/forms/embed/v2.js',
			onload: () => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				window.hbspt.forms.create({
					portalId: '146218000',
					formId: '6c2111ef-acd7-456f-b037-8b50654e6c91',
					region: 'na1',
					target: '#contact'
				});
				isFormLoading.value = false;
			}
		}
	]
});
</script>

<template>
	<div class="container pb-10">
		<h2 class="pt-10 text-center text-4xl font-medium">Contact us</h2>
		<div class="mt-5 grid gap-5 sm:mt-10 md:grid-cols-2">
			<div class="">
				<h1 class="text-4xl max-sm:my-5 max-sm:text-center">
					What can we help you with?
				</h1>
			</div>
			<div v-if="isFormLoading">
				<div
					class="mx-auto mt-10 size-10 animate-spin rounded-full border-4 border-primary border-b-transparent"
				/>
			</div>
			<div id="contact" />
		</div>
	</div>
</template>
