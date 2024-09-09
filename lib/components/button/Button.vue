<script lang="ts" setup>
import {
	NuitralButtonType,
	NuitralClass,
	NuitralIconPosition,
} from '@nuitral/types'

import { NuitralIconsId } from '@nuitral/icons'

import { computed, PropType, useAttrs } from 'vue'
import { NuitralIcon } from '../index'

import { useColorsAttributesValidator } from '../../utils'

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

defineProps({
	classes: {
		type: String as PropType<NuitralClass>,
		default: '',
	},
	type: {
		type: String as PropType<NuitralButtonType>,
		default: 'button',
	},
	icon: {
		type: String as PropType<NuitralIconsId>,
		default: '',
	},
	iconPosition: {
		type: String as PropType<NuitralIconPosition>,
		default: 'left',
	},
	disabled: {
		type: Boolean,
		default: false,
	},
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
