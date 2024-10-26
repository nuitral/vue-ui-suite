<script lang="ts" setup>
import { computed, ref, useSlots, VNode, VNodeChild, isVNode } from 'vue'

import { NuitralClass } from '@nuitral/types'
import { NuitralTabProps } from '../tab/Tab.vue'
import { NuitralIcon } from '../index'

export interface NuitralTabsProps {
	items: NuitralTabProps[]
	classes: NuitralClass
	selected: number
	disabled: boolean
}
const props = withDefaults(defineProps<Partial<NuitralTabsProps>>(), {
	items: () => [] as NuitralTabProps[],
	classes: '',
	selected: 0,
	disabled: false,
})

const emit = defineEmits(['onSelection'])

const slots = useSlots()

const indexSelected = ref(props.selected)

const allItems = computed(() => manageItems())

const getDefaultValues = (propDefinitions: Record<string, any>) => {
	const defaultValues: Record<string, any> = {}

	Object.keys(propDefinitions).forEach(key => {
		const prop = propDefinitions[key]
		if (prop.hasOwnProperty('default')) {
			defaultValues[key] =
				typeof prop.default === 'function' ? prop.default() : prop.default
		}
	})

	return defaultValues
}

const manageItems = (): NuitralTabProps[] => {
	if (props.items.length) return props.items
	const nodes = slots.default ? slots.default() : null
	if (!nodes) return []

	return nodes.reduce((acc: NuitralTabProps[], node) => {
		if (
			isVNode(node) &&
			typeof node.type === 'object' &&
			node.type &&
			(node.type as any).__name === 'Tab'
		) {
			acc.push({
				...getDefaultValues((node.type as any).props),
				...(node.props || {}),
				component: node,
				leftSide: node.children?.leftSide as VNodeChild,
				rightSide: node.children?.rightSide as VNodeChild,
			} as NuitralTabProps)
		} else if (
			isVNode(node) &&
			node.children &&
			Array.isArray(node.children) &&
			node.children.every(
				(child: any) => isVNode(child) && (child.type as any).__name === 'Tab'
			)
		) {
			const children = node.children as VNode[]
			children.forEach((child: VNode) => {
				acc.push({
					...getDefaultValues((child.type as any).props),
					...(child.props || {}),
					component: child,
					leftSide: child.children?.leftSide as VNodeChild,
					rightSide: child.children?.rightSide as VNodeChild,
				} as NuitralTabProps)
			})
		}
		return acc
	}, [])
}

const onTabSelection = (selection: {
	item: NuitralTabProps
	index: number
}) => {
	indexSelected.value = selection.index
	emit('onSelection', selection)
}
</script>
<template>
	<div class="nuitral-tabs" :class="[classes]">
		<div
			class="nuitral-tab"
			v-for="(item, index) of allItems"
			:key="'tab' + index"
			:class="[{ 'nuitral-tab-active': indexSelected === index }]"
			@click="onTabSelection({ item, index })"
		>
			<component :is="item.leftSide"></component>
			<NuitralIcon
				:icon="item.icon"
				v-if="item.icon && item.iconPosition === 'left'"
			></NuitralIcon>
			{{ item.label }}
			<NuitralIcon
				:icon="item.icon"
				v-if="item.icon && item.iconPosition === 'right'"
			></NuitralIcon>
			<component :is="item.rightSide"></component>
		</div>
	</div>
	<template v-for="(item, index) of allItems">
		<component :is="item.component" v-if="index === indexSelected"></component>
	</template>
</template>

<style lang="scss">
.nuitral-tabs {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;

	.nuitral-tab {
		height: 40px;
		display: flex;
		align-items: center;
		gap: 4px;
		padding: 8px 16px;
		box-sizing: border-box;
		cursor: pointer;
		transition: all 0.3s ease-in-out;

		.nuitral-icon {
			margin-bottom: 2px;
		}

		&.nuitral-tab-active {
			border-bottom: 2px solid red;
		}

		&:not(.nuitral-tab-active) {
			color: black;
			border-bottom: 2px solid transparent;
		}
	}
}

.nuitral-tab-content {
	padding-top: 1rem;
}
</style>
