<script lang="ts" setup>
import { computed, useSlots } from 'vue'

type ListDirection = 'vertical' | 'horizontal'

interface ListProps {
    direction?: ListDirection
    classes?: string[] | string
}

const props = withDefaults(defineProps<ListProps>(), {
    direction: 'horizontal',
    classes: '',
})

const computedClasses = computed(() => `${props.classes} ${props.direction}`)

const slots = useSlots()
</script>
<template>
    <div class="nuitral-list" :class="[computedClasses]">
        <div class="start">
            <slot name="start" v-if="slots.start" />
        </div>
        <div class="default">
            <slot />
        </div>
        <div class="end">
            <slot name="end" v-if="slots.end" />
        </div>
    </div>
</template>

<style lang="scss">
.nuitral-list {
	display: flex;
	align-items: center;
	justify-content: space-between;

	&.horizontal {
		flex-direction: row;
	}

	&.vertical {
		flex-direction: column;
		height: 100%;
	}

	.start,
	.end {
		flex: 0 0 auto;
	}

	.default {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: start;
	}
}
</style>
