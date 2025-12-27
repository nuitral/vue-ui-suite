<script setup lang="ts">
import { NuitralIconPosition, NuitralClass } from '@nuitral/types'
import { useColorsAttributesValidator } from '../../composables'
import { computed, useAttrs } from 'vue'
import { NuitralIconsId } from '@nuitral/icons'

interface NuitralChipProps {
	icon?: NuitralIconsId | null
	iconPosition?: NuitralIconPosition
	classes: NuitralClass
}

withDefaults(defineProps<NuitralChipProps>(), {
	icon: null,
	iconPosition: 'left',
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
	return Object.keys(filteredAttrs).map(key => `nuitral-chip-${key}`)
})
</script>

<template>
	<div class="nuitral-chip" :class="[classes, backgroundColor]">
		<slot></slot>
	</div>
</template>
