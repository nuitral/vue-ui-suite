<script lang="ts" setup>
import { computed, useAttrs } from 'vue'
import { NuitralButtonProps } from './types'
import { NuitralIcon } from '../index'

import { useColorsAttributesValidator } from '../../composables'

const { isValidAttribute } = useColorsAttributesValidator()

const attrs = useAttrs()

const backgroundColor = computed(() => {
	const filteredAttrs: Record<string, any> = {}
	for (const key in attrs) {
		if (isValidAttribute(key)) {
			filteredAttrs[key] = attrs[key]
		}
	}
	return Object.keys(filteredAttrs).map(
		key => `nuitral-button-background-${key}`
	)
})

withDefaults(defineProps<NuitralButtonProps>(), {
	type: 'button',
	icon: null,
	iconPosition: 'left',
	disabled: false,
	classes: '',
})
</script>
<template>
	<button
		class="nuitral-button"
		:class="[classes, backgroundColor, { disabled }]"
		:type="type"
		:disabled="disabled"
	>
		<slot name="leftSide"></slot>
		<NuitralIcon :icon="icon" v-if="icon && iconPosition === 'left'" />
		<slot></slot>
		<NuitralIcon :icon="icon" v-if="icon && iconPosition === 'right'" />
		<slot name="rightSide"></slot>
	</button>
</template>
