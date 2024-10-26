<script lang="ts" setup>
import { PropType, computed, ref, useSlots } from 'vue'
import { NuitralClass } from '@nuitral/types'
import { NuitralTabProps } from '../tab/Tab.vue'
import { NuitralIcon } from '../index'

export interface NuitralTabsProps {
	items: NuitralTabProps[]
	classes?: NuitralClass
	selected?: number
	disabled?: boolean
}
const props = withDefaults(defineProps<NuitralTabsProps>(), {
	items: [],
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

	return nodes.reduce((acc: NuitralTabProps[], node: any) => {
		console.log(node)
		if (node.type.__name === 'Tab') {
			acc.push({
				...getDefaultValues(node.type.props),
				...node.props,
				component: node,
			} as NuitralTabProps)
		} else if (
			node.children &&
			node.children.every((child: any) => child.type.__name === 'Tab')
		) {
			node.children.forEach((child: any) => {
				acc.push({
					...getDefaultValues(child.type.props),
					...child.props,
					component: child,
				} as NuitralTabProps)
			})
		}
		console.log(acc)
		return acc
	}, [])
}

const onTabSelection = (selection: { item: TTab; index: number }) => {
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
			<NuitralIcon
				:icon="item.icon"
				v-if="item.icon && item.iconPosition === 'left'"
			></NuitralIcon>
			{{ item.label }}
			<NuitralIcon
				:icon="item.icon"
				v-if="item.icon && item.iconPosition === 'right'"
			></NuitralIcon>
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
