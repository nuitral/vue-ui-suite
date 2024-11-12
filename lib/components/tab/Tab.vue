<script setup lang="ts">
import { NuitralTabProps } from './types'

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
