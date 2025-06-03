<script lang="ts" setup>
import {
	NuitralClass,
} from '@nuitral/types/dist/cjs/shared'
import { useColorsAttributesValidator } from '../../composables'
import { computed, useAttrs } from 'vue'

interface NuitralCardProps {
	classes?: NuitralClass,
	hasShadow?: boolean

	[key: string]: any
}

const { isValidAttribute } = useColorsAttributesValidator()

const attrs = useAttrs()

const backgroundColor = computed(() => {
	const filteredAttrs: Record<string, any> = {}
	for (const key in attrs) {
		if (isValidAttribute(key) && !key.startsWith("border-")) {
			filteredAttrs[key] = attrs[key]
		}
	}
	if(!Object.keys(filteredAttrs).length) return 'nuitral-card-background-background'
	return Object.keys(filteredAttrs).map(key => `nuitral-card-background-${key}`)
})

const borderColor = computed(() => {
	const filteredAttrs: Record<string, any> = {}
	for (const key in attrs) {
		if (isValidAttribute(key) && key.startsWith("border-")) {
			filteredAttrs[key] = attrs[key]
		}
	}
	if(!Object.keys(filteredAttrs).length) return 'nuitral-card-border-primary'
	return Object.keys(filteredAttrs).map(key => `nuitral-card-${key}`)
})

withDefaults(defineProps<NuitralCardProps>(), {
	classes: '',
	hasShadow: false,
})
</script>
<template>
	<div
		class="nuitral-card"
		:class="[classes, backgroundColor, !hasShadow ? borderColor: '', {'has-shadow': hasShadow}]"
	>
		<div class="nuitral-card-header">
			<slot name="header"></slot>
		</div>
		<div class="nuitral-card-body">
			<slot></slot>
		</div>
		<div class="nuitral-card-footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>
