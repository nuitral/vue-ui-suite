<script setup lang="ts">
import { NuitralBoxProps } from '@nuitral/types'
import { useColorsAttributesValidator } from '../../hooks'
import { computed, useAttrs } from 'vue'
withDefaults(defineProps<NuitralBoxProps>(), {
	title: '',
	description: '',
	classes: '',
})
const { isValidAttribute } = useColorsAttributesValidator()

const attrs = useAttrs()

const backgroundColor = computed(() => {
	const filteredAttrs: Record<string, any> = {}
	for (const key in attrs) {
		if (isValidAttribute(key)) {
			filteredAttrs[key] = attrs[key]
		}
	}
	return Object.keys(filteredAttrs).map(key => `nuitral-box-background-${key}`)
})
</script>

<template>
	<div class="nuitral-box" :class="[classes, backgroundColor]">
		<div class="nuitral-box-title">{{ title }}</div>
		<div>{{ description }}</div>
	</div>
</template>
