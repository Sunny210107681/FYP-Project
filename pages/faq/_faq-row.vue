<script setup lang="ts">
import { Collapse } from 'vue-collapsed';

const isOpen = ref(false);
</script>

<template>
	<div
		class="py-5"
		@click="isOpen = !isOpen"
	>
		<div class="grid cursor-pointer grid-cols-[1fr_20px] place-content-center">
			<h1 class="text-xl font-semibold">
				<slot name="question" />
			</h1>
			<Icon
				name="material-symbols:keyboard-arrow-down-rounded"
				size="26"
				class="transition duration-500"
				:class="isOpen && 'rotate-180'"
			/>
		</div>
		<Collapse
			:when="isOpen"
			class="transition-[height] duration-500"
		>
			<p class="text-white">
				<slot name="paragraph" />
			</p>
		</Collapse>
	</div>
</template>
