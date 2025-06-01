<script setup lang="ts">
import { computed, isVNode, useAttrs, useSlots, VNode, VNodeChild } from 'vue'
import { NuitralSelectProps } from './types'
import { NuitralOptionProps } from '../option/types'
import { NuitralOption } from '../index'

const emit = defineEmits(['update:modelValue'])

const slots = useSlots()
const attrs = useAttrs()

const props = withDefaults(defineProps<Partial<NuitralSelectProps>>(), {
	items: () => [] as Partial<NuitralOptionProps>[],
	modelValue: '',
	classes: '',
	selected: 0,
	disabled: false,
})

const model = computed({
	get: () => props.modelValue,
	set: value => {
		emit('update:modelValue', value)
	},
})

const manageItems = (): NuitralOptionProps[] => {
	const defaultValues: NuitralOptionProps = {
		option: '',
		component: NuitralOption,
		classes: '',
		disabled: false,
		leftSide: null,
		rightSide: null,
	}

	return props.items.map(item => ({
		...defaultValues,
		...item,
	})) as NuitralOptionProps[]
}

const getDefaultValues = (propDefinitions: Record<string, any>): NuitralOptionProps => {
	const defaultValues: Record<string, any> = {}

	Object.keys(propDefinitions).forEach(key => {
		const prop = propDefinitions[key]
		if (prop.hasOwnProperty('default')) {
			defaultValues[key] = typeof prop.default === 'function' ? prop.default() : prop.default
		}
	})

	return defaultValues as NuitralOptionProps
}

const manageOptions = (): NuitralOptionProps[] => {
	const nodes = slots.default ? slots.default() : null
	if (!nodes) return []

	return nodes.reduce((acc: NuitralOptionProps[], node) => {

		if (isVNode(node) && typeof node.type === 'object' && node.type && (node.type as any).__name === 'Option') {
			const children = node.children && typeof node.children === 'object' ? node.children : {}

			acc.push({
				...(getDefaultValues((node.type as any).props) as NuitralOptionProps),
				...(node.props || {}),
				component: node,
				leftSide: 'leftSide' in children ? (children.leftSide as VNodeChild | string) : null,
				rightSide: 'rightSide' in children ? (children.rightSide as VNodeChild | string) : null,
			} as NuitralOptionProps)
		} else if (
			isVNode(node) &&
			node.children &&
			Array.isArray(node.children) &&
			node.children.every((child: any) => isVNode(child) && (child.type as any).__name === 'Option')
		) {
			const children = node.children as VNode[]
			children.forEach((child: VNode) => {
				const childChildren = child.children && typeof child.children === 'object' ? child.children : {}

				acc.push({
					...(getDefaultValues((child.type as any).props) as NuitralOptionProps),
					...(child.props || {}),
					component: child,
					leftSide: 'leftSide' in childChildren ? (childChildren.leftSide as VNodeChild | string) : null,
					rightSide: 'rightSide' in childChildren ? (childChildren.rightSide as VNodeChild | string) : null,
				} as NuitralOptionProps)
			})
		}
		return acc
	}, [])
}

const manageAllItems = (): NuitralOptionProps[] => {
	if (props.items.length) return manageItems()
	return manageOptions()
}

const allItems = computed(() => manageAllItems())
</script>
<template>
	<div class="nuitral-select">{{ model }}</div>
	<div class="nuitral-options">
		<template v-for="(item, index) of allItems">
			<component :is="{ ...item.component }" v-bind="item"></component>
		</template>
	</div>
</template>
