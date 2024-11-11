<script setup lang="ts">
import { NuitralClass, NuitralIconPosition } from '@nuitral/types'
import { NuitralIconsId } from '@nuitral/icons'
import { VNode, Component } from 'vue'

export interface NuitralTabProps {
	label: string
	component: Component | null ,
	icon: NuitralIconsId | null
	iconPosition: NuitralIconPosition
	classes: NuitralClass
	disabled: boolean
	leftSide: VNode | null
	rightSide: VNode | null
	[key: string]: any
}

withDefaults(defineProps<Partial<NuitralTabProps>>(), {
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
		<slot name="leftSide" v-if="false"></slot>
		<slot></slot>
		<slot name="rightSide" v-if="false"></slot>
	</div>
</template>
