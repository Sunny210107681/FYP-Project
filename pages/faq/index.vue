<script setup lang="ts">
import FaqRow from './_faq-row.vue';

useHead({ title: 'FAQ | AI Health' });
</script>

<template>
	<main class="border-t border-white bg-primary pb-10 text-white">
		<div class="container grid gap-10 pt-5 sm:grid-cols-2">
			<div>
				<h1 class="mt-5 text-4xl font-semibold">
					Your answers to popular questions
				</h1>
			</div>
			<div class="divide-y-1 divide-white">
				<FaqRow>
					<template #question>This is a question</template>
					<template #paragraph>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
						architecto eum ipsum at sit, quis consequuntur facere. Labore,
						cumque magnam quos officia quaerat dolorem aliquid, voluptates
						eveniet modi ab libero.
					</template>
				</FaqRow>
				<FaqRow>
					<template #question>This is a question</template>
					<template #paragraph>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
						architecto eum ipsum at sit, quis consequuntur facere. Labore,
						cumque magnam quos officia quaerat dolorem aliquid, voluptates
						eveniet modi ab libero.
					</template>
				</FaqRow>
				<FaqRow>
					<template #question>This is a question</template>
					<template #paragraph>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
						architecto eum ipsum at sit, quis consequuntur facere. Labore,
						cumque magnam quos officia quaerat dolorem aliquid, voluptates
						eveniet modi ab libero.
					</template>
				</FaqRow>
				<FaqRow>
					<template #question>This is a question</template>
					<template #paragraph>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
						architecto eum ipsum at sit, quis consequuntur facere. Labore,
						cumque magnam quos officia quaerat dolorem aliquid, voluptates
						eveniet modi ab libero.
					</template>
				</FaqRow>
				<FaqRow>
					<template #question>This is a question</template>
					<template #paragraph>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
						architecto eum ipsum at sit, quis consequuntur facere. Labore,
						cumque magnam quos officia quaerat dolorem aliquid, voluptates
						eveniet modi ab libero.
					</template>
				</FaqRow>
			</div>
		</div>
	</main>
</template>
