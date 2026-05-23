<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { NuitralListProps } from '@nuitral/types'

const props = withDefaults(defineProps<NuitralListProps>(), {
    direction: 'horizontal',
    classes: '',
    justify: 'start',
})

const computedClasses = computed(() => `${props.classes} ${props.direction}`)

const slots = useSlots()
</script>
<template>

    <nuitral-core-list :classes="[computedClasses]" :justify="justify">
        <div slot="start" v-if="slots.start">
            <slot name="start"></slot>
        </div>
        <div slot="default">
            <slot></slot>
        </div>
        <div slot="end" v-if="slots.end">
            <slot name="end"></slot>
        </div>

    </nuitral-core-list>
</template>


