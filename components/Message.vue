<script setup lang="ts">
defineProps<{ message: { by: string; message: string } }>();
</script>

<template>
	<div
		class="flex"
		:class="message.by == 'bot' ? 'justify-start' : 'justify-end'"
	>
		<div
			class="rounded-xl px-4 py-2 shadow-md"
			:class="
				message.by == 'client'
					? 'ml-auto max-w-[80%] bg-blue-500 text-white'
					: 'max-w-[80%] bg-gray-200 text-gray-800'
			"
		>
			{{ message.message }}
		</div>
	</div>
</template>
