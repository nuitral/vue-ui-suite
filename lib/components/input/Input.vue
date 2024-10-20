<script setup lang="ts">
import { NuitralIcon } from '../index'
import { computed } from 'vue'
import {NuitralInputProps} from "./types";

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<NuitralInputProps>(), {
	modelValue: '',
	type: 'text',
  placeholder: '',
	icon: null,
	iconPosition: 'left',
	disabled: false,
	classes: '',
})

const model = computed({
	get: () => props.modelValue,
	set: value => {
		emit('update:modelValue', value)
	},
})
</script>
<template>
	<div class="nuitral-input nuitral-input-text-color" :class="[classes, { disabled }]">
		<NuitralIcon :icon="icon" v-if="icon && iconPosition === 'left'" />
		<input v-model="model" :disabled="disabled" :placeholder="placeholder" :type="type" />
		<NuitralIcon :icon="icon" v-if="icon && iconPosition === 'right'" />
	</div>
</template>