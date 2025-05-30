<script setup lang="ts">
import FaqRow from './_faq-row.vue';

useHead({ title: 'FAQ | AI Health' });
</script>

<template>
	<main class="border-t border-white bg-blue-950 pb-10 text-white">
		<div class="container grid gap-10 pt-5 sm:grid-cols-2">
			<div>
				<h1 class="mt-5 text-4xl font-semibold">
					Your answers to popular questions
				</h1>
			</div>
			<div class="divide-y-1 divide-white">
				<FaqRow>
					<template #question>What is the AI chatbot designed to do?</template>
					<template #paragraph>
						The chatbot provides general mental health information, coping strategies, and access to useful resources.
						It is not a substitute for professional medical advice.
					</template>
				</FaqRow>
				<FaqRow>
					<template #question>Is the chatbot available at all times?</template>
					<template #paragraph>
						Yes, the chatbot operates 24/7 
						and is accessible from any device with an internet connection.
					</template>
				</FaqRow>
				<FaqRow>
					<template #question>Do I need to sign up to use the chatbot?</template>
					<template #paragraph>
						No registration is required. 
						You can start chatting instantly without creating an account.
					</template>
				</FaqRow>
				<FaqRow>
					<template #question>Can the chatbot provide emergency assistance?</template>
					<template #paragraph>
						No, the chatbot is not equipped to handle emergencies.
						In urgent situations, users should contact local emergency services or a professional helpline.
					</template>
				</FaqRow>
				<FaqRow>
					<template #question>Is my chat data stored or shared?</template>
					<template #paragraph>
						Conversations are confidential and used only to improve the service. 
						No personal data is stored or shared without consent.
					</template>
				</FaqRow>
			</div>
		</div>
	</main>
</template>
