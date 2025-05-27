<script setup lang="ts">
defineProps<{ labelColor?: string }>();
</script>

<template>
	<div
		class="space-y-5 rounded-3xl border border-gray-600 p-8 px-5 text-center"
	>
		<div
			class="inline-block rounded-xl bg-primary px-5 py-2 font-semibold text-white"
			:style="{ backgroundColor: labelColor }"
		>
			<slot name="label" />
		</div>
		<h1 class="text-3xl">
			<slot name="heading" />
		</h1>
		<p class="text-start"><slot name="paragraph" /></p>
	</div>
</template>
