<script setup lang="ts">
import { NuitralOptionProps } from './types'

withDefaults(defineProps<Partial<NuitralOptionProps>>(), {
	option: '',
	classes: '',
	disabled: false,
	component: null,
	leftSide: null,
	rightSide: null,
})
</script>
<template>
	<div class="nuitral-option">
		<slot name="leftSide"></slot>
		<div class="nuitral-option-option">{{ option }}</div>
		<slot></slot>
		<slot name="rightSide"></slot>
	</div>
</template>
