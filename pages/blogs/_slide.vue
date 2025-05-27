<script setup lang="ts">
defineProps<{
	image: string;
}>();
</script>

<template>
	<div class="embla__slide grid md:grid-cols-[2fr,1fr]">
		<img
			:src="image"
			class="h-full max-h-[400px] w-full object-cover"
		/>
		<div class="flex flex-col justify-end gap-3 p-5 pb-10">
			<h1 class="text-5xl font-medium">
				<slot name="heading" />
			</h1>
			<p class="font-medium">
				<slot name="label" />
			</p>
			<p class="mt-5 italic">
				<slot name="paragraph" />
			</p>
		</div>
	</div>
</template>

<style scoped>
.embla__slide {
	flex: 0 0 100%;
	min-width: 0;
}
</style>
