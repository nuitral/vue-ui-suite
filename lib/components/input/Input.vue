<script setup lang="ts">
import { NuitralIcon } from '../index'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { NuitralInputProps } from './types'

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


const inputRef = ref<any>(null)

const computedClasses = () =>
	`${props.classes} ${props.disabled ? 'disabled' : ''}`.trim()

const handleValueChange = (e: CustomEvent) => {
	emit('update:modelValue', e.detail.value)
}

onMounted(() => {
	if (inputRef.value) {
		inputRef.value.addEventListener('value-change', handleValueChange)
	}
})

onBeforeUnmount(() => {
	if (inputRef.value) {
		inputRef.value.removeEventListener('value-change', handleValueChange)
	}
})

watch(
	() => props.modelValue,
	newVal => {
		if (inputRef.value && inputRef.value.value !== newVal) {
			inputRef.value.value = newVal
		}
	}
)
</script>

<template>
	<nuitral-core-input
		ref="inputRef"
		:value="modelValue"
		:type="props.type"
		:icon="props.icon"
		:iconposition="props.iconPosition"
		:placeholder="props.placeholder"
		:disabled="props.disabled"
		:classes="computedClasses()"
	/>
</template>
