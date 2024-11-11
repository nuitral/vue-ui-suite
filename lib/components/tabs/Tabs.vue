<script lang="ts" setup>
import {computed, ref, useSlots, VNode, VNodeChild, isVNode, useAttrs} from 'vue'

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

const allItems = computed(() => manageAllItems())

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

const manageTabs = (): NuitralTabProps[] => {
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

const manageItems = (): NuitralTabProps[] => {
  const defaultValues: NuitralTabProps = {
    label: '',
    component: null,
    icon: null,
    iconPosition: 'left',
    classes: '',
    disabled: false,
    leftSide: null,
    rightSide: null,
  }

  return props.items.map(item => ({
    ...defaultValues,
    ...item,
  }))
}

const manageAllItems = (): NuitralTabProps[] => {
	if (props.items.length) return manageItems()
	return manageTabs()
}

const onTabSelection = (selection: {
	item: NuitralTabProps
	index: number
}) => {
	indexSelected.value = selection.index
	emit('onSelection', selection)
}
import { useColorsAttributesValidator } from '../../composables'

const { isValidAttribute } = useColorsAttributesValidator()

const attrs = useAttrs()

const borderColor = computed(() => {
  const filteredAttrs: Record<string, any> = {}
  for (const key in attrs) {
    if (isValidAttribute(key)) {
      filteredAttrs[key] = attrs[key]
    }
  }
  return Object.keys(filteredAttrs).map(
      key => `nuitral-tab-${key}`
  )
})
</script>
<template>
	<div class="nuitral-tabs" :class="[classes, borderColor]">
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
