<script setup lang="ts">
import { NuitralClass, NuitralIconPosition } from '@nuitral/types'
import { NuitralIconsId } from '@nuitral/icons'

export interface NuitralTabProps {
	label: string
	component: any
	icon: NuitralIconsId | null
	iconPosition: NuitralIconPosition
	classes: NuitralClass
	disabled: boolean
}

const props = withDefaults(defineProps<NuitralTabProps>(), {
	label: '',
	component: null,
	icon: null,
	iconPosition: 'left',
	classes: '',
	disabled: false,
})
</script>
<template>
	<div class="nuitral-tab-content" :class="classes">
		<slot></slot>
	</div>
</template>
